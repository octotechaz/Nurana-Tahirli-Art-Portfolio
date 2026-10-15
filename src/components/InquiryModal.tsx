import React, { useState } from 'react';
import { Artwork, Language } from '../data/portfolioData';
import { X, Send, CheckCircle2, ShieldCheck } from 'lucide-react';

interface InquiryModalProps {
  isOpen: boolean;
  selectedArtwork: Artwork | null;
  language: Language;
  onClose: () => void;
}

export const InquiryModal: React.FC<InquiryModalProps> = ({
  isOpen,
  selectedArtwork,
  language,
  onClose,
}) => {
  const [inquiryType, setInquiryType] = useState<string>(
    selectedArtwork ? 'acquisition' : 'commission'
  );
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('');
  const [message, setMessage] = useState(
    selectedArtwork
      ? language === 'en'
        ? `I am interested in acquiring "${selectedArtwork.title.en}" (${selectedArtwork.dimensions}). Please provide acquisition details and archival shipping arrangements.`
        : `"${selectedArtwork.title.az}" (${selectedArtwork.dimensions}) əsərini əldə etməkdə maraqlıyam. Zəhmət olmasa şərtlər və çatdırılma haqqında məlumat verin.`
      : ''
  );
  const [submitted, setSubmitted] = useState(false);
  const [refCode, setRefCode] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;
    const generatedRef = `NTH-${Math.floor(1000 + Math.random() * 9000)}-${new Date().getFullYear()}`;
    setRefCode(generatedRef);
    setSubmitted(true);
  };

  const resetForm = () => {
    setSubmitted(false);
    setName('');
    setEmail('');
    setCity('');
    setMessage('');
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 sm:p-6 animate-fadeIn overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-label="Collector & Studio Inquiry"
    >
      <div className="relative w-full max-w-xl bg-[#FDFBF7] rounded-2xl overflow-hidden shadow-2xl border border-surface my-auto">
        {/* Header */}
        <div className="p-6 bg-surface/40 border-b border-surface flex items-center justify-between">
          <div>
            <span className="font-mono text-[10px] uppercase tracking-widest text-accent font-semibold block mb-1">
              {language === 'en' ? 'Studio & Collector Desk' : 'Emalatxana & Kolleksiya Şöbəsi'}
            </span>
            <h2 className="font-display italic text-2xl sm:text-3xl font-bold text-text">
              {language === 'en' ? 'Direct Studio Inquiry' : 'Birbaşa Əlaqə Sorğusu'}
            </h2>
          </div>

          <button
            type="button"
            onClick={resetForm}
            className="p-2 rounded-full bg-surface hover:bg-surface/80 text-text transition-colors cursor-pointer"
            aria-label="Close inquiry modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8">
          {submitted ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-12 h-12 rounded-full bg-tag/20 text-tag flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <h3 className="font-display italic text-2xl font-bold text-text">
                {language === 'en' ? 'Inquiry Transmitted' : 'Sorğu Qəbul Edildi'}
              </h3>
              <p className="text-sm text-text/80 leading-relaxed font-sans max-w-md mx-auto">
                {language === 'en'
                  ? 'Thank you for your note. The studio curator will review your message and reply via email within 48 hours.'
                  : 'Müraciətiniz üçün təşəkkür edirik. Emalatxananın kuratoru məktubunuzu nəzərdən keçirib 48 saat ərzində e-poçt vasitəsilə cavablandıracaq.'}
              </p>
              <div className="p-3 bg-surface/40 rounded-lg inline-block border border-surface text-xs font-mono text-text/70">
                <span className="text-text/50 uppercase tracking-widest mr-2">
                  {language === 'en' ? 'Reference Code:' : 'Qeydiyyat Kodu:'}
                </span>
                <span className="font-bold text-accent">{refCode}</span>
              </div>
              <div className="pt-4">
                <button
                  type="button"
                  onClick={resetForm}
                  className="px-6 py-2.5 rounded-lg bg-accent text-[#FDFBF7] font-mono text-xs uppercase tracking-wider font-semibold hover:bg-accent/90 transition-colors cursor-pointer"
                >
                  {language === 'en' ? 'Return to Portfolio' : 'Portfeli Baxışına Qayıt'}
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Selected artwork context pill if available */}
              {selectedArtwork && (
                <div className="p-3 rounded-xl bg-surface/30 border border-surface flex items-center gap-3">
                  <img
                    src={selectedArtwork.imageUrl}
                    alt={selectedArtwork.altText}
                    className="w-12 h-12 object-cover rounded-md"
                  />
                  <div className="min-w-0 flex-1">
                    <span className="font-mono text-[10px] text-accent uppercase tracking-wider block">
                      {language === 'en' ? 'Referenced Artwork' : 'İstinad Edilən Əsər'}
                    </span>
                    <h4 className="font-display italic font-semibold text-sm text-text truncate">
                      {selectedArtwork.title[language]}
                    </h4>
                    <p className="font-mono text-[11px] text-text/60">{selectedArtwork.dimensions}</p>
                  </div>
                </div>
              )}

              {/* Inquiry Type Radio / Tabs */}
              <div>
                <label className="block font-mono text-xs uppercase tracking-wider text-text/70 mb-2">
                  {language === 'en' ? 'Nature of Inquiry' : 'Müraciətin Növü'}
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs font-mono">
                  <button
                    type="button"
                    onClick={() => setInquiryType('acquisition')}
                    className={`p-2 rounded-lg border text-left transition-colors cursor-pointer ${
                      inquiryType === 'acquisition'
                        ? 'border-accent bg-accent/10 text-accent font-semibold'
                        : 'border-surface bg-surface/20 text-text/70 hover:text-text'
                    }`}
                  >
                    {language === 'en' ? 'Artwork Acquisition' : 'Əsərin Alınması'}
                  </button>
                  <button
                    type="button"
                    onClick={() => setInquiryType('commission')}
                    className={`p-2 rounded-lg border text-left transition-colors cursor-pointer ${
                      inquiryType === 'commission'
                        ? 'border-accent bg-accent/10 text-accent font-semibold'
                        : 'border-surface bg-surface/20 text-text/70 hover:text-text'
                    }`}
                  >
                    {language === 'en' ? 'Private Commission' : 'Fərdi Sifariş'}
                  </button>
                  <button
                    type="button"
                    onClick={() => setInquiryType('editorial')}
                    className={`p-2 rounded-lg border text-left transition-colors cursor-pointer ${
                      inquiryType === 'editorial'
                        ? 'border-accent bg-accent/10 text-accent font-semibold'
                        : 'border-surface bg-surface/20 text-text/70 hover:text-text'
                    }`}
                  >
                    {language === 'en' ? 'Exhibition / Press' : 'Sərgi / Mətbuat'}
                  </button>
                </div>
              </div>

              {/* Collector Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-mono text-[11px] uppercase tracking-wider text-text/70 mb-1">
                    {language === 'en' ? 'Your Name *' : 'Adınız *'}
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Elena Rostova"
                    className="w-full px-3 py-2 text-sm bg-surface/30 border border-surface rounded-lg focus:outline-hidden focus:border-accent text-text"
                  />
                </div>
                <div>
                  <label className="block font-mono text-[11px] uppercase tracking-wider text-text/70 mb-1">
                    {language === 'en' ? 'Email Address *' : 'E-poçt Ünvanı *'}
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="curator@gallery.com"
                    className="w-full px-3 py-2 text-sm bg-surface/30 border border-surface rounded-lg focus:outline-hidden focus:border-accent text-text"
                  />
                </div>
              </div>

              <div>
                <label className="block font-mono text-[11px] uppercase tracking-wider text-text/70 mb-1">
                  {language === 'en' ? 'City / Institutional Affiliation' : 'Şəhər / Qalereya və ya Təşkilat'}
                </label>
                <input
                  type="text"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  placeholder="e.g. Baku, Paris, Berlin, New York"
                  className="w-full px-3 py-2 text-sm bg-surface/30 border border-surface rounded-lg focus:outline-hidden focus:border-accent text-text"
                />
              </div>

              <div>
                <label className="block font-mono text-[11px] uppercase tracking-wider text-text/70 mb-1">
                  {language === 'en' ? 'Note / Project Specifications' : 'Qeyd / Layihə Təfərrüatları'}
                </label>
                <textarea
                  rows={4}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-3 py-2 text-sm bg-surface/30 border border-surface rounded-lg focus:outline-hidden focus:border-accent text-text resize-none"
                />
              </div>

              <div className="flex items-center gap-2 pt-2 text-[11px] font-mono text-text/60">
                <ShieldCheck className="w-3.5 h-3.5 text-tag" />
                <span>
                  {language === 'en'
                    ? 'Discretion assured. Private collection provenance honored.'
                    : 'Məxfilik təmin edilir. Şəxsi kolleksiyanın mənşəyinə hörmət olunur.'}
                </span>
              </div>

              <div className="pt-3">
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-lg bg-accent text-[#FDFBF7] font-mono text-xs uppercase tracking-wider font-semibold hover:bg-accent/90 transition-colors shadow-xs cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{language === 'en' ? 'Transmit Inquiry to Studio' : 'Sorğunu Göndər'}</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

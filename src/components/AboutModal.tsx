import React from 'react';
import { ARTIST_BIO, Language } from '../data/portfolioData';
import { X, Award, MapPin, Feather, Sparkles, Mail } from 'lucide-react';

interface AboutModalProps {
  isOpen: boolean;
  language: Language;
  onClose: () => void;
  onOpenContact: () => void;
}

export const AboutModal: React.FC<AboutModalProps> = ({
  isOpen,
  language,
  onClose,
  onOpenContact,
}) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 sm:p-6 md:p-10 animate-fadeIn overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-label="About the Artist"
    >
      <div className="relative w-full max-w-4xl max-h-[92vh] bg-[#FDFBF7] rounded-2xl overflow-hidden shadow-2xl flex flex-col border border-surface my-auto">
        {/* Header Bar */}
        <div className="p-6 md:p-8 bg-surface/40 border-b border-surface flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="w-2 h-2 rounded-full bg-accent" />
              <span className="font-mono text-xs uppercase tracking-widest text-accent font-semibold">
                {language === 'en' ? 'Curatorial Profile' : 'Kurator Profili'}
              </span>
            </div>
            <h2 className="font-display italic text-3xl md:text-4xl font-bold text-text">
              {ARTIST_BIO.name}
            </h2>
            <p className="font-mono text-xs text-text/70 mt-1 flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-tag" />
              {ARTIST_BIO.location[language]}
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2.5 rounded-full bg-surface hover:bg-surface/80 text-text transition-colors cursor-pointer"
            aria-label="Close bio"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="p-6 md:p-8 overflow-y-auto space-y-8 flex-1">
          {/* Main Statement */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 space-y-4">
              <h3 className="font-mono text-xs uppercase tracking-widest text-tag font-semibold flex items-center gap-2">
                <Feather className="w-3.5 h-3.5" />
                {language === 'en' ? 'Artistic Statement' : 'Sənətkar Bəyannaməsi'}
              </h3>
              <div className="text-sm md:text-base text-text/85 leading-relaxed font-sans space-y-4 whitespace-pre-line">
                {ARTIST_BIO.fullBio[language]}
              </div>
            </div>

            {/* Studio Environment Box */}
            <div className="bg-surface/30 border border-surface rounded-xl p-5 space-y-4 h-fit">
              <span className="font-mono text-[10px] uppercase tracking-widest text-accent font-semibold block">
                {language === 'en' ? 'Core Substrates & Media' : 'Əsas Materiallar və Mühit'}
              </span>
              <ul className="text-xs font-mono space-y-2 text-text/75">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                  <span>Absheron limestone & clay mineral pigments</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-tag mt-1.5 shrink-0" />
                  <span>300gsm Arches 100% cotton rag paper</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                  <span>Handmade Japanese Kozo & Awagami washi</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-tag mt-1.5 shrink-0" />
                  <span>Organic walnut gall ink & cold-pressed linseed</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Selected Exhibitions */}
          <div className="pt-6 border-t border-surface/70">
            <h3 className="font-mono text-xs uppercase tracking-widest text-text font-semibold mb-4 flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-accent" />
              {language === 'en' ? 'Selected Solo & Group Exhibitions' : 'Seçilmiş Fərdi və Qrup Sərgiləri'}
            </h3>
            <div className="space-y-3">
              {ARTIST_BIO.exhibitions.map((ex, idx) => (
                <div
                  key={idx}
                  className="flex flex-col sm:flex-row sm:items-center justify-between p-3 rounded-lg bg-surface/20 border border-surface/60 text-xs font-mono"
                >
                  <div className="flex items-baseline gap-3">
                    <span className="text-accent font-semibold shrink-0">{ex.year}</span>
                    <span className="font-display italic text-sm text-text font-medium">
                      {ex.title[language]}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 text-text/60 mt-1 sm:mt-0">
                    <span>{ex.venue}</span>
                    <span className="text-surface select-none">|</span>
                    <span className="text-tag">{ex.type[language]}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Awards */}
          <div className="pt-6 border-t border-surface/70">
            <h3 className="font-mono text-xs uppercase tracking-widest text-text font-semibold mb-3 flex items-center gap-2">
              <Award className="w-3.5 h-3.5 text-tag" />
              {language === 'en' ? 'Honors & Fellowships' : 'Fəxri Adlar və Mükafatlar'}
            </h3>
            <div className="space-y-2">
              {ARTIST_BIO.awards.map((aw, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 text-xs font-mono text-text/80 p-2 rounded-md bg-surface/10"
                >
                  <span className="text-accent font-semibold">{aw.year}</span>
                  <span>{aw.name[language]}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer actions */}
        <div className="p-4 sm:px-8 bg-surface/30 border-t border-surface flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono">
          <span className="text-text/60">
            {language === 'en' ? 'Represented by contemporary archives' : 'Müasir arxivlər tərəfindən təmsil olunur'}
          </span>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              type="button"
              onClick={() => {
                onClose();
                onOpenContact();
              }}
              className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-accent text-[#FDFBF7] font-semibold hover:bg-accent/90 transition-colors cursor-pointer"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>{language === 'en' ? 'Contact Studio' : 'Emalatxana ilə Əlaqə'}</span>
            </button>
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-lg border border-surface bg-background text-text hover:text-accent transition-colors cursor-pointer"
            >
              {language === 'en' ? 'Close' : 'Bağla'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

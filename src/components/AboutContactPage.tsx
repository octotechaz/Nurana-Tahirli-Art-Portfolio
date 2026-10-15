import React, { useState } from 'react';
import { Exhibition, Inquiry, Language } from '../types';
import { TRANSLATIONS } from '../translations';

interface AboutContactPageProps {
  exhibitions: Exhibition[];
  language: Language;
  onAddInquiry: (inquiry: Omit<Inquiry, 'id' | 'date' | 'status'>) => void;
  onOpenLightbox: (imageSrc: string, title: string, caption?: string) => void;
}

export const AboutContactPage: React.FC<AboutContactPageProps> = ({
  exhibitions,
  language,
  onAddInquiry,
  onOpenLightbox
}) => {
  const t = TRANSLATIONS[language];
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [projectType, setProjectType] = useState('editorial');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const artistImage = "https://lh3.googleusercontent.com/aida/AEtjO1WZx97dbYTUGEZLBOPM2vEIM22lK6IWfspTCKzr1ct2RStt2VIIu9PL7tBIvfCE_3MYNdEWx7C7k1QTdXzupqYhbEkm-L__qvGbhuW536ofCF_8ABTMHQfFdVoDxJd75LC74tSmDN0IjVD-S44IiyT8AIvni6onZhYrXoakM68hZesCWQmAfq4_QX_BAKql15eCisqQqoyKxT_JYandg33P947XmiYOnVISltqEOE1vbn_SYQv5tKsW3Xw";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      onAddInquiry({
        name,
        email,
        projectType: t.aboutContact.form.types[projectType as keyof typeof t.aboutContact.form.types] || projectType,
        message,
        category: projectType === 'licensing' ? 'licensing' : projectType === 'general' ? 'general' : 'commission'
      });
      setIsSubmitting(false);
      setSubmitted(true);
      setName('');
      setEmail('');
      setMessage('');
    }, 450);
  };

  return (
    <main className="w-full max-w-6xl mx-auto px-6 py-10 md:py-16 flex-grow">
      {/* Upper Section: About Nurana */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start pb-20 border-b border-[#E9ECEF]" id="about">
        {/* Artist Illustration Portrait / Visual Canvas */}
        <div className="lg:col-span-5 order-2 lg:order-1">
          <div
            onClick={() => onOpenLightbox(artistImage, "Nurana th — Atelier Desk", "Baku Studio • Natural Gouache & Ink")}
            className="relative bg-[#F4F1DE] rounded-2xl p-3 md:p-4 shadow-sm border border-[#E9ECEF]/70 cursor-zoom-in"
            title="Click to view artwork"
          >
            <div className="overflow-hidden rounded-xl aspect-[4/5] bg-[#FAF7F0] relative">
              <img
                src={artistImage}
                alt="Nurana th, illustration artist at work in sunny studio"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-[1.015]"
              />
            </div>
            <div className="pt-3 px-1 flex items-center justify-between font-mono text-[11px] text-[#6C757D] uppercase tracking-wider">
              <span>{t.aboutContact.studioCaption}</span>
              <span>{t.aboutContact.techniqueCaption}</span>
            </div>
          </div>
        </div>

        {/* Biography & Editorial Narratives */}
        <div className="lg:col-span-7 order-1 lg:order-2 space-y-7">
          <div>
            <span className="font-mono text-xs uppercase tracking-wider text-[#E07A5F] font-medium block mb-3">
              {t.aboutContact.aboutTag}
            </span>
            <h1 className="font-headline text-3xl sm:text-4xl lg:text-[40px] font-semibold leading-[1.25] text-[#2B2D42] tracking-tight">
              {t.aboutContact.aboutTitle}
            </h1>
          </div>

          <div className="space-y-4 text-base sm:text-lg leading-[1.7] text-[#2B2D42]/90 font-light">
            <p>{t.aboutContact.bio1}</p>
            <p className="text-[#6C757D] italic text-base bg-[#F4F1DE]/40 p-4 rounded-xl border-l-2 border-[#E07A5F]">
              {t.aboutContact.quote}
            </p>
          </div>

          {/* Selected Exhibitions & Recognition */}
          <div className="pt-4">
            <h2 className="font-mono text-xs uppercase tracking-wider text-[#2B2D42] font-medium mb-5 flex items-center gap-2">
              <span>{t.aboutContact.exhibitionsTitle}</span>
              <span className="h-px bg-[#E9ECEF] flex-1"></span>
            </h2>

            <ul className="space-y-3 font-body text-sm">
              {exhibitions.map((ex, index) => (
                <li
                  key={index}
                  className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-6 py-2 border-b border-[#E9ECEF]/70"
                >
                  <span className="font-mono text-xs text-[#E07A5F] font-medium tracking-wide w-14 shrink-0">
                    {ex.year}
                  </span>
                  <div className="text-[#2B2D42]">
                    <span className="font-medium">{ex.title}</span>, {ex.type}
                    <span className="text-[#6C757D] text-xs block sm:inline sm:ml-1">
                      — {ex.location}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Lower Section: Contact & Inquiries */}
      <section className="pt-16 lg:pt-24" id="contact">
        <div className="max-w-2xl mb-10">
          <span className="font-mono text-xs uppercase tracking-wider text-[#E07A5F] font-medium block mb-2">
            {t.aboutContact.contactTag}
          </span>
          <h2 className="font-headline text-3xl sm:text-4xl font-semibold text-[#2B2D42] tracking-tight mb-3">
            {t.aboutContact.contactTitle}
          </h2>
          <p className="text-[#6C757D] text-base leading-relaxed">
            {t.aboutContact.contactSubtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left: Direct Social & Studio Cards */}
          <div className="lg:col-span-5 space-y-4">
            <a
              href="mailto:hello@nurana.art"
              className="group block p-5 rounded-2xl bg-[#F4F1DE] border border-[#E9ECEF]/70 hover:border-[#E07A5F]/40 hover:bg-[#ede8d2] transition-all duration-200 shadow-sm"
            >
              <div className="flex items-center justify-between mb-1">
                <span className="font-mono text-xs text-[#6C757D] uppercase">
                  {t.aboutContact.directInquiries}
                </span>
                <span className="text-[#E07A5F] text-sm transition-transform duration-200 group-hover:translate-x-0.5">
                  ↗
                </span>
              </div>
              <div className="font-headline text-lg font-medium text-[#2B2D42] group-hover:text-[#E07A5F] transition-colors">
                hello@nurana.art
              </div>
              <p className="text-xs text-[#6C757D] mt-1">
                {t.aboutContact.directInquiriesSub}
              </p>
            </a>

            <a
              href="https://behance.net"
              target="_blank"
              rel="noopener noreferrer"
              className="group block p-5 rounded-2xl bg-[#F4F1DE] border border-[#E9ECEF]/70 hover:border-[#E07A5F]/40 hover:bg-[#ede8d2] transition-all duration-200 shadow-sm"
            >
              <div className="flex items-center justify-between mb-1">
                <span className="font-mono text-xs text-[#6C757D] uppercase">
                  {t.aboutContact.portfolioArchives}
                </span>
                <span className="text-[#E07A5F] text-sm transition-transform duration-200 group-hover:translate-x-0.5">
                  ↗
                </span>
              </div>
              <div className="font-headline text-lg font-medium text-[#2B2D42] group-hover:text-[#E07A5F] transition-colors">
                behance.net/nuranath
              </div>
              <p className="text-xs text-[#6C757D] mt-1">
                {t.aboutContact.portfolioArchivesSub}
              </p>
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group block p-5 rounded-2xl bg-[#F4F1DE] border border-[#E9ECEF]/70 hover:border-[#E07A5F]/40 hover:bg-[#ede8d2] transition-all duration-200 shadow-sm"
            >
              <div className="flex items-center justify-between mb-1">
                <span className="font-mono text-xs text-[#6C757D] uppercase">
                  {t.aboutContact.dailyStudio}
                </span>
                <span className="text-[#E07A5F] text-sm transition-transform duration-200 group-hover:translate-x-0.5">
                  ↗
                </span>
              </div>
              <div className="font-headline text-lg font-medium text-[#2B2D42] group-hover:text-[#E07A5F] transition-colors">
                @nurana.art
              </div>
              <p className="text-xs text-[#6C757D] mt-1">
                {t.aboutContact.dailyStudioSub}
              </p>
            </a>

            <div className="p-5 rounded-2xl bg-transparent border border-dashed border-[#E9ECEF] text-xs text-[#6C757D] leading-relaxed">
              <span className="font-mono text-[11px] font-semibold text-[#2B2D42] block mb-1">
                {t.aboutContact.representationTitle}
              </span>
              {t.aboutContact.representationNote}
            </div>
          </div>

          {/* Right: Inquiry Form */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-9 rounded-2xl border border-[#E9ECEF] shadow-sm">
            {submitted ? (
              <div className="py-8 text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-[#81B29A]/20 text-[#81B29A] flex items-center justify-center mx-auto">
                  <span className="material-symbols-outlined text-2xl">check_circle</span>
                </div>
                <h3 className="font-headline text-xl font-semibold text-[#2B2D42]">
                  {t.aboutContact.form.successTitle}
                </h3>
                <p className="text-sm text-[#6C757D] max-w-md mx-auto leading-relaxed">
                  {t.aboutContact.form.successMessage}
                </p>
                <div className="pt-2">
                  <button
                    onClick={() => setSubmitted(false)}
                    className="inline-flex items-center text-xs font-mono uppercase text-[#E07A5F] hover:underline cursor-pointer"
                  >
                    Send another message
                  </button>
                </div>
              </div>
            ) : (
              <form className="space-y-5" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block font-mono text-xs text-[#2B2D42] uppercase tracking-wider mb-2 font-medium">
                      {t.aboutContact.form.yourName}
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder={t.aboutContact.form.namePlaceholder}
                      className="w-full bg-white border border-[#E9ECEF] rounded-xl px-4 py-3 text-sm text-[#2B2D42] placeholder:text-neutral-400 focus:outline-none focus:border-[#E07A5F] focus:ring-1 focus:ring-[#E07A5F] transition-all"
                    />
                  </div>
                  <div>
                    <label className="block font-mono text-xs text-[#2B2D42] uppercase tracking-wider mb-2 font-medium">
                      {t.aboutContact.form.emailAddress}
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder={t.aboutContact.form.emailPlaceholder}
                      className="w-full bg-white border border-[#E9ECEF] rounded-xl px-4 py-3 text-sm text-[#2B2D42] placeholder:text-neutral-400 focus:outline-none focus:border-[#E07A5F] focus:ring-1 focus:ring-[#E07A5F] transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-mono text-xs text-[#2B2D42] uppercase tracking-wider mb-2 font-medium">
                    {t.aboutContact.form.projectType}
                  </label>
                  <div className="relative">
                    <select
                      value={projectType}
                      onChange={(e) => setProjectType(e.target.value)}
                      className="w-full appearance-none bg-white border border-[#E9ECEF] rounded-xl px-4 py-3 text-sm text-[#2B2D42] focus:outline-none focus:border-[#E07A5F] focus:ring-1 focus:ring-[#E07A5F] transition-all cursor-pointer"
                    >
                      <option value="editorial">{t.aboutContact.form.types.editorial}</option>
                      <option value="book">{t.aboutContact.form.types.book}</option>
                      <option value="character">{t.aboutContact.form.types.character}</option>
                      <option value="licensing">{t.aboutContact.form.types.licensing}</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-[#6C757D]">
                      <span className="text-xs">▼</span>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block font-mono text-xs text-[#2B2D42] uppercase tracking-wider mb-2 font-medium">
                    {t.aboutContact.form.projectDetails}
                  </label>
                  <textarea
                    rows={5}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder={t.aboutContact.form.detailsPlaceholder}
                    className="w-full bg-white border border-[#E9ECEF] rounded-xl p-4 text-sm text-[#2B2D42] placeholder:text-neutral-400 focus:outline-none focus:border-[#E07A5F] focus:ring-1 focus:ring-[#E07A5F] transition-all resize-none leading-relaxed"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-[#E07A5F] hover:bg-[#d66e54] active:scale-[0.99] text-white font-headline text-sm font-medium px-8 py-3.5 rounded-full transition-all duration-200 shadow-sm flex items-center gap-2 cursor-pointer disabled:opacity-60"
                  >
                    <span>{isSubmitting ? t.aboutContact.form.submitting : t.aboutContact.form.sendInquiry}</span>
                    <span className="text-base leading-none">→</span>
                  </button>
                  <span className="font-body text-xs text-[#6C757D]">
                    {t.aboutContact.form.replyNote}
                  </span>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </main>
  );
};

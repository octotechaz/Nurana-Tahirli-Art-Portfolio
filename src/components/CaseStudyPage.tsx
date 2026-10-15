import React from 'react';
import { Artwork, CategoryId, Language } from '../types';
import { TRANSLATIONS } from '../translations';

interface CaseStudyPageProps {
  artwork: Artwork;
  allArtworks: Artwork[];
  language: Language;
  onNavigateCategory: (category: CategoryId) => void;
  onNavigateArtwork: (artworkId: string) => void;
  onOpenLightbox: (imageSrc: string, title: string, caption?: string) => void;
}

export const CaseStudyPage: React.FC<CaseStudyPageProps> = ({
  artwork,
  allArtworks,
  language,
  onNavigateCategory,
  onNavigateArtwork,
  onOpenLightbox
}) => {
  const t = TRANSLATIONS[language];

  // Resolve next and prev artwork if present
  const nextArtwork = artwork.nextProjectId
    ? allArtworks.find(a => a.id === artwork.nextProjectId)
    : null;
  const prevArtwork = artwork.prevProjectId
    ? allArtworks.find(a => a.id === artwork.prevProjectId)
    : null;

  const categoryName = t.category.titles[artwork.category];

  return (
    <main className="max-w-6xl mx-auto px-6 pt-8 pb-24 w-full">
      {/* Sub-breadcrumb / Back Action */}
      <div className="mb-8">
        <button
          onClick={() => onNavigateCategory(artwork.category)}
          className="inline-flex items-center gap-2 font-mono text-[11px] tracking-widest text-[#6C757D] hover:text-[#E07A5F] transition-colors duration-200 uppercase cursor-pointer"
        >
          <span className="material-symbols-outlined text-sm">arrow_back</span>
          {t.caseStudy.backToCategory.replace('{category}', categoryName)}
        </button>
      </div>

      {/* Project Header */}
      <header className="mb-10 max-w-3xl">
        <div className="inline-block font-mono text-xs uppercase tracking-widest text-[#81B29A] font-medium mb-3">
          {artwork.subtitle}
        </div>
        <h1 className="font-headline text-3xl sm:text-4xl md:text-[42px] font-semibold text-[#2B2D42] tracking-tight leading-tight">
          {artwork.title}
        </h1>
      </header>

      {/* Wide Hero Artwork Banner */}
      <section className="mb-14">
        <div
          onClick={() => onOpenLightbox(artwork.heroImage || artwork.coverImage, artwork.title, artwork.canvasSpecs)}
          className="relative w-full rounded-2xl overflow-hidden shadow-sm bg-[#F4F1DE]/40 border border-[#E9ECEF]/80 cursor-zoom-in"
          title="Click to view high-resolution canvas"
        >
          <img
            src={artwork.heroImage || artwork.coverImage}
            alt={artwork.altText}
            className="w-full h-auto max-h-[760px] object-cover mx-auto block hover:scale-[1.01] transition-transform duration-500 ease-out"
          />
        </div>
        <div className="mt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-1 font-mono text-[11px] text-[#6C757D] tracking-wider uppercase px-1">
          <span>{artwork.figureTitle || `Figure 01 — ${artwork.title}`}</span>
          <span>{artwork.canvasSpecs || 'Original Canvas • 4000 × 3000 px'}</span>
        </div>
      </section>

      {/* Thin Metadata Strip */}
      <section className="mb-16 border-y border-[#E9ECEF] py-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 text-left">
          <div>
            <span className="block font-mono text-[11px] uppercase tracking-widest text-[#6C757D] mb-1">
              {t.caseStudy.client}
            </span>
            <span className="font-body text-sm font-medium text-[#2B2D42]">
              {artwork.client || 'Editorial Commission'}
            </span>
          </div>
          <div>
            <span className="block font-mono text-[11px] uppercase tracking-widest text-[#6C757D] mb-1">
              {t.caseStudy.role}
            </span>
            <span className="font-body text-sm font-medium text-[#2B2D42]">
              {artwork.role || 'Character & Layout'}
            </span>
          </div>
          <div>
            <span className="block font-mono text-[11px] uppercase tracking-widest text-[#6C757D] mb-1">
              {t.caseStudy.techniques}
            </span>
            <span className="font-body text-sm font-medium text-[#2B2D42]">
              {artwork.techniques || 'Procreate, Digital Inking'}
            </span>
          </div>
          <div>
            <span className="block font-mono text-[11px] uppercase tracking-widest text-[#6C757D] mb-1">
              {t.caseStudy.date}
            </span>
            <span className="font-body text-sm font-medium text-[#2B2D42]">
              {artwork.date || artwork.year}
            </span>
          </div>
          <div>
            <span className="block font-mono text-[11px] uppercase tracking-widest text-[#6C757D] mb-1">
              {t.caseStudy.category}
            </span>
            <span className="font-body text-sm font-medium text-[#2B2D42]">
              {categoryName}
            </span>
          </div>
        </div>
      </section>

      {/* Short Story / Narrative Context */}
      {artwork.narrative && (
        <section className="max-w-2xl mx-auto my-16 text-center">
          <span className="inline-block w-8 h-px bg-[#E07A5F]/60 mb-6"></span>
          <p className="font-body text-[17px] sm:text-lg leading-[1.8] text-[#2B2D42] font-normal">
            {artwork.narrative}
          </p>
        </section>
      )}

      {/* Process & Studies (WIP Progression) */}
      {artwork.processSteps && artwork.processSteps.length > 0 && (
        <section className="my-20">
          <div className="flex items-center justify-between mb-8 pb-3 border-b border-[#E9ECEF]">
            <h2 className="font-mono text-xs uppercase tracking-widest text-[#6C757D] font-medium">
              {t.caseStudy.processStudies}
            </h2>
            <span className="font-mono text-[11px] text-[#6C757D] tracking-wider uppercase">
              {t.caseStudy.sequentialSteps}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {artwork.processSteps.map((step, idx) => (
              <div
                key={idx}
                className="bg-[#F4F1DE]/50 rounded-2xl p-4 border border-[#E9ECEF]/70 flex flex-col justify-between transition-all duration-200 hover:-translate-y-1"
              >
                <div
                  onClick={() => onOpenLightbox(step.image, step.title, `${step.step} / ${step.phase}`)}
                  className="aspect-[4/3] rounded-xl overflow-hidden bg-white/70 mb-4 border border-[#E9ECEF]/50 flex items-center justify-center cursor-zoom-in"
                  title="Click to zoom in study plate"
                >
                  <img
                    src={step.image}
                    alt={step.imageAlt}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div>
                  <div
                    className={`font-mono text-[11px] tracking-widest uppercase mb-1 ${
                      idx === 1 ? 'text-[#81B29A]' : 'text-[#E07A5F]'
                    }`}
                  >
                    {step.step} / {step.phase}
                  </div>
                  <h3 className="font-headline text-sm font-semibold text-[#2B2D42]">
                    {step.title}
                  </h3>
                  <p className="font-body text-xs text-[#6C757D] mt-1 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Vertical Stack of Companion Artwork & Details */}
      {artwork.companions && artwork.companions.length > 0 && (
        <section className="my-20 space-y-16">
          <div className="border-t border-[#E9ECEF] pt-8 flex items-center justify-between">
            <h2 className="font-mono text-xs uppercase tracking-widest text-[#6C757D] font-medium">
              {t.caseStudy.companionPieces}
            </h2>
            <span className="font-mono text-[11px] text-[#6C757D] tracking-wider uppercase">
              {t.caseStudy.editorialSuite}
            </span>
          </div>

          {artwork.companions.map((comp) => (
            <article key={comp.id} className="max-w-4xl mx-auto">
              <div
                onClick={() => onOpenLightbox(comp.image, comp.title, comp.subtitle)}
                className="rounded-2xl overflow-hidden bg-[#F4F1DE]/40 border border-[#E9ECEF]/80 p-2 sm:p-4 cursor-zoom-in"
                title="Click to view companion piece in high resolution"
              >
                <img
                  src={comp.image}
                  alt={comp.imageAlt}
                  className="w-full rounded-xl object-cover hover:scale-[1.01] transition-transform duration-300"
                />
              </div>
              <div className="mt-4 flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 px-2 font-mono text-[11px] text-[#6C757D] tracking-wider uppercase">
                <span className="font-medium text-[#2B2D42]">{comp.title}</span>
                <span>{comp.subtitle}</span>
              </div>
            </article>
          ))}
        </section>
      )}

      {/* Quiet Project Navigation */}
      <nav className="my-20 pt-10 border-t border-[#E9ECEF] flex flex-col sm:flex-row items-center justify-between gap-6">
        {prevArtwork ? (
          <button
            onClick={() => onNavigateArtwork(prevArtwork.id)}
            className="font-mono text-xs uppercase tracking-widest text-[#6C757D] hover:text-[#E07A5F] transition-colors flex items-center gap-2 cursor-pointer"
          >
            <span className="material-symbols-outlined text-sm">arrow_back</span>
            {t.caseStudy.previousProject}
          </button>
        ) : (
          <div></div>
        )}

        {nextArtwork && (
          <button
            onClick={() => onNavigateArtwork(nextArtwork.id)}
            className="group inline-flex items-center gap-4 p-3 pr-6 bg-[#F4F1DE] hover:bg-[#F2CC8F]/50 rounded-full border border-[#E9ECEF] transition-all duration-200 cursor-pointer shadow-sm"
          >
            <span className="w-8 h-8 rounded-full bg-[#E07A5F] text-white flex items-center justify-center font-mono text-xs group-hover:scale-105 transition-transform">
              →
            </span>
            <div className="text-left">
              <span className="block font-mono text-[10px] uppercase tracking-widest text-[#6C757D]">
                {t.caseStudy.nextProject}
              </span>
              <span className="font-headline text-sm font-semibold text-[#2B2D42] group-hover:text-[#E07A5F] transition-colors">
                {nextArtwork.title} ({nextArtwork.subtitle})
              </span>
            </div>
          </button>
        )}
      </nav>
    </main>
  );
};

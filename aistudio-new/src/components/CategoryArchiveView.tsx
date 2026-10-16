import React from 'react';
import { Language, Discipline } from '../data/portfolioData';
import {
  DIGITAL_ILLUSTRATION_CARDS,
  CURATORIAL_FOCUS_NOTE,
  CategoryCard,
} from '../data/categoryArchiveData';

interface CategoryArchiveViewProps {
  discipline: Discipline;
  disciplinesList: Discipline[];
  language: Language;
  onBackToHome: () => void;
  onSelectProject: (projectId: string) => void;
  onSwitchDiscipline: (disciplineId: string) => void;
}

export const CategoryArchiveView: React.FC<CategoryArchiveViewProps> = ({
  discipline,
  disciplinesList,
  language,
  onBackToHome,
  onSelectProject,
  onSwitchDiscipline,
}) => {
  const currentIndex = disciplinesList.findIndex((d) => d.id === discipline.id);
  const prevDiscipline =
    disciplinesList[(currentIndex - 1 + disciplinesList.length) % disciplinesList.length];
  const nextDiscipline = disciplinesList[(currentIndex + 1) % disciplinesList.length];

  return (
    <div className="w-full min-h-screen pt-16 sm:pt-20 animate-fadeIn">
      {/* Category Header Section */}
      <section className="pt-8 sm:pt-10 pb-6 sm:pb-10 px-4 sm:px-8 md:px-16 lg:px-20 max-w-7xl mx-auto">
        {/* Category Breadcrumbs & Metadata */}
        <div className="flex flex-wrap items-center justify-between gap-3 sm:gap-4 mb-6 sm:mb-8">
          <div className="flex items-center gap-2 sm:gap-3 font-mono text-xs sm:text-[13px] tracking-wider uppercase">
            <button
              type="button"
              onClick={onBackToHome}
              className="inline-flex items-center gap-1.5 text-accent hover:text-text transition-colors duration-200 group font-medium cursor-pointer"
            >
              <span className="transition-transform group-hover:-translate-x-1">←</span>
              <span>
                {language === 'en'
                  ? 'All Collections'
                  : 'Bütün Kolleksiyalar'}
              </span>
            </button>
            <span className="text-text/20">/</span>
            <span className="text-text/65">{discipline.title[language]}</span>
          </div>

          <div className="font-mono text-[11px] sm:text-xs uppercase tracking-widest text-text/65 bg-surface/50 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded border border-[#F4F1DE]">
            {language === 'en' ? '08 Works Archive · 2023–2024' : '08 Əsər Arxivi · 2023–2024'}
          </div>
        </div>

        {/* Category Title & Editorial Subtitle */}
        <div className="max-w-3xl mb-8 sm:mb-10">
          <div className="font-mono text-[11px] sm:text-xs uppercase tracking-widest text-accent font-semibold mb-2 sm:mb-3">
            {language === 'en' ? 'Category Archive' : 'Kateqoriya Arxivi'}
          </div>
          <h1 className="font-display text-3xl sm:text-5xl md:text-[68px] font-bold text-text tracking-tight leading-tight mb-3 sm:mb-5">
            {discipline.title[language]}
          </h1>
          <p className="font-body text-sm sm:text-lg md:text-[18px] text-text/70 leading-relaxed">
            {language === 'en'
              ? 'Explorations into translucent botanical structures, vector form, and organic pigments. A systematic collection of tactile textures paired with minimalist floral studies.'
              : 'Şəffaf botanik strukturlar, vektor formaları və təbii piqmentlər üzrə axtarışlar. Minimalist çiçək etüdləri ilə birləşən toxunmalı fakturaların sistemli kolleksiyası.'}
          </p>
        </div>
      </section>

      {/* Projects Editorial Masonry Grid */}
      <section className="px-4 sm:px-8 md:px-16 lg:px-20 max-w-7xl mx-auto pb-16 sm:pb-24">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6 [column-fill:_balance]">
          {/* Card 1: Herbarium Specimen (Tall Vertical) */}
          {DIGITAL_ILLUSTRATION_CARDS[0] && (
            <div className="break-inside-avoid mb-6 block w-full">
              <div
                onClick={() => onSelectProject(DIGITAL_ILLUSTRATION_CARDS[0].projectId || 'bloom-series')}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') onSelectProject('bloom-series');
                }}
                className="block group bg-surface/30 p-4 md:p-5 rounded-lg border border-[#F4F1DE] fine-artwork-shadow hover:border-accent/40 transition-all duration-300 cursor-pointer"
              >
                <div className="overflow-hidden rounded bg-background p-2.5 border border-[#F4F1DE]/70 relative">
                  <img
                    src={DIGITAL_ILLUSTRATION_CARDS[0].imageUrl}
                    alt={DIGITAL_ILLUSTRATION_CARDS[0].altText}
                    className="w-full h-auto object-contain transition-transform duration-500 ease-out group-hover:scale-[1.015]"
                  />
                  <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-xs px-2.5 py-1 rounded text-[11px] font-mono text-accent font-semibold tracking-wider border border-[#F4F1DE]">
                    {DIGITAL_ILLUSTRATION_CARDS[0].seriesNumber}
                  </div>
                </div>
                <div className="mt-4 flex flex-col gap-2">
                  <div className="flex items-center justify-between text-xs font-mono text-tag tracking-wider uppercase">
                    <span>{DIGITAL_ILLUSTRATION_CARDS[0].archiveType[language]}</span>
                    <span>{DIGITAL_ILLUSTRATION_CARDS[0].year}</span>
                  </div>
                  <div className="flex items-baseline justify-between">
                    <h2 className="font-display text-xl font-bold text-text group-hover:text-accent transition-colors duration-200">
                      {DIGITAL_ILLUSTRATION_CARDS[0].title[language]}
                    </h2>
                    <span className="text-xs font-mono text-accent opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      {language === 'en' ? 'View Project →' : 'Layihəyə Bax →'}
                    </span>
                  </div>
                  <p className="font-body text-[13px] text-text/70 leading-normal">
                    {DIGITAL_ILLUSTRATION_CARDS[0].description[language]}
                  </p>
                  <div className="flex items-center justify-between pt-2 border-t border-[#F4F1DE] text-xs font-mono text-text/65">
                    <span>{DIGITAL_ILLUSTRATION_CARDS[0].technique[language]}</span>
                    <span>{DIGITAL_ILLUSTRATION_CARDS[0].dimensions}</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5 mt-1 font-mono text-[11px] text-text/65">
                    {DIGITAL_ILLUSTRATION_CARDS[0].tags.map((tag, i) => (
                      <span key={i} className="bg-surface/60 px-2 py-0.5 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Card 2: Landscape Atmospheric Dew (Horizontal) */}
          {DIGITAL_ILLUSTRATION_CARDS[1] && (
            <div className="break-inside-avoid mb-6 block w-full">
              <div
                onClick={() => onSelectProject(DIGITAL_ILLUSTRATION_CARDS[1].projectId || 'bloom-series')}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') onSelectProject('bloom-series');
                }}
                className="block group bg-surface/30 p-4 md:p-5 rounded-lg border border-[#F4F1DE] fine-artwork-shadow hover:border-accent/40 transition-all duration-300 cursor-pointer"
              >
                <div className="overflow-hidden rounded bg-background p-2.5 border border-[#F4F1DE]/70 relative">
                  <img
                    src={DIGITAL_ILLUSTRATION_CARDS[1].imageUrl}
                    alt={DIGITAL_ILLUSTRATION_CARDS[1].altText}
                    className="w-full h-auto object-contain transition-transform duration-500 ease-out group-hover:scale-[1.015]"
                  />
                  <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-xs px-2.5 py-1 rounded text-[11px] font-mono text-tag font-semibold tracking-wider border border-[#F4F1DE]">
                    {DIGITAL_ILLUSTRATION_CARDS[1].seriesNumber}
                  </div>
                </div>
                <div className="mt-4 flex flex-col gap-2">
                  <div className="flex items-center justify-between text-xs font-mono text-tag tracking-wider uppercase">
                    <span>{DIGITAL_ILLUSTRATION_CARDS[1].archiveType[language]}</span>
                    <span>{DIGITAL_ILLUSTRATION_CARDS[1].year}</span>
                  </div>
                  <div className="flex items-baseline justify-between">
                    <h2 className="font-display text-xl font-bold text-text group-hover:text-accent transition-colors duration-200">
                      {DIGITAL_ILLUSTRATION_CARDS[1].title[language]}
                    </h2>
                    <span className="text-xs font-mono text-accent opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      {language === 'en' ? 'View Project →' : 'Layihəyə Bax →'}
                    </span>
                  </div>
                  <p className="font-body text-[13px] text-text/70 leading-normal">
                    {DIGITAL_ILLUSTRATION_CARDS[1].description[language]}
                  </p>
                  <div className="flex items-center justify-between pt-2 border-t border-[#F4F1DE] text-xs font-mono text-text/65">
                    <span>{DIGITAL_ILLUSTRATION_CARDS[1].technique[language]}</span>
                    <span>{DIGITAL_ILLUSTRATION_CARDS[1].dimensions}</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5 mt-1 font-mono text-[11px] text-text/65">
                    {DIGITAL_ILLUSTRATION_CARDS[1].tags.map((tag, i) => (
                      <span key={i} className="bg-surface/60 px-2 py-0.5 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Card 3: Macro Square Petal Study (1:1 Ratio) */}
          {DIGITAL_ILLUSTRATION_CARDS[2] && (
            <div className="break-inside-avoid mb-6 block w-full">
              <div
                onClick={() => onSelectProject(DIGITAL_ILLUSTRATION_CARDS[2].projectId || 'bloom-series')}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') onSelectProject('bloom-series');
                }}
                className="block group bg-surface/30 p-4 md:p-5 rounded-lg border border-[#F4F1DE] fine-artwork-shadow hover:border-accent/40 transition-all duration-300 cursor-pointer"
              >
                <div className="overflow-hidden rounded bg-background p-2.5 border border-[#F4F1DE]/70 relative">
                  <img
                    src={DIGITAL_ILLUSTRATION_CARDS[2].imageUrl}
                    alt={DIGITAL_ILLUSTRATION_CARDS[2].altText}
                    className="w-full h-auto object-contain transition-transform duration-500 ease-out group-hover:scale-[1.015]"
                  />
                  <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-xs px-2.5 py-1 rounded text-[11px] font-mono text-accent font-semibold tracking-wider border border-[#F4F1DE]">
                    {DIGITAL_ILLUSTRATION_CARDS[2].seriesNumber}
                  </div>
                </div>
                <div className="mt-4 flex flex-col gap-2">
                  <div className="flex items-center justify-between text-xs font-mono text-tag tracking-wider uppercase">
                    <span>{DIGITAL_ILLUSTRATION_CARDS[2].archiveType[language]}</span>
                    <span>{DIGITAL_ILLUSTRATION_CARDS[2].year}</span>
                  </div>
                  <div className="flex items-baseline justify-between">
                    <h2 className="font-display text-xl font-bold text-text group-hover:text-accent transition-colors duration-200">
                      {DIGITAL_ILLUSTRATION_CARDS[2].title[language]}
                    </h2>
                    <span className="text-xs font-mono text-accent opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      {language === 'en' ? 'View Project →' : 'Layihəyə Bax →'}
                    </span>
                  </div>
                  <p className="font-body text-[13px] text-text/70 leading-normal">
                    {DIGITAL_ILLUSTRATION_CARDS[2].description[language]}
                  </p>
                  <div className="flex items-center justify-between pt-2 border-t border-[#F4F1DE] text-xs font-mono text-text/65">
                    <span>{DIGITAL_ILLUSTRATION_CARDS[2].technique[language]}</span>
                    <span>{DIGITAL_ILLUSTRATION_CARDS[2].dimensions}</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5 mt-1 font-mono text-[11px] text-text/65">
                    {DIGITAL_ILLUSTRATION_CARDS[2].tags.map((tag, i) => (
                      <span key={i} className="bg-surface/60 px-2 py-0.5 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Card 4: Curatorial Editorial Focus Note */}
          <div className="break-inside-avoid mb-6 block w-full">
            <div className="bg-surface/70 p-6 md:p-8 rounded-lg border border-[#F4F1DE] fine-artwork-shadow flex flex-col justify-between space-y-6">
              <div>
                <div className="font-mono text-xs uppercase tracking-widest text-tag font-semibold mb-2">
                  {CURATORIAL_FOCUS_NOTE.eyebrow[language]}
                </div>
                <h3 className="font-display text-2xl font-bold text-text mb-3 leading-snug">
                  {CURATORIAL_FOCUS_NOTE.title[language]}
                </h3>
                <p className="font-body text-[13px] text-text/80 leading-relaxed">
                  {CURATORIAL_FOCUS_NOTE.description[language]}
                </p>
              </div>
              <div className="pt-4 border-t border-[#F4F1DE] flex items-center justify-between font-mono text-xs text-text/65">
                <span>{CURATORIAL_FOCUS_NOTE.footerLeft[language]}</span>
                <span className="text-accent font-semibold">
                  {CURATORIAL_FOCUS_NOTE.footerRight[language]}
                </span>
              </div>
            </div>
          </div>

          {/* Card 5: Portrait Japanese Woodblock Peony (Tall Vertical) */}
          {DIGITAL_ILLUSTRATION_CARDS[3] && (
            <div className="break-inside-avoid mb-6 block w-full">
              <div
                onClick={() => onSelectProject(DIGITAL_ILLUSTRATION_CARDS[3].projectId || 'bloom-series')}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') onSelectProject('bloom-series');
                }}
                className="block group bg-surface/30 p-4 md:p-5 rounded-lg border border-[#F4F1DE] fine-artwork-shadow hover:border-accent/40 transition-all duration-300 cursor-pointer"
              >
                <div className="overflow-hidden rounded bg-background p-2.5 border border-[#F4F1DE]/70 relative">
                  <img
                    src={DIGITAL_ILLUSTRATION_CARDS[3].imageUrl}
                    alt={DIGITAL_ILLUSTRATION_CARDS[3].altText}
                    className="w-full h-auto object-contain transition-transform duration-500 ease-out group-hover:scale-[1.015]"
                  />
                  <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-xs px-2.5 py-1 rounded text-[11px] font-mono text-tag font-semibold tracking-wider border border-[#F4F1DE]">
                    {DIGITAL_ILLUSTRATION_CARDS[3].seriesNumber}
                  </div>
                </div>
                <div className="mt-4 flex flex-col gap-2">
                  <div className="flex items-center justify-between text-xs font-mono text-tag tracking-wider uppercase">
                    <span>{DIGITAL_ILLUSTRATION_CARDS[3].archiveType[language]}</span>
                    <span>{DIGITAL_ILLUSTRATION_CARDS[3].year}</span>
                  </div>
                  <div className="flex items-baseline justify-between">
                    <h2 className="font-display text-xl font-bold text-text group-hover:text-accent transition-colors duration-200">
                      {DIGITAL_ILLUSTRATION_CARDS[3].title[language]}
                    </h2>
                    <span className="text-xs font-mono text-accent opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      {language === 'en' ? 'View Project →' : 'Layihəyə Bax →'}
                    </span>
                  </div>
                  <p className="font-body text-[13px] text-text/70 leading-normal">
                    {DIGITAL_ILLUSTRATION_CARDS[3].description[language]}
                  </p>
                  <div className="flex items-center justify-between pt-2 border-t border-[#F4F1DE] text-xs font-mono text-text/65">
                    <span>{DIGITAL_ILLUSTRATION_CARDS[3].technique[language]}</span>
                    <span>{DIGITAL_ILLUSTRATION_CARDS[3].dimensions}</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5 mt-1 font-mono text-[11px] text-text/65">
                    {DIGITAL_ILLUSTRATION_CARDS[3].tags.map((tag, i) => (
                      <span key={i} className="bg-surface/60 px-2 py-0.5 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Card 6: Landscape Wildflower Prairie Sunset (Horizontal) */}
          {DIGITAL_ILLUSTRATION_CARDS[4] && (
            <div className="break-inside-avoid mb-6 block w-full">
              <div
                onClick={() => onSelectProject(DIGITAL_ILLUSTRATION_CARDS[4].projectId || 'bloom-series')}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') onSelectProject('bloom-series');
                }}
                className="block group bg-surface/30 p-4 md:p-5 rounded-lg border border-[#F4F1DE] fine-artwork-shadow hover:border-accent/40 transition-all duration-300 cursor-pointer"
              >
                <div className="overflow-hidden rounded bg-background p-2.5 border border-[#F4F1DE]/70 relative">
                  <img
                    src={DIGITAL_ILLUSTRATION_CARDS[4].imageUrl}
                    alt={DIGITAL_ILLUSTRATION_CARDS[4].altText}
                    className="w-full h-auto object-contain transition-transform duration-500 ease-out group-hover:scale-[1.015]"
                  />
                  <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-xs px-2.5 py-1 rounded text-[11px] font-mono text-accent font-semibold tracking-wider border border-[#F4F1DE]">
                    {DIGITAL_ILLUSTRATION_CARDS[4].seriesNumber}
                  </div>
                </div>
                <div className="mt-4 flex flex-col gap-2">
                  <div className="flex items-center justify-between text-xs font-mono text-tag tracking-wider uppercase">
                    <span>{DIGITAL_ILLUSTRATION_CARDS[4].archiveType[language]}</span>
                    <span>{DIGITAL_ILLUSTRATION_CARDS[4].year}</span>
                  </div>
                  <div className="flex items-baseline justify-between">
                    <h2 className="font-display text-xl font-bold text-text group-hover:text-accent transition-colors duration-200">
                      {DIGITAL_ILLUSTRATION_CARDS[4].title[language]}
                    </h2>
                    <span className="text-xs font-mono text-accent opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      {language === 'en' ? 'View Project →' : 'Layihəyə Bax →'}
                    </span>
                  </div>
                  <p className="font-body text-[13px] text-text/70 leading-normal">
                    {DIGITAL_ILLUSTRATION_CARDS[4].description[language]}
                  </p>
                  <div className="flex items-center justify-between pt-2 border-t border-[#F4F1DE] text-xs font-mono text-text/65">
                    <span>{DIGITAL_ILLUSTRATION_CARDS[4].technique[language]}</span>
                    <span>{DIGITAL_ILLUSTRATION_CARDS[4].dimensions}</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5 mt-1 font-mono text-[11px] text-text/65">
                    {DIGITAL_ILLUSTRATION_CARDS[4].tags.map((tag, i) => (
                      <span key={i} className="bg-surface/60 px-2 py-0.5 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Card 7: Complex Layered Petal Architecture (Horizontal/Medium) */}
          {DIGITAL_ILLUSTRATION_CARDS[5] && (
            <div className="break-inside-avoid mb-6 block w-full">
              <div
                onClick={() => onSelectProject(DIGITAL_ILLUSTRATION_CARDS[5].projectId || 'bloom-series')}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') onSelectProject('bloom-series');
                }}
                className="block group bg-surface/30 p-4 md:p-5 rounded-lg border border-[#F4F1DE] fine-artwork-shadow hover:border-accent/40 transition-all duration-300 cursor-pointer"
              >
                <div className="overflow-hidden rounded bg-background p-2.5 border border-[#F4F1DE]/70 relative">
                  <img
                    src={DIGITAL_ILLUSTRATION_CARDS[5].imageUrl}
                    alt={DIGITAL_ILLUSTRATION_CARDS[5].altText}
                    className="w-full h-auto object-contain transition-transform duration-500 ease-out group-hover:scale-[1.015]"
                  />
                  <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-xs px-2.5 py-1 rounded text-[11px] font-mono text-tag font-semibold tracking-wider border border-[#F4F1DE]">
                    {DIGITAL_ILLUSTRATION_CARDS[5].seriesNumber}
                  </div>
                </div>
                <div className="mt-4 flex flex-col gap-2">
                  <div className="flex items-center justify-between text-xs font-mono text-tag tracking-wider uppercase">
                    <span>{DIGITAL_ILLUSTRATION_CARDS[5].archiveType[language]}</span>
                    <span>{DIGITAL_ILLUSTRATION_CARDS[5].year}</span>
                  </div>
                  <div className="flex items-baseline justify-between">
                    <h2 className="font-display text-xl font-bold text-text group-hover:text-accent transition-colors duration-200">
                      {DIGITAL_ILLUSTRATION_CARDS[5].title[language]}
                    </h2>
                    <span className="text-xs font-mono text-accent opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      {language === 'en' ? 'View Project →' : 'Layihəyə Bax →'}
                    </span>
                  </div>
                  <p className="font-body text-[13px] text-text/70 leading-normal">
                    {DIGITAL_ILLUSTRATION_CARDS[5].description[language]}
                  </p>
                  <div className="flex items-center justify-between pt-2 border-t border-[#F4F1DE] text-xs font-mono text-text/65">
                    <span>{DIGITAL_ILLUSTRATION_CARDS[5].technique[language]}</span>
                    <span>{DIGITAL_ILLUSTRATION_CARDS[5].dimensions}</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5 mt-1 font-mono text-[11px] text-text/65">
                    {DIGITAL_ILLUSTRATION_CARDS[5].tags.map((tag, i) => (
                      <span key={i} className="bg-surface/60 px-2 py-0.5 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Card 8: Ethereal Herbarium Meadow Flora (Horizontal) */}
          {DIGITAL_ILLUSTRATION_CARDS[6] && (
            <div className="break-inside-avoid mb-6 block w-full">
              <div
                onClick={() => onSelectProject(DIGITAL_ILLUSTRATION_CARDS[6].projectId || 'bloom-series')}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') onSelectProject('bloom-series');
                }}
                className="block group bg-surface/30 p-4 md:p-5 rounded-lg border border-[#F4F1DE] fine-artwork-shadow hover:border-accent/40 transition-all duration-300 cursor-pointer"
              >
                <div className="overflow-hidden rounded bg-background p-2.5 border border-[#F4F1DE]/70 relative">
                  <img
                    src={DIGITAL_ILLUSTRATION_CARDS[6].imageUrl}
                    alt={DIGITAL_ILLUSTRATION_CARDS[6].altText}
                    className="w-full h-auto object-contain transition-transform duration-500 ease-out group-hover:scale-[1.015]"
                  />
                  <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-xs px-2.5 py-1 rounded text-[11px] font-mono text-accent font-semibold tracking-wider border border-[#F4F1DE]">
                    {DIGITAL_ILLUSTRATION_CARDS[6].seriesNumber}
                  </div>
                </div>
                <div className="mt-4 flex flex-col gap-2">
                  <div className="flex items-center justify-between text-xs font-mono text-tag tracking-wider uppercase">
                    <span>{DIGITAL_ILLUSTRATION_CARDS[6].archiveType[language]}</span>
                    <span>{DIGITAL_ILLUSTRATION_CARDS[6].year}</span>
                  </div>
                  <div className="flex items-baseline justify-between">
                    <h2 className="font-display text-xl font-bold text-text group-hover:text-accent transition-colors duration-200">
                      {DIGITAL_ILLUSTRATION_CARDS[6].title[language]}
                    </h2>
                    <span className="text-xs font-mono text-accent opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      {language === 'en' ? 'View Project →' : 'Layihəyə Bax →'}
                    </span>
                  </div>
                  <p className="font-body text-[13px] text-text/70 leading-normal">
                    {DIGITAL_ILLUSTRATION_CARDS[6].description[language]}
                  </p>
                  <div className="flex items-center justify-between pt-2 border-t border-[#F4F1DE] text-xs font-mono text-text/65">
                    <span>{DIGITAL_ILLUSTRATION_CARDS[6].technique[language]}</span>
                    <span>{DIGITAL_ILLUSTRATION_CARDS[6].dimensions}</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5 mt-1 font-mono text-[11px] text-text/65">
                    {DIGITAL_ILLUSTRATION_CARDS[6].tags.map((tag, i) => (
                      <span key={i} className="bg-surface/60 px-2 py-0.5 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Category Navigation Bar */}
      <section className="bg-surface py-8 sm:py-12 px-4 sm:px-8 md:px-16 lg:px-20 border-t border-text/10">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 sm:gap-4">
          <button
            type="button"
            onClick={() => onSwitchDiscipline(prevDiscipline.id)}
            className="font-body text-xs sm:text-sm font-medium text-text hover:text-accent transition-colors duration-250 flex items-center justify-center sm:justify-start gap-2 py-3 px-4 rounded-lg bg-surface/70 sm:bg-transparent border border-text/10 sm:border-0 group cursor-pointer"
          >
            <span className="transition-transform group-hover:-translate-x-1">←</span>
            <span>
              {language === 'en' ? 'Previous Collection:' : 'Əvvəlki Kolleksiya:'}{' '}
              <strong className="font-semibold">{prevDiscipline.title[language]}</strong>
            </span>
          </button>
          <button
            type="button"
            onClick={() => onSwitchDiscipline(nextDiscipline.id)}
            className="font-body text-xs sm:text-sm font-medium text-text hover:text-accent transition-colors duration-250 flex items-center justify-center sm:justify-end gap-2 py-3 px-4 rounded-lg bg-surface/70 sm:bg-transparent border border-text/10 sm:border-0 group cursor-pointer"
          >
            <span>
              {language === 'en' ? 'Next Collection:' : 'Növbəti Kolleksiya:'}{' '}
              <strong className="font-semibold">{nextDiscipline.title[language]}</strong>
            </span>
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </button>
        </div>
      </section>
    </div>
  );
};

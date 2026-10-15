import React, { useState } from 'react';
import { Artwork, CategoryId, Language, SubcategoryId } from '../types';
import { TRANSLATIONS } from '../translations';

interface CategoryPageProps {
  category: CategoryId;
  artworks: Artwork[];
  language: Language;
  onNavigateHome: () => void;
  onSelectArtwork: (artworkId: string) => void;
  onOpenLightbox: (imageSrc: string, title: string, caption?: string) => void;
}

export const CategoryPage: React.FC<CategoryPageProps> = ({
  category,
  artworks,
  language,
  onNavigateHome,
  onSelectArtwork,
  onOpenLightbox
}) => {
  const [activeSubcategory, setActiveSubcategory] = useState<SubcategoryId>('all');
  const t = TRANSLATIONS[language];

  // Filter artworks for this category
  const categoryArtworks = artworks.filter(a => a.category === category);
  
  const filteredArtworks = activeSubcategory === 'all'
    ? categoryArtworks
    : categoryArtworks.filter(a => a.subcategory === activeSubcategory);

  const categoryTitle = t.category.titles[category];
  const categoryDesc = t.category.descriptions[category];

  return (
    <main className="max-w-6xl mx-auto px-6 py-10 md:py-14 w-full flex-grow">
      {/* Breadcrumb Hierarchy */}
      <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-sm text-[#6C757D] font-body">
        <button
          onClick={onNavigateHome}
          className="hover:text-[#E07A5F] transition-colors duration-200 cursor-pointer"
        >
          {t.category.home}
        </button>
        <span className="text-neutral-300">/</span>
        <span className="text-[#2B2D42] font-medium">{categoryTitle}</span>
      </nav>

      {/* Category Header Section */}
      <header className="max-w-3xl mb-10">
        <h1 className="font-headline text-3xl sm:text-4xl font-semibold tracking-tight text-[#2B2D42] mb-3">
          {categoryTitle}
        </h1>
        <p className="text-base sm:text-lg text-[#6C757D] leading-relaxed font-body">
          {categoryDesc}
        </p>
      </header>

      {/* Subcategory Pill Filter Bar */}
      <div className="flex flex-wrap items-center gap-3 mb-10">
        <button
          onClick={() => setActiveSubcategory('all')}
          className={`font-headline text-xs tracking-wider uppercase font-medium px-5 py-2.5 rounded-full transition-all duration-150 cursor-pointer ${
            activeSubcategory === 'all'
              ? 'bg-[#E07A5F] text-white shadow-sm'
              : 'bg-[#F4F1DE] hover:bg-[#F2CC8F]/40 text-[#2B2D42]'
          }`}
        >
          {t.category.filters.all}
        </button>
        <button
          onClick={() => setActiveSubcategory('character-design')}
          className={`font-headline text-xs tracking-wider uppercase font-medium px-5 py-2.5 rounded-full transition-all duration-150 cursor-pointer ${
            activeSubcategory === 'character-design'
              ? 'bg-[#E07A5F] text-white shadow-sm'
              : 'bg-[#F4F1DE] hover:bg-[#F2CC8F]/40 text-[#2B2D42]'
          }`}
        >
          {t.category.filters['character-design']}
        </button>
        <button
          onClick={() => setActiveSubcategory('editorial')}
          className={`font-headline text-xs tracking-wider uppercase font-medium px-5 py-2.5 rounded-full transition-all duration-150 cursor-pointer ${
            activeSubcategory === 'editorial'
              ? 'bg-[#E07A5F] text-white shadow-sm'
              : 'bg-[#F4F1DE] hover:bg-[#F2CC8F]/40 text-[#2B2D42]'
          }`}
        >
          {t.category.filters.editorial}
        </button>
        <button
          onClick={() => setActiveSubcategory('storybook')}
          className={`font-headline text-xs tracking-wider uppercase font-medium px-5 py-2.5 rounded-full transition-all duration-150 cursor-pointer ${
            activeSubcategory === 'storybook'
              ? 'bg-[#E07A5F] text-white shadow-sm'
              : 'bg-[#F4F1DE] hover:bg-[#F2CC8F]/40 text-[#2B2D42]'
          }`}
        >
          {t.category.filters.storybook}
        </button>
      </div>

      {/* 3-Column Art Gallery Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredArtworks.map((art) => (
          <article
            key={art.id}
            onClick={() => {
              if (art.hasCaseStudy) {
                onSelectArtwork(art.id);
              } else {
                onOpenLightbox(art.coverImage, art.title, art.subtitle);
              }
            }}
            className="group relative rounded-2xl overflow-hidden bg-[#F4F1DE] border border-[#E9ECEF]/80 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-md cursor-pointer flex flex-col"
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-100">
              <img
                src={art.coverImage}
                alt={art.altText}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              />
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#2B2D42]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 ease-out flex items-end justify-between p-6">
                <span className="text-xs uppercase tracking-widest text-[#FDFBF7] font-mono">
                  {art.hasCaseStudy ? t.category.viewWork : 'Full View'}
                </span>
                <span className="material-symbols-outlined text-white text-lg font-light translate-x-1 group-hover:translate-x-0 transition-transform">
                  arrow_outward
                </span>
              </div>
            </div>

            <div className="p-5 flex flex-col justify-between flex-grow">
              <div>
                <h2 className="font-headline text-lg font-semibold text-[#2B2D42] group-hover:text-[#E07A5F] transition-colors duration-200 mb-1">
                  {art.title}
                </h2>
                <p className="font-mono text-xs text-[#6C757D] uppercase tracking-wide">
                  {art.subtitle}
                </p>
              </div>
            </div>
          </article>
        ))}
      </section>

      {/* Subtle Breathing Space / Pagination cue */}
      <div className="mt-16 text-center">
        <span className="inline-flex items-center gap-2 text-xs font-mono uppercase text-[#6C757D] tracking-widest">
          {t.category.showingCount
            .replace('{count}', String(filteredArtworks.length))
            .replace('{total}', String(categoryArtworks.length))}
        </span>
      </div>
    </main>
  );
};

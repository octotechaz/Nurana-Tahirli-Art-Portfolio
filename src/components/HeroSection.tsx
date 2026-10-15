import React from 'react';
import { Artwork, Language } from '../data/portfolioData';
import { ZoomIn, Sparkles } from 'lucide-react';

interface HeroSectionProps {
  artwork: Artwork;
  language: Language;
  onSelectArtwork: (artwork: Artwork) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  artwork,
  language,
  onSelectArtwork,
}) => {
  return (
    <section
      className="relative w-full pt-20 pb-6 md:pt-24 md:pb-8 bg-background border-b border-surface/50 overflow-hidden"
      id="hero"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Gallery Matting / Presentation Frame */}
        <div className="bg-surface/30 border border-surface/80 rounded-2xl p-4 md:p-5 shadow-xs backdrop-blur-[2px]">
          {/* Artwork Container with 16:9 Landscape Ratio */}
          <div
            onClick={() => onSelectArtwork(artwork)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                onSelectArtwork(artwork);
              }
            }}
            className="relative w-full aspect-[16/9] max-h-[58vh] rounded-xl overflow-hidden bg-[#FAF7F2] group shadow-inner cursor-pointer focus:outline-hidden focus:ring-2 focus:ring-accent/50"
            aria-label={`View full details of ${artwork.title[language]}`}
          >
            <img
              alt={artwork.altText}
              className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
              src={artwork.imageUrl}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10 pointer-events-none transition-opacity duration-300 group-hover:opacity-70" />

            {/* Artwork Floating Tag */}
            <div className="absolute top-4 right-4 flex items-center gap-2 pointer-events-auto">
              <span className="font-mono text-[10px] md:text-[11px] uppercase tracking-widest text-tag font-medium px-3 py-1 rounded-full border border-tag/30 bg-[#FDFBF7]/90 backdrop-blur-md shadow-xs">
                {artwork.tag[language]}
              </span>
            </div>

            {/* Inspection Affordance */}
            <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 opacity-90 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-1.5 sm:gap-2 font-mono text-[10px] sm:text-[11px] uppercase tracking-wider text-[#FDFBF7] bg-black/60 backdrop-blur-md px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full pointer-events-none shadow-xs">
              <ZoomIn className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-accent" />
              <span>{language === 'en' ? 'Inspect Pigments' : 'Piqmentləri İncələ'}</span>
            </div>
          </div>

          {/* Museum Artwork Plaque / Metadata Bar - Desktop row layout across all devices */}
          <div className="mt-3 md:mt-4 px-2 md:px-3 flex flex-row items-center justify-between gap-3 text-text flex-wrap">
            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
              <button
                type="button"
                onClick={() => onSelectArtwork(artwork)}
                className="text-left font-display italic font-bold text-xl sm:text-2xl text-text tracking-tight hover:text-accent transition-colors duration-200 cursor-pointer"
              >
                {artwork.title[language]}
              </button>
              <span className="font-mono text-[10px] uppercase tracking-widest text-accent font-semibold px-2 py-0.5 rounded border border-accent/30 bg-accent/5">
                {language === 'en' ? `Archive ${artwork.year}` : `Arxiv ${artwork.year}`}
              </span>
              <span className="font-mono text-xs text-text/80 tracking-wide">
                ({artwork.medium[language]})
              </span>
            </div>

            <div className="flex items-center gap-3 sm:gap-4 text-xs font-mono text-text/70 shrink-0">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-tag" />
                {artwork.dimensions}
              </span>
              <span className="text-surface select-none">|</span>
              <span className="tracking-wider uppercase text-[11px] text-text/60">
                {artwork.seriesTag[language]}
              </span>
              <button
                type="button"
                onClick={() => onSelectArtwork(artwork)}
                className="inline-flex items-center gap-1 text-[11px] text-accent hover:underline uppercase tracking-wider cursor-pointer ml-1"
              >
                <Sparkles className="w-3 h-3" />
                <span>{language === 'en' ? 'Plaque' : 'Lövhə'}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

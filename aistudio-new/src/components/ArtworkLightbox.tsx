import React, { useState, useEffect } from 'react';
import { Artwork, Language } from '../data/portfolioData';
import { X, ZoomIn, ZoomOut, ChevronLeft, ChevronRight, Mail, Sparkles, CheckCircle2 } from 'lucide-react';

interface ArtworkLightboxProps {
  artwork: Artwork | null;
  artworksList: Artwork[];
  language: Language;
  onClose: () => void;
  onSelectArtwork: (artwork: Artwork) => void;
  onInquire: (artwork: Artwork) => void;
}

export const ArtworkLightbox: React.FC<ArtworkLightboxProps> = ({
  artwork,
  artworksList,
  language,
  onClose,
  onSelectArtwork,
  onInquire,
}) => {
  const [isZoomed, setIsZoomed] = useState(false);

  useEffect(() => {
    setIsZoomed(false);
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowRight' && artwork) {
        const currentIndex = artworksList.findIndex((a) => a.id === artwork.id);
        if (currentIndex < artworksList.length - 1) {
          onSelectArtwork(artworksList[currentIndex + 1]);
        }
      } else if (e.key === 'ArrowLeft' && artwork) {
        const currentIndex = artworksList.findIndex((a) => a.id === artwork.id);
        if (currentIndex > 0) {
          onSelectArtwork(artworksList[currentIndex - 1]);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [artwork, artworksList, onClose, onSelectArtwork]);

  if (!artwork) return null;

  const currentIndex = artworksList.findIndex((a) => a.id === artwork.id);
  const hasPrev = currentIndex > 0;
  const hasNext = currentIndex < artworksList.length - 1;

  const getStatusLabel = () => {
    switch (artwork.status) {
      case 'available':
        return language === 'en' ? 'Available for Acquisition' : 'Əldə edilə bilər';
      case 'private_collection':
        return language === 'en' ? 'Private Collection' : 'Şəxsi Kolleksiya';
      case 'institutional_archive':
        return language === 'en' ? 'Institutional Archive' : 'Muzey Arxivi';
    }
  };

  const getStatusBadgeStyle = () => {
    switch (artwork.status) {
      case 'available':
        return 'text-tag bg-tag/10 border-tag/30';
      case 'private_collection':
        return 'text-text/70 bg-surface/50 border-surface';
      case 'institutional_archive':
        return 'text-accent bg-accent/10 border-accent/30';
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-3 sm:p-6 md:p-8 animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-label={artwork.title[language]}
    >
      {/* Close button */}
      <button
        type="button"
        onClick={onClose}
        className="absolute top-4 right-4 z-50 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-[#FDFBF7] transition-colors duration-200 cursor-pointer"
        aria-label="Close artwork inspector"
      >
        <X className="w-5 h-5" />
      </button>

      {/* Navigation arrows */}
      {hasPrev && (
        <button
          type="button"
          onClick={() => onSelectArtwork(artworksList[currentIndex - 1])}
          className="flex absolute left-3 md:left-4 top-1/2 -translate-y-1/2 z-40 p-2.5 md:p-3 rounded-full bg-white/20 hover:bg-white/30 text-[#FDFBF7] transition-colors duration-200 cursor-pointer shadow-md"
          aria-label="Previous artwork"
        >
          <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
        </button>
      )}

      {hasNext && (
        <button
          type="button"
          onClick={() => onSelectArtwork(artworksList[currentIndex + 1])}
          className="flex absolute right-3 md:right-4 top-1/2 -translate-y-1/2 z-40 p-2.5 md:p-3 rounded-full bg-white/20 hover:bg-white/30 text-[#FDFBF7] transition-colors duration-200 cursor-pointer shadow-md"
          aria-label="Next artwork"
        >
          <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
        </button>
      )}

      {/* Main Container */}
      <div className="relative w-full max-w-6xl max-h-[92vh] bg-[#FDFBF7] rounded-xl overflow-hidden shadow-2xl flex flex-col lg:flex-row">
        {/* Left: Artwork Canvas View */}
        <div className="relative flex-1 bg-[#FAF7F2] min-h-[340px] sm:min-h-[440px] lg:min-h-[580px] flex items-center justify-center p-4 sm:p-8 overflow-hidden select-none">
          <div
            className={`relative max-w-full max-h-[70vh] transition-transform duration-300 ease-out cursor-zoom-in ${
              isZoomed ? 'scale-150 cursor-zoom-out' : 'scale-100'
            }`}
            onClick={() => setIsZoomed(!isZoomed)}
          >
            <img
              src={artwork.imageUrl}
              alt={artwork.altText}
              className="max-w-full max-h-[66vh] object-contain shadow-lg rounded-sm"
            />
          </div>

          {/* Zoom Toggle Floating Control */}
          <div className="absolute bottom-4 left-4 flex items-center gap-2 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full border border-surface shadow-xs text-xs font-mono">
            <button
              type="button"
              onClick={() => setIsZoomed(!isZoomed)}
              className="flex items-center gap-1.5 text-text hover:text-accent transition-colors cursor-pointer"
            >
              {isZoomed ? <ZoomOut className="w-3.5 h-3.5" /> : <ZoomIn className="w-3.5 h-3.5" />}
              <span>{isZoomed ? (language === 'en' ? 'Fit View' : 'Sığdır') : (language === 'en' ? '150% Grain Zoom' : '150% Böyüt')}</span>
            </button>
          </div>

          {/* Counter index */}
          <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-md border border-surface text-[11px] font-mono text-text/70">
            {currentIndex + 1} / {artworksList.length}
          </div>
        </div>

        {/* Right: Archival Plaque & Curatorial Details */}
        <div className="w-full lg:w-96 bg-[#FDFBF7] p-6 lg:p-8 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-surface/70 overflow-y-auto max-h-[45vh] lg:max-h-[85vh]">
          <div className="space-y-5">
            {/* Header info */}
            <div>
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="font-mono text-[10px] uppercase tracking-widest text-tag font-semibold">
                  {artwork.seriesTag[language]}
                </span>
                <span
                  className={`font-mono text-[10px] uppercase tracking-widest px-2 py-0.5 rounded border ${getStatusBadgeStyle()}`}
                >
                  {getStatusLabel()}
                </span>
              </div>
              <h2 className="font-display italic text-2xl lg:text-3xl font-bold text-text tracking-tight">
                {artwork.title[language]}
              </h2>
              <span className="inline-block mt-1 font-mono text-xs text-accent font-semibold">
                {language === 'en' ? `Archive ${artwork.year}` : `Arxiv ${artwork.year}`}
              </span>
            </div>

            {/* Plaque Metadata Spec */}
            <div className="space-y-3 py-4 border-y border-surface/80 text-xs font-mono text-text/80">
              <div>
                <span className="text-text/50 uppercase text-[10px] tracking-wider block mb-0.5">
                  {language === 'en' ? 'Medium & Material' : 'Material & Texnika'}
                </span>
                <span className="text-text leading-relaxed">{artwork.medium[language]}</span>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <span className="text-text/50 uppercase text-[10px] tracking-wider block mb-0.5">
                    {language === 'en' ? 'Dimensions' : 'Ölçülər'}
                  </span>
                  <span className="text-text">{artwork.dimensions}</span>
                </div>
                <div>
                  <span className="text-text/50 uppercase text-[10px] tracking-wider block mb-0.5">
                    {language === 'en' ? 'Registration' : 'Qeydiyyat'}
                  </span>
                  <span className="text-tag font-medium">{artwork.tag[language]}</span>
                </div>
              </div>

              {artwork.paperDetails && (
                <div>
                  <span className="text-text/50 uppercase text-[10px] tracking-wider block mb-0.5">
                    {language === 'en' ? 'Paper Substrate' : 'Kağız Əsası'}
                  </span>
                  <span className="text-text/70">{artwork.paperDetails[language]}</span>
                </div>
              )}
            </div>

            {/* Curatorial Commentary */}
            <div>
              <span className="font-mono text-[10px] uppercase tracking-widest text-accent font-semibold block mb-1.5 flex items-center gap-1.5">
                <Sparkles className="w-3 h-3" />
                {language === 'en' ? 'Curatorial Commentary' : 'Kurator Şərhi'}
              </span>
              <p className="text-xs text-text/80 leading-relaxed font-sans">
                {artwork.curatorialNote[language]}
              </p>
            </div>
          </div>

          {/* Action Footer */}
          <div className="pt-6 mt-6 border-t border-surface/80 flex flex-col gap-2">
            <button
              type="button"
              onClick={() => {
                onClose();
                onInquire(artwork);
              }}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-accent text-[#FDFBF7] font-mono text-xs uppercase tracking-wider font-semibold hover:bg-accent/90 transition-colors shadow-xs cursor-pointer"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>
                {artwork.status === 'available'
                  ? language === 'en'
                    ? 'Inquire for Acquisition'
                    : 'Əldə etmək üçün sorğu göndər'
                  : language === 'en'
                  ? 'Request Archival Print / Info'
                  : 'Arxiv nüsxəsi üçün sorğu'}
              </span>
            </button>

            <p className="text-center font-mono text-[10px] text-text/50 tracking-wider">
              {language === 'en'
                ? 'Worldwide archival shipping with Certificate of Authenticity'
                : 'Orijinallıq Sertifikatı ilə beynəlxalq arxiv çatdırılması'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

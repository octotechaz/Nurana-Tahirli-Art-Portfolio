import React, { useState } from 'react';
import { Artwork, Discipline, Language } from '../data/portfolioData';
import { Filter, Eye, Layers } from 'lucide-react';

interface CatalogGridProps {
  artworks: Artwork[];
  disciplines: Discipline[];
  language: Language;
  onSelectArtwork: (artwork: Artwork) => void;
  onSwitchToPromenade: () => void;
}

export const CatalogGrid: React.FC<CatalogGridProps> = ({
  artworks,
  disciplines,
  language,
  onSelectArtwork,
  onSwitchToPromenade,
}) => {
  const [selectedDisciplineId, setSelectedDisciplineId] = useState<string>('all');
  const [selectedStatus, setSelectedStatus] = useState<string>('all');

  const filteredArtworks = artworks.filter((item) => {
    const matchDiscipline =
      selectedDisciplineId === 'all' || item.disciplineId === selectedDisciplineId;
    const matchStatus = selectedStatus === 'all' || item.status === selectedStatus;
    return matchDiscipline && matchStatus;
  });

  return (
    <section className="w-full bg-background pt-10 pb-20 border-b border-surface/50" id="catalog-view">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Catalog Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-surface/60">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-tag" />
              <span className="font-mono text-[11px] uppercase tracking-widest text-tag font-semibold">
                {language === 'en' ? 'Archival Collection Index' : 'Arxiv Kolleksiyası İndeksi'}
              </span>
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-text tracking-tight">
              {language === 'en' ? 'Complete Catalog of Works' : 'Bütün Əsərlərin Kataloqu'}
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={onSwitchToPromenade}
              className="flex items-center gap-1.5 px-4 py-2 rounded-lg border border-surface bg-surface/30 hover:bg-surface/60 font-mono text-xs uppercase tracking-wider text-text transition-colors cursor-pointer"
            >
              <Layers className="w-3.5 h-3.5 text-accent" />
              <span>{language === 'en' ? 'Switch to Promenade View' : 'Panellər Görünüşünə Keç'}</span>
            </button>
          </div>
        </div>

        {/* Filter Bar */}
        <div className="py-6 flex flex-wrap items-center justify-between gap-4 border-b border-surface/40">
          {/* Discipline Filters */}
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="font-mono text-[11px] uppercase text-text/50 mr-2 flex items-center gap-1">
              <Filter className="w-3 h-3" />
              {language === 'en' ? 'Series:' : 'Seriya:'}
            </span>
            <button
              type="button"
              onClick={() => setSelectedDisciplineId('all')}
              className={`px-3 py-1 rounded-full text-xs font-mono transition-colors cursor-pointer ${
                selectedDisciplineId === 'all'
                  ? 'bg-accent text-[#FDFBF7] font-semibold'
                  : 'bg-surface/50 text-text/70 hover:text-text'
              }`}
            >
              {language === 'en' ? 'All (5)' : 'Hamısı (5)'}
            </button>
            {disciplines.map((d) => (
              <button
                key={d.id}
                type="button"
                onClick={() => setSelectedDisciplineId(d.id)}
                className={`px-3 py-1 rounded-full text-xs font-mono transition-colors cursor-pointer ${
                  selectedDisciplineId === d.id
                    ? 'bg-accent text-[#FDFBF7] font-semibold'
                    : 'bg-surface/50 text-text/70 hover:text-text'
                }`}
              >
                {d.title[language]}
              </button>
            ))}
          </div>

          {/* Availability Status Filters */}
          <div className="flex items-center gap-1.5">
            <span className="font-mono text-[11px] uppercase text-text/50 mr-1">
              {language === 'en' ? 'Status:' : 'Status:'}
            </span>
            <button
              type="button"
              onClick={() => setSelectedStatus('all')}
              className={`px-2.5 py-1 text-xs font-mono rounded-md border transition-colors cursor-pointer ${
                selectedStatus === 'all'
                  ? 'border-tag bg-tag/10 text-tag font-medium'
                  : 'border-surface text-text/60'
              }`}
            >
              {language === 'en' ? 'All' : 'Bütün'}
            </button>
            <button
              type="button"
              onClick={() => setSelectedStatus('available')}
              className={`px-2.5 py-1 text-xs font-mono rounded-md border transition-colors cursor-pointer ${
                selectedStatus === 'available'
                  ? 'border-tag bg-tag/10 text-tag font-medium'
                  : 'border-surface text-text/60'
              }`}
            >
              {language === 'en' ? 'Available' : 'Əldə edilə bilən'}
            </button>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pt-8">
          {filteredArtworks.map((artwork) => (
            <div
              key={artwork.id}
              onClick={() => onSelectArtwork(artwork)}
              className="group bg-surface/20 border border-surface rounded-xl p-4 transition-all duration-300 hover:shadow-md hover:bg-surface/40 cursor-pointer flex flex-col justify-between"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter') onSelectArtwork(artwork);
              }}
            >
              <div>
                {/* Artwork Image Container */}
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-[#FAF7F2] mb-4">
                  <img
                    src={artwork.imageUrl}
                    alt={artwork.altText}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-tag px-2.5 py-0.5 rounded-full bg-[#FDFBF7]/90 border border-tag/30 shadow-xs">
                      {artwork.tag[language]}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                    <span className="flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-[#FDFBF7] bg-black/60 px-3 py-1.5 rounded-full backdrop-blur-xs">
                      <Eye className="w-3.5 h-3.5 text-accent" />
                      {language === 'en' ? 'Inspect Artwork' : 'Əsərə Bax'}
                    </span>
                  </div>
                </div>

                {/* Plaque Metadata */}
                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] uppercase tracking-widest text-accent font-semibold">
                      {artwork.seriesTag[language]}
                    </span>
                    <span className="font-mono text-[11px] text-text/60">{artwork.year}</span>
                  </div>
                  <h3 className="font-display italic text-xl font-bold text-text group-hover:text-accent transition-colors">
                    {artwork.title[language]}
                  </h3>
                  <p className="font-mono text-xs text-text/70 line-clamp-2 pt-1">
                    {artwork.medium[language]}
                  </p>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-surface/70 flex items-center justify-between text-xs font-mono">
                <span className="text-text/60">{artwork.dimensions}</span>
                <span className="text-tag font-medium group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                  {artwork.status === 'available'
                    ? language === 'en'
                      ? 'Available →'
                      : 'Mövcuddur →'
                    : language === 'en'
                    ? 'Catalogued'
                    : 'Kataloqda'}
                </span>
              </div>
            </div>
          ))}
        </div>

        {filteredArtworks.length === 0 && (
          <div className="py-20 text-center font-mono text-sm text-text/60">
            {language === 'en'
              ? 'No artworks match the selected filters.'
              : 'Seçilmiş filtrlərə uyğun əsər tapılmadı.'}
          </div>
        )}
      </div>
    </section>
  );
};

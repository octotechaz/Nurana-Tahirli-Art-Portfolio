import React from 'react';
import { Discipline, Artwork, Language } from '../data/portfolioData';
import { X, Wrench, Sparkles, ArrowRight, Eye } from 'lucide-react';

interface DisciplineModalProps {
  discipline: Discipline | null;
  artworks: Artwork[];
  language: Language;
  onClose: () => void;
  onSelectArtwork: (artwork: Artwork) => void;
}

export const DisciplineModal: React.FC<DisciplineModalProps> = ({
  discipline,
  artworks,
  language,
  onClose,
  onSelectArtwork,
}) => {
  if (!discipline) return null;

  const disciplineArtworks = artworks.filter((a) => a.disciplineId === discipline.id);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 sm:p-6 md:p-10 animate-fadeIn overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-label={discipline.title[language]}
    >
      <div className="relative w-full max-w-4xl max-h-[92vh] bg-[#FDFBF7] rounded-2xl overflow-hidden shadow-2xl flex flex-col border border-surface my-auto">
        {/* Header Hero Area */}
        <div className="relative h-56 sm:h-72 w-full overflow-hidden bg-surface">
          <img
            src={discipline.heroImage}
            alt={discipline.altText}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#FDFBF7] via-black/40 to-black/20" />

          {/* Close button */}
          <button
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-black/50 hover:bg-black/70 text-[#FDFBF7] transition-colors duration-200 cursor-pointer"
            aria-label="Close discipline overview"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Bottom Title inside hero banner */}
          <div className="absolute bottom-6 left-6 right-6 z-10">
            <span className="font-mono text-[11px] uppercase tracking-widest text-tag font-semibold bg-[#FDFBF7]/90 px-3 py-1 rounded-full border border-tag/30 inline-block mb-2 backdrop-blur-xs">
              {discipline.eyebrow[language]}
            </span>
            <h2 className="font-display italic text-3xl sm:text-4xl font-bold text-text tracking-tight">
              {discipline.title[language]}
            </h2>
          </div>
        </div>

        {/* Scrollable Content Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8 flex-1">
          {/* Curatorial Essay & Philosophy */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 space-y-4">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                <h3 className="font-mono text-xs uppercase tracking-widest text-accent font-semibold">
                  {language === 'en' ? 'Discipline Philosophy' : 'Fənn Fəlsəfəsi'}
                </h3>
              </div>
              <p className="font-display italic text-lg sm:text-xl text-text leading-relaxed">
                “{discipline.statement[language]}”
              </p>
              <p className="text-sm text-text/80 leading-relaxed font-sans pt-1">
                {discipline.description[language]}
              </p>
            </div>

            {/* Studio Tools & Substrates */}
            <div className="bg-surface/40 border border-surface rounded-xl p-5 space-y-3">
              <div className="flex items-center gap-2 text-tag">
                <Wrench className="w-4 h-4" />
                <span className="font-mono text-xs uppercase tracking-wider font-semibold">
                  {language === 'en' ? 'Studio Methods' : 'Emalatxana Metodları'}
                </span>
              </div>
              <p className="font-mono text-xs text-text/80 leading-relaxed">
                {discipline.tools[language]}
              </p>
              <div className="pt-2 border-t border-surface text-[11px] font-mono text-text/60">
                {language === 'en' ? 'Archival durability guarantee' : 'Muzey səviyyəli davamlılıq'}
              </div>
            </div>
          </div>

          {/* Featured Works from this Discipline */}
          <div className="pt-4 border-t border-surface/70">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-accent" />
                <h3 className="font-mono text-xs uppercase tracking-widest text-text font-semibold">
                  {language === 'en' ? 'Curated Works in Series' : 'Seriyadakı Seçilmiş Əsərlər'}
                </h3>
              </div>
              <span className="font-mono text-xs text-text/60">
                {disciplineArtworks.length} {language === 'en' ? 'records' : 'əsər'}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {disciplineArtworks.map((work) => (
                <div
                  key={work.id}
                  onClick={() => {
                    onClose();
                    onSelectArtwork(work);
                  }}
                  className="group flex gap-4 p-3 rounded-xl bg-surface/20 border border-surface/80 hover:bg-surface/50 transition-all duration-200 cursor-pointer"
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      onClose();
                      onSelectArtwork(work);
                    }
                  }}
                >
                  <div className="w-24 h-24 rounded-lg overflow-hidden bg-background shrink-0 relative">
                    <img
                      src={work.imageUrl}
                      alt={work.altText}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="flex flex-col justify-between py-0.5 min-w-0">
                    <div>
                      <span className="font-mono text-[10px] text-accent uppercase tracking-wider block">
                        {work.year} · {work.tag[language]}
                      </span>
                      <h4 className="font-display italic font-semibold text-base text-text truncate group-hover:text-accent transition-colors">
                        {work.title[language]}
                      </h4>
                      <p className="font-mono text-[11px] text-text/60 truncate mt-0.5">
                        {work.dimensions}
                      </p>
                    </div>
                    <span className="inline-flex items-center gap-1 font-mono text-[10px] uppercase text-text/70 group-hover:text-accent transition-colors">
                      <Eye className="w-3 h-3" />
                      <span>{language === 'en' ? 'Inspect Artwork' : 'Əsərə Bax'}</span>
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:px-8 bg-surface/30 border-t border-surface flex items-center justify-between text-xs font-mono">
          <span className="text-text/60">
            {language === 'en' ? 'Exhibition Archive © Nurana th' : 'Sərgi Arxivi © Nurana th'}
          </span>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg border border-surface bg-background text-text hover:text-accent transition-colors cursor-pointer"
          >
            {language === 'en' ? 'Close View' : 'Bağla'}
          </button>
        </div>
      </div>
    </div>
  );
};

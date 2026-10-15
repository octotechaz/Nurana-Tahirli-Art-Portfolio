import React from 'react';
import { Discipline, CuratorialInterlude, Language } from '../data/portfolioData';
import { ArrowDown } from 'lucide-react';
import { CuratorialPrelude } from './CuratorialPrelude';

interface SeriesSectionProps {
  disciplines: Discipline[];
  interludes: CuratorialInterlude[];
  language: Language;
  onSelectDiscipline: (discipline: Discipline) => void;
}

export const SeriesSection: React.FC<SeriesSectionProps> = ({
  disciplines,
  interludes,
  language,
  onSelectDiscipline,
}) => {
  const getInterludeForDiscipline = (disciplineId: string) =>
    interludes.find((i) => i.disciplineId === disciplineId) || interludes[0];

  return (
    <>
      {/* 3. CATEGORIES SECTION HEADER - Desktop row layout across all devices */}
      <section className="w-full bg-background pt-8 pb-5 border-b border-surface/50 relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-row items-end justify-between gap-4 flex-wrap">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="w-2 h-2 rounded-full bg-accent" />
              <span className="font-mono text-[11px] uppercase tracking-widest text-tag font-semibold">
                {language === 'en' ? 'Selected Works & Disciplines' : 'Seçilmiş Əsərlər və Fənlər'}
              </span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-text tracking-tight">
              {language === 'en' ? 'Series & Collections' : 'Seriyalar və Kolleksiyalar'}
            </h2>
          </div>
          <div className="flex items-center gap-4">
            <div className="font-mono text-xs text-text/70 tracking-wider uppercase bg-surface/50 border border-surface px-3 py-1 rounded-full shrink-0">
              {language === 'en' ? '05 Curated Disciplines' : '05 Kurasiya Edilmiş Sahə'}
            </div>
            <a
              href="#work"
              className="flex items-center gap-1.5 text-accent text-xs font-mono tracking-wider uppercase hover:opacity-80 transition-opacity shrink-0"
            >
              <span>{language === 'en' ? 'Explore' : 'Kəşf et'}</span>
              <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
            </a>
          </div>
        </div>
      </section>

      {/* MAIN PANELS STREAM: Each category preceded by its dedicated Curatorial Prelude */}
      <main className="w-full bg-background flex flex-col p-0" id="work">
        {disciplines.map((discipline) => {
          const interlude = getInterludeForDiscipline(discipline.id);
          const isGraphicDesign = discipline.id === 'graphic-design';

          return (
            <React.Fragment key={discipline.id}>
              {/* Category-Specific Curatorial Prelude Divider */}
              <CuratorialPrelude
                interlude={interlude}
                language={language}
              />

              {/* Category Panel - Desktop panoramic height across all screens */}
              <section
                onClick={() => onSelectDiscipline(discipline)}
                className={`group relative w-full h-[320px] sm:h-[350px] md:h-[380px] overflow-hidden border-b-[3px] border-background panel-container cursor-pointer select-none ${
                  isGraphicDesign ? 'shadow-xs' : ''
                }`}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    onSelectDiscipline(discipline);
                  }
                }}
                aria-label={`Explore ${discipline.title[language]}`}
              >
                {/* Background Artwork Image */}
                <div
                  className={`absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-500 ease-out group-hover:scale-105 ${
                    isGraphicDesign ? 'scale-[1.02]' : ''
                  }`}
                  data-alt={discipline.altText}
                  style={{ backgroundImage: `url('${discipline.heroImage}')` }}
                />

                {/* Overlay: Graphic design has lighter backdrop, others have atmospheric tint */}
                {isGraphicDesign ? (
                  <div className="absolute inset-0 bg-white/[0.58] md:bg-white/[0.52] backdrop-blur-[2px] transition-colors duration-250 group-hover:bg-white/[0.68]" />
                ) : (
                  <div className="absolute inset-0 bg-black/30 md:bg-black/20 group-hover:bg-white/[0.52] panel-hover-overlay" />
                )}

                {/* Centered Title: Desktop typography & presence across all devices */}
                <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none px-6">
                  <h2 className="font-display text-3xl sm:text-4xl md:text-[44px] font-bold text-text tracking-tight text-center drop-shadow-xs transition-colors duration-250">
                    {discipline.title[language]}
                  </h2>
                </div>
              </section>
            </React.Fragment>
          );
        })}
      </main>
    </>
  );
};

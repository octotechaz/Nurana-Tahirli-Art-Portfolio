import React from 'react';
import { Language } from '../data/portfolioData';
import { BLOOM_SERIES_PROJECT, ProjectDetail } from '../data/categoryArchiveData';

interface ProjectDetailViewProps {
  project?: ProjectDetail;
  language: Language;
  onBackToCategory: () => void;
  onSelectProject: (projectId: string) => void;
}

export const ProjectDetailView: React.FC<ProjectDetailViewProps> = ({
  project = BLOOM_SERIES_PROJECT,
  language,
  onBackToCategory,
  onSelectProject,
}) => {
  return (
    <div className="w-full min-h-screen pt-20 sm:pt-28 md:pt-36 pb-16 sm:pb-20 animate-fadeIn">
      {/* Centered Header Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 text-center mb-10 sm:mb-16 md:mb-24">
        {/* Back Link */}
        <div className="mb-4 sm:mb-5">
          <button
            type="button"
            onClick={onBackToCategory}
            className="inline-flex items-center gap-1.5 font-mono text-xs sm:text-sm uppercase tracking-wider text-tag font-semibold hover:text-accent transition-colors duration-250 cursor-pointer py-1 px-2 -ml-2 rounded"
          >
            ← {project.categoryTitle[language]}
          </button>
        </div>

        {/* Meta Info */}
        <div className="mb-3 sm:mb-4">
          <span className="font-mono text-[11px] sm:text-xs md:text-sm tracking-widest text-[#81B29A] uppercase font-medium">
            {project.categoryTitle[language].toUpperCase()} · {project.year}
          </span>
        </div>

        {/* Title */}
        <h1 className="font-display text-3xl sm:text-5xl md:text-7xl lg:text-[68px] font-bold text-text tracking-tight leading-[1.15] mb-4 sm:mb-6">
          {project.title[language]}
        </h1>

        {/* Short Description */}
        <p className="font-body text-sm sm:text-base md:text-xl text-text/80 max-w-2xl mx-auto leading-relaxed font-light mb-8 sm:mb-12">
          {project.description[language]}
        </p>

        {/* Thin Horizontal Divider Line */}
        <div className="w-full max-w-xl mx-auto h-[1px] bg-surface" />
      </section>

      {/* Artwork Gallery: 4 full-width artworks stacked vertically */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 space-y-12 sm:space-y-20 md:space-y-28">
        {project.artworks.map((art) => (
          <article key={art.number} className="flex flex-col items-center">
            <div className="w-full h-[40vh] sm:h-[55vh] md:h-[60vh] min-h-[240px] sm:min-h-[380px] md:min-h-[460px] max-h-[760px] bg-surface/30 rounded-xs overflow-hidden flex items-center justify-center p-2.5 sm:p-4 md:p-6 shadow-xs border border-surface/40 hover-lift">
              <img
                alt={art.altText}
                className="w-full h-full object-contain pointer-events-none select-none"
                src={art.imageUrl}
              />
            </div>
            <div className="w-full mt-3 sm:mt-5 px-1 sm:px-2 flex flex-wrap items-baseline justify-start text-xs sm:text-sm md:text-base">
              <span className="font-mono font-bold text-accent mr-2 sm:mr-3 tracking-wider text-sm sm:text-base">
                {art.number}
              </span>
              <span className="font-sans font-bold text-text mr-2 sm:mr-3">
                {art.title[language]}
              </span>
              <span className="font-sans text-text/60 font-normal">
                {art.caption[language]}
              </span>
            </div>
          </article>
        ))}
      </section>

      {/* Project Navigation Band */}
      <section className="mt-16 sm:mt-28 md:mt-36 bg-surface w-full py-6 sm:py-8 md:py-10 px-4 sm:px-6 border-t border-text/10">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 sm:gap-4 text-xs sm:text-sm md:text-base font-medium">
          {project.prevProject ? (
            <button
              type="button"
              onClick={() => onSelectProject(project.prevProject!.id)}
              className="inline-flex items-center justify-center sm:justify-start text-text/80 hover:text-accent font-sans transition-colors duration-250 group cursor-pointer py-2 px-3 rounded-md bg-surface/60 sm:bg-transparent border border-text/10 sm:border-0"
            >
              <span className="transition-transform duration-250 group-hover:-translate-x-1">
                ← {project.prevProject.title[language]}
              </span>
            </button>
          ) : (
            <span />
          )}

          {project.nextProject ? (
            <button
              type="button"
              onClick={() => onSelectProject(project.nextProject!.id)}
              className="inline-flex items-center justify-center sm:justify-end text-text/80 hover:text-accent font-sans transition-colors duration-250 group cursor-pointer py-2 px-3 rounded-md bg-surface/60 sm:bg-transparent border border-text/10 sm:border-0"
            >
              <span className="transition-transform duration-250 group-hover:translate-x-1">
                {project.nextProject.title[language]} →
              </span>
            </button>
          ) : (
            <span />
          )}
        </div>
      </section>
    </div>
  );
};

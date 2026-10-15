import React from 'react';
import { CategoryId, Language } from '../types';
import { TRANSLATIONS } from '../translations';

interface HomePageProps {
  language: Language;
  onSelectCategory: (category: CategoryId) => void;
  onOpenArtworkModal?: (imageSrc: string, title: string, caption?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  language,
  onSelectCategory,
  onOpenArtworkModal
}) => {
  const t = TRANSLATIONS[language];

  const heroImage = "https://lh3.googleusercontent.com/aida-public/AB6AXuBz7c9emUlnN2qd0TooKBhzWN2c2aq2mpVuwq5Fzxgba1hqKWTySdFSJfA5mo3YotvcZQNPybaxRtA3V7Q0IH3HqMUcRHsaOLlUrXJuHhL8Vsg8gE1WQ4zZrYewHqPm7yvkqFiZ7jFg_v3D8g4xCWSYJlB9Z4p39MqBjWhTiXCdm-w427-Np8aVgFfUfNUjbe6po6lyghev7QIh5OJWgZi6HRbzh9Fwxxt10TNSG0m-qw6lTX8ZmnvrSsNj9yMUY6jLwSFwOBtE2Ik";

  return (
    <main className="flex-grow flex flex-col justify-center">
      {/* First Viewport Hero Section */}
      <section className="max-w-6xl mx-auto px-6 pt-8 pb-16 md:pt-16 md:pb-24 w-full">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left Column: Sparse Poetic Bio + Single CTA */}
          <div className="md:col-span-6 lg:col-span-5 flex flex-col items-start pr-0 lg:pr-4">
            <h1 className="font-headline text-3xl sm:text-4xl lg:text-[40px] font-semibold text-[#2B2D42] tracking-tight leading-[1.25] mb-5">
              {t.home.heroTitle}
            </h1>
            <p className="font-body text-base lg:text-lg text-[#6C757D] leading-[1.65] font-light mb-8 max-w-md">
              {t.home.heroSubtitle}
            </p>
            <div>
              <button
                onClick={() => onSelectCategory('digital-illustration')}
                className="inline-flex items-center justify-center bg-[#E07A5F] hover:bg-[#d66e54] text-white font-headline text-sm font-medium tracking-wide px-8 py-3.5 rounded-full transition-all duration-200 hover:-translate-y-0.5 cursor-pointer shadow-sm active:scale-95"
              >
                {t.home.viewWork}
              </button>
            </div>
          </div>

          {/* Right Column: Warm Calm Hero Illustration */}
          <div className="md:col-span-6 lg:col-span-7 flex justify-center md:justify-end">
            <div
              onClick={() => onOpenArtworkModal?.(heroImage, "The Atelier Morning", "Studio Desk • Baku")}
              className="w-full max-w-lg lg:max-w-xl bg-[#F4F1DE]/40 p-3 sm:p-4 rounded-[24px] border border-[#E9ECEF] transition-all duration-300 hover:border-[#81B29A]/50 cursor-zoom-in"
              title="Click to view full image"
            >
              <div className="relative overflow-hidden rounded-2xl bg-[#F4F1DE]">
                <img
                  src={heroImage}
                  alt="Minimalist warm editorial art illustration of a serene female artist sketching peacefully in a sunlit warm pastel room, potted olive plant, gentle terracotta, sage green, soft almond cream tones"
                  className="w-full h-auto object-cover aspect-[1.34] block hover:scale-[1.015] transition-transform duration-500 ease-out"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Below the Fold: Selected Categories Section */}
      <section className="max-w-6xl mx-auto px-6 pt-4 pb-24 md:pb-32 w-full" id="work">
        <div className="mb-10 flex items-center justify-between">
          <h2 className="font-headline text-xs uppercase tracking-widest text-[#6C757D] font-medium">
            {t.home.selectedCategories}
          </h2>
          <span className="w-12 h-px bg-[#E9ECEF] hidden sm:block"></span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {/* Card 1: Digital Illustration */}
          <button
            onClick={() => onSelectCategory('digital-illustration')}
            className="group text-left block bg-[#F4F1DE] rounded-[20px] p-8 lg:p-10 border border-[#E9ECEF]/70 transition-all duration-200 hover:-translate-y-1 hover:border-[#81B29A]/60 cursor-pointer shadow-sm"
          >
            <div className="flex flex-col justify-between h-44">
              <div>
                <div className="w-2.5 h-2.5 rounded-full bg-[#81B29A] mb-6 opacity-90 group-hover:scale-125 transition-transform duration-200"></div>
                <h3 className="font-headline text-xl font-semibold text-[#2B2D42] tracking-tight group-hover:text-[#E07A5F] transition-colors duration-200">
                  {t.home.categories.digitalIllustration.title}
                </h3>
              </div>
              <div className="pt-4 border-t border-[#E9ECEF]/80 flex items-center justify-between">
                <span className="font-body text-xs text-[#6C757D] tracking-normal">
                  {t.home.categories.digitalIllustration.meta}
                </span>
                <span className="material-symbols-outlined text-sm text-[#6C757D] group-hover:text-[#E07A5F] group-hover:translate-x-1 transition-all duration-200">
                  arrow_forward
                </span>
              </div>
            </div>
          </button>

          {/* Card 2: Traditional Art */}
          <button
            onClick={() => onSelectCategory('traditional-art')}
            className="group text-left block bg-[#F4F1DE] rounded-[20px] p-8 lg:p-10 border border-[#E9ECEF]/70 transition-all duration-200 hover:-translate-y-1 hover:border-[#F2CC8F] cursor-pointer shadow-sm"
          >
            <div className="flex flex-col justify-between h-44">
              <div>
                <div className="w-2.5 h-2.5 rounded-full bg-[#F2CC8F] mb-6 opacity-90 group-hover:scale-125 transition-transform duration-200"></div>
                <h3 className="font-headline text-xl font-semibold text-[#2B2D42] tracking-tight group-hover:text-[#E07A5F] transition-colors duration-200">
                  {t.home.categories.traditionalArt.title}
                </h3>
              </div>
              <div className="pt-4 border-t border-[#E9ECEF]/80 flex items-center justify-between">
                <span className="font-body text-xs text-[#6C757D] tracking-normal">
                  {t.home.categories.traditionalArt.meta}
                </span>
                <span className="material-symbols-outlined text-sm text-[#6C757D] group-hover:text-[#E07A5F] group-hover:translate-x-1 transition-all duration-200">
                  arrow_forward
                </span>
              </div>
            </div>
          </button>

          {/* Card 3: Graphic Design */}
          <button
            onClick={() => onSelectCategory('graphic-design')}
            className="group text-left block bg-[#F4F1DE] rounded-[20px] p-8 lg:p-10 border border-[#E9ECEF]/70 transition-all duration-200 hover:-translate-y-1 hover:border-[#E07A5F]/60 cursor-pointer shadow-sm"
          >
            <div className="flex flex-col justify-between h-44">
              <div>
                <div className="w-2.5 h-2.5 rounded-full bg-[#E07A5F] mb-6 opacity-90 group-hover:scale-125 transition-transform duration-200"></div>
                <h3 className="font-headline text-xl font-semibold text-[#2B2D42] tracking-tight group-hover:text-[#E07A5F] transition-colors duration-200">
                  {t.home.categories.graphicDesign.title}
                </h3>
              </div>
              <div className="pt-4 border-t border-[#E9ECEF]/80 flex items-center justify-between">
                <span className="font-body text-xs text-[#6C757D] tracking-normal">
                  {t.home.categories.graphicDesign.meta}
                </span>
                <span className="material-symbols-outlined text-sm text-[#6C757D] group-hover:text-[#E07A5F] group-hover:translate-x-1 transition-all duration-200">
                  arrow_forward
                </span>
              </div>
            </div>
          </button>
        </div>
      </section>
    </main>
  );
};

import React, { useState } from 'react';
import {
  HERO_ARTWORK,
  DISCIPLINES,
  CURATORIAL_INTERLUDES,
  ARTWORKS,
  ARTIST_BIO,
  Artwork,
  Discipline,
  Language,
} from './data/portfolioData';
import { TopNavBar } from './components/TopNavBar';
import { HeroSection } from './components/HeroSection';
import { SeriesSection } from './components/SeriesSection';
import { CategoryArchiveView } from './components/CategoryArchiveView';
import { ProjectDetailView } from './components/ProjectDetailView';
import { ArtworkLightbox } from './components/ArtworkLightbox';
import { DisciplineModal } from './components/DisciplineModal';
import { AboutModal } from './components/AboutModal';
import { InquiryModal } from './components/InquiryModal';
import { ColophonModal } from './components/ColophonModal';
import { Footer } from './components/Footer';
import { ArrowRight, Mail } from 'lucide-react';

type ActivePage =
  | { type: 'home' }
  | { type: 'category'; categoryId: string }
  | { type: 'project'; projectId: string; categoryId: string };

export default function App() {
  const [language, setLanguage] = useState<Language>('en');
  const [activePage, setActivePage] = useState<ActivePage>({ type: 'home' });

  const [selectedArtwork, setSelectedArtwork] = useState<Artwork | null>(null);
  const [selectedDisciplineModal, setSelectedDisciplineModal] = useState<Discipline | null>(null);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);
  const [inquiryArtwork, setInquiryArtwork] = useState<Artwork | null>(null);
  const [isColophonOpen, setIsColophonOpen] = useState(false);

  const handleOpenInquiry = (artwork?: Artwork) => {
    setInquiryArtwork(artwork || null);
    setIsInquiryOpen(true);
  };

  const handleSelectDiscipline = (discipline: Discipline) => {
    setActivePage({ type: 'category', categoryId: discipline.id });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleGoHome = () => {
    setActivePage({ type: 'home' });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentCategoryDiscipline =
    activePage.type === 'category' || activePage.type === 'project'
      ? DISCIPLINES.find((d) => d.id === activePage.categoryId) || DISCIPLINES[0]
      : DISCIPLINES[0];

  return (
    <div className="bg-background text-text antialiased selection:bg-accent/20 selection:text-accent min-h-screen flex flex-col font-body overflow-x-hidden w-full">
      {/* 1. Top Navigation Bar */}
      <TopNavBar
        language={language}
        onLanguageChange={setLanguage}
        onOpenAbout={() => setIsAboutOpen(true)}
        onOpenContact={() => handleOpenInquiry()}
        onOpenColophon={() => setIsColophonOpen(true)}
        onGoHome={handleGoHome}
        currentPageType={activePage.type}
      />

      {/* Main Content Area: Home View, Category Archive View, or Project Detail View */}
      {activePage.type === 'home' && (
        <>
          {/* 2. Hero Section */}
          <HeroSection
            artwork={HERO_ARTWORK}
            language={language}
            onSelectArtwork={setSelectedArtwork}
          />

          {/* 3. Works Section: Promenade Mode */}
          <SeriesSection
            disciplines={DISCIPLINES}
            interludes={CURATORIAL_INTERLUDES}
            language={language}
            onSelectDiscipline={handleSelectDiscipline}
          />

          {/* 4. In-Page Editorial Bio & Studio Statement Section (#about) */}
          <section
            id="about"
            className="w-full py-16 md:py-24 bg-surface/30 border-t border-b border-surface/70"
          >
            <div className="max-w-5xl mx-auto px-6 md:px-12 text-left">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
                <div className="space-y-4 max-w-2xl">
                  <div className="flex items-center gap-2 justify-start">
                    <span className="w-2 h-2 rounded-full bg-accent" />
                    <span className="font-mono text-[11px] uppercase tracking-widest text-tag font-semibold">
                      {language === 'en' ? 'Artist & Studio Philosophy' : 'Rəssam və Emalatxana Fəlsəfəsi'}
                    </span>
                  </div>
                  <h3 className="font-display italic text-2xl md:text-3xl font-bold text-text tracking-tight">
                    {language === 'en'
                      ? 'Transcribing the quiet architecture of flora into lasting pigment on paper.'
                      : 'Floranın sakit memarlığını kağız üzərində qalıcı piqmentə köçürmək.'}
                  </h3>
                  <p className="text-sm md:text-base text-text/80 leading-relaxed font-sans">
                    {ARTIST_BIO.shortBio[language]}
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row md:flex-col gap-3 w-full md:w-auto shrink-0">
                  <button
                    type="button"
                    onClick={() => setIsAboutOpen(true)}
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg border border-surface bg-background text-text font-mono text-xs uppercase tracking-wider font-semibold hover:border-accent hover:text-accent transition-colors shadow-xs cursor-pointer"
                  >
                    <span>
                      {language === 'en' ? 'Read Full Monograph & Bio' : 'Monoqrafiya və Bioqrafiyanı Oxu'}
                    </span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    type="button"
                    onClick={() => handleOpenInquiry()}
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-accent text-[#FDFBF7] font-mono text-xs uppercase tracking-wider font-semibold hover:bg-accent/90 transition-colors shadow-xs cursor-pointer"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>
                      {language === 'en' ? 'Commission / Acquisition Desk' : 'Sifariş & Əldəetmə Şöbəsi'}
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </section>
        </>
      )}

      {/* Category Archive View */}
      {activePage.type === 'category' && (
        <CategoryArchiveView
          discipline={currentCategoryDiscipline}
          disciplinesList={DISCIPLINES}
          language={language}
          onBackToHome={handleGoHome}
          onSelectProject={(projectId) => {
            setActivePage({
              type: 'project',
              projectId,
              categoryId: activePage.categoryId,
            });
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          onSwitchDiscipline={(newId) => {
            setActivePage({ type: 'category', categoryId: newId });
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        />
      )}

      {/* Project Detail View (e.g. Bloom Series) */}
      {activePage.type === 'project' && (
        <ProjectDetailView
          language={language}
          onBackToCategory={() => {
            setActivePage({ type: 'category', categoryId: activePage.categoryId });
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          onSelectProject={(newProjectId) => {
            setActivePage({
              type: 'project',
              projectId: newProjectId,
              categoryId: activePage.categoryId,
            });
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        />
      )}

      {/* Footer */}
      <Footer
        language={language}
        onOpenColophon={() => setIsColophonOpen(true)}
        onOpenContact={() => handleOpenInquiry()}
      />

      {/* Interactive Overlays & Modals */}
      {selectedArtwork && (
        <ArtworkLightbox
          artwork={selectedArtwork}
          artworksList={ARTWORKS}
          language={language}
          onClose={() => setSelectedArtwork(null)}
          onSelectArtwork={setSelectedArtwork}
          onInquire={handleOpenInquiry}
        />
      )}

      {selectedDisciplineModal && (
        <DisciplineModal
          discipline={selectedDisciplineModal}
          artworks={ARTWORKS}
          language={language}
          onClose={() => setSelectedDisciplineModal(null)}
          onSelectArtwork={setSelectedArtwork}
        />
      )}

      {isAboutOpen && (
        <AboutModal
          isOpen={isAboutOpen}
          language={language}
          onClose={() => setIsAboutOpen(false)}
          onOpenContact={() => {
            setIsAboutOpen(false);
            handleOpenInquiry();
          }}
        />
      )}

      {isInquiryOpen && (
        <InquiryModal
          isOpen={isInquiryOpen}
          selectedArtwork={inquiryArtwork}
          language={language}
          onClose={() => {
            setIsInquiryOpen(false);
            setInquiryArtwork(null);
          }}
        />
      )}

      {isColophonOpen && (
        <ColophonModal
          isOpen={isColophonOpen}
          language={language}
          onClose={() => setIsColophonOpen(false)}
        />
      )}
    </div>
  );
}

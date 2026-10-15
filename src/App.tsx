import React, { useState, useEffect } from 'react';
import { CategoryId, Inquiry, Language, Artwork } from './types';
import { ARTWORKS_DATA, EXHIBITIONS_DATA, INITIAL_INQUIRIES } from './data/portfolioData';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './components/HomePage';
import { CategoryPage } from './components/CategoryPage';
import { CaseStudyPage } from './components/CaseStudyPage';
import { AboutContactPage } from './components/AboutContactPage';
import { StudioCMSPage } from './components/StudioCMSPage';
import { LightboxModal } from './components/LightboxModal';

export default function App() {
  const [currentView, setCurrentView] = useState<'home' | 'category' | 'case-study' | 'about' | 'contact' | 'studio-cms'>('home');
  const [selectedCategory, setSelectedCategory] = useState<CategoryId>('digital-illustration');
  const [selectedArtworkId, setSelectedArtworkId] = useState<string>('wanderer-portrait');
  const [language, setLanguage] = useState<Language>('EN');
  const [artworks, setArtworks] = useState<Artwork[]>(ARTWORKS_DATA);
  const [inquiries, setInquiries] = useState<Inquiry[]>(INITIAL_INQUIRIES);

  // Lightbox modal state
  const [lightbox, setLightbox] = useState<{
    isOpen: boolean;
    imageSrc: string;
    title: string;
    caption?: string;
  }>({
    isOpen: false,
    imageSrc: '',
    title: '',
    caption: ''
  });

  // Scroll to top on view changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentView, selectedArtworkId, selectedCategory]);

  const handleNavigate = (view: string, categoryId?: string, projectId?: string) => {
    if (view === 'category') {
      if (categoryId) setSelectedCategory(categoryId as CategoryId);
      setCurrentView('category');
    } else if (view === 'case-study') {
      if (projectId) setSelectedArtworkId(projectId);
      setCurrentView('case-study');
    } else if (view === 'about') {
      setCurrentView('about');
    } else if (view === 'contact') {
      setCurrentView('contact');
      // Scroll to contact form if already on about/contact page
      setTimeout(() => {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else if (view === 'studio-cms') {
      setCurrentView('studio-cms');
    } else {
      setCurrentView('home');
    }
  };

  const handleSelectCategoryFromHome = (category: CategoryId) => {
    setSelectedCategory(category);
    setCurrentView('category');
  };

  const handleSelectArtwork = (artworkId: string) => {
    setSelectedArtworkId(artworkId);
    setCurrentView('case-study');
  };

  const handleOpenLightbox = (imageSrc: string, title: string, caption?: string) => {
    setLightbox({
      isOpen: true,
      imageSrc,
      title,
      caption
    });
  };

  const handleAddInquiry = (newInquiryData: Omit<Inquiry, 'id' | 'date' | 'status'>) => {
    const newInquiry: Inquiry = {
      ...newInquiryData,
      id: `inq-${Date.now()}`,
      date: 'Just now',
      status: 'awaiting'
    };
    setInquiries(prev => [newInquiry, ...prev]);
  };

  const handleUpdateInquiryStatus = (inquiryId: string, status: Inquiry['status']) => {
    setInquiries(prev =>
      prev.map(item => (item.id === inquiryId ? { ...item, status } : item))
    );
  };

  const handleUpdateArtwork = (updatedArtwork: Artwork) => {
    setArtworks(prev =>
      prev.map(art => (art.id === updatedArtwork.id ? updatedArtwork : art))
    );
  };

  const currentArtwork = artworks.find(a => a.id === selectedArtworkId) || artworks[0];

  return (
    <div className="bg-[#FDFBF7] text-[#2B2D42] min-h-screen flex flex-col justify-between selection:bg-[#F2CC8F]/50 selection:text-[#2B2D42] font-body">
      {/* Top Navigation Bar */}
      <Header
        currentView={currentView}
        onNavigate={handleNavigate}
        language={language}
        onLanguageChange={setLanguage}
        isCMSView={currentView === 'studio-cms'}
      />

      {/* Main View Router */}
      <div className="flex-grow flex flex-col">
        {currentView === 'home' && (
          <HomePage
            language={language}
            onSelectCategory={handleSelectCategoryFromHome}
            onOpenArtworkModal={handleOpenLightbox}
          />
        )}

        {currentView === 'category' && (
          <CategoryPage
            category={selectedCategory}
            artworks={artworks}
            language={language}
            onNavigateHome={() => setCurrentView('home')}
            onSelectArtwork={handleSelectArtwork}
            onOpenLightbox={handleOpenLightbox}
          />
        )}

        {currentView === 'case-study' && (
          <CaseStudyPage
            artwork={currentArtwork}
            allArtworks={artworks}
            language={language}
            onNavigateCategory={(cat) => {
              setSelectedCategory(cat);
              setCurrentView('category');
            }}
            onNavigateArtwork={handleSelectArtwork}
            onOpenLightbox={handleOpenLightbox}
          />
        )}

        {(currentView === 'about' || currentView === 'contact') && (
          <AboutContactPage
            exhibitions={EXHIBITIONS_DATA}
            language={language}
            onAddInquiry={handleAddInquiry}
            onOpenLightbox={handleOpenLightbox}
          />
        )}

        {currentView === 'studio-cms' && (
          <StudioCMSPage
            artworks={artworks}
            inquiries={inquiries}
            language={language}
            onNavigateSite={() => setCurrentView('home')}
            onPreviewCaseStudy={handleSelectArtwork}
            onUpdateInquiryStatus={handleUpdateInquiryStatus}
            onUpdateArtwork={handleUpdateArtwork}
          />
        )}
      </div>

      {/* Shared Footer */}
      <Footer
        language={language}
        onNavigateCMS={() => setCurrentView('studio-cms')}
        isCMS={currentView === 'studio-cms'}
      />

      {/* Lightbox / Art Detail Modal */}
      <LightboxModal
        isOpen={lightbox.isOpen}
        imageSrc={lightbox.imageSrc}
        title={lightbox.title}
        caption={lightbox.caption}
        onClose={() => setLightbox(prev => ({ ...prev, isOpen: false }))}
      />
    </div>
  );
}

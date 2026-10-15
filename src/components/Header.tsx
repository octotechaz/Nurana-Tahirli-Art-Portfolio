import React, { useState } from 'react';
import { Language } from '../types';
import { TRANSLATIONS } from '../translations';

interface HeaderProps {
  currentView: string;
  onNavigate: (view: string, categoryId?: string, projectId?: string) => void;
  language: Language;
  onLanguageChange: (lang: Language) => void;
  isCMSView?: boolean;
}

export const Header: React.FC<HeaderProps> = ({
  currentView,
  onNavigate,
  language,
  onLanguageChange,
  isCMSView = false
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = TRANSLATIONS[language];

  const handleNavClick = (view: string, categoryId?: string) => {
    onNavigate(view, categoryId);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-[#FDFBF7]/90 backdrop-blur-md border-b border-[#E9ECEF]/80 transition-all duration-200">
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Brand Logo & Mode */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => handleNavClick('home')}
            className="font-headline text-lg font-semibold tracking-tight text-[#2B2D42] hover:text-[#E07A5F] transition-colors duration-200 text-left cursor-pointer"
          >
            Nurana th
          </button>
          
          {isCMSView && (
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-mono tracking-wider bg-[#F4F1DE] text-[#2B2D42]/75 border border-[#E9ECEF]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#81B29A] animate-pulse"></span>
              {t.nav.studioCMSPreview}
            </span>
          )}
        </div>

        {/* Desktop Navigation */}
        <div className="hidden sm:flex items-center gap-8">
          {isCMSView ? (
            <nav className="flex items-center gap-6">
              <button
                onClick={() => handleNavClick('home')}
                className="font-headline text-sm font-normal text-[#6C757D] hover:text-[#E07A5F] transition-colors duration-200 flex items-center gap-1.5 cursor-pointer"
              >
                <span className="material-symbols-outlined text-[17px]">arrow_back</span>
                {t.nav.backToSite}
              </button>
              <span className="font-headline text-sm font-medium text-[#E07A5F]">
                {t.nav.workspace}
              </span>
            </nav>
          ) : (
            <nav className="flex items-center gap-8 font-headline text-sm tracking-tight">
              <button
                onClick={() => handleNavClick('category', 'digital-illustration')}
                className={`font-medium transition-colors duration-200 cursor-pointer ${
                  currentView === 'category' || currentView === 'case-study'
                    ? 'text-[#E07A5F]'
                    : 'text-[#6C757D] hover:text-[#E07A5F]'
                }`}
              >
                {t.nav.categories}
              </button>
              <button
                onClick={() => handleNavClick('about')}
                className={`transition-colors duration-200 flex items-center gap-1.5 cursor-pointer ${
                  currentView === 'about'
                    ? 'text-[#E07A5F] font-medium'
                    : 'text-[#6C757D] hover:text-[#E07A5F] font-normal'
                }`}
              >
                {t.nav.about}
                {currentView === 'about' && (
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#E07A5F]"></span>
                )}
              </button>
              <button
                onClick={() => handleNavClick('contact')}
                className={`transition-colors duration-200 cursor-pointer ${
                  currentView === 'contact'
                    ? 'text-[#E07A5F] font-medium'
                    : 'text-[#6C757D] hover:text-[#E07A5F] font-normal'
                }`}
              >
                {t.nav.contact}
              </button>
            </nav>
          )}

          <div className="h-3.5 w-px bg-[#E9ECEF]"></div>

          {/* Language Switcher */}
          <div className="text-xs font-mono tracking-wider select-none flex items-center gap-1.5">
            <button
              onClick={() => onLanguageChange('EN')}
              className={`transition-colors cursor-pointer ${
                language === 'EN'
                  ? 'text-[#E07A5F] font-bold'
                  : 'text-[#6C757D] hover:text-[#2B2D42]'
              }`}
            >
              EN
            </button>
            <span className="text-neutral-300">|</span>
            <button
              onClick={() => onLanguageChange('AZ')}
              className={`transition-colors cursor-pointer ${
                language === 'AZ'
                  ? 'text-[#E07A5F] font-bold'
                  : 'text-[#6C757D] hover:text-[#2B2D42]'
              }`}
            >
              AZ
            </button>
          </div>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex sm:hidden items-center gap-3">
          <div className="text-xs font-mono tracking-wider flex items-center gap-1">
            <button
              onClick={() => onLanguageChange(language === 'EN' ? 'AZ' : 'EN')}
              className="text-[#E07A5F] font-semibold px-2 py-1 rounded bg-[#F4F1DE]/60"
            >
              {language}
            </button>
          </div>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="w-11 h-11 flex items-center justify-center rounded-full text-[#2B2D42] hover:text-[#E07A5F] active:scale-95 transition-all duration-150"
          >
            <span className="material-symbols-outlined text-[26px]">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden px-4 pb-6 pt-2 transition-all duration-300 ease-out border-t border-[#E9ECEF]/60 bg-[#FDFBF7]">
          <div className="bg-[#F4F1DE]/90 rounded-2xl p-5 shadow-sm space-y-3">
            <nav className="flex flex-col space-y-1">
              <button
                onClick={() => handleNavClick('home')}
                className={`min-h-[44px] flex items-center px-3 rounded-lg text-base text-left transition-colors ${
                  currentView === 'home' ? 'text-[#E07A5F] font-medium' : 'text-[#6C757D]'
                }`}
              >
                {t.category.home}
              </button>
              <button
                onClick={() => handleNavClick('category', 'digital-illustration')}
                className={`min-h-[44px] flex items-center px-3 rounded-lg text-base text-left transition-colors ${
                  currentView === 'category' || currentView === 'case-study'
                    ? 'text-[#E07A5F] font-medium'
                    : 'text-[#6C757D]'
                }`}
              >
                {t.nav.categories}
              </button>
              <button
                onClick={() => handleNavClick('about')}
                className={`min-h-[44px] flex items-center px-3 rounded-lg text-base text-left transition-colors ${
                  currentView === 'about' ? 'text-[#E07A5F] font-medium' : 'text-[#6C757D]'
                }`}
              >
                {t.nav.about}
              </button>
              <button
                onClick={() => handleNavClick('contact')}
                className={`min-h-[44px] flex items-center px-3 rounded-lg text-base text-left transition-colors ${
                  currentView === 'contact' ? 'text-[#E07A5F] font-medium' : 'text-[#6C757D]'
                }`}
              >
                {t.nav.contact}
              </button>
              <button
                onClick={() => handleNavClick('studio-cms')}
                className={`min-h-[44px] flex items-center px-3 rounded-lg text-base text-left transition-colors border-t border-[#E9ECEF]/70 pt-2 ${
                  currentView === 'studio-cms' ? 'text-[#E07A5F] font-medium' : 'text-[#6C757D]'
                }`}
              >
                <span className="material-symbols-outlined text-[18px] mr-2">space_dashboard</span>
                {t.nav.workspace}
              </button>
            </nav>

            <div className="pt-3 border-t border-[#E9ECEF] flex items-center justify-between px-3 text-xs tracking-wider text-[#6C757D] font-mono uppercase">
              <span>{t.nav.language}</span>
              <div className="flex gap-2">
                <button
                  onClick={() => onLanguageChange('EN')}
                  className={`px-2 py-0.5 rounded ${language === 'EN' ? 'bg-[#E07A5F] text-white font-bold' : 'text-[#2B2D42]'}`}
                >
                  EN
                </button>
                <button
                  onClick={() => onLanguageChange('AZ')}
                  className={`px-2 py-0.5 rounded ${language === 'AZ' ? 'bg-[#E07A5F] text-white font-bold' : 'text-[#2B2D42]'}`}
                >
                  AZ
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

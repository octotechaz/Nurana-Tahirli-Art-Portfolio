import React from 'react';
import { Language } from '../data/portfolioData';

interface TopNavBarProps {
  language: Language;
  onLanguageChange: (lang: Language) => void;
  onOpenAbout: () => void;
  onOpenContact: () => void;
  onOpenColophon: () => void;
  onGoHome?: () => void;
  currentPageType?: 'home' | 'category' | 'project';
}

export const TopNavBar: React.FC<TopNavBarProps> = ({
  language,
  onLanguageChange,
  onOpenAbout,
  onOpenContact,
  onGoHome,
  currentPageType = 'home',
}) => {
  const t = {
    work: language === 'en' ? 'Work' : 'İşlər',
    about: language === 'en' ? 'About' : 'Haqqında',
    contact: language === 'en' ? 'Contact' : 'Əlaqə',
  };

  const handleNavClick = (sectionId: string) => {
    if (currentPageType !== 'home' && onGoHome) {
      onGoHome();
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }, 50);
      return;
    }

    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 h-16 w-full z-50 bg-[#FDFBF7]/90 backdrop-blur-md border-b border-surface/50 transition-all duration-250">
      <div className="h-16 w-full px-4 sm:px-6 md:px-12 flex items-center justify-between mx-auto max-w-7xl">
        {/* Brand Logo Anchor */}
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('hero');
          }}
          className="font-display italic text-xl sm:text-2xl font-bold text-accent tracking-tight hover:opacity-80 transition-opacity duration-250 cursor-pointer shrink-0"
        >
          nurana th
        </a>

        {/* Center / Right Navigation Cluster - Unified Desktop Layout on All Devices */}
        <div className="flex items-center gap-3 sm:gap-6 md:gap-8">
          <nav className="flex items-center gap-3 sm:gap-6 md:gap-8">
            <a
              href="#work"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('work');
              }}
              className="text-accent font-medium transition-colors duration-250 text-xs sm:text-sm tracking-wide"
            >
              {t.work}
            </a>

            <button
              type="button"
              onClick={onOpenAbout}
              className="text-text/80 hover:text-text font-normal transition-colors duration-250 text-xs sm:text-sm tracking-wide cursor-pointer"
            >
              {t.about}
            </button>

            <button
              type="button"
              onClick={onOpenContact}
              className="text-text/80 hover:text-text font-normal transition-colors duration-250 text-xs sm:text-sm tracking-wide cursor-pointer"
            >
              {t.contact}
            </button>
          </nav>

          {/* Trailing Language Selector */}
          <div className="flex items-center font-mono text-[11px] sm:text-xs text-tag tracking-widest uppercase py-1 px-2 sm:px-2.5 rounded-full border border-tag/30 bg-tag/5 shrink-0">
            <button
              type="button"
              onClick={() => onLanguageChange('en')}
              className={`transition-colors duration-200 cursor-pointer ${
                language === 'en' ? 'font-bold text-accent' : 'opacity-70 hover:opacity-100'
              }`}
              aria-label="Switch language to English"
            >
              EN
            </button>
            <span className="mx-1 text-tag/40 select-none">|</span>
            <button
              type="button"
              onClick={() => onLanguageChange('az')}
              className={`transition-colors duration-200 cursor-pointer ${
                language === 'az' ? 'font-bold text-accent' : 'opacity-70 hover:opacity-100'
              }`}
              aria-label="Dili Azərbaycancaya dəyiş"
            >
              AZ
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

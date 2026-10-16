import React from 'react';
import { Language } from '../data/portfolioData';

interface FooterProps {
  language: Language;
  onOpenColophon: () => void;
  onOpenContact: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  language,
  onOpenColophon,
  onOpenContact,
}) => {
  return (
    <footer className="w-full py-8 bg-background border-t-2 border-surface" id="contact">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-row flex-wrap items-center justify-between gap-4 sm:gap-6">
        <div className="flex flex-row items-center gap-3 sm:gap-6 text-left">
          <a
            href="#hero"
            className="font-display italic text-xl font-bold text-accent hover:opacity-80 transition-opacity"
          >
            nurana th
          </a>
          <span className="text-surface select-none">|</span>
          <p className="font-body text-xs sm:text-sm text-text/70">
            {language === 'en'
              ? '© 2025 nurana th. All rights reserved.'
              : '© 2025 nurana th. Bütün hüquqlar qorunur.'}
          </p>
        </div>

        <nav className="flex flex-wrap items-center gap-4 sm:gap-6">
          <a
            className="font-mono text-xs uppercase tracking-wider text-tag hover:text-accent transition-colors duration-250 py-1"
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
          <a
            className="font-mono text-xs uppercase tracking-wider text-tag hover:text-accent transition-colors duration-250 py-1"
            href="https://behance.net"
            target="_blank"
            rel="noopener noreferrer"
          >
            Behance
          </a>
          <button
            type="button"
            onClick={onOpenContact}
            className="font-mono text-xs uppercase tracking-wider text-tag hover:text-accent transition-colors duration-250 cursor-pointer py-1"
          >
            Email
          </button>
          <button
            type="button"
            onClick={onOpenColophon}
            className="font-mono text-xs uppercase tracking-wider text-tag hover:text-accent transition-colors duration-250 cursor-pointer py-1"
          >
            Colophon
          </button>
        </nav>
      </div>
    </footer>
  );
};

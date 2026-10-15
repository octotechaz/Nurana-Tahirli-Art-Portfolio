import React from 'react';
import { Language } from '../types';
import { TRANSLATIONS } from '../translations';

interface FooterProps {
  language: Language;
  onNavigateCMS: () => void;
  isCMS?: boolean;
}

export const Footer: React.FC<FooterProps> = ({
  language,
  onNavigateCMS,
  isCMS = false
}) => {
  const t = TRANSLATIONS[language];

  return (
    <footer className="w-full border-t border-[#E9ECEF]/60 bg-transparent transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col sm:flex-row items-center justify-between gap-4 font-body text-xs text-[#6C757D] tracking-wide">
        <div className="flex items-center gap-2">
          <span className="font-headline font-semibold text-[#2B2D42]">Nurana th</span>
          <span className="text-[#E9ECEF]">|</span>
          <span>{t.footer.copyright}</span>
        </div>

        <div className="flex items-center gap-6">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#2B2D42] transition-colors duration-200"
          >
            {t.footer.instagram}
          </a>
          <a
            href="https://behance.net"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#2B2D42] transition-colors duration-200"
          >
            {t.footer.behance}
          </a>
          <a
            href="mailto:hello@nurana.art"
            className="hover:text-[#2B2D42] transition-colors duration-200"
          >
            {t.footer.email}
          </a>

          {!isCMS && (
            <>
              <span className="text-[#E9ECEF]">·</span>
              <button
                onClick={onNavigateCMS}
                className="font-mono text-[11px] text-[#6C757D] hover:text-[#E07A5F] transition-colors cursor-pointer"
                title="Open Studio Desk CMS"
              >
                STUDIO CMS v1.4
              </button>
            </>
          )}

          {isCMS && (
            <>
              <span className="text-[#E9ECEF]">·</span>
              <span className="font-mono text-[11px] text-[#6C757D]">
                STUDIO CMS v1.4
              </span>
            </>
          )}
        </div>
      </div>
    </footer>
  );
};

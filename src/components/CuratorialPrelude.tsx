import React from 'react';
import { CuratorialInterlude, Language } from '../data/portfolioData';

interface CuratorialPreludeProps {
  interlude: CuratorialInterlude;
  language: Language;
}

/**
 * Fallback line splitter for quote text if not explicitly configured in quoteSplit.
 */
export function splitIntoTwoBalancedLines(text: string): [string, string] {
  const words = text.trim().split(/\s+/);
  if (words.length <= 1) return [text, ''];

  const totalChars = text.length;
  let bestIndex = 1;
  let minDiff = Infinity;
  let currentLen = 0;

  for (let i = 0; i < words.length - 1; i++) {
    currentLen += words[i].length + (i > 0 ? 1 : 0);
    const remLen = totalChars - currentLen - 1;
    const diff = Math.abs(currentLen - remLen);
    if (diff < minDiff) {
      minDiff = diff;
      bestIndex = i + 1;
    }
  }

  return [
    words.slice(0, bestIndex).join(' '),
    words.slice(bestIndex).join(' '),
  ];
}

export const CuratorialPrelude: React.FC<CuratorialPreludeProps> = ({
  interlude,
  language,
}) => {
  const labelText = interlude.label[language];
  const quoteText = interlude.quote[language];

  const customSplit = interlude.quoteSplit?.[language];
  const [line1, line2] = customSplit || splitIntoTwoBalancedLines(quoteText);

  const accentColorClass =
    interlude.accentColor === 'accent' ? 'text-accent' : 'text-tag';

  return (
    <div className="w-full py-5 md:py-6 my-1 bg-surface/30 border-y border-surface/50 overflow-hidden select-text">
      {/* 1. TOP LABEL: Desktop ölçü və üslubu hər cihazda (14px, font-sans, təbii sıx sözlər) */}
      <div className="w-full px-6 md:px-12 mb-2 sm:mb-2.5">
        <div
          className={`text-left font-sans uppercase text-[14px] font-semibold tracking-[0.03em] ${accentColorClass}`}
          style={{ wordSpacing: '-1px' }}
          aria-label={labelText}
        >
          {labelText}
        </div>
      </div>

      {/* 2. MIDDLE QUOTE: Desktop versiya bütün cihazlarda (30px-32px, Series & Collections ilə eyni, font-normal, sıx sözlər) */}
      <div
        className="w-full max-w-6xl mx-auto px-6 md:px-8 flex flex-col gap-1 sm:gap-1.5 font-display italic text-text text-[28px] sm:text-[32px] font-normal tracking-tight leading-snug md:leading-tight text-center"
        style={{ wordSpacing: '-2px' }}
        aria-label={quoteText}
      >
        {/* Line 1: Desktop ölçü, təbii və sıx sözlər */}
        <div className="w-full text-center font-normal break-words" style={{ wordSpacing: '-2px' }}>
          {line1}
        </div>

        {/* Line 2: 1-ci sətirdən daha yığcam və mərkəzlənmiş */}
        <div className="w-full text-center font-normal break-words" style={{ wordSpacing: '-2px' }}>
          {line2}
        </div>
      </div>
    </div>
  );
};

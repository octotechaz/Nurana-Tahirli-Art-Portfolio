import React, { useRef, useLayoutEffect, useState } from 'react';

interface SingleLineQuoteProps {
  quote: string;
  maxFontSize?: number;
  minFontSize?: number;
  className?: string;
}

export const SingleLineQuote: React.FC<SingleLineQuoteProps> = ({
  quote,
  maxFontSize = 25,
  minFontSize = 10,
  className = '',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);
  const [fontSize, setFontSize] = useState<number>(maxFontSize);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const lastWidthRef = useRef<number>(0);

  useLayoutEffect(() => {
    const container = containerRef.current;
    const textEl = textRef.current;
    if (!container || !textEl) return;

    let rafId: number | null = null;

    const computeFit = () => {
      const containerWidth = container.clientWidth;
      if (containerWidth <= 0) return;

      // Avoid unnecessary recomputation if width hasn't changed
      if (Math.abs(containerWidth - lastWidthRef.current) < 2) return;
      lastWidthRef.current = containerWidth;

      const mobileScreen = containerWidth < 640;
      setIsMobile(mobileScreen);

      if (!mobileScreen) {
        // Desktop / Tablet: strictly 1 single line
        textEl.style.whiteSpace = 'nowrap';
        textEl.style.display = 'inline';
        textEl.style.width = 'auto';
        textEl.style.fontSize = `${maxFontSize}px`;
        const naturalWidth = textEl.scrollWidth;

        if (naturalWidth > containerWidth) {
          const targetFs = Math.max(
            minFontSize,
            Math.floor((containerWidth / naturalWidth) * maxFontSize * 0.97)
          );
          setFontSize(targetFs);
        } else {
          setFontSize(maxFontSize);
        }
      } else {
        // Mobile: at most 2 lines, fully widened to stretch across available width
        textEl.style.whiteSpace = 'normal';
        textEl.style.display = 'block';
        textEl.style.width = '100%';
        let currentFs = 16.5; // start with bold, spacious mobile size to fill 2 lines
        textEl.style.fontSize = `${currentFs}px`;
        textEl.style.lineHeight = '1.35';

        // 2 lines height threshold (allow small buffer for subpixel rendering)
        let maxTwoLinesHeight = currentFs * 1.35 * 2.2;

        // Shrink font size progressively until text fits strictly within 2 lines
        let iterations = 0;
        while (textEl.scrollHeight > maxTwoLinesHeight && currentFs > minFontSize && iterations < 20) {
          currentFs -= 0.5;
          textEl.style.fontSize = `${currentFs}px`;
          maxTwoLinesHeight = currentFs * 1.35 * 2.2;
          iterations++;
        }

        setFontSize(currentFs);
      }
    };

    // Initial computation
    computeFit();

    // Use requestAnimationFrame to prevent ResizeObserver loop notification warning
    const resizeObserver = new ResizeObserver(() => {
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        computeFit();
      });
    });

    resizeObserver.observe(container);

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      resizeObserver.disconnect();
    };
  }, [quote, maxFontSize, minFontSize]);

  return (
    <div
      ref={containerRef}
      className="w-full max-w-6xl mx-auto flex items-center justify-center overflow-hidden px-1.5 sm:px-6 md:px-8 text-center"
      aria-label={quote}
    >
      <span
        ref={textRef}
        style={{
          fontSize: `${fontSize}px`,
          lineHeight: isMobile ? 1.35 : 1.25,
        }}
        className={`font-display italic text-text tracking-tight transition-[font-size] duration-75 select-text ${
          isMobile ? 'whitespace-normal w-full max-w-full text-center block' : 'whitespace-nowrap inline'
        } ${className}`}
      >
        {quote}
      </span>
    </div>
  );
};

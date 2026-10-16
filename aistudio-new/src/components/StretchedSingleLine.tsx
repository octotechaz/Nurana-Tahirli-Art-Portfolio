import React, { useRef, useLayoutEffect, useState } from 'react';

interface StretchedSingleLineProps {
  text: string;
  className?: string;
  textColor?: string;
  fontFamily?: 'mono' | 'display' | 'sans';
  maxFontSize?: number;
  minFontSize?: number;
}

export const StretchedSingleLine: React.FC<StretchedSingleLineProps> = ({
  text,
  className = '',
  textColor = 'currentColor',
  fontFamily = 'mono',
  maxFontSize = 24,
  minFontSize = 10,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const measureRef = useRef<HTMLSpanElement>(null);
  const [containerWidth, setContainerWidth] = useState<number>(0);
  const [fontSize, setFontSize] = useState<number>(14);
  const lastWidthRef = useRef<number>(0);

  useLayoutEffect(() => {
    const container = containerRef.current;
    const measureEl = measureRef.current;
    if (!container || !measureEl) return;

    let rafId: number | null = null;

    const compute = () => {
      const width = container.clientWidth;
      if (width <= 0) return;

      if (Math.abs(width - lastWidthRef.current) < 2) return;
      lastWidthRef.current = width;

      // Measure text at 16px
      measureEl.style.fontSize = '16px';
      measureEl.style.whiteSpace = 'nowrap';
      measureEl.style.letterSpacing = 'normal';
      const naturalWidth = measureEl.scrollWidth;

      if (naturalWidth > 0) {
        // Calculate font size so text expands to fill container width
        const ratio = width / naturalWidth;
        const computedFs = Math.max(minFontSize, Math.min(maxFontSize, Math.floor(ratio * 16 * 0.98)));
        setFontSize(computedFs);
      }

      setContainerWidth(width);
    };

    compute();

    const resizeObserver = new ResizeObserver(() => {
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        compute();
      });
    });

    resizeObserver.observe(container);

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      resizeObserver.disconnect();
    };
  }, [text, maxFontSize, minFontSize]);

  const svgHeight = Math.max(18, Math.round(fontSize * 1.4));
  const baseline = Math.round(fontSize * 1.05);

  const fontClass =
    fontFamily === 'mono'
      ? "'JetBrains Mono', monospace"
      : fontFamily === 'display'
      ? "'Playfair Display', serif"
      : "'Inter', sans-serif";

  return (
    <div ref={containerRef} className="w-full relative overflow-hidden select-text">
      {/* Hidden off-screen measurement span */}
      <span
        ref={measureRef}
        aria-hidden="true"
        style={{
          fontFamily: fontClass,
          visibility: 'hidden',
          position: 'absolute',
          top: -9999,
          left: -9999,
          whiteSpace: 'nowrap',
          textTransform: 'uppercase',
        }}
      >
        {text}
      </span>

      {containerWidth > 0 ? (
        <svg
          width={containerWidth}
          height={svgHeight}
          viewBox={`0 0 ${containerWidth} ${svgHeight}`}
          className={`w-full block overflow-visible ${className}`}
          aria-label={text}
        >
          <text
            x="0"
            y={baseline}
            textLength={containerWidth}
            lengthAdjust="spacing"
            fill={textColor}
            style={{
              fontFamily: fontClass,
              fontSize: `${fontSize}px`,
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.04em',
            }}
          >
            {text}
          </text>
        </svg>
      ) : (
        <span
          style={{
            fontFamily: fontClass,
            fontSize: `${fontSize}px`,
            color: textColor,
          }}
          className="font-mono text-xs uppercase font-semibold whitespace-nowrap block text-center"
        >
          {text}
        </span>
      )}
    </div>
  );
};

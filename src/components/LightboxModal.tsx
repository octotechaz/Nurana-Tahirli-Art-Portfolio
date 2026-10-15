import React, { useEffect } from 'react';

interface LightboxProps {
  isOpen: boolean;
  imageSrc: string;
  title: string;
  caption?: string;
  onClose: () => void;
}

export const LightboxModal: React.FC<LightboxProps> = ({
  isOpen,
  imageSrc,
  title,
  caption,
  onClose
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-[#2B2D42]/85 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative max-w-5xl max-h-[92vh] w-full flex flex-col items-center bg-[#FDFBF7] rounded-2xl overflow-hidden shadow-2xl p-4 sm:p-6 border border-[#E9ECEF]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close full view"
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/90 hover:bg-[#F4F1DE] text-[#2B2D42] flex items-center justify-center transition-colors shadow-sm cursor-pointer"
        >
          <span className="material-symbols-outlined text-xl">close</span>
        </button>

        <div className="w-full flex-1 flex items-center justify-center overflow-hidden rounded-xl bg-[#F4F1DE]/40 p-2">
          <img
            src={imageSrc}
            alt={title}
            className="max-h-[75vh] w-auto object-contain rounded-lg shadow-sm"
          />
        </div>

        <div className="w-full mt-4 flex flex-col sm:flex-row items-baseline justify-between gap-2 px-1">
          <h3 className="font-headline text-base sm:text-lg font-semibold text-[#2B2D42]">
            {title}
          </h3>
          {caption && (
            <span className="font-mono text-xs text-[#6C757D] uppercase tracking-wider">
              {caption}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

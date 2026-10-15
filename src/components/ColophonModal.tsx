import React, { useState } from 'react';
import { COLOPHON_DATA, Language } from '../data/portfolioData';
import { X, Check, Copy } from 'lucide-react';

interface ColophonModalProps {
  isOpen: boolean;
  language: Language;
  onClose: () => void;
}

export const ColophonModal: React.FC<ColophonModalProps> = ({
  isOpen,
  language,
  onClose,
}) => {
  const [copiedHex, setCopiedHex] = useState<string | null>(null);

  if (!isOpen) return null;

  const copyHex = (hex: string) => {
    navigator.clipboard.writeText(hex);
    setCopiedHex(hex);
    setTimeout(() => setCopiedHex(null), 2000);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 sm:p-6 md:p-10 animate-fadeIn overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-label="Colophon"
    >
      <div className="relative w-full max-w-3xl max-h-[92vh] bg-[#FDFBF7] rounded-2xl overflow-hidden shadow-2xl flex flex-col border border-surface my-auto">
        {/* Header */}
        <div className="p-6 md:p-8 bg-surface/40 border-b border-surface flex items-center justify-between">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-tag font-semibold block mb-1">
              {language === 'en' ? 'Archival Specifications' : 'Arxiv Xüsusiyyətləri'}
            </span>
            <h2 className="font-display italic text-3xl font-bold text-text">Colophon</h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2.5 rounded-full bg-surface hover:bg-surface/80 text-text transition-colors cursor-pointer"
            aria-label="Close colophon"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 md:p-8 overflow-y-auto space-y-8 flex-1">
          {/* Typography */}
          <div>
            <h3 className="font-mono text-xs uppercase tracking-widest text-accent font-semibold mb-4">
              {language === 'en' ? '01. Typographic Architecture' : '01. Tipoqrafik Memarlıq'}
            </h3>
            <div className="space-y-4">
              {COLOPHON_DATA.typography.map((font, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-surface/20 border border-surface/70 space-y-1.5"
                >
                  <div className="flex items-baseline justify-between">
                    <span className="font-display italic font-bold text-xl text-text">
                      {font.name}
                    </span>
                    <span className="font-mono text-[11px] text-accent uppercase tracking-wider">
                      {font.role[language]}
                    </span>
                  </div>
                  <p className="text-xs text-text/75 font-sans leading-relaxed">
                    {font.details}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Pigments */}
          <div className="pt-4 border-t border-surface/70">
            <h3 className="font-mono text-xs uppercase tracking-widest text-tag font-semibold mb-4">
              {language === 'en' ? '02. Pigment & Material System' : '02. Piqment və Material Sistemi'}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {COLOPHON_DATA.pigments.map((pigment, idx) => (
                <div
                  key={idx}
                  onClick={() => copyHex(pigment.hex)}
                  className="group p-3 rounded-xl border border-surface bg-surface/20 hover:bg-surface/40 transition-colors cursor-pointer flex items-center gap-3"
                  title="Click to copy hex value"
                >
                  <div
                    className="w-8 h-8 rounded-full border border-black/10 shrink-0 shadow-xs"
                    style={{ backgroundColor: pigment.hex }}
                  />
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between">
                      <span className="font-display italic font-semibold text-sm text-text truncate">
                        {pigment.name}
                      </span>
                      {copiedHex === pigment.hex ? (
                        <Check className="w-3.5 h-3.5 text-tag shrink-0" />
                      ) : (
                        <Copy className="w-3 h-3 text-text/30 group-hover:text-text/70 shrink-0 transition-colors" />
                      )}
                    </div>
                    <span className="font-mono text-[10px] text-text/60 uppercase block">
                      {pigment.hex}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Substrates */}
          <div className="pt-4 border-t border-surface/70 text-xs font-mono text-text/70 space-y-2">
            <h3 className="uppercase tracking-widest text-text font-semibold">
              {language === 'en' ? '03. Archival Standards' : '03. Arxiv Standartları'}
            </h3>
            <p className="leading-relaxed">
              {language === 'en'
                ? 'All physical impressions and original works utilize ISO 9706 acid-free papers, natural plant binders, and non-fading mineral pigments with proven lightfastness exceeding 100 years.'
                : 'Bütün fiziki nüsxələr və orijinal əsərlər ISO 9706 turşusuz kağızlarından, təbii bitki bağlayıcılarından və 100 ildən çox işığadavamlılığı sübut edilmiş mineral piqmentlərdən istifadə edir.'}
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 sm:px-8 bg-surface/30 border-t border-surface flex items-center justify-between text-xs font-mono">
          <span className="text-text/60">Baku Studio · Est. 2020</span>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg border border-surface bg-background text-text hover:text-accent transition-colors cursor-pointer"
          >
            {language === 'en' ? 'Close' : 'Bağla'}
          </button>
        </div>
      </div>
    </div>
  );
};

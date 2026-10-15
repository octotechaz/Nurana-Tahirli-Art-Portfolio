import React, { useState } from 'react';
import { Artwork, Inquiry, Language } from '../types';
import { TRANSLATIONS } from '../translations';

interface StudioCMSPageProps {
  artworks: Artwork[];
  inquiries: Inquiry[];
  language: Language;
  onNavigateSite: () => void;
  onPreviewCaseStudy: (artworkId: string) => void;
  onUpdateInquiryStatus: (inquiryId: string, status: Inquiry['status']) => void;
  onUpdateArtwork: (updatedArtwork: Artwork) => void;
}

export const StudioCMSPage: React.FC<StudioCMSPageProps> = ({
  artworks,
  inquiries,
  language,
  onNavigateSite,
  onPreviewCaseStudy,
  onUpdateInquiryStatus,
  onUpdateArtwork
}) => {
  const t = TRANSLATIONS[language];
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const [emailInput, setEmailInput] = useState('nurana@nurana.art');
  const [passcode, setPasscode] = useState('••••••••••••');
  const [rememberMe, setRememberMe] = useState(true);
  const [showInquiryModal, setShowInquiryModal] = useState(false);
  const [inquiryFilter, setInquiryFilter] = useState<'all' | 'awaiting' | 'reviewed' | 'in_discussion'>('all');
  const [editingArtwork, setEditingArtwork] = useState<Artwork | null>(null);

  // Derived counts
  const awaitingInquiries = inquiries.filter(i => i.status === 'awaiting');
  const commissionsCount = inquiries.filter(i => i.category === 'commission').length;
  const licensingCount = inquiries.filter(i => i.category === 'licensing').length;

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsAuthenticated(true);
  };

  const filteredInquiries = inquiryFilter === 'all'
    ? inquiries
    : inquiries.filter(i => i.status === inquiryFilter);

  const wandererWork = artworks.find(a => a.id === 'wanderer-portrait') || artworks[0];

  return (
    <main className="max-w-6xl mx-auto px-6 py-8 md:py-14 w-full flex-grow">
      {/* Subtle Header Intro */}
      <div className="mb-8 max-w-xl">
        <p className="font-mono text-xs uppercase tracking-widest text-[#81B29A] font-medium mb-1">
          {t.studioCMS.badge}
        </p>
        <h1 className="font-headline text-3xl md:text-4xl font-bold tracking-tight text-[#2B2D42]">
          {t.studioCMS.title}
        </h1>
        <p className="text-[#6C757D] text-base mt-2 leading-relaxed">
          {t.studioCMS.subtitle}
        </p>
      </div>

      {/* 2-Column Bento / Asymmetric Studio Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Studio Sign In Card (5 Cols) */}
        <div className="lg:col-span-5 bg-[#F4F1DE] rounded-2xl p-6 sm:p-8 border border-[#E9ECEF]/90 shadow-sm flex flex-col justify-between">
          <div>
            {/* Card Header */}
            <div className="flex items-center justify-between mb-6">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#E07A5F] border border-[#E9ECEF]">
                <span className="material-symbols-outlined text-[20px]">edit_note</span>
              </div>
              <span className="font-mono text-[11px] uppercase tracking-wider text-[#6C757D] bg-white/70 px-2.5 py-1 rounded-full border border-[#E9ECEF]">
                {t.studioCMS.version}
              </span>
            </div>

            <h2 className="font-headline text-xl font-semibold tracking-tight text-[#2B2D42] mb-1">
              {t.studioCMS.accessTitle}
            </h2>
            <p className="text-sm text-[#6C757D] mb-6 leading-relaxed">
              {t.studioCMS.accessSubtitle}
            </p>

            {/* Access Form */}
            {isAuthenticated ? (
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-white border border-[#81B29A]/40 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#81B29A]"></span>
                    <div>
                      <div className="font-headline text-sm font-semibold text-[#2B2D42]">
                        {emailInput}
                      </div>
                      <div className="font-mono text-[11px] text-[#6C757D]">
                        {t.studioCMS.signedInAs}
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => setIsAuthenticated(false)}
                    className="text-xs font-mono uppercase text-[#E07A5F] hover:underline cursor-pointer"
                  >
                    {t.studioCMS.signOut}
                  </button>
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => setEditingArtwork(wandererWork)}
                    className="w-full bg-white hover:bg-[#FAF7F0] border border-[#E9ECEF] text-[#2B2D42] font-headline text-sm font-medium py-3 px-4 rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-[18px]">post_add</span>
                    Edit Featured Case Study
                  </button>
                </div>
              </div>
            ) : (
              <form className="space-y-4" onSubmit={handleLoginSubmit}>
                <div>
                  <label className="block font-mono text-[11px] uppercase tracking-wider text-[#2B2D42]/80 mb-1.5 font-medium">
                    {t.studioCMS.authorEmail}
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      required
                      value={emailInput}
                      onChange={(e) => setEmailInput(e.target.value)}
                      className="w-full bg-white border border-[#E9ECEF] text-[#2B2D42] text-sm rounded-xl px-3.5 py-2.5 focus:outline-none focus:ring-1 focus:ring-[#E07A5F] transition-all font-body"
                    />
                    <span className="material-symbols-outlined absolute right-3 top-2.5 text-[#6C757D] text-[18px]">
                      lock
                    </span>
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label className="font-mono text-[11px] uppercase tracking-wider text-[#2B2D42]/80 font-medium">
                      {t.studioCMS.passcode}
                    </label>
                    <span
                      onClick={() => setPasscode('Keycard-8841-Studio')}
                      className="text-xs text-[#6C757D] font-body hover:text-[#E07A5F] cursor-pointer transition-colors"
                    >
                      {t.studioCMS.keycardPass}
                    </span>
                  </div>
                  <input
                    type="password"
                    required
                    value={passcode}
                    onChange={(e) => setPasscode(e.target.value)}
                    className="w-full bg-white border border-[#E9ECEF] text-[#2B2D42] text-sm rounded-xl px-3.5 py-2.5 focus:outline-none focus:ring-1 focus:ring-[#E07A5F] transition-all font-body tracking-wider"
                  />
                </div>

                <div className="flex items-center gap-2 pt-1 pb-2">
                  <input
                    type="checkbox"
                    id="remember"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="w-4 h-4 rounded text-[#E07A5F] focus:ring-[#E07A5F]/40 border-[#E9ECEF] bg-white cursor-pointer"
                  />
                  <label htmlFor="remember" className="text-xs text-[#6C757D] font-body select-none cursor-pointer">
                    {t.studioCMS.rememberWorkspace}
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#E07A5F] hover:bg-[#d66e54] text-white font-headline text-sm font-medium py-3.5 px-7 rounded-full transition-all duration-200 shadow-sm flex items-center justify-center gap-2 mt-2 cursor-pointer"
                >
                  <span>{t.studioCMS.signIn}</span>
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </button>
              </form>
            )}
          </div>

          {/* Micro Footer Note */}
          <div className="pt-6 mt-6 border-t border-[#E9ECEF]/80 flex items-center gap-2 text-[#6C757D]">
            <span className="material-symbols-outlined text-[16px] text-[#81B29A]">verified_user</span>
            <span className="font-mono text-[10px] sm:text-[11px] text-[#6C757D] tracking-wide">
              {t.studioCMS.restrictedNote}
            </span>
          </div>
        </div>

        {/* Right Column: Studio Overview Preview (7 Cols) */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          {/* Snapshot Top Bar */}
          <div className="flex items-center justify-between px-1">
            <div>
              <span className="font-mono text-[11px] uppercase tracking-wider text-[#6C757D]">
                {t.studioCMS.liveTelemetry}
              </span>
              <h3 className="font-headline text-lg font-semibold text-[#2B2D42]">
                {t.studioCMS.workspaceSnapshot}
              </h3>
            </div>
            <span className="inline-flex items-center gap-1.5 text-xs text-[#6C757D] font-body bg-white px-3 py-1 rounded-full border border-[#E9ECEF] shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#81B29A] animate-pulse"></span>
              {t.studioCMS.syncReady}
            </span>
          </div>

          {/* 3 Quiet Metric Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Card 1: Works */}
            <div className="bg-[#F4F1DE]/70 hover:bg-[#F4F1DE] border border-[#E9ECEF] rounded-2xl p-5 transition-all duration-200 flex flex-col justify-between h-44 shadow-xs">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-[#6C757D] font-medium">
                    {t.studioCMS.metrics.portfolioWorks}
                  </span>
                  <span className="material-symbols-outlined text-[#2B2D42]/50 text-[18px]">palette</span>
                </div>
                <div className="font-headline text-2xl font-bold text-[#2B2D42] tracking-tight">
                  18
                </div>
                <div className="text-xs text-[#6C757D] mt-1 leading-snug">
                  {t.studioCMS.metrics.publishedWorks}
                </div>
              </div>
              <div className="pt-3 border-t border-[#E9ECEF]/70 flex items-center justify-between">
                <span className="text-[11px] text-[#6C757D] font-mono truncate max-w-[110px]" title="Orchard Whisper">
                  “Orchard Whis…”
                </span>
                <button
                  onClick={() => setEditingArtwork(artworks.find(a => a.id === 'orchard-whisper') || wandererWork)}
                  className="font-headline text-xs text-[#E07A5F] font-medium hover:underline flex items-center cursor-pointer"
                >
                  {t.studioCMS.metrics.quickEdit}
                </button>
              </div>
            </div>

            {/* Card 2: Categories */}
            <div className="bg-[#F4F1DE]/70 hover:bg-[#F4F1DE] border border-[#E9ECEF] rounded-2xl p-5 transition-all duration-200 flex flex-col justify-between h-44 shadow-xs">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-[#6C757D] font-medium">
                    {t.studioCMS.metrics.seriesMediums}
                  </span>
                  <span className="material-symbols-outlined text-[#2B2D42]/50 text-[18px]">category</span>
                </div>
                <div className="font-headline text-2xl font-bold text-[#2B2D42] tracking-tight">
                  3
                </div>
                <div className="text-xs text-[#6C757D] mt-1 leading-snug">
                  {t.studioCMS.metrics.curatedCollections}
                </div>
              </div>
              <div className="pt-3 border-t border-[#E9ECEF]/70 flex items-center justify-between">
                <span className="text-[11px] text-[#6C757D] font-mono truncate max-w-[110px]">
                  Digital · Trad · Book
                </span>
                <span className="font-headline text-xs text-[#E07A5F] font-medium">
                  {t.studioCMS.metrics.organize}
                </span>
              </div>
            </div>

            {/* Card 3: Inquiries */}
            <div className="bg-[#F4F1DE]/70 hover:bg-[#F4F1DE] border border-[#E9ECEF] rounded-2xl p-5 transition-all duration-200 flex flex-col justify-between h-44 shadow-xs">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-[#6C757D] font-medium">
                    {t.studioCMS.metrics.inquiries}
                  </span>
                  <span className="material-symbols-outlined text-[#2B2D42]/50 text-[18px]">mail</span>
                </div>
                <div className="font-headline text-2xl font-bold text-[#2B2D42] tracking-tight flex items-baseline gap-2">
                  {inquiries.length}
                  {awaitingInquiries.length > 0 && (
                    <span className="text-[11px] font-mono font-normal uppercase px-2 py-0.5 rounded-full bg-[#81B29A]/20 text-[#2B2D42]">
                      {awaitingInquiries.length} {t.studioCMS.metrics.awaiting}
                    </span>
                  )}
                </div>
                <div className="text-xs text-[#6C757D] mt-1 leading-snug">
                  {t.studioCMS.metrics.commissionsAndLicensing
                    .replace('{commissions}', String(commissionsCount))
                    .replace('{licensing}', String(licensingCount))}
                </div>
              </div>
              <div className="pt-3 border-t border-[#E9ECEF]/70 flex items-center justify-between">
                <span className="text-[11px] text-[#81B29A] font-mono font-medium">
                  {t.studioCMS.metrics.actionQueue}
                </span>
                <button
                  onClick={() => setShowInquiryModal(true)}
                  className="font-headline text-xs text-[#E07A5F] font-medium hover:underline flex items-center cursor-pointer"
                >
                  {t.studioCMS.metrics.review}
                </button>
              </div>
            </div>
          </div>

          {/* Featured Queue Strip: Draft & Recent Publish */}
          <div className="bg-white border border-[#E9ECEF] rounded-2xl p-5 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xs">
            <div className="flex items-center gap-4 w-full sm:w-auto">
              <div className="relative w-16 h-16 rounded-xl overflow-hidden bg-[#F4F1DE] flex-shrink-0 border border-[#E9ECEF]">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCmlmpLFY81RNgLAlbhDU9YwibqA6roeraJhX2Hgvys1mLIKzVLDPqBMXsWQ-7B7seDzT2Azl41IGMtBpEv3CXXKEaxrp5TSrg9XoHHuhYw7qenQmxekyb_AfDZKoKSK_f90QkLj3zWoPvJ77cqb8t5M7YvZTwoNl0XJoH26Qo60UbeQKH8410hWwc8iv7BmpkcNkN-f-nbifXk6tjQoko5d3arwKW6sx2jVPrRd4OnjJjntM-N6dXvrDal5QvR8VOIoTKqYnhNRG8"
                  alt="Recent Case study thumbnail"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-mono text-[10px] uppercase bg-[#81B29A]/15 text-[#2B2D42] px-2 py-0.5 rounded-full font-medium">
                    {t.studioCMS.recentCaseStudy}
                  </span>
                  <span className="text-xs text-[#6C757D]">2 hours ago</span>
                </div>
                <h4 className="font-headline text-sm font-semibold text-[#2B2D42] mt-1">
                  {t.studioCMS.caseStudyPublished}
                </h4>
                <p className="text-xs text-[#6C757D] line-clamp-1">
                  {t.studioCMS.caseStudyDesc}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 w-full sm:w-auto justify-end flex-shrink-0">
              <button
                onClick={() => onPreviewCaseStudy('wanderer-portrait')}
                className="text-xs font-headline font-medium px-4 py-2 rounded-full border border-[#E9ECEF] bg-[#FDFBF7] hover:bg-[#F4F1DE] text-[#2B2D42] transition-colors cursor-pointer"
              >
                {t.studioCMS.previewPage}
              </button>
              <button
                onClick={() => setEditingArtwork(wandererWork)}
                className="text-xs font-headline font-medium px-4 py-2 rounded-full bg-[#F4F1DE] text-[#2B2D42] hover:text-[#E07A5F] transition-colors flex items-center gap-1 cursor-pointer"
              >
                <span>{t.studioCMS.edit}</span>
                <span className="material-symbols-outlined text-[14px]">open_in_new</span>
              </button>
            </div>
          </div>

          {/* Studio Note Card */}
          <div className="p-4 rounded-xl border border-[#E9ECEF]/70 bg-[#FDFBF7] flex items-start gap-3">
            <span className="material-symbols-outlined text-[#81B29A] text-[20px] mt-0.5">spa</span>
            <div>
              <p className="text-xs text-[#2B2D42] font-medium leading-relaxed">
                {t.studioCMS.quietModeTitle}
              </p>
              <p className="text-xs text-[#6C757D] mt-0.5">
                {t.studioCMS.quietModeDesc}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Inquiry Queue Modal */}
      {showInquiryModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#2B2D42]/60 backdrop-blur-xs">
          <div className="bg-[#FDFBF7] border border-[#E9ECEF] rounded-2xl max-w-2xl w-full max-h-[85vh] flex flex-col overflow-hidden shadow-2xl">
            <div className="p-5 border-b border-[#E9ECEF] flex items-center justify-between bg-white">
              <div>
                <h3 className="font-headline text-lg font-semibold text-[#2B2D42]">
                  {t.studioCMS.inquiryModal.title}
                </h3>
                <p className="text-xs text-[#6C757D]">
                  {inquiries.length} total messages in queue
                </p>
              </div>
              <button
                onClick={() => setShowInquiryModal(false)}
                className="w-8 h-8 rounded-full hover:bg-[#F4F1DE] flex items-center justify-center text-[#6C757D] cursor-pointer"
              >
                <span className="material-symbols-outlined text-lg">close</span>
              </button>
            </div>

            {/* Filter pills */}
            <div className="px-5 py-3 border-b border-[#E9ECEF] flex gap-2 overflow-x-auto bg-[#F4F1DE]/40">
              <button
                onClick={() => setInquiryFilter('all')}
                className={`px-3 py-1 rounded-full text-xs font-mono uppercase cursor-pointer ${
                  inquiryFilter === 'all' ? 'bg-[#2B2D42] text-white' : 'text-[#6C757D] hover:text-[#2B2D42]'
                }`}
              >
                {t.studioCMS.inquiryModal.filterAll} ({inquiries.length})
              </button>
              <button
                onClick={() => setInquiryFilter('awaiting')}
                className={`px-3 py-1 rounded-full text-xs font-mono uppercase cursor-pointer ${
                  inquiryFilter === 'awaiting' ? 'bg-[#E07A5F] text-white' : 'text-[#6C757D] hover:text-[#2B2D42]'
                }`}
              >
                {t.studioCMS.inquiryModal.filterAwaiting} ({inquiries.filter(i => i.status === 'awaiting').length})
              </button>
              <button
                onClick={() => setInquiryFilter('reviewed')}
                className={`px-3 py-1 rounded-full text-xs font-mono uppercase cursor-pointer ${
                  inquiryFilter === 'reviewed' ? 'bg-[#81B29A] text-white' : 'text-[#6C757D] hover:text-[#2B2D42]'
                }`}
              >
                {t.studioCMS.inquiryModal.filterReviewed} ({inquiries.filter(i => i.status === 'reviewed').length})
              </button>
              <button
                onClick={() => setInquiryFilter('in_discussion')}
                className={`px-3 py-1 rounded-full text-xs font-mono uppercase cursor-pointer ${
                  inquiryFilter === 'in_discussion' ? 'bg-[#F2CC8F] text-[#2B2D42]' : 'text-[#6C757D] hover:text-[#2B2D42]'
                }`}
              >
                {t.studioCMS.inquiryModal.filterInDiscussion} ({inquiries.filter(i => i.status === 'in_discussion').length})
              </button>
            </div>

            {/* Inquiries List */}
            <div className="flex-1 overflow-y-auto p-5 space-y-4">
              {filteredInquiries.length === 0 ? (
                <div className="py-12 text-center text-sm text-[#6C757D]">
                  {t.studioCMS.inquiryModal.empty}
                </div>
              ) : (
                filteredInquiries.map((inq) => (
                  <div
                    key={inq.id}
                    className="p-4 rounded-xl bg-white border border-[#E9ECEF] space-y-3"
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="font-headline text-sm font-semibold text-[#2B2D42]">
                          {inq.name}
                        </div>
                        <a
                          href={`mailto:${inq.email}`}
                          className="font-mono text-xs text-[#E07A5F] hover:underline"
                        >
                          {inq.email}
                        </a>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className={`text-[10px] font-mono uppercase px-2 py-0.5 rounded-full ${
                          inq.status === 'awaiting'
                            ? 'bg-[#E07A5F]/20 text-[#E07A5F]'
                            : inq.status === 'reviewed'
                            ? 'bg-[#81B29A]/20 text-[#81B29A]'
                            : 'bg-[#F2CC8F]/40 text-[#2B2D42]'
                        }`}>
                          {inq.status}
                        </span>
                        <span className="text-[11px] text-[#6C757D]">{inq.date}</span>
                      </div>
                    </div>

                    <div className="text-xs font-mono uppercase text-[#81B29A]">
                      {inq.projectType}
                    </div>

                    <p className="text-xs text-[#2B2D42]/90 leading-relaxed bg-[#F4F1DE]/30 p-3 rounded-lg border border-[#E9ECEF]/50">
                      {inq.message}
                    </p>

                    <div className="flex items-center justify-end gap-2 pt-1 border-t border-[#E9ECEF]/60">
                      {inq.status !== 'reviewed' && (
                        <button
                          onClick={() => onUpdateInquiryStatus(inq.id, 'reviewed')}
                          className="text-xs font-medium text-[#81B29A] hover:bg-[#81B29A]/10 px-2.5 py-1 rounded transition-colors cursor-pointer"
                        >
                          {t.studioCMS.inquiryModal.markReviewed}
                        </button>
                      )}
                      {inq.status !== 'in_discussion' && (
                        <button
                          onClick={() => onUpdateInquiryStatus(inq.id, 'in_discussion')}
                          className="text-xs font-medium text-[#2B2D42] hover:bg-[#F2CC8F]/30 px-2.5 py-1 rounded transition-colors cursor-pointer"
                        >
                          {t.studioCMS.inquiryModal.markDiscussion}
                        </button>
                      )}
                      <button
                        onClick={() => onUpdateInquiryStatus(inq.id, 'archived')}
                        className="text-xs font-medium text-[#6C757D] hover:bg-neutral-100 px-2.5 py-1 rounded transition-colors cursor-pointer"
                      >
                        {t.studioCMS.inquiryModal.archive}
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>

            <div className="p-4 border-t border-[#E9ECEF] flex justify-end bg-white">
              <button
                onClick={() => setShowInquiryModal(false)}
                className="px-5 py-2 rounded-full bg-[#F4F1DE] hover:bg-[#ede8d2] text-xs font-headline font-medium text-[#2B2D42] cursor-pointer"
              >
                {t.studioCMS.inquiryModal.close}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Quick Artwork Editor Modal */}
      {editingArtwork && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#2B2D42]/60 backdrop-blur-xs">
          <div className="bg-[#FDFBF7] border border-[#E9ECEF] rounded-2xl max-w-lg w-full p-6 shadow-2xl space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-[#E9ECEF]">
              <h3 className="font-headline text-lg font-semibold text-[#2B2D42]">
                Edit Artwork Metadata
              </h3>
              <button
                onClick={() => setEditingArtwork(null)}
                className="w-8 h-8 rounded-full hover:bg-[#F4F1DE] flex items-center justify-center text-[#6C757D] cursor-pointer"
              >
                <span className="material-symbols-outlined text-lg">close</span>
              </button>
            </div>

            <div className="space-y-3">
              <div>
                <label className="block text-xs font-mono uppercase text-[#6C757D] mb-1">
                  Title
                </label>
                <input
                  type="text"
                  value={editingArtwork.title}
                  onChange={(e) => setEditingArtwork({ ...editingArtwork, title: e.target.value })}
                  className="w-full bg-white border border-[#E9ECEF] text-sm rounded-xl px-3 py-2 text-[#2B2D42]"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-[#6C757D] mb-1">
                  Subtitle / Series
                </label>
                <input
                  type="text"
                  value={editingArtwork.subtitle}
                  onChange={(e) => setEditingArtwork({ ...editingArtwork, subtitle: e.target.value })}
                  className="w-full bg-white border border-[#E9ECEF] text-sm rounded-xl px-3 py-2 text-[#2B2D42]"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-[#6C757D] mb-1">
                  Techniques
                </label>
                <input
                  type="text"
                  value={editingArtwork.techniques || ''}
                  onChange={(e) => setEditingArtwork({ ...editingArtwork, techniques: e.target.value })}
                  className="w-full bg-white border border-[#E9ECEF] text-sm rounded-xl px-3 py-2 text-[#2B2D42]"
                />
              </div>

              {editingArtwork.narrative && (
                <div>
                  <label className="block text-xs font-mono uppercase text-[#6C757D] mb-1">
                    Narrative Story Context
                  </label>
                  <textarea
                    rows={3}
                    value={editingArtwork.narrative}
                    onChange={(e) => setEditingArtwork({ ...editingArtwork, narrative: e.target.value })}
                    className="w-full bg-white border border-[#E9ECEF] text-sm rounded-xl px-3 py-2 text-[#2B2D42]"
                  />
                </div>
              )}
            </div>

            <div className="pt-3 border-t border-[#E9ECEF] flex items-center justify-end gap-3">
              <button
                onClick={() => setEditingArtwork(null)}
                className="px-4 py-2 rounded-full text-xs font-headline text-[#6C757D] hover:bg-[#F4F1DE] cursor-pointer"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  onUpdateArtwork(editingArtwork);
                  setEditingArtwork(null);
                }}
                className="px-6 py-2 rounded-full bg-[#E07A5F] hover:bg-[#d66e54] text-xs font-headline font-medium text-white cursor-pointer"
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

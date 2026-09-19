import React, { useState, useEffect } from 'react';
import {
  ChevronDown,
  Sparkles,
  ArrowRight,
  Menu,
  X,
  Users,
  Search,
  Bot,
  Calendar,
  BarChart3,
  Building2,
  ShieldCheck,
  FileText,
  PlayCircle,
  Keyboard,
  ExternalLink,
  Zap,
  Sliders
} from 'lucide-react';

interface NavbarProps {
  onOpenContact: () => void;
  onOpenRegister: () => void;
  onOpenShortcuts?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact, onOpenRegister, onOpenShortcuts }) => {
  const [bannerVisible, setBannerVisible] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSubmenu, setMobileSubmenu] = useState<'platform' | 'solutions' | 'resources' | null>(null);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  return (
    <header className="sticky top-0 z-50 w-full transition-all">
      {/* Top Announcement Banner */}
      {bannerVisible && (
        <div id="announcement-banner" className="bg-gradient-to-r from-[#0D1527] via-[#0f2824] to-[#0D1527] border-b border-emerald-500/20 text-xs sm:text-sm py-2 px-4 transition-all">
          <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
            <div className="flex-1 text-center flex items-center justify-center flex-wrap gap-2 text-slate-300">
              <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                <Sparkles className="w-3 h-3 animate-pulse text-emerald-400" />
                Live Event
              </span>
              <span>
                It's not too late to see the New EZ Agent live.{' '}
                <strong className="text-white font-medium">September 18, 12 PM CST</strong>
              </span>
              <button
                id="banner-register-btn"
                onClick={onOpenRegister}
                className="text-emerald-400 hover:text-emerald-300 font-semibold underline underline-offset-4 decoration-emerald-400/50 hover:decoration-emerald-400 inline-flex items-center gap-1 ml-1 cursor-pointer transition-colors"
              >
                Register now
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
            <button
              id="close-banner-btn"
              onClick={() => setBannerVisible(false)}
              className="text-slate-400 hover:text-slate-200 p-1 rounded hover:bg-white/5 transition-colors"
              aria-label="Close banner"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}

      {/* Main Frosted Navigation */}
      <nav className="backdrop-blur-xl bg-[#090D16]/90 border-b border-white/[0.07] transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-emerald-400 via-teal-500 to-cyan-500 p-[1.5px] shadow-lg shadow-emerald-500/20 group-hover:shadow-emerald-500/40 transition-shadow">
              <div className="w-full h-full bg-[#090D16] rounded-[10px] flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-5 h-5 text-emerald-400 fill-current">
                  <path d="M12 2L3 7v10l9 5 9-5V7l-9-5zm0 3.5l5.5 3.1-5.5 3-5.5-3L12 5.5zM5.5 15.6V9.9l5 2.7v5.7l-5-2.7zm13 0l-5 2.7v-5.7l5-2.7v5.7z" />
                </svg>
              </div>
            </div>
            <div className="flex items-baseline tracking-tight">
              <span className="text-2xl font-bold text-white tracking-tight">hire</span>
              <span className="text-2xl font-extrabold text-[#00DC82] tracking-tighter">EZ</span>
              <span className="ml-2 text-[10px] font-semibold tracking-wider uppercase px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/25 hidden sm:inline-block">
                Agentic AI
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-1">
            {/* Platform Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown('platform')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                id="nav-platform-btn"
                className={`flex items-center gap-1.5 px-3.5 py-2 text-sm font-medium rounded-lg transition-colors cursor-pointer ${
                  activeDropdown === 'platform' ? 'text-white bg-white/5' : 'text-slate-300 hover:text-white'
                }`}
              >
                Platform
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === 'platform' ? 'rotate-180 text-emerald-400' : 'text-slate-400'}`} />
              </button>

              {activeDropdown === 'platform' && (
                <div className="absolute top-full left-0 pt-2 w-[480px]">
                  <div className="p-4 rounded-2xl bg-[#0D111D] border border-white/10 shadow-2xl shadow-black/80 backdrop-blur-2xl grid grid-cols-2 gap-3">
                    <div className="p-3 rounded-xl hover:bg-white/[0.04] transition-colors border border-transparent hover:border-emerald-500/20 group/item">
                      <div className="flex items-center gap-2 text-white font-medium text-sm group-hover/item:text-emerald-400 transition-colors">
                        <Search className="w-4 h-4 text-emerald-400" />
                        Autonomous Sourcing
                      </div>
                      <p className="text-xs text-slate-400 mt-1">Surfacing 7x more qualified candidates across 1B+ profiles.</p>
                    </div>

                    <div className="p-3 rounded-xl hover:bg-white/[0.04] transition-colors border border-transparent hover:border-emerald-500/20 group/item">
                      <div className="flex items-center gap-2 text-white font-medium text-sm group-hover/item:text-emerald-400 transition-colors">
                        <Users className="w-4 h-4 text-cyan-400" />
                        Talent CRM & ATS
                      </div>
                      <p className="text-xs text-slate-400 mt-1">Re-engage dormant ATS talent with automated data refresh.</p>
                    </div>

                    <div className="p-3 rounded-xl hover:bg-white/[0.04] transition-colors border border-transparent hover:border-emerald-500/20 group/item">
                      <div className="flex items-center gap-2 text-white font-medium text-sm group-hover/item:text-emerald-400 transition-colors">
                        <Bot className="w-4 h-4 text-emerald-400" />
                        AI Screening Agent
                      </div>
                      <p className="text-xs text-slate-400 mt-1">Conversational voice & chat screeners for 100% of applicants.</p>
                    </div>

                    <div className="p-3 rounded-xl hover:bg-white/[0.04] transition-colors border border-transparent hover:border-emerald-500/20 group/item">
                      <div className="flex items-center gap-2 text-white font-medium text-sm group-hover/item:text-emerald-400 transition-colors">
                        <Calendar className="w-4 h-4 text-indigo-400" />
                        Interview Scheduler
                      </div>
                      <p className="text-xs text-slate-400 mt-1">Autonomous multi-panel conflict resolution & calendar bookings.</p>
                    </div>

                    <div className="col-span-2 p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <BarChart3 className="w-4 h-4 text-emerald-400" />
                        <span className="text-xs font-medium text-slate-200">Hiring Intelligence & Market Insights</span>
                      </div>
                      <span className="text-[11px] font-semibold text-emerald-400 flex items-center gap-1">
                        Explore <ArrowRight className="w-3 h-3" />
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Solutions Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown('solutions')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                id="nav-solutions-btn"
                className={`flex items-center gap-1.5 px-3.5 py-2 text-sm font-medium rounded-lg transition-colors cursor-pointer ${
                  activeDropdown === 'solutions' ? 'text-white bg-white/5' : 'text-slate-300 hover:text-white'
                }`}
              >
                Solutions
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === 'solutions' ? 'rotate-180 text-emerald-400' : 'text-slate-400'}`} />
              </button>

              {activeDropdown === 'solutions' && (
                <div className="absolute top-full left-0 pt-2 w-80">
                  <div className="p-3 rounded-2xl bg-[#0D111D] border border-white/10 shadow-2xl shadow-black/80 backdrop-blur-2xl space-y-1">
                    <div className="px-3 py-2 text-[11px] font-bold text-slate-500 uppercase tracking-wider">By Industry</div>
                    <a href="#solutions" className="flex items-center gap-2.5 p-2.5 rounded-lg hover:bg-white/[0.04] text-sm text-slate-200 hover:text-emerald-400 transition-colors">
                      <Building2 className="w-4 h-4 text-emerald-400" />
                      Enterprise & Global Organizations
                    </a>
                    <a href="#solutions" className="flex items-center gap-2.5 p-2.5 rounded-lg hover:bg-white/[0.04] text-sm text-slate-200 hover:text-emerald-400 transition-colors">
                      <Users className="w-4 h-4 text-cyan-400" />
                      Staffing & Recruiting Agencies
                    </a>
                    <a href="#solutions" className="flex items-center gap-2.5 p-2.5 rounded-lg hover:bg-white/[0.04] text-sm text-slate-200 hover:text-emerald-400 transition-colors">
                      <ShieldCheck className="w-4 h-4 text-indigo-400" />
                      Healthcare, Defense & High-Volume
                    </a>
                  </div>
                </div>
              )}
            </div>

            {/* Why hireEZ? */}
            <a
              id="nav-why-btn"
              href="#system-of-action"
              className="px-3.5 py-2 text-sm font-medium text-slate-300 hover:text-white rounded-lg transition-colors"
            >
              Why hireEZ?
            </a>

            {/* Analytics */}
            <a
              id="nav-analytics-btn"
              href="#analytics-panel"
              className="px-3.5 py-2 text-sm font-medium text-slate-300 hover:text-white rounded-lg transition-colors flex items-center gap-1.5"
            >
              <span>Analytics</span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
            </a>

            {/* Resources Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown('resources')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                id="nav-resources-btn"
                className={`flex items-center gap-1.5 px-3.5 py-2 text-sm font-medium rounded-lg transition-colors cursor-pointer ${
                  activeDropdown === 'resources' ? 'text-white bg-white/5' : 'text-slate-300 hover:text-white'
                }`}
              >
                Resources
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === 'resources' ? 'rotate-180 text-emerald-400' : 'text-slate-400'}`} />
              </button>

              {activeDropdown === 'resources' && (
                <div className="absolute top-full left-0 pt-2 w-72">
                  <div className="p-3 rounded-2xl bg-[#0D111D] border border-white/10 shadow-2xl shadow-black/80 backdrop-blur-2xl space-y-1">
                    <a href="#testimonials" className="flex items-center gap-2.5 p-2.5 rounded-lg hover:bg-white/[0.04] text-sm text-slate-200 hover:text-emerald-400 transition-colors">
                      <PlayCircle className="w-4 h-4 text-emerald-400" />
                      Customer Case Studies
                    </a>
                    <a href="#calculator" onClick={(e) => { e.preventDefault(); onOpenContact(); }} className="flex items-center gap-2.5 p-2.5 rounded-lg hover:bg-white/[0.04] text-sm text-slate-200 hover:text-emerald-400 transition-colors">
                      <BarChart3 className="w-4 h-4 text-cyan-400" />
                      Hiring ROI Calculator
                    </a>
                    <a href="#academy" onClick={(e) => { e.preventDefault(); onOpenRegister(); }} className="flex items-center gap-2.5 p-2.5 rounded-lg hover:bg-white/[0.04] text-sm text-slate-200 hover:text-emerald-400 transition-colors">
                      <FileText className="w-4 h-4 text-emerald-400" />
                      EZ Agent Masterclass Webinar
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right Action CTA Buttons & Shortcuts button */}
          <div className="hidden sm:flex items-center gap-3">
            {onOpenShortcuts && (
              <button
                onClick={onOpenShortcuts}
                title="Keyboard Shortcuts [?]"
                className="p-2 rounded-xl text-slate-400 hover:text-emerald-400 hover:bg-white/5 transition-colors border border-transparent hover:border-emerald-500/20 cursor-pointer"
                aria-label="Keyboard shortcuts"
              >
                <Keyboard className="w-4 h-4" />
              </button>
            )}

            <button
              id="nav-signin-btn"
              onClick={onOpenContact}
              className="px-4 py-2 text-sm font-semibold text-slate-300 hover:text-white transition-colors cursor-pointer"
            >
              Sign in
            </button>
            <button
              id="nav-contact-sales-btn"
              onClick={onOpenContact}
              className="relative group px-5 py-2.5 rounded-full bg-[#10B981] hover:bg-[#059669] text-[#090D16] font-bold text-sm transition-all duration-200 hover:scale-[1.02] shadow-[0_0_24px_rgba(16,185,129,0.35)] flex items-center gap-1.5 cursor-pointer"
            >
              <span>Contact sales</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 text-[#090D16]" />
            </button>
          </div>

          {/* Mobile hamburger & Action */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              id="nav-mobile-contact-btn"
              onClick={onOpenContact}
              className="px-3.5 py-1.5 rounded-full bg-emerald-500 text-slate-950 font-bold text-xs shadow-md"
            >
              Contact
            </button>
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl text-slate-300 hover:text-white hover:bg-white/5 border border-white/10"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-emerald-400" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Enhanced Mobile Drawer Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden fixed inset-0 top-20 z-50 bg-[#090D16]/98 backdrop-blur-2xl border-t border-white/10 flex flex-col justify-between overflow-y-auto pb-12 animate-fade-in">
            <div className="p-6 space-y-6">
              {/* Search or Quick Jump */}
              <div className="p-3 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-between text-xs text-slate-300">
                <span className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-emerald-400" />
                  Autonomous AI Recruiting Platform
                </span>
                <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-mono text-[10px]">
                  2026 Edition
                </span>
              </div>

              {/* Accordion / Nav Links */}
              <div className="space-y-1">
                {/* Platform Accordion */}
                <div className="border-b border-white/5">
                  <button
                    onClick={() => setMobileSubmenu(mobileSubmenu === 'platform' ? null : 'platform')}
                    className="w-full py-3.5 flex items-center justify-between text-base font-semibold text-white"
                  >
                    <span className="flex items-center gap-2.5">
                      <Bot className="w-5 h-5 text-emerald-400" />
                      Platform Capabilities
                    </span>
                    <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${mobileSubmenu === 'platform' ? 'rotate-180 text-emerald-400' : ''}`} />
                  </button>

                  {mobileSubmenu === 'platform' && (
                    <div className="pl-7 pb-4 space-y-3 text-sm text-slate-300">
                      <a
                        href="#workflows"
                        onClick={() => setMobileMenuOpen(false)}
                        className="block py-1 text-slate-300 hover:text-emerald-400"
                      >
                        • Autonomous Sourcing
                      </a>
                      <a
                        href="#workflows"
                        onClick={() => setMobileMenuOpen(false)}
                        className="block py-1 text-slate-300 hover:text-emerald-400"
                      >
                        • AI Conversational Screener
                      </a>
                      <a
                        href="#workflows"
                        onClick={() => setMobileMenuOpen(false)}
                        className="block py-1 text-slate-300 hover:text-emerald-400"
                      >
                        • Panel Interview Scheduler
                      </a>
                      <a
                        href="#workflows"
                        onClick={() => setMobileMenuOpen(false)}
                        className="block py-1 text-slate-300 hover:text-emerald-400"
                      >
                        • Bi-directional ATS Sync
                      </a>
                    </div>
                  )}
                </div>

                {/* Solutions Accordion */}
                <div className="border-b border-white/5">
                  <button
                    onClick={() => setMobileSubmenu(mobileSubmenu === 'solutions' ? null : 'solutions')}
                    className="w-full py-3.5 flex items-center justify-between text-base font-semibold text-white"
                  >
                    <span className="flex items-center gap-2.5">
                      <Building2 className="w-5 h-5 text-cyan-400" />
                      Solutions by Industry
                    </span>
                    <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${mobileSubmenu === 'solutions' ? 'rotate-180 text-emerald-400' : ''}`} />
                  </button>

                  {mobileSubmenu === 'solutions' && (
                    <div className="pl-7 pb-4 space-y-3 text-sm text-slate-300">
                      <div className="text-slate-300 hover:text-emerald-400 py-1" onClick={() => { setMobileMenuOpen(false); onOpenContact(); }}>
                        • Enterprise & Global Teams
                      </div>
                      <div className="text-slate-300 hover:text-emerald-400 py-1" onClick={() => { setMobileMenuOpen(false); onOpenContact(); }}>
                        • Staffing & Executive Search
                      </div>
                      <div className="text-slate-300 hover:text-emerald-400 py-1" onClick={() => { setMobileMenuOpen(false); onOpenContact(); }}>
                        • Healthcare & Clinical Staffing
                      </div>
                    </div>
                  )}
                </div>

                {/* Quick anchor links */}
                <a
                  href="#system-of-action"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-3.5 text-base font-semibold text-white border-b border-white/5"
                >
                  The System of Action
                </a>

                <a
                  href="#analytics-panel"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-3.5 text-base font-semibold text-white border-b border-white/5 flex items-center justify-between"
                >
                  <span>Talent Analytics & Telemetry</span>
                  <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400">New</span>
                </a>

                <a
                  href="#testimonials"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-3.5 text-base font-semibold text-white border-b border-white/5"
                >
                  Customer Stories & Metrics
                </a>
              </div>

              {/* Mobile Quick Shortcuts & Persona Helper */}
              {onOpenShortcuts && (
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenShortcuts();
                  }}
                  className="w-full p-3.5 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-between text-xs text-slate-300"
                >
                  <span className="flex items-center gap-2 text-white font-medium">
                    <Keyboard className="w-4 h-4 text-emerald-400" />
                    View Keyboard Shortcuts Guide
                  </span>
                  <span className="text-emerald-400 font-mono">[?]</span>
                </button>
              )}

              {/* Call to Actions in Mobile Drawer */}
              <div className="pt-4 space-y-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenContact();
                  }}
                  className="w-full py-4 rounded-2xl bg-gradient-to-r from-emerald-500 to-[#00DC82] text-slate-950 font-extrabold text-base flex items-center justify-center gap-2 shadow-[0_0_30px_rgba(16,185,129,0.4)]"
                >
                  <span>Contact sales</span>
                  <ArrowRight className="w-5 h-5 text-slate-950" />
                </button>

                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenRegister();
                  }}
                  className="w-full py-3.5 rounded-2xl bg-white/[0.05] hover:bg-white/[0.1] text-white font-semibold text-sm border border-white/15 text-center"
                >
                  Try for free / Webinar
                </button>
              </div>
            </div>

            {/* Bottom Footer Info in Mobile Drawer */}
            <div className="px-6 pt-4 text-center border-t border-white/5 text-xs text-slate-500">
              © 2026 hireEZ, Inc. • Enterprise Agentic AI Recruiting
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

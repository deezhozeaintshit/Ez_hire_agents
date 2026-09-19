import React, { useState } from 'react';
import {
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Lock,
  CheckCircle2,
  Mail,
  Send,
  Linkedin,
  Twitter,
  Youtube,
  Facebook,
  Globe
} from 'lucide-react';

interface CtaFooterProps {
  onOpenContact: () => void;
  onOpenRegister: () => void;
}

export const CtaFooter: React.FC<CtaFooterProps> = ({ onOpenContact, onOpenRegister }) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [agreePrivacy, setAgreePrivacy] = useState(true);
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail || !agreePrivacy) return;
    setSubscribed(true);
    setTimeout(() => {
      setNewsletterEmail('');
    }, 2000);
  };

  return (
    <footer className="bg-[#090D16] border-t border-white/[0.08] relative overflow-hidden">
      {/* Background glow in footer */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-gradient-to-b from-emerald-500/10 via-transparent to-transparent blur-[140px] pointer-events-none" />

      {/* 1. Closing Callout Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center relative">
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            Autonomous Recruiting
          </div>

          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight">
            Ask. Approve. <span className="text-[#00DC82]">Hire.</span>
          </h2>

          <p className="text-base sm:text-xl text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed">
            Experience how the new EZ Agent orchestrates sourcing, ATS enrichment, conversational screening, and scheduling seamlessly.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              id="footer-contact-sales-btn"
              onClick={onOpenContact}
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#10B981] hover:bg-[#059669] text-[#090D16] font-extrabold text-base transition-all duration-200 hover:scale-[1.02] shadow-[0_0_30px_rgba(16,185,129,0.3)] flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Contact sales</span>
              <ArrowRight className="w-5 h-5 text-[#090D16]" />
            </button>

            <button
              id="footer-try-free-btn"
              onClick={onOpenRegister}
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/[0.05] hover:bg-white/[0.1] text-white font-semibold text-base border border-white/15 hover:border-emerald-500/40 transition-all duration-200 flex items-center justify-center gap-2 backdrop-blur-sm cursor-pointer"
            >
              <span>Try for free</span>
              <ArrowRight className="w-4 h-4 text-emerald-400" />
            </button>
          </div>

          {/* Security & Compliance Badges */}
          <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>SOC 2 Type II Certified</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Lock className="w-4 h-4 text-cyan-400" />
              <span>GDPR & CCPA Compliant</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-indigo-400" />
              <span>ISO 27001 Security Standard</span>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Newsletter / Resource Box */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="rounded-3xl bg-[#0D111D] border border-white/10 p-6 sm:p-10 relative overflow-hidden shadow-2xl">
          <div className="absolute right-0 top-0 w-96 h-96 bg-emerald-500/5 blur-[100px] pointer-events-none rounded-full" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative">
            <div className="lg:col-span-6 space-y-2">
              <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400 uppercase tracking-wider">
                <Mail className="w-3.5 h-3.5" />
                hireEZ Talent Strategy Dispatch
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Recruitment strategy tips, guides, videos, and live Q&As delivered right to your inbox.
              </h3>
              <p className="text-xs sm:text-sm text-slate-400">
                Join over 85,000+ talent leaders receiving our weekly analysis on AI agents, market trends, and candidate outreach benchmarks.
              </p>
            </div>

            <div className="lg:col-span-6">
              {subscribed ? (
                <div className="p-4 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-sm font-semibold flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                  <span>Thank you for subscribing! Check your inbox for our latest 2026 AI Agent Benchmark Report.</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="space-y-3">
                  <div className="flex flex-col sm:flex-row gap-2">
                    <input
                      id="newsletter-email-input"
                      type="email"
                      required
                      value={newsletterEmail}
                      onChange={(e) => setNewsletterEmail(e.target.value)}
                      placeholder="Enter your corporate email address"
                      className="flex-1 px-4 py-3 rounded-xl bg-[#090D16] border border-white/15 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-emerald-500/70 focus:ring-2 focus:ring-emerald-500/20"
                    />
                    <button
                      id="newsletter-submit-btn"
                      type="submit"
                      className="px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold text-sm flex items-center justify-center gap-2 transition-colors cursor-pointer shrink-0"
                    >
                      <span>Subscribe</span>
                      <Send className="w-4 h-4" />
                    </button>
                  </div>

                  <label className="flex items-start gap-2 text-[11px] text-slate-400 cursor-pointer select-none">
                    <input
                      id="newsletter-privacy-checkbox"
                      type="checkbox"
                      checked={agreePrivacy}
                      onChange={(e) => setAgreePrivacy(e.target.checked)}
                      className="mt-0.5 rounded border-white/20 bg-black/40 text-emerald-500 focus:ring-emerald-500"
                    />
                    <span>
                      I agree to receive communications and accept the hireEZ privacy policy. Unsubscribe anytime.
                    </span>
                  </label>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* 3. Comprehensive Multi-column Footer */}
      <div className="border-t border-white/[0.06] bg-[#070A11] pt-16 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8 pb-12 border-b border-white/[0.06]">
            {/* Column 1: Platform */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">Platform</h4>
              <ul className="space-y-2 text-xs text-slate-400">
                <li><a href="#workflows" className="hover:text-emerald-400 transition-colors">EZ Agent</a></li>
                <li><a href="#workflows" className="hover:text-emerald-400 transition-colors">Autonomous Sourcing</a></li>
                <li><a href="#workflows" className="hover:text-emerald-400 transition-colors">Talent CRM</a></li>
                <li><a href="#workflows" className="hover:text-emerald-400 transition-colors">Conversational Screening</a></li>
                <li><a href="#workflows" className="hover:text-emerald-400 transition-colors">Interview Scheduling</a></li>
                <li><a href="#workflows" className="hover:text-emerald-400 transition-colors">Hiring Intelligence</a></li>
              </ul>
            </div>

            {/* Column 2: Solutions */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">Solutions</h4>
              <ul className="space-y-2 text-xs text-slate-400">
                <li><a href="#" onClick={(e) => { e.preventDefault(); onOpenContact(); }} className="hover:text-emerald-400 transition-colors">Enterprise</a></li>
                <li><a href="#" onClick={(e) => { e.preventDefault(); onOpenContact(); }} className="hover:text-emerald-400 transition-colors">Staffing Agencies</a></li>
                <li><a href="#" onClick={(e) => { e.preventDefault(); onOpenContact(); }} className="hover:text-emerald-400 transition-colors">High-Growth Tech</a></li>
                <li><a href="#" onClick={(e) => { e.preventDefault(); onOpenContact(); }} className="hover:text-emerald-400 transition-colors">Executive Search</a></li>
                <li><a href="#" onClick={(e) => { e.preventDefault(); onOpenContact(); }} className="hover:text-emerald-400 transition-colors">Global Teams</a></li>
              </ul>
            </div>

            {/* Column 3: Stakeholders */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">Stakeholders</h4>
              <ul className="space-y-2 text-xs text-slate-400">
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Chief People Officers</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">TA Leaders</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Recruiters & Sourcers</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Hiring Managers</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Candidate Experience</a></li>
              </ul>
            </div>

            {/* Column 4: Industries */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">Industries</h4>
              <ul className="space-y-2 text-xs text-slate-400">
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Software & SaaS</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Healthcare & Nursing</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Aerospace & Defense</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Financial Services</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Retail & Hospitality</a></li>
              </ul>
            </div>

            {/* Column 5: Resources */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">Resources</h4>
              <ul className="space-y-2 text-xs text-slate-400">
                <li><a href="#testimonials" className="hover:text-emerald-400 transition-colors">Customer Stories</a></li>
                <li><a href="#" onClick={(e) => { e.preventDefault(); onOpenContact(); }} className="hover:text-emerald-400 transition-colors">Hiring ROI Calculator</a></li>
                <li><a href="#" onClick={(e) => { e.preventDefault(); onOpenRegister(); }} className="hover:text-emerald-400 transition-colors">Live EZ Agent Webinar</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Talent Academy</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Product Blog</a></li>
              </ul>
            </div>

            {/* Column 6: Company */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">Company</h4>
              <ul className="space-y-2 text-xs text-slate-400">
                <li><a href="#" className="hover:text-emerald-400 transition-colors">About hireEZ</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Careers (We're Hiring)</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Press & Media</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Security Portal</a></li>
              </ul>
            </div>

            {/* Column 7: Legal */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">Legal</h4>
              <ul className="space-y-2 text-xs text-slate-400">
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">GDPR & DPA</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Cookie Preferences</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Subprocessors</a></li>
              </ul>
            </div>
          </div>

          {/* Bottom row with logo, copyright, social icons */}
          <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="flex items-baseline tracking-tight">
                <span className="text-xl font-bold text-white tracking-tight">hire</span>
                <span className="text-xl font-extrabold text-[#00DC82] tracking-tighter">EZ</span>
              </div>
              <span className="text-xs text-slate-500">
                © 2026 hireEZ, Inc. All rights reserved. The Agentic AI Recruiting Platform.
              </span>
            </div>

            <div className="flex items-center gap-4 text-slate-400">
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-emerald-400 transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter" className="hover:text-emerald-400 transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer" aria-label="YouTube" className="hover:text-emerald-400 transition-colors">
                <Youtube className="w-4 h-4" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook" className="hover:text-emerald-400 transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

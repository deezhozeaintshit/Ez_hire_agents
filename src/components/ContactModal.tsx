import React, { useState } from 'react';
import { X, CheckCircle2, ArrowRight, Sparkles, Building, Mail, User, Phone, ShieldCheck } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [teamSize, setTeamSize] = useState('50-250');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="relative w-full max-w-lg rounded-3xl bg-[#0D111D] border border-white/15 p-6 sm:p-8 shadow-2xl overflow-hidden">
        {/* Ambient background glow */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 blur-[100px] pointer-events-none rounded-full" />

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/40">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-white">Demo Request Confirmed!</h3>
            <p className="text-sm text-slate-300 max-w-sm mx-auto">
              Thank you, <strong className="text-white">{name || 'there'}</strong>. A dedicated hireEZ Enterprise Solution Architect will reach out to <strong className="text-emerald-400">{email}</strong> within 15 minutes.
            </p>
            <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5 text-xs text-slate-400">
              Preparing customized EZ Agent pipeline demo for {company || 'your team'}.
            </div>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="mt-4 px-6 py-2.5 rounded-full bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold text-sm"
            >
              Return to Website
            </button>
          </div>
        ) : (
          <div className="space-y-6">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                Live Agent Walkthrough
              </div>
              <h3 className="text-2xl font-extrabold text-white">Direct Your Own AI Recruiting Team</h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                See how EZ Agent automates 75% of your hiring pipeline with zero loss in quality.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Full Name</label>
                <div className="flex items-center gap-2 bg-[#090D16] border border-white/15 rounded-xl px-3.5 py-2.5 focus-within:border-emerald-500/70">
                  <User className="w-4 h-4 text-slate-400" />
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Sarah Jenkins"
                    className="w-full bg-transparent text-sm text-white placeholder:text-slate-500 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Work Email</label>
                <div className="flex items-center gap-2 bg-[#090D16] border border-white/15 rounded-xl px-3.5 py-2.5 focus-within:border-emerald-500/70">
                  <Mail className="w-4 h-4 text-slate-400" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="sarah@company.com"
                    className="w-full bg-transparent text-sm text-white placeholder:text-slate-500 focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Company</label>
                  <div className="flex items-center gap-2 bg-[#090D16] border border-white/15 rounded-xl px-3.5 py-2.5 focus-within:border-emerald-500/70">
                    <Building className="w-4 h-4 text-slate-400" />
                    <input
                      type="text"
                      required
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      placeholder="Acme, Inc."
                      className="w-full bg-transparent text-sm text-white placeholder:text-slate-500 focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Company Size</label>
                  <select
                    value={teamSize}
                    onChange={(e) => setTeamSize(e.target.value)}
                    className="w-full bg-[#090D16] border border-white/15 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-emerald-500/70"
                  >
                    <option value="1-50">1 - 50 employees</option>
                    <option value="50-250">50 - 250 employees</option>
                    <option value="250-1000">250 - 1,000 employees</option>
                    <option value="1000+">1,000+ Enterprise</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="w-full mt-2 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20 transition-all cursor-pointer"
              >
                <span>Book Priority Demo</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="flex items-center justify-center gap-2 text-[11px] text-slate-400 pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Enterprise SOC 2 Type II • Zero spam guarantee</span>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

import React, { useState } from 'react';
import { X, CheckCircle2, Calendar, Clock, Sparkles, User, Mail, ArrowRight, Shield } from 'lucide-react';

interface RegisterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const RegisterModal: React.FC<RegisterModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [registered, setRegistered] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setRegistered(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="relative w-full max-w-lg rounded-3xl bg-[#0D111D] border border-white/15 p-6 sm:p-8 shadow-2xl overflow-hidden">
        {/* Ambient background glow */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-emerald-500/10 blur-[100px] pointer-events-none rounded-full" />

        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {registered ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/40">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-white">You're Registered!</h3>
            <p className="text-sm text-slate-300 max-w-sm mx-auto">
              We've sent calendar invites and direct stream access credentials for <strong className="text-white">September 18, 12 PM CST</strong> to <strong className="text-emerald-400">{email}</strong>.
            </p>
            <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5 text-xs text-slate-400">
              Calendar event: <strong>"The New EZ Agent: Autonomous Recruiting in Action"</strong>
            </div>
            <button
              onClick={() => {
                setRegistered(false);
                onClose();
              }}
              className="mt-4 px-6 py-2.5 rounded-full bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold text-sm"
            >
              Close Window
            </button>
          </div>
        ) : (
          <div className="space-y-6">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                Live Product Premiere
              </div>
              <h3 className="text-2xl font-extrabold text-white">See the New EZ Agent Live</h3>
              <div className="mt-2 flex items-center gap-3 text-xs text-slate-300">
                <span className="flex items-center gap-1 text-emerald-400 font-semibold">
                  <Calendar className="w-3.5 h-3.5" /> September 18, 2026
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" /> 12:00 PM CST (45 mins)
                </span>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-black/40 border border-white/5 space-y-1.5 text-xs text-slate-300">
              <div className="font-semibold text-white">What You'll Experience Live:</div>
              <ul className="space-y-1 text-slate-400">
                <li>• Live demonstration of autonomous agent sourcing across 45+ platforms</li>
                <li>• Real conversational voice screening and calendar coordination</li>
                <li>• Live Q&A with hireEZ VP of Product & Engineering</li>
              </ul>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Your Name</label>
                <div className="flex items-center gap-2 bg-[#090D16] border border-white/15 rounded-xl px-3.5 py-2.5 focus-within:border-emerald-500/70">
                  <User className="w-4 h-4 text-slate-400" />
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Alex Morgan"
                    className="w-full bg-transparent text-sm text-white placeholder:text-slate-500 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Corporate Email</label>
                <div className="flex items-center gap-2 bg-[#090D16] border border-white/15 rounded-xl px-3.5 py-2.5 focus-within:border-emerald-500/70">
                  <Mail className="w-4 h-4 text-slate-400" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="alex@enterprise.com"
                    className="w-full bg-transparent text-sm text-white placeholder:text-slate-500 focus:outline-none"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full mt-2 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20 transition-all cursor-pointer"
              >
                <span>Confirm Free Registration</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

import React, { useState, useEffect } from 'react';
import {
  Sparkles,
  ArrowRight,
  Play,
  Pause,
  Mail,
  Calendar,
  Search,
  CheckCircle2,
  Users,
  Check,
  ChevronRight,
  Clock,
  Briefcase,
  Award,
  Zap
} from 'lucide-react';

export const SystemOfAction: React.FC = () => {
  const [activeStage, setActiveStage] = useState<1 | 2 | 3>(2);
  const [isPlayingAudio, setIsPlayingAudio] = useState(true);
  const [audioSeconds, setAudioSeconds] = useState(36);
  const [showEmailModal, setShowEmailModal] = useState(false);
  const [selectedSlot, setSelectedSlot] = useState('Thu, 2:30 PM');

  // Audio timer simulation
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlayingAudio) {
      interval = setInterval(() => {
        setAudioSeconds((prev) => (prev >= 58 ? 12 : prev + 1));
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isPlayingAudio]);

  return (
    <section id="system-of-action" className="py-20 lg:py-28 relative bg-[#0D111D] border-b border-white/[0.06]">
      {/* Ambient background glows */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-emerald-500/10 blur-[130px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-500/10 blur-[130px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Zap className="w-3.5 h-3.5" />
            The System of Action
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Say the role. <br />
            <span className="text-[#00DC82]">The hiring begins.</span>
          </h2>
          <p className="mt-5 text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
            See what hiring looks like now. Not a shorter day. A bigger one.
          </p>
        </div>

        {/* Stage Selector Tabs */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1.5 rounded-2xl bg-[#131827] border border-white/10 gap-1 sm:gap-2">
            <button
              onClick={() => setActiveStage(1)}
              className={`px-4 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer flex items-center gap-2 ${
                activeStage === 1
                  ? 'bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/20 font-bold'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <span className="w-5 h-5 rounded-full bg-black/20 flex items-center justify-center text-[10px]">1</span>
              Stage 1: Open Role
            </button>
            <button
              onClick={() => setActiveStage(2)}
              className={`px-4 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer flex items-center gap-2 ${
                activeStage === 2
                  ? 'bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/20 font-bold'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <span className="w-5 h-5 rounded-full bg-black/20 flex items-center justify-center text-[10px]">2</span>
              Stage 2: Agent Execution
            </button>
            <button
              onClick={() => setActiveStage(3)}
              className={`px-4 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer flex items-center gap-2 ${
                activeStage === 3
                  ? 'bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/20 font-bold'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <span className="w-5 h-5 rounded-full bg-black/20 flex items-center justify-center text-[10px]">3</span>
              Stage 3: Role Closed
            </button>
          </div>
        </div>

        {/* Interactive Pipeline Canvas */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* STAGE 1: Open Role */}
          <div
            className={`lg:col-span-3 transition-all duration-300 ${
              activeStage === 1
                ? 'ring-2 ring-emerald-500 shadow-xl shadow-emerald-500/10'
                : 'opacity-90 hover:opacity-100'
            }`}
          >
            <div className="rounded-2xl bg-[#151B2E] border border-white/10 p-5 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">Stage 01</span>
                <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-white/5 text-slate-300">Command Input</span>
              </div>
              <h3 className="text-lg font-bold text-white">Open Role Directive</h3>

              <div className="p-4 rounded-xl bg-[#090D16] border border-white/10 space-y-3">
                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Prompt given to EZ Agent:</span>
                </div>
                <blockquote className="text-sm font-medium text-white italic bg-white/[0.03] p-3 rounded-lg border-l-2 border-emerald-400">
                  "a senior sales manager from Dallas with at least 3 years of experience"
                </blockquote>
                <div className="flex items-center justify-between text-[11px] text-slate-400 pt-2 border-t border-white/5">
                  <span>Target: Dallas Metro Area</span>
                  <span className="text-emerald-400 font-semibold">Priority 1 Req</span>
                </div>
              </div>

              <div className="space-y-2 pt-2 text-xs text-slate-400">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Cross-platform talent discovery</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Autonomous ICP scoring filters</span>
                </div>
              </div>

              <button
                onClick={() => setActiveStage(2)}
                className="w-full py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-200 text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
              >
                <span>View Agent Execution</span>
                <ChevronRight className="w-4 h-4 text-emerald-400" />
              </button>
            </div>
          </div>

          {/* STAGE 2: Autonomous Agent Execution Nodes */}
          <div
            className={`lg:col-span-6 transition-all duration-300 ${
              activeStage === 2
                ? 'ring-2 ring-emerald-500 shadow-2xl shadow-emerald-500/10'
                : 'opacity-90 hover:opacity-100'
            }`}
          >
            <div className="rounded-2xl bg-[#151B2E] border border-white/10 p-5 sm:p-6 space-y-5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">Stage 02</span>
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                </div>
                <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
                  Autonomous Execution
                </span>
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-white">Autonomous Agent Workflows in Motion</h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {/* Sourcing Node */}
                <div className="p-3.5 rounded-xl bg-[#090D16] border border-white/10 hover:border-emerald-500/30 transition-all">
                  <div className="flex items-center justify-between text-xs mb-1.5">
                    <span className="font-semibold text-slate-300 flex items-center gap-1.5">
                      <Search className="w-3.5 h-3.5 text-emerald-400" /> Sourcing Node
                    </span>
                    <span className="text-[10px] text-emerald-400 font-mono">Live</span>
                  </div>
                  <div className="text-base font-extrabold text-white">6k Candidates Found</div>
                  <p className="text-[11px] text-slate-400 mt-1">
                    Queried 45+ professional ecosystems & passive databases.
                  </p>
                </div>

                {/* Applicant Review Node */}
                <div className="p-3.5 rounded-xl bg-[#090D16] border border-white/10 hover:border-emerald-500/30 transition-all">
                  <div className="flex items-center justify-between text-xs mb-1.5">
                    <span className="font-semibold text-slate-300 flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" /> Applicant Review
                    </span>
                    <span className="text-[10px] text-cyan-400 font-mono">Ranked</span>
                  </div>
                  <div className="text-base font-extrabold text-white">Review Shortlist</div>
                  <p className="text-[11px] text-slate-400 mt-1">
                    Ranked candidates against target sales benchmarks.
                  </p>
                </div>
              </div>

              {/* Conversational Screening Node with Audio Waveform Simulator */}
              <div className="p-4 rounded-xl bg-[#090D16] border border-emerald-500/30 shadow-[0_0_20px_rgba(16,185,129,0.08)] space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                      hireEZ AI Screener 00:{audioSeconds < 10 ? `0${audioSeconds}` : audioSeconds}
                    </span>
                  </div>
                  <button
                    onClick={() => setIsPlayingAudio(!isPlayingAudio)}
                    className="p-1.5 rounded-lg bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-400 text-xs font-medium flex items-center gap-1.5 transition-colors cursor-pointer"
                  >
                    {isPlayingAudio ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                    {isPlayingAudio ? 'Pause Voice' : 'Play Voice'}
                  </button>
                </div>

                <div className="text-xs text-slate-300 bg-white/[0.03] p-2.5 rounded-lg border border-white/5">
                  <span className="text-emerald-400 font-semibold">AI Agent:</span> "Verónica, tell me about your territory growth strategies in Dallas during your tenure at ScaleCo."
                </div>

                {/* Animated Waveform Bars */}
                <div className="flex items-center justify-between h-8 px-2 bg-black/40 rounded-lg">
                  {[12, 24, 16, 28, 14, 20, 32, 18, 22, 30, 16, 24, 20, 28, 14, 26, 32, 18, 24, 15, 29, 21, 16, 26, 12, 22, 30, 18].map(
                    (height, i) => (
                      <div
                        key={i}
                        className={`w-1 rounded-full bg-gradient-to-t from-emerald-500 to-teal-300 transition-all duration-300 ${
                          isPlayingAudio ? 'opacity-100' : 'opacity-40'
                        }`}
                        style={{
                          height: isPlayingAudio ? `${Math.max(4, (height + (i % 3) * 4) % 30)}px` : '6px',
                        }}
                      />
                    )
                  )}
                </div>
              </div>

              {/* Engagement Node & Scheduling Node */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {/* Engagement Node */}
                <div className="p-3.5 rounded-xl bg-[#090D16] border border-white/10 space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold text-slate-300 flex items-center gap-1.5">
                      <Mail className="w-3.5 h-3.5 text-indigo-400" /> Engagement Node
                    </span>
                    <button
                      onClick={() => setShowEmailModal(true)}
                      className="text-[10px] text-emerald-400 hover:underline cursor-pointer"
                    >
                      View Draft
                    </button>
                  </div>
                  <div className="text-xs text-slate-300 bg-white/[0.02] p-2 rounded-lg border border-white/5 line-clamp-2">
                    "Hi Michael, I was reviewing your portfolio this morning and was incredibly impressed with..."
                  </div>
                  <span className="text-[10px] text-emerald-400 font-semibold block">
                    ✓ 71% Open Rate • Hyper-personalized
                  </span>
                </div>

                {/* Scheduling Node */}
                <div className="p-3.5 rounded-xl bg-[#090D16] border border-white/10 space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold text-slate-300 flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-amber-400" /> Scheduling Node
                    </span>
                    <span className="text-[10px] text-amber-400 font-mono">Syncing</span>
                  </div>
                  <div className="text-xs font-semibold text-white">
                    Looking for common slot...
                  </div>
                  <div className="flex items-center gap-1.5">
                    {['Thu, 2:30 PM', 'Fri, 10:00 AM'].map((slot) => (
                      <button
                        key={slot}
                        onClick={() => setSelectedSlot(slot)}
                        className={`text-[10px] px-2 py-1 rounded border transition-all cursor-pointer ${
                          selectedSlot === slot
                            ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40'
                            : 'bg-white/5 text-slate-400 border-white/10'
                        }`}
                      >
                        {slot}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* STAGE 3: Role Closed */}
          <div
            className={`lg:col-span-3 transition-all duration-300 ${
              activeStage === 3
                ? 'ring-2 ring-emerald-500 shadow-xl shadow-emerald-500/10'
                : 'opacity-90 hover:opacity-100'
            }`}
          >
            <div className="rounded-2xl bg-[#151B2E] border border-white/10 p-5 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">Stage 03</span>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold bg-[#10B981] text-slate-950 uppercase tracking-wider">
                  ROLE CLOSED
                </span>
              </div>

              <h3 className="text-lg font-bold text-white">Candidate Match</h3>

              <div className="p-4 rounded-xl bg-[#090D16] border border-emerald-500/30 shadow-[0_0_15px_rgba(16,185,129,0.1)] space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-emerald-500 to-teal-300 p-0.5">
                    <div className="w-full h-full rounded-full bg-[#0D111D] flex items-center justify-center text-emerald-300 font-bold text-base">
                      VR
                    </div>
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-white">Verónica Rios</h4>
                    <p className="text-xs text-slate-400">Senior Sales Manager • Dallas</p>
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-white/[0.03] border border-white/5 text-xs text-slate-300 space-y-1">
                  <span className="text-[10px] uppercase font-bold text-emerald-400">Agent Summary:</span>
                  <p className="text-slate-200">
                    "She's led high-performing teams and driven regional revenue growth."
                  </p>
                </div>

                <div className="space-y-1.5 pt-1 text-xs text-slate-400">
                  <div className="flex items-center justify-between">
                    <span>Screening Score:</span>
                    <span className="text-emerald-400 font-bold">9.6 / 10</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Days to Close:</span>
                    <span className="text-white font-bold">14 days (75% faster)</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>ATS Record:</span>
                    <span className="text-slate-300">Synced to Greenhouse</span>
                  </div>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-center">
                <span className="text-xs font-semibold text-emerald-300">
                  Hired with zero recruiter manual busywork
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Personalized Email Modal Preview */}
        {showEmailModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <div className="max-w-lg w-full rounded-2xl bg-[#0D111D] border border-white/15 p-6 shadow-2xl space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <Mail className="w-5 h-5 text-emerald-400" />
                  <span className="text-sm font-bold text-white">Auto-Drafted Candidate Outreach</span>
                </div>
                <button
                  onClick={() => setShowEmailModal(false)}
                  className="text-slate-400 hover:text-white text-xs px-2 py-1 rounded bg-white/5"
                >
                  Close
                </button>
              </div>

              <div className="space-y-2 text-xs text-slate-300">
                <div><strong>To:</strong> michael.c@domain.com</div>
                <div><strong>Subject:</strong> Impressed by your Strategic AE track record at Austin ScaleCo</div>
                <div className="p-3.5 rounded-xl bg-black/40 border border-white/10 font-sans leading-relaxed text-slate-200 mt-2">
                  Hi Michael,<br /><br />
                  I was reviewing your portfolio this morning and was incredibly impressed with how your team surpassed regional quotas by 140% over the last four quarters. We are currently scaling our strategic sales footprint in Texas and your background in complex multi-stakeholder deals is an exact fit.<br /><br />
                  Would you be open to a 15-minute introductory conversation this Thursday or Friday?<br /><br />
                  Best regards,<br />
                  <strong>hireEZ Autonomous Outreach Agent</strong> on behalf of Talent Leadership
                </div>
              </div>

              <div className="flex justify-end gap-2 pt-2">
                <button
                  onClick={() => setShowEmailModal(false)}
                  className="px-4 py-2 rounded-xl bg-emerald-500 text-slate-950 font-bold text-xs hover:bg-emerald-600"
                >
                  Done
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

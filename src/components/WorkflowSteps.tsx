import React, { useState } from 'react';
import {
  Search,
  Sparkles,
  ArrowRight,
  Globe,
  Database,
  CheckCircle2,
  PhoneCall,
  Calendar,
  BarChart3,
  ExternalLink,
  ChevronRight,
  Check,
  X,
  FileCheck,
  Layers,
  Clock,
  TrendingUp,
  UserCheck,
  Building,
  MapPin,
  Sliders,
  Send,
  RefreshCw,
  MessageSquare
} from 'lucide-react';

export const WorkflowSteps: React.FC = () => {
  // Step 1 interactive tags
  const [selectedTags, setSelectedTags] = useState<string[]>(['B2B SaaS', 'Quota Exceeded', 'Texas']);
  const availableTags = ['B2B SaaS', 'Quota Exceeded', 'Texas', 'MEDDPICC', 'Salesforce CRM', '10+ Quotas'];

  // Step 2 career page theme
  const [careerTab, setCareerTab] = useState<'desktop' | 'mobile'>('desktop');

  // Step 3 enrichment toggle
  const [enrichmentView, setEnrichmentView] = useState<'diff' | 'history'>('diff');

  // Step 4 applicant review state
  const [reviewStatus, setReviewStatus] = useState<'pending' | 'approved' | 'rejected'>('pending');

  // Step 5 screening conversation mode
  const [screeningMode, setScreeningMode] = useState<'voice' | 'chat'>('voice');

  // Step 6 scheduler selected slot
  const [schedulerDate, setSchedulerDate] = useState('Wed, Oct 24');
  const [schedulerTime, setSchedulerTime] = useState('2:00 PM CST');

  // Step 7 hiring intelligence active query
  const [activeIntelQuery, setActiveIntelQuery] = useState('Which reqs are at risk this quarter?');

  const intelQueries = [
    'Which reqs are at risk this quarter?',
    'Why is this role still open?',
    'Give me a market report.'
  ];

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  return (
    <section id="workflows" className="py-24 lg:py-32 bg-[#090D16] relative">
      {/* Background accents */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-emerald-500/5 blur-[160px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-cyan-500/5 blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Layers className="w-3.5 h-3.5" />
            Autonomous Workflow Engine
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            The Complete 7-Step <br />
            <span className="text-[#00DC82]">Agentic Recruiting Pipeline</span>
          </h2>
          <p className="mt-5 text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
            Every phase of talent acquisition, transformed from high-effort manual bottlenecks into autonomous execution directed by you.
          </p>
        </div>

        {/* 7 Workflow Cards */}
        <div className="space-y-20 lg:space-y-28">
          {/* STEP 01: Sourcing on Command */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-5 space-y-5">
              <div className="flex items-center gap-3">
                <span className="text-5xl sm:text-6xl font-black text-emerald-400/30 font-mono">01</span>
                <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                  Autonomous Sourcing
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-snug">
                Brief the agent like a sourcer. It comes back with qualified candidates — and the why behind every match.
              </h3>
              <p className="text-slate-300 text-base leading-relaxed">
                That "one more search" you always wished you had time for? The agent's already running it — a billion-plus profiles, 45+ platforms — surfacing 7x more qualified candidates, with the why behind each name.
              </p>
              <div className="pt-2 flex items-center gap-6 text-sm text-slate-400">
                <div>
                  <strong className="text-white block text-lg font-bold">1B+</strong> Profiles Indexed
                </div>
                <div className="w-px h-8 bg-white/10" />
                <div>
                  <strong className="text-emerald-400 block text-lg font-bold">7x</strong> More Qualified Leads
                </div>
                <div className="w-px h-8 bg-white/10" />
                <div>
                  <strong className="text-cyan-400 block text-lg font-bold">45+</strong> Talent Networks
                </div>
              </div>
            </div>

            {/* Step 1 Interactive Widget */}
            <div className="lg:col-span-7">
              <div className="rounded-2xl bg-[#0D111D] border border-white/10 p-6 shadow-2xl space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-white/5">
                  <div className="flex items-center gap-2 text-xs font-semibold text-white">
                    <Search className="w-4 h-4 text-emerald-400" />
                    Multi-Vector Talent Search Query
                  </div>
                  <span className="text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                    Live Filtering
                  </span>
                </div>

                {/* Filter tags interactive builder */}
                <div className="space-y-2">
                  <span className="text-xs text-slate-400">Add or toggle match criteria:</span>
                  <div className="flex flex-wrap gap-2">
                    {availableTags.map((tag) => (
                      <button
                        key={tag}
                        onClick={() => toggleTag(tag)}
                        className={`text-xs px-3 py-1.5 rounded-lg border transition-all cursor-pointer ${
                          selectedTags.includes(tag)
                            ? 'bg-emerald-500/20 border-emerald-500/50 text-emerald-300 font-semibold'
                            : 'bg-white/5 border-white/10 text-slate-400 hover:text-white'
                        }`}
                      >
                        {selectedTags.includes(tag) ? '✓ ' : '+ '} {tag}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Candidate Result Cards Preview */}
                <div className="space-y-3 pt-2">
                  <div className="p-4 rounded-xl bg-[#151B2E] border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-emerald-500/20 text-emerald-400 font-bold flex items-center justify-center text-sm border border-emerald-500/30">
                        VR
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-bold text-white">Verónica Rios</span>
                          <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-400 font-bold">
                            98% Fit Score
                          </span>
                        </div>
                        <p className="text-xs text-slate-400">Sr. Sales Manager • ScaleCo (Dallas, TX)</p>
                      </div>
                    </div>
                    <div className="text-right sm:text-right">
                      <span className="text-xs text-slate-300 font-mono block">Active on LinkedIn & Patents</span>
                      <span className="text-[11px] text-emerald-400 font-semibold">Verified Phone & Work Email</span>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-[#151B2E] border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-cyan-500/20 text-cyan-400 font-bold flex items-center justify-center text-sm border border-cyan-500/30">
                        DC
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-bold text-white">David Cruz</span>
                          <span className="text-[10px] px-2 py-0.5 rounded-full bg-cyan-500/15 text-cyan-400 font-bold">
                            93% Fit Score
                          </span>
                        </div>
                        <p className="text-xs text-slate-400">Enterprise Director • TechNorth (Austin, TX)</p>
                      </div>
                    </div>
                    <div className="text-right sm:text-right">
                      <span className="text-xs text-slate-300 font-mono block">12 Quotas Exceeded</span>
                      <span className="text-[11px] text-cyan-400 font-semibold">Ready to Engage</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* STEP 02: Career Sites & Landing Pages */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Step 2 Interactive Widget (Reversed Order on desktop) */}
            <div className="lg:col-span-7 order-2 lg:order-1">
              <div className="rounded-2xl bg-[#0D111D] border border-white/10 p-6 shadow-2xl space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-white/5">
                  <div className="flex items-center gap-2 text-xs font-semibold text-white">
                    <Globe className="w-4 h-4 text-emerald-400" />
                    Auto-Generated Branded Career Page Preview
                  </div>
                  <div className="flex items-center gap-1 bg-black/40 p-1 rounded-lg border border-white/10 text-[11px]">
                    <button
                      onClick={() => setCareerTab('desktop')}
                      className={`px-2.5 py-0.5 rounded ${careerTab === 'desktop' ? 'bg-white/15 text-white font-semibold' : 'text-slate-400'}`}
                    >
                      Desktop
                    </button>
                    <button
                      onClick={() => setCareerTab('mobile')}
                      className={`px-2.5 py-0.5 rounded ${careerTab === 'mobile' ? 'bg-white/15 text-white font-semibold' : 'text-slate-400'}`}
                    >
                      Mobile View
                    </button>
                  </div>
                </div>

                {/* Career Portal Mock */}
                <div className="rounded-xl bg-[#151B2E] border border-white/10 p-5 space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-white/5">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded bg-emerald-500/20 flex items-center justify-center text-emerald-400 text-xs font-bold">
                        H
                      </div>
                      <span className="text-xs font-bold text-white">Acme Global Careers</span>
                    </div>
                    <span className="text-[11px] text-emerald-400 font-medium">Auto-Published 2m ago</span>
                  </div>

                  <div className="space-y-2">
                    <span className="text-[10px] uppercase font-bold tracking-wider text-emerald-400">Open Role</span>
                    <h4 className="text-lg font-bold text-white">Senior Sales Manager — Enterprise Growth</h4>
                    <p className="text-xs text-slate-300">Dallas, TX • Full-Time • $160k - $210k OTE + Equity</p>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-[11px] text-slate-300">
                    <div className="p-2 rounded bg-black/30 border border-white/5">
                      ✓ Unlimited PTO & Health Care
                    </div>
                    <div className="p-2 rounded bg-black/30 border border-white/5">
                      ✓ $5,000 Annual Learning Stipend
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <span className="text-xs text-slate-400">One-click conversational apply</span>
                    <button className="px-4 py-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold text-xs transition-colors">
                      Quick Apply with hireEZ
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs text-slate-400 px-1">
                  <span>SEO Title & Schema.org tags configured</span>
                  <span className="text-emerald-400 font-semibold">100% Mobile Optimized</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-5 order-1 lg:order-2">
              <div className="flex items-center gap-3">
                <span className="text-5xl sm:text-6xl font-black text-emerald-400/30 font-mono">02</span>
                <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                  Instant Landing Pages
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-snug">
                Turn every job opening into a branded, candidate-ready career page in a single conversation.
              </h3>
              <p className="text-slate-300 text-base leading-relaxed">
                Remember begging for a landing page and getting a ticket number? Now every role gets its own — built in one conversation, feeding applicants straight into your pipeline.
              </p>
              <ul className="space-y-2 text-sm text-slate-300">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  Generated in seconds with brand colors & tailored benefits
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  Instant interactive screening application embedded
                </li>
              </ul>
            </div>
          </div>

          {/* STEP 03: Talent CRM & ATS Enrichment */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-5 space-y-5">
              <div className="flex items-center gap-3">
                <span className="text-5xl sm:text-6xl font-black text-emerald-400/30 font-mono">03</span>
                <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                  Talent CRM & ATS Enrichment
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-snug">
                Turn your dormant ATS into a living talent pipeline — every profile current, every relationship warm.
              </h3>
              <p className="text-slate-300 text-base leading-relaxed">
                That great candidate who said "ask me in six months"? The agent remembers. It keeps every profile warm, reads the timing — teams fill 20-30% of roles from talent they already own.
              </p>
              <div className="p-4 rounded-xl bg-[#151B2E] border border-white/10 space-y-1">
                <div className="text-2xl font-extrabold text-[#00DC82]">20% – 30%</div>
                <div className="text-xs text-slate-300 font-medium">Of open requisitions filled from existing internal ATS databases</div>
              </div>
            </div>

            {/* Step 3 Interactive Widget */}
            <div className="lg:col-span-7">
              <div className="rounded-2xl bg-[#0D111D] border border-white/10 p-6 shadow-2xl space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-white/5">
                  <div className="flex items-center gap-2 text-xs font-semibold text-white">
                    <Database className="w-4 h-4 text-emerald-400" />
                    Automated Profile Enrichment & Diff View
                  </div>
                  <div className="flex items-center gap-1 bg-black/40 p-1 rounded-lg border border-white/10 text-[11px]">
                    <button
                      onClick={() => setEnrichmentView('diff')}
                      className={`px-2.5 py-0.5 rounded ${enrichmentView === 'diff' ? 'bg-white/15 text-white font-semibold' : 'text-slate-400'}`}
                    >
                      Enrichment Diff
                    </button>
                    <button
                      onClick={() => setEnrichmentView('history')}
                      className={`px-2.5 py-0.5 rounded ${enrichmentView === 'history' ? 'bg-white/15 text-white font-semibold' : 'text-slate-400'}`}
                    >
                      Timing Signal
                    </button>
                  </div>
                </div>

                {/* Diff Comparison Panel */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Outdated ATS Record */}
                  <div className="p-4 rounded-xl bg-[#151B2E]/60 border border-white/5 space-y-2.5 opacity-75">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-rose-400">Old ATS Record (2022)</span>
                      <span className="text-[10px] text-slate-400">Dormant 24mo</span>
                    </div>
                    <div className="text-sm font-bold text-white">Michael Chang</div>
                    <div className="text-xs text-slate-300">Junior AE @ LegacyCloud</div>
                    <div className="text-xs text-slate-400 space-y-1 pt-1 border-t border-white/5">
                      <div>Skills: Cold Calling, Salesforce</div>
                      <div>Location: Austin, TX</div>
                      <div>Salary expectation: $85k base</div>
                    </div>
                  </div>

                  {/* Refreshed by EZ Agent */}
                  <div className="p-4 rounded-xl bg-[#151B2E] border border-emerald-500/40 shadow-lg shadow-emerald-500/10 space-y-2.5">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1">
                        <Sparkles className="w-3 h-3" /> Refreshed Today
                      </span>
                      <span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-bold">
                        94% Re-engage
                      </span>
                    </div>
                    <div className="text-sm font-bold text-white">Michael Chang</div>
                    <div className="text-xs text-emerald-400 font-medium">Sr. Enterprise AE • Promoted 3mo ago</div>
                    <div className="text-xs text-slate-300 space-y-1 pt-1 border-t border-white/10">
                      <div>New: Enterprise SaaS, MEDDPICC, $2.4M ARR</div>
                      <div>Timing Signal: "Likely to consider new role"</div>
                      <div className="text-emerald-400 font-semibold">Action: Auto-nurture email scheduled</div>
                    </div>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-between text-xs">
                  <span className="text-slate-300">Candidate notes: "Ask me in 6 months"</span>
                  <span className="text-emerald-400 font-bold">Signal Triggered: 184 days elapsed</span>
                </div>
              </div>
            </div>
          </div>

          {/* STEP 04: Applicant Review */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Step 4 Interactive Widget (Reversed) */}
            <div className="lg:col-span-7 order-2 lg:order-1">
              <div className="rounded-2xl bg-[#0D111D] border border-white/10 p-6 shadow-2xl space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-white/5">
                  <div className="flex items-center gap-2 text-xs font-semibold text-white">
                    <FileCheck className="w-4 h-4 text-emerald-400" />
                    AI Fit Scorecard & Evidence Review
                  </div>
                  <span className="text-[11px] font-semibold text-emerald-400">
                    Human-in-the-Loop Approval
                  </span>
                </div>

                {/* Fit Scorecard Card */}
                <div className="p-5 rounded-xl bg-[#151B2E] border border-white/10 space-y-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="text-base font-bold text-white">Elena Rostova</h4>
                      <p className="text-xs text-slate-400">Head of Regional Sales Applicant</p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-black text-emerald-400">96 / 100</div>
                      <div className="text-[10px] text-slate-400 uppercase">Composite Match</div>
                    </div>
                  </div>

                  {/* Criteria Breakdown Bars */}
                  <div className="space-y-2.5 pt-1 text-xs">
                    <div>
                      <div className="flex justify-between mb-1 text-slate-300">
                        <span>Leadership Experience (Target: 3+ yrs)</span>
                        <span className="text-emerald-400 font-bold">5 Years (Exceeds)</span>
                      </div>
                      <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                        <div className="h-full bg-emerald-400 rounded-full w-[100%]" />
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between mb-1 text-slate-300">
                        <span>Territory Quota Attainment</span>
                        <span className="text-emerald-400 font-bold">135% Average</span>
                      </div>
                      <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                        <div className="h-full bg-emerald-400 rounded-full w-[95%]" />
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between mb-1 text-slate-300">
                        <span>Location Proximity (Dallas Hub)</span>
                        <span className="text-cyan-400 font-bold">Dallas Metro (Exact)</span>
                      </div>
                      <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                        <div className="h-full bg-cyan-400 rounded-full w-[100%]" />
                      </div>
                    </div>
                  </div>

                  {/* Human Decision Controls */}
                  <div className="pt-3 border-t border-white/10 flex items-center justify-between gap-3">
                    <span className="text-xs text-slate-400">Your Action:</span>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => setReviewStatus('rejected')}
                        className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all cursor-pointer ${
                          reviewStatus === 'rejected'
                            ? 'bg-rose-500/20 text-rose-300 border-rose-500/50'
                            : 'bg-white/5 text-slate-400 border-white/10 hover:text-white'
                        }`}
                      >
                        Request More Info
                      </button>
                      <button
                        onClick={() => setReviewStatus('approved')}
                        className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                          reviewStatus === 'approved'
                            ? 'bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/30'
                            : 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 hover:bg-emerald-500 hover:text-slate-950'
                        }`}
                      >
                        {reviewStatus === 'approved' ? '✓ Approved for Screening' : 'Approve for Screener'}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-5 order-1 lg:order-2">
              <div className="flex items-center gap-3">
                <span className="text-5xl sm:text-6xl font-black text-emerald-400/30 font-mono">04</span>
                <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                  Applicant Review
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-snug">
                Replace resume scrolling with instant, evidence-backed reviews. Every applicant read. Every call yours.
              </h3>
              <p className="text-slate-300 text-base leading-relaxed">
                Somewhere on page nine sits your best applicant. The agent reads every application the moment it lands, ranks it, explains it — and nothing gets rejected without you.
              </p>
              <div className="space-y-2 text-sm text-slate-300">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400" />
                  Zero dropped applicants, zero bias blind spots
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400" />
                  Structured evidence explanations for every score
                </div>
              </div>
            </div>
          </div>

          {/* STEP 05: Conversational AI Screening */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-5 space-y-5">
              <div className="flex items-center gap-3">
                <span className="text-5xl sm:text-6xl font-black text-emerald-400/30 font-mono">05</span>
                <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                  Conversational AI Screening
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-snug">
                A real screening conversation for every candidate — their questions, your standards, at scale.
              </h3>
              <p className="text-slate-300 text-base leading-relaxed">
                Screening five hundred applicants used to mean skipping four hundred. Now every candidate gets a real conversation — your questions, your bar, voice or chat — and you decide who moves forward.
              </p>
              <div className="p-4 rounded-xl bg-[#151B2E] border border-white/10 text-xs text-slate-300 space-y-2">
                <div className="flex items-center justify-between text-emerald-400 font-semibold">
                  <span>Candidate Experience Rating:</span>
                  <span>4.9 / 5.0 Stars</span>
                </div>
                <p className="text-slate-400 text-[11px]">
                  Candidates appreciate 24/7 availability, zero scheduling lag, and instant answers about company culture and benefits.
                </p>
              </div>
            </div>

            {/* Step 5 Interactive Widget */}
            <div className="lg:col-span-7">
              <div className="rounded-2xl bg-[#0D111D] border border-white/10 p-6 shadow-2xl space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-white/5">
                  <div className="flex items-center gap-2 text-xs font-semibold text-white">
                    <PhoneCall className="w-4 h-4 text-emerald-400" />
                    Interactive Screening Transcript
                  </div>
                  <div className="flex items-center gap-1 bg-black/40 p-1 rounded-lg border border-white/10 text-[11px]">
                    <button
                      onClick={() => setScreeningMode('voice')}
                      className={`px-2.5 py-0.5 rounded ${screeningMode === 'voice' ? 'bg-white/15 text-white font-semibold' : 'text-slate-400'}`}
                    >
                      Voice Screener
                    </button>
                    <button
                      onClick={() => setScreeningMode('chat')}
                      className={`px-2.5 py-0.5 rounded ${screeningMode === 'chat' ? 'bg-white/15 text-white font-semibold' : 'text-slate-400'}`}
                    >
                      Chat Mode
                    </button>
                  </div>
                </div>

                {/* Conversation Stream */}
                <div className="space-y-3">
                  <div className="p-3.5 rounded-xl bg-black/40 border border-white/5 space-y-1">
                    <div className="flex items-center justify-between text-[11px]">
                      <span className="font-bold text-emerald-400">hireEZ Voice Agent (01:24)</span>
                      <span className="text-slate-500">Question 3 of 5</span>
                    </div>
                    <p className="text-xs text-slate-200">
                      "Could you describe a recent complex multi-stakeholder contract where you encountered objection, and how you secured executive alignment?"
                    </p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#151B2E] border border-white/10 space-y-1">
                    <div className="flex items-center justify-between text-[11px]">
                      <span className="font-bold text-cyan-300">Verónica Rios (Candidate)</span>
                      <span className="text-slate-400">Dallas, TX</span>
                    </div>
                    <p className="text-xs text-slate-300">
                      "At ScaleCo, our prospect's CISO raised compliance roadblocks on our data retention protocol. I convened an ad-hoc technical panel with our engineering lead within 24 hours, delivered SOC 2 type II certifications, and closed the $420k ARR deal two weeks ahead of forecast."
                    </p>
                  </div>
                </div>

                {/* Evaluation Score Card */}
                <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span className="text-white font-medium">Evaluation: High Executive Presence, Rapid Problem-Solving</span>
                  </div>
                  <span className="text-emerald-400 font-extrabold text-sm">Score: 9.4/10</span>
                </div>
              </div>
            </div>
          </div>

          {/* STEP 06: AI Interview Scheduler */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Step 6 Interactive Widget (Reversed) */}
            <div className="lg:col-span-7 order-2 lg:order-1">
              <div className="rounded-2xl bg-[#0D111D] border border-white/10 p-6 shadow-2xl space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-white/5">
                  <div className="flex items-center gap-2 text-xs font-semibold text-white">
                    <Calendar className="w-4 h-4 text-emerald-400" />
                    Multi-Panel Coordinate Slot Resolver
                  </div>
                  <span className="text-[11px] text-emerald-400 font-mono">
                    Google & Outlook 365 Synced
                  </span>
                </div>

                {/* Calendar coordinate picker */}
                <div className="p-4 rounded-xl bg-[#151B2E] border border-white/10 space-y-4">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-300 font-semibold">Panel: VP of Sales + 2 Sales Directors</span>
                    <span className="text-slate-400">Duration: 45 min</span>
                  </div>

                  {/* Day Picker */}
                  <div className="grid grid-cols-3 gap-2">
                    {['Tue, Oct 23', 'Wed, Oct 24', 'Thu, Oct 25'].map((d) => (
                      <button
                        key={d}
                        onClick={() => setSchedulerDate(d)}
                        className={`p-2.5 rounded-lg border text-center transition-all cursor-pointer ${
                          schedulerDate === d
                            ? 'bg-emerald-500/20 border-emerald-500/40 text-emerald-300 font-bold'
                            : 'bg-black/30 border-white/5 text-slate-400 hover:text-white'
                        }`}
                      >
                        <div className="text-[10px] text-slate-400">Available</div>
                        <div className="text-xs font-semibold">{d}</div>
                      </button>
                    ))}
                  </div>

                  {/* Time Slots */}
                  <div className="space-y-1.5">
                    <span className="text-[11px] text-slate-400">Compatible mutual slots without conflicts:</span>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {['10:00 AM', '1:30 PM', '2:00 PM CST', '4:15 PM'].map((t) => (
                        <button
                          key={t}
                          onClick={() => setSchedulerTime(t)}
                          className={`py-2 px-3 rounded-lg border text-xs font-semibold transition-all cursor-pointer ${
                            schedulerTime === t
                              ? 'bg-emerald-500 text-slate-950 font-bold border-emerald-400 shadow-md shadow-emerald-500/20'
                              : 'bg-white/[0.03] border-white/10 text-slate-300 hover:bg-white/10'
                          }`}
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Confirmation info */}
                  <div className="pt-2 flex items-center justify-between border-t border-white/5 text-xs">
                    <span className="text-slate-400">Selected: {schedulerDate} @ {schedulerTime}</span>
                    <span className="text-emerald-400 font-bold">Auto-Invite Ready</span>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-black/40 border border-white/10 text-xs text-slate-400 flex items-center justify-between">
                  <span>Candidate confirmed via SMS & Calendar Invite</span>
                  <span className="text-emerald-400 font-semibold">0 Email Chains Needed</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-5 order-1 lg:order-2">
              <div className="flex items-center gap-3">
                <span className="text-5xl sm:text-6xl font-black text-emerald-400/30 font-mono">06</span>
                <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                  AI Interview Scheduler
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-snug">
                A candidate says yes, and the agent books it — calendars, panels, reschedules — inside the rules you set.
              </h3>
              <p className="text-slate-300 text-base leading-relaxed">
                The perfect candidate said yes on Tuesday. By Wednesday, the interview's booked — calendars, panels, reschedules, all inside your rules — and you never touched an email thread.
              </p>
              <ul className="space-y-2 text-sm text-slate-300">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  Instant panel multi-calendar conflict resolution
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  Autonomous rescheduling if conflicts arise
                </li>
              </ul>
            </div>
          </div>

          {/* STEP 07: Hiring Intelligence */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-5 space-y-5">
              <div className="flex items-center gap-3">
                <span className="text-5xl sm:text-6xl font-black text-emerald-400/30 font-mono">07</span>
                <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                  Hiring Intelligence
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-snug">
                Move past static dashboards and get instant, plain-language answers to full-funnel hiring metrics.
              </h3>
              <p className="text-slate-300 text-base leading-relaxed">
                See the market before it moves. Which skills are rising, where talent is heading, what competitors are paying — one question, and you're planning next year, not defending last quarter.
              </p>
              <div className="pt-2 space-y-2">
                <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                  Direct intelligence triggers:
                </div>
                <div className="flex flex-col gap-2">
                  {intelQueries.map((q) => (
                    <button
                      key={q}
                      onClick={() => setActiveIntelQuery(q)}
                      className={`text-left text-xs px-3.5 py-2 rounded-xl border transition-all cursor-pointer flex items-center justify-between ${
                        activeIntelQuery === q
                          ? 'bg-emerald-500/20 border-emerald-500/40 text-emerald-300 font-semibold'
                          : 'bg-white/5 border-white/10 text-slate-400 hover:text-white'
                      }`}
                    >
                      <span>"{q}"</span>
                      <ArrowRight className="w-3.5 h-3.5 text-emerald-400" />
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Step 7 Interactive Widget */}
            <div className="lg:col-span-7">
              <div className="rounded-2xl bg-[#0D111D] border border-white/10 p-6 shadow-2xl space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-white/5">
                  <div className="flex items-center gap-2 text-xs font-semibold text-white">
                    <BarChart3 className="w-4 h-4 text-emerald-400" />
                    Full-Funnel Market Intelligence Report
                  </div>
                  <span className="text-[11px] font-semibold text-cyan-400">Live AI Analysis</span>
                </div>

                {/* Intelligence Result Card based on query */}
                <div className="p-5 rounded-xl bg-[#151B2E] border border-white/10 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-white uppercase tracking-wide">
                      Query: "{activeIntelQuery}"
                    </span>
                    <span className="text-xs text-emerald-400 font-semibold">Confidence: 99.2%</span>
                  </div>

                  {activeIntelQuery === 'Which reqs are at risk this quarter?' && (
                    <div className="space-y-3">
                      <div className="p-3 rounded-lg bg-rose-500/10 border border-rose-500/20 text-xs text-rose-200">
                        <strong>At Risk:</strong> Staff Platform Architect (Req #402) — Market compensation increased by 14% in last 90 days. Current offer band ($175k) is below Dallas median ($195k).
                      </div>
                      <div className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-200">
                        <strong>On Track:</strong> Senior Sales Manager (Req #388) — 3 qualified finalists in final panel stage, projected closing date within 8 days.
                      </div>
                    </div>
                  )}

                  {activeIntelQuery === 'Why is this role still open?' && (
                    <div className="space-y-3 text-xs text-slate-300">
                      <div className="p-3 rounded-lg bg-black/40 border border-white/10 space-y-1.5">
                        <div className="font-semibold text-white">Funnel Drop-off Analysis:</div>
                        <p>
                          82 applicants were filtered out at Stage 3 due to strict 5+ year on-premise Kubernetes mandate.
                        </p>
                        <p className="text-emerald-400 font-semibold">
                          💡 Agent Recommendation: Relaxing to 3+ years AWS/EKS unlocks 240+ local candidates.
                        </p>
                      </div>
                    </div>
                  )}

                  {activeIntelQuery === 'Give me a market report.' && (
                    <div className="space-y-3 text-xs">
                      <div className="grid grid-cols-2 gap-3">
                        <div className="p-3 rounded-lg bg-black/40 border border-white/10">
                          <span className="text-slate-400 text-[10px] uppercase">Talent Supply</span>
                          <div className="text-sm font-bold text-white mt-1">Dallas Metro: +18% YOY</div>
                        </div>
                        <div className="p-3 rounded-lg bg-black/40 border border-white/10">
                          <span className="text-slate-400 text-[10px] uppercase">Competitor Activity</span>
                          <div className="text-sm font-bold text-emerald-400 mt-1">Hiring Surge in AI/SaaS</div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Metric Sparkline indicator */}
                  <div className="p-3 rounded-xl bg-black/40 border border-white/10 flex items-center justify-between text-xs">
                    <span className="text-slate-400">Data synthesized from 45,000+ regional job postings</span>
                    <span className="text-emerald-400 font-bold">Refreshed 10m ago</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

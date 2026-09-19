import React, { useState } from 'react';
import {
  BarChart3,
  TrendingUp,
  Clock,
  Users,
  Target,
  Zap,
  ArrowUpRight,
  ArrowDownRight,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  DollarSign,
  Calendar,
  Layers,
  ChevronDown
} from 'lucide-react';
import { motion } from 'motion/react';

export const AnalyticsPanel: React.FC = () => {
  const [timeRange, setTimeRange] = useState<'30d' | '90d' | '12m'>('30d');
  const [selectedRoleFilter, setSelectedRoleFilter] = useState<string>('all');
  const [expandedMetric, setExpandedMetric] = useState<string | null>('efficiency');

  // Interactive funnel pipeline metrics
  const funnelStages = [
    { name: 'Candidates Sourced', count: '14,820', rate: '100%', agentWork: 'Autonomous Multi-channel Sourcing (1B+ profiles)', color: 'from-emerald-500 to-teal-500' },
    { name: 'ICP Qualified', count: '3,410', rate: '23.0%', agentWork: 'Semantic ICP Match & Credential Cross-verification', color: 'from-emerald-400 to-cyan-500' },
    { name: 'AI Voice Screened', count: '1,280', rate: '8.6%', agentWork: 'Conversational 24/7 Voice & Competency Assessment', color: 'from-cyan-400 to-blue-500' },
    { name: 'Interviews Booked', count: '312', rate: '2.1%', agentWork: 'Zero-conflict Panel Schedule & Executive Briefing', color: 'from-blue-400 to-indigo-500' },
    { name: 'Offers Accepted', count: '64', rate: '0.43%', agentWork: '14-Day Time-to-Offer Delivery (Industry Avg: 44 days)', color: 'from-emerald-400 to-[#00DC82]' }
  ];

  // Benchmark stats
  const benchmarks = [
    {
      id: 'efficiency',
      title: 'Time-to-Hire Velocity',
      value: '14.2 Days',
      comparison: '75% Faster',
      baseline: 'Industry avg: 54 days',
      trend: 'positive',
      icon: Clock,
      detail: 'From job requisition dispatch to signed offer letter. Autonomous agents execute candidate outreach and initial screens in minutes, not weeks.'
    },
    {
      id: 'cost',
      title: 'Recruiting Agency Spend Saved',
      value: '$284,000',
      comparison: '86% Reduction',
      baseline: 'Based on 25% avg headhunter fees',
      trend: 'positive',
      icon: DollarSign,
      detail: 'Enterprises replace external contingent recruiters with always-on autonomous sourcing that indexes both fresh web candidates and dormant CRM profiles.'
    },
    {
      id: 'conversion',
      title: 'Candidate Response Rate',
      value: '42.8%',
      comparison: '3.6x Benchmark',
      baseline: 'Industry cold outreach: 12%',
      trend: 'positive',
      icon: Target,
      detail: 'Hyper-personalized outreach citing candidate publications, open-source repositories, and verified achievements yields industry-leading candidate engagement.'
    },
    {
      id: 'capacity',
      title: 'Recruiter Capacity Multiplier',
      value: '5.8x',
      comparison: '42 Reqs / Recruiter',
      baseline: 'Traditional limit: 7 reqs',
      trend: 'positive',
      icon: Zap,
      detail: 'Recruiters transition from administrative coordinators into strategic talent advisors, directing autonomous agents that handle repetitive tasks.'
    }
  ];

  // Channel breakdown
  const channelBreakdown = [
    { channel: 'Autonomous Web Sourcing (45+ platforms)', share: 58, hires: 37, conversion: '4.8%' },
    { channel: 'Internal ATS & Talent CRM Re-engagement', share: 24, hires: 15, conversion: '7.2%' },
    { channel: 'Inbound Branded Career Page with AI Match', share: 12, hires: 8, conversion: '3.9%' },
    { channel: 'Employee Referrals & Direct Networks', share: 6, hires: 4, conversion: '11.5%' }
  ];

  return (
    <section id="analytics-panel" className="py-20 lg:py-28 relative bg-[#090D16] border-b border-white/[0.06] overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-r from-emerald-500/10 via-cyan-500/10 to-indigo-500/5 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-emerald-500/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-4 shadow-[0_0_20px_rgba(16,185,129,0.15)]">
            <BarChart3 className="w-3.5 h-3.5" />
            Executive Talent Telemetry
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Measurable impact. <br />
            <span className="bg-gradient-to-r from-[#00DC82] via-emerald-400 to-cyan-300 bg-clip-text text-transparent">
              Verified by enterprise hiring data.
            </span>
          </h2>
          <p className="mt-5 text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
            Real-time pipeline analytics demonstrating speed, cost efficiency, and candidate conversion across 1B+ talent profiles.
          </p>
        </motion.div>

        {/* Top Control Bar: Timeframe & Role Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-8 p-4 rounded-2xl bg-[#0D111D] border border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs backdrop-blur-md"
        >
          <div className="flex items-center gap-3">
            <span className="text-slate-400 font-medium">Filter Requisition Scope:</span>
            <div className="flex items-center gap-1.5">
              {[
                { id: 'all', label: 'All Global Roles' },
                { id: 'eng', label: 'Platform & Engineering' },
                { id: 'sales', label: 'Enterprise GTM & Sales' },
                { id: 'clinical', label: 'Healthcare & Clinical' }
              ].map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setSelectedRoleFilter(filter.id)}
                  className={`px-3 py-1.5 rounded-lg font-medium transition-all cursor-pointer ${
                    selectedRoleFilter === filter.id
                      ? 'bg-emerald-500 text-slate-950 font-bold shadow-[0_0_12px_rgba(16,185,129,0.3)]'
                      : 'bg-white/5 text-slate-300 hover:bg-white/10'
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-slate-400">Reporting Horizon:</span>
            <div className="flex items-center gap-1 bg-[#151B2E] p-1 rounded-lg border border-white/10">
              {(['30d', '90d', '12m'] as const).map((range) => (
                <button
                  key={range}
                  onClick={() => setTimeRange(range)}
                  className={`px-2.5 py-1 rounded font-mono font-semibold transition-colors cursor-pointer ${
                    timeRange === range
                      ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {range.toUpperCase()}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* 4 Core Benchmark Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {benchmarks.map((metric, idx) => {
            const Icon = metric.icon;
            const isExpanded = expandedMetric === metric.id;

            return (
              <motion.div
                key={metric.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                onClick={() => setExpandedMetric(isExpanded ? null : metric.id)}
                className={`p-5 rounded-2xl bg-[#0D111D] border transition-all duration-300 cursor-pointer space-y-3 relative group overflow-hidden ${
                  isExpanded
                    ? 'border-emerald-500/60 shadow-[0_10px_35px_rgba(16,185,129,0.15)] bg-gradient-to-b from-[#131B2E] to-[#0D111D]'
                    : 'border-white/10 hover:border-white/20 hover:bg-[#111728]'
                }`}
              >
                <div className="flex items-start justify-between">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/25 flex items-center justify-center text-emerald-400">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-[11px] font-bold">
                    <ArrowUpRight className="w-3.5 h-3.5" />
                    {metric.comparison}
                  </span>
                </div>

                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                    {metric.value}
                  </div>
                  <div className="text-xs font-semibold text-slate-300 mt-1">{metric.title}</div>
                  <div className="text-[11px] text-slate-500 font-mono mt-0.5">{metric.baseline}</div>
                </div>

                {isExpanded && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="pt-3 border-t border-white/10 text-xs text-slate-300 leading-relaxed"
                  >
                    {metric.detail}
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Detailed Grid: Funnel Visualization + Sourcing Channel Breakdown */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left: Interactive Conversion Funnel (7 Columns) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 p-6 rounded-2xl bg-[#0D111D] border border-white/10 shadow-xl space-y-6"
          >
            <div className="flex items-center justify-between pb-3 border-b border-white/5">
              <div>
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <Layers className="w-4 h-4 text-emerald-400" />
                  Autonomous Pipeline Conversion Funnel
                </h3>
                <p className="text-xs text-slate-400 mt-0.5">
                  End-to-end recruitment lifecycle from automated discovery to offer signed
                </p>
              </div>
              <span className="text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                Live Enterprise Data
              </span>
            </div>

            <div className="space-y-4">
              {funnelStages.map((stage, idx) => {
                const widthPercent = [100, 72, 48, 28, 16][idx];

                return (
                  <div key={stage.name} className="space-y-1.5 group">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-semibold text-white group-hover:text-emerald-400 transition-colors">
                        {stage.name}
                      </span>
                      <div className="flex items-center gap-3">
                        <span className="font-mono font-bold text-emerald-300">{stage.count}</span>
                        <span className="font-mono text-slate-400 text-[11px]">({stage.rate})</span>
                      </div>
                    </div>

                    {/* Progress Bar Container */}
                    <div className="h-3 w-full bg-[#151B2E] rounded-full overflow-hidden p-0.5 border border-white/5">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${widthPercent}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: idx * 0.15, ease: 'easeOut' }}
                        className={`h-full rounded-full bg-gradient-to-r ${stage.color} shadow-[0_0_12px_rgba(16,185,129,0.3)]`}
                      />
                    </div>

                    <div className="text-[11px] text-slate-400 flex items-center gap-1.5 pt-0.5">
                      <Sparkles className="w-3 h-3 text-emerald-400 shrink-0" />
                      <span>{stage.agentWork}</span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Bottom Summary Callout */}
            <div className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/25 flex items-center justify-between text-xs text-slate-200">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Zero recruiter intervention required between Sourcing and AI Voice Screening.</span>
              </div>
              <span className="font-bold text-emerald-300 shrink-0">100% Automated</span>
            </div>
          </motion.div>

          {/* Right: Sourcing Channel Performance (5 Columns) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 p-6 rounded-2xl bg-[#0D111D] border border-white/10 shadow-xl space-y-6 flex flex-col justify-between"
          >
            <div>
              <div className="pb-3 border-b border-white/5">
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-cyan-400" />
                  Talent Sourcing Distribution
                </h3>
                <p className="text-xs text-slate-400 mt-0.5">
                  High-yield candidate sources indexed by the hireEZ Agent
                </p>
              </div>

              <div className="mt-4 space-y-3.5">
                {channelBreakdown.map((item, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-[#151B2E] border border-white/5 space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-semibold text-white">{item.channel}</span>
                      <span className="font-mono text-emerald-400 font-bold">{item.share}%</span>
                    </div>

                    <div className="w-full bg-black/40 h-2 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.share}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: idx * 0.1 }}
                        className="h-full bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full"
                      />
                    </div>

                    <div className="flex items-center justify-between text-[11px] text-slate-400">
                      <span>Verified Hires: <strong className="text-slate-200">{item.hires}</strong></span>
                      <span>Offer Acceptance: <strong className="text-emerald-300">{item.conversion}</strong></span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                SOC-2 Type II & EEOC Certified
              </span>
              <a
                href="#system-of-action"
                className="text-emerald-400 hover:text-emerald-300 font-semibold inline-flex items-center gap-1"
              >
                Explore System →
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

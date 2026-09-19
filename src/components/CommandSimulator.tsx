import React, { useState, useEffect, useRef } from 'react';
import {
  Sparkles,
  Bot,
  Send,
  RefreshCw,
  CheckCircle2,
  Check,
  Zap,
  Calendar,
  Phone,
  Database,
  Search,
  SlidersHorizontal,
  ChevronRight,
  Shield,
  Layers,
  FileText,
  UserCheck,
  TrendingUp,
  Clock,
  Sparkle,
  Sliders,
  Keyboard,
  Mic,
  MessageSquare,
  Award
} from 'lucide-react';
import {
  PREDEFINED_SCENARIOS,
  findMatchingScenario,
  ScenarioDefinition,
  CandidateDemo,
  AGENT_PERSONALITIES,
  AgentPersonalityMode
} from '../data/agentScenarios';

interface CommandSimulatorProps {
  onOpenContact: () => void;
  onOpenRegister: () => void;
  onOpenShortcuts?: () => void;
}

export const CommandSimulator: React.FC<CommandSimulatorProps> = ({
  onOpenContact,
  onOpenRegister,
  onOpenShortcuts
}) => {
  const [activeChipIndex, setActiveChipIndex] = useState(0);
  const [inputVal, setInputVal] = useState('');
  const [activeScenario, setActiveScenario] = useState<ScenarioDefinition>(PREDEFINED_SCENARIOS[0]);
  const [simulating, setSimulating] = useState(false);
  const [simulatedLogs, setSimulatedLogs] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState<'stream' | 'ats' | 'logs' | 'personality'>('stream');
  const [approvedCandidates, setApprovedCandidates] = useState<string[]>(['c-vr']);
  const [personalityMode, setPersonalityMode] = useState<AgentPersonalityMode>('precision');
  const [personalityToast, setPersonalityToast] = useState<string | null>(null);

  const inputRef = useRef<HTMLInputElement | null>(null);

  const currentPersonality = AGENT_PERSONALITIES[personalityMode];

  // Global Keyboard shortcuts listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't intercept if user is typing inside an input/textarea unless it's Escape or ⌘K
      const isInputActive =
        document.activeElement?.tagName === 'INPUT' ||
        document.activeElement?.tagName === 'TEXTAREA' ||
        document.activeElement?.tagName === 'SELECT';

      // ⌘K or Ctrl+K: Focus Command input
      if ((e.metaKey || e.ctrlKey) && (e.key === 'k' || e.key === 'K')) {
        e.preventDefault();
        inputRef.current?.focus();
        inputRef.current?.select();
        return;
      }

      // Escape: blur input or clear
      if (e.key === 'Escape') {
        if (inputRef.current && inputRef.current === document.activeElement) {
          inputRef.current.blur();
        }
        return;
      }

      // If user is inside an input, don't trigger single key shortcuts
      if (isInputActive) return;

      // Single Key '1' - '4': Switch Scenario
      if (['1', '2', '3', '4'].includes(e.key)) {
        e.preventDefault();
        const index = parseInt(e.key, 10) - 1;
        if (PREDEFINED_SCENARIOS[index]) {
          const sc = PREDEFINED_SCENARIOS[index];
          setActiveChipIndex(index);
          setInputVal(sc.prompt);
          runSimulation(sc.prompt);
        }
        return;
      }

      // 'P' or 'p': Cycle Agent Personality
      if (e.key === 'p' || e.key === 'P') {
        e.preventDefault();
        const modes: AgentPersonalityMode[] = ['precision', 'executive', 'energetic'];
        const nextIdx = (modes.indexOf(personalityMode) + 1) % modes.length;
        const nextMode = modes[nextIdx];
        setPersonalityMode(nextMode);
        setPersonalityToast(`Agent Persona changed to: ${AGENT_PERSONALITIES[nextMode].name}`);
        setTimeout(() => setPersonalityToast(null), 2500);
        return;
      }

      // 'T' or 't': Cycle Tabs
      if (e.key === 't' || e.key === 'T') {
        e.preventDefault();
        const tabs: Array<'stream' | 'ats' | 'logs' | 'personality'> = ['stream', 'ats', 'logs', 'personality'];
        const nextTabIdx = (tabs.indexOf(activeTab) + 1) % tabs.length;
        setActiveTab(tabs[nextTabIdx]);
        return;
      }

      // '?' or '/': Open shortcuts help modal
      if (e.key === '?' || (e.shiftKey && e.key === '/')) {
        e.preventDefault();
        onOpenShortcuts?.();
        return;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [personalityMode, activeTab, onOpenShortcuts]);

  // Auto rotate the chip highlight every 4.5 seconds if user is idle
  useEffect(() => {
    const timer = setInterval(() => {
      if (!inputVal && !simulating) {
        setActiveChipIndex((prev) => (prev + 1) % PREDEFINED_SCENARIOS.length);
      }
    }, 4500);
    return () => clearInterval(timer);
  }, [inputVal, simulating]);

  // Execute simulation flow with personality awareness
  const runSimulation = (customPromptText?: string) => {
    const targetText = customPromptText || inputVal || PREDEFINED_SCENARIOS[activeChipIndex].prompt;
    const scenario = findMatchingScenario(targetText);
    
    setSimulating(true);
    setActiveScenario(scenario);

    // Personality flavored log prefix
    let personaPrefix = `[00:01] 🎯 [${currentPersonality.name}] Agent dispatched: "${targetText}"`;
    if (personalityMode === 'executive') {
      personaPrefix = `[00:01] 👔 [Executive Advisor] Discrete talent intelligence activated for: "${targetText}"`;
    } else if (personalityMode === 'energetic') {
      personaPrefix = `[00:01] ⚡ [Hyper-Growth Sourcer] Sprint fired across 45+ platforms for: "${targetText}"`;
    }

    setSimulatedLogs([
      personaPrefix,
      `[00:02] Querying candidate graph across 1B+ records and active ATS connections...`
    ]);

    const stepTimer1 = setTimeout(() => {
      setSimulatedLogs((prev) => [
        ...prev,
        `[00:04] Identified ${scenario.candidatesFound.toLocaleString()} candidates matching ICP parameters`,
        `[00:05] Tone Mode: [${currentPersonality.tone}] applied to candidate evaluation rubric`
      ]);
    }, 600);

    const stepTimer2 = setTimeout(() => {
      setSimulatedLogs((prev) => [
        ...prev,
        `[00:07] Dispatched conversational voice screen & automated outreach sequences`,
        `[00:09] 3 shortlisted candidates approved for executive review (${scenario.candidates[0].name} scored ${scenario.candidates[0].matchScore}% match)`
      ]);
      setSimulating(false);
    }, 1400);

    return () => {
      clearTimeout(stepTimer1);
      clearTimeout(stepTimer2);
    };
  };

  const handleChipClick = (scenario: ScenarioDefinition, idx: number) => {
    setActiveChipIndex(idx);
    setInputVal(scenario.prompt);
    runSimulation(scenario.prompt);
  };

  const toggleCandidateApprove = (candidateId: string) => {
    setApprovedCandidates((prev) =>
      prev.includes(candidateId) ? prev.filter((id) => id !== candidateId) : [...prev, candidateId]
    );
  };

  return (
    <div className="relative rounded-2xl bg-[#0D111D]/90 border border-white/10 shadow-[0_25px_80px_rgba(0,0,0,0.8)] overflow-hidden backdrop-blur-md">
      {/* Dynamic Persona Toast Notification */}
      {personalityToast && (
        <div className="absolute top-12 left-1/2 -translate-x-1/2 z-30 px-4 py-2 rounded-full bg-emerald-500/90 text-slate-950 font-bold text-xs shadow-xl flex items-center gap-2 animate-bounce">
          <Sparkles className="w-4 h-4" />
          <span>{personalityToast}</span>
        </div>
      )}

      {/* Top Banner indicating Interactive Demo Mode & Personality Switcher */}
      <div className="bg-gradient-to-r from-emerald-500/15 via-[#10B981]/10 to-cyan-500/10 border-b border-emerald-500/20 px-4 sm:px-6 py-2.5 flex flex-wrap items-center justify-between gap-2 text-xs">
        <div className="flex items-center gap-2 text-emerald-300 font-semibold">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
          </span>
          <span>INTERACTIVE DEMO MODE</span>
          <span className="hidden sm:inline text-slate-400 font-normal">
            — Type any role or press <kbd className="px-1.5 py-0.5 rounded bg-black/40 text-emerald-300 font-mono text-[10px]">⌘K</kbd>
          </span>
        </div>

        {/* Quick Personality & Shortcuts Bar */}
        <div className="flex items-center gap-2">
          {/* Agent Personality Selector Pill */}
          <div className="flex items-center gap-1 bg-black/40 border border-white/10 rounded-full px-2 py-0.5">
            <span className="text-[10px] text-slate-400 font-mono uppercase hidden xs:inline">Persona:</span>
            <button
              onClick={() => {
                const modes: AgentPersonalityMode[] = ['precision', 'executive', 'energetic'];
                const next = modes[(modes.indexOf(personalityMode) + 1) % modes.length];
                setPersonalityMode(next);
              }}
              title="Click or press 'P' to cycle agent persona"
              className={`text-[11px] font-semibold px-2 py-0.5 rounded-full flex items-center gap-1 transition-all ${currentPersonality.accentBadge}`}
            >
              <span>{currentPersonality.avatarIcon}</span>
              <span>{currentPersonality.name}</span>
            </button>
          </div>

          {/* Keyboard Shortcuts Trigger Button */}
          <button
            onClick={onOpenShortcuts}
            title="View Keyboard Shortcuts (or press ?)"
            className="hidden sm:flex items-center gap-1 px-2.5 py-1 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white transition-colors cursor-pointer text-xs"
          >
            <Keyboard className="w-3.5 h-3.5 text-emerald-400" />
            <span className="font-mono text-[10px]">Shortcuts [?]</span>
          </button>
        </div>
      </div>

      {/* Command Input Area */}
      <div className="p-4 sm:p-6 bg-[#131827]/90 border-b border-white/10">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            runSimulation();
          }}
          className="flex flex-col md:flex-row md:items-center gap-3"
        >
          <div className="flex items-center gap-3 flex-1 bg-[#090D16] border border-white/15 rounded-xl px-4 py-3 focus-within:border-emerald-500/60 focus-within:ring-2 focus-within:ring-emerald-500/20 transition-all">
            <Bot className="w-5 h-5 text-emerald-400 shrink-0" />
            <input
              ref={inputRef}
              id="interactive-command-input"
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              placeholder={PREDEFINED_SCENARIOS[activeChipIndex].prompt}
              className="w-full bg-transparent text-sm sm:text-base text-white placeholder:text-slate-500 focus:outline-none"
            />
            {inputVal && (
              <button
                type="button"
                onClick={() => setInputVal('')}
                className="text-xs text-slate-400 hover:text-white px-1.5 py-0.5 rounded bg-white/5"
              >
                Clear
              </button>
            )}
            <div className="hidden sm:flex items-center gap-1.5 text-xs text-slate-500 shrink-0">
              <span className="px-1.5 py-0.5 rounded bg-white/5 border border-white/10 font-mono">Press ↵</span>
            </div>
          </div>

          <div className="flex items-center gap-2 justify-end">
            <button
              id="simulate-agent-btn"
              type="submit"
              disabled={simulating}
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-[#00DC82] hover:from-emerald-400 hover:to-[#00DC82] active:scale-[0.98] text-[#090D16] font-bold text-sm flex items-center justify-center gap-2 transition-all shadow-[0_0_25px_rgba(16,185,129,0.35)] disabled:opacity-60 cursor-pointer"
            >
              {simulating ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin text-[#090D16]" />
                  <span>Agent Executing...</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4 text-[#090D16]" />
                  <span>Run Agent Demo</span>
                </>
              )}
            </button>
          </div>
        </form>

        {/* Rotating Interactive Prompt Chips with Shortcut Keys Indicator */}
        <div className="mt-4 flex items-center gap-2 flex-wrap">
          <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider mr-1 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
            <span>Select scenario:</span>
          </span>
          {PREDEFINED_SCENARIOS.map((sc, idx) => {
            const isSelected = activeScenario.id === sc.id;
            const isAutoHighlighted = activeChipIndex === idx && !inputVal;

            return (
              <button
                key={sc.id}
                id={`scenario-chip-${sc.id}`}
                onClick={() => handleChipClick(sc, idx)}
                title={`Press shortcut key '${idx + 1}' to switch`}
                className={`text-xs px-3.5 py-1.5 rounded-lg border transition-all duration-200 cursor-pointer flex items-center gap-1.5 ${
                  isSelected
                    ? 'bg-emerald-500/20 border-emerald-500/60 text-emerald-200 font-semibold shadow-[0_0_15px_rgba(16,185,129,0.25)]'
                    : isAutoHighlighted
                    ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400'
                    : 'bg-white/[0.03] border-white/10 text-slate-400 hover:text-slate-200 hover:bg-white/[0.07]'
                }`}
              >
                <span className="font-mono text-[10px] text-slate-500 font-bold hidden sm:inline">
                  [{idx + 1}]
                </span>
                <span>"{sc.chipLabel}"</span>
                <span className="text-[10px] uppercase font-mono px-1.5 py-0.2 rounded bg-black/40 text-slate-400">
                  {sc.category}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Scenario Overview Bar & Live Status */}
      <div className="px-4 sm:px-6 py-3 bg-[#090D16]/95 border-b border-white/5 flex flex-wrap items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-3">
          <span className="text-slate-400">Current Role:</span>
          <span className="font-semibold text-white bg-white/5 px-2.5 py-1 rounded-md border border-white/10">
            {activeScenario.roleTitle}
          </span>
          <span className="hidden md:inline-flex items-center gap-1 text-emerald-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
            {activeScenario.candidatesFound.toLocaleString()} Candidates Analyzed
          </span>
        </div>

        {/* Tab Controls */}
        <div className="flex items-center gap-1 bg-[#151B2E] p-1 rounded-lg border border-white/10 text-xs overflow-x-auto">
          <button
            onClick={() => setActiveTab('stream')}
            className={`px-3 py-1 rounded-md font-medium transition-colors whitespace-nowrap ${
              activeTab === 'stream'
                ? 'bg-emerald-500 text-slate-950 font-bold shadow'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Live Pipeline Stream
          </button>
          <button
            onClick={() => setActiveTab('ats')}
            className={`px-3 py-1 rounded-md font-medium transition-colors whitespace-nowrap ${
              activeTab === 'ats'
                ? 'bg-emerald-500 text-slate-950 font-bold shadow'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            ATS Bi-directional Sync
          </button>
          <button
            onClick={() => setActiveTab('logs')}
            className={`px-3 py-1 rounded-md font-medium transition-colors whitespace-nowrap ${
              activeTab === 'logs'
                ? 'bg-emerald-500 text-slate-950 font-bold shadow'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Agent Logs ({activeScenario.actions.length})
          </button>
          <button
            onClick={() => setActiveTab('personality')}
            className={`px-3 py-1 rounded-md font-medium transition-colors whitespace-nowrap flex items-center gap-1 ${
              activeTab === 'personality'
                ? 'bg-emerald-500 text-slate-950 font-bold shadow'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <span>Agent Persona</span>
            <span className="text-[10px] font-mono">[P]</span>
          </button>
        </div>
      </div>

      {/* Main Visualizer Body */}
      <div className="p-4 sm:p-6 bg-[#0B0F1A] min-h-[360px]">
        {/* TAB 1: Live Candidate Stream */}
        {activeTab === 'stream' && (
          <div className="space-y-4">
            {/* Scenario Summary Banner with Persona Header */}
            <div className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/25 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
              <div className="flex items-start gap-2.5">
                <span className="text-base mt-0.5">{currentPersonality.avatarIcon}</span>
                <div className="space-y-0.5">
                  <div className="flex items-center gap-2">
                    <strong className="text-emerald-400 font-semibold">{currentPersonality.name} Agent:</strong>
                    <span className="text-[10px] text-slate-400 font-mono">({currentPersonality.tone})</span>
                  </div>
                  <p className="text-slate-200 text-xs">
                    {activeScenario.agentSummary}
                  </p>
                </div>
              </div>
              <button
                onClick={onOpenContact}
                className="text-emerald-300 hover:text-white font-semibold underline underline-offset-4 shrink-0 cursor-pointer"
              >
                Request Enterprise Access →
              </button>
            </div>

            {/* Candidate Cards Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              {activeScenario.candidates.map((cand) => {
                const isApproved = approvedCandidates.includes(cand.id);

                return (
                  <div
                    key={cand.id}
                    className="p-4 rounded-xl bg-[#151B2E] border border-white/[0.08] hover:border-emerald-500/40 transition-all space-y-3 group flex flex-col justify-between"
                  >
                    <div className="space-y-3">
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-300 font-bold text-sm">
                            {cand.avatar}
                          </div>
                          <div>
                            <h4 className="text-sm font-bold text-white group-hover:text-emerald-400 transition-colors">
                              {cand.name}
                            </h4>
                            <p className="text-xs text-slate-400">{cand.role} • {cand.location}</p>
                          </div>
                        </div>
                        <span className="px-2 py-0.5 rounded-full text-[11px] font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 shrink-0">
                          {cand.matchScore}% Match
                        </span>
                      </div>

                      {/* Match Rationale */}
                      <div className="text-xs text-slate-300 bg-black/30 p-2.5 rounded-lg border border-white/5 space-y-1">
                        <div className="text-slate-400 text-[10px] font-semibold uppercase tracking-wider flex items-center justify-between">
                          <span>Agent Rationale</span>
                          <span className="text-emerald-400 font-mono">{cand.badge}</span>
                        </div>
                        <p className="text-slate-300 leading-relaxed text-[11px]">
                          {cand.matchRationale}
                        </p>
                      </div>

                      {/* Skill Tags */}
                      <div className="flex flex-wrap gap-1">
                        {cand.skills.map((skill) => (
                          <span
                            key={skill}
                            className="text-[10px] px-2 py-0.5 rounded bg-white/5 text-slate-400 border border-white/5"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>

                      {/* Screening Results if available */}
                      {cand.screeningResult && (
                        <div className="p-2 rounded bg-emerald-500/5 border border-emerald-500/15 text-[11px] text-slate-300 space-y-1">
                          <div className="flex items-center justify-between text-emerald-400 font-semibold">
                            <span className="flex items-center gap-1">
                              <Phone className="w-3 h-3" /> Voice Screen Complete
                            </span>
                            <span>Score: {cand.screeningResult.score}</span>
                          </div>
                          <p className="text-[10px] text-slate-400 line-clamp-1">
                            Key highlight: {cand.screeningResult.highlights[0]}
                          </p>
                        </div>
                      )}
                    </div>

                    {/* Bottom Action Row */}
                    <div className="pt-2 border-t border-white/5 flex items-center justify-between">
                      <span className="text-[11px] text-slate-400 flex items-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                        <span>ATS Profile Synced</span>
                      </span>
                      <button
                        onClick={() => toggleCandidateApprove(cand.id)}
                        className={`text-xs px-3 py-1.5 rounded-lg font-medium transition-all cursor-pointer flex items-center gap-1.5 ${
                          isApproved
                            ? 'bg-emerald-500 text-slate-950 font-bold'
                            : 'bg-white/5 hover:bg-white/10 text-slate-200 border border-white/10'
                        }`}
                      >
                        {isApproved ? (
                          <>
                            <Check className="w-3.5 h-3.5" />
                            <span>Approved for Onsite</span>
                          </>
                        ) : (
                          <span>Approve Candidate</span>
                        )}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* TAB 2: ATS Integration Layer */}
        {activeTab === 'ats' && (
          <div className="p-5 rounded-xl bg-[#151B2E] border border-white/10 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-white/5 text-xs">
              <div>
                <h4 className="text-sm font-bold text-white flex items-center gap-2">
                  <Database className="w-4 h-4 text-emerald-400" />
                  {activeScenario.atsStatus.system}
                </h4>
                <p className="text-slate-400 text-xs mt-0.5">{activeScenario.atsStatus.details}</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-1 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-semibold flex items-center gap-1">
                  <Check className="w-3.5 h-3.5" /> Latency: {activeScenario.atsStatus.syncLatency}
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="p-3.5 rounded-lg bg-black/40 border border-white/5 space-y-1.5">
                <span className="text-xs font-bold text-white">Records Enriched</span>
                <div className="text-2xl font-extrabold text-emerald-400 font-mono">
                  {activeScenario.atsStatus.recordsUpdated.toLocaleString()}
                </div>
                <p className="text-[11px] text-slate-400">Zero duplicates created. Resumes refreshed with modern titles & emails.</p>
              </div>

              <div className="p-3.5 rounded-lg bg-black/40 border border-white/5 space-y-1.5">
                <span className="text-xs font-bold text-white">Stage Progression</span>
                <div className="text-2xl font-extrabold text-cyan-400 font-mono">
                  100% Automated
                </div>
                <p className="text-[11px] text-slate-400">Webhook triggers auto-advance candidates upon interview completion.</p>
              </div>

              <div className="p-3.5 rounded-lg bg-black/40 border border-white/5 space-y-1.5">
                <span className="text-xs font-bold text-white">Compliance Standard</span>
                <div className="text-2xl font-extrabold text-indigo-400 font-mono">
                  SOC 2 Type II
                </div>
                <p className="text-[11px] text-slate-400">Fully GDPR, CCPA, and EEOC compliant anonymization enabled.</p>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: Agent Action & Execution Logs */}
        {activeTab === 'logs' && (
          <div className="p-5 rounded-xl bg-[#151B2E] border border-white/10 space-y-4">
            <div className="flex items-center justify-between text-xs text-slate-400 border-b border-white/5 pb-2">
              <span className="font-semibold text-white">Autonomous Agent Execution Pipeline</span>
              <span className="text-emerald-400 font-mono text-[11px]">ALL SYSTEMS NOMINAL</span>
            </div>

            <div className="space-y-3">
              {activeScenario.actions.map((act) => (
                <div
                  key={act.id}
                  className="p-3 rounded-lg bg-black/30 border border-white/5 flex items-start justify-between gap-3 text-xs"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-md bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <div className="font-bold text-white flex items-center gap-2">
                        <span>{act.title}</span>
                        <span className="text-[10px] text-slate-500 font-mono">[{act.timestamp}]</span>
                      </div>
                      <p className="text-slate-400 text-[11px] mt-0.5">{act.detail}</p>
                    </div>
                  </div>
                  {act.metric && (
                    <span className="px-2 py-0.5 rounded bg-white/5 text-emerald-400 border border-white/10 text-[10px] font-mono shrink-0">
                      {act.metric}
                    </span>
                  )}
                </div>
              ))}
            </div>

            {/* Dynamic Console Stream */}
            <div className="p-3 rounded-lg bg-black/60 border border-emerald-500/20 font-mono text-[11px] text-slate-300 space-y-1">
              <div className="text-slate-500 uppercase tracking-widest text-[10px]">Console Stream Log:</div>
              {simulatedLogs.map((log, i) => (
                <div key={i} className="text-emerald-300/90">{log}</div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 4: Agent Personality Configuration Panel */}
        {activeTab === 'personality' && (
          <div className="p-5 rounded-xl bg-[#151B2E] border border-white/10 space-y-5">
            <div className="flex items-center justify-between pb-3 border-b border-white/5">
              <div>
                <h4 className="text-sm font-bold text-white flex items-center gap-2">
                  <Bot className="w-4 h-4 text-emerald-400" />
                  Agent Personality & Communication Archetypes
                </h4>
                <p className="text-xs text-slate-400 mt-0.5">
                  Customize the reasoning framework, voice modulation, and candidate screening tone.
                </p>
              </div>
              <span className="text-xs text-slate-400 font-mono">Press 'P' to cycle</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {(Object.keys(AGENT_PERSONALITIES) as AgentPersonalityMode[]).map((mode) => {
                const persona = AGENT_PERSONALITIES[mode];
                const isActive = personalityMode === mode;

                return (
                  <button
                    key={mode}
                    onClick={() => {
                      setPersonalityMode(mode);
                      setPersonalityToast(`Agent Persona changed to: ${persona.name}`);
                      setTimeout(() => setPersonalityToast(null), 2500);
                    }}
                    className={`p-4 rounded-xl border text-left transition-all duration-200 cursor-pointer space-y-2.5 relative ${
                      isActive
                        ? 'bg-emerald-500/15 border-emerald-500/60 shadow-[0_0_20px_rgba(16,185,129,0.2)]'
                        : 'bg-black/30 border-white/10 hover:border-white/20 hover:bg-white/[0.02]'
                    }`}
                  >
                    {isActive && (
                      <span className="absolute top-3 right-3 px-2 py-0.5 rounded-full bg-emerald-500 text-slate-950 font-extrabold text-[10px] uppercase tracking-wider">
                        Active
                      </span>
                    )}
                    <div className="text-2xl">{persona.avatarIcon}</div>
                    <div>
                      <div className="text-sm font-bold text-white">{persona.name}</div>
                      <div className="text-[11px] text-emerald-400 font-medium">{persona.tagline}</div>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {persona.description}
                    </p>
                    <div className="pt-2 border-t border-white/5 text-[11px] text-slate-400">
                      <span className="font-semibold text-slate-300">Tone:</span> {persona.tone}
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="p-3.5 rounded-xl bg-black/40 border border-white/5 space-y-1.5 text-xs text-slate-300">
              <div className="font-semibold text-white flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                Live Conversational Sample ({currentPersonality.name}):
              </div>
              <p className="italic text-emerald-300/90 text-xs pl-2 border-l-2 border-emerald-500/40">
                "{currentPersonality.greeting}"
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

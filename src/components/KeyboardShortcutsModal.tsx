import React from 'react';
import { X, Command, Sparkles, CornerDownLeft, ArrowRight, Bot, Sliders } from 'lucide-react';

interface KeyboardShortcutsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const KeyboardShortcutsModal: React.FC<KeyboardShortcutsModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const shortcuts = [
    { keys: ['⌘', 'K'], label: 'Focus EZ Agent Command Bar', desc: 'Jump directly to the prompt bar from anywhere' },
    { keys: ['↵'], label: 'Execute Agent Dispatch', desc: 'Trigger autonomous recruitment pipeline simulation' },
    { keys: ['1', '–', '4'], label: 'Switch Agent Scenarios', desc: 'Instantly toggle Sales, Platform, Healthcare, or Exec Panel' },
    { keys: ['P'], label: 'Toggle Agent Personality', desc: 'Switch between Precision, Adaptive, and Warm Executive voices' },
    { keys: ['T'], label: 'Switch Simulator View Tabs', desc: 'Cycle through Pipeline Stream, ATS Layer, and Agent Logs' },
    { keys: ['?'], label: 'Toggle Shortcuts Help', desc: 'Open or close this keyboard navigation reference modal' },
    { keys: ['Esc'], label: 'Close Active Overlays', desc: 'Dismiss modals, command prompts, or mobile drawers' },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-lg rounded-3xl bg-[#0D111D] border border-white/15 p-6 sm:p-8 shadow-2xl overflow-hidden">
        {/* Ambient background glow */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 blur-[100px] pointer-events-none rounded-full" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="space-y-5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
              <Command className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">Keyboard Navigation</h3>
              <p className="text-xs text-slate-400">Accelerate your EZ Agent hiring command workflow</p>
            </div>
          </div>

          <div className="divide-y divide-white/5 border border-white/10 rounded-2xl bg-black/30 overflow-hidden">
            {shortcuts.map((sc, idx) => (
              <div key={idx} className="flex items-center justify-between p-3.5 hover:bg-white/[0.02] transition-colors">
                <div className="space-y-0.5 pr-3">
                  <div className="text-sm font-semibold text-white flex items-center gap-2">
                    {sc.label}
                  </div>
                  <div className="text-xs text-slate-400">{sc.desc}</div>
                </div>
                <div className="flex items-center gap-1 shrink-0">
                  {sc.keys.map((k, kIdx) => (
                    <kbd
                      key={kIdx}
                      className="px-2.5 py-1 text-xs font-mono font-bold text-emerald-300 bg-[#151B2E] border border-white/15 rounded-lg shadow-sm"
                    >
                      {k}
                    </kbd>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-between text-xs text-slate-400 pt-1">
            <span className="flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
              Pro tip: Press <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-white font-mono text-[10px]">?</kbd> anytime
            </span>
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold transition-colors"
            >
              Got it
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

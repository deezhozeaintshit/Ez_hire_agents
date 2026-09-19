import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { LogoMarquee } from './components/LogoMarquee';
import { SystemOfAction } from './components/SystemOfAction';
import { WorkflowSteps } from './components/WorkflowSteps';
import { AnalyticsPanel } from './components/AnalyticsPanel';
import { TestimonialsSection } from './components/TestimonialsSection';
import { CtaFooter } from './components/CtaFooter';
import { ContactModal } from './components/ContactModal';
import { RegisterModal } from './components/RegisterModal';
import { AmbientBackground } from './components/AmbientBackground';
import { KeyboardShortcutsModal } from './components/KeyboardShortcutsModal';

export default function App() {
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [registerModalOpen, setRegisterModalOpen] = useState(false);
  const [shortcutsModalOpen, setShortcutsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#090D16] text-white selection:bg-emerald-500/30 selection:text-[#34D399] relative overflow-x-hidden">
      {/* Subtle, animated background effects: slow-moving gradient aurora & drifting glowing particles */}
      <AmbientBackground />

      {/* Top Navigation */}
      <div className="relative z-20">
        <Navbar
          onOpenContact={() => setContactModalOpen(true)}
          onOpenRegister={() => setRegisterModalOpen(true)}
          onOpenShortcuts={() => setShortcutsModalOpen(true)}
        />
      </div>

      {/* Main Page Sections */}
      <main className="relative z-10">
        {/* Hero Section with Interactive EZ Agent Command Center Demo & Shortcuts Trigger */}
        <HeroSection
          onOpenContact={() => setContactModalOpen(true)}
          onOpenRegister={() => setRegisterModalOpen(true)}
          onOpenShortcuts={() => setShortcutsModalOpen(true)}
        />

        {/* Enterprise Logos Infinite Marquee */}
        <LogoMarquee />

        {/* The System of Action: Say the role. The hiring begins. */}
        <SystemOfAction />

        {/* Detailed 7-Step Workflow Deep-Dive */}
        <WorkflowSteps />

        {/* Analytics Panel: Velocity, Cost Savings & Conversion Funnel */}
        <AnalyticsPanel />

        {/* Testimonials Masonry Grid */}
        <TestimonialsSection />
      </main>

      {/* Conversion Callout, Newsletter & Comprehensive Footer */}
      <div className="relative z-10">
        <CtaFooter
          onOpenContact={() => setContactModalOpen(true)}
          onOpenRegister={() => setRegisterModalOpen(true)}
        />
      </div>

      {/* Interactive Modals */}
      <ContactModal
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
      />
      <RegisterModal
        isOpen={registerModalOpen}
        onClose={() => setRegisterModalOpen(false)}
      />
      <KeyboardShortcutsModal
        isOpen={shortcutsModalOpen}
        onClose={() => setShortcutsModalOpen(false)}
      />
    </div>
  );
}

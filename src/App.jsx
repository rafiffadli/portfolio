import React, { useState } from 'react';
import AeroShards from './components/AeroShards';
import AeroControls from './components/AeroControls';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SkillsSection from './components/SkillsSection';
import ExperienceSection from './components/ExperienceSection';
import ProjectsSection from './components/ProjectsSection';
import CertificationsSection from './components/CertificationsSection';
import EducationSection from './components/EducationSection';
import TerminalConsole from './components/TerminalConsole';
import ContactModal from './components/ContactModal';
import Footer from './components/Footer';

export default function App() {
  // AeroShards background configuration state
  const defaultAeroConfig = {
    shardCount: 38,
    speed: 1.0,
    turbulence: 0.8,
    glow: 0.9,
    interactionMode: 'repel', // 'repel' | 'attract' | 'float'
    colorTheme: 'cyan',       // 'cyan' | 'emerald' | 'violet' | 'obsidian'
    grain: true
  };

  const [aeroConfig, setAeroConfig] = useState(defaultAeroConfig);
  const [contactOpen, setContactOpen] = useState(false);
  const [terminalOpen, setTerminalOpen] = useState(false);

  const resetAeroConfig = () => setAeroConfig(defaultAeroConfig);

  return (
    <div className="relative min-h-screen text-slate-100 bg-[#05070d] overflow-x-hidden">
      
      {/* 3D Interactive AeroShards Animated Background */}
      <AeroShards {...aeroConfig} />

      {/* Real-time Aero Shards Interactive Control Dock */}
      <AeroControls
        config={aeroConfig}
        setConfig={setAeroConfig}
        resetConfig={resetAeroConfig}
      />

      {/* Top Glass Navigation Bar */}
      <Navbar
        onOpenContact={() => setContactOpen(true)}
        onOpenTerminal={() => setTerminalOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <Hero
          onOpenContact={() => setContactOpen(true)}
          onOpenTerminal={() => setTerminalOpen(true)}
        />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <CertificationsSection />
        <EducationSection />
      </main>

      {/* Footer */}
      <Footer
        onOpenContact={() => setContactOpen(true)}
        onOpenTerminal={() => setTerminalOpen(true)}
      />

      {/* Interactive Security Terminal Console Modal */}
      <TerminalConsole
        isOpen={terminalOpen}
        onClose={() => setTerminalOpen(false)}
      />

      {/* Contact & Dispatch Modal */}
      <ContactModal
        isOpen={contactOpen}
        onClose={() => setContactOpen(false)}
      />

    </div>
  );
}

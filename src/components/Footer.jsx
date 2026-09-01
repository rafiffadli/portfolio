import React from 'react';
import { Shield, Linkedin, Mail, MapPin, Sparkles, Terminal, ArrowUp } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Footer({ onOpenContact, onOpenTerminal }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 border-t border-cyan-500/15 bg-[#030509]/80 backdrop-blur-xl relative z-10 text-xs text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-900">
          
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
              <Shield className="w-4 h-4" />
            </div>
            <div>
              <span className="font-display font-bold text-slate-100 text-sm">{personalInfo.name}</span>
              <span className="text-slate-500 text-xs ml-2">| IT Security & Risk Specialist</span>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-blue-400 hover:border-blue-500/40 transition-colors"
            >
              <Linkedin className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
            </a>

            <button
              onClick={onOpenContact}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>{personalInfo.email}</span>
            </button>

            <button
              onClick={onOpenTerminal}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-cyan-400 hover:border-cyan-400 transition-colors font-mono"
            >
              <Terminal className="w-3.5 h-3.5" />
              <span>Console</span>
            </button>
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>

        </div>

        {/* Bottom Credits */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] font-mono text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} {personalInfo.name}. All security telemetry rights reserved.
          </div>
          <div className="flex items-center gap-2">
            <span>Powered by</span>
            <span className="text-cyan-400">Aero Shards 3D Simulation</span>
            <span>&bull;</span>
            <span className="text-slate-400">React Bits Inspired</span>
          </div>
        </div>

      </div>
    </footer>
  );
}

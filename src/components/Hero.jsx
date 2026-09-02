import React from 'react';
import { ShieldCheck, Terminal, ArrowRight, Linkedin, Mail, MapPin, CheckCircle2, Lock, Cpu, Globe2, Sparkles, Activity } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Hero({ onOpenContact, onOpenTerminal }) {
  return (
    <section id="about" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Floating Status Pill */}
        <div className="flex items-center justify-center md:justify-start mb-6">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-900/80 backdrop-blur-xl border border-cyan-500/30 shadow-lg shadow-cyan-950/40 text-xs font-mono">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-slate-300">
              {personalInfo.status}
            </span>
            <span className="text-slate-600">|</span>
            <span className="text-cyan-400 flex items-center gap-1">
              <MapPin className="w-3 h-3" />
              KL, Malaysia
            </span>
          </div>
        </div>

        {/* Main Grid: Headline & Interactive Aero Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headline & Bio */}
          <div className="lg:col-span-7 text-center md:text-left space-y-6">
            
            <div>
              <div className="inline-block text-xs font-mono font-bold tracking-widest text-cyan-400 uppercase mb-2">
                Defense &bull; Risk &bull; Enterprise Telemetry
              </div>
              <h1 className="font-display font-extrabold tracking-tight text-white leading-[1.15]">
                <span className="block text-3xl sm:text-5xl lg:text-6xl text-white">
                  Rafif Fadli
                </span>
                <span className="block text-[clamp(1.15rem,3.8vw,3.15rem)] whitespace-nowrap bg-gradient-to-r from-cyan-400 via-teal-300 to-blue-500 bg-clip-text text-transparent drop-shadow-sm my-0.5">
                  IT Security & Risk Specialist
                </span>
                <span className="block text-2xl sm:text-4xl lg:text-5xl text-slate-200">
                  Vibe Coding For Fun
                </span>
              </h1>
            </div>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-sans">
              Hi, I'm <strong className="text-white font-semibold">{personalInfo.name}</strong> — an{' '}
              <span className="text-cyan-300 font-medium">{personalInfo.title}</span>. 
              Specializing in cyber threat intelligence, CVE taxonomy analytics, multi-vendor enterprise infrastructure 
              (<span className="text-slate-200">Aruba, Ruckus, Meraki</span>), and high-availability NOC operations for global brands.
            </p>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-3 gap-3 pt-2">
              {personalInfo.stats.map((stat, idx) => (
                <div 
                  key={idx}
                  className="p-3 sm:p-3.5 rounded-2xl bg-slate-900/60 backdrop-blur-md border border-cyan-500/15 hover:border-cyan-500/40 hover:bg-slate-900/80 transition-all group"
                >
                  <div className="text-lg sm:text-2xl font-mono font-bold text-cyan-400 group-hover:scale-105 transition-transform">
                    {stat.value}
                  </div>
                  <div className="text-[11px] text-slate-400 font-sans mt-0.5 leading-tight">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Action Buttons */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-4">
              <a
                href="#experience"
                className="group flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-teal-400 to-blue-600 text-slate-950 font-semibold text-sm shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
              >
                <span>View My Working Experience</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </a>

              <button
                onClick={onOpenTerminal}
                className="flex items-center gap-2 px-5 py-3.5 rounded-xl bg-slate-900/80 backdrop-blur-xl border border-cyan-500/30 hover:border-cyan-400 text-cyan-300 text-sm font-mono hover:bg-slate-800/80 hover:shadow-lg hover:shadow-cyan-950/50 transition-all duration-200"
              >
                <Terminal className="w-4 h-4 text-cyan-400" />
                <span>Run Security Console</span>
              </button>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-4 py-3.5 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-blue-500/50 text-slate-300 hover:text-blue-400 text-sm transition-all duration-200"
                title="Open LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
                <span className="hidden sm:inline">LinkedIn</span>
              </a>
            </div>

          </div>

          {/* Right Column: Holographic Glass Telemetry Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md rounded-3xl p-6 sm:p-7 bg-slate-950/75 backdrop-blur-2xl border border-cyan-500/30 shadow-2xl shadow-cyan-950/80 overflow-hidden group hover:border-cyan-400/60 transition-all duration-500">
              
              {/* Top ambient glow light */}
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-cyan-500/20 rounded-full blur-3xl pointer-events-none group-hover:bg-cyan-500/30 transition-all" />
              <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-blue-500/15 rounded-full blur-3xl pointer-events-none" />

              {/* Card Header with HUD Status */}
              <div className="flex items-center justify-between pb-4 mb-5 border-b border-slate-800/80">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-xs font-mono font-bold text-slate-200 tracking-wider">DEFENSE OVERVIEW</h3>
                    <p className="text-[10px] font-mono text-cyan-400">ID: SEC-RM-2026</p>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[10px] font-mono">
                  <Activity className="w-3 h-3 animate-pulse" />
                  <span>ONLINE</span>
                </div>
              </div>

              {/* Current Role Banner */}
              <div className="p-4 rounded-2xl bg-gradient-to-r from-cyan-950/40 via-slate-900/60 to-blue-950/30 border border-cyan-500/25 mb-5">
                <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 mb-1">
                  <span>CURRENT ENGAGEMENT</span>
                  <span className="text-emerald-400">● 2026 PRESENT</span>
                </div>
                <div className="font-display font-bold text-base text-white">
                  Revenue Monster
                </div>
                <div className="text-xs text-cyan-300 font-mono mt-0.5">
                  IT Security & Risk Specialist
                </div>
              </div>

              {/* Key Domains Highlights */}
              <div className="space-y-3 font-mono text-xs">
                <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-900/50 border border-slate-800/80">
                  <span className="text-slate-400 flex items-center gap-2">
                    <Lock className="w-3.5 h-3.5 text-cyan-400" />
                    Threat Intel & CVE
                  </span>
                  <span className="text-cyan-300 font-semibold">CrowdStrike & SecScore</span>
                </div>

                <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-900/50 border border-slate-800/80">
                  <span className="text-slate-400 flex items-center gap-2">
                    <Globe2 className="w-3.5 h-3.5 text-blue-400" />
                    Hospitality NOC
                  </span>
                  <span className="text-blue-300 font-semibold">Hyatt &bull; Shangri-La</span>
                </div>

                <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-900/50 border border-slate-800/80">
                  <span className="text-slate-400 flex items-center gap-2">
                    <Cpu className="w-3.5 h-3.5 text-teal-400" />
                    Wireless & Switching
                  </span>
                  <span className="text-teal-300 font-semibold">Aruba, Ruckus, CCNA</span>
                </div>
              </div>

              {/* Verified Badges Footer */}
              <div className="mt-5 pt-4 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span className="flex items-center gap-1 text-emerald-400">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  5x Industry Certified
                </span>
                <span className="text-slate-500">UPTM Alumnus (Hons)</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

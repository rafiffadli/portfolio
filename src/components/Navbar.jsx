import React, { useState, useEffect } from 'react';
import { Shield, Terminal, Briefcase, Award, GraduationCap, Mail, Menu, X, ExternalLink, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Navbar({ onOpenContact, onOpenTerminal }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'My Project', href: '#projects' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Education', href: '#education' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
      scrolled 
        ? 'py-3 bg-[#05070d]/80 backdrop-blur-xl border-b border-cyan-500/20 shadow-lg shadow-black/40' 
        : 'py-5 bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand / Logo */}
          <a href="#" className="group flex items-center gap-3">
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/10 border border-cyan-500/40 group-hover:border-cyan-400 group-hover:shadow-lg group-hover:shadow-cyan-500/20 transition-all duration-300">
              <Shield className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform duration-300" />
              <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-400 ring-2 ring-[#05070d]" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-display font-bold text-base tracking-tight text-slate-100 group-hover:text-cyan-300 transition-colors">
                  {personalInfo.name}
                </span>
                <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 hidden sm:inline-block">
                  SEC-OPS
                </span>
              </div>
              <p className="text-[11px] font-mono text-slate-400 tracking-wide hidden sm:block">
                IT Security & Risk
              </p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 px-4 py-1.5 rounded-full bg-slate-900/60 backdrop-blur-md border border-slate-800/80 shadow-inner">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3.5 py-1.5 rounded-full text-xs font-medium text-slate-300 hover:text-cyan-300 hover:bg-slate-800/60 transition-all duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Quick Action Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={onOpenTerminal}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900/80 border border-slate-700/60 text-slate-300 text-xs font-mono hover:border-cyan-500/40 hover:text-cyan-300 transition-all"
              title="Open Interactive Security Terminal"
            >
              <Terminal className="w-3.5 h-3.5 text-cyan-400" />
              <span>Console</span>
            </button>

            <button
              onClick={onOpenContact}
              className="relative group overflow-hidden px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-semibold text-xs shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
            >
              <span className="relative z-10 flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5" />
                <span>Get In Touch</span>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-teal-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={onOpenContact}
              className="px-3 py-1.5 rounded-lg bg-cyan-500/20 border border-cyan-500/40 text-cyan-300 text-xs font-medium"
            >
              Contact
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-cyan-400"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 p-4 rounded-2xl bg-slate-950/95 backdrop-blur-2xl border border-cyan-500/30 shadow-2xl space-y-2 animate-in fade-in slide-in-from-top-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3.5 py-2 rounded-xl text-sm font-medium text-slate-300 hover:text-cyan-300 hover:bg-slate-900/80"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2 border-t border-slate-800 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenTerminal();
                }}
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-slate-900 border border-cyan-500/30 text-cyan-300 text-xs font-mono"
              >
                <Terminal className="w-4 h-4" />
                <span>Launch Security Console</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

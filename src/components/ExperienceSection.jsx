import React, { useState } from 'react';
import { Briefcase, Building2, MapPin, Calendar, CheckCircle2, ChevronRight, Sparkles, Shield, Server, Lock } from 'lucide-react';
import { experiences } from '../data/portfolioData';

export default function ExperienceSection() {
  const [selectedIdx, setSelectedIdx] = useState(0);

  return (
    <section id="experience" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono mb-3">
            <Briefcase className="w-3.5 h-3.5 text-cyan-400" />
            <span>CAREER TRACK RECORD</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
            Professional Experience
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-2 font-sans">
            From hands-on national cyber threat analytics to mission-critical NOC engineering and fintech security governance.
          </p>
        </div>

        {/* Experience Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left: Interactive Company List */}
          <div className="lg:col-span-4 space-y-2.5">
            {experiences.map((exp, idx) => {
              const isSelected = selectedIdx === idx;
              return (
                <button
                  key={idx}
                  onClick={() => setSelectedIdx(idx)}
                  className={`w-full text-left p-4 rounded-2xl border transition-all duration-300 relative overflow-hidden group ${
                    isSelected
                      ? 'bg-slate-900/90 border-cyan-400/60 shadow-xl shadow-cyan-950/40 text-white'
                      : 'bg-slate-950/50 border-slate-800/80 text-slate-400 hover:bg-slate-900/60 hover:text-slate-200 hover:border-slate-700'
                  }`}
                >
                  {/* Left accent indicator */}
                  {isSelected && (
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-400 to-blue-500" />
                  )}

                  <div className="flex items-start justify-between">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-display font-bold text-sm text-slate-100 group-hover:text-cyan-300 transition-colors">
                          {exp.company}
                        </span>
                        {exp.current && (
                          <span className="px-1.5 py-0.5 rounded bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-[10px] font-mono">
                            ACTIVE
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-slate-400 font-sans line-clamp-1">
                        {exp.role}
                      </p>
                    </div>
                    <ChevronRight className={`w-4 h-4 mt-1 transition-transform ${isSelected ? 'text-cyan-400 translate-x-1' : 'text-slate-600'}`} />
                  </div>

                  <div className="mt-2.5 flex items-center gap-2 text-[11px] font-mono text-slate-500">
                    <Calendar className="w-3 h-3 text-slate-500" />
                    <span>{exp.period}</span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right: Detailed Experience View Card */}
          <div className="lg:col-span-8">
            {experiences[selectedIdx] && (
              <div className="p-7 sm:p-9 rounded-3xl bg-slate-950/80 backdrop-blur-2xl border border-cyan-500/25 shadow-2xl shadow-cyan-950/60 relative overflow-hidden animate-in fade-in duration-300">
                
                {/* Background glow accent */}
                <div className="absolute -top-24 -right-24 w-60 h-60 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

                {/* Header Info */}
                <div className="flex flex-wrap items-start justify-between gap-4 pb-6 mb-6 border-b border-slate-800/80">
                  <div>
                    <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider font-semibold">
                      {experiences[selectedIdx].companyType}
                    </span>
                    <h3 className="text-2xl font-display font-bold text-white mt-1">
                      {experiences[selectedIdx].role}
                    </h3>
                    <div className="flex items-center gap-3 mt-1.5 text-sm text-slate-300 font-medium">
                      <span className="flex items-center gap-1.5 text-cyan-300">
                        <Building2 className="w-4 h-4" />
                        {experiences[selectedIdx].company}
                      </span>
                      <span className="text-slate-600">•</span>
                      <span className="flex items-center gap-1.5 text-slate-400">
                        <MapPin className="w-3.5 h-3.5" />
                        {experiences[selectedIdx].location}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-col items-end">
                    <span className="px-3 py-1 rounded-xl bg-slate-900 border border-slate-800 text-xs font-mono text-cyan-300 font-semibold">
                      {experiences[selectedIdx].duration}
                    </span>
                    <span className="text-[11px] font-mono text-slate-500 mt-1">
                      {experiences[selectedIdx].period}
                    </span>
                  </div>
                </div>

                {/* Accomplishments & Responsibilities */}
                <div className="space-y-4 mb-8">
                  <h4 className="text-xs font-mono font-bold text-slate-300 uppercase tracking-wider">
                    Key Deliverables & Responsibilities
                  </h4>
                  <div className="space-y-3">
                    {experiences[selectedIdx].highlights.map((item, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-md bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0 mt-0.5">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                        </div>
                        <p className="text-sm text-slate-300 leading-relaxed font-sans">
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech & Methodologies Tag Pills */}
                <div>
                  <h4 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider mb-3">
                    Technologies & Applied Skills
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {experiences[selectedIdx].tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-3 py-1 rounded-lg bg-cyan-950/40 border border-cyan-500/30 text-cyan-300 text-xs font-mono"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}

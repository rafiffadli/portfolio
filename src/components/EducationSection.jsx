import React from 'react';
import { GraduationCap, BookOpen, Calendar, MapPin, Award, CheckCircle2 } from 'lucide-react';
import { education } from '../data/portfolioData';

export default function EducationSection() {
  return (
    <section id="education" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono mb-3">
            <GraduationCap className="w-3.5 h-3.5 text-cyan-400" />
            <span>ACADEMIC FOUNDATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
            Education & Academic Honors
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-2 font-sans">
            Rigorous foundational training in computer science, software architecture, and specialized cybersecurity engineering.
          </p>
        </div>

        {/* Education Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {education.map((edu, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl bg-slate-950/75 backdrop-blur-xl border border-cyan-500/20 hover:border-cyan-400/50 hover:bg-slate-900/80 transition-all duration-300 shadow-xl hover:shadow-cyan-950/40 relative overflow-hidden"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono">
                  <Calendar className="w-3 h-3" />
                  <span>{edu.period}</span>
                </div>
              </div>

              <div className="text-xs font-mono text-cyan-400 font-semibold mb-1">
                {edu.institution}
              </div>
              <h3 className="text-lg sm:text-xl font-display font-bold text-white mb-2 leading-snug">
                {edu.degree}
              </h3>
              
              <div className="mb-4">
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs font-mono">
                  <Award className="w-3 h-3" />
                  {edu.status}
                </span>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans mb-5">
                {edu.focus}
              </p>

              <div className="space-y-2 pt-4 border-t border-slate-800/80">
                {edu.highlights.map((h, hIdx) => (
                  <div key={hIdx} className="flex items-start gap-2 text-xs text-slate-400 font-sans">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 mt-0.5 shrink-0" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

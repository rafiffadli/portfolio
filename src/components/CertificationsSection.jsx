import React from 'react';
import { Award, ShieldCheck, CheckCircle2, ExternalLink, Sparkles, Shield, Wifi, Network } from 'lucide-react';
import confetti from 'canvas-confetti';
import { certifications } from '../data/portfolioData';

export default function CertificationsSection() {
  const triggerConfetti = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (rect.left + rect.width / 2) / window.innerWidth;
    const y = (rect.top + rect.height / 2) / window.innerHeight;

    confetti({
      particleCount: 40,
      spread: 60,
      origin: { x, y },
      colors: ['#06b6d4', '#10b981', '#3b82f6', '#00f2fe']
    });
  };

  return (
    <section id="certifications" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono mb-3">
            <Award className="w-3.5 h-3.5 text-cyan-400" />
            <span>INDUSTRY CREDENTIALS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
            Verified Certifications
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-2 font-sans">
            Formal industry accreditations in Threat Intelligence, Cisco Routing, EnGenius Enterprise Wireless, and ITIL ITSM.
          </p>
        </div>

        {/* Certificate Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, idx) => (
            <div
              key={idx}
              onClick={triggerConfetti}
              className="group p-6 rounded-3xl bg-slate-950/70 backdrop-blur-xl border border-cyan-500/20 hover:border-cyan-400/60 hover:bg-slate-900/80 transition-all duration-300 shadow-xl hover:shadow-cyan-950/50 flex flex-col justify-between cursor-pointer relative overflow-hidden"
            >
              {/* Top ambient color edge */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${cert.badgeColor}`} />

              <div>
                {/* Header with Icon and Verification Badge */}
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${cert.badgeColor} p-0.5 shadow-lg`}>
                    <div className="w-full h-full bg-slate-950/90 rounded-[14px] flex items-center justify-center text-cyan-300 group-hover:scale-105 transition-transform">
                      <Award className="w-6 h-6 text-cyan-400" />
                    </div>
                  </div>

                  <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[10px] font-mono">
                    <CheckCircle2 className="w-3 h-3" />
                    <span>VERIFIED</span>
                  </div>
                </div>

                <div className="text-[11px] font-mono text-cyan-400 font-medium mb-1">
                  {cert.issuer}
                </div>
                <h3 className="text-base font-display font-bold text-white group-hover:text-cyan-300 transition-colors leading-snug mb-3">
                  {cert.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed font-sans mb-4">
                  {cert.description}
                </p>
              </div>

              {/* Card Footer */}
              <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-500">
                <span className="text-slate-400">ID: {cert.code}</span>
                <span className="text-cyan-400 group-hover:underline flex items-center gap-1">
                  <span>Celebrate</span>
                  <Sparkles className="w-3 h-3" />
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

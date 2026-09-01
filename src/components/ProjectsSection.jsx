import React, { useState } from 'react';
import { 
  FolderGit2, 
  ExternalLink, 
  Copy, 
  Check, 
  ShieldAlert, 
  CalendarCheck, 
  Globe, 
  Sparkles, 
  ArrowUpRight, 
  Activity,
  Layers
} from 'lucide-react';
import { projects } from '../data/portfolioData';

export default function ProjectsSection() {
  const [copiedSlug, setCopiedSlug] = useState(null);

  const copyUrl = (url, slug) => {
    navigator.clipboard.writeText(url);
    setCopiedSlug(slug);
    setTimeout(() => setCopiedSlug(null), 2000);
  };

  const getIcon = (iconName) => {
    switch (iconName) {
      case 'ShieldAlert':
        return <ShieldAlert className="w-6 h-6 text-cyan-400" />;
      case 'CalendarCheck':
        return <CalendarCheck className="w-6 h-6 text-blue-400" />;
      default:
        return <Globe className="w-6 h-6 text-cyan-400" />;
    }
  };

  return (
    <section id="projects" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono mb-3">
            <FolderGit2 className="w-3.5 h-3.5 text-cyan-400" />
            <span>DEPLOYED SYSTEMS & LABS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
            My Projects
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-2 font-sans">
            Production utilities, security scanners, and live interactive web architectures built and maintained by Rafif.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group relative rounded-3xl bg-slate-950/75 backdrop-blur-xl border border-cyan-500/20 hover:border-cyan-400/60 p-6 sm:p-8 transition-all duration-300 shadow-2xl hover:shadow-cyan-950/60 flex flex-col justify-between overflow-hidden"
            >
              {/* Top Accent Gradient Bar */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${project.badgeColor}`} />

              {/* Ambient Glow */}
              <div className="absolute -top-16 -right-16 w-36 h-36 bg-cyan-500/10 rounded-full blur-3xl group-hover:bg-cyan-500/20 transition-all pointer-events-none" />

              <div>
                {/* Header: Icon, Category & Live Status */}
                <div className="flex items-center justify-between gap-4 mb-5">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-slate-900/90 border border-cyan-500/30 flex items-center justify-center shadow-lg group-hover:scale-105 group-hover:border-cyan-400/50 transition-all">
                      {getIcon(project.icon)}
                    </div>
                    <div>
                      <span className="text-[11px] font-mono uppercase tracking-wider text-cyan-400 block">
                        {project.category}
                      </span>
                      <h3 className="text-xl font-display font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {project.title}
                      </h3>
                    </div>
                  </div>

                  {/* Online Status Badge */}
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[11px] font-mono shrink-0">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>{project.status}</span>
                  </div>
                </div>

                {/* Domain Pill */}
                <div className="flex items-center gap-2 mb-4 p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 font-mono text-xs text-slate-300">
                  <Globe className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span className="truncate text-cyan-200">{project.domain}</span>
                  <button
                    onClick={() => copyUrl(project.url, project.slug)}
                    className="ml-auto p-1 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                    title="Copy Domain URL"
                  >
                    {copiedSlug === project.slug ? (
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed mb-5">
                  {project.description}
                </p>

                {/* Feature Highlights */}
                <div className="space-y-2 mb-6">
                  {project.highlights.map((highlight, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2 text-xs text-slate-300 font-sans">
                      <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 shrink-0 shadow-sm shadow-cyan-400" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-6 pt-4 border-t border-slate-800/80">
                  {project.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 rounded-lg bg-slate-900/90 border border-slate-800 text-[10px] font-mono text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Live Link Button */}
                <div className="flex items-center gap-3">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-semibold text-xs font-mono flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 hover:scale-[1.01] active:scale-[0.99] transition-all"
                  >
                    <span>Launch Live System</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>

                  <button
                    onClick={() => copyUrl(project.url, project.slug)}
                    className="px-3.5 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 text-slate-300 text-xs font-mono transition-colors flex items-center justify-center"
                    title="Copy URL"
                  >
                    {copiedSlug === project.slug ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

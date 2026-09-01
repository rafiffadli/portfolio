import React, { useState } from 'react';
import { 
  Shield, 
  Network, 
  Cpu, 
  Layers, 
  Eye, 
  Bug, 
  Radar, 
  Activity, 
  Sliders, 
  Radio, 
  GitCommit, 
  Wifi, 
  Lock, 
  BarChart3, 
  Cloud, 
  LineChart, 
  Server, 
  CheckCircle2, 
  Search,
  Sparkles,
  BookOpen
} from 'lucide-react';
import { skillsData } from '../data/portfolioData';

// Dynamic icon resolver
const iconMap = {
  ShieldAlert: Shield,
  Layers: Layers,
  Eye: Eye,
  Bug: Bug,
  Radar: Radar,
  Activity: Activity,
  Network: Network,
  Sliders: Sliders,
  Radio: Radio,
  Cpu: Cpu,
  GitCommit: GitCommit,
  Wifi: Wifi,
  Shield: Shield,
  Lock: Lock,
  BarChart3: BarChart3,
  Cloud: Cloud,
  LineChart: LineChart,
  Server: Server,
  CheckCircle2: CheckCircle2,
  Search: Search,
};

export default function SkillsSection() {
  const [activeTab, setActiveTab] = useState('core');

  const tabs = [
    { id: 'core', name: 'Core Specialization', icon: Shield, count: skillsData.core.length },
    { id: 'networking', name: 'Network Infrastructure', icon: Network, count: skillsData.networking.length },
    { id: 'tools', name: 'Security & NOC Tools', icon: Server, count: skillsData.tools.length },
    { id: 'frameworks', name: 'Standards & Governance', icon: BookOpen, count: skillsData.frameworks.length }
  ];

  return (
    <section id="skills" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono mb-3">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>TECHNICAL CAPABILITIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
            Security, Telemetry & Network Stack
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-2 font-sans">
            Engineered across enterprise threat intelligence, high-density wireless controllers, and strict risk governance.
          </p>
        </div>

        {/* Tab Selection */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? 'bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/60 text-cyan-200 shadow-lg shadow-cyan-950/50'
                    : 'bg-slate-900/50 border border-slate-800/80 text-slate-400 hover:text-slate-200 hover:border-slate-700'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-cyan-400' : 'text-slate-500'}`} />
                <span>{tab.name}</span>
                <span className={`px-1.5 py-0.5 rounded-md text-[10px] font-mono ${
                  isActive ? 'bg-cyan-500/30 text-cyan-200' : 'bg-slate-800 text-slate-500'
                }`}>
                  {tab.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Tab Content Panels */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          
          {/* Core Specialization */}
          {activeTab === 'core' && skillsData.core.map((skill, idx) => {
            const Icon = iconMap[skill.icon] || Shield;
            return (
              <div
                key={idx}
                className="group p-5 rounded-2xl bg-slate-950/60 backdrop-blur-xl border border-cyan-500/15 hover:border-cyan-500/50 hover:bg-slate-900/80 transition-all duration-300 shadow-lg hover:shadow-cyan-950/50"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:scale-110 group-hover:bg-cyan-500/20 transition-all">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-slate-900 border border-slate-800 text-slate-400">
                    {skill.category}
                  </span>
                </div>
                <h3 className="text-sm font-semibold text-slate-100 group-hover:text-cyan-300 transition-colors mb-2">
                  {skill.name}
                </h3>
                <div className="w-full bg-slate-900/80 rounded-full h-1.5 overflow-hidden border border-slate-800">
                  <div 
                    className="bg-gradient-to-r from-cyan-500 to-blue-500 h-full rounded-full transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            );
          })}

          {/* Network Infrastructure */}
          {activeTab === 'networking' && skillsData.networking.map((skill, idx) => {
            const Icon = iconMap[skill.icon] || Network;
            return (
              <div
                key={idx}
                className="group p-5 rounded-2xl bg-slate-950/60 backdrop-blur-xl border border-blue-500/15 hover:border-blue-400/50 hover:bg-slate-900/80 transition-all duration-300 shadow-lg hover:shadow-blue-950/50"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 group-hover:scale-110 group-hover:bg-blue-500/20 transition-all">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-slate-900 border border-slate-800 text-blue-300">
                    NOC / INFRA
                  </span>
                </div>
                <h3 className="text-sm font-semibold text-slate-100 group-hover:text-blue-300 transition-colors mb-2">
                  {skill.name}
                </h3>
                <div className="w-full bg-slate-900/80 rounded-full h-1.5 overflow-hidden border border-slate-800">
                  <div 
                    className="bg-gradient-to-r from-blue-500 to-teal-400 h-full rounded-full transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            );
          })}

          {/* Tools Stack */}
          {activeTab === 'tools' && skillsData.tools.map((tool, idx) => {
            const Icon = iconMap[tool.icon] || Server;
            return (
              <div
                key={idx}
                className="group p-5 rounded-2xl bg-slate-950/60 backdrop-blur-xl border border-teal-500/15 hover:border-teal-400/50 hover:bg-slate-900/80 transition-all duration-300 shadow-lg"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-teal-400 group-hover:scale-110 group-hover:bg-teal-500/20 transition-all">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-teal-950/40 border border-teal-500/30 text-teal-300">
                    {tool.tag}
                  </span>
                </div>
                <h3 className="text-sm font-semibold text-slate-100 group-hover:text-teal-300 transition-colors mb-2">
                  {tool.name}
                </h3>
                <div className="w-full bg-slate-900/80 rounded-full h-1.5 overflow-hidden border border-slate-800">
                  <div 
                    className="bg-gradient-to-r from-teal-400 to-emerald-500 h-full rounded-full transition-all duration-1000"
                    style={{ width: `${tool.level}%` }}
                  />
                </div>
              </div>
            );
          })}

          {/* Frameworks & Standards */}
          {activeTab === 'frameworks' && skillsData.frameworks.map((fw, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-slate-950/60 backdrop-blur-xl border border-purple-500/20 hover:border-purple-400/50 hover:bg-slate-900/80 transition-all duration-300 shadow-lg"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400">
                  <BookOpen className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-bold text-slate-100 font-display">
                  {fw.name}
                </h3>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed font-sans">
                {fw.desc}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

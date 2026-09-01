import React, { useState } from 'react';
import { Sparkles, Sliders, Eye, EyeOff, RotateCcw, Zap, Compass, Activity } from 'lucide-react';

export default function AeroControls({
  config,
  setConfig,
  resetConfig
}) {
  const [isOpen, setIsOpen] = useState(false);

  const themes = [
    { id: 'cyan', name: 'Cyan Laser', color: 'bg-cyan-500 border-cyan-400' },
    { id: 'emerald', name: 'Cyber Emerald', color: 'bg-emerald-500 border-emerald-400' },
    { id: 'violet', name: 'Vapor Violet', color: 'bg-purple-500 border-purple-400' },
    { id: 'obsidian', name: 'Obsidian Glass', color: 'bg-slate-400 border-slate-300' }
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-slate-900/85 backdrop-blur-xl border border-cyan-500/40 text-cyan-300 shadow-xl shadow-cyan-950/40 hover:border-cyan-400 hover:shadow-cyan-500/20 transition-all duration-300"
        title="Customize Aero Shards Background"
      >
        <div className="relative flex items-center justify-center">
          <Sparkles className="w-4 h-4 text-cyan-400 animate-spin-slow" />
          <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
        </div>
        <span className="text-xs font-mono font-semibold tracking-wider uppercase text-slate-200 group-hover:text-cyan-300">
          Aero FX
        </span>
        <Sliders className={`w-3.5 h-3.5 transition-transform duration-300 ${isOpen ? 'rotate-90 text-cyan-400' : 'text-slate-400'}`} />
      </button>

      {/* Control Panel Drawer */}
      {isOpen && (
        <div className="absolute bottom-14 right-0 w-80 p-5 rounded-2xl bg-slate-950/90 backdrop-blur-2xl border border-cyan-500/30 shadow-2xl shadow-cyan-950/60 text-slate-200 animate-in fade-in slide-in-from-bottom-4 duration-200">
          <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-800/80">
            <div className="flex items-center gap-2">
              <Compass className="w-4 h-4 text-cyan-400" />
              <h3 className="text-xs font-mono font-bold tracking-wider text-slate-100 uppercase">
                Aero Shards Engine
              </h3>
            </div>
            <button
              onClick={resetConfig}
              className="p-1 rounded-md text-slate-400 hover:text-cyan-400 hover:bg-slate-800/50 transition-colors"
              title="Reset to defaults"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="space-y-4 text-xs font-mono">
            {/* Color Theme Selector */}
            <div>
              <label className="block text-[11px] text-slate-400 mb-2 font-medium">Color Palette</label>
              <div className="grid grid-cols-4 gap-2">
                {themes.map((t) => (
                  <button
                    key={t.id}
                    onClick={() => setConfig({ ...config, colorTheme: t.id })}
                    className={`flex flex-col items-center gap-1.5 p-2 rounded-xl border transition-all ${
                      config.colorTheme === t.id
                        ? 'border-cyan-400 bg-cyan-950/40 text-cyan-200'
                        : 'border-slate-800 bg-slate-900/40 text-slate-400 hover:border-slate-700'
                    }`}
                  >
                    <span className={`w-3.5 h-3.5 rounded-full ${t.color} border shadow-sm`} />
                    <span className="text-[10px] truncate max-w-full">{t.name.split(' ')[0]}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Interaction Mode */}
            <div>
              <label className="block text-[11px] text-slate-400 mb-2 font-medium">Mouse Physics</label>
              <div className="grid grid-cols-3 gap-1.5 p-1 bg-slate-900/60 rounded-xl border border-slate-800">
                {['repel', 'attract', 'float'].map((mode) => (
                  <button
                    key={mode}
                    onClick={() => setConfig({ ...config, interactionMode: mode })}
                    className={`py-1.5 text-[11px] capitalize rounded-lg transition-all ${
                      config.interactionMode === mode
                        ? 'bg-cyan-500/20 text-cyan-300 font-semibold border border-cyan-500/30'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    {mode}
                  </button>
                ))}
              </div>
            </div>

            {/* Speed Slider */}
            <div>
              <div className="flex justify-between mb-1.5">
                <span className="text-[11px] text-slate-400">Velocity</span>
                <span className="text-cyan-400 font-bold">{config.speed.toFixed(1)}x</span>
              </div>
              <input
                type="range"
                min="0.2"
                max="3.0"
                step="0.1"
                value={config.speed}
                onChange={(e) => setConfig({ ...config, speed: parseFloat(e.target.value) })}
                className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
              />
            </div>

            {/* Shard Density */}
            <div>
              <div className="flex justify-between mb-1.5">
                <span className="text-[11px] text-slate-400">Shard Count</span>
                <span className="text-cyan-400 font-bold">{config.shardCount}</span>
              </div>
              <input
                type="range"
                min="15"
                max="60"
                step="5"
                value={config.shardCount}
                onChange={(e) => setConfig({ ...config, shardCount: parseInt(e.target.value) })}
                className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
              />
            </div>

            {/* Turbulence */}
            <div>
              <div className="flex justify-between mb-1.5">
                <span className="text-[11px] text-slate-400">Turbulence / Drift</span>
                <span className="text-cyan-400 font-bold">{(config.turbulence * 100).toFixed(0)}%</span>
              </div>
              <input
                type="range"
                min="0.0"
                max="2.0"
                step="0.1"
                value={config.turbulence}
                onChange={(e) => setConfig({ ...config, turbulence: parseFloat(e.target.value) })}
                className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
              />
            </div>

            {/* Film Grain Toggle */}
            <div className="flex items-center justify-between pt-2 border-t border-slate-800/80">
              <span className="text-[11px] text-slate-400">Film Grain Shader</span>
              <button
                onClick={() => setConfig({ ...config, grain: !config.grain })}
                className={`px-2.5 py-1 rounded-md text-[10px] font-semibold transition-all ${
                  config.grain ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40' : 'bg-slate-900 text-slate-500 border border-slate-800'
                }`}
              >
                {config.grain ? 'Enabled' : 'Disabled'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

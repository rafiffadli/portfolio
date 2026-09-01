import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, X, Maximize2, Minimize2, Sparkles, CornerDownLeft } from 'lucide-react';
import { personalInfo, skillsData, experiences, certifications, education, projects } from '../data/portfolioData';

export default function TerminalConsole({ isOpen, onClose }) {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([
    { type: 'system', content: 'SEC-OS v3.8.4 [Terminal Session Initialized]' },
    { type: 'system', content: 'Host: rafif-security-gateway • Location: Kuala Lumpur, MY' },
    { type: 'system', content: 'Type "help" for a list of available cyber commands.\n' }
  ]);
  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommand = (e) => {
    e.preventDefault();
    const cmd = input.trim().toLowerCase();
    if (!cmd) return;

    const newHistory = [...history, { type: 'user', content: `$ ${input}` }];

    switch (cmd) {
      case 'help':
        newHistory.push({
          type: 'output',
          content: `Available Commands:
  • whoami       : Summary profile of Rafif Fadli
  • projects     : Live deployed tools (Cookie Scanner, Booking Demo)
  • skills       : Inspect full cybersecurity, NOC & tool stack
  • experience   : Career history & enterprise deliverables
  • certs        : List 5x verified industry certifications
  • edu          : Academic qualifications & honors
  • contact      : Direct contact information & links
  • scan         : Run active threat matrix diagnostic
  • clear        : Clear current terminal buffer
  • exit         : Close this terminal modal`
        });
        break;

      case 'projects':
      case 'project':
      case 'proj':
        newHistory.push({
          type: 'output',
          content: projects.map(p => `[${p.status}] ${p.title} (${p.category})\n  URL  : ${p.url}\n  INFO : ${p.description}`).join('\n\n')
        });
        break;

      case 'whoami':
      case 'about':
        newHistory.push({
          type: 'output',
          content: `NAME     : ${personalInfo.name}
ROLE     : ${personalInfo.title}
LOCATION : ${personalInfo.location}
SUMMARY  : ${personalInfo.bio}`
        });
        break;

      case 'skills':
        newHistory.push({
          type: 'output',
          content: `[CORE SPECIALIZATIONS]
- Risk Management & IT Governance (95%)
- Vulnerability Assessment / CVE Analytics (92%)
- Threat Intelligence (CrowdStrike / SecurityScoreCard) (88%)
- Management Information Systems (MIS) (90%)

[NETWORK & NOC INFRASTRUCTURE]
- Cisco Routing & Switching (CCNA) (92%)
- Aruba & Ruckus Wireless Controllers (SmartZone/Unleashed) (90%)
- Enterprise Meraki, SolarWinds, SevOne & EnGenius Cloud`
        });
        break;

      case 'experience':
      case 'exp':
        newHistory.push({
          type: 'output',
          content: experiences.map(e => `[${e.period}] ${e.company} — ${e.role}\n  → ${e.highlights[0]}`).join('\n\n')
        });
        break;

      case 'certs':
      case 'certifications':
        newHistory.push({
          type: 'output',
          content: certifications.map(c => `[VERIFIED] ${c.title}\n  Issuer: ${c.issuer} | ID: ${c.code}`).join('\n\n')
        });
        break;

      case 'edu':
      case 'education':
        newHistory.push({
          type: 'output',
          content: education.map(e => `${e.degree}\n  ${e.institution} (${e.period}) • ${e.status}`).join('\n\n')
        });
        break;

      case 'contact':
        newHistory.push({
          type: 'output',
          content: `EMAIL    : ${personalInfo.email}
LINKEDIN : ${personalInfo.linkedin}`
        });
        break;

      case 'scan':
      case 'matrix':
        newHistory.push({
          type: 'output',
          content: `[+] Scanning threat landscape...
[+] Telemetry Stream: 128,490 packets analyzed
[+] CrowdStrike Falcon EDR: 0 active breaches
[+] SecurityScoreCard Rating: Grade A (98/100)
[+] Network Integrity: 99.99% Uptime Verified`
        });
        break;

      case 'clear':
        setHistory([]);
        setInput('');
        return;

      case 'exit':
      case 'quit':
        onClose();
        return;

      default:
        newHistory.push({
          type: 'error',
          content: `Command not recognized: "${cmd}". Type "help" for valid commands.`
        });
    }

    setHistory(newHistory);
    setInput('');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="w-full max-w-3xl h-[520px] rounded-3xl bg-slate-950/95 border border-cyan-500/40 shadow-2xl shadow-cyan-950/80 flex flex-col overflow-hidden font-mono text-xs text-slate-200">
        
        {/* Terminal Header Bar */}
        <div className="flex items-center justify-between px-5 py-3.5 bg-slate-900/90 border-b border-cyan-500/20">
          <div className="flex items-center gap-2.5">
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block cursor-pointer" onClick={onClose} />
              <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
            </div>
            <span className="text-slate-400 font-semibold flex items-center gap-1.5 ml-2">
              <TerminalIcon className="w-3.5 h-3.5 text-cyan-400" />
              rafif@sec-gateway:~ (zsh)
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-[10px] text-cyan-400 px-2 py-0.5 rounded bg-cyan-950/60 border border-cyan-500/30">
              STATUS: READY
            </span>
            <button
              onClick={onClose}
              className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Terminal Output Area */}
        <div className="flex-1 p-5 overflow-y-auto space-y-3 font-mono leading-relaxed select-text">
          {history.map((item, idx) => (
            <div key={idx} className="whitespace-pre-wrap">
              {item.type === 'user' && (
                <span className="text-cyan-400 font-bold">{item.content}</span>
              )}
              {item.type === 'system' && (
                <span className="text-slate-400">{item.content}</span>
              )}
              {item.type === 'output' && (
                <span className="text-emerald-300">{item.content}</span>
              )}
              {item.type === 'error' && (
                <span className="text-rose-400">{item.content}</span>
              )}
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        {/* Terminal Input Bar */}
        <form onSubmit={handleCommand} className="flex items-center gap-2 px-5 py-3.5 bg-slate-900/60 border-t border-cyan-500/20">
          <span className="text-cyan-400 font-bold">$</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type 'help', 'skills', 'experience', 'certs', 'scan'..."
            className="flex-1 bg-transparent text-slate-100 placeholder-slate-600 focus:outline-none font-mono"
            autoComplete="off"
            spellCheck="false"
          />
          <button
            type="submit"
            className="px-2.5 py-1 rounded-lg bg-cyan-500/20 hover:bg-cyan-500/30 border border-cyan-500/30 text-cyan-300 text-[11px]"
          >
            Run
          </button>
        </form>

      </div>
    </div>
  );
}

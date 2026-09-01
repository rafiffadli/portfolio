import React, { useState } from 'react';
import { Mail, Linkedin, Copy, Check, X, Send, MapPin, Sparkles, Shield, Loader2, AlertCircle } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function ContactModal({ isOpen, onClose }) {
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    setLoading(true);
    setError('');

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${personalInfo.email}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `Transmission from Portfolio: ${formData.name}`,
          _template: 'table',
          _captcha: 'false',
        }),
      });

      const data = await response.json();

      if (response.ok && (data.success === true || data.success === 'true' || data.message)) {
        setSubmitted(true);
        setTimeout(() => {
          setSubmitted(false);
          setFormData({ name: '', email: '', message: '' });
          onClose();
        }, 3000);
      } else {
        setError(data.message || 'Failed to transmit message. Please try again.');
      }
    } catch (err) {
      setError('Network error occurred while transmitting message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="w-full max-w-lg rounded-3xl bg-slate-950/95 border border-cyan-500/40 shadow-2xl shadow-cyan-950/90 p-6 sm:p-8 relative overflow-hidden">
        
        {/* Background accent blur */}
        <div className="absolute -top-20 -right-20 w-48 h-48 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-900 border border-transparent hover:border-slate-800 transition-all"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-11 h-11 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
            <Mail className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-xl font-display font-bold text-white">Get in Touch</h3>
            <p className="text-xs font-mono text-cyan-400">Let's discuss security, risk & network infrastructure</p>
          </div>
        </div>

        {/* Quick Copy & Social Cards */}
        <div className="space-y-3 mb-6">
          <div className="flex items-center justify-between p-3.5 rounded-2xl bg-slate-900/80 border border-slate-800/80">
            <div className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-cyan-400" />
              <div>
                <div className="text-[10px] font-mono text-slate-500 uppercase">Direct Email</div>
                <div className="text-xs font-mono text-slate-200">{personalInfo.email}</div>
              </div>
            </div>
            <button
              onClick={copyEmail}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 text-cyan-300 text-xs font-mono transition-colors"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy</span>
                </>
              )}
            </button>
          </div>

          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-between p-3.5 rounded-2xl bg-slate-900/80 border border-slate-800/80 hover:border-blue-500/40 hover:bg-slate-900 transition-all group"
          >
            <div className="flex items-center gap-3">
              <Linkedin className="w-4 h-4 text-blue-400" />
              <div>
                <div className="text-[10px] font-mono text-slate-500 uppercase">LinkedIn Profile</div>
                <div className="text-xs font-mono text-slate-200 group-hover:text-blue-300 transition-colors">
                  linkedin.com/in/{personalInfo.linkedinUsername}
                </div>
              </div>
            </div>
            <span className="text-xs text-blue-400 group-hover:translate-x-1 transition-transform font-mono">
              Visit &rarr;
            </span>
          </a>
        </div>

        {/* Message Form */}
        {submitted ? (
          <div className="p-6 rounded-2xl bg-emerald-950/30 border border-emerald-500/30 text-center space-y-2 animate-in fade-in">
            <Shield className="w-8 h-8 text-emerald-400 mx-auto" />
            <h4 className="text-sm font-bold text-emerald-300 font-display">Transmission Received</h4>
            <p className="text-xs text-slate-300">
              Thank you! Rafif will review your message and reply promptly.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3 font-sans">
            {error && (
              <div className="p-3 rounded-xl bg-red-950/40 border border-red-500/40 text-xs text-red-300 font-mono flex items-center gap-2 animate-in fade-in">
                <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
                <span>{error}</span>
              </div>
            )}
            <div>
              <label className="block text-xs font-mono text-slate-400 mb-1">Your Name</label>
              <input
                type="text"
                required
                disabled={loading}
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Alex Mercer"
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-200 placeholder-slate-600 focus:outline-none focus:border-cyan-500/60 font-mono disabled:opacity-60"
              />
            </div>

            <div>
              <label className="block text-xs font-mono text-slate-400 mb-1">Your Email</label>
              <input
                type="email"
                required
                disabled={loading}
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="alex@enterprise.com"
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-200 placeholder-slate-600 focus:outline-none focus:border-cyan-500/60 font-mono disabled:opacity-60"
              />
            </div>

            <div>
              <label className="block text-xs font-mono text-slate-400 mb-1">Message</label>
              <textarea
                rows="3"
                required
                disabled={loading}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Inquiring about IT Security & Network Engineering opportunities..."
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-200 placeholder-slate-600 focus:outline-none focus:border-cyan-500/60 font-sans resize-none disabled:opacity-60"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-semibold text-xs font-mono flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.01] active:scale-[0.99] transition-all disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {loading ? (
                <>
                  <Loader2 className="w-3.5 h-3.5 animate-spin" />
                  <span>Transmitting...</span>
                </>
              ) : (
                <>
                  <Send className="w-3.5 h-3.5" />
                  <span>Transmit Message</span>
                </>
              )}
            </button>
          </form>
        )}

      </div>
    </div>
  );
}

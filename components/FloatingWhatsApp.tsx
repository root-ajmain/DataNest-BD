'use client';

import { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';

const WHATSAPP_URL = 'https://wa.me/8801804277420?text=Hi%20DataNest%20BD%2C%20I%20want%20to%20get%20started';

export default function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 1500);
    const tooltip = setTimeout(() => setShowTooltip(true), 4000);
    return () => { clearTimeout(timer); clearTimeout(tooltip); };
  }, []);

  return (
    <div className={`fixed bottom-6 right-6 z-[100] flex flex-col items-end gap-3 transition-all duration-500 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
      {/* Tooltip */}
      {showTooltip && (
        <div className="relative glass-dark rounded-2xl px-4 py-3 shadow-2xl shadow-black/50 max-w-[220px] animate-fade-in">
          <button
            onClick={() => setShowTooltip(false)}
            className="absolute -top-2 -right-2 w-5 h-5 bg-slate-700 rounded-full flex items-center justify-center text-slate-400 hover:text-white text-xs transition-colors"
            aria-label="Close tooltip"
          >
            <X className="w-3 h-3" />
          </button>
          <p className="text-xs font-semibold text-white mb-0.5">Chat with us!</p>
          <p className="text-xs text-slate-400">Get a free consultation today</p>
          {/* Arrow */}
          <div className="absolute -bottom-1.5 right-5 w-3 h-3 bg-[rgba(15,23,42,0.8)] rotate-45 border-r border-b border-white/[0.08]" />
        </div>
      )}

      {/* Button */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="float-whatsapp group"
        onClick={() => setShowTooltip(false)}
      >
        {/* Pulse rings */}
        <span className="absolute w-full h-full rounded-full animate-ping opacity-20 bg-emerald-400" />
        <span className="absolute w-full h-full rounded-full animate-ping opacity-10 bg-emerald-400 animation-delay-300" />
        <MessageCircle className="w-7 h-7 text-white relative z-10" />
      </a>
    </div>
  );
}

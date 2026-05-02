'use client';

import { useEffect, useState, useCallback } from 'react';
import { X, Tag, ArrowRight } from 'lucide-react';

const WHATSAPP_URL =
  'https://wa.me/8801804277420?text=Hi%20DataNest%20BD%2C%20I%20want%20to%20claim%20the%2050%25%20discount%20on%20WhatsApp%20API%20subscription';

const SESSION_SHOWN_KEY = 'dnbd_popup_shown';       // sessionStorage — once per tab session
const LS_CONVERTED_KEY  = 'dnbd_popup_converted';   // localStorage  — 30-day suppress after click

// Show after 20s on first page load. If already dismissed this session or
// converted in the last 30 days, never show.
const SHOW_DELAY_MS = 20_000;
const CONVERT_SUPPRESS_DAYS = 30;

function isConvertedRecently(): boolean {
  try {
    const ts = Number(localStorage.getItem(LS_CONVERTED_KEY) ?? 0);
    if (!ts) return false;
    return Date.now() - ts < CONVERT_SUPPRESS_DAYS * 86_400_000;
  } catch {
    return false;
  }
}

export default function DiscountPopup() {
  const [visible, setVisible] = useState(false);
  const [entered, setEntered] = useState(false);

  useEffect(() => {
    // Don't show if already seen this session or recently converted
    if (sessionStorage.getItem(SESSION_SHOWN_KEY)) return;
    if (isConvertedRecently()) return;

    const timer = setTimeout(() => {
      setVisible(true);
      requestAnimationFrame(() => setEntered(true));
      sessionStorage.setItem(SESSION_SHOWN_KEY, '1');
    }, SHOW_DELAY_MS);

    return () => clearTimeout(timer);
  }, []);

  const dismiss = useCallback(() => {
    setEntered(false);
    setTimeout(() => setVisible(false), 280);
  }, []);

  const handleCTA = useCallback(() => {
    try { localStorage.setItem(LS_CONVERTED_KEY, String(Date.now())); } catch { /* noop */ }
    dismiss();
  }, [dismiss]);

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Exclusive discount offer"
      className="fixed inset-0 z-[200] flex items-end sm:items-center justify-center p-4 sm:p-6"
    >
      {/* Backdrop */}
      <div
        className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-280 ${
          entered ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={dismiss}
        aria-hidden="true"
      />

      {/* Card */}
      <div
        className={`relative w-full max-w-md rounded-3xl overflow-hidden shadow-2xl shadow-black/60 transition-all duration-280 ${
          entered ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-6 scale-95'
        }`}
        style={{
          background: 'linear-gradient(135deg, #0d1f35 0%, #091525 60%, #071020 100%)',
          border: '1px solid rgba(16,185,129,0.25)',
        }}
      >
        {/* Top glow strip */}
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-emerald-400/70 to-transparent" />

        {/* Close */}
        <button
          onClick={dismiss}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/[0.07] hover:bg-white/[0.14] flex items-center justify-center text-slate-400 hover:text-white transition-colors z-10"
          aria-label="Close offer"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="p-7">
          {/* Discount badge */}
          <div className="flex items-center gap-2 mb-4">
            <span className="inline-flex items-center gap-1.5 bg-gradient-to-r from-emerald-500 to-teal-500 text-black text-xs font-black px-3 py-1.5 rounded-full shadow-md shadow-emerald-900/40">
              <Tag className="w-3 h-3" />
              LIMITED TIME OFFER
            </span>
            <span className="text-xs text-slate-500">· Exclusive deal</span>
          </div>

          {/* Headline */}
          <h2 className="text-2xl sm:text-3xl font-black text-white leading-tight mb-2">
            Get <span className="text-emerald-400">50% Off</span>
            <br />
            WhatsApp API Plans
          </h2>
          <p className="text-sm text-slate-400 leading-relaxed mb-5">
            Official WhatsApp Business API starting at{' '}
            <span className="line-through text-slate-600">BDT 6,000</span>{' '}
            <strong className="text-white">BDT 3,000/month</strong>. Plus setup fee from{' '}
            <span className="line-through text-slate-600">BDT 2,000</span>{' '}
            <strong className="text-amber-400">to BDT 500</strong>.
          </p>

          {/* Savings pills */}
          <div className="flex flex-wrap gap-2 mb-6">
            {[
              { label: 'Basic Plan',  orig: '৳6,000',  disc: '৳3,000' },
              { label: 'Growth Plan', orig: '৳12,000', disc: '৳6,000' },
              { label: 'Setup Fee',   orig: '৳2,000',  disc: '৳500',  accent: true },
            ].map(({ label, orig, disc, accent }) => (
              <div
                key={label}
                className={`flex-1 min-w-[100px] rounded-xl px-3 py-2 border ${
                  accent
                    ? 'bg-amber-900/20 border-amber-500/20'
                    : 'bg-emerald-900/20 border-emerald-500/20'
                }`}
              >
                <p className="text-[10px] text-slate-500 uppercase tracking-wide mb-0.5">{label}</p>
                <p className="text-xs line-through text-slate-600">{orig}</p>
                <p className={`text-sm font-black ${accent ? 'text-amber-400' : 'text-emerald-400'}`}>
                  {disc}/mo
                </p>
              </div>
            ))}
          </div>

          {/* WhatsApp CTA */}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            onClick={handleCTA}
            className="flex items-center justify-center gap-2.5 w-full py-4 px-6 rounded-2xl font-bold text-black text-base transition-all active:scale-95 shadow-lg shadow-emerald-900/40"
            style={{ background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)' }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5 shrink-0"
              aria-hidden="true"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Claim Discount on WhatsApp
            <ArrowRight className="w-4 h-4 shrink-0" />
          </a>

          <p className="text-center text-[11px] text-slate-600 mt-3">
            Talk to our sales team · No commitment required
          </p>
        </div>
      </div>
    </div>
  );
}

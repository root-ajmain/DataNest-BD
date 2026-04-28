'use client';

import { useState, useRef, useEffect, FormEvent } from 'react';
import { ArrowRight, CheckCircle2, MessageCircle, Phone, Loader2, ChevronDown, Check } from 'lucide-react';

// ─── Config ───────────────────────────────────────────────────────────────────

const WEB_APP_URL =
  'https://script.google.com/macros/s/AKfycbxTyH3t2ucvqX0BzReSAr0JieUeEEMjXLcfwKO449w_tFedhJ-oNd-Pus1c2_7xPGY3/exec';

const WHATSAPP_URL =
  'https://wa.me/8801804277420?text=Hi%20DataNest%20BD%2C%20I%20want%20to%20get%20started';

const SERVICES = [
  'WhatsApp Business API',
  'Web Development',
  'SaaS Development',
  'Custom AI Agent',
  'Automation Workflow',
  'Digital Marketing',
  'Landing Page Design',
  'Facebook Business Setup',
  'Business Consultancy',
];

// ─── Multi-Select Dropdown ────────────────────────────────────────────────────

function ServiceMultiSelect({
  selected,
  onChange,
  error,
}: {
  selected: string[];
  onChange: (values: string[]) => void;
  error: boolean;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Close when clicking outside
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  function toggle(service: string) {
    if (selected.includes(service)) {
      onChange(selected.filter((s) => s !== service));
    } else {
      onChange([...selected, service]);
    }
  }

  const label =
    selected.length === 0
      ? 'Select services...'
      : selected.length === 1
      ? selected[0]
      : `${selected.length} services selected`;

  return (
    <div ref={ref} className="relative">
      {/* Trigger button */}
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className={`input-field w-full flex items-center justify-between text-left transition-all ${
          error ? 'border-red-500/60 focus:border-red-500/80' : ''
        } ${open ? 'border-blue-500/50 bg-blue-500/5' : ''}`}
      >
        <span className={selected.length === 0 ? 'text-slate-500' : 'text-slate-100'}>
          {label}
        </span>
        <ChevronDown
          className={`w-4 h-4 text-slate-500 shrink-0 transition-transform duration-200 ${
            open ? 'rotate-180' : ''
          }`}
        />
      </button>

      {/* Dropdown panel */}
      {open && (
        <div className="absolute z-50 top-full left-0 right-0 mt-1.5 rounded-xl border border-white/[0.1] shadow-2xl overflow-hidden"
          style={{ background: '#1A2332' }}>
          <div className="p-1.5 max-h-64 overflow-y-auto">
            {SERVICES.map((service) => {
              const checked = selected.includes(service);
              return (
                <button
                  key={service}
                  type="button"
                  onClick={() => toggle(service)}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-left transition-colors ${
                    checked
                      ? 'bg-blue-500/15 text-white'
                      : 'text-slate-300 hover:bg-white/[0.05] hover:text-white'
                  }`}
                >
                  <span
                    className={`w-4 h-4 rounded flex items-center justify-center shrink-0 border transition-colors ${
                      checked
                        ? 'bg-blue-500 border-blue-500'
                        : 'border-slate-600 bg-transparent'
                    }`}
                  >
                    {checked && <Check className="w-3 h-3 text-white" />}
                  </span>
                  {service}
                </button>
              );
            })}
          </div>
          {selected.length > 0 && (
            <div className="px-3 py-2 border-t border-white/[0.06] flex items-center justify-between">
              <span className="text-xs text-slate-500">{selected.length} selected</span>
              <button
                type="button"
                onClick={() => onChange([])}
                className="text-xs text-slate-500 hover:text-red-400 transition-colors"
              >
                Clear all
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function LeadCapture() {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');
  const [serviceError, setServiceError] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (loading) return;

    const form = e.currentTarget;
    const fd = new FormData(form);

    const fullName = (fd.get('fullName') as string ?? '').trim();
    const whatsappNumber = (fd.get('whatsappNumber') as string ?? '').trim();
    const emailAddress = (fd.get('emailAddress') as string ?? '').trim();
    const aboutBusiness = (fd.get('aboutBusiness') as string ?? '').trim();

    // Validate
    if (!fullName || !whatsappNumber) {
      setError('Please fill in your name and WhatsApp number.');
      return;
    }
    if (selectedServices.length === 0) {
      setServiceError(true);
      setError('Please select at least one service of interest.');
      return;
    }

    setLoading(true);
    setError('');
    setServiceError(false);

    const payload = {
      fullName,
      whatsappNumber,
      emailAddress,
      serviceOfInterest: selectedServices,
      aboutBusiness,
    };

    try {
      // Google Apps Script blocks cross-origin responses unless CORS headers are set.
      // Using mode:'no-cors' + Content-Type:'text/plain' makes it a "simple request"
      // (no preflight) so the POST actually reaches the sheet.
      // The response is opaque (unreadable) but the data IS stored.
      await fetch(WEB_APP_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify(payload),
      });

      setSuccess(true);
      form.reset();
      setSelectedServices([]);
    } catch {
      setError('Network error. Please try WhatsApp or email us directly.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="section-padding bg-[#080E1A] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse 80% 60% at 50% 100%, rgba(37,99,235,0.06), transparent)',
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* ── Left: value prop ─────────────────────────────────────── */}
          <div>
            <div className="section-label mb-4">Free Consultation</div>
            <h2 className="section-title mb-5">
              Ready to Scale?<br />
              <span className="text-gradient">Let&apos;s Talk Strategy.</span>
            </h2>
            <p className="text-lg text-slate-400 leading-relaxed mb-8">
              Fill out the form and our team will reach out within{' '}
              <strong className="text-white">4 business hours</strong>. No pushy sales calls — just a genuine
              conversation about your growth goals.
            </p>

            <div className="space-y-3 mb-8">
              {[
                'Free 30-min strategy call with a senior specialist',
                'Personalized solution roadmap for your business',
                'Transparent pricing — no hidden fees',
                'Follow-up resources tailored to your industry',
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span className="text-sm text-slate-300">{item}</span>
                </div>
              ))}
            </div>

            <div className="space-y-3">
              <p className="text-sm font-semibold text-slate-500 uppercase tracking-widest">
                Prefer direct contact?
              </p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 hover:border-emerald-500/40 transition-colors group"
              >
                <div className="w-10 h-10 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">Chat on WhatsApp</p>
                  <p className="text-xs text-slate-400">+880 1804 277420 — usually replies in minutes</p>
                </div>
                <ArrowRight className="w-4 h-4 text-emerald-400 ml-auto group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="tel:+8801804277420"
                className="flex items-center gap-3 p-4 rounded-xl bg-white/[0.03] border border-white/[0.07] hover:border-white/10 transition-colors group"
              >
                <div className="w-10 h-10 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">Call Us Directly</p>
                  <p className="text-xs text-slate-400">+880 1804 277420</p>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-500 ml-auto group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* ── Right: Form ──────────────────────────────────────────── */}
          <div>
            {success ? (
              <div className="p-8 rounded-2xl bg-emerald-900/20 border border-emerald-500/30 text-center">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-8 h-8 text-emerald-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Consultation Booked!</h3>
                <p className="text-slate-400 mb-6">
                  Thank you! Our team will reach out within 4 business hours. You can also WhatsApp us now
                  for a faster response.
                </p>
                <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="btn-primary inline-flex">
                  <MessageCircle className="w-4 h-4" />
                  Chat on WhatsApp
                </a>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="p-6 sm:p-8 rounded-2xl bg-white/[0.03] border border-white/[0.07] space-y-4"
              >
                <h3 className="text-xl font-bold text-white mb-2">Book Your Free Consultation</h3>

                {/* Name + Phone */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1.5">
                      Full Name <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      required
                      placeholder="Your full name"
                      className="input-field"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1.5">
                      WhatsApp Number <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="tel"
                      name="whatsappNumber"
                      required
                      placeholder="01XXXXXXXXX"
                      className="input-field"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1.5">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="emailAddress"
                    placeholder="your@email.com"
                    className="input-field"
                  />
                </div>

                {/* Services multi-select */}
                <div>
                  <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1.5">
                    Service of Interest <span className="text-red-400">*</span>
                    <span className="ml-2 normal-case font-normal text-slate-600">(choose one or more)</span>
                  </label>
                  <ServiceMultiSelect
                    selected={selectedServices}
                    onChange={(v) => {
                      setSelectedServices(v);
                      if (v.length > 0) setServiceError(false);
                    }}
                    error={serviceError}
                  />
                  {/* Show selected tags */}
                  {selectedServices.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mt-2">
                      {selectedServices.map((s) => (
                        <span
                          key={s}
                          className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-blue-500/15 border border-blue-500/25 text-blue-300"
                        >
                          {s}
                          <button
                            type="button"
                            onClick={() => setSelectedServices(selectedServices.filter((x) => x !== s))}
                            className="text-blue-400 hover:text-red-400 transition-colors leading-none"
                            aria-label={`Remove ${s}`}
                          >
                            ×
                          </button>
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* About business */}
                <div>
                  <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1.5">
                    Tell Us About Your Business
                  </label>
                  <textarea
                    name="aboutBusiness"
                    rows={3}
                    placeholder="Brief description of your business and what you're trying to achieve..."
                    className="input-field resize-none"
                  />
                </div>

                {/* Error */}
                {error && (
                  <p className="text-sm text-red-400 bg-red-900/20 border border-red-500/20 rounded-lg px-4 py-3">
                    {error}
                  </p>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={loading}
                  className="btn-primary w-full justify-center py-4 text-base disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      Book Free Consultation
                      <ArrowRight className="w-5 h-5" />
                    </>
                  )}
                </button>

                <p className="text-xs text-slate-600 text-center">
                  By submitting, you agree to our{' '}
                  <a href="/privacy-policy" className="text-slate-500 hover:text-slate-400 underline">
                    Privacy Policy
                  </a>
                  . No spam, ever.
                </p>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}

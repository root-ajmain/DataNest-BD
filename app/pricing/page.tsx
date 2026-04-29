import type { Metadata } from 'next';
import Link from 'next/link';
import { Check, Zap, ArrowRight, MessageCircle } from 'lucide-react';
import WhatsAppPricing from '@/components/sections/WhatsAppPricing';
import { SERVICES } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Pricing — DataNest BD | WhatsApp API, Web Development & AI Bangladesh',
  description:
    'Transparent pricing for WhatsApp API, Web Development, AI Automation, and Digital Marketing services in Bangladesh. No hidden fees.',
  alternates: { canonical: 'https://www.datanestbd.com/pricing' },
};

const principles = [
  { icon: '✓', title: 'Round Numbers', desc: '3K, 6K, 18K, 24K' },
  { icon: '✓', title: '0% Meta Markup', desc: 'API charges at cost' },
  { icon: '✓', title: 'Month-to-Month', desc: 'No lock-in contracts' },
  { icon: '✓', title: 'Local Payments', desc: 'bKash / Nagad / Bank' },
];

const faqs = [
  {
    q: "What's included in the BDT 500 setup fee?",
    a: "WhatsApp number onboarding and Meta verification, initial platform configuration, comprehensive training (Bangla/English, 1–2 hours), and basic chatbot template installation. After setup you pay only the monthly platform fee.",
  },
  {
    q: 'When should I choose Elite over Growth?',
    a: 'Choose Elite if you need multiple WhatsApp numbers, a team larger than 5 people, a custom AI agent without paying BDT 15K–40K separately, or a dedicated account manager. Elite includes a custom AI agent worth BDT 25K+, making it better value for 3+ month commitments.',
  },
  {
    q: "What's the difference between Elite and Scale?",
    a: 'Elite (BDT 18,000/mo): 10 members, 5 numbers, 55K subscribers, priority support (business hours). Scale (BDT 24,000/mo): 50 members, 10 numbers, 105K subscribers, 24/7 support, 99.9% SLA, quarterly strategy reviews. Scale is for large enterprises with multiple branches.',
  },
  {
    q: 'How much does a custom AI agent cost?',
    a: 'Simple (1–2 integrations): BDT 15,000–25,000. Medium (3–5 integrations): BDT 25,000–40,000. Complex (custom logic, multiple APIs): BDT 40,000+. All include requirement gathering, development, testing, documentation, and 30-day post-launch support.',
  },
  {
    q: 'Do you provide support and training in Bangla?',
    a: 'Yes — all onboarding, training, and support are available in both Bangla and English. We understand the local context and provide practical guidance for Bangladesh business operations.',
  },
];

export default function PricingPage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section className="pt-32 pb-16 bg-gradient-hero-mesh">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="section-label mx-auto mb-5">
            <Zap className="w-4 h-4" />
            Transparent Pricing
          </div>
          <h1 className="section-title text-5xl mb-5">
            Simple, Honest{' '}
            <span className="text-gradient">Pricing</span>
          </h1>
          <p className="section-subtitle mx-auto mb-10">
            No hidden fees. No complicated tiers. Just clean numbers that scale with your business.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {principles.map(({ icon, title, desc }) => (
              <div
                key={title}
                className="rounded-2xl bg-white/[0.03] border border-white/[0.07] px-4 py-5 text-center"
              >
                <div className="text-2xl text-emerald-400 mb-2">{icon}</div>
                <p className="text-sm font-semibold text-slate-100 mb-1">{title}</p>
                <p className="text-xs text-slate-500">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Setup Fee ────────────────────────────────────────────── */}
      <section className="py-8 bg-gradient-brand">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <p className="text-xs uppercase tracking-widest text-white/70 mb-1">One-Time Only</p>
          <h2 className="text-2xl font-bold mb-1">Setup Fee — BDT 500</h2>
          <p className="text-sm text-white/80 max-w-xl mx-auto">
            Includes: WhatsApp onboarding · Meta verification · platform training · basic chatbot template · free ongoing technical support
          </p>
        </div>
      </section>

      {/* ── WhatsApp API Pricing ──────────────────────────────────── */}
      <WhatsAppPricing />

      {/* ── Other Services ───────────────────────────────────────── */}
      <section className="section-padding bg-[#0A1020]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="section-label mx-auto mb-4">Other Services</div>
            <h2 className="section-title">
              More Ways We Can{' '}
              <span className="text-gradient">Help You Grow</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.filter((s) => s.id !== 'whatsapp-api').map((service) => (
              <div
                key={service.id}
                className="card-base p-6 flex flex-col"
              >
                <div className="text-3xl mb-4">{service.icon}</div>
                <h3 className="text-lg font-bold text-white mb-2">{service.name}</h3>
                <p className="text-sm text-slate-400 mb-4 flex-1">{service.shortDescription}</p>

                <div className="mb-5">
                  <p className="text-xs uppercase tracking-wider text-slate-500 mb-1">Starting from</p>
                  <p className="text-2xl font-black text-blue-400">
                    {service.pricing.starting > 0
                      ? `BDT ${service.pricing.starting.toLocaleString()}`
                      : service.pricing.model}
                  </p>
                </div>

                <ul className="space-y-1.5 mb-6">
                  {service.features.slice(0, 3).map((f) => (
                    <li key={f} className="flex items-start gap-2 text-xs text-slate-300">
                      <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      {f}
                    </li>
                  ))}
                </ul>

                <Link
                  href={`/services/${service.slug}`}
                  className="inline-flex items-center gap-1 text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors group mt-auto"
                >
                  Learn more
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────── */}
      <section className="section-padding bg-[#080E1A]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="section-label mx-auto mb-4">
              <MessageCircle className="w-4 h-4" />
              FAQ
            </div>
            <h2 className="section-title">Pricing Questions</h2>
          </div>

          <div className="space-y-4">
            {faqs.map(({ q, a }) => (
              <div key={q} className="faq-item p-6">
                <h3 className="text-base font-semibold text-white mb-3">{q}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────── */}
      <section className="section-padding bg-gradient-hero-mesh">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="section-title mb-4">
            Not Sure Which Plan?
          </h2>
          <p className="section-subtitle mx-auto mb-8">
            Book a free 30-minute consultation. We'll recommend the right solution for your business and budget.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary">
              Book Free Consultation <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="https://wa.me/8801804277420?text=Hi%20DataNest%20BD%2C%20I%20want%20to%20know%20about%20pricing"
              target="_blank"
              rel="noreferrer"
              className="btn-secondary"
            >
              WhatsApp Us Now
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

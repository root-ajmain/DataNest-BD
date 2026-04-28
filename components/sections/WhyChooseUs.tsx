import Link from 'next/link';
import { ShieldCheck, Headset, Zap, TrendingUp, Code2, Users, ArrowRight } from 'lucide-react';

const reasons = [
  {
    icon: ShieldCheck,
    title: 'Official Meta-Approved Partner',
    desc: 'We are an authorized WhatsApp Business API provider — your number onboarding, template approval, and API access are handled through official channels. No grey area, no risk.',
    color: 'text-emerald-400',
    bg: 'bg-emerald-500/10 border-emerald-500/20',
  },
  {
    icon: Headset,
    title: 'Dedicated Bangladeshi Support Team',
    desc: 'A local expert team that speaks your language — literally. We provide support in Bangla and English, and we know the unique challenges of the Bangladesh market.',
    color: 'text-blue-400',
    bg: 'bg-blue-500/10 border-blue-500/20',
  },
  {
    icon: TrendingUp,
    title: 'Measurable ROI, Not Vanity Metrics',
    desc: 'Every service we deliver is tied to a business outcome: leads generated, revenue increased, cost per acquisition reduced. We show you the numbers, not just the activity.',
    color: 'text-amber-400',
    bg: 'bg-amber-500/10 border-amber-500/20',
  },
  {
    icon: Zap,
    title: '48-Hour Fast Setup Guarantee',
    desc: 'From onboarding call to live system — we move fast. Standard WhatsApp API setups are live within 48 hours. Web projects get a live staging environment within 72 hours.',
    color: 'text-purple-400',
    bg: 'bg-purple-500/10 border-purple-500/20',
  },
  {
    icon: Code2,
    title: 'Full-Stack Technical Expertise',
    desc: 'We don\'t outsource. Our in-house team covers front-end, back-end, AI, automation, and marketing — giving you one accountable partner for your entire digital growth stack.',
    color: 'text-cyan-400',
    bg: 'bg-cyan-500/10 border-cyan-500/20',
  },
  {
    icon: Users,
    title: '100+ Clients Trust Us',
    desc: 'From small businesses to growing enterprises across Bangladesh — our 99% client retention rate reflects the quality and consistency of what we deliver.',
    color: 'text-pink-400',
    bg: 'bg-pink-500/10 border-pink-500/20',
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="section-padding bg-[#080E1A] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-[0.015]" style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-blue-600/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* Left: Header + social proof */}
          <div className="lg:sticky lg:top-28">
            <div className="section-label mb-4">Why DataNest BD</div>
            <h2 className="section-title mb-5">
              We Don&apos;t Just Deliver Work.<br />
              <span className="text-gradient">We Drive Results.</span>
            </h2>
            <p className="text-lg text-slate-400 leading-relaxed mb-8">
              Most agencies hand you a deliverable and disappear. We stay invested in your outcome — because your growth is what builds our reputation.
            </p>

            {/* Client proof */}
            <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/[0.07] mb-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="text-4xl font-bold font-heading text-gradient">99%</div>
                <div>
                  <p className="font-semibold text-white">Client Retention Rate</p>
                  <p className="text-sm text-slate-500">Over 2 years of operation</p>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-3 text-center">
                {[
                  { num: '100+', label: 'Clients' },
                  { num: '2.4M+', label: 'Messages' },
                  { num: '340%', label: 'Avg ROI' },
                ].map(({ num, label }) => (
                  <div key={label} className="py-2">
                    <div className="text-xl font-bold text-white font-heading">{num}</div>
                    <div className="text-xs text-slate-500">{label}</div>
                  </div>
                ))}
              </div>
            </div>

            <Link href="/case-studies" className="btn-secondary text-sm">
              View Our Case Studies <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Right: reasons list */}
          <div className="space-y-4">
            {reasons.map(({ icon: Icon, title, desc, color, bg }) => (
              <div
                key={title}
                className="group flex gap-4 p-5 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:border-white/10 hover:bg-white/[0.04] transition-all duration-300"
              >
                <div className={`w-11 h-11 rounded-xl ${bg} border flex items-center justify-center shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={`w-5 h-5 ${color}`} />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-white mb-1.5">{title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

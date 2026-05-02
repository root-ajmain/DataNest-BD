import Link from 'next/link';
import { ArrowRight, PhoneCall, Settings2, Rocket, TrendingUp } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: PhoneCall,
    title: 'Discovery Call',
    desc: 'Book a free 30-minute consultation. We learn your business goals, current pain points, and where automation or development can unlock the most value.',
    detail: 'No sales pressure. Just clarity on what you actually need.',
    color: 'text-blue-400',
    bg: 'bg-blue-500/10 border-blue-500/20',
    line: 'from-blue-500/40 to-cyan-500/20',
  },
  {
    number: '02',
    icon: Settings2,
    title: 'Strategy & Setup',
    desc: 'We design a tailored solution, configure your systems, set up integrations, and get everything tested before going live.',
    detail: 'Standard WhatsApp API goes live in 48 hours.',
    color: 'text-cyan-400',
    bg: 'bg-cyan-500/10 border-cyan-500/20',
    line: 'from-cyan-500/40 to-emerald-500/20',
  },
  {
    number: '03',
    icon: Rocket,
    title: 'Launch & Activate',
    desc: 'We deploy your solution — whether that\'s a WhatsApp campaign, a new website, or an AI agent — and make sure it runs flawlessly from day one.',
    detail: 'Full team training included in Bangla and English.',
    color: 'text-emerald-400',
    bg: 'bg-emerald-500/10 border-emerald-500/20',
    line: 'from-emerald-500/40 to-amber-500/20',
  },
  {
    number: '04',
    icon: TrendingUp,
    title: 'Optimize & Scale',
    desc: 'Once live, we monitor performance, run experiments, and optimize continuously — turning your digital systems into compounding growth engines.',
    detail: 'Monthly reports and ongoing strategic support.',
    color: 'text-amber-400',
    bg: 'bg-amber-500/10 border-amber-500/20',
    line: null,
  },
];

export default function ProcessSection() {
  return (
    <section className="section-padding bg-[#0F172A] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/15 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/15 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="section-label mx-auto mb-4">How It Works</div>
          <h2 className="section-title">
            From First Call to{' '}
            <span className="text-gradient">Full Launch</span>
          </h2>
          <p className="section-subtitle mx-auto mt-4">
            A proven, structured process that gets your systems live fast — and keeps improving them over time.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          {steps.map(({ number, icon: Icon, title, desc, detail, color, bg }) => (
            <div key={number} className="relative group">
              <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:border-white/10 hover:bg-white/[0.04] transition-all duration-300 h-full flex flex-col">
                {/* Step number + icon */}
                <div className="flex items-start gap-3 mb-5">
                  <div className={`w-12 h-12 rounded-xl ${bg} border flex items-center justify-center shrink-0`}>
                    <Icon className={`w-6 h-6 ${color}`} />
                  </div>
                  <div className="text-right flex-1">
                    <span className="text-4xl font-black text-white/5 font-heading">{number}</span>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed mb-4 flex-1">{desc}</p>

                {/* Detail highlight */}
                <div className="flex items-start gap-2 p-3 rounded-xl bg-white/[0.03] border border-white/[0.05]">
                  <div className={`w-1.5 h-1.5 rounded-full ${color.replace('text-', 'bg-')} shrink-0 mt-1.5`} />
                  <p className="text-xs text-slate-500 leading-relaxed">{detail}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link href="/contact" className="btn-primary inline-flex">
            Start Your Journey Today
            <ArrowRight className="w-5 h-5" />
          </Link>
          <p className="text-sm text-slate-500 mt-3">Free consultation · No obligation · 48hr setup</p>
        </div>
      </div>
    </section>
  );
}

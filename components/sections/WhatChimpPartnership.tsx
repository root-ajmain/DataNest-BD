import { Settings2, Headset, BookOpen, Wallet, Globe } from 'lucide-react';

const features = [
  {
    icon: Settings2,
    title: 'Local Setup Done For You',
    desc: 'We configure your entire WhatChimp account, WhatsApp number, and chatbots — so you start with a ready system, not a blank dashboard.',
    color: 'text-emerald-400',
    bg: 'bg-emerald-500/10 border-emerald-500/20',
  },
  {
    icon: Headset,
    title: '24/7 Bangladesh-Timezone Support',
    desc: 'Our local support team is available around the clock — in Bangla and English. No international tickets, no time-zone delays.',
    color: 'text-blue-400',
    bg: 'bg-blue-500/10 border-blue-500/20',
  },
  {
    icon: BookOpen,
    title: 'Platform Training in Bangla',
    desc: 'Full hands-on training for your team on how to use every feature of the platform — included in every plan at no extra cost.',
    color: 'text-purple-400',
    bg: 'bg-purple-500/10 border-purple-500/20',
  },
  {
    icon: Wallet,
    title: 'BDT Pricing, Local Payment',
    desc: 'Pay in Taka via bKash, Nagad, Rocket, or bank transfer. No USD conversion, no international transaction fees.',
    color: 'text-amber-400',
    bg: 'bg-amber-500/10 border-amber-500/20',
  },
];

export default function WhatChimpPartnership() {
  return (
    <section className="section-padding bg-[#060C18] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/10 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-emerald-600/4 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Partnership banner */}
        <div className="rounded-3xl border border-emerald-500/20 bg-emerald-950/20 p-8 sm:p-10 mb-10">
          <div className="flex flex-col lg:flex-row lg:items-start gap-8">
            {/* Left: heading + text */}
            <div className="flex-1">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-xs font-semibold text-emerald-400 uppercase tracking-wider mb-5">
                <Globe className="w-3.5 h-3.5" />
                Official Authorized Partner · Bangladesh
              </div>

              <h2 className="text-2xl sm:text-3xl font-black text-white font-heading leading-tight mb-4">
                Powered by WhatChimp —{' '}
                <span className="text-gradient">The World&apos;s Most Affordable WhatsApp API Platform</span>
              </h2>

              <p className="text-slate-400 leading-relaxed mb-3">
                DataNest BD is an authorized WhatChimp Partner for Bangladesh. WhatChimp is a Meta-certified WhatsApp Business API platform trusted by businesses in <strong className="text-slate-200">90+ countries worldwide</strong>.
              </p>
              <p className="text-slate-400 leading-relaxed">
                By choosing DataNest BD, you get WhatChimp&apos;s globally proven platform combined with dedicated local service that no global platform can provide:
              </p>
            </div>

            {/* Right: platform badge */}
            <div className="shrink-0 flex flex-col items-center justify-center gap-2 p-6 rounded-2xl bg-white/[0.03] border border-white/[0.06] min-w-[160px]">
              <div className="w-14 h-14 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center mb-1">
                <Globe className="w-7 h-7 text-emerald-400" />
              </div>
              <p className="text-sm font-bold text-white text-center">WhatChimp</p>
              <p className="text-xs text-slate-500 text-center">Meta-Certified Platform</p>
              <div className="flex items-center gap-1.5 mt-1">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span className="text-xs text-emerald-400 font-medium">90+ Countries</span>
              </div>
            </div>
          </div>
        </div>

        {/* Feature grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
          {features.map(({ icon: Icon, title, desc, color, bg }) => (
            <div
              key={title}
              className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-white/10 hover:bg-white/[0.04] transition-all duration-300 group"
            >
              <div className={`w-11 h-11 rounded-xl ${bg} border flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <Icon className={`w-5 h-5 ${color}`} />
              </div>
              <h3 className="text-sm font-bold text-white mb-2 leading-snug">{title}</h3>
              <p className="text-xs text-slate-400 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        {/* Footer note */}
        <p className="text-center text-xs text-slate-600">
          WhatChimp operates globally. DataNest BD makes it work locally for you.
        </p>
      </div>
    </section>
  );
}

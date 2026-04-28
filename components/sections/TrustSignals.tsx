import { ShieldCheck, Star, Users, Zap, Award, Clock } from 'lucide-react';

const stats = [
  { value: '100+', label: 'Happy Clients', icon: Users, color: 'text-blue-400', bg: 'bg-blue-500/10 border-blue-500/20' },
  { value: '2.4M+', label: 'Messages Sent', icon: Zap, color: 'text-emerald-400', bg: 'bg-emerald-500/10 border-emerald-500/20' },
  { value: '340%', label: 'Average ROI', icon: Star, color: 'text-amber-400', bg: 'bg-amber-500/10 border-amber-500/20' },
  { value: '48h', label: 'Fast Onboarding', icon: Clock, color: 'text-purple-400', bg: 'bg-purple-500/10 border-purple-500/20' },
  { value: '99%', label: 'Client Retention', icon: Award, color: 'text-cyan-400', bg: 'bg-cyan-500/10 border-cyan-500/20' },
  { value: '24/7', label: 'Support Available', icon: ShieldCheck, color: 'text-pink-400', bg: 'bg-pink-500/10 border-pink-500/20' },
];

const trustedTech = [
  { name: 'Meta / WhatsApp', desc: 'Official BSP' },
  { name: 'Next.js', desc: 'Frontend' },
  { name: 'OpenAI', desc: 'AI Models' },
  { name: 'Shopify', desc: 'E-commerce' },
  { name: 'WooCommerce', desc: 'E-commerce' },
  { name: 'Zapier', desc: 'Automation' },
  { name: 'Google Ads', desc: 'Marketing' },
  { name: 'Facebook Ads', desc: 'Marketing' },
];

export default function TrustSignals() {
  return (
    <section className="relative py-16 lg:py-20 bg-[#080E1A] overflow-hidden">
      {/* Divider top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-14">
          {stats.map(({ value, label, icon: Icon, color, bg }) => (
            <div
              key={label}
              className="flex flex-col items-center text-center p-4 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:border-white/10 transition-all"
            >
              <div className={`w-10 h-10 rounded-xl ${bg} border flex items-center justify-center mb-3`}>
                <Icon className={`w-5 h-5 ${color}`} />
              </div>
              <div className={`text-2xl font-bold font-heading ${color} mb-0.5`}>{value}</div>
              <div className="text-xs text-slate-500 font-medium">{label}</div>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="divider-gradient mb-10" />

        {/* Trusted Technologies */}
        <div className="text-center mb-8">
          <p className="text-xs font-semibold text-slate-600 uppercase tracking-widest">Integrates & Works With</p>
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          {trustedTech.map(({ name, desc }) => (
            <div
              key={name}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.06] hover:border-white/10 transition-colors"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-400 to-emerald-400" />
              <span className="text-sm font-semibold text-slate-300">{name}</span>
              <span className="text-xs text-slate-600">· {desc}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Divider bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent" />
    </section>
  );
}

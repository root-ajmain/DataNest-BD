import type { Metadata } from 'next';
import Link from 'next/link';
import { Megaphone, ArrowRight, CheckCircle2, BarChart3, Target, TrendingDown, MessageCircle } from 'lucide-react';
import LeadCapture from '@/components/sections/LeadCapture';
import FinalCTA from '@/components/sections/FinalCTA';

export const metadata: Metadata = {
  title: 'Digital Marketing Bangladesh — Facebook & Google Ads Agency | DataNest BD',
  description: 'Data-driven digital marketing in Bangladesh. Facebook Ads, Google Ads, lead generation, and ROI optimization. Transparent reporting, real results.',
  keywords: ['Digital Marketing Bangladesh', 'Facebook Ads Bangladesh', 'Google Ads Dhaka', 'Lead generation Bangladesh', 'Performance marketing Bangladesh'],
  alternates: { canonical: 'https://www.datanestbd.com/services/digital-marketing' },
};

const services = [
  { icon: Target, title: 'Facebook & Instagram Ads', desc: 'Hyper-targeted Meta campaigns for lead generation, e-commerce sales, app installs, and brand awareness. Pixel setup, CAPI, and retargeting included.', color: 'text-blue-400', bg: 'bg-blue-500/10 border-blue-500/20' },
  { icon: BarChart3, title: 'Google Ads (PPC & Display)', desc: 'Search, Display, Shopping, and YouTube campaigns engineered to capture high-intent traffic and convert at the lowest possible cost.', color: 'text-amber-400', bg: 'bg-amber-500/10 border-amber-500/20' },
  { icon: TrendingDown, title: 'Conversion Rate Optimization', desc: 'Systematic A/B testing, landing page optimization, and funnel analysis — turning your existing traffic into more revenue without increasing ad spend.', color: 'text-emerald-400', bg: 'bg-emerald-500/10 border-emerald-500/20' },
  { icon: Megaphone, title: 'Lead Generation Campaigns', desc: 'Full-funnel lead gen campaigns from creative to landing page to nurture — designed to deliver qualified, ready-to-buy leads for your sales team.', color: 'text-purple-400', bg: 'bg-purple-500/10 border-purple-500/20' },
];

export default function DigitalMarketingPage() {
  return (
    <>
      <section className="relative pt-32 pb-20 bg-gradient-hero-mesh overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-orange-600/8 rounded-full blur-3xl pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <nav className="flex items-center gap-2 text-sm text-slate-500 mb-8">
              <Link href="/" className="hover:text-slate-300 transition-colors">Home</Link><span>/</span>
              <Link href="/services" className="hover:text-slate-300 transition-colors">Services</Link><span>/</span>
              <span className="text-slate-300">Digital Marketing</span>
            </nav>
            <div className="section-label mb-5"><Megaphone className="w-4 h-4" />Digital Marketing Bangladesh</div>
            <h1 className="text-5xl sm:text-6xl font-black text-white font-heading leading-[1.1] mb-6">
              Marketing That Pays<br /><span className="text-gradient">For Itself</span>
            </h1>
            <p className="text-xl text-slate-400 leading-relaxed mb-8 max-w-2xl">
              Data-driven Facebook and Google ad campaigns that generate quality leads and measurable ROI. No vanity metrics — every taka tracked to a real business outcome.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/contact" className="btn-primary text-base px-7 py-4">Start Growing <ArrowRight className="w-5 h-5" /></Link>
              <a href="https://wa.me/8801804277420?text=Hi%20I%20need%20digital%20marketing" target="_blank" rel="noreferrer" className="btn-secondary text-base px-7 py-4">
                <MessageCircle className="w-5 h-5 text-emerald-500" />Chat on WhatsApp
              </a>
            </div>
            <div className="flex flex-wrap gap-3 mt-8">
              {['Transparent Reporting', 'A/B Testing', 'ROAS Tracking', '60% Lower CPA'].map((b) => (
                <div key={b} className="flex items-center gap-1.5 text-xs font-medium text-orange-400 bg-orange-500/10 border border-orange-500/20 px-3 py-1.5 rounded-full">
                  <CheckCircle2 className="w-3.5 h-3.5" />{b}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#0F172A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title">Our Marketing <span className="text-gradient">Services</span></h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            {services.map(({ icon: Icon, title, desc, color, bg }) => (
              <div key={title} className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-white/10 transition-all flex gap-5">
                <div className={`w-12 h-12 rounded-xl ${bg} border flex items-center justify-center shrink-0`}>
                  <Icon className={`w-6 h-6 ${color}`} />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white mb-2">{title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-[#080E1A]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-3 gap-5 text-center">
            {[{ val: '340%', label: 'Average Client ROI', desc: 'Across all campaigns' }, { val: '60%', label: 'Lower Cost Per Lead', desc: 'vs. previous agencies' }, { val: '50+', label: 'Active Campaigns', desc: 'Running right now' }].map(({ val, label, desc }) => (
              <div key={label} className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
                <div className="text-3xl font-black text-gradient font-heading mb-1">{val}</div>
                <div className="text-sm font-semibold text-white mb-1">{label}</div>
                <div className="text-xs text-slate-500">{desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <LeadCapture />
      <FinalCTA />
    </>
  );
}

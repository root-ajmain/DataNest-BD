import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Target, Eye, Heart, Users, MessageCircle } from 'lucide-react';
import FinalCTA from '@/components/sections/FinalCTA';

export const metadata: Metadata = {
  title: 'About DataNest BD — Bangladesh Digital Agency | WhatsApp API & Web Development',
  description: 'DataNest BD is a premium digital agency in Bangladesh helping businesses grow with WhatsApp API, Web Development, AI Automation, and Digital Marketing. Trusted by 100+ clients.',
  alternates: { canonical: 'https://www.datanestbd.com/about' },
};

const team = [
  { name: 'DataNest BD Team', role: 'Full-Stack Developers', desc: 'Expert developers specialized in Next.js, React, Node.js, and modern web technologies.', avatar: 'DE', color: 'from-blue-500 to-cyan-500' },
  { name: 'DataNest BD Team', role: 'AI & Automation Engineers', desc: 'AI specialists building custom agents, chatbots, and automation workflows for real business use.', avatar: 'AI', color: 'from-purple-500 to-pink-500' },
  { name: 'DataNest BD Team', role: 'Digital Marketing Strategists', desc: 'Performance marketers who measure everything and optimize relentlessly for ROI.', avatar: 'MK', color: 'from-orange-500 to-amber-500' },
  { name: 'DataNest BD Team', role: 'WhatsApp API Specialists', desc: 'Certified Meta partner experts handling API onboarding, chatbot flows, and campaign operations.', avatar: 'WA', color: 'from-emerald-500 to-teal-500' },
];

const values = [
  { icon: Target, title: 'Results Over Activity', desc: 'We measure success by your business outcomes — not hours billed, reports delivered, or impressions generated.', color: 'text-blue-400', bg: 'bg-blue-500/10 border-blue-500/20' },
  { icon: Eye, title: 'Radical Transparency', desc: 'No hidden fees, no inflated reports, no agency BS. You see exactly what we\'re doing, why, and what it\'s returning.', color: 'text-emerald-400', bg: 'bg-emerald-500/10 border-emerald-500/20' },
  { icon: Heart, title: 'Local Expertise, Global Standards', desc: 'We understand Bangladesh\'s business landscape deeply — while applying world-class technical and strategic standards.', color: 'text-pink-400', bg: 'bg-pink-500/10 border-pink-500/20' },
  { icon: Users, title: 'Long-Term Partnership', desc: 'We don\'t do project handoffs. We stay invested in your growth — because your retention is what builds our reputation.', color: 'text-purple-400', bg: 'bg-purple-500/10 border-purple-500/20' },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-hero-mesh relative overflow-hidden">
        <div className="absolute top-0 right-1/3 w-80 h-80 bg-blue-600/8 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="section-label mb-5">About DataNest BD</div>
            <h1 className="text-5xl sm:text-6xl font-black text-white font-heading leading-[1.1] mb-6">
              We Build Digital Systems That<br />
              <span className="text-gradient">Drive Real Growth</span>
            </h1>
            <p className="text-xl text-slate-400 leading-relaxed mb-8">
              DataNest BD is a premium digital agency based in Dhaka, Bangladesh. We help businesses grow through Web Development, AI Automation, WhatsApp API integration, and Performance Marketing — with a 99% client retention rate and 100+ happy clients.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/contact" className="btn-primary text-base px-7 py-4">
                Work With Us <ArrowRight className="w-5 h-5" />
              </Link>
              <a href="https://wa.me/8801804277420?text=Hi%20DataNest%20BD" target="_blank" rel="noreferrer" className="btn-secondary text-base px-7 py-4">
                <MessageCircle className="w-5 h-5 text-emerald-500" /> Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 bg-[#080E1A]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="text-3xl font-bold text-white mb-5">Our Story</h2>
              <div className="space-y-4 text-slate-400 leading-relaxed">
                <p>DataNest BD was founded with a simple belief: Bangladesh businesses deserve access to the same digital infrastructure that global companies use — but implemented by people who actually understand the local market.</p>
                <p>We started with WhatsApp API integrations, then expanded into Web Development, AI Automation, and Digital Marketing as our clients asked for more. Today, we&apos;re a full-service digital agency trusted by 100+ businesses across Bangladesh.</p>
                <p>What makes us different? We don&apos;t just deliver deliverables — we build ongoing partnerships. Our team stays invested in your outcomes because that&apos;s what keeps clients coming back. And with a 99% retention rate, it&apos;s working.</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { val: '100+', label: 'Happy Clients', sub: 'Across Bangladesh' },
                { val: '99%', label: 'Retention Rate', sub: 'Over 2 years' },
                { val: '2.4M+', label: 'Messages Sent', sub: 'Via WhatsApp API' },
                { val: '340%', label: 'Average ROI', sub: 'Across all clients' },
              ].map(({ val, label, sub }) => (
                <div key={label} className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06] text-center">
                  <div className="text-2xl font-black text-gradient font-heading mb-1">{val}</div>
                  <div className="text-sm font-semibold text-white">{label}</div>
                  <div className="text-xs text-slate-500 mt-0.5">{sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-[#0F172A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title">Our <span className="text-gradient">Values</span></h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            {values.map(({ icon: Icon, title, desc, color, bg }) => (
              <div key={title} className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] flex gap-5">
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

      {/* Team */}
      <section className="py-16 bg-[#080E1A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title">Our <span className="text-gradient">Expert Team</span></h2>
            <p className="section-subtitle mx-auto mt-3">In-house specialists — no outsourcing, full accountability.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {team.map(({ name, role, desc, avatar, color }) => (
              <div key={role} className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] text-center">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center mx-auto mb-4 text-xl font-bold text-white`}>
                  {avatar}
                </div>
                <p className="text-sm font-bold text-white mb-1">{role}</p>
                <p className="text-xs text-slate-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}

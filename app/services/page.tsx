import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, MessageSquare, Code2, Bot, Megaphone, Smartphone, Layout, Facebook } from 'lucide-react';
import FinalCTA from '@/components/sections/FinalCTA';

export const metadata: Metadata = {
  title: 'Digital Services Bangladesh — Web Dev, AI, WhatsApp API, Marketing | DataNest BD',
  description: 'Full-service digital agency in Bangladesh. WhatsApp API, Web Development, SaaS, AI Automation, Digital Marketing, Landing Pages, and Facebook Business setup.',
  alternates: { canonical: 'https://www.datanestbd.com/services' },
};

const services = [
  {
    icon: MessageSquare, label: 'WhatsApp API', href: '/services/whatsapp-api',
    headline: 'Official WhatsApp Business API',
    desc: 'Meta-approved API setup with AI chatbot, bulk messaging, team inbox, 0% markup on Meta charges. Live in 48 hours.',
    tags: ['Bulk Broadcast', 'AI Chatbot', 'CRM Integration', '0% Markup'],
    badge: 'Most Popular',
    badgeColor: 'badge-emerald',
    color: 'text-emerald-400', bg: 'bg-emerald-500/15 border-emerald-500/25', accent: 'border-emerald-500/20',
  },
  {
    icon: Code2, label: 'Web Development', href: '/services/web-development',
    headline: 'Conversion-Focused Websites & Apps',
    desc: 'Fast, SEO-optimized, mobile-first websites and web applications using Next.js, React, and TypeScript.',
    tags: ['Next.js / React', 'SEO-Optimized', 'Mobile-First', '<2s Load'],
    badge: null, badgeColor: '',
    color: 'text-blue-400', bg: 'bg-blue-500/15 border-blue-500/25', accent: 'border-blue-500/20',
  },
  {
    icon: Smartphone, label: 'SaaS Development', href: '/services/saas-development',
    headline: 'Full-Stack SaaS Products',
    desc: 'End-to-end SaaS development with subscription billing, user management, analytics, and scalable cloud infrastructure.',
    tags: ['MVP Launch', 'Subscription', 'Scalable', 'API-First'],
    badge: null, badgeColor: '',
    color: 'text-cyan-400', bg: 'bg-cyan-500/15 border-cyan-500/25', accent: 'border-cyan-500/20',
  },
  {
    icon: Bot, label: 'AI Automation', href: '/services/ai-automation',
    headline: 'AI Agents & Smart Workflows',
    desc: 'Custom AI agents that handle customer support, lead qualification, and complex workflows — running 24/7 without manual input.',
    tags: ['Custom AI Agents', 'Lead Qualification', '24/7 Ops', 'Integrations'],
    badge: null, badgeColor: '',
    color: 'text-purple-400', bg: 'bg-purple-500/15 border-purple-500/25', accent: 'border-purple-500/20',
  },
  {
    icon: Layout, label: 'Landing Pages', href: '/services/landing-page',
    headline: 'High-Converting Landing Pages',
    desc: 'CRO-optimized landing pages designed to maximize conversions from ads, organic traffic, and direct campaigns.',
    tags: ['CRO Optimized', 'Fast Build', 'A/B Ready', 'Analytics'],
    badge: null, badgeColor: '',
    color: 'text-pink-400', bg: 'bg-pink-500/15 border-pink-500/25', accent: 'border-pink-500/20',
  },
  {
    icon: Megaphone, label: 'Digital Marketing', href: '/services/digital-marketing',
    headline: 'Data-Driven Facebook & Google Ads',
    desc: 'Performance marketing that generates quality leads and maximizes ROI. Transparent reporting, real results — no vanity metrics.',
    tags: ['Facebook Ads', 'Google Ads', 'A/B Testing', 'Pixel Setup'],
    badge: null, badgeColor: '',
    color: 'text-orange-400', bg: 'bg-orange-500/15 border-orange-500/25', accent: 'border-orange-500/20',
  },
  {
    icon: Facebook, label: 'Facebook Business', href: '/services/facebook-business',
    headline: 'Facebook Page Setup & Verification',
    desc: 'Complete Meta Business Suite setup, ad account structure, tracking pixels, and business verification for Bangladesh.',
    tags: ['Meta Verified', 'Ad Account', 'Pixel Setup', 'CAPI'],
    badge: null, badgeColor: '',
    color: 'text-indigo-400', bg: 'bg-indigo-500/15 border-indigo-500/25', accent: 'border-indigo-500/20',
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="pt-32 pb-16 bg-gradient-hero-mesh">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="section-label mx-auto mb-5">All Services</div>
          <h1 className="section-title text-5xl mb-5">
            Digital Services Built for{' '}
            <span className="text-gradient">Bangladesh Businesses</span>
          </h1>
          <p className="section-subtitle mx-auto">
            From WhatsApp automation to AI agents and web development — we offer every service you need to scale. One agency, full accountability.
          </p>
        </div>
      </section>

      <section className="py-16 bg-[#0F172A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map(({ icon: Icon, label, href, headline, desc, tags, badge, badgeColor, color, bg, accent }) => (
              <Link
                key={href}
                href={href}
                className={`group relative p-6 rounded-2xl bg-white/[0.02] border ${accent} hover:shadow-xl hover:shadow-black/30 hover:-translate-y-1 transition-all duration-300 block`}
              >
                {badge && (
                  <div className={`badge ${badgeColor} absolute top-4 right-4 text-xs`}>{badge}</div>
                )}
                <div className={`w-12 h-12 rounded-xl ${bg} border flex items-center justify-center mb-5`}>
                  <Icon className={`w-6 h-6 ${color}`} />
                </div>
                <div className="badge badge-blue mb-3 text-xs">{label}</div>
                <h2 className="text-lg font-bold text-white mb-2">{headline}</h2>
                <p className="text-sm text-slate-400 leading-relaxed mb-4">{desc}</p>
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {tags.map((t) => (
                    <span key={t} className="text-xs px-2.5 py-1 rounded-full bg-white/[0.04] border border-white/[0.06] text-slate-400">{t}</span>
                  ))}
                </div>
                <div className="flex items-center gap-2 text-sm font-semibold text-slate-400 group-hover:text-white transition-colors">
                  Explore service <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}

import Link from 'next/link';
import {
  MessageSquare, Code2, Bot, Megaphone, Smartphone, Layout, Facebook, ArrowRight,
} from 'lucide-react';

const services = [
  {
    icon: MessageSquare,
    label: 'WhatsApp API',
    href: '/services/whatsapp-api',
    headline: 'Official WhatsApp API via WhatChimp',
    desc: 'Authorized WhatChimp partner setup with chatbots, bulk messaging, team inbox, platform training, Bangla support, and 0% markup on Meta charges.',
    tags: ['WhatChimp Partner', 'AI Chatbot', 'Team Inbox'],
    accent: 'from-emerald-500/20 to-emerald-600/5',
    iconBg: 'bg-emerald-500/15 border-emerald-500/25',
    iconColor: 'text-emerald-400',
    dotColor: 'bg-emerald-400',
    featured: true,
  },
  {
    icon: Code2,
    label: 'Web Development',
    href: '/services/web-development',
    headline: 'Conversion-Focused Websites & Apps',
    desc: 'From corporate sites to full web platforms — we build fast, SEO-optimized, mobile-first solutions that turn visitors into customers.',
    tags: ['React / Next.js', 'E-commerce', 'Web Apps'],
    accent: 'from-blue-500/20 to-blue-600/5',
    iconBg: 'bg-blue-500/15 border-blue-500/25',
    iconColor: 'text-blue-400',
    dotColor: 'bg-blue-400',
    featured: false,
  },
  {
    icon: Bot,
    label: 'AI Automation',
    href: '/services/ai-automation',
    headline: 'AI Agents & Smart Workflows',
    desc: 'Custom AI agents that handle customer queries, qualify leads, trigger workflows, and run 24/7 — so your team can focus on growth.',
    tags: ['Lead Qualification', '24/7 Ops', 'Custom Agents'],
    accent: 'from-purple-500/20 to-purple-600/5',
    iconBg: 'bg-purple-500/15 border-purple-500/25',
    iconColor: 'text-purple-400',
    dotColor: 'bg-purple-400',
    featured: false,
  },
  {
    icon: Megaphone,
    label: 'Digital Marketing',
    href: '/services/digital-marketing',
    headline: 'Data-Driven Facebook & Google Ads',
    desc: 'Performance marketing campaigns that generate quality leads and maximize ROI. Transparent reporting, no fluff — just results.',
    tags: ['Facebook Ads', 'Google Ads', 'A/B Testing'],
    accent: 'from-orange-500/20 to-orange-600/5',
    iconBg: 'bg-orange-500/15 border-orange-500/25',
    iconColor: 'text-orange-400',
    dotColor: 'bg-orange-400',
    featured: false,
  },
  {
    icon: Smartphone,
    label: 'SaaS Development',
    href: '/services/saas-development',
    headline: 'Full-Stack SaaS Products',
    desc: 'End-to-end SaaS development from architecture to deployment — built for scale, security, and rapid growth.',
    tags: ['MVP Launch', 'Subscription', 'Scalable'],
    accent: 'from-cyan-500/20 to-cyan-600/5',
    iconBg: 'bg-cyan-500/15 border-cyan-500/25',
    iconColor: 'text-cyan-400',
    dotColor: 'bg-cyan-400',
    featured: false,
  },
  {
    icon: Layout,
    label: 'Landing Pages',
    href: '/services/landing-page',
    headline: 'High-Converting Landing Pages',
    desc: 'Beautifully designed, CRO-optimized landing pages that drive action. Built fast, tested thoroughly, optimized continuously.',
    tags: ['CRO Focused', 'Fast Build', 'A/B Ready'],
    accent: 'from-pink-500/20 to-pink-600/5',
    iconBg: 'bg-pink-500/15 border-pink-500/25',
    iconColor: 'text-pink-400',
    dotColor: 'bg-pink-400',
    featured: false,
  },
  {
    icon: Facebook,
    label: 'Facebook Business',
    href: '/services/facebook-business',
    headline: 'Facebook Page Setup & Verification',
    desc: 'Complete Meta Business Suite setup, ad account structure, tracking pixels, and business verification for Bangladesh businesses.',
    tags: ['Meta Verified', 'Pixel Setup', 'Ad Account'],
    accent: 'from-indigo-500/20 to-indigo-600/5',
    iconBg: 'bg-indigo-500/15 border-indigo-500/25',
    iconColor: 'text-indigo-400',
    dotColor: 'bg-indigo-400',
    featured: false,
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="section-padding bg-[#0F172A] relative">
      {/* Background accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-0 w-80 h-80 bg-blue-600/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-0 w-80 h-80 bg-emerald-600/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="section-label mx-auto mb-4">Our Services</div>
          <h2 className="section-title">
            Everything You Need to{' '}
            <span className="text-gradient">Scale Fast</span>
          </h2>
          <p className="section-subtitle mx-auto mt-4">
            From WhatsApp automation to full web development — we build the systems that drive real business growth.
          </p>
        </div>

        {/* Featured + Grid */}
        <div className="space-y-4">
          {/* Featured: WhatsApp API */}
          <div
            className={`group relative p-6 sm:p-8 rounded-2xl bg-gradient-to-br ${services[0].accent} border border-emerald-500/20 hover:border-emerald-500/40 transition-all duration-300`}
          >
            <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between">
              <div className="flex gap-5 items-start">
                <div className={`w-14 h-14 rounded-2xl ${services[0].iconBg} border flex items-center justify-center shrink-0`}>
                  <MessageSquare className={`w-7 h-7 ${services[0].iconColor}`} />
                </div>
                <div>
                  <div className="badge badge-emerald mb-2">Most Popular Service</div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">{services[0].headline}</h3>
                  <p className="text-slate-400 max-w-2xl leading-relaxed">{services[0].desc}</p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {services[0].tags.map((tag) => (
                      <span key={tag} className={`text-xs px-3 py-1 rounded-full badge badge-emerald`}>{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
              <Link
                href={services[0].href}
                className="btn-primary shrink-0 whitespace-nowrap"
              >
                Explore Plans <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Regular grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.slice(1).map(({ icon: Icon, label, href, headline, desc, tags, accent, iconBg, iconColor }) => (
              <Link
                key={href}
                href={href}
                className={`group relative p-6 rounded-2xl bg-gradient-to-br ${accent} border border-white/[0.06] hover:border-white/15 transition-all duration-300 hover:-translate-y-1 block`}
              >
                <div className={`w-12 h-12 rounded-xl ${iconBg} border flex items-center justify-center mb-5`}>
                  <Icon className={`w-6 h-6 ${iconColor}`} />
                </div>

                <div className="badge badge-blue mb-3">{label}</div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-gradient transition-all">{headline}</h3>
                <p className="text-sm text-slate-400 leading-relaxed mb-4">{desc}</p>

                <div className="flex flex-wrap gap-1.5 mb-5">
                  {tags.map((tag) => (
                    <span key={tag} className="text-xs px-2.5 py-1 rounded-full bg-white/[0.04] border border-white/[0.06] text-slate-400">{tag}</span>
                  ))}
                </div>

                <div className="flex items-center gap-2 text-sm font-semibold text-slate-400 group-hover:text-white transition-colors mt-auto">
                  Learn more
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-slate-400 mb-4">Not sure which service fits your needs?</p>
          <Link href="/contact" className="btn-secondary">
            Book a Free Strategy Call
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

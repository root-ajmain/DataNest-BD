import type { Metadata } from 'next';
import Link from 'next/link';
import {
  MessageCircle, Check, ArrowRight, CheckCircle2, Zap, Users, ShieldCheck,
  Bot, BarChart3, Smartphone, MessageSquare, Globe,
} from 'lucide-react';
import WhatsAppPricing from '@/components/sections/WhatsAppPricing';
import WhatChimpPartnership from '@/components/sections/WhatChimpPartnership';
import FAQSection from '@/components/sections/FAQSection';
import LeadCapture from '@/components/sections/LeadCapture';

export const metadata: Metadata = {
  title: 'WhatsApp Business API Bangladesh — Authorized WhatChimp Partner | DataNest BD',
  description:
    'Authorized WhatChimp reseller in Bangladesh. Official WhatsApp API setup with 0% Meta markup, 24/7 Bangla support, platform training, and full technical coverage. Basic plan from BDT 3,000/month + BDT 500 one-time setup.',
  keywords: ['WhatsApp API Bangladesh', 'WhatsApp Business API', 'WhatsApp chatbot Bangladesh', 'WhatsApp bulk messaging Bangladesh', 'Meta approved WhatsApp BSP Bangladesh'],
  openGraph: {
    title: 'WhatsApp Business API Bangladesh — Authorized WhatChimp Partner | DataNest BD',
    description: 'Authorized WhatChimp partner in Bangladesh. Official WhatsApp API, 0% markup, 24/7 Bangla support, platform training. BDT 3,000/month. Live in 48 hours.',
    url: 'https://www.datanestbd.com/services/whatsapp-api',
  },
  alternates: { canonical: 'https://www.datanestbd.com/services/whatsapp-api' },
};

const WHATSAPP_URL = 'https://wa.me/8801804277420?text=Hi%20DataNest%20BD%2C%20I%20want%20to%20setup%20WhatsApp%20API';

const features = [
  {
    icon: MessageSquare,
    title: 'Bulk WhatsApp Broadcast',
    desc: 'Send personalized messages to thousands of subscribers simultaneously — with delivery tracking and click analytics.',
    color: 'text-emerald-400',
    bg: 'bg-emerald-500/10 border-emerald-500/20',
  },
  {
    icon: Bot,
    title: 'AI-Powered Chatbot',
    desc: 'Drag-and-drop chatbot builder with AI intent detection. Automate lead qualification, FAQs, and order confirmations 24/7.',
    color: 'text-blue-400',
    bg: 'bg-blue-500/10 border-blue-500/20',
  },
  {
    icon: Users,
    title: 'Multi-Agent Team Inbox',
    desc: 'Shared inbox where multiple agents manage the same WhatsApp number. Assign, route, and track every conversation.',
    color: 'text-purple-400',
    bg: 'bg-purple-500/10 border-purple-500/20',
  },
  {
    icon: BarChart3,
    title: 'Campaign Analytics',
    desc: 'Real-time reports on message delivery, open rates, click-through rates, and ROI — presented clearly for decision-making.',
    color: 'text-amber-400',
    bg: 'bg-amber-500/10 border-amber-500/20',
  },
  {
    icon: Smartphone,
    title: 'Omnichannel Inbox',
    desc: 'Manage WhatsApp, Instagram DMs, and Facebook Messenger from one unified inbox (available on Growth plan).',
    color: 'text-cyan-400',
    bg: 'bg-cyan-500/10 border-cyan-500/20',
  },
  {
    icon: Globe,
    title: 'Deep Integrations',
    desc: 'Connect with WooCommerce, Shopify, Zapier, Pabbly, Make, N8N, and custom APIs for complete automation.',
    color: 'text-pink-400',
    bg: 'bg-pink-500/10 border-pink-500/20',
  },
];

const useCases = [
  { emoji: '🛒', title: 'E-commerce', desc: 'Abandoned cart recovery, order confirmations, delivery alerts, and post-purchase upsells — all automated via WhatsApp.' },
  { emoji: '🏥', title: 'Healthcare', desc: 'Appointment reminders, test result notifications, prescription renewals, and patient support workflows.' },
  { emoji: '🏠', title: 'Real Estate', desc: 'Property inquiry follow-up, listing broadcasts, appointment scheduling, and lead nurturing at scale.' },
  { emoji: '🎓', title: 'Education', desc: 'Admission inquiries, fee reminders, result notifications, and parent communication on one channel.' },
  { emoji: '🚚', title: 'Logistics', desc: 'Delivery updates, shipment tracking, driver coordination, and customer support — fully automated.' },
  { emoji: '💼', title: 'Financial Services', desc: 'Account updates, transaction alerts, loan status, policy renewals, and secure customer verification.' },
];

const whyOfficialApi = [
  'Verified green tick for your business number',
  'Send to unlimited subscribers (no device limits)',
  'Automated responses with chatbot flows',
  'Multi-agent inbox (multiple team members)',
  'Official compliance — no risk of account ban',
  'Template message approval through Meta',
  'Detailed analytics and campaign reporting',
  'CRM and third-party app integrations',
];

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'WhatsApp Business API Setup Bangladesh',
  provider: {
    '@type': 'Organization',
    name: 'DataNest BD',
    url: 'https://www.datanestbd.com',
  },
  serviceType: 'WhatsApp API Integration',
  description: 'Authorized WhatChimp reseller in Bangladesh offering official WhatsApp Business API setup with bulk messaging, AI chatbot, team inbox, CRM integrations, 0% Meta markup, 24/7 Bangla support, platform training, full technical coverage, BDT pricing from 3,000/month, and a BDT 500 one-time setup fee.',
  areaServed: 'Bangladesh',
  offers: [
    {
      '@type': 'Offer',
      name: 'Basic WhatsApp API Plan',
      price: '3000',
      priceCurrency: 'BDT',
      description: 'Basic WhatsApp Business API with 2 agents, 10,000 subscribers, and full automation.',
    },
    {
      '@type': 'Offer',
      name: 'Growth WhatsApp API Plan',
      price: '6000',
      priceCurrency: 'BDT',
      description: 'Advanced WhatsApp Business API with omnichannel inbox, 5 agents, 20,000 subscribers.',
    },
  ],
};

export default function WhatsAppAPIPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-hero-mesh overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl" />
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-slate-500 mb-8">
              <Link href="/" className="hover:text-slate-300 transition-colors">Home</Link>
              <span>/</span>
              <Link href="/services" className="hover:text-slate-300 transition-colors">Services</Link>
              <span>/</span>
              <span className="text-slate-300">WhatsApp API</span>
            </nav>

            <div className="section-label mb-5">
              <ShieldCheck className="w-4 h-4" />
              Authorized WhatChimp Partner
            </div>

            <h1 className="text-5xl sm:text-6xl font-black text-white font-heading leading-[1.1] mb-6">
              WhatsApp Business API{' '}
              <span className="text-gradient">for Bangladesh</span>
            </h1>

            <p className="text-xl text-slate-400 leading-relaxed mb-8 max-w-2xl">
              Set up your official WhatsApp Business API through DataNest BD, Bangladesh&apos;s authorized WhatChimp partner, with bulk messaging, AI chatbot, team inbox, and deep integrations — live in <strong className="text-white">48 hours</strong>. We charge <strong className="text-emerald-400">0% markup</strong> on Meta conversation fees.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/contact" className="btn-primary text-base px-7 py-4">
                Get Started in 48h <ArrowRight className="w-5 h-5" />
              </Link>
              <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="btn-secondary text-base px-7 py-4">
                <MessageCircle className="w-5 h-5 text-emerald-500" /> Chat on WhatsApp
              </a>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-3 mt-8">
              {['Authorized WhatChimp Partner', '0% Markup on Meta Fees', '48hr Onboarding', 'Bangla Support'].map((badge) => (
                <div key={badge} className="flex items-center gap-1.5 text-xs font-medium text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1.5 rounded-full">
                  <Check className="w-3.5 h-3.5" />
                  {badge}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Official API */}
      <section className="py-16 bg-[#080E1A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">
                Why Use the <span className="text-gradient">Official WhatsApp API</span> Instead of Unofficial Methods?
              </h2>
              <p className="text-slate-400 leading-relaxed mb-6">
                Unofficial WhatsApp bulk tools get your number banned. The official Meta API gives you unlimited scale, verified status, and full compliance — with no risk of losing your business number.
              </p>
              <ul className="space-y-2.5">
                {whyOfficialApi.map((point) => (
                  <li key={point} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                    <span className="text-sm text-slate-300">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-3">
              {/* Comparison table */}
              <div className="rounded-2xl overflow-hidden border border-white/[0.07]">
                <div className="grid grid-cols-3 text-center text-xs font-semibold uppercase tracking-wider">
                  <div className="py-3 px-4 bg-white/[0.03] text-slate-500">Feature</div>
                  <div className="py-3 px-4 bg-red-900/20 text-red-400">Unofficial Tools</div>
                  <div className="py-3 px-4 bg-emerald-900/20 text-emerald-400">Official API</div>
                </div>
                {[
                  ['Account Safety', '❌ Ban risk', '✅ Fully safe'],
                  ['Subscriber Limit', '❌ Device limited', '✅ Unlimited'],
                  ['Green Tick', '❌ Not available', '✅ Available'],
                  ['Team Inbox', '❌ Single user', '✅ Multi-agent'],
                  ['CRM Integration', '❌ Limited', '✅ Full API'],
                  ['Analytics', '❌ Basic/none', '✅ Detailed'],
                  ['Chatbot', '❌ Basic', '✅ AI-powered'],
                ].map(([feat, bad, good]) => (
                  <div key={feat} className="grid grid-cols-3 text-sm border-t border-white/[0.04]">
                    <div className="py-3 px-4 bg-white/[0.02] text-slate-400 font-medium">{feat}</div>
                    <div className="py-3 px-4 text-center text-slate-400 bg-red-900/10">{bad}</div>
                    <div className="py-3 px-4 text-center text-emerald-300 bg-emerald-900/10">{good}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-[#0F172A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title">
              Platform <span className="text-gradient">Features</span>
            </h2>
            <p className="section-subtitle mx-auto mt-3">
              Everything you need to run professional WhatsApp operations at scale.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map(({ icon: Icon, title, desc, color, bg }) => (
              <div key={title} className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-white/10 transition-all group">
                <div className={`w-12 h-12 rounded-xl ${bg} border flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className={`w-6 h-6 ${color}`} />
                </div>
                <h3 className="text-base font-bold text-white mb-2">{title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16 bg-[#080E1A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title">
              Who Uses WhatsApp API in Bangladesh?
            </h2>
            <p className="section-subtitle mx-auto mt-3">
              From e-commerce to healthcare — every industry benefits from WhatsApp at scale.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {useCases.map(({ emoji, title, desc }) => (
              <div key={title} className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-white/10 transition-all">
                <div className="text-3xl mb-3">{emoji}</div>
                <h3 className="text-base font-bold text-white mb-2">{title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WhatChimp Partnership */}
      <WhatChimpPartnership />

      {/* Pricing — EXACT DATA PRESERVED */}
      <WhatsAppPricing />

      {/* FAQ */}
      <FAQSection />

      {/* Lead capture */}
      <LeadCapture />
    </>
  );
}

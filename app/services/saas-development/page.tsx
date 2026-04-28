import type { Metadata } from 'next';
import Link from 'next/link';
import { Smartphone, ArrowRight, CheckCircle2, MessageCircle } from 'lucide-react';
import LeadCapture from '@/components/sections/LeadCapture';
import FinalCTA from '@/components/sections/FinalCTA';

export const metadata: Metadata = {
  title: 'SaaS Development Bangladesh — Full-Stack SaaS Products | DataNest BD',
  description: 'End-to-end SaaS development in Bangladesh. MVP launch, subscription billing, user management, and scalable cloud infrastructure. We build SaaS products that grow.',
  keywords: ['SaaS Development Bangladesh', 'SaaS MVP Bangladesh', 'Software as a Service Bangladesh', 'Web App Development Dhaka'],
  alternates: { canonical: 'https://www.datanestbd.com/services/saas-development' },
};

const features = [
  { title: 'Rapid MVP Launch', desc: 'Get your MVP to market fast — we build lean, validated products that test your core assumption before you invest in scale.' },
  { title: 'Subscription Billing', desc: 'Stripe, bKash, SSLCommerz, or custom payment gateways. Monthly/annual plans, trials, upgrades, and automated invoicing.' },
  { title: 'User Management', desc: 'Multi-tenant architecture, role-based access control, team management, and SSO integrations out of the box.' },
  { title: 'Analytics Dashboard', desc: 'Built-in usage analytics, revenue metrics, churn tracking, and custom reporting — data your team actually acts on.' },
  { title: 'Scalable Infrastructure', desc: 'Cloud-native on AWS or Vercel. Auto-scaling, database optimization, CDN, and 99.9% uptime guarantees.' },
  { title: 'API-First Architecture', desc: 'Clean REST or GraphQL APIs from day one — making future integrations, mobile apps, and partner connections trivial.' },
];

export default function SaaSDevelopmentPage() {
  return (
    <>
      <section className="relative pt-32 pb-20 bg-gradient-hero-mesh overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <nav className="flex items-center gap-2 text-sm text-slate-500 mb-8">
              <Link href="/" className="hover:text-slate-300 transition-colors">Home</Link><span>/</span>
              <Link href="/services" className="hover:text-slate-300 transition-colors">Services</Link><span>/</span>
              <span className="text-slate-300">SaaS Development</span>
            </nav>
            <div className="section-label mb-5"><Smartphone className="w-4 h-4" />SaaS Development Bangladesh</div>
            <h1 className="text-5xl sm:text-6xl font-black text-white font-heading leading-[1.1] mb-6">
              Your SaaS Product,<br /><span className="text-gradient">Built to Scale</span>
            </h1>
            <p className="text-xl text-slate-400 leading-relaxed mb-8 max-w-2xl">
              We build complete SaaS products from architecture to deployment. MVP to production — with subscription billing, multi-tenancy, and cloud infrastructure designed for growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/contact" className="btn-primary text-base px-7 py-4">Build Your SaaS <ArrowRight className="w-5 h-5" /></Link>
              <a href="https://wa.me/8801804277420?text=Hi%20I%20want%20to%20build%20a%20SaaS%20product" target="_blank" rel="noreferrer" className="btn-secondary text-base px-7 py-4">
                <MessageCircle className="w-5 h-5 text-emerald-500" />Discuss Project
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#0F172A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title">What&apos;s <span className="text-gradient">Included</span></h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map(({ title, desc }) => (
              <div key={title} className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-cyan-500/20 transition-all">
                <div className="flex items-start gap-3 mb-3">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                  <h3 className="text-base font-bold text-white">{title}</h3>
                </div>
                <p className="text-sm text-slate-400 leading-relaxed pl-8">{desc}</p>
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

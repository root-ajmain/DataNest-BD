import type { Metadata } from 'next';
import Link from 'next/link';
import { Code2, ArrowRight, CheckCircle2, Zap, Smartphone, Search, ShieldCheck, BarChart3, MessageCircle } from 'lucide-react';
import LeadCapture from '@/components/sections/LeadCapture';
import FinalCTA from '@/components/sections/FinalCTA';

export const metadata: Metadata = {
  title: 'Web Development Bangladesh — Next.js, React & Custom Web Apps | DataNest BD',
  description:
    'Premium web development in Bangladesh. We build fast, SEO-optimized, mobile-first websites, e-commerce platforms, and web applications using Next.js, React, and TypeScript.',
  keywords: ['Web Development Bangladesh', 'Website Design Dhaka', 'Next.js development Bangladesh', 'E-commerce development Bangladesh', 'Web app development Bangladesh'],
  openGraph: {
    title: 'Web Development Bangladesh — Fast, SEO-Optimized Websites | DataNest BD',
    description: 'Conversion-focused websites and web apps built for performance. Next.js, React, TypeScript. Mobile-first, SEO-optimized.',
    url: 'https://www.datanestbd.com/services/web-development',
  },
  alternates: { canonical: 'https://www.datanestbd.com/services/web-development' },
};

const WHATSAPP_URL = 'https://wa.me/8801804277420?text=Hi%20DataNest%20BD%2C%20I%20need%20web%20development';

const features = [
  { icon: Zap, title: 'Performance-First Build', desc: 'Under 2s load time, 90+ PageSpeed score. Built with Next.js server-side rendering for blazing-fast performance everywhere.', color: 'text-amber-400', bg: 'bg-amber-500/10 border-amber-500/20' },
  { icon: Smartphone, title: 'Mobile-First Design', desc: 'Every pixel designed for mobile first. 70% of your traffic is on mobile — we make sure every interaction feels native and smooth.', color: 'text-blue-400', bg: 'bg-blue-500/10 border-blue-500/20' },
  { icon: Search, title: 'SEO-Optimized Architecture', desc: 'Clean semantic HTML, structured data, meta optimization, sitemap, and technical SEO baked in from day one — not bolted on later.', color: 'text-emerald-400', bg: 'bg-emerald-500/10 border-emerald-500/20' },
  { icon: ShieldCheck, title: 'Security & Reliability', desc: 'HTTPS, secure authentication, XSS protection, SQL injection prevention, and regular security audits — enterprise-level protection for any size business.', color: 'text-purple-400', bg: 'bg-purple-500/10 border-purple-500/20' },
  { icon: BarChart3, title: 'Conversion-Optimized UI', desc: 'Every page is designed to convert visitors into leads. Clear CTAs, optimized forms, trust signals, and persuasive copy — all working together.', color: 'text-pink-400', bg: 'bg-pink-500/10 border-pink-500/20' },
  { icon: Code2, title: 'Clean, Maintainable Code', desc: 'TypeScript for type safety, component-based architecture, and full documentation — so your team or any developer can maintain and extend it.', color: 'text-cyan-400', bg: 'bg-cyan-500/10 border-cyan-500/20' },
];

const deliverables = [
  { label: 'Corporate & Business Websites', desc: 'Professional, premium-looking sites that instantly establish authority and trust in your industry.' },
  { label: 'Lead Generation Landing Pages', desc: 'Single-purpose pages built to capture contacts, drive calls, or convert ad traffic into qualified leads.' },
  { label: 'E-Commerce Platforms', desc: 'Full-featured online stores with product management, payment gateways (bKash, Nagad, SSL Commerz), and order automation.' },
  { label: 'Web Applications & Dashboards', desc: 'Custom web apps — from booking systems to admin panels — built with React, Next.js, and secure APIs.' },
  { label: 'SaaS Products', desc: 'Complete SaaS products with subscription billing, user management, analytics, and cloud hosting.' },
  { label: 'Portfolio & Personal Brands', desc: 'High-impact personal brand sites that make professionals, consultants, and creators look world-class.' },
];

const techStack = ['Next.js 15', 'React 19', 'TypeScript', 'Tailwind CSS', 'Node.js', 'PostgreSQL', 'Vercel', 'AWS', 'WooCommerce', 'Shopify', 'Stripe', 'SSL Commerz'];

const processSteps = [
  { num: '01', title: 'Discovery & Briefing', desc: 'We start with a deep-dive into your goals, audience, competitors, and success metrics.' },
  { num: '02', title: 'Design & Prototype', desc: 'High-fidelity wireframes and interactive prototypes — you see exactly what you\'re getting before we code.' },
  { num: '03', title: 'Development & Testing', desc: 'Clean code, cross-browser testing, performance optimization, and QA — nothing ships until it\'s ready.' },
  { num: '04', title: 'Launch & Handover', desc: 'Deployment, SEO verification, analytics setup, training, and full documentation handed to your team.' },
];

export default function WebDevelopmentPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-hero-mesh overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-cyan-600/8 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <nav className="flex items-center gap-2 text-sm text-slate-500 mb-8">
              <Link href="/" className="hover:text-slate-300 transition-colors">Home</Link>
              <span>/</span>
              <Link href="/services" className="hover:text-slate-300 transition-colors">Services</Link>
              <span>/</span>
              <span className="text-slate-300">Web Development</span>
            </nav>

            <div className="section-label mb-5">
              <Code2 className="w-4 h-4" />
              Web Development Bangladesh
            </div>

            <h1 className="text-5xl sm:text-6xl font-black text-white font-heading leading-[1.1] mb-6">
              Websites That{' '}
              <span className="text-gradient">Convert Visitors</span>{' '}
              Into Customers
            </h1>

            <p className="text-xl text-slate-400 leading-relaxed mb-8 max-w-2xl">
              We build fast, beautiful, SEO-optimized websites and web applications that drive real business results. From landing pages to full SaaS products — engineered for performance.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/contact" className="btn-primary text-base px-7 py-4">
                Start Your Project <ArrowRight className="w-5 h-5" />
              </Link>
              <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="btn-secondary text-base px-7 py-4">
                <MessageCircle className="w-5 h-5 text-emerald-500" /> Discuss on WhatsApp
              </a>
            </div>

            <div className="flex flex-wrap gap-3 mt-8">
              {['Mobile-First', 'SEO-Optimized', 'Next.js / React', '<2s Load Time'].map((b) => (
                <div key={b} className="flex items-center gap-1.5 text-xs font-medium text-blue-400 bg-blue-500/10 border border-blue-500/20 px-3 py-1.5 rounded-full">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  {b}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What we build */}
      <section className="py-16 bg-[#080E1A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title">What We <span className="text-gradient">Build</span></h2>
            <p className="section-subtitle mx-auto mt-3">Every type of web project, executed at the highest standard.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {deliverables.map(({ label, desc }) => (
              <div key={label} className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-blue-500/20 transition-all group">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-emerald-400 mt-2 shrink-0" />
                  <h3 className="text-base font-bold text-white">{label}</h3>
                </div>
                <p className="text-sm text-slate-400 leading-relaxed pl-5">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-[#0F172A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title">Built to <span className="text-gradient">Perform</span></h2>
            <p className="section-subtitle mx-auto mt-3">Not just pretty — engineered for speed, security, and growth.</p>
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

      {/* Tech Stack */}
      <section className="py-12 bg-[#080E1A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold text-slate-600 uppercase tracking-widest text-center mb-6">Technologies We Use</p>
          <div className="flex flex-wrap justify-center gap-3">
            {techStack.map((tech) => (
              <div key={tech} className="px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.06] text-sm font-medium text-slate-400 hover:text-white hover:border-blue-500/20 transition-colors">
                {tech}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-[#0F172A]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title">Our <span className="text-gradient">Development Process</span></h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {processSteps.map(({ num, title, desc }) => (
              <div key={num} className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06] text-center">
                <div className="text-4xl font-black text-white/5 font-heading mb-3">{num}</div>
                <h3 className="text-sm font-bold text-white mb-2">{title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose us for web dev */}
      <section className="py-12 bg-[#080E1A]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-6 sm:p-10 rounded-2xl bg-white/[0.02] border border-white/[0.06] grid lg:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Why DataNest BD for Web Development?</h2>
              <ul className="space-y-3">
                {[
                  'In-house team — no outsourcing, full accountability',
                  'We deliver working staging environments in 72 hours',
                  '90+ Google PageSpeed scores guaranteed',
                  'Full SEO setup included in every project',
                  'WhatsApp API integration available on any site',
                  'Post-launch support and maintenance included',
                ].map((p) => (
                  <li key={p} className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span className="text-sm text-slate-300">{p}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col justify-center">
              <div className="p-5 rounded-xl bg-white/[0.03] border border-white/[0.06] mb-4 text-center">
                <div className="text-3xl font-black text-gradient font-heading">72h</div>
                <div className="text-sm text-slate-400 mt-1">First staging environment</div>
              </div>
              <div className="p-5 rounded-xl bg-white/[0.03] border border-white/[0.06] text-center">
                <div className="text-3xl font-black text-gradient font-heading">90+</div>
                <div className="text-sm text-slate-400 mt-1">Google PageSpeed Score</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <LeadCapture />
      <FinalCTA />
    </>
  );
}

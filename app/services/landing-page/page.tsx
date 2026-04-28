import type { Metadata } from 'next';
import Link from 'next/link';
import { Layout, ArrowRight, CheckCircle2, MessageCircle } from 'lucide-react';
import LeadCapture from '@/components/sections/LeadCapture';
import FinalCTA from '@/components/sections/FinalCTA';

export const metadata: Metadata = {
  title: 'Landing Page Design Bangladesh — High-Converting Pages | DataNest BD',
  description: 'CRO-optimized landing pages designed for maximum conversions. Fast build, A/B ready, analytics integrated. Turn your ad traffic into leads and sales.',
  keywords: ['Landing Page Design Bangladesh', 'Landing Page Development Dhaka', 'High converting landing page Bangladesh', 'CRO landing page Bangladesh'],
  alternates: { canonical: 'https://www.datanestbd.com/services/landing-page' },
};

const features = [
  'Conversion-Rate Optimization (CRO) best practices applied to every element',
  'Mobile-first design — optimized for all screen sizes and devices',
  'Sub-2-second load speed for maximum ad Quality Score and conversions',
  'A/B testing-ready structure with variant-friendly component architecture',
  'Integrated analytics (Google Analytics, Meta Pixel, conversion events)',
  'WhatsApp click-to-chat integration for instant lead capture',
  'SEO-optimized even for single-page campaign landing pages',
  'Delivered in 5–7 business days for standard campaigns',
];

export default function LandingPagePage() {
  return (
    <>
      <section className="relative pt-32 pb-20 bg-gradient-hero-mesh overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-pink-600/8 rounded-full blur-3xl pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <nav className="flex items-center gap-2 text-sm text-slate-500 mb-8">
              <Link href="/" className="hover:text-slate-300 transition-colors">Home</Link><span>/</span>
              <Link href="/services" className="hover:text-slate-300 transition-colors">Services</Link><span>/</span>
              <span className="text-slate-300">Landing Pages</span>
            </nav>
            <div className="section-label mb-5"><Layout className="w-4 h-4" />Landing Page Design Bangladesh</div>
            <h1 className="text-5xl sm:text-6xl font-black text-white font-heading leading-[1.1] mb-6">
              Landing Pages That<br /><span className="text-gradient">Actually Convert</span>
            </h1>
            <p className="text-xl text-slate-400 leading-relaxed mb-8 max-w-2xl">
              Every element engineered for one goal: turning your ad traffic into leads and sales. CRO-optimized, fast-loading, and delivered in days — not months.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/contact" className="btn-primary text-base px-7 py-4">Start Your Landing Page <ArrowRight className="w-5 h-5" /></Link>
              <a href="https://wa.me/8801804277420?text=Hi%20I%20need%20a%20landing%20page" target="_blank" rel="noreferrer" className="btn-secondary text-base px-7 py-4">
                <MessageCircle className="w-5 h-5 text-emerald-500" />Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#0F172A]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center mb-10">What Every Landing Page <span className="text-gradient">Includes</span></h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {features.map((f) => (
              <div key={f} className="flex items-start gap-3 p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                <CheckCircle2 className="w-5 h-5 text-pink-400 shrink-0 mt-0.5" />
                <span className="text-sm text-slate-300 leading-relaxed">{f}</span>
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

import type { Metadata } from 'next';
import Link from 'next/link';
import { Facebook, ArrowRight, CheckCircle2, MessageCircle } from 'lucide-react';
import LeadCapture from '@/components/sections/LeadCapture';
import FinalCTA from '@/components/sections/FinalCTA';

export const metadata: Metadata = {
  title: 'Facebook Business Setup & Verification Bangladesh | DataNest BD',
  description: 'Complete Meta Business Suite setup, Facebook page verification, ad account structure, and tracking pixels for Bangladesh businesses. Official Facebook Business Partner.',
  keywords: ['Facebook Business Setup Bangladesh', 'Facebook Page Verification Bangladesh', 'Meta Business Suite Bangladesh', 'Facebook Ad Account Bangladesh'],
  alternates: { canonical: 'https://www.datanestbd.com/services/facebook-business' },
};

const deliverables = [
  { title: 'Facebook Business Page Setup', desc: 'Professional page creation with optimized profile, cover, CTA, services, and business info configured for maximum discoverability.' },
  { title: 'Meta Business Suite Configuration', desc: 'Complete Business Manager setup — ad accounts, pages, pixels, catalogs, and team member roles properly structured from day one.' },
  { title: 'Business Verification', desc: 'We handle the complete Meta business verification process — document preparation, submission, and follow-up until approval.' },
  { title: 'Facebook Pixel & Conversion API', desc: 'Pixel installation, event tracking setup, CAPI integration, and custom conversion events — accurate attribution across your funnel.' },
  { title: 'Ad Account Structure', desc: 'Properly organized campaign structure following Meta best practices — audience setup, placements, and bidding strategy configured.' },
  { title: 'WhatsApp Business Integration', desc: 'Connect your WhatsApp Business account to Facebook Page for Click-to-WhatsApp ads and unified Meta ecosystem management.' },
];

export default function FacebookBusinessPage() {
  return (
    <>
      <section className="relative pt-32 pb-20 bg-gradient-hero-mesh overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <nav className="flex items-center gap-2 text-sm text-slate-500 mb-8">
              <Link href="/" className="hover:text-slate-300 transition-colors">Home</Link><span>/</span>
              <Link href="/services" className="hover:text-slate-300 transition-colors">Services</Link><span>/</span>
              <span className="text-slate-300">Facebook Business</span>
            </nav>
            <div className="section-label mb-5"><Facebook className="w-4 h-4" />Facebook Business Setup Bangladesh</div>
            <h1 className="text-5xl sm:text-6xl font-black text-white font-heading leading-[1.1] mb-6">
              Build Your Meta Presence<br /><span className="text-gradient">The Right Way</span>
            </h1>
            <p className="text-xl text-slate-400 leading-relaxed mb-8 max-w-2xl">
              Complete Facebook Business Manager setup, verification, pixel installation, and ad account structure. Start advertising on Meta without the guesswork.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/contact" className="btn-primary text-base px-7 py-4">Get Set Up <ArrowRight className="w-5 h-5" /></Link>
              <a href="https://wa.me/8801804277420?text=Hi%20I%20need%20Facebook%20Business%20setup" target="_blank" rel="noreferrer" className="btn-secondary text-base px-7 py-4">
                <MessageCircle className="w-5 h-5 text-emerald-500" />Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#0F172A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title">What We <span className="text-gradient">Set Up</span></h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {deliverables.map(({ title, desc }) => (
              <div key={title} className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-indigo-500/20 transition-all">
                <div className="flex items-start gap-3 mb-3">
                  <CheckCircle2 className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
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

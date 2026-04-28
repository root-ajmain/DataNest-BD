import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, TrendingUp } from 'lucide-react';
import FinalCTA from '@/components/sections/FinalCTA';

export const metadata: Metadata = {
  title: 'Case Studies — Real Business Results | DataNest BD Bangladesh',
  description: 'Real results from real Bangladesh businesses. See how DataNest BD helped clients grow with WhatsApp API, Web Development, AI Automation, and Digital Marketing.',
  alternates: { canonical: 'https://www.datanestbd.com/case-studies' },
};

const caseStudies = [
  {
    company: 'Dhaka Textile Export',
    industry: 'Manufacturing / B2B',
    service: 'WhatsApp API',
    serviceColor: 'badge-emerald',
    challenge: 'Losing leads daily due to slow response times. Sales team manually following up with hundreds of inquiries per week.',
    solution: 'Set up WhatsApp Business API with AI chatbot for instant qualification, multi-agent inbox for team management, and automated follow-up sequences.',
    results: ['+280% qualified leads', '< 2 min response time', '40% sales team efficiency gain'],
    metric: '280%',
    metricLabel: 'More qualified leads',
    accentColor: 'from-emerald-500/20 to-emerald-600/5',
    borderColor: 'border-emerald-500/20',
  },
  {
    company: 'Shadin Fashion House',
    industry: 'E-commerce / Fashion',
    service: 'Web Development + WhatsApp API',
    serviceColor: 'badge-blue',
    challenge: 'No e-commerce presence. Selling only through Facebook, losing orders to abandoned conversations and no payment system.',
    solution: 'Built full WooCommerce store with WhatsApp integration for abandoned cart recovery, order confirmations, and customer support automation.',
    results: ['150+ orders recovered/month', 'BDT 850K+ recovered revenue', '3 weeks to launch'],
    metric: '150+',
    metricLabel: 'Orders recovered monthly',
    accentColor: 'from-blue-500/20 to-blue-600/5',
    borderColor: 'border-blue-500/20',
  },
  {
    company: 'HealthTech BD',
    industry: 'Healthcare SaaS',
    service: 'SaaS Development',
    serviceColor: 'badge-blue',
    challenge: 'Team had a validated idea but no technical co-founder. Needed an MVP fast to attract investors and test with early users.',
    solution: 'Built complete SaaS MVP with subscription billing, user management, analytics dashboard, and cloud infrastructure in 6 weeks.',
    results: ['500+ users in 6 months', 'Zero infrastructure issues', 'Series A funding raised'],
    metric: '500+',
    metricLabel: 'Users in 6 months',
    accentColor: 'from-cyan-500/20 to-cyan-600/5',
    borderColor: 'border-cyan-500/20',
  },
  {
    company: 'Meena Pharma',
    industry: 'Pharmaceutical',
    service: 'Digital Marketing',
    serviceColor: 'badge-amber',
    challenge: 'Previous agency delivering vanity metrics with poor lead quality. High cost per lead, low conversion to actual sales.',
    solution: 'Rebuilt entire Facebook Ads strategy — new audience structure, creative testing framework, landing page optimization, and retargeting sequences.',
    results: ['60% lower cost per lead', '340% ROAS achieved', '3x sales in 4 months'],
    metric: '60%',
    metricLabel: 'Lower cost per lead',
    accentColor: 'from-amber-500/20 to-amber-600/5',
    borderColor: 'border-amber-500/20',
  },
];

export default function CaseStudiesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-hero-mesh">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="section-label mx-auto mb-5">
            <TrendingUp className="w-4 h-4" />
            Case Studies
          </div>
          <h1 className="section-title text-5xl mb-5">
            Real Businesses,{' '}
            <span className="text-gradient">Measurable Results</span>
          </h1>
          <p className="section-subtitle mx-auto">
            We don&apos;t just make promises — we show the numbers. Here are real results from real Bangladesh businesses who trusted us to grow their digital operations.
          </p>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 bg-[#0F172A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          {caseStudies.map((cs) => (
            <div key={cs.company} className={`rounded-2xl p-7 bg-gradient-to-br ${cs.accentColor} border ${cs.borderColor}`}>
              <div className="grid lg:grid-cols-3 gap-6 items-start">
                <div className="lg:col-span-2">
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className={`badge ${cs.serviceColor} text-xs`}>{cs.service}</span>
                    <span className="text-xs text-slate-500">{cs.industry}</span>
                  </div>
                  <h2 className="text-2xl font-bold text-white mb-5">{cs.company}</h2>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">The Challenge</p>
                      <p className="text-sm text-slate-400 leading-relaxed">{cs.challenge}</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Our Solution</p>
                      <p className="text-sm text-slate-400 leading-relaxed">{cs.solution}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mt-5">
                    {cs.results.map((r) => (
                      <div key={r} className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-semibold text-emerald-400">
                        <TrendingUp className="w-3 h-3" />
                        {r}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col items-center lg:items-end justify-start lg:pt-10">
                  <div className="text-5xl font-black text-gradient font-heading">{cs.metric}</div>
                  <div className="text-sm text-slate-400 text-center lg:text-right mt-1">{cs.metricLabel}</div>
                  <Link href="/contact" className="mt-6 btn-secondary text-sm py-2.5 px-5">
                    Similar project? <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <FinalCTA />
    </>
  );
}

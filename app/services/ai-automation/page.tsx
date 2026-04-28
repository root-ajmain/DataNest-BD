import type { Metadata } from 'next';
import Link from 'next/link';
import { Bot, ArrowRight, CheckCircle2, Zap, Clock, TrendingUp, MessageCircle } from 'lucide-react';
import LeadCapture from '@/components/sections/LeadCapture';
import FinalCTA from '@/components/sections/FinalCTA';

export const metadata: Metadata = {
  title: 'AI Automation Agency Bangladesh — Custom AI Agents & Workflows | DataNest BD',
  description: 'Build custom AI agents and automation workflows for your business. Lead qualification, customer support, operations automation — running 24/7. Bangladesh\'s AI automation specialists.',
  keywords: ['AI Automation Bangladesh', 'AI Agents Bangladesh', 'Business Automation Dhaka', 'Chatbot development Bangladesh', 'AI workflow automation'],
  alternates: { canonical: 'https://www.datanestbd.com/services/ai-automation' },
};

const useCases = [
  { icon: MessageCircle, title: 'Customer Support AI', desc: 'AI agent that handles 70%+ of customer queries instantly — returns, FAQs, order status — without human involvement.', color: 'text-blue-400', bg: 'bg-blue-500/10 border-blue-500/20' },
  { icon: TrendingUp, title: 'Lead Qualification Bot', desc: 'Automatically screen inbound leads, ask qualifying questions, score them, and route hot leads to your sales team in real-time.', color: 'text-emerald-400', bg: 'bg-emerald-500/10 border-emerald-500/20' },
  { icon: Bot, title: 'Operations Automation', desc: 'Automate repetitive internal tasks — reporting, data entry, scheduling, notifications — and free your team for high-value work.', color: 'text-purple-400', bg: 'bg-purple-500/10 border-purple-500/20' },
  { icon: Zap, title: 'Sales Follow-Up Agent', desc: 'Never miss a follow-up. AI agents send personalized messages at the right time, nurture leads, and book meetings automatically.', color: 'text-amber-400', bg: 'bg-amber-500/10 border-amber-500/20' },
  { icon: Clock, title: 'Appointment & Booking', desc: 'Automated scheduling that integrates with your calendar, sends reminders, handles rescheduling, and reduces no-shows.', color: 'text-pink-400', bg: 'bg-pink-500/10 border-pink-500/20' },
  { icon: CheckCircle2, title: 'Custom Workflow Builder', desc: 'Complex multi-step workflows — trigger on events, process data, call APIs, and send outputs to any connected system.', color: 'text-cyan-400', bg: 'bg-cyan-500/10 border-cyan-500/20' },
];

export default function AIAutomationPage() {
  return (
    <>
      <section className="relative pt-32 pb-20 bg-gradient-hero-mesh overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <nav className="flex items-center gap-2 text-sm text-slate-500 mb-8">
              <Link href="/" className="hover:text-slate-300 transition-colors">Home</Link><span>/</span>
              <Link href="/services" className="hover:text-slate-300 transition-colors">Services</Link><span>/</span>
              <span className="text-slate-300">AI Automation</span>
            </nav>
            <div className="section-label mb-5"><Bot className="w-4 h-4" />AI Automation Agency Bangladesh</div>
            <h1 className="text-5xl sm:text-6xl font-black text-white font-heading leading-[1.1] mb-6">
              AI Agents That Work<br /><span className="text-gradient">While You Sleep</span>
            </h1>
            <p className="text-xl text-slate-400 leading-relaxed mb-8 max-w-2xl">
              Custom AI agents built around your business process, communication style, and data flows. Automate customer support, lead qualification, and operations — 24/7, zero downtime.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/contact" className="btn-primary text-base px-7 py-4">Explore AI Solutions <ArrowRight className="w-5 h-5" /></Link>
              <a href="https://wa.me/8801804277420?text=Hi%20I%20need%20AI%20automation" target="_blank" rel="noreferrer" className="btn-secondary text-base px-7 py-4">
                <MessageCircle className="w-5 h-5 text-emerald-500" />Chat on WhatsApp
              </a>
            </div>
            <div className="flex flex-wrap gap-3 mt-8">
              {['OpenAI GPT-4', 'Custom Trained', '24/7 Operations', 'Any Platform'].map((b) => (
                <div key={b} className="flex items-center gap-1.5 text-xs font-medium text-purple-400 bg-purple-500/10 border border-purple-500/20 px-3 py-1.5 rounded-full">
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
            <h2 className="section-title">AI Agent <span className="text-gradient">Use Cases</span></h2>
            <p className="section-subtitle mx-auto mt-3">Practical AI solutions for real Bangladesh business problems.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {useCases.map(({ icon: Icon, title, desc, color, bg }) => (
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

      <section className="py-12 bg-[#080E1A]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Real Impact: 70% of Queries Automated</h2>
          <p className="text-slate-400 mb-8">Our clients typically see 60–80% of repetitive customer interactions handled by AI within 30 days of deployment, freeing teams to focus on complex, high-value work.</p>
          <div className="grid sm:grid-cols-3 gap-5">
            {[{ val: '70%', label: 'Queries automated' }, { val: '24/7', label: 'Always available' }, { val: '<2s', label: 'Response time' }].map(({ val, label }) => (
              <div key={label} className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
                <div className="text-3xl font-black text-gradient font-heading mb-1">{val}</div>
                <div className="text-sm text-slate-500">{label}</div>
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

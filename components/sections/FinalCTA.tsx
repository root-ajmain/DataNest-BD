import Link from 'next/link';
import { ArrowRight, MessageCircle, Zap } from 'lucide-react';

const WHATSAPP_URL = 'https://wa.me/8801804277420?text=Hi%20DataNest%20BD%2C%20I%20want%20to%20get%20started';

export default function FinalCTA() {
  return (
    <section className="relative py-24 overflow-hidden bg-[#0F172A]">
      {/* Gradient background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 100% 80% at 50% 50%, rgba(37,99,235,0.12) 0%, rgba(5,150,105,0.06) 50%, transparent 70%)' }} />
        <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)', backgroundSize: '48px 48px' }} />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 section-label mb-6 mx-auto">
          <Zap className="w-4 h-4" />
          Start Today
        </div>

        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white font-heading leading-[1.1] mb-6">
          Your Competitors Are{' '}
          <br className="hidden sm:block" />
          Already Using This.
          <br />
          <span className="text-gradient">Are You?</span>
        </h2>

        <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          Every day without automation is a day of manual work, missed leads, and lost revenue. Let us build the systems that work while you sleep.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact" className="btn-primary text-base px-8 py-4">
            Get Free Consultation
            <ArrowRight className="w-5 h-5" />
          </Link>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="btn-secondary text-base px-8 py-4"
          >
            <MessageCircle className="w-5 h-5 text-emerald-500" />
            Chat on WhatsApp
          </a>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-6 text-sm text-slate-500">
          {['Free consultation', 'No commitment required', '48hr WhatsApp API setup', 'Local Bangladesh team'].map((item) => (
            <div key={item} className="flex items-center gap-1.5">
              <div className="w-1 h-1 rounded-full bg-slate-600" />
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

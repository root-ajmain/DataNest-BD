import type { Metadata } from 'next';
import { MapPin, Mail, Phone, Clock, MessageCircle } from 'lucide-react';
import LeadCapture from '@/components/sections/LeadCapture';

export const metadata: Metadata = {
  title: 'Contact DataNest BD — Free Consultation | Web Dev & WhatsApp API Bangladesh',
  description: 'Book a free 30-minute consultation with DataNest BD. Reach us via WhatsApp, email, or phone. Located in Mirpur, Dhaka. Expert digital agency for Bangladesh businesses.',
  alternates: { canonical: 'https://www.datanestbd.com/contact' },
};

const WHATSAPP_URL = 'https://wa.me/8801804277420?text=Hi%20DataNest%20BD%2C%20I%20want%20to%20get%20started';

const contactInfo = [
  {
    icon: MapPin,
    label: 'Office Address',
    value: 'House:1039, Road:09, Avenue:09, Mirpur-DOHS\nMirpur, Dhaka 1216, Bangladesh',
    color: 'text-blue-400',
    bg: 'bg-blue-500/10 border-blue-500/20',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'info@datanestbd.com',
    href: 'mailto:info@datanestbd.com',
    color: 'text-emerald-400',
    bg: 'bg-emerald-500/10 border-emerald-500/20',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+880 1804 277420',
    href: 'tel:+8801804277420',
    color: 'text-purple-400',
    bg: 'bg-purple-500/10 border-purple-500/20',
  },
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    value: 'Chat with us now →',
    href: WHATSAPP_URL,
    color: 'text-emerald-400',
    bg: 'bg-emerald-500/10 border-emerald-500/20',
  },
  {
    icon: Clock,
    label: 'Business Hours',
    value: 'Monday – Saturday: 9:00 AM – 8:00 PM\nSunday: Emergency support only',
    color: 'text-amber-400',
    bg: 'bg-amber-500/10 border-amber-500/20',
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-hero-mesh">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="section-label mx-auto mb-5">Get In Touch</div>
          <h1 className="section-title text-5xl mb-5">
            Let&apos;s Talk About{' '}
            <span className="text-gradient">Your Growth</span>
          </h1>
          <p className="section-subtitle mx-auto">
            Book a free strategy call. No commitment, no pushy sales — just an honest conversation about how we can help your business grow.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-10 bg-[#080E1A]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {contactInfo.map(({ icon: Icon, label, value, href, color, bg }) => (
              <div key={label} className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
                <div className={`w-10 h-10 rounded-xl ${bg} border flex items-center justify-center mb-3`}>
                  <Icon className={`w-5 h-5 ${color}`} />
                </div>
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-1">{label}</p>
                {href ? (
                  <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noreferrer' : undefined} className={`text-sm font-medium ${color} hover:opacity-80 transition-opacity whitespace-pre-line`}>
                    {value}
                  </a>
                ) : (
                  <p className="text-sm text-slate-300 whitespace-pre-line">{value}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lead form (reusing existing component) */}
      <LeadCapture />
    </>
  );
}

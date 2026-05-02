import Link from 'next/link';
import { Facebook, Linkedin, Instagram, MessageCircle, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

const WHATSAPP_URL = 'https://wa.me/8801804277420?text=Hi%20DataNest%20BD%2C%20I%20want%20to%20get%20started';

const services = [
  { label: 'WhatsApp API', href: '/services/whatsapp-api' },
  { label: 'Web Development', href: '/services/web-development' },
  { label: 'SaaS Development', href: '/services/saas-development' },
  { label: 'AI Automation', href: '/services/ai-automation' },
  { label: 'Digital Marketing', href: '/services/digital-marketing' },
  { label: 'Landing Pages', href: '/services/landing-page' },
  { label: 'Facebook Business', href: '/services/facebook-business' },
];

const company = [
  { label: 'About Us', href: '/about' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Terms of Service', href: '/terms-conditions' },
  { label: 'Refund Policy', href: '/refund-policy' },
];

export default function Footer() {
  return (
    <footer className="bg-[#080E1A] border-t border-white/[0.06] relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-600/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">

          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 mb-6">
              <div className="w-12 h-12 rounded-xl bg-white/95 p-1.5 border border-white/80 flex items-center justify-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://i.ibb.co/zhLsDmyc/L1-removebg-preview.png"
                  alt="DataNest BD Logo"
                  className="w-full h-full object-contain"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <span className="block text-xl font-bold text-gradient">DataNest BD</span>
                <span className="text-[10px] text-slate-500 uppercase tracking-widest">Digital Agency</span>
              </div>
            </Link>

            <p className="text-sm text-slate-400 leading-relaxed mb-6">
              Bangladesh&apos;s trusted digital agency for Web Development, AI Automation, WhatsApp API, and Growth Marketing. We turn businesses into brands.
            </p>

            {/* Social Links */}
            <div className="flex gap-3 mb-8">
              {[
                { href: 'https://www.facebook.com/datanestbd', icon: Facebook, label: 'Facebook', hover: 'hover:bg-blue-600' },
                { href: 'https://www.linkedin.com/company/datanest-bd', icon: Linkedin, label: 'LinkedIn', hover: 'hover:bg-blue-700' },
                { href: 'https://www.instagram.com/datanest_bd/', icon: Instagram, label: 'Instagram', hover: 'hover:bg-pink-600' },
                { href: WHATSAPP_URL, icon: MessageCircle, label: 'WhatsApp', hover: 'hover:bg-emerald-600' },
              ].map(({ href, icon: Icon, label, hover }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className={`w-9 h-9 rounded-lg bg-white/[0.05] border border-white/[0.08] flex items-center justify-center text-slate-400 hover:text-white ${hover} border-transparent transition-all duration-200`}
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>

            {/* CTA */}
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors group"
            >
              Get a free consultation
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold text-slate-100 uppercase tracking-widest mb-5">Services</h4>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s.href}>
                  <Link
                    href={s.href}
                    className="text-sm text-slate-400 hover:text-slate-100 transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-slate-600 group-hover:bg-blue-400 transition-colors" />
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold text-slate-100 uppercase tracking-widest mb-5">Company</h4>
            <ul className="space-y-2.5">
              {company.map((c) => (
                <li key={c.href}>
                  <Link
                    href={c.href}
                    className="text-sm text-slate-400 hover:text-slate-100 transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-slate-600 group-hover:bg-blue-400 transition-colors" />
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-slate-100 uppercase tracking-widest mb-5">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-blue-400 mt-0.5 shrink-0" />
                <span className="text-sm text-slate-400 leading-relaxed">
                  House:1039, Road:09, Avenue:09, Mirpur-DOHS<br />
                  Mirpur, Dhaka 1216, Bangladesh
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                <a href="mailto:info@datanestbd.com" className="text-sm text-slate-400 hover:text-white transition-colors">
                  info@datanestbd.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href="tel:+8801804277420" className="text-sm text-slate-400 hover:text-white transition-colors">
                  +880 1804 277420
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="text-sm text-emerald-400 hover:text-emerald-300 font-medium transition-colors">
                  WhatsApp Now
                </a>
              </li>
            </ul>

            {/* Trust Badge */}
            <div className="mt-6 p-4 rounded-xl bg-white/[0.03] border border-white/[0.06]">
              <div className="flex items-center gap-2 mb-1.5">
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs font-semibold text-emerald-400">Authorized WhatChimp Partner</span>
              </div>
              <p className="text-xs text-slate-500">Official WhatsApp API platform support for Bangladesh businesses.</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 pt-8 border-t border-white/[0.06]">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-slate-500">
              &copy; {new Date().getFullYear()} DataNest BD. All rights reserved. Authorized WhatChimp Partner for Bangladesh —{' '}
              <a
                href="https://whatchimp.com"
                target="_blank"
                rel="noopener"
                className="hover:text-slate-300 transition-colors"
              >
                WhatChimp
              </a>{' '}
              is a Meta-certified WhatsApp API platform trusted in 90+ countries.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-xs text-slate-500">
              <Link href="/privacy-policy" className="hover:text-slate-300 transition-colors">Privacy Policy</Link>
              <Link href="/terms-conditions" className="hover:text-slate-300 transition-colors">Terms of Service</Link>
              <Link href="/refund-policy" className="hover:text-slate-300 transition-colors">Refund Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

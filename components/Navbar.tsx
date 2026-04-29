'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown, MessageCircle, ArrowRight } from 'lucide-react';

const WHATSAPP_URL = 'https://wa.me/8801804277420?text=Hi%20DataNest%20BD%2C%20I%20want%20to%20get%20started';

const services = [
  { label: 'WhatsApp API', href: '/services/whatsapp-api', desc: 'Authorized WhatChimp partner setup' },
  { label: 'Web Development', href: '/services/web-development', desc: 'Conversion-focused websites & apps' },
  { label: 'SaaS Development', href: '/services/saas-development', desc: 'Full-stack SaaS product builds' },
  { label: 'AI Automation', href: '/services/ai-automation', desc: 'Custom AI agents & workflows' },
  { label: 'Landing Pages', href: '/services/landing-page', desc: 'High-converting landing pages' },
  { label: 'Digital Marketing', href: '/services/digital-marketing', desc: 'ROI-driven ads & campaigns' },
  { label: 'Facebook Business', href: '/services/facebook-business', desc: 'Page setup & verification' },
];

const navLinks = [
  { label: 'About', href: '/about' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-[80] transition-all duration-300 ${
          scrolled || mobileOpen
            ? 'bg-[#0F172A]/95 backdrop-blur-xl border-b border-white/[0.06] shadow-2xl shadow-black/30 py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 shrink-0">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white/95 p-1.5 shadow-md border border-white/80 flex items-center justify-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://i.ibb.co.com/zhLsDmyc/L1-removebg-preview.png"
                  alt="DataNest BD Logo"
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <span className="block text-lg sm:text-xl font-bold text-gradient leading-tight">DataNest BD</span>
                <span className="hidden sm:block text-[10px] text-slate-500 uppercase tracking-widest">Digital Agency</span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {/* Services Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <button className="flex items-center gap-1.5 nav-link px-3 py-2 rounded-lg hover:bg-white/[0.04] transition-colors">
                  Services
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
                </button>

                {servicesOpen && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[560px] glass-dark rounded-2xl shadow-2xl shadow-black/60 p-4 grid grid-cols-2 gap-1 border border-white/[0.08]">
                    {services.map((s) => (
                      <Link
                        key={s.href}
                        href={s.href}
                        className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/[0.05] transition-colors group"
                      >
                        <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-blue-500/20 transition-colors">
                          <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-emerald-400" />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-slate-100 group-hover:text-white transition-colors">{s.label}</p>
                          <p className="text-xs text-slate-500 mt-0.5">{s.desc}</p>
                        </div>
                      </Link>
                    ))}
                    <div className="col-span-2 mt-2 pt-3 border-t border-white/[0.06] flex items-center justify-between">
                      <span className="text-xs text-slate-500">All 7 services available</span>
                      <Link href="/services" className="text-xs font-semibold text-blue-400 hover:text-blue-300 flex items-center gap-1 transition-colors">
                        View all services <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} className="nav-link px-3 py-2 rounded-lg hover:bg-white/[0.04] transition-colors">
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-sm font-medium text-slate-400 hover:text-white transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-emerald-500" />
                WhatsApp
              </a>
              <Link
                href="/contact"
                className="btn-primary text-sm py-2.5 px-5"
              >
                Get Started
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Mobile Toggle */}
            <button
              type="button"
              aria-label="Toggle mobile menu"
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden w-10 h-10 rounded-xl border border-white/10 bg-white/[0.04] flex items-center justify-center text-slate-300 hover:text-white transition-colors"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-[75] lg:hidden transition-all duration-300 ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="absolute inset-0 bg-[#0F172A]/95 backdrop-blur-xl" onClick={() => setMobileOpen(false)} />
        <div className={`absolute top-0 right-0 h-full w-full max-w-sm bg-[#0F172A] border-l border-white/[0.06] shadow-2xl transition-transform duration-300 ${mobileOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="flex flex-col h-full overflow-y-auto">
            <div className="flex items-center justify-between p-5 border-b border-white/[0.06]">
              <span className="font-bold text-gradient text-lg">DataNest BD</span>
              <button onClick={() => setMobileOpen(false)} className="w-9 h-9 rounded-lg border border-white/10 bg-white/[0.04] flex items-center justify-center text-slate-400">
                <X className="w-5 h-5" />
              </button>
            </div>

            <nav className="flex-1 p-5 space-y-1">
              <p className="text-xs font-semibold text-slate-600 uppercase tracking-widest mb-3 px-3">Services</p>
              {services.map((s) => (
                <Link
                  key={s.href}
                  href={s.href}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-slate-300 hover:text-white hover:bg-white/[0.04] transition-colors"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-400 to-emerald-400 shrink-0" />
                  {s.label}
                </Link>
              ))}

              <div className="h-px bg-white/[0.06] my-4" />

              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block px-3 py-2.5 rounded-xl text-sm font-medium text-slate-300 hover:text-white hover:bg-white/[0.04] transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="p-5 border-t border-white/[0.06] space-y-3">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="btn-secondary w-full justify-center text-sm py-3"
              >
                <MessageCircle className="w-4 h-4 text-emerald-500" />
                Chat on WhatsApp
              </a>
              <Link href="/contact" onClick={() => setMobileOpen(false)} className="btn-primary w-full justify-center text-sm py-3">
                Get Free Consultation
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

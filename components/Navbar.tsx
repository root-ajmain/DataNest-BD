'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Menu, X, ChevronDown, MessageCircle, ArrowRight,
  Globe, Layers, Bot, LayoutTemplate, TrendingUp, Facebook, Zap,
} from 'lucide-react';

const WHATSAPP_URL = 'https://wa.me/8801804277420?text=Hi%20DataNest%20BD%2C%20I%20want%20to%20get%20started';

const services = [
  {
    label: 'WhatsApp API',
    href: '/services/whatsapp-api',
    desc: 'Official WhatChimp partner — 0% markup',
    Icon: MessageCircle,
    color: 'emerald',
    iconBg: 'bg-emerald-500/15 border-emerald-500/25 group-hover:bg-emerald-500/25',
    iconColor: 'text-emerald-400',
    badge: 'Most Popular',
  },
  {
    label: 'Web Development',
    href: '/services/web-development',
    desc: 'Conversion-focused websites & apps',
    Icon: Globe,
    color: 'blue',
    iconBg: 'bg-blue-500/15 border-blue-500/25 group-hover:bg-blue-500/25',
    iconColor: 'text-blue-400',
  },
  {
    label: 'SaaS Development',
    href: '/services/saas-development',
    desc: 'Full-stack SaaS product builds',
    Icon: Layers,
    color: 'violet',
    iconBg: 'bg-violet-500/15 border-violet-500/25 group-hover:bg-violet-500/25',
    iconColor: 'text-violet-400',
  },
  {
    label: 'AI Automation',
    href: '/services/ai-automation',
    desc: 'Custom AI agents & workflows',
    Icon: Bot,
    color: 'cyan',
    iconBg: 'bg-cyan-500/15 border-cyan-500/25 group-hover:bg-cyan-500/25',
    iconColor: 'text-cyan-400',
    badge: 'New',
  },
  {
    label: 'Landing Pages',
    href: '/services/landing-page',
    desc: 'High-converting landing pages',
    Icon: LayoutTemplate,
    color: 'amber',
    iconBg: 'bg-amber-500/15 border-amber-500/25 group-hover:bg-amber-500/25',
    iconColor: 'text-amber-400',
  },
  {
    label: 'Digital Marketing',
    href: '/services/digital-marketing',
    desc: 'ROI-driven ads & campaigns',
    Icon: TrendingUp,
    color: 'rose',
    iconBg: 'bg-rose-500/15 border-rose-500/25 group-hover:bg-rose-500/25',
    iconColor: 'text-rose-400',
  },
  {
    label: 'Facebook Business',
    href: '/services/facebook-business',
    desc: 'Page setup & Meta verification',
    Icon: Facebook,
    color: 'indigo',
    iconBg: 'bg-indigo-500/15 border-indigo-500/25 group-hover:bg-indigo-500/25',
    iconColor: 'text-indigo-400',
  },
];

const navLinks = [
  { label: 'About', href: '/about' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Scroll detection
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on route change (back/forward button fix)
  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  // Body scroll lock when mobile menu open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  // Cleanup hover timer
  useEffect(() => {
    return () => { if (closeTimer.current) clearTimeout(closeTimer.current); };
  }, []);

  const openServices = useCallback(() => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setServicesOpen(true);
  }, []);

  const scheduleClose = useCallback(() => {
    closeTimer.current = setTimeout(() => setServicesOpen(false), 180);
  }, []);

  const closeMobile = useCallback(() => setMobileOpen(false), []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-[80] transition-all duration-300 ${
          scrolled || mobileOpen
            ? 'bg-[#0F172A]/97 backdrop-blur-xl border-b border-white/[0.07] shadow-2xl shadow-black/40 py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">

            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 shrink-0" onClick={closeMobile}>
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-white/95 p-1.5 shadow-md border border-white/80 flex items-center justify-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://i.ibb.co/zhLsDmyc/L1-removebg-preview.png"
                  alt="DataNest BD Logo"
                  className="w-full h-full object-contain"
                  fetchPriority="high"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <span className="block text-lg sm:text-xl font-bold text-gradient leading-tight">DataNest BD</span>
                <span className="hidden sm:block text-[10px] text-slate-500 uppercase tracking-widest">Digital Agency</span>
              </div>
            </Link>

            {/* ── Desktop Nav ─────────────────────────────────────── */}
            <nav className="hidden lg:flex items-center gap-0.5">
              {/* Services Dropdown trigger */}
              <div
                className="relative"
                onMouseEnter={openServices}
                onMouseLeave={scheduleClose}
              >
                <button
                  className={`flex items-center gap-1.5 text-sm font-medium px-3.5 py-2 rounded-lg transition-all ${
                    servicesOpen
                      ? 'text-white bg-white/[0.07]'
                      : 'text-slate-300 hover:text-white hover:bg-white/[0.04]'
                  }`}
                  onClick={() => setServicesOpen((v) => !v)}
                  aria-expanded={servicesOpen}
                  aria-haspopup="true"
                >
                  Services
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${
                      servicesOpen ? 'rotate-180 text-blue-400' : ''
                    }`}
                  />
                </button>

                {/* Dropdown panel — pt-3 bridges mouse gap */}
                <div
                  className={`absolute top-full left-1/2 -translate-x-1/2 pt-3 transition-all duration-200 origin-top ${
                    servicesOpen
                      ? 'opacity-100 pointer-events-auto scale-100 translate-y-0'
                      : 'opacity-0 pointer-events-none scale-95 -translate-y-2'
                  }`}
                  onMouseEnter={openServices}
                  onMouseLeave={scheduleClose}
                >
                  <div
                    className="w-[640px] rounded-2xl shadow-2xl shadow-black/70 p-3 border border-white/[0.09]"
                    style={{ background: 'linear-gradient(135deg, #0d1826 0%, #0a1420 100%)' }}
                  >
                    {/* Dropdown header */}
                    <div className="flex items-center justify-between px-3 py-2 mb-2">
                      <div className="flex items-center gap-2">
                        <Zap className="w-3.5 h-3.5 text-blue-400" />
                        <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Our Services</span>
                      </div>
                      <Link
                        href="/services"
                        onClick={() => setServicesOpen(false)}
                        className="text-xs font-semibold text-blue-400 hover:text-blue-300 flex items-center gap-1 transition-colors"
                      >
                        View all <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>

                    {/* Service grid */}
                    <div className="grid grid-cols-2 gap-1">
                      {services.map((s) => (
                        <Link
                          key={s.href}
                          href={s.href}
                          onClick={() => setServicesOpen(false)}
                          className="group flex items-start gap-3 p-3 rounded-xl hover:bg-white/[0.05] transition-all duration-150"
                        >
                          <div
                            className={`w-9 h-9 rounded-xl border flex items-center justify-center shrink-0 mt-0.5 transition-all duration-150 ${s.iconBg}`}
                          >
                            <s.Icon className={`w-4 h-4 ${s.iconColor}`} />
                          </div>
                          <div className="min-w-0">
                            <div className="flex items-center gap-1.5">
                              <p className="text-sm font-semibold text-slate-200 group-hover:text-white transition-colors">
                                {s.label}
                              </p>
                              {s.badge && (
                                <span className={`text-[9px] font-black px-1.5 py-0.5 rounded-full ${
                                  s.badge === 'New'
                                    ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/25'
                                    : 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/25'
                                }`}>
                                  {s.badge}
                                </span>
                              )}
                            </div>
                            <p className="text-xs text-slate-500 mt-0.5 group-hover:text-slate-400 transition-colors leading-snug">
                              {s.desc}
                            </p>
                          </div>
                        </Link>
                      ))}
                    </div>

                    {/* Dropdown footer CTA */}
                    <div className="mt-2 mx-1 p-3 rounded-xl bg-gradient-to-r from-blue-900/30 to-emerald-900/20 border border-blue-500/15 flex items-center justify-between gap-4">
                      <div>
                        <p className="text-xs font-bold text-white">Not sure which service you need?</p>
                        <p className="text-xs text-slate-500 mt-0.5">Get a free strategy call — we'll recommend the right fit.</p>
                      </div>
                      <Link
                        href="/contact"
                        onClick={() => setServicesOpen(false)}
                        className="shrink-0 flex items-center gap-1.5 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold px-3.5 py-2 rounded-lg transition-colors whitespace-nowrap"
                      >
                        Free Consult <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-slate-300 hover:text-white px-3.5 py-2 rounded-lg hover:bg-white/[0.04] transition-all"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* CTA — desktop */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-sm font-medium text-slate-400 hover:text-white transition-colors px-2 py-1.5"
              >
                <MessageCircle className="w-4 h-4 text-emerald-500" />
                WhatsApp
              </a>
              <Link href="/contact" className="btn-primary text-sm py-2.5 px-5">
                Get Started <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Mobile toggle */}
            <button
              type="button"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((v) => !v)}
              className="lg:hidden w-10 h-10 rounded-xl border border-white/[0.1] bg-white/[0.05] flex items-center justify-center text-slate-300 hover:text-white hover:bg-white/[0.08] transition-all"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* ── Mobile Menu Overlay ─────────────────────────────────── */}
      {/* Backdrop */}
      <div
        aria-hidden="true"
        className={`fixed inset-0 z-[85] lg:hidden bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeMobile}
      />

      {/* Slide-in panel — z-[90] so it sits above header (z-80) */}
      <div
        className={`fixed top-0 right-0 h-full z-[90] lg:hidden w-full max-w-[320px] flex flex-col shadow-2xl shadow-black/60 transition-transform duration-300 ease-out ${
          mobileOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ background: 'linear-gradient(180deg, #0d1826 0%, #080e1a 100%)' }}
      >
        {/* Panel header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-white/[0.07] shrink-0">
          <Link href="/" onClick={closeMobile} className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-white/90 p-1 flex items-center justify-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://i.ibb.co/zhLsDmyc/L1-removebg-preview.png"
                alt="DataNest BD"
                className="w-full h-full object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
            <span className="font-bold text-gradient text-base">DataNest BD</span>
          </Link>
          <button
            onClick={closeMobile}
            aria-label="Close menu"
            className="w-9 h-9 rounded-xl border border-white/[0.1] bg-white/[0.05] flex items-center justify-center text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-4.5 h-4.5" />
          </button>
        </div>

        {/* Scrollable nav area */}
        <nav className="flex-1 overflow-y-auto px-4 py-4 space-y-1">

          {/* Services accordion */}
          <button
            type="button"
            onClick={() => setMobileServicesOpen((v) => !v)}
            className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-semibold text-slate-200 hover:text-white hover:bg-white/[0.05] transition-colors"
          >
            <span className="flex items-center gap-2.5">
              <span className="w-7 h-7 rounded-lg bg-blue-500/15 border border-blue-500/20 flex items-center justify-center">
                <Zap className="w-3.5 h-3.5 text-blue-400" />
              </span>
              Services
            </span>
            <ChevronDown
              className={`w-4 h-4 text-slate-500 transition-transform duration-200 ${
                mobileServicesOpen ? 'rotate-180 text-blue-400' : ''
              }`}
            />
          </button>

          {/* Services list — animated height */}
          <div
            className={`overflow-hidden transition-all duration-300 ${
              mobileServicesOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <div className="pl-3 pr-1 py-1.5 space-y-0.5">
              {services.map((s) => (
                <Link
                  key={s.href}
                  href={s.href}
                  onClick={closeMobile}
                  className="group flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-white/[0.05] transition-all"
                >
                  <div
                    className={`w-8 h-8 rounded-lg border flex items-center justify-center shrink-0 transition-all ${s.iconBg}`}
                  >
                    <s.Icon className={`w-3.5 h-3.5 ${s.iconColor}`} />
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-1.5">
                      <span className="text-sm font-medium text-slate-300 group-hover:text-white transition-colors">
                        {s.label}
                      </span>
                      {s.badge && (
                        <span className={`text-[9px] font-black px-1.5 py-0.5 rounded-full ${
                          s.badge === 'New'
                            ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/25'
                            : 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/25'
                        }`}>
                          {s.badge}
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-slate-600 group-hover:text-slate-500 transition-colors mt-0.5 leading-snug truncate">
                      {s.desc}
                    </p>
                  </div>
                </Link>
              ))}
              {/* View all services */}
              <Link
                href="/services"
                onClick={closeMobile}
                className="flex items-center gap-2 px-3 py-2.5 rounded-xl text-xs font-semibold text-blue-400 hover:text-blue-300 hover:bg-blue-500/5 transition-colors"
              >
                <ArrowRight className="w-3.5 h-3.5" />
                View all services
              </Link>
            </div>
          </div>

          <div className="h-px bg-white/[0.06] my-2" />

          {/* Regular nav links */}
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={closeMobile}
              className="flex items-center px-3 py-2.5 rounded-xl text-sm font-medium text-slate-300 hover:text-white hover:bg-white/[0.05] transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Bottom CTAs */}
        <div className="px-4 py-4 border-t border-white/[0.07] space-y-2.5 shrink-0">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            onClick={closeMobile}
            className="flex items-center justify-center gap-2 w-full py-3 rounded-xl text-sm font-semibold border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500/20 transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            Chat on WhatsApp
          </a>
          <Link
            href="/contact"
            onClick={closeMobile}
            className="btn-primary w-full justify-center text-sm py-3"
          >
            Get Free Consultation <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </>
  );
}

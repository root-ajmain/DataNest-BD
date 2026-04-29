import Link from 'next/link';
import { ArrowRight, MessageCircle, CheckCircle, TrendingUp, Users, Zap } from 'lucide-react';

const WHATSAPP_URL = 'https://wa.me/8801804277420?text=Hi%20DataNest%20BD%2C%20I%20want%20to%20get%20started';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-hero-mesh pt-24 pb-16">
      {/* Background mesh gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-6xl">
          <div className="absolute top-20 -left-20 w-80 h-80 bg-blue-600/15 rounded-full blur-3xl animate-pulse-slow" />
          <div className="absolute top-40 -right-20 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
          <div className="absolute bottom-0 left-1/3 w-64 h-64 bg-cyan-600/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '4s' }} />
        </div>
        {/* Grid lines */}
        <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left: Content */}
          <div className="text-center lg:text-left">
            {/* Badges */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-2 mb-6">
              <div className="inline-flex items-center gap-2 section-label">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                Official Meta Partner
              </div>
              <div className="inline-flex items-center gap-2 section-label">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500" />
                </span>
                Authorized WhatChimp Partner · Bangladesh
              </div>
            </div>

            {/* Headline */}
            <h1 className="section-title text-5xl sm:text-6xl lg:text-[64px] mb-6 leading-[1.1]">
              Build. Automate.{' '}
              <span className="text-gradient">Grow 10X</span>
              {' '}Faster.
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-slate-400 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Bangladesh&apos;s leading agency for <strong className="text-slate-200">Web Development</strong>, <strong className="text-slate-200">AI Automation</strong>, <strong className="text-slate-200">WhatsApp API</strong>, and <strong className="text-slate-200">Digital Marketing</strong>. Turn visitors into customers — on autopilot.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-10">
              <Link href="/contact" className="btn-primary text-base px-7 py-4">
                Get Free Consultation
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="btn-secondary text-base px-7 py-4"
              >
                <MessageCircle className="w-5 h-5 text-emerald-500" />
                Chat on WhatsApp
              </a>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-5 text-sm text-slate-500">
              {[
                { icon: CheckCircle, text: 'Official Meta Partner', color: 'text-emerald-500' },
                { icon: Users, text: '100+ Happy Clients', color: 'text-blue-400' },
                { icon: Zap, text: '48hr Setup', color: 'text-amber-400' },
              ].map(({ icon: Icon, text, color }) => (
                <div key={text} className="flex items-center gap-1.5">
                  <Icon className={`w-4 h-4 ${color}`} />
                  <span className="font-medium text-slate-400">{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Visual */}
          <div className="relative lg:block animate-fade-in">
            {/* Dashboard mockup */}
            <div className="relative rounded-2xl overflow-hidden border border-white/[0.08] shadow-2xl shadow-black/60 bg-[#1A2332]">
              {/* Header bar */}
              <div className="flex items-center gap-2 px-5 py-3.5 bg-[#0F172A]/80 border-b border-white/[0.06]">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/70" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/70" />
                </div>
                <div className="flex-1 mx-4">
                  <div className="bg-white/[0.06] rounded-md px-3 py-1 text-xs text-slate-500 text-center">datanestbd.com/dashboard</div>
                </div>
              </div>

              {/* Dashboard content */}
              <div className="p-5 space-y-4">
                {/* Metric row */}
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { label: 'Messages Sent', value: '2.4M+', change: '+24%', color: 'text-emerald-400' },
                    { label: 'Leads Generated', value: '18K+', change: '+61%', color: 'text-blue-400' },
                    { label: 'Avg. ROI', value: '340%', change: '+18%', color: 'text-amber-400' },
                  ].map((m) => (
                    <div key={m.label} className="metric-card">
                      <p className={`text-xl font-bold ${m.color} font-heading`}>{m.value}</p>
                      <p className="text-[10px] text-slate-500 mt-0.5">{m.label}</p>
                      <p className="text-[10px] text-emerald-400 font-semibold mt-1">{m.change} this month</p>
                    </div>
                  ))}
                </div>

                {/* Activity feed */}
                <div className="space-y-2">
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Live Activity</p>
                  {[
                    { action: 'WhatsApp broadcast sent', count: '4,200 messages', time: '2m ago', dot: 'bg-emerald-400' },
                    { action: 'New lead captured', count: 'via Facebook Ads', time: '5m ago', dot: 'bg-blue-400' },
                    { action: 'AI agent response', count: '0.8s avg. reply', time: '7m ago', dot: 'bg-purple-400' },
                    { action: 'Website lead form', count: '3 submissions', time: '12m ago', dot: 'bg-amber-400' },
                  ].map((item) => (
                    <div key={item.action} className="flex items-center gap-3 px-3 py-2.5 rounded-xl bg-white/[0.02] border border-white/[0.04]">
                      <div className={`w-2 h-2 rounded-full ${item.dot} shrink-0 animate-pulse`} />
                      <div className="flex-1 min-w-0">
                        <span className="text-xs font-medium text-slate-300 truncate">{item.action}</span>
                        <span className="text-xs text-slate-600 ml-2">{item.count}</span>
                      </div>
                      <span className="text-[10px] text-slate-600 shrink-0">{item.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating notification card */}
            <div className="hidden lg:flex absolute -left-8 top-1/4 glass-dark rounded-xl px-4 py-3 items-center gap-3 shadow-2xl shadow-black/50 animate-float border border-white/[0.08]">
              <div className="w-9 h-9 rounded-lg bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center">
                <MessageCircle className="w-4 h-4 text-emerald-400" />
              </div>
              <div>
                <p className="text-xs text-slate-400 font-medium">New Lead</p>
                <p className="text-sm font-bold text-white">via WhatsApp API</p>
              </div>
            </div>

            {/* Floating metric card */}
            <div className="hidden lg:flex absolute -right-8 bottom-1/3 glass-dark rounded-xl px-4 py-3 items-center gap-3 shadow-2xl shadow-black/50 animate-float border border-white/[0.08]" style={{ animationDelay: '3s' }}>
              <div className="w-9 h-9 rounded-lg bg-blue-500/20 border border-blue-500/30 flex items-center justify-center">
                <TrendingUp className="w-4 h-4 text-blue-400" />
              </div>
              <div>
                <p className="text-xs text-slate-400 font-medium">Conversion Rate</p>
                <p className="text-sm font-bold text-white">+320% this month</p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-600">
        <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
        <div className="w-5 h-8 rounded-full border border-white/10 flex items-start justify-center pt-1.5">
          <div className="w-1 h-2 bg-blue-500 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}

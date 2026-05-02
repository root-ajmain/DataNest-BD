'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { Check, Zap, ArrowRight, MessageCircle, Tag } from 'lucide-react';
import CountdownTimer from '@/components/CountdownTimer';

/* ─── PRICING DATA ────────────────────────────────────────────── */
const BILLING_OPTIONS = [
  { months: 1,  label: 'Monthly',   totalLabel: 'Monthly Plan'  },
  { months: 3,  label: '3 Months',  totalLabel: '3-Month Plan'  },
  { months: 6,  label: '6 Months',  totalLabel: '6-Month Plan'  },
  { months: 12, label: '12 Months', totalLabel: '12-Month Plan' },
] as const;

const PLAN_DISCOUNT = 0.50;   // 50% off all plans
const SETUP_ORIGINAL = 2000;
const SETUP_DISCOUNTED = 500; // 75% off setup

const PLANS = [
  {
    id: 'basic',
    name: 'Basic Plan',
    originalMonthlyPrice: 6000,
    monthlyPrice: 3000,         // after 50% off
    badge: 'Best to Get Started',
    description: 'Ideal for small businesses or solopreneurs starting with WhatsApp Broadcasting & Automation.',
    highlights: ['Best for new teams', 'Official API-ready setup', '0% markup on Meta charges'],
    popular: false,
    features: [
      '0% Markup Fees',
      '2 Team Members',
      '10,000 Subscribers',
      'Number Coexistence',
      'WhatsApp AI Agent',
      '100,000 AI Message Tokens',
      'Unlimited Message Credits',
      'Unlimited Free Incoming Conversation',
      'Unlimited Chatbot Sessions',
      'Bulk WhatsApp Messaging',
      'Multi-Agent Shared Inbox',
      'Drag & Drop Chatbot Builder',
      'Campaign Reporting',
      'Automated Follow-Up Bot',
      'Interactive User Input Collection Bot',
      'Messaging Template Management',
      'WhatsApp Chat Widget',
      'SMS Broadcasting',
      'CRM Integration',
      'API Integration (Developer)',
      'Outgoing Webhooks',
      'Zapier Integration',
      'Pabbly Integration',
      'Make Integration',
      'N8N Integration',
      'WooCommerce Integration',
      'Shopify Integration',
      '24/7 Free Support',
      'Platform Training Included',
      'Technical Issues Covered Under Subscription',
    ],
  },
  {
    id: 'growth',
    name: 'Growth Plan',
    originalMonthlyPrice: 12000,
    monthlyPrice: 6000,         // after 50% off
    badge: 'MOST POPULAR',
    description: 'Advanced features and higher limits — ideal for growing businesses needing more capabilities.',
    highlights: ['Best for scaling teams', 'Omnichannel support', 'Advanced AI automation'],
    popular: true,
    features: [
      'Includes all Basic features',
      '5 Team Members',
      'Omnichannel Inbox: WhatsApp, Instagram & Facebook',
      'Appointment Booking System',
      '20,000 Subscribers',
      'High Speed Broadcasting',
      'Unlimited AI Message Tokens',
      'AI Intent Detection',
      'Roles and Permissions',
      'Phone Number Masking',
      'Manager Monitoring',
      'Incoming Chat Translation',
      'Click to WhatsApp Ad Integration',
      'HTTP API Calls in Chatbot',
      'Smart Automatic Agent Routing',
      'Native WhatsApp Form Builder',
      'Custom Webhook Listener',
      'WhatsApp Product Catalog',
      'Remove "Powered by DataNest BD"',
      '24/7 Free Support',
      'Platform Training Included',
      'Technical Issues Covered Under Subscription',
    ],
  },
] as const;

function formatBDT(amount: number) {
  return new Intl.NumberFormat('en-BD', {
    style: 'currency',
    currency: 'BDT',
    maximumFractionDigits: 0,
  }).format(amount);
}

export default function WhatsAppPricing() {
  const [billingMonths, setBillingMonths] = useState<1 | 3 | 6 | 12>(1);

  const selectedOption = useMemo(
    () => BILLING_OPTIONS.find((o) => o.months === billingMonths)!,
    [billingMonths]
  );

  return (
    <section id="pricing" className="section-padding bg-[#0A1020] relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent" />
        <div
          className="absolute inset-0 opacity-[0.012]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-emerald-600/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="section-label mx-auto mb-4">
            <MessageCircle className="w-4 h-4" />
            WhatsApp API Pricing
          </div>
          <h2 className="section-title">
            Simple, Transparent{' '}
            <span className="text-gradient">Pricing</span>
          </h2>
          <p className="section-subtitle mx-auto mt-4">
            Official WhatsApp Business API via WhatChimp with{' '}
            <strong className="text-emerald-400">0% markup</strong> on Meta conversation charges.
          </p>

          {/* 50% off banner */}
          <div className="mt-6 inline-flex items-center gap-2.5 bg-gradient-to-r from-emerald-950/80 to-emerald-900/60 border border-emerald-500/30 rounded-2xl px-5 py-3 shadow-lg shadow-emerald-900/20">
            <Tag className="w-4 h-4 text-emerald-400 shrink-0" />
            <p className="text-sm font-semibold text-emerald-300">
              Limited-Time Offer —{' '}
              <span className="text-white font-black">50% OFF</span>{' '}
              on all subscription plans
            </p>
            <span className="ml-1 bg-emerald-500 text-black text-xs font-black px-2 py-0.5 rounded-full tracking-wide">
              SAVE 50%
            </span>
          </div>
        </div>

        {/* Countdown */}
        <CountdownTimer />

        {/* Billing Toggle */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex flex-wrap justify-center gap-1.5 p-1.5 rounded-2xl bg-white/[0.04] border border-white/[0.07] shadow-xl shadow-black/30">
            {BILLING_OPTIONS.map(({ months, label }) => {
              const isActive = billingMonths === months;
              return (
                <button
                  key={months}
                  type="button"
                  onClick={() => setBillingMonths(months as 1 | 3 | 6 | 12)}
                  className={`relative px-4 sm:px-6 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                    isActive ? 'pricing-tab-active' : 'pricing-tab-inactive'
                  }`}
                >
                  {label}
                  <span className={`ml-1.5 text-xs font-black ${isActive ? 'text-white/90' : 'text-emerald-400'}`}>
                    50% OFF
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Plan Cards */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {PLANS.map((plan) => {
            const originalTotal = plan.originalMonthlyPrice * billingMonths;
            const discountedTotal = plan.monthlyPrice * billingMonths;
            const savings = originalTotal - discountedTotal;

            return (
              <div
                key={plan.id}
                className={`relative rounded-3xl p-7 flex flex-col ${
                  plan.popular
                    ? 'card-popular border-blue-500/30 ring-1 ring-blue-500/20 shadow-2xl shadow-blue-900/20 md:scale-[1.02] z-10'
                    : 'bg-[#1A2332] border border-white/[0.08]'
                }`}
              >
                {/* Popular badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-brand text-white px-5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg shadow-blue-900/40">
                    {plan.badge}
                  </div>
                )}

                {/* Plan header */}
                <div className="flex items-start justify-between gap-3 mb-2">
                  <h3 className="text-2xl font-bold text-white">{plan.name}</h3>
                  {/* 50% OFF badge — always visible */}
                  <span className="shrink-0 inline-flex items-center gap-1 bg-gradient-to-r from-emerald-500 to-teal-500 text-black text-xs font-black px-3 py-1.5 rounded-full shadow-md shadow-emerald-900/40 animate-pulse">
                    50% OFF
                  </span>
                </div>

                <p className="text-sm text-slate-400 mb-5 leading-relaxed">{plan.description}</p>

                {/* Highlights */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {plan.highlights.map((h) => (
                    <span key={h} className="badge badge-blue text-xs">{h}</span>
                  ))}
                </div>

                {/* Price Box */}
                <div className="rounded-2xl border border-white/[0.07] bg-black/20 p-4 mb-6">
                  {/* Monthly rate row */}
                  <div className="flex items-center gap-2 mb-3 pb-3 border-b border-white/[0.06]">
                    <div className="min-w-0">
                      <p className="text-[10px] uppercase tracking-wider text-slate-500 mb-0.5">Monthly Rate</p>
                      <div className="flex items-baseline gap-1.5 flex-wrap">
                        <span className="text-sm line-through text-slate-600">{formatBDT(plan.originalMonthlyPrice)}</span>
                        <span className="text-lg sm:text-xl font-black text-emerald-400">{formatBDT(plan.monthlyPrice)}</span>
                        <span className="text-xs text-emerald-500 font-bold">/mo</span>
                      </div>
                    </div>
                    <div className="ml-auto shrink-0 bg-emerald-500/15 border border-emerald-500/25 rounded-xl px-2 sm:px-3 py-1.5 text-center">
                      <p className="text-[9px] sm:text-[10px] text-emerald-400 font-semibold">Save</p>
                      <p className="text-xs sm:text-sm font-black text-emerald-300">
                        {formatBDT(plan.originalMonthlyPrice - plan.monthlyPrice)}/mo
                      </p>
                    </div>
                  </div>

                  {/* Period total */}
                  <div className="flex items-end justify-between gap-3 mb-3">
                    <div>
                      <p className="text-xs uppercase tracking-wider text-slate-500 mb-1">
                        {selectedOption.totalLabel} Total
                      </p>
                      <p className="text-4xl font-black text-white font-heading">
                        {formatBDT(discountedTotal)}
                      </p>
                      <p className="text-xs text-slate-600 line-through mt-1">{formatBDT(originalTotal)}</p>
                    </div>
                    <div className="text-right">
                      <div className="inline-flex flex-col items-end bg-emerald-900/30 border border-emerald-500/20 rounded-xl px-3 py-2">
                        <p className="text-[10px] text-slate-500">Total Savings</p>
                        <p className="text-base font-black text-emerald-400">{formatBDT(savings)}</p>
                      </div>
                    </div>
                  </div>

                  {/* Stat chips */}
                  <div className="grid grid-cols-3 gap-1.5">
                    <div className="rounded-xl bg-white/[0.04] border border-white/[0.05] px-2 py-2">
                      <p className="text-[9px] uppercase tracking-wide text-slate-500">Original</p>
                      <p className="text-[10px] sm:text-xs font-bold text-slate-400 truncate">{formatBDT(originalTotal)}</p>
                    </div>
                    <div className="rounded-xl bg-emerald-900/20 border border-emerald-500/20 px-2 py-2">
                      <p className="text-[9px] uppercase tracking-wide text-slate-500">You Pay</p>
                      <p className="text-[10px] sm:text-xs font-bold text-emerald-300 truncate">{formatBDT(discountedTotal)}</p>
                    </div>
                    <div className="rounded-xl bg-blue-900/20 border border-blue-500/20 px-2 py-2">
                      <p className="text-[9px] uppercase tracking-wide text-slate-500">You Save</p>
                      <p className="text-[10px] sm:text-xs font-bold text-blue-300 truncate">{formatBDT(savings)}</p>
                    </div>
                  </div>

                  {/* Setup fee row */}
                  <div className="mt-3 flex items-center gap-2 rounded-xl bg-amber-900/10 border border-amber-500/15 px-3 py-2">
                    <div className="flex-1">
                      <p className="text-[10px] uppercase tracking-wide text-slate-500">One-Time Setup Fee</p>
                      <div className="flex items-baseline gap-1.5 mt-0.5">
                        <span className="text-xs line-through text-slate-600">{formatBDT(SETUP_ORIGINAL)}</span>
                        <span className="text-sm font-black text-amber-400">{formatBDT(SETUP_DISCOUNTED)}</span>
                      </div>
                    </div>
                    <span className="text-[10px] font-black bg-amber-500/20 text-amber-400 border border-amber-500/25 px-2 py-1 rounded-lg">
                      75% OFF
                    </span>
                  </div>
                </div>

                {/* Features */}
                <div className="grid sm:grid-cols-2 gap-2 mb-6">
                  {plan.features.map((feature) => (
                    <div key={feature} className="feature-check">
                      <Check
                        className={`w-3.5 h-3.5 shrink-0 mt-0.5 ${
                          plan.popular ? 'text-emerald-400' : 'text-emerald-500'
                        }`}
                      />
                      <span className="text-xs text-slate-300 leading-relaxed">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <Link
                  href="/contact"
                  className={`flex items-center justify-center gap-2 w-full py-3.5 px-6 rounded-xl text-center font-semibold transition-all mt-auto ${
                    plan.popular ? 'btn-primary' : 'btn-secondary'
                  }`}
                >
                  {plan.popular ? (
                    <>
                      Get Started <ArrowRight className="w-4 h-4" />
                    </>
                  ) : (
                    <>
                      Choose Plan <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </Link>
              </div>
            );
          })}
        </div>

        {/* Setup fee note */}
        <div className="mt-10 max-w-3xl mx-auto">
          <div className="p-4 rounded-2xl bg-amber-950/20 border border-amber-500/15 flex gap-3">
            <div className="w-1.5 shrink-0 rounded-full bg-amber-500/60 mt-1" />
            <p className="text-sm text-slate-400 leading-relaxed">
              One-time setup fee:{' '}
              <span className="line-through text-slate-600">BDT 2,000</span>{' '}
              <strong className="text-amber-400">BDT 500</strong>{' '}
              <span className="text-xs bg-amber-500/15 text-amber-400 border border-amber-500/20 rounded-full px-2 py-0.5 font-bold">
                75% OFF
              </span>
              {' '}— covers complete account setup, WhatsApp number onboarding, Meta business verification, and initial chatbot configuration. Charged once only.
            </p>
          </div>
        </div>

        {/* Meta pricing note */}
        <div className="mt-4 max-w-3xl mx-auto">
          <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06] flex gap-4">
            <Zap className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-semibold text-white mb-1">About Meta Conversation Charges</p>
              <p className="text-sm text-slate-400 leading-relaxed">
                Meta charges separately per conversation based on category and market. We apply{' '}
                <strong className="text-emerald-400">0% markup</strong> on these charges — many other providers add
                10–25% on top. Current reference rates (Rest of Asia Pacific, USD): Marketing: $0.0732, Utility:
                $0.0113.{' '}
                <a
                  href="https://business.whatsapp.com/products/platform-pricing"
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-400 hover:text-blue-300 underline transition-colors"
                >
                  Official Meta pricing →
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Payment methods */}
        <div className="mt-6 text-center">
          <p className="text-xs text-slate-600 mb-2">Accepted Payment Methods</p>
          <div className="flex flex-wrap justify-center gap-3">
            {['bKash', 'Nagad', 'Bank Transfer', 'Rocket'].map((method) => (
              <span
                key={method}
                className="text-xs px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.06] text-slate-400"
              >
                {method}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

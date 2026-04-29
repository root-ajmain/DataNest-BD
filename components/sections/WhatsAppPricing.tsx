'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { Check, Zap, ArrowRight, MessageCircle } from 'lucide-react';

/* ─── EXACT PRICING DATA — DO NOT MODIFY ─────────────────────── */
const BILLING_OPTIONS = [
  { months: 1, label: 'Monthly', discount: 0 },
  { months: 3, label: '3 Months', discount: 0.05 },
  { months: 6, label: '6 Months', discount: 0.10 },
  { months: 12, label: '12 Months', discount: 0.15 },
] as const;

const PLANS = [
  {
    id: 'basic',
    name: 'Basic Plan',
    monthlyPrice: 3000,
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
    monthlyPrice: 6000,
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

  const discount = useMemo(
    () => BILLING_OPTIONS.find((o) => o.months === billingMonths)?.discount ?? 0,
    [billingMonths]
  );

  return (
    <section id="pricing" className="section-padding bg-[#0A1020] relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent" />
        <div className="absolute inset-0 opacity-[0.012]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)', backgroundSize: '48px 48px' }} />
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
            Official WhatsApp Business API via WhatChimp with <strong className="text-emerald-400">0% markup</strong> on Meta conversation charges. Billed monthly or save with longer plans.
          </p>
        </div>

        {/* Billing Toggle */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex flex-wrap justify-center gap-1.5 p-1.5 rounded-2xl bg-white/[0.04] border border-white/[0.07] shadow-xl shadow-black/30">
            {BILLING_OPTIONS.map(({ months, label, discount: d }) => {
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
                  {d > 0 && (
                    <span className={`ml-1.5 text-xs font-bold ${isActive ? 'text-white/90' : 'text-emerald-400'}`}>
                      -{Math.round(d * 100)}%
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Plan Cards */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {PLANS.map((plan) => {
            const originalTotal = plan.monthlyPrice * billingMonths;
            const discountedTotal = Math.round(originalTotal * (1 - discount));
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
                  {discount > 0 && (
                    <span className="badge badge-emerald shrink-0">{Math.round(discount * 100)}% OFF</span>
                  )}
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
                  <div className="flex items-end justify-between gap-3 mb-3">
                    <div>
                      <p className="text-xs uppercase tracking-wider text-slate-500 mb-1">Total Price</p>
                      <p className="text-4xl font-black text-white font-heading">
                        {formatBDT(discountedTotal)}
                      </p>
                      <p className="text-xs text-slate-500 mt-1.5">+ One-Time Setup Fee: BDT 500</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-slate-500">for {billingMonths} month{billingMonths > 1 ? 's' : ''}</p>
                      {discount > 0 && (
                        <p className="text-xs text-slate-600 line-through">{formatBDT(originalTotal)}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-2">
                    <div className="rounded-xl bg-white/[0.04] border border-white/[0.05] px-3 py-2.5">
                      <p className="text-[10px] uppercase tracking-wide text-slate-500">Monthly</p>
                      <p className="text-sm font-bold text-white">{formatBDT(plan.monthlyPrice)}</p>
                    </div>
                    <div className="rounded-xl bg-emerald-900/20 border border-emerald-500/20 px-3 py-2.5">
                      <p className="text-[10px] uppercase tracking-wide text-slate-500">You Pay</p>
                      <p className="text-sm font-bold text-emerald-300">{formatBDT(discountedTotal)}</p>
                    </div>
                    <div className="rounded-xl bg-blue-900/20 border border-blue-500/20 px-3 py-2.5">
                      <p className="text-[10px] uppercase tracking-wide text-slate-500">You Save</p>
                      <p className="text-sm font-bold text-blue-300">{formatBDT(savings)}</p>
                    </div>
                  </div>
                </div>

                {/* Features */}
                <div className="grid sm:grid-cols-2 gap-2 mb-6">
                  {plan.features.map((feature) => (
                    <div key={feature} className="feature-check">
                      <Check className={`w-3.5 h-3.5 shrink-0 mt-0.5 ${plan.popular ? 'text-emerald-400' : 'text-emerald-500'}`} />
                      <span className="text-xs text-slate-300 leading-relaxed">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <Link
                  href="/contact"
                  className={`flex items-center justify-center gap-2 w-full py-3.5 px-6 rounded-xl text-center font-semibold transition-all mt-auto ${
                    plan.popular
                      ? 'btn-primary'
                      : 'btn-secondary'
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
          <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] flex gap-3">
            <div className="w-1.5 shrink-0 rounded-full bg-slate-600 mt-1" />
            <p className="text-sm text-slate-400 leading-relaxed">
              The one-time BDT 500 setup fee covers your complete account configuration, WhatsApp number onboarding, Meta business verification submission, and initial chatbot setup. It is charged once and never again.
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
                Meta charges separately per conversation based on category and market. We apply <strong className="text-emerald-400">0% markup</strong> on these charges — many other providers add 10–25% on top. Current reference rates (Rest of Asia Pacific, USD): Marketing: $0.0732, Utility: $0.0113.{' '}
                <a href="https://business.whatsapp.com/products/platform-pricing" target="_blank" rel="noreferrer" className="text-blue-400 hover:text-blue-300 underline transition-colors">
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
              <span key={method} className="text-xs px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.06] text-slate-400">
                {method}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

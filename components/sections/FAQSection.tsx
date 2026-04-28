'use client';

import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import Link from 'next/link';

const faqs = [
  {
    q: "What's the difference between WhatsApp Business App and the API?",
    a: "The WhatsApp Business App is for manual use on a single device — great for very small operations. The WhatsApp Business API is built for scale: it supports multi-agent team inboxes, chatbot automation, bulk broadcasts, CRM integrations, and campaign analytics. If you handle more than 50 customer conversations per day, the API is the right choice.",
  },
  {
    q: 'Do I need a separate phone number for the WhatsApp API?',
    a: 'A dedicated number is strongly recommended for the smoothest experience and fewest conflicts. However, your existing WhatsApp Business number can often be migrated after Meta eligibility checks. Our team handles the entire migration process for you.',
  },
  {
    q: 'How long does the WhatsApp API setup take?',
    a: 'Standard onboarding takes 48 hours once your business documents are verified by Meta. More complex setups with custom integrations may take 3–5 business days. We manage the Meta submission, document requirements, and status follow-up end-to-end.',
  },
  {
    q: 'How much does Meta charge per conversation, and do you add a markup?',
    a: 'Meta charges per conversation category. Current reference rates for the Rest of Asia Pacific region (USD): Marketing conversations at $0.0732, Utility conversations at $0.0113. We charge 0% markup on these Meta fees — many other BSPs in Bangladesh add 10–25%. You pay Meta rates directly with no hidden surcharge.',
  },
  {
    q: 'Can I cancel my plan at any time?',
    a: 'Yes. All plans are month-to-month with no long-term lock-in. For 3, 6, and 12-month prepaid plans, please refer to our Refund & Cancellation Policy for prorated refund terms.',
  },
  {
    q: 'What payment methods do you accept?',
    a: 'We accept bKash, Nagad, Rocket, and direct bank transfer for all Bangladesh-based clients. International payments via wire transfer are also available for enterprise accounts.',
  },
  {
    q: 'Do you provide support and training in Bangla?',
    a: 'Yes — all onboarding, training sessions, and support are available in both Bangla and English. We understand the local context and provide practical, real-world guidance for Bangladesh business operations.',
  },
  {
    q: 'Can you integrate WhatsApp with my existing CRM or e-commerce platform?',
    a: 'Absolutely. We support native integrations with WooCommerce, Shopify, Google Sheets, Zapier, Pabbly, Make (Integromat), and N8N out of the box. For custom CRMs or proprietary systems, we build tailored API integrations scoped to your specific workflow.',
  },
  {
    q: 'What web development technologies do you use?',
    a: 'Our standard stack is Next.js (React), TypeScript, and Tailwind CSS for the frontend, with Node.js or Python backends depending on the project. For e-commerce we work with WooCommerce and Shopify. All projects are optimized for SEO, performance, and mobile-first experience.',
  },
  {
    q: 'Do you work with businesses outside of Dhaka?',
    a: 'Yes — we serve clients across all of Bangladesh. Our communication is fully remote (Zoom, WhatsApp, email), and we have clients in Chittagong, Sylhet, Rajshahi, and other major cities. Location is never a barrier to working with us.',
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className="section-padding bg-[#0F172A] relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/15 to-transparent" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="section-label mx-auto mb-4">
            <HelpCircle className="w-4 h-4" />
            FAQ
          </div>
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-subtitle mx-auto mt-4">
            Everything you need to know before getting started. Still have questions?{' '}
            <Link href="/contact" className="text-blue-400 hover:text-blue-300 transition-colors">Ask us directly.</Link>
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`faq-item ${openIndex === i ? 'open' : ''}`}
            >
              <button
                type="button"
                className="w-full flex items-start justify-between gap-4 px-5 py-4 text-left"
                onClick={() => toggle(i)}
                aria-expanded={openIndex === i}
              >
                <span className="text-sm sm:text-base font-semibold text-slate-100 leading-snug pr-2">
                  {faq.q}
                </span>
                <ChevronDown
                  className={`w-5 h-5 shrink-0 text-slate-400 transition-transform duration-300 mt-0.5 ${
                    openIndex === i ? 'rotate-180 text-blue-400' : ''
                  }`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ease-out ${
                  openIndex === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="px-5 pb-5 text-sm text-slate-400 leading-relaxed">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

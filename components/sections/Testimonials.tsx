'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    name: 'Rafiqul Islam',
    role: 'CEO',
    company: 'Dhaka Textile Export',
    industry: 'Manufacturing',
    avatar: 'RI',
    color: 'from-blue-500 to-cyan-500',
    rating: 5,
    text: 'DataNest BD transformed our customer communication. Before the WhatsApp API, we were losing leads daily. Now our sales team responds in under 2 minutes and we\'ve seen a 280% jump in qualified leads within the first 3 months.',
    result: '+280% qualified leads',
  },
  {
    name: 'Nasrin Akter',
    role: 'Founder',
    company: 'Shadin Fashion House',
    industry: 'E-commerce',
    avatar: 'NA',
    color: 'from-emerald-500 to-teal-500',
    rating: 5,
    text: 'The web development team built our entire e-commerce platform in 3 weeks. It\'s fast, looks premium, and the WhatsApp integration for abandoned carts alone recovered over 150 orders in the first month. Incredible ROI.',
    result: '150+ orders recovered',
  },
  {
    name: 'Karim Hossain',
    role: 'Director',
    company: 'BD Logistics Pro',
    industry: 'Logistics',
    avatar: 'KH',
    color: 'from-purple-500 to-pink-500',
    rating: 5,
    text: 'We hired DataNest BD for AI automation and it completely changed how we handle operations. Their AI agent now handles 70% of customer queries without human involvement. Our team finally has time to focus on growth.',
    result: '70% queries automated',
  },
  {
    name: 'Sumaiya Begum',
    role: 'Marketing Manager',
    company: 'Meena Pharma',
    industry: 'Pharmaceutical',
    avatar: 'SB',
    color: 'from-amber-500 to-orange-500',
    rating: 5,
    text: 'Their digital marketing campaigns are data-driven and transparent. We get detailed reports every week, and our cost per lead dropped by 60% compared to our previous agency. The Facebook Business setup they did is flawless.',
    result: '60% lower cost per lead',
  },
  {
    name: 'Tanvir Ahmed',
    role: 'CTO',
    company: 'HealthTech BD',
    industry: 'Healthcare SaaS',
    avatar: 'TA',
    color: 'from-cyan-500 to-blue-500',
    rating: 5,
    text: 'DataNest BD helped us build our SaaS MVP in record time. They understood our technical requirements perfectly and delivered a scalable architecture. 6 months post-launch we\'re at 500 users and growing without any infrastructure issues.',
    result: '500+ users, zero downtime',
  },
  {
    name: 'Farzana Chowdhury',
    role: 'Owner',
    company: 'Chowdhury Real Estate',
    industry: 'Real Estate',
    avatar: 'FC',
    color: 'from-pink-500 to-rose-500',
    rating: 5,
    text: 'The WhatsApp broadcast campaigns they set up gave us a direct line to 8,000 potential buyers. We closed 4 high-value properties directly from WhatsApp conversations. The ROI is simply unmatched compared to anything else we\'ve tried.',
    result: '4 properties via WhatsApp',
  },
];

const SLIDE_INTERVAL = 4500;
const VISIBLE = 3; // desktop cards visible at once

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
      ))}
    </div>
  );
}

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const total = testimonials.length;
  const maxIndex = total - 1;

  const next = useCallback(() => {
    setIndex((i) => (i >= maxIndex ? 0 : i + 1));
  }, [maxIndex]);

  const prev = useCallback(() => {
    setIndex((i) => (i <= 0 ? maxIndex : i - 1));
  }, [maxIndex]);

  // Auto-advance
  useEffect(() => {
    if (paused) return;
    timerRef.current = setTimeout(next, SLIDE_INTERVAL);
    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  }, [index, paused, next]);

  // Build visible indices — wrap around for seamless loop
  const getCard = (offset: number) => testimonials[(index + offset + total) % total];

  return (
    <section className="section-padding bg-[#080E1A] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/15 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-600/4 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="section-label mx-auto mb-4">Client Results</div>
          <h2 className="section-title">
            Real Businesses,{' '}
            <span className="text-gradient">Real Growth</span>
          </h2>
          <p className="section-subtitle mx-auto mt-4">
            Don&apos;t take our word for it — here&apos;s what Bangladesh&apos;s most growth-focused businesses say about us.
          </p>
        </div>

        {/* Slider */}
        <div
          className="relative"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Track — 1 card mobile, 2 tablet, 3 desktop */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 overflow-hidden">
            {Array.from({ length: VISIBLE }).map((_, slot) => {
              const t = getCard(slot);
              // On mobile only slot 0 shows, md slots 0-1, lg all 3
              const hiddenClass =
                slot === 1 ? 'hidden md:flex' :
                slot === 2 ? 'hidden lg:flex' : 'flex';

              return (
                <div
                  key={`${index}-${slot}`}
                  className={`${hiddenClass} flex-col testimonial-card animate-slide-in`}
                  style={{ animationDuration: '400ms' }}
                >
                  <Quote className="w-8 h-8 text-blue-500/30 mb-4 shrink-0" />
                  <StarRating count={t.rating} />
                  <p className="text-sm text-slate-300 leading-relaxed my-4 flex-1">&ldquo;{t.text}&rdquo;</p>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-5 self-start">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span className="text-xs font-semibold text-emerald-400">{t.result}</span>
                  </div>
                  <div className="flex items-center gap-3 pt-4 border-t border-white/[0.06]">
                    <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center text-sm font-bold text-white shrink-0`}>
                      {t.avatar}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white">{t.name}</p>
                      <p className="text-xs text-slate-500">{t.role}, {t.company}</p>
                    </div>
                    <div className="ml-auto">
                      <span className="text-xs text-slate-600 bg-white/[0.04] px-2 py-1 rounded-full">{t.industry}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Prev / Next arrows */}
          <div className="flex items-center justify-between mt-8">
            {/* Dot indicators */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={`rounded-full transition-all duration-300 ${
                    i === index
                      ? 'w-6 h-2 bg-blue-400'
                      : 'w-2 h-2 bg-white/20 hover:bg-white/40'
                  }`}
                />
              ))}
            </div>

            {/* Arrow buttons */}
            <div className="flex items-center gap-2">
              <button
                onClick={prev}
                aria-label="Previous testimonial"
                className="w-9 h-9 rounded-xl border border-white/[0.1] bg-white/[0.04] hover:bg-white/[0.08] flex items-center justify-center text-slate-400 hover:text-white transition-all"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={next}
                aria-label="Next testimonial"
                className="w-9 h-9 rounded-xl border border-white/[0.1] bg-white/[0.04] hover:bg-white/[0.08] flex items-center justify-center text-slate-400 hover:text-white transition-all"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom trust line — unchanged */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 text-sm text-slate-500">
            <div className="flex -space-x-2">
              {['RI', 'NA', 'KH', 'TA'].map((avatar, i) => (
                <div
                  key={i}
                  className={`w-8 h-8 rounded-full bg-gradient-to-br ${testimonials[i].color} border-2 border-[#080E1A] flex items-center justify-center text-xs font-bold text-white`}
                >
                  {avatar}
                </div>
              ))}
            </div>
            <span>Joined by <strong className="text-slate-300">100+ businesses</strong> across Bangladesh</span>
          </div>
        </div>
      </div>
    </section>
  );
}

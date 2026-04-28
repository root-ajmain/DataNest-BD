import { Star, Quote } from 'lucide-react';

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

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map(({ name, role, company, industry, avatar, color, rating, text, result }) => (
            <div key={name} className="testimonial-card flex flex-col">
              {/* Quote icon */}
              <Quote className="w-8 h-8 text-blue-500/30 mb-4 shrink-0" />

              {/* Rating */}
              <StarRating count={rating} />

              {/* Text */}
              <p className="text-sm text-slate-300 leading-relaxed my-4 flex-1">&ldquo;{text}&rdquo;</p>

              {/* Result badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-5 self-start">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span className="text-xs font-semibold text-emerald-400">{result}</span>
              </div>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-white/[0.06]">
                <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${color} flex items-center justify-center text-sm font-bold text-white shrink-0`}>
                  {avatar}
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">{name}</p>
                  <p className="text-xs text-slate-500">{role}, {company}</p>
                </div>
                <div className="ml-auto">
                  <span className="text-xs text-slate-600 bg-white/[0.04] px-2 py-1 rounded-full">{industry}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom trust line */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 text-sm text-slate-500">
            <div className="flex -space-x-2">
              {['RI', 'NA', 'KH', 'TA'].map((avatar, i) => (
                <div key={i} className={`w-8 h-8 rounded-full bg-gradient-to-br ${testimonials[i].color} border-2 border-[#080E1A] flex items-center justify-center text-xs font-bold text-white`}>
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

import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Clock, Tag } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Blog — Web Development, AI, WhatsApp API & Marketing Insights | DataNest BD',
  description: 'Expert insights on Web Development, AI Automation, WhatsApp Business API, and Digital Marketing for Bangladesh businesses. Tips, tutorials, and case studies.',
  alternates: { canonical: 'https://www.datanestbd.com/blog' },
};

const categories = [
  { label: 'All', slug: 'all', active: true },
  { label: 'Web Development', slug: 'web-development', active: false },
  { label: 'AI & Automation', slug: 'ai-automation', active: false },
  { label: 'WhatsApp API', slug: 'whatsapp-api', active: false },
  { label: 'Digital Marketing', slug: 'digital-marketing', active: false },
];

const posts = [
  {
    slug: 'whatsapp-api-vs-business-app-bangladesh',
    title: 'WhatsApp Business API vs. Business App: Which is Right for Your Bangladesh Business?',
    excerpt: 'Understand the key differences between the WhatsApp Business App and the official Meta API — and learn when to upgrade for scale, automation, and team features.',
    category: 'WhatsApp API',
    categoryColor: 'badge-emerald',
    readTime: '8 min read',
    date: 'March 2025',
    featured: true,
  },
  {
    slug: 'how-ai-agents-reduce-customer-support-cost',
    title: 'How AI Agents Cut Customer Support Costs by 70% — Real Bangladesh Business Cases',
    excerpt: 'A deep dive into how Bangladesh businesses are deploying AI agents to automate customer queries, qualify leads, and reduce support team costs without sacrificing quality.',
    category: 'AI & Automation',
    categoryColor: 'badge-blue',
    readTime: '10 min read',
    date: 'February 2025',
    featured: false,
  },
  {
    slug: 'nextjs-web-development-bangladesh-2025',
    title: 'Why Next.js is the Best Choice for Web Development in Bangladesh (2025)',
    excerpt: 'Next.js has changed how we build websites. Here\'s why Bangladesh businesses should care — and how it delivers faster sites, better SEO, and lower hosting costs.',
    category: 'Web Development',
    categoryColor: 'badge-blue',
    readTime: '7 min read',
    date: 'January 2025',
    featured: false,
  },
  {
    slug: 'facebook-ads-lead-generation-bangladesh',
    title: 'Facebook Ads Lead Generation Strategy for Bangladesh Businesses in 2025',
    excerpt: 'A proven framework for generating quality leads with Facebook Ads in Bangladesh — from audience targeting to landing page optimization and follow-up automation.',
    category: 'Digital Marketing',
    categoryColor: 'badge-amber',
    readTime: '12 min read',
    date: 'January 2025',
    featured: false,
  },
  {
    slug: 'whatsapp-api-ecommerce-bangladesh',
    title: 'How to Use WhatsApp API to Recover Abandoned Carts in Bangladesh E-Commerce',
    excerpt: 'Step-by-step guide to setting up abandoned cart recovery via WhatsApp API — including message templates, timing strategy, and automation flows that actually work.',
    category: 'WhatsApp API',
    categoryColor: 'badge-emerald',
    readTime: '9 min read',
    date: 'December 2024',
    featured: false,
  },
  {
    slug: 'saas-development-checklist-bangladesh',
    title: 'The Complete SaaS Product Development Checklist for Bangladesh Startups',
    excerpt: 'Before you build, read this. A comprehensive checklist covering architecture, security, payments (bKash, Nagad), compliance, and launch strategy for Bangladesh SaaS products.',
    category: 'Web Development',
    categoryColor: 'badge-blue',
    readTime: '15 min read',
    date: 'November 2024',
    featured: false,
  },
];

export default function BlogPage() {
  const featuredPost = posts.find((p) => p.featured);
  const regularPosts = posts.filter((p) => !p.featured);

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-hero-mesh">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="section-label mx-auto mb-5">Resources & Insights</div>
          <h1 className="section-title text-5xl mb-5">
            Practical Guides for{' '}
            <span className="text-gradient">Bangladesh Businesses</span>
          </h1>
          <p className="section-subtitle mx-auto">
            In-depth articles on Web Development, AI Automation, WhatsApp API, and Digital Marketing — written by practitioners, not theorists.
          </p>
        </div>
      </section>

      <section className="py-12 bg-[#0F172A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Categories */}
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map(({ label, slug, active }) => (
              <button
                key={slug}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  active
                    ? 'bg-gradient-brand text-white'
                    : 'bg-white/[0.04] border border-white/[0.08] text-slate-400 hover:text-white'
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          {/* Featured post */}
          {featuredPost && (
            <div className="blog-card mb-8 group">
              <div className="p-8">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className={`badge ${featuredPost.categoryColor} text-xs`}>{featuredPost.category}</span>
                  <span className="badge badge-blue text-xs">Featured</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 group-hover:text-gradient transition-all">
                  {featuredPost.title}
                </h2>
                <p className="text-slate-400 leading-relaxed mb-6 max-w-3xl">{featuredPost.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-sm text-slate-500">
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-4 h-4" />{featuredPost.readTime}
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Tag className="w-4 h-4" />{featuredPost.date}
                    </div>
                  </div>
                  <Link href={`/blog/${featuredPost.slug}`} className="flex items-center gap-2 text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors group-hover:gap-3">
                    Read article <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          )}

          {/* Post grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {regularPosts.map((post) => (
              <div key={post.slug} className="blog-card group flex flex-col">
                <div className="p-6 flex flex-col flex-1">
                  <div className="mb-3">
                    <span className={`badge ${post.categoryColor} text-xs`}>{post.category}</span>
                  </div>
                  <h3 className="text-base font-bold text-white mb-2 group-hover:text-gradient transition-all leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed mb-5 flex-1">{post.excerpt}</p>
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/[0.05]">
                    <div className="flex items-center gap-1.5 text-xs text-slate-500">
                      <Clock className="w-3.5 h-3.5" />{post.readTime}
                    </div>
                    <Link href={`/blog/${post.slug}`} className="flex items-center gap-1.5 text-xs font-semibold text-blue-400 hover:text-blue-300 transition-colors">
                      Read <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

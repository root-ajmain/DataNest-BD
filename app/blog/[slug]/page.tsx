import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, Clock, Tag, ArrowRight, CheckCircle2, MessageCircle, Phone } from 'lucide-react';

// ─── Content Types ────────────────────────────────────────────────────────────

type Section =
  | { type: 'p'; text: string }
  | { type: 'h2'; text: string }
  | { type: 'h3'; text: string }
  | { type: 'ul'; items: string[] }
  | { type: 'ol'; items: string[] }
  | { type: 'highlight'; text: string; label?: string }
  | { type: 'table'; headers: string[]; rows: string[][] }
  | { type: 'cta'; href: string; label: string; subtext: string };

interface Post {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  category: string;
  categoryColor: string;
  readTime: string;
  date: string;
  featured: boolean;
  intro: string;
  content: Section[];
}

// ─── All Blog Posts ───────────────────────────────────────────────────────────

const posts: Post[] = [
  // ─── Post 1 ───────────────────────────────────────────────────────────────
  {
    slug: 'whatsapp-api-vs-business-app-bangladesh',
    title: 'WhatsApp Business API vs. Business App: Which is Right for Your Bangladesh Business?',
    metaTitle: 'WhatsApp Business API vs App: Full Comparison for Bangladesh Businesses (2025)',
    metaDescription:
      'Confused between WhatsApp Business App and WhatsApp Business API? This complete guide explains the differences, costs, and which solution is right for your Bangladesh business in 2025.',
    category: 'WhatsApp API',
    categoryColor: 'badge-emerald',
    readTime: '8 min read',
    date: 'March 2025',
    featured: true,
    intro:
      'Most Bangladesh businesses start with the free WhatsApp Business App — and for a small team handling a handful of daily chats, it works fine. But the moment your business grows, that same app becomes a bottleneck. This guide explains the core differences, real costs, and exactly when you should upgrade to the official WhatsApp Business API.',
    content: [
      { type: 'h2', text: 'What is the WhatsApp Business App?' },
      {
        type: 'p',
        text: 'The WhatsApp Business App is a free mobile application from Meta. It is designed for micro and small businesses that want a professional presence on WhatsApp. You install it on one phone, add a business profile, set a greeting message, and you are done. It works well for solopreneurs, freelancers, and local shops managing 20–50 conversations per day.',
      },
      {
        type: 'ul',
        items: [
          'Runs on a single mobile device (Android or iPhone)',
          'Maximum 2 devices (1 phone + 1 linked computer)',
          'No team inbox — only one user at a time',
          'Manual messaging only — no automation without third-party tools',
          'Broadcast list limited to 256 contacts',
          'Cannot integrate with CRMs, e-commerce platforms, or payment systems',
          'Free to use — no monthly cost',
        ],
      },
      { type: 'h2', text: 'What is the WhatsApp Business API?' },
      {
        type: 'p',
        text: 'The WhatsApp Business API is the enterprise-grade version of WhatsApp, designed for growing and large businesses. It is not an app you install on a phone. Instead, it connects your business phone number to Meta\'s servers through an approved Business Solution Provider (BSP). DataNest BD provides this through its authorized WhatChimp partnership in Bangladesh.',
      },
      {
        type: 'ul',
        items: [
          'Unlimited team members can access the same inbox simultaneously',
          'Full automation — chatbots, AI agents, triggered messages, drip campaigns',
          'Bulk messaging to opted-in customers with no 256-contact limit',
          'Integrates with WooCommerce, Shopify, CRMs, Zapier, Make, N8N, and more',
          'Rich message types — buttons, lists, media carousels, product catalogs',
          'Green tick verification available for established brands',
          'Detailed analytics — delivery rate, open rate, response time, agent performance',
          'Requires a monthly subscription to a BSP like DataNest BD',
        ],
      },
      { type: 'h2', text: 'Head-to-Head Comparison' },
      {
        type: 'table',
        headers: ['Feature', 'WhatsApp Business App', 'WhatsApp Business API'],
        rows: [
          ['Monthly Cost', 'Free', 'From ৳2,999/month (DataNest BD)'],
          ['Number of Agents', '1 (2 with linked device)', 'Unlimited'],
          ['Automation / Chatbot', 'Very limited', 'Full automation support'],
          ['Broadcast Limit', '256 opted-in contacts', 'Unlimited opted-in contacts'],
          ['CRM Integration', 'Not supported', 'Full integration'],
          ['Message Analytics', 'Basic', 'Detailed dashboards'],
          ['Green Tick Badge', 'Not available', 'Available for eligible accounts'],
          ['Setup Time', 'Instant', '48 hours with DataNest BD'],
          ['24/7 AI Chatbot', 'Not possible', 'Fully supported'],
          ['Multi-device Access', '1 phone + 1 PC only', 'Web dashboard, unlimited users'],
        ],
      },
      { type: 'h2', text: 'The Real Cost of WhatsApp API in Bangladesh' },
      {
        type: 'p',
        text: 'Many Bangladesh businesses avoid the API because they assume it is too expensive. The reality is more nuanced. The API itself has two cost components: the BSP monthly subscription fee and Meta\'s per-conversation charges.',
      },
      {
        type: 'highlight',
        label: 'Meta Conversation Charges (Rest of Asia Pacific)',
        text: 'Marketing messages: $0.0732 per conversation (24-hour window). Utility/service messages: $0.0113 per conversation. DataNest BD charges 0% markup on Meta fees — you pay Meta\'s rates directly.',
      },
      {
        type: 'p',
        text: 'To put this in perspective: if you send 1,000 marketing messages per month, the Meta cost is approximately $73 USD (roughly ৳8,000 BDT). For most Bangladesh businesses running WhatsApp campaigns, this cost is offset many times over by the revenue generated from those campaigns.',
      },
      { type: 'h2', text: 'When You Should Stay on the Business App' },
      {
        type: 'ol',
        items: [
          'You handle fewer than 50 conversations per day',
          'Your business is run by a single person or very small team',
          'You do not need automation or chatbots',
          'Your customer base is under 500 active contacts',
          'You are just starting out and want to validate demand before investing',
        ],
      },
      { type: 'h2', text: 'When You Must Upgrade to the API' },
      {
        type: 'ol',
        items: [
          'You are missing customer messages because one person cannot keep up',
          'You want to automate order confirmations, shipping updates, or lead follow-ups',
          'You have a sales team of 2 or more people who need shared WhatsApp access',
          'You run an e-commerce store and want abandoned cart recovery via WhatsApp',
          'You want to send broadcast campaigns to more than 256 customers',
          'You need WhatsApp to integrate with your CRM, Shopify, or WooCommerce store',
          'You want a 24/7 AI chatbot to qualify leads while you sleep',
        ],
      },
      { type: 'h2', text: 'How Long Does WhatsApp API Setup Take in Bangladesh?' },
      {
        type: 'p',
        text: 'With DataNest BD, the standard setup time is 48 hours. The process involves verifying your Facebook Business Manager account, submitting your business number to Meta, and configuring your dashboard. Our team handles every step and provides full training in both Bangla and English.',
      },
      {
        type: 'p',
        text: 'You do not need to buy a new phone number. We can port your existing business number to the API, or set up a new dedicated number if you prefer to keep your personal number separate.',
      },
      { type: 'h2', text: 'Real Bangladesh Business Scenarios' },
      {
        type: 'h3',
        text: 'Scenario 1: Dhaka Clothing Brand',
      },
      {
        type: 'p',
        text: 'A clothing brand in Dhaka was using the Business App with a single phone shared among 3 staff members. Customers were waiting hours for replies. After switching to the API with DataNest BD, they set up an AI chatbot to handle order inquiries and a shared team inbox for complex questions. Response time dropped from 3 hours to under 5 minutes. Monthly revenue increased 28% in the first quarter.',
      },
      {
        type: 'h3',
        text: 'Scenario 2: Real Estate Agency in Chittagong',
      },
      {
        type: 'p',
        text: 'A real estate agency was manually following up with leads from Facebook Ads. With the API, they set up an automated lead nurturing sequence that sent property details, virtual tour links, and appointment booking options — all triggered automatically when a new lead came in. Their sales team could focus on warm leads instead of cold follow-ups.',
      },
      {
        type: 'cta',
        href: '/contact',
        label: 'Get Free WhatsApp API Consultation',
        subtext: 'We\'ll analyse your current setup and recommend the right plan — free, no commitment.',
      },
    ],
  },

  // ─── Post 2 ───────────────────────────────────────────────────────────────
  {
    slug: 'how-ai-agents-reduce-customer-support-cost',
    title: 'How AI Agents Cut Customer Support Costs by 70% — Real Bangladesh Business Cases',
    metaTitle: 'How AI Agents Reduce Customer Support Costs 70% — Bangladesh Business Guide 2025',
    metaDescription:
      'Discover how Bangladesh businesses are deploying AI agents on WhatsApp and web to automate customer support, qualify leads, and reduce costs by up to 70% without sacrificing quality.',
    category: 'AI & Automation',
    categoryColor: 'badge-blue',
    readTime: '10 min read',
    date: 'February 2025',
    featured: false,
    intro:
      'Hiring a full customer support team in Bangladesh costs between ৳60,000 and ৳1,20,000 per month for a 3-person setup once you factor in salaries, training, and management. An AI agent can handle 60–80% of those same queries automatically, 24 hours a day, for a fraction of the cost. Here is how Bangladesh businesses are doing it right now.',
    content: [
      { type: 'h2', text: 'What is an AI Agent (And How is It Different from a Basic Chatbot)?' },
      {
        type: 'p',
        text: 'A basic chatbot follows rigid decision trees: if the customer says X, respond with Y. It breaks the moment the customer uses unexpected phrasing. An AI agent, powered by large language models like GPT-4 or Gemini, understands natural language. It can read what a customer actually means, not just what exact words they used. It remembers context across the conversation, asks clarifying questions, and hands off to a human agent only when necessary.',
      },
      {
        type: 'highlight',
        label: 'Key Difference',
        text: 'Basic chatbot: follows a script. AI agent: understands intent, handles variations, learns from context, escalates intelligently.',
      },
      { type: 'h2', text: 'What Can an AI Agent Actually Do for a Bangladesh Business?' },
      {
        type: 'ul',
        items: [
          'Answer product or service questions in Bangla and English',
          'Qualify leads by asking budget, timeline, and requirement questions',
          'Book appointments and add them to your Google Calendar or CRM',
          'Send order status updates and tracking links automatically',
          'Handle return and refund request triage',
          'Send payment reminders and collect bKash/Nagad payment confirmations',
          'Escalate complex queries to a human agent with full context summary',
          'Follow up with cold leads on a timed schedule',
          'Provide pricing information and generate quotes for standard services',
        ],
      },
      { type: 'h2', text: 'The Real Numbers: What Does 70% Cost Reduction Look Like?' },
      {
        type: 'p',
        text: 'Let\'s use a concrete Bangladesh example. A mid-size e-commerce brand in Dhaka was receiving 300+ customer queries per day — mostly about order status, product availability, and return policies. They had a 4-person support team.',
      },
      {
        type: 'table',
        headers: ['', 'Before AI Agent', 'After AI Agent'],
        rows: [
          ['Support Staff Required', '4 people', '1 person (oversight only)'],
          ['Monthly Staff Cost', '৳1,20,000', '৳30,000'],
          ['Queries Handled Automatically', '0%', '74%'],
          ['Average Response Time', '2.5 hours', '< 30 seconds'],
          ['Customer Satisfaction Score', '3.8 / 5', '4.6 / 5'],
          ['Monthly Support Cost Total', '৳1,35,000', '৳38,000'],
        ],
      },
      {
        type: 'p',
        text: 'The saving was ৳97,000 per month — nearly ৳12 lakh per year — while customer satisfaction went up because customers got instant answers instead of waiting hours for a human reply.',
      },
      { type: 'h2', text: 'How to Deploy an AI Agent for Your Bangladesh Business' },
      {
        type: 'h3',
        text: 'Step 1: Define Your Top 20 Customer Questions',
      },
      {
        type: 'p',
        text: 'Before building anything, pull 3 months of customer chat history and identify the 20 most frequently asked questions. For most Bangladesh businesses, 80% of queries fall into fewer than 15 categories. This list becomes the foundation of your AI agent\'s knowledge base.',
      },
      {
        type: 'h3',
        text: 'Step 2: Choose the Right Channel',
      },
      {
        type: 'p',
        text: 'WhatsApp is the dominant channel in Bangladesh for customer communication. Deploying your AI agent on WhatsApp via the Business API gives you reach where your customers already are. Alternatively, a web chat widget on your website can capture visitors before they bounce.',
      },
      {
        type: 'h3',
        text: 'Step 3: Connect to Your Business Data',
      },
      {
        type: 'p',
        text: 'The AI agent becomes genuinely useful when it can access live data — your product catalog, order management system, CRM, or inventory. DataNest BD integrates AI agents with WooCommerce, Shopify, custom databases, and most popular CRMs via API.',
      },
      {
        type: 'h3',
        text: 'Step 4: Design the Human Handoff Protocol',
      },
      {
        type: 'p',
        text: 'Define exactly when the AI should escalate to a human. Common triggers include: customer expresses frustration, query involves a complaint older than X days, purchase value exceeds a threshold, or the AI confidence score drops below a set level. A good handoff includes a summary so the human agent does not make the customer repeat themselves.',
      },
      {
        type: 'h3',
        text: 'Step 5: Train, Test, and Refine',
      },
      {
        type: 'p',
        text: 'Run the AI in shadow mode (it reads but does not reply) for the first week, comparing its draft answers to your team\'s actual responses. Fix gaps. Launch with a soft rollout on non-critical queries first, then expand.',
      },
      { type: 'h2', text: 'Bangladesh-Specific Challenges and Solutions' },
      {
        type: 'h3',
        text: 'Challenge: Customers Write in Mixed Bangla-English (Banglish)',
      },
      {
        type: 'p',
        text: 'Many Bangladesh customers write in Banglish — a mix of Bengali words typed in Roman script. Modern AI models like GPT-4 and Gemini handle Banglish reasonably well, but the model needs to be prompted correctly and given examples of your specific customer communication style.',
      },
      {
        type: 'h3',
        text: 'Challenge: Payment Queries (bKash, Nagad)',
      },
      {
        type: 'p',
        text: 'Unlike international markets, Bangladesh payments often happen via mobile financial services. Your AI agent needs to know your bKash merchant number, Nagad number, bank account details, and how to verify payments. We build this into a secure flow where the agent guides the customer through payment but never stores sensitive data.',
      },
      { type: 'h2', text: 'Which Industries Benefit Most in Bangladesh?' },
      {
        type: 'ul',
        items: [
          'E-commerce and online retail (order status, returns, product queries)',
          'Real estate agencies (lead qualification, property info, appointment booking)',
          'Garments and textile exporters (quotation requests, sample follow-ups)',
          'Education and coaching institutes (course info, fee queries, enrollment)',
          'Healthcare clinics (appointment booking, test result queries, doctor availability)',
          'Travel and tour operators (package inquiries, booking confirmation)',
          'Financial services and insurance (product explanation, document submission)',
        ],
      },
      { type: 'h2', text: 'How to Get Started' },
      {
        type: 'p',
        text: 'DataNest BD builds and deploys custom AI agents for Bangladesh businesses on WhatsApp, web, and other channels. We handle the full setup — knowledge base, integrations, testing, and staff training. Most deployments go live within 7–14 days.',
      },
      {
        type: 'cta',
        href: '/services/ai-automation',
        label: 'Explore AI Automation Services',
        subtext: 'Get a free consultation and see a live demo of an AI agent handling real Bangladesh customer queries.',
      },
    ],
  },

  // ─── Post 3 ───────────────────────────────────────────────────────────────
  {
    slug: 'nextjs-web-development-bangladesh-2025',
    title: 'Why Next.js is the Best Choice for Web Development in Bangladesh (2025)',
    metaTitle: 'Next.js Web Development Bangladesh 2025 — Why It Beats WordPress & Others',
    metaDescription:
      'Why top Bangladesh businesses are choosing Next.js over WordPress for their websites in 2025. Faster performance, better SEO, lower hosting costs — a detailed developer guide.',
    category: 'Web Development',
    categoryColor: 'badge-blue',
    readTime: '7 min read',
    date: 'January 2025',
    featured: false,
    intro:
      'When a Bangladesh business owner asks "what should we build our website on," the honest answer in 2025 is: it depends on what you need. But if your goal is fast performance, excellent Google SEO rankings, and a platform that scales with your business, Next.js is the clear technical winner. Here is why — and when it makes sense for a Bangladesh business.',
    content: [
      { type: 'h2', text: 'The Bangladesh Web Development Landscape in 2025' },
      {
        type: 'p',
        text: 'The majority of business websites in Bangladesh are still built on WordPress — and for good reason. WordPress is familiar, has thousands of plugins, and has a large pool of local developers. But WordPress was designed in 2003 and its architecture shows its age. Page speed, Core Web Vitals, and server load are constant challenges with WordPress, especially on the shared hosting that most Bangladesh businesses use.',
      },
      {
        type: 'p',
        text: 'Next.js, built by Vercel and backed by React, takes a fundamentally different approach. Instead of generating pages dynamically on every request (as WordPress does), Next.js can pre-generate pages at build time, serving pure HTML/CSS/JS instantly — no database queries, no PHP processing, no plugin conflicts.',
      },
      { type: 'h2', text: 'Performance: The Numbers That Matter for Bangladesh' },
      {
        type: 'p',
        text: 'Page speed is not just a nice-to-have. Google uses Core Web Vitals — Largest Contentful Paint (LCP), Cumulative Layout Shift (CLS), and Interaction to Next Paint (INP) — as direct ranking signals. A slow website loses Google rankings, and in Bangladesh where mobile internet on 4G is the dominant browsing medium, a slow site means users leave before it even loads.',
      },
      {
        type: 'table',
        headers: ['Metric', 'Typical WordPress Site', 'Next.js Static Site'],
        rows: [
          ['Time to First Byte (TTFB)', '400–800ms', '< 100ms'],
          ['Largest Contentful Paint', '3–6 seconds', '< 1.5 seconds'],
          ['Google PageSpeed Score (Mobile)', '40–65', '85–98'],
          ['Server Requirements', 'PHP + MySQL server', 'Any static host or CDN'],
          ['Monthly Hosting Cost', '৳1,500–৳5,000 (shared)', '৳0–৳500 (static hosting)'],
        ],
      },
      { type: 'h2', text: 'SEO Advantages of Next.js for Bangladesh Businesses' },
      {
        type: 'h3',
        text: '1. Server-Side Rendering and Static Generation',
      },
      {
        type: 'p',
        text: 'Google\'s crawler needs to read your page content to rank it. With JavaScript-heavy single-page applications (React without Next.js), Googlebot sometimes struggles to render client-side content properly. Next.js solves this by rendering the full HTML on the server or at build time — Googlebot sees complete, indexable content immediately.',
      },
      {
        type: 'h3',
        text: '2. Automatic Image Optimization',
      },
      {
        type: 'p',
        text: 'Next.js automatically converts images to modern formats (WebP, AVIF), serves the right size for each device, and lazy-loads them. This alone can improve your Google PageSpeed score by 20–30 points compared to a default WordPress installation.',
      },
      {
        type: 'h3',
        text: '3. Built-in Metadata and Structured Data Support',
      },
      {
        type: 'p',
        text: 'Next.js 15 has a dedicated metadata API that makes it trivial to set per-page title tags, meta descriptions, OpenGraph images, and JSON-LD structured data. This is critical for Bangladesh businesses targeting local search — "web development agency Dhaka," "WhatsApp API Bangladesh," etc.',
      },
      {
        type: 'h3',
        text: '4. Clean URL Structure',
      },
      {
        type: 'p',
        text: 'Next.js uses file-system based routing. Your URL structure is clean by default: /services/whatsapp-api, /blog/article-title, /about. No ugly query strings, no ?p=123, no plugin configuration needed.',
      },
      { type: 'h2', text: 'When WordPress Still Makes Sense in Bangladesh' },
      {
        type: 'p',
        text: 'Next.js is not the right choice for every Bangladesh business. Here are cases where WordPress is still the better option:',
      },
      {
        type: 'ul',
        items: [
          'You need a non-technical team member to update blog posts frequently without developer help',
          'Your site requires complex e-commerce with hundreds of products and WooCommerce is already integrated',
          'Your budget for initial development is very limited and speed-to-market matters more than performance',
          'You have an existing WordPress site that works well and redesigning it is not a priority',
        ],
      },
      { type: 'h2', text: 'The Cost Reality for Bangladesh Businesses' },
      {
        type: 'p',
        text: 'One of the most compelling arguments for Next.js in Bangladesh is the hosting cost difference. A WordPress site needs PHP, MySQL, and a managed server. A Next.js static site can be hosted on any static host — including Hostinger shared hosting at ৳500/month — and load faster than a ৳5,000/month WordPress VPS.',
      },
      {
        type: 'highlight',
        label: 'Real Client Example',
        text: 'A Dhaka-based consulting firm migrated from WordPress to Next.js. Their Google PageSpeed mobile score went from 52 to 94. Their organic traffic increased 41% over the following 6 months without any additional SEO spend. Their hosting cost dropped from ৳3,200 to ৳500 per month.',
      },
      { type: 'h2', text: 'What You Need to Build with Next.js in Bangladesh' },
      {
        type: 'ul',
        items: [
          'A Next.js developer with React and TypeScript experience',
          'A design system or Figma file to work from',
          'A hosting provider (Vercel, Netlify, or shared static hosting like Hostinger)',
          'A headless CMS if non-technical team members need to update content (Sanity, Contentful, or even Notion)',
          'A domain name and SSL certificate (usually included with Hostinger)',
        ],
      },
      {
        type: 'cta',
        href: '/services/web-development',
        label: 'See Our Web Development Services',
        subtext: 'We build high-performance Next.js websites for Bangladesh businesses. Free quote in 24 hours.',
      },
    ],
  },

  // ─── Post 4 ───────────────────────────────────────────────────────────────
  {
    slug: 'facebook-ads-lead-generation-bangladesh',
    title: 'Facebook Ads Lead Generation Strategy for Bangladesh Businesses in 2025',
    metaTitle: 'Facebook Ads Lead Generation Bangladesh 2025 — Proven Strategy Guide',
    metaDescription:
      'A complete Facebook Ads lead generation framework for Bangladesh businesses in 2025. Covers audience targeting, ad formats, landing page strategy, and WhatsApp follow-up automation.',
    category: 'Digital Marketing',
    categoryColor: 'badge-amber',
    readTime: '12 min read',
    date: 'January 2025',
    featured: false,
    intro:
      'Facebook remains the most powerful advertising platform for reaching Bangladesh consumers in 2025 — 47 million active Bangladeshi users, precise demographic and interest targeting, and costs that are still relatively low compared to markets like India or Southeast Asia. But most Bangladesh businesses waste their ad budget because they lack a complete lead generation system. This guide gives you that system.',
    content: [
      { type: 'h2', text: 'Why Most Bangladesh Facebook Ads Fail' },
      {
        type: 'p',
        text: 'The most common failure pattern: a business owner runs a ৳5,000 "boost post" on their Facebook page, gets 200 likes and 15 comments saying "price?", replies to none of them systematically, and concludes that Facebook Ads do not work. The problem is not Facebook. The problem is running awareness activity instead of a lead generation system.',
      },
      {
        type: 'ul',
        items: [
          'Boosting posts instead of running proper Lead Generation or Conversion campaigns',
          'No landing page — sending traffic to a Facebook page or generic website homepage',
          'No follow-up system — leads come in and no one contacts them within 24 hours',
          'Wrong audience targeting — casting too wide a net or using irrelevant interests',
          'Single ad with no testing — no A/B comparison of different creatives or audiences',
          'No retargeting — abandoning people who clicked but did not convert',
        ],
      },
      { type: 'h2', text: 'The Complete Bangladesh Facebook Ads Lead Generation Framework' },
      { type: 'h3', text: 'Step 1: Define Your Ideal Customer Profile (ICP)' },
      {
        type: 'p',
        text: 'Before opening Facebook Ads Manager, answer these questions: Who is your best current customer? What is their age, gender, location? What is their profession or business type? What problem were they facing before they found you? What result did you help them achieve? This becomes your targeting template.',
      },
      { type: 'h3', text: 'Step 2: Choose the Right Campaign Objective' },
      {
        type: 'p',
        text: 'For lead generation in Bangladesh, the two most effective campaign objectives are: Leads (formerly Lead Generation) — collects name, phone number, and email directly inside Facebook/Instagram without sending users to an external website. This works extremely well in Bangladesh because users stay within their comfort zone. Conversions — sends users to a landing page on your website and tracks form submissions or WhatsApp clicks. Requires the Meta Pixel installed on your site.',
      },
      {
        type: 'highlight',
        label: 'Recommendation for Bangladesh',
        text: 'Start with the Leads objective using Instant Forms. Bangladesh users are more likely to complete a short in-app form than visit an external website. Once you have data and pixel history, graduate to Conversion campaigns for lower cost per lead.',
      },
      { type: 'h3', text: 'Step 3: Audience Targeting for Bangladesh' },
      {
        type: 'p',
        text: 'Facebook\'s targeting in Bangladesh is rich. Here is how to layer it effectively:',
      },
      {
        type: 'ul',
        items: [
          'Location: Target specific divisions, districts, or cities. Dhaka and Chittagong have the highest purchasing power. Use "People living in this location" not "Recently in this location" to avoid tourists.',
          'Age and Gender: Match your actual customer demographics. Do not assume — look at your existing customer data.',
          'Interests: Layer 3–5 relevant interests. For B2B services, target business owners by job title or company size category.',
          'Behaviors: Use "Small business owners" or "Online shoppers" behaviors when available in Bangladesh targeting options.',
          'Lookalike Audiences: Upload your existing customer phone numbers or emails (minimum 100, ideally 500+) and let Facebook find similar people. This is typically your best-performing audience.',
          'Retargeting: Show ads to people who visited your website, watched your videos, or engaged with your Facebook page in the last 30–90 days.',
        ],
      },
      { type: 'h3', text: 'Step 4: Ad Creative That Works in Bangladesh' },
      {
        type: 'p',
        text: 'The creative — your image or video plus the ad copy — determines 80% of your campaign\'s success. For Bangladesh audiences:',
      },
      {
        type: 'ul',
        items: [
          'Lead with a result, not a feature. "Generated 240 leads in 30 days for a Dhaka real estate firm" beats "We offer digital marketing services."',
          'Use real people and real results. Stock photos perform poorly. Before/after screenshots, client photos, and short video testimonials outperform polished graphics.',
          'Write ad copy in a mix of Bengali and English that mirrors how your target customers actually communicate.',
          'Keep the headline under 7 words. "Double Your Sales with WhatsApp Automation" is better than "Comprehensive Digital Marketing Solutions for Businesses."',
          'Video ads under 60 seconds outperform image ads for awareness, but image ads with clear offers convert better for direct lead gen.',
        ],
      },
      { type: 'h3', text: 'Step 5: The Landing Page (If Using Conversion Campaigns)' },
      {
        type: 'p',
        text: 'Your landing page must do one job: convert visitors into leads. It should not be your website\'s homepage. Best practices for Bangladesh landing pages:',
      },
      {
        type: 'ul',
        items: [
          'Load in under 3 seconds on mobile (most Bangladesh users are on 4G mobile)',
          'Have a single, clear call-to-action above the fold',
          'Include social proof — client logos, testimonials, or specific results',
          'Show a local phone number and WhatsApp link to build trust',
          'Keep the form short: Name, WhatsApp number, and one qualifying question',
          'Match the ad message exactly — if the ad says "Free consultation," the landing page must say the same',
        ],
      },
      { type: 'h3', text: 'Step 6: The Follow-Up System (This is Where Most Businesses Fail)' },
      {
        type: 'p',
        text: 'A lead that is not contacted within 1 hour has a 10x lower conversion rate than one contacted within 5 minutes. In Bangladesh, the best follow-up channel is WhatsApp — it has near-100% open rates. Here is the optimal flow:',
      },
      {
        type: 'ol',
        items: [
          'Lead submits Facebook form',
          'Within 2 minutes: automated WhatsApp message sends with service details and a personal introduction',
          'Within 30 minutes: human sales agent calls or sends a personal WhatsApp follow-up',
          'Day 2: automated follow-up with a case study or proof of results',
          'Day 4: final follow-up offering a free consultation or demo',
          'Not converted: enter a long-term nurture sequence with monthly value-add messages',
        ],
      },
      {
        type: 'p',
        text: 'This flow can be fully automated using WhatsApp API + a tool like N8N or Make. DataNest BD builds this exact system for our clients — the Facebook Ads campaign is only half the work; the follow-up automation is what converts leads into customers.',
      },
      { type: 'h2', text: 'Budget Guidance for Bangladesh Facebook Ads' },
      {
        type: 'table',
        headers: ['Business Stage', 'Monthly Budget', 'Expected Results'],
        rows: [
          ['Testing / Validation', '৳10,000–৳20,000', '50–150 leads (learning phase)'],
          ['Growing Business', '৳30,000–৳60,000', '200–500 leads per month'],
          ['Scaling', '৳1,00,000+', '1,000+ leads, multiple campaigns'],
        ],
      },
      {
        type: 'cta',
        href: '/services/digital-marketing',
        label: 'Get a Free Facebook Ads Audit',
        subtext: 'Send us your current ad account and we will identify exactly where your budget is being wasted.',
      },
    ],
  },

  // ─── Post 5 ───────────────────────────────────────────────────────────────
  {
    slug: 'whatsapp-api-ecommerce-bangladesh',
    title: 'How to Use WhatsApp API to Recover Abandoned Carts in Bangladesh E-Commerce',
    metaTitle: 'WhatsApp API Abandoned Cart Recovery Bangladesh E-Commerce Guide 2025',
    metaDescription:
      'Step-by-step guide to recovering abandoned carts using WhatsApp API for Bangladesh e-commerce stores. Includes message templates, timing strategy, and WooCommerce/Shopify setup.',
    category: 'WhatsApp API',
    categoryColor: 'badge-emerald',
    readTime: '9 min read',
    date: 'December 2024',
    featured: false,
    intro:
      'The average cart abandonment rate for e-commerce stores in Bangladesh is between 70–80%. That means for every 10 customers who add products to their cart, 7 or 8 leave without buying. WhatsApp API abandoned cart recovery can recapture 15–30% of those lost sales with the right message sequence. This guide shows you exactly how to set it up.',
    content: [
      { type: 'h2', text: 'Why WhatsApp Beats Email for Cart Recovery in Bangladesh' },
      {
        type: 'p',
        text: 'In Western markets, email is the standard channel for cart abandonment. In Bangladesh, it is largely ineffective. Email open rates for marketing messages in Bangladesh average 8–12%. WhatsApp message open rates exceed 90%. In a market where customers communicate primarily on WhatsApp and check their email rarely, WhatsApp cart recovery is not optional — it is essential.',
      },
      {
        type: 'table',
        headers: ['Channel', 'Open Rate', 'Click-Through Rate', 'Cart Recovery Rate'],
        rows: [
          ['Email (Bangladesh)', '8–12%', '1–3%', '2–5%'],
          ['SMS (Bangladesh)', '35–45%', '5–8%', '5–10%'],
          ['WhatsApp API', '85–95%', '25–45%', '15–30%'],
        ],
      },
      { type: 'h2', text: 'How WhatsApp Abandoned Cart Recovery Works' },
      {
        type: 'p',
        text: 'The technical flow works as follows: A customer visits your e-commerce store, adds items to their cart, but does not complete checkout. Your store (WooCommerce or Shopify) detects the abandoned cart after a set time — typically 30 minutes to 1 hour. It triggers a webhook to your WhatsApp API integration, which sends a pre-approved message template to the customer\'s WhatsApp number. The customer clicks a link, returns to their cart, and completes the purchase.',
      },
      {
        type: 'highlight',
        label: 'Important',
        text: 'WhatsApp can only send cart recovery messages to customers who have previously messaged your business WhatsApp number, OR who provided opt-in consent during checkout. Never send unsolicited WhatsApp messages — it violates Meta policy and can result in your number being banned.',
      },
      { type: 'h2', text: 'Setting Up WhatsApp Opt-In During Checkout' },
      {
        type: 'p',
        text: 'The most important step is collecting WhatsApp opt-in consent at checkout. Add a checkbox to your checkout page that reads: "Send my order updates and offers to my WhatsApp number." This must be unchecked by default (opt-in, not opt-out). When the customer checks it and completes (or abandons) checkout, their number is added to your eligible WhatsApp contact list.',
      },
      {
        type: 'p',
        text: 'For WooCommerce, DataNest BD provides a custom plugin that adds this checkbox and handles consent storage. For Shopify, we use the Customer Events API combined with a WhatsApp API webhook.',
      },
      { type: 'h2', text: 'The 3-Message Cart Recovery Sequence' },
      { type: 'h3', text: 'Message 1: The Gentle Reminder (30–60 minutes after abandonment)' },
      {
        type: 'p',
        text: 'The first message should be helpful, not pushy. Assume the customer got distracted, had a payment issue, or is still considering. Do not offer a discount yet.',
      },
      {
        type: 'highlight',
        label: 'Message Template Example',
        text: 'Hi [Name]! You left something in your cart at [Store Name] 🛒\n\n[Product Name] × [Quantity] — ৳[Price]\n\nYour cart is saved. Complete your order here: [Link]\n\nNeed help? Reply to this message.',
      },
      { type: 'h3', text: 'Message 2: Social Proof + Urgency (24 hours after abandonment)' },
      {
        type: 'p',
        text: 'If the first message did not convert, introduce light urgency and social proof. Do not invent urgency — only use real stock or time constraints.',
      },
      {
        type: 'highlight',
        label: 'Message Template Example',
        text: 'Hi [Name], just checking in on your [Product Name] order 👋\n\n⭐ 94% of our customers love this product.\n📦 Only [X] units left in stock.\n\nComplete order: [Link]\n\nQuestions? We\'re here to help — just reply.',
      },
      { type: 'h3', text: 'Message 3: The Offer (48–72 hours after abandonment)' },
      {
        type: 'p',
        text: 'Send this only to customers who have not converted after Messages 1 and 2. Offer a modest incentive — a discount, free shipping, or a small gift.',
      },
      {
        type: 'highlight',
        label: 'Message Template Example',
        text: 'Hi [Name], we want to make sure you get the best deal 🎁\n\nUse code BACK10 for 10% off your order:\n[Product Name] — ৳[Discounted Price]\n\nOffer expires in 24 hours: [Link]\n\nReply STOP to unsubscribe.',
      },
      { type: 'h2', text: 'WooCommerce Integration Setup (Technical Overview)' },
      {
        type: 'ol',
        items: [
          'Install the WhatsApp API integration plugin on your WooCommerce store',
          'Connect your WhatsApp API credentials (provided by DataNest BD)',
          'Configure cart abandonment trigger: set the timer (e.g., 45 minutes of inactivity)',
          'Upload and get approval for your 3 message templates from Meta (takes 24–48 hours)',
          'Map your product data fields: name, image URL, price, cart recovery link',
          'Test with a real abandoned cart before going live',
          'Set up the stop/unsubscribe handler so customers can opt out',
        ],
      },
      { type: 'h2', text: 'Expected Results for Bangladesh E-Commerce' },
      {
        type: 'p',
        text: 'Based on DataNest BD client data across Bangladesh e-commerce stores, WhatsApp cart recovery campaigns typically achieve:',
      },
      {
        type: 'ul',
        items: [
          '15–30% cart recovery rate (vs 2–5% for email)',
          'ROI of 10–30x on WhatsApp API subscription cost',
          '85–95% open rate on recovery messages',
          'Best results when Message 1 is sent within 30–45 minutes of abandonment',
          'Message 3 with a discount recovers an additional 8–15% of remaining abandoners',
        ],
      },
      {
        type: 'p',
        text: 'A Bangladesh fashion e-commerce brand with ৳20 lakh monthly GMV and 68% cart abandonment rate was recovering approximately ৳2.4 lakh per month from abandoned carts after implementing this system — 6 times their DataNest BD subscription cost.',
      },
      {
        type: 'cta',
        href: '/services/whatsapp-api',
        label: 'Set Up WhatsApp Cart Recovery',
        subtext: 'We handle the full setup — opt-in collection, message templates, WooCommerce/Shopify integration, and ongoing optimisation.',
      },
    ],
  },

  // ─── Post 6 ───────────────────────────────────────────────────────────────
  {
    slug: 'saas-development-checklist-bangladesh',
    title: 'The Complete SaaS Product Development Checklist for Bangladesh Startups',
    metaTitle: 'SaaS Product Development Checklist Bangladesh Startups 2025 | DataNest BD',
    metaDescription:
      'Building a SaaS product in Bangladesh? This complete checklist covers architecture, security, payments (bKash, Nagad), compliance, and launch strategy for Bangladesh SaaS startups in 2025.',
    category: 'Web Development',
    categoryColor: 'badge-blue',
    readTime: '15 min read',
    date: 'November 2024',
    featured: false,
    intro:
      'Most Bangladesh SaaS products fail not because the idea was bad, but because the founders underestimated the non-coding work involved. Architecture decisions made in week 1 become expensive technical debt in month 6. Payment integrations that seemed simple take months to get approved. This checklist is designed to help Bangladesh startup founders avoid the most expensive mistakes before they happen.',
    content: [
      { type: 'h2', text: 'Phase 1: Validation (Before Writing Any Code)' },
      {
        type: 'p',
        text: 'The biggest waste in SaaS development is building something nobody wants to pay for. Before a single line of code, validate your idea with real potential customers.',
      },
      {
        type: 'ul',
        items: [
          '✅ Identify a specific painful problem faced by a specific type of business in Bangladesh',
          '✅ Interview at least 20 potential customers about the problem (not your solution)',
          '✅ Verify that existing solutions (even manual ones) cost customers time or money',
          '✅ Confirm customers would pay for a better solution (ask for a letter of intent)',
          '✅ Estimate your Total Addressable Market (TAM) in Bangladesh + potential export markets',
          '✅ Research direct and indirect competitors (local and international)',
          '✅ Define your primary differentiation: price, features, language support, local integrations?',
        ],
      },
      { type: 'h2', text: 'Phase 2: Technical Architecture Decisions' },
      {
        type: 'p',
        text: 'These decisions are hard to change later. Make them carefully.',
      },
      { type: 'h3', text: 'Frontend Framework' },
      {
        type: 'ul',
        items: [
          '✅ Next.js (React) for most SaaS dashboards — server-side rendering, great performance, large ecosystem',
          '✅ TypeScript from day one — catches bugs before they reach production',
          '✅ Tailwind CSS or a component library (shadcn/ui recommended) for consistent UI',
          '✅ Consider if you need a mobile app at launch or if a responsive web app is sufficient',
        ],
      },
      { type: 'h3', text: 'Backend and Database' },
      {
        type: 'ul',
        items: [
          '✅ Node.js with Express/Fastify or Python with FastAPI for the backend',
          '✅ PostgreSQL for relational data (users, subscriptions, billing) — do not use MongoDB for structured data',
          '✅ Redis for session management and caching',
          '✅ Consider Supabase (PostgreSQL + auth + storage) to accelerate early development',
          '✅ Plan for multi-tenancy from day one: each customer\'s data must be logically isolated',
        ],
      },
      { type: 'h3', text: 'Hosting and Infrastructure' },
      {
        type: 'ul',
        items: [
          '✅ Singapore AWS or Google Cloud region for lowest latency to Bangladesh users',
          '✅ Start small: a DigitalOcean droplet or small VPS handles up to 500 concurrent users',
          '✅ Use managed database services (AWS RDS, Supabase) — do not self-manage your database',
          '✅ CDN for static assets (Cloudflare free tier is sufficient for most Bangladesh SaaS at launch)',
          '✅ Set up monitoring from day one: Uptime Robot (free) + Sentry for error tracking',
        ],
      },
      { type: 'h2', text: 'Phase 3: Authentication and Security' },
      {
        type: 'ul',
        items: [
          '✅ Use a proven auth library — do not build your own (NextAuth.js, Clerk, or Supabase Auth)',
          '✅ Implement email + password and Google/Facebook social login at minimum',
          '✅ Enforce strong password requirements and offer 2FA (TOTP) for business accounts',
          '✅ Use HTTPS everywhere — get a free SSL certificate from Let\'s Encrypt',
          '✅ Hash all passwords with bcrypt or argon2 — never store plain text',
          '✅ Rate-limit login endpoints to prevent brute force attacks',
          '✅ Implement CSRF protection on all forms',
          '✅ Set secure HTTP headers: Content-Security-Policy, X-Frame-Options, HSTS',
          '✅ Regular automated security dependency audits (npm audit, Dependabot)',
          '✅ Store secrets in environment variables — never hardcode API keys in source code',
        ],
      },
      { type: 'h2', text: 'Phase 4: Bangladesh Payment Integration' },
      {
        type: 'p',
        text: 'This is where Bangladesh SaaS startups lose the most time. Payment integrations in Bangladesh are more complex than international markets. Plan for this early.',
      },
      { type: 'h3', text: 'bKash Merchant Account' },
      {
        type: 'ul',
        items: [
          '✅ Apply for a bKash Merchant account — requires trade license, TIN certificate, bank account',
          '✅ Processing time: 2–4 weeks for approval',
          '✅ Integrate using bKash PGW (Payment Gateway) API — documentation available in their developer portal',
          '✅ Handle payment verification server-side — never trust client-side payment confirmation',
          '✅ Store bKash transaction IDs for reconciliation',
        ],
      },
      { type: 'h3', text: 'Nagad Merchant Account' },
      {
        type: 'ul',
        items: [
          '✅ Similar requirements to bKash — apply early as approval takes time',
          '✅ Nagad has a simpler API integration compared to bKash',
          '✅ Consider offering Nagad as secondary option to bKash',
        ],
      },
      { type: 'h3', text: 'International Payments (For Export SaaS)' },
      {
        type: 'ul',
        items: [
          '✅ Stripe is not directly available for Bangladesh-registered businesses — use Paddle or LemonSqueezy as merchant of record',
          '✅ Alternatively, register an entity in Singapore, UK, or USA for direct Stripe access',
          '✅ Payoneer or Wise for receiving international wire payments',
        ],
      },
      { type: 'h2', text: 'Phase 5: Subscription and Billing Logic' },
      {
        type: 'ul',
        items: [
          '✅ Define your pricing tiers clearly before building billing (monthly, quarterly, annual)',
          '✅ Build a subscription state machine: trial → active → past_due → cancelled',
          '✅ Handle free trial correctly: collect payment info upfront or bill on trial end?',
          '✅ Build feature flags tied to subscription tier — do not build features before you need to gate them',
          '✅ Invoice generation and sending (PDF invoices with VAT if applicable)',
          '✅ Email notifications: payment success, payment failed, subscription expiring, receipt',
          '✅ Grace period for failed payments (3–5 days) before downgrading access',
        ],
      },
      { type: 'h2', text: 'Phase 6: Compliance for Bangladesh SaaS' },
      {
        type: 'ul',
        items: [
          '✅ Register your business: trade license + TIN is minimum requirement',
          '✅ If you collect user data: draft a Privacy Policy and Terms of Service (consult a lawyer)',
          '✅ Data residency: some Bangladesh government or financial sector clients require data stored in Bangladesh — plan for this if targeting enterprise',
          '✅ VAT registration if annual revenue exceeds the threshold (consult NBR guidelines)',
          '✅ If handling financial data: review Bangladesh Bank guidelines on fintech services',
        ],
      },
      { type: 'h2', text: 'Phase 7: Launch and Growth Checklist' },
      {
        type: 'ul',
        items: [
          '✅ Set up analytics: Google Analytics 4 + a product analytics tool (PostHog is free and open-source)',
          '✅ Customer support channel: WhatsApp API for fast response, Crisp or Intercom for web chat',
          '✅ Onboarding flow: new users should reach their first "aha moment" within 5 minutes',
          '✅ In-app feedback: deploy a simple NPS survey after users have been active for 7 days',
          '✅ Define your North Star Metric (e.g., active users per month, reports generated, automations running)',
          '✅ Set up a status page (BetterUptime, Freshstatus) so customers can check service status',
          '✅ Automated backup: daily database backups with 30-day retention minimum',
        ],
      },
      {
        type: 'highlight',
        label: 'Typical Bangladesh SaaS MVP Timeline',
        text: 'Month 1–2: Architecture setup, auth, core feature v1. Month 3: Payment integration (start bKash approval in Month 1!). Month 4: Beta launch with 10 paying customers. Month 5–6: Feedback iteration and public launch.',
      },
      {
        type: 'cta',
        href: '/services/saas-development',
        label: 'Build Your SaaS with DataNest BD',
        subtext: 'We build production-ready SaaS products for Bangladesh startups — full-stack, with bKash/Nagad payments and WhatsApp support included.',
      },
    ],
  },
];

// ─── Static Params (required for static export) ───────────────────────────────

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

// ─── Per-Page SEO Metadata ────────────────────────────────────────────────────

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return {};

  const url = `https://www.datanestbd.com/blog/${post.slug}`;

  return {
    title: post.metaTitle,
    description: post.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      type: 'article',
      url,
      title: post.metaTitle,
      description: post.metaDescription,
      siteName: 'DataNest BD',
    },
    twitter: {
      card: 'summary_large_image',
      title: post.metaTitle,
      description: post.metaDescription,
    },
  };
}

// ─── Content Renderer ─────────────────────────────────────────────────────────

function renderSection(section: Section, index: number) {
  switch (section.type) {
    case 'h2':
      return (
        <h2
          key={index}
          className="text-2xl font-bold text-white mt-10 mb-4 leading-snug"
        >
          {section.text}
        </h2>
      );
    case 'h3':
      return (
        <h3
          key={index}
          className="text-lg font-semibold text-slate-100 mt-7 mb-3"
        >
          {section.text}
        </h3>
      );
    case 'p':
      return (
        <p key={index} className="text-slate-300 leading-relaxed mb-5">
          {section.text}
        </p>
      );
    case 'ul':
      return (
        <ul key={index} className="mb-6 space-y-2">
          {section.items.map((item, i) => (
            <li key={i} className="flex items-start gap-2.5 text-slate-300 text-[15px] leading-relaxed">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-1 shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      );
    case 'ol':
      return (
        <ol key={index} className="mb-6 space-y-3 counter-reset-list">
          {section.items.map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-slate-300 text-[15px] leading-relaxed">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500/20 border border-blue-500/30 text-blue-400 text-xs font-bold flex items-center justify-center mt-0.5">
                {i + 1}
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ol>
      );
    case 'highlight':
      return (
        <div
          key={index}
          className="my-6 p-5 rounded-xl border border-blue-500/25 bg-blue-500/8"
          style={{ background: 'rgba(59,130,246,0.08)' }}
        >
          {section.label && (
            <p className="text-xs font-bold text-blue-400 uppercase tracking-widest mb-2">
              {section.label}
            </p>
          )}
          <p className="text-slate-200 text-[15px] leading-relaxed whitespace-pre-line">
            {section.text}
          </p>
        </div>
      );
    case 'table':
      return (
        <div key={index} className="my-6 overflow-x-auto rounded-xl border border-white/[0.08]">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/[0.08]" style={{ background: 'rgba(255,255,255,0.04)' }}>
                {section.headers.map((h, i) => (
                  <th
                    key={i}
                    className="px-4 py-3 text-left font-semibold text-slate-200 whitespace-nowrap"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {section.rows.map((row, ri) => (
                <tr
                  key={ri}
                  className="border-b border-white/[0.04] transition-colors"
                  style={ri % 2 === 0 ? {} : { background: 'rgba(255,255,255,0.02)' }}
                >
                  {row.map((cell, ci) => (
                    <td key={ci} className="px-4 py-3 text-slate-300 align-top">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    case 'cta':
      return (
        <div
          key={index}
          className="my-10 p-7 rounded-2xl text-center border border-blue-500/20"
          style={{ background: 'linear-gradient(135deg, rgba(37,99,235,0.12) 0%, rgba(5,150,105,0.08) 100%)' }}
        >
          <p className="text-slate-300 text-sm mb-4">{section.subtext}</p>
          <Link href={section.href} className="btn-primary inline-flex">
            {section.label} <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      );
    default:
      return null;
  }
}

// ─── Page Component ───────────────────────────────────────────────────────────

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);

  if (!post) notFound();

  const otherPosts = posts.filter((p) => p.slug !== post.slug).slice(0, 3);

  // JSON-LD Article schema for Google
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.metaDescription,
    author: { '@type': 'Organization', name: 'DataNest BD', url: 'https://www.datanestbd.com' },
    publisher: {
      '@type': 'Organization',
      name: 'DataNest BD',
      logo: { '@type': 'ImageObject', url: 'https://i.ibb.co.com/zhLsDmyc/L1-removebg-preview.png' },
    },
    datePublished: post.date,
    mainEntityOfPage: { '@type': 'WebPage', '@id': `https://www.datanestbd.com/blog/${post.slug}` },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="pt-32 pb-12 bg-gradient-hero-mesh">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-slate-500 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-slate-300 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-slate-300 transition-colors">Blog</Link>
            <span>/</span>
            <span className="text-slate-400 truncate max-w-[200px]">{post.category}</span>
          </nav>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-3 mb-5">
            <span className={`badge ${post.categoryColor} text-xs`}>{post.category}</span>
            <div className="flex items-center gap-1.5 text-xs text-slate-500">
              <Clock className="w-3.5 h-3.5" /> {post.readTime}
            </div>
            <div className="flex items-center gap-1.5 text-xs text-slate-500">
              <Tag className="w-3.5 h-3.5" /> {post.date}
            </div>
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl font-bold text-white leading-tight mb-6">
            {post.title}
          </h1>

          {/* Author / Publisher line */}
          <div className="flex items-center gap-3 pt-5 border-t border-white/[0.06]">
            <div className="w-9 h-9 rounded-full bg-gradient-brand flex items-center justify-center text-white text-xs font-bold">
              DN
            </div>
            <div>
              <p className="text-sm font-medium text-slate-200">DataNest BD Team</p>
              <p className="text-xs text-slate-500">Digital Agency, Dhaka, Bangladesh</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Article Body ──────────────────────────────────────────────── */}
      <article className="py-12 bg-[#0F172A]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Intro paragraph */}
          <p className="text-lg text-slate-300 leading-relaxed mb-8 pb-8 border-b border-white/[0.06]">
            {post.intro}
          </p>

          {/* Content sections */}
          {post.content.map((section, i) => renderSection(section, i))}

          {/* Back to blog */}
          <div className="mt-14 pt-8 border-t border-white/[0.06]">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to all articles
            </Link>
          </div>
        </div>
      </article>

      {/* ── More Articles ─────────────────────────────────────────────── */}
      {otherPosts.length > 0 && (
        <section className="py-16 bg-[#080E1A]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl font-bold text-white mb-8">More Articles</h2>
            <div className="grid md:grid-cols-3 gap-5">
              {otherPosts.map((p) => (
                <div key={p.slug} className="blog-card group flex flex-col">
                  <div className="p-6 flex flex-col flex-1">
                    <div className="mb-3">
                      <span className={`badge ${p.categoryColor} text-xs`}>{p.category}</span>
                    </div>
                    <h3 className="text-sm font-bold text-white mb-2 group-hover:text-gradient transition-all leading-snug flex-1">
                      {p.title}
                    </h3>
                    <div className="flex items-center justify-between mt-4 pt-4 border-t border-white/[0.05]">
                      <div className="flex items-center gap-1.5 text-xs text-slate-500">
                        <Clock className="w-3.5 h-3.5" /> {p.readTime}
                      </div>
                      <Link
                        href={`/blog/${p.slug}`}
                        className="flex items-center gap-1.5 text-xs font-semibold text-blue-400 hover:text-blue-300 transition-colors"
                      >
                        Read <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Bottom CTA ────────────────────────────────────────────────── */}
      <section className="py-16 bg-[#0F172A] border-t border-white/[0.06]">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <p className="section-label mx-auto mb-4">Ready to grow?</p>
          <h2 className="section-title mb-4">
            Let&apos;s Build Something That <span className="text-gradient">Actually Works</span>
          </h2>
          <p className="text-slate-400 mb-8">
            Free consultation. No commitment. Our team is based in Dhaka and responds within a few hours.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link href="/contact" className="btn-primary">
              Get Free Consultation <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="https://wa.me/8801804277420?text=Hi%20DataNest%20BD%2C%20I%20read%20your%20blog%20and%20want%20to%20learn%20more"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              <MessageCircle className="w-4 h-4" /> Chat on WhatsApp
            </a>
          </div>
          <p className="mt-5 text-xs text-slate-600">
            <Phone className="w-3 h-3 inline mr-1" />
            +880 180-427-7420 &nbsp;·&nbsp; info@datanestbd.com &nbsp;·&nbsp; Mirpur-DOHS, Dhaka
          </p>
        </div>
      </section>
    </>
  );
}

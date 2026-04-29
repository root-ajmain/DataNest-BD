export interface Service {
  id: string;
  name: string;
  slug: string;
  icon: string;
  shortDescription: string;
  longDescription: string;
  pricing: {
    starting: number;
    model?: string;
  };
  features: string[];
}

export const SERVICES: Service[] = [
  {
    id: 'whatsapp-api',
    name: 'WhatsApp Business API',
    slug: 'whatsapp-api',
    icon: '💬',
    shortDescription: 'Authorized WhatChimp partner for official WhatsApp API, AI chatbots, and team inbox',
    longDescription: 'Get the official WhatsApp API through DataNest BD, Bangladesh\'s authorized WhatChimp partner, with chatbots, bulk messaging, team inbox, CRM integrations, 24/7 Bangla support, and 0% markup on Meta charges.',
    pricing: {
      starting: 3000,
      model: '/month'
    },
    features: [
      '48-hour setup guarantee',
      '0% markup on Meta charges',
      'Authorized WhatChimp partner',
      'Platform training included',
      'Bulk messaging & broadcasts',
      'Multi-agent team inbox',
      'CRM integrations'
    ]
  },
  {
    id: 'web-development',
    name: 'Web Development',
    slug: 'web-development',
    icon: '🌐',
    shortDescription: 'Conversion-focused websites, web apps, and e-commerce platforms built for speed',
    longDescription: 'From corporate sites to full web platforms — we build fast, SEO-optimized, mobile-first solutions that turn visitors into customers.',
    pricing: {
      starting: 25000
    },
    features: [
      'Next.js / React development',
      'Mobile-first design',
      'SEO optimized',
      'E-commerce integration',
      'Fast loading (<3s)',
      'Conversion rate optimization'
    ]
  },
  {
    id: 'ai-automation',
    name: 'AI Automation',
    slug: 'ai-automation',
    icon: '🤖',
    shortDescription: 'Custom AI agents and smart workflows that run your business on autopilot',
    longDescription: 'Custom AI agents that handle customer queries, qualify leads, trigger workflows, and run 24/7 — so your team can focus on growth.',
    pricing: {
      starting: 15000
    },
    features: [
      'Lead qualification bots',
      '24/7 customer support AI',
      'Workflow automation',
      'Natural language understanding',
      'Multi-step conversations',
      'CRM/database integration'
    ]
  },
  {
    id: 'saas-development',
    name: 'SaaS Development',
    slug: 'saas-development',
    icon: '🚀',
    shortDescription: 'Full-stack SaaS products from MVP to scale — built for subscription business models',
    longDescription: 'End-to-end SaaS development from architecture to deployment — built for scale, security, and rapid growth.',
    pricing: {
      starting: 150000
    },
    features: [
      'MVP in 4-6 weeks',
      'Payment gateway integration',
      'Cloud infrastructure',
      'Scalable architecture',
      'User authentication',
      'API development'
    ]
  },
  {
    id: 'digital-marketing',
    name: 'Digital Marketing',
    slug: 'digital-marketing',
    icon: '📈',
    shortDescription: 'ROI-driven Facebook & Google ad campaigns with transparent reporting',
    longDescription: 'Performance marketing campaigns that generate quality leads and maximize ROI. Transparent reporting, no fluff — just results.',
    pricing: {
      starting: 0,
      model: '15% of ad spend (min BDT 30,000/mo)'
    },
    features: [
      'Facebook Ads management',
      'Google Ads campaigns',
      'Performance tracking',
      'A/B testing',
      'Audience targeting',
      'Weekly reporting'
    ]
  },
  {
    id: 'landing-page',
    name: 'Landing Pages',
    slug: 'landing-page',
    icon: '📄',
    shortDescription: 'High-converting landing pages designed to turn visitors into customers',
    longDescription: 'Beautifully designed, CRO-optimized landing pages that drive action. Built fast, tested thoroughly, optimized continuously.',
    pricing: {
      starting: 8000
    },
    features: [
      'CRO-optimized design',
      'A/B testing ready',
      '48-hour delivery',
      'Mobile responsive',
      'Fast loading',
      'Lead capture forms'
    ]
  },
  {
    id: 'facebook-business',
    name: 'Facebook Business Setup',
    slug: 'facebook-business',
    icon: '📱',
    shortDescription: 'Meta verification, pixel setup, ad account structure for Bangladesh businesses',
    longDescription: 'Complete Meta Business Suite setup, ad account structure, tracking pixels, and business verification for Bangladesh businesses.',
    pricing: {
      starting: 5000
    },
    features: [
      'Meta Business verification',
      'Conversion tracking guidance',
      'Ad account structure',
      'Catalog setup',
      'Domain verification',
      'Business Manager setup'
    ]
  }
];

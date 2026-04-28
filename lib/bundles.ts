export interface Bundle {
  id: string;
  name: string;
  emoji: string;
  description: string;
  includes: string[];
  regularPrice: number;
  bundlePrice: number;
  savings: number;
  timeline: string;
  targetAudience: string;
}

export const BUNDLES: Bundle[] = [
  {
    id: 'ecommerce',
    name: 'Complete E-Commerce Stack',
    emoji: '🛍️',
    description: 'Everything you need to launch and scale an online store in Bangladesh',
    includes: [
      'E-commerce website (WooCommerce/Shopify)',
      'WhatsApp Growth Plan (first 3 months)',
      'Facebook Business setup + Pixel',
      'Landing page for campaigns'
    ],
    regularPrice: 46000,
    bundlePrice: 39000,
    savings: 15,
    timeline: 'Live in 2 weeks',
    targetAudience: 'E-commerce businesses, online retailers'
  },
  {
    id: 'restaurant',
    name: 'Restaurant Growth System',
    emoji: '🍽️',
    description: 'Direct ordering system that bypasses Foodpanda/Pathao fees',
    includes: [
      'Menu website + online ordering',
      'WhatsApp Growth Plan + Custom AI ordering bot',
      'Facebook/Instagram campaign setup',
      'First month ad management FREE'
    ],
    regularPrice: 56000,
    bundlePrice: 45000,
    savings: 20,
    timeline: 'Live in 10 days',
    targetAudience: 'Restaurants, cloud kitchens, food delivery'
  },
  {
    id: 'leadgen',
    name: 'B2B Lead Generation Machine',
    emoji: '📊',
    description: 'Automated system for capturing and qualifying leads 24/7',
    includes: [
      'High-converting landing page',
      'WhatsApp Growth Plan + AI lead qualification',
      'Google Sheets CRM integration',
      'Facebook Lead Ads setup'
    ],
    regularPrice: 39000,
    bundlePrice: 33000,
    savings: 15,
    timeline: 'Live in 1 week',
    targetAudience: 'B2B services, consultants, agencies'
  },
  {
    id: 'saas',
    name: 'SaaS Product Launch',
    emoji: '🚀',
    description: 'From MVP development to first customer acquisition',
    includes: [
      'SaaS MVP development',
      'Landing page + product demo',
      'WhatsApp onboarding automation',
      'First 30 days of ad campaigns'
    ],
    regularPrice: 200000,
    bundlePrice: 180000,
    savings: 10,
    timeline: 'MVP in 6 weeks',
    targetAudience: 'Tech startups, SaaS founders'
  }
];

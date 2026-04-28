export interface PricingPlan {
  id: string;
  name: string;
  price: number;
  popular?: boolean;
  badge?: string;
  description: string;
  features: {
    included: string[];
    excluded?: string[];
  };
  limits: {
    teamMembers: number;
    subscribers: number;
    whatsappNumbers: number;
  };
}

export const WHATSAPP_PRICING: PricingPlan[] = [
  {
    id: 'basic',
    name: 'Basic',
    price: 3000,
    description: 'For small businesses starting out',
    limits: {
      teamMembers: 2,
      subscribers: 10000,
      whatsappNumbers: 1
    },
    features: {
      included: [
        '2 Team Members',
        '10,000 Subscribers',
        'Single WhatsApp Number',
        'Basic Automated Chat (included)',
        'Bulk WhatsApp Messaging',
        'Drag & Drop Chatbot Builder',
        'WhatsApp Chat Widget',
        'Google Sheets Integration',
        'Campaign Reporting',
        'Unlimited Message Credits',
        'On-Call Support'
      ],
      excluded: [
        'AI Agent (paid add-on: BDT 15K-40K)',
        'Omnichannel Inbox',
        'Multiple WhatsApp Numbers'
      ]
    }
  },
  {
    id: 'growth',
    name: 'Growth',
    price: 6000,
    popular: true,
    badge: 'Most Popular',
    description: 'For scaling businesses',
    limits: {
      teamMembers: 5,
      subscribers: 20000,
      whatsappNumbers: 1
    },
    features: {
      included: [
        '5 Team Members',
        '20,000 Subscribers',
        'Single WhatsApp Number',
        'Omnichannel Inbox (WhatsApp + Instagram + FB)',
        'Unlimited AI Message Tokens',
        'AI Intent Detection',
        'Smart Agent Routing',
        'Appointment Booking System',
        'High Speed Broadcasting',
        'Roles and Permissions',
        'Click to WhatsApp Ad Integration',
        'WhatsApp Product Catalog',
        'All Basic Plan Features'
      ],
      excluded: [
        'Custom AI Agent (paid add-on: BDT 15K-40K)',
        'Multiple WhatsApp Numbers'
      ]
    }
  },
  {
    id: 'elite',
    name: 'Elite',
    price: 18000,
    badge: 'Elite',
    description: 'For multi-department teams',
    limits: {
      teamMembers: 10,
      subscribers: 55000,
      whatsappNumbers: 5
    },
    features: {
      included: [
        '10 Team Members',
        '55,000 Subscribers',
        '5 WhatsApp Numbers',
        'Custom AI Agent (INCLUDED - worth BDT 25K+)',
        'Multiple WhatsApp Lines',
        'Department-Based Routing',
        'Agent Number Mapping',
        'Dedicated Account Manager',
        'Priority Support',
        'Advanced Analytics Dashboard',
        'White-Label Option Available',
        'Custom Integrations (API)',
        'All Growth Plan Features'
      ]
    }
  },
  {
    id: 'scale',
    name: 'Scale',
    price: 24000,
    badge: 'Scale',
    description: 'For large enterprises',
    limits: {
      teamMembers: 50,
      subscribers: 105000,
      whatsappNumbers: 10
    },
    features: {
      included: [
        '50 Team Members',
        '105,000 Subscribers',
        '10 WhatsApp Numbers',
        'Custom AI Agent (INCLUDED)',
        'Multiple WhatsApp Lines',
        'Department-Based Routing',
        'Agent Number Mapping',
        'Dedicated Account Manager',
        'Priority Support (24/7)',
        'Advanced Analytics Dashboard',
        'White-Label Branding',
        'Custom Integrations (API)',
        'SLA Guarantee (99.9% uptime)',
        'Quarterly Strategy Reviews',
        'All Elite Plan Features'
      ]
    }
  }
];

export const SETUP_FEE = 500;

export const BILLING_DISCOUNTS = {
  monthly: 0,
  quarterly: 5,
  halfYearly: 10,
  yearly: 15
};

export interface Testimonial {
  quote: string;
  metric: string;
  name: string;
  initials: string;
  title: string;
  company: string;
  industry: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: "DataNest BD transformed our customer communication. Before the WhatsApp API, we were losing leads daily. Now our sales team responds in under 2 minutes and we've seen a 280% jump in qualified leads within the first 3 months.",
    metric: '+280% qualified leads',
    name: 'Rafiqul Islam',
    initials: 'RI',
    title: 'CEO',
    company: 'Dhaka Textile Export',
    industry: 'Manufacturing'
  },
  {
    quote: "The web development team built our entire e-commerce platform in 3 weeks. It's fast, looks premium, and the WhatsApp integration for abandoned carts alone recovered over 150 orders in the first month. Incredible ROI.",
    metric: '150+ orders recovered',
    name: 'Nasrin Akter',
    initials: 'NA',
    title: 'Founder',
    company: 'Shadin Fashion House',
    industry: 'E-commerce'
  },
  {
    quote: "We hired DataNest BD for AI automation and it completely changed how we handle operations. Their AI agent now handles 70% of customer queries without human involvement. Our team finally has time to focus on growth.",
    metric: '70% queries automated',
    name: 'Karim Hossain',
    initials: 'KH',
    title: 'Director',
    company: 'BD Logistics Pro',
    industry: 'Logistics'
  },
  {
    quote: "Their digital marketing campaigns are data-driven and transparent. We get detailed reports every week, and our cost per lead dropped by 60% compared to our previous agency. The Facebook Business setup they did is flawless.",
    metric: '60% lower cost per lead',
    name: 'Sumaiya Begum',
    initials: 'SB',
    title: 'Marketing Manager',
    company: 'Meena Pharma',
    industry: 'Pharmaceutical'
  },
  {
    quote: "DataNest BD helped us build our SaaS MVP in record time. They understood our technical requirements perfectly and delivered a scalable architecture. 6 months post-launch we're at 500 users and growing without any infrastructure issues.",
    metric: '500+ users, zero downtime',
    name: 'Tanvir Ahmed',
    initials: 'TA',
    title: 'CTO',
    company: 'HealthTech BD',
    industry: 'Healthcare SaaS'
  },
  {
    quote: "The WhatsApp broadcast campaigns they set up gave us a direct line to 8,000 potential buyers. We closed 4 high-value properties directly from WhatsApp conversations. The ROI is simply unmatched compared to anything else we've tried.",
    metric: '4 properties via WhatsApp',
    name: 'Farzana Chowdhury',
    initials: 'FC',
    title: 'Owner',
    company: 'Chowdhury Real Estate',
    industry: 'Real Estate'
  }
];

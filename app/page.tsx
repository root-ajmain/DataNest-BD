import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import Hero from '@/components/sections/Hero';
import TrustSignals from '@/components/sections/TrustSignals';
import ServicesSection from '@/components/sections/ServicesSection';
import WhyChooseUs from '@/components/sections/WhyChooseUs';
import ProcessSection from '@/components/sections/ProcessSection';
import WhatChimpPartnership from '@/components/sections/WhatChimpPartnership';

// Below-fold sections loaded lazily
const WhatsAppPricing    = dynamic(() => import('@/components/sections/WhatsAppPricing'));
const Testimonials       = dynamic(() => import('@/components/sections/Testimonials'));
const FAQSection         = dynamic(() => import('@/components/sections/FAQSection'));
const LeadCapture        = dynamic(() => import('@/components/sections/LeadCapture'));
const FinalCTA           = dynamic(() => import('@/components/sections/FinalCTA'));

export const metadata: Metadata = {
  title: 'DataNest BD — Official WhatChimp Partner Bangladesh | WhatsApp API, AI Automation & Web Development',
  description:
    "DataNest BD is Bangladesh's authorized WhatChimp partner. Get the official WhatsApp Business API with 0% markup, 24/7 local support in Bangla, platform training included, and BDT pricing from 3,000 Tk/month. 48-hour setup guaranteed.",
  openGraph: {
    title: 'DataNest BD — Official WhatChimp Partner Bangladesh | WhatsApp API, AI Automation & Web Development',
    description: "Authorized WhatChimp partner in Bangladesh. Official WhatsApp API, AI Automation & Web Development. 0% Meta markup, 24/7 Bangla support, BDT pricing from 3,000 Tk/month.",
    url: 'https://www.datanestbd.com',
  },
  alternates: {
    canonical: 'https://www.datanestbd.com',
  },
};

const homepageSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://www.datanestbd.com/#organization',
  name: 'DataNest BD',
  url: 'https://www.datanestbd.com',
  description: 'Authorized WhatChimp partner in Bangladesh offering official WhatsApp Business API, AI automation, web development, and digital marketing. 24/7 Bangla support, BDT pricing, 0% Meta markup.',
  telephone: '+8801804277420',
  email: 'info@datanestbd.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'House:1039, Road:09, Avenue:09, Mirpur-DOHS',
    addressLocality: 'Dhaka',
    postalCode: '1216',
    addressCountry: 'BD',
  },
  priceRange: 'BDT 3,000 - BDT 6,000/month',
  openingHours: 'Mo-Sa 09:00-20:00',
  serviceArea: { '@type': 'Country', name: 'Bangladesh' },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'DataNest BD Digital Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'WhatsApp Business API Setup' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Web Development Bangladesh' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'AI Automation Agency' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Digital Marketing Bangladesh' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'SaaS Development Bangladesh' } },
    ],
  },
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homepageSchema) }}
      />

      <Hero />
      <TrustSignals />
      <ServicesSection />
      <WhyChooseUs />
      <WhatChimpPartnership />
      <ProcessSection />
      <WhatsAppPricing />
      <Testimonials />
      <FAQSection />
      <LeadCapture />
      <FinalCTA />
    </>
  );
}

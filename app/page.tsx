import type { Metadata } from 'next';
import Hero from '@/components/sections/Hero';
import TrustSignals from '@/components/sections/TrustSignals';
import ServicesSection from '@/components/sections/ServicesSection';
import WhyChooseUs from '@/components/sections/WhyChooseUs';
import ProcessSection from '@/components/sections/ProcessSection';
import WhatsAppPricing from '@/components/sections/WhatsAppPricing';
import Testimonials from '@/components/sections/Testimonials';
import FAQSection from '@/components/sections/FAQSection';
import LeadCapture from '@/components/sections/LeadCapture';
import FinalCTA from '@/components/sections/FinalCTA';

export const metadata: Metadata = {
  title: 'DataNest BD — Web Development, AI Automation & WhatsApp API Agency Bangladesh',
  description:
    'Bangladesh\'s premier digital agency for Web Development, SaaS, AI Automation, Digital Marketing, and Official WhatsApp Business API. Trusted by 100+ businesses. Book a free consultation today.',
  openGraph: {
    title: 'DataNest BD — Web Development, AI Automation & WhatsApp API',
    description: 'Build. Automate. Grow 10X Faster. Bangladesh\'s leading digital agency for WhatsApp API, Web Dev, AI & Marketing.',
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
  telephone: '+8801804277420',
  email: 'info@datanestbd.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'House:1039, Road:09, Avenue:09, Mirpur-DOHS',
    addressLocality: 'Dhaka',
    postalCode: '1216',
    addressCountry: 'BD',
  },
  priceRange: '৳৳',
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
      <ProcessSection />
      <WhatsAppPricing />
      <Testimonials />
      <FAQSection />
      <LeadCapture />
      <FinalCTA />
    </>
  );
}

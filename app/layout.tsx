import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import DiscountPopup from '@/components/DiscountPopup';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
  weight: ['600', '700', '800', '900'],
});

const siteUrl = 'https://www.datanestbd.com';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'DataNest BD — Official WhatChimp Partner Bangladesh | WhatsApp API, AI Automation & Web Development',
    template: '%s | DataNest BD',
  },
  description:
    "DataNest BD is Bangladesh's authorized WhatChimp partner. Official WhatsApp Business API with 0% markup, 24/7 Bangla support, and BDT pricing from 3,000 Tk/month. Also offering Web Development, SaaS, AI Automation, and Digital Marketing. Trusted by 100+ businesses.",
  keywords: [
    'Web Development Bangladesh',
    'SaaS Development Bangladesh',
    'AI Automation Agency Bangladesh',
    'Digital Marketing Bangladesh',
    'WhatsApp API Bangladesh',
    'WhatsApp Business API',
    'Facebook Business Setup',
    'Landing Page Design Bangladesh',
    'DataNest BD',
    'Software Agency Dhaka',
  ],
  authors: [{ name: 'DataNest BD', url: siteUrl }],
  creator: 'DataNest BD',
  publisher: 'DataNest BD',
  formatDetection: { email: false, telephone: false },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    alternateLocale: 'bn_BD',
    url: siteUrl,
    siteName: 'DataNest BD',
    title: 'DataNest BD — Official WhatChimp Partner Bangladesh | WhatsApp API, AI Automation & Web Development',
    description:
      'Authorized WhatChimp partner in Bangladesh for Official WhatsApp Business API, plus Web Development, SaaS, AI Automation, and Digital Marketing. 24/7 Bangla support, BDT pricing, and 0% Meta markup.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'DataNest BD — Digital Agency Bangladesh',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DataNest BD — Official WhatChimp Partner Bangladesh',
    description:
      'Authorized WhatChimp partner in Bangladesh for Official WhatsApp API, Web Development, SaaS, AI Automation, and Digital Marketing.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  alternates: {
    canonical: siteUrl,
  },
  icons: {
    icon: [
      { url: 'https://i.ibb.co/zhLsDmyc/L1-removebg-preview.png', type: 'image/png' },
      { url: 'https://i.ibb.co/zhLsDmyc/L1-removebg-preview.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: [{ url: 'https://i.ibb.co/zhLsDmyc/L1-removebg-preview.png', sizes: '180x180', type: 'image/png' }],
    shortcut: 'https://i.ibb.co/zhLsDmyc/L1-removebg-preview.png',
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'DataNest BD',
  url: siteUrl,
  logo: 'https://i.ibb.co/zhLsDmyc/L1-removebg-preview.png',
  description:
    'DataNest BD is Bangladesh\'s authorized WhatChimp partner — a premium digital agency offering Official WhatsApp Business API, Web Development, SaaS, AI Automation, and Digital Marketing. 24/7 Bangla support, BDT pricing, 0% Meta markup.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'House:1039, Road:09, Avenue:09, Mirpur-DOHS',
    addressLocality: 'Dhaka',
    postalCode: '1216',
    addressCountry: 'BD',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+8801804277420',
    contactType: 'customer service',
    availableLanguage: ['English', 'Bengali'],
  },
  sameAs: [
    'https://www.facebook.com/datanestbd',
    'https://www.linkedin.com/company/datanest-bd',
    'https://www.instagram.com/datanest_bd/',
  ],
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  url: siteUrl,
  name: 'DataNest BD',
  potentialAction: {
    '@type': 'SearchAction',
    target: `${siteUrl}/search?q={search_term_string}`,
    'query-input': 'required name=search_term_string',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-W2HGL77K');
            `.trim(),
          }}
        />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-GGXYESRW6G" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-GGXYESRW6G');
            `.trim(),
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '2737234179962845');
fbq('track', 'PageView');
            `.trim(),
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=2737234179962845&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <link rel="icon" href="https://i.ibb.co/zhLsDmyc/L1-removebg-preview.png" type="image/png" sizes="48x48" />
        <link rel="icon" href="https://i.ibb.co/zhLsDmyc/L1-removebg-preview.png" type="image/png" sizes="32x32" />
        <link rel="icon" href="https://i.ibb.co/zhLsDmyc/L1-removebg-preview.png" type="image/png" sizes="96x96" />
        <link rel="shortcut icon" href="https://i.ibb.co/zhLsDmyc/L1-removebg-preview.png" type="image/png" />
        <link rel="apple-touch-icon" sizes="180x180" href="https://i.ibb.co/zhLsDmyc/L1-removebg-preview.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="bg-[#0F172A] antialiased" suppressHydrationWarning>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-W2HGL77K"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingWhatsApp />
        <DiscountPopup />
      </body>
    </html>
  );
}

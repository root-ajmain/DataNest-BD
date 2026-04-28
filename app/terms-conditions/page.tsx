import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | DataNest BD',
  description: 'DataNest BD Terms of Service — governing the use of our website and digital services.',
  alternates: { canonical: 'https://www.datanestbd.com/terms-conditions' },
};

export default function TermsPage() {
  return (
    <section className="pt-32 pb-20 min-h-screen bg-[#0F172A]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-white mb-3">Terms of Service</h1>
        <p className="text-slate-500 mb-10">Last updated: March 2025</p>
        <div className="space-y-6 text-slate-400 leading-relaxed">
          <p>By accessing or using DataNest BD&apos;s website and services, you agree to be bound by these Terms of Service.</p>
          <h2 className="text-xl font-bold text-white mt-8">Services</h2>
          <p>DataNest BD provides digital agency services including WhatsApp API setup, web development, AI automation, and digital marketing. Service terms are outlined in individual client agreements.</p>
          <h2 className="text-xl font-bold text-white mt-8">Payments</h2>
          <p>Payment terms are specified in individual service agreements. We accept bKash, Nagad, bank transfer, and Rocket for Bangladesh clients.</p>
          <h2 className="text-xl font-bold text-white mt-8">Contact</h2>
          <p>For questions about these terms: <a href="mailto:info@datanestbd.com" className="text-blue-400 hover:text-blue-300">info@datanestbd.com</a></p>
        </div>
      </div>
    </section>
  );
}

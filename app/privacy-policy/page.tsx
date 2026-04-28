import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | DataNest BD',
  description: 'DataNest BD Privacy Policy — how we collect, use, and protect your personal information.',
  alternates: { canonical: 'https://www.datanestbd.com/privacy-policy' },
};

export default function PrivacyPolicyPage() {
  return (
    <section className="pt-32 pb-20 min-h-screen bg-[#0F172A]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-white mb-3">Privacy Policy</h1>
        <p className="text-slate-500 mb-10">Last updated: March 2025</p>
        <div className="prose prose-invert prose-slate max-w-none">
          <p className="text-slate-400 leading-relaxed mb-6">
            DataNest BD (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
          </p>
          <h2 className="text-xl font-bold text-white mt-8 mb-3">Information We Collect</h2>
          <p className="text-slate-400 leading-relaxed mb-4">We collect information you provide directly to us, such as when you fill out our consultation form, contact us via WhatsApp, email, or phone.</p>
          <h2 className="text-xl font-bold text-white mt-8 mb-3">How We Use Your Information</h2>
          <p className="text-slate-400 leading-relaxed mb-4">We use the information we collect to provide and improve our services, communicate with you, and comply with legal obligations.</p>
          <h2 className="text-xl font-bold text-white mt-8 mb-3">Contact Us</h2>
          <p className="text-slate-400 leading-relaxed">For privacy-related questions, contact us at: <a href="mailto:info@datanestbd.com" className="text-blue-400 hover:text-blue-300">info@datanestbd.com</a></p>
        </div>
      </div>
    </section>
  );
}

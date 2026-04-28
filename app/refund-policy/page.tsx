import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Refund & Cancellation Policy | DataNest BD',
  description: 'DataNest BD Refund and Cancellation Policy for WhatsApp API, web development, and digital marketing services.',
  alternates: { canonical: 'https://www.datanestbd.com/refund-policy' },
};

export default function RefundPolicyPage() {
  return (
    <section className="pt-32 pb-20 min-h-screen bg-[#0F172A]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-white mb-3">Refund & Cancellation Policy</h1>
        <p className="text-slate-500 mb-10">Last updated: March 2025</p>
        <div className="space-y-6 text-slate-400 leading-relaxed">
          <h2 className="text-xl font-bold text-white">WhatsApp API Monthly Plans</h2>
          <p>Month-to-month plans can be cancelled at any time. No refund is issued for the current billing period. Cancellation takes effect at the end of the current month.</p>
          <h2 className="text-xl font-bold text-white mt-8">Prepaid Plans (3, 6, 12 Months)</h2>
          <p>Prepaid plans may be eligible for a prorated refund of unused months minus a 10% processing fee, subject to review within 30 days of purchase.</p>
          <h2 className="text-xl font-bold text-white mt-8">Web Development & One-Time Projects</h2>
          <p>Project deposits are non-refundable once development has commenced. Project milestone payments are non-refundable once that milestone is delivered and approved.</p>
          <h2 className="text-xl font-bold text-white mt-8">Digital Marketing Services</h2>
          <p>Ad spend paid to platforms (Meta, Google) is non-refundable. Management fees for the current month are non-refundable. Future months are not billed upon cancellation.</p>
          <h2 className="text-xl font-bold text-white mt-8">How to Cancel or Request a Refund</h2>
          <p>Contact us at <a href="mailto:info@datanestbd.com" className="text-blue-400 hover:text-blue-300">info@datanestbd.com</a> or WhatsApp +880 1804 277420 with your account details.</p>
        </div>
      </div>
    </section>
  );
}

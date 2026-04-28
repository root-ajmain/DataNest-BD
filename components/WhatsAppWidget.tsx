'use client';

import { MessageCircle } from 'lucide-react';
import { COMPANY } from '@/lib/company';

export default function WhatsAppWidget() {
  return (
    <a
      href={`${COMPANY.whatsappLink}?text=Hi%20DataNest%20BD%2C%20I%20want%20to%20get%20started`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-600 text-white shadow-lg hover:bg-green-700 transition-all hover:scale-110"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="h-7 w-7" />
    </a>
  );
}

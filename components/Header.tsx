'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Globe } from 'lucide-react';
import { COMPANY } from '@/lib/company';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [language, setLanguage] = useState<'en' | 'bn'>('en');

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'bn' : 'en');
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="text-2xl font-bold text-primary-800">
              DataNest BD
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:gap-8">
            <Link href="/" className="text-gray-700 hover:text-primary-600">Home</Link>
            <Link href="/pricing" className="text-gray-700 hover:text-primary-600">Pricing</Link>
            <Link href="/case-studies" className="text-gray-700 hover:text-primary-600">Case Studies</Link>
            <Link href="/about" className="text-gray-700 hover:text-primary-600">About</Link>
            <Link href="/contact" className="text-gray-700 hover:text-primary-600">Contact</Link>
          </div>

          {/* Right Side Buttons */}
          <div className="flex items-center gap-4">
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1 text-sm text-gray-600 hover:text-primary-600"
            >
              <Globe className="h-4 w-4" />
              {language === 'en' ? 'বাংলা' : 'English'}
            </button>

            <a
              href={COMPANY.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-2 rounded-lg bg-green-600 px-4 py-2 text-sm font-medium text-white hover:bg-green-700"
            >
              WhatsApp
            </a>

            <Link
              href="/contact"
              className="hidden md:inline-flex items-center rounded-lg bg-primary-600 px-4 py-2 text-sm font-medium text-white hover:bg-primary-700"
            >
              Get Started
            </Link>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t py-4 space-y-2">
            <Link href="/" className="block py-2 text-gray-700 hover:text-primary-600">Home</Link>
            <Link href="/pricing" className="block py-2 text-gray-700 hover:text-primary-600">Pricing</Link>
            <Link href="/case-studies" className="block py-2 text-gray-700 hover:text-primary-600">Case Studies</Link>
            <Link href="/about" className="block py-2 text-gray-700 hover:text-primary-600">About</Link>
            <Link href="/contact" className="block py-2 text-gray-700 hover:text-primary-600">Contact</Link>
            <a
              href={COMPANY.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="block py-2 text-green-600 font-medium"
            >
              WhatsApp Us
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}

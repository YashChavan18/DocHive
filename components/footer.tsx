'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Github, Twitter, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const footerLinks = {
  latestTools: [
    { label: 'Age Calculator', href: '/tools/age-calculator' },
    { label: 'Text to PDF', href: '/tools/text-to-pdf' },
    { label: 'UPI QR Generator', href: '/tools/upi-qr-generator' },
    { label: 'Date Calculator', href: '/tools/date-calculator' },
  ],
  mostUsed: [
    { label: 'Invoice Generator', href: '/tools/invoice-generator' },
    { label: 'Resume Builder', href: '/tools/resume-builder' },
    { label: 'QR Code Generator', href: '/tools/qr-code-generator' },
    { label: 'GST Calculator', href: '/tools/gst-calculator' },
  ],
  categories: [
    { label: 'Students', href: '/categories/students' },
    { label: 'Business', href: '/categories/business' },
    { label: 'Finance', href: '/categories/finance' },
    { label: 'Social Media', href: '/categories/social-media' },
    { label: 'PDF Tools', href: '/categories/pdf-tools' },
    { label: 'Web Utilities', href: '/categories/web-utilities' },
  ],
  resources: [
    { label: 'Blog', href: '/blog' },
    { label: 'Tutorials', href: '/tutorials' },
    { label: 'API (Coming Soon)', href: '#' },
    { label: 'Changelog', href: '/changelog' },
  ],
  company: [
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
    { label: 'Careers', href: '/careers' },
    { label: 'Press Kit', href: '/press' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
    { label: 'Cookie Policy', href: '/cookies' },
  ],
};

const socialLinks = [
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Github, href: '#', label: 'GitHub' },
];

export function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
      {/* Newsletter Section */}
      <div className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/50 dark:to-cyan-950/50 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                Subscribe for Updates
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Get notified when we add new tools and features.
              </p>
            </div>
            {subscribed ? (
              <div className="text-emerald-600 dark:text-emerald-400 font-medium flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Thanks for subscribing!
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-3 w-full lg:w-auto">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full lg:w-72 bg-white dark:bg-gray-800"
                />
                <Button
                  type="submit"
                  className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white shadow-lg shadow-blue-500/25"
                >
                  Subscribe
                  <Mail className="w-4 h-4 ml-2" />
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {/* Brand Column */}
          <div className="col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center">
                <span className="text-white font-bold text-sm">D</span>
              </div>
              <span className="text-lg font-bold text-gray-900 dark:text-white">
                Doc<span className="text-blue-600 dark:text-blue-400">Hive</span>
              </span>
            </Link>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 max-w-xs">
              100+ free online tools for students, professionals, and businesses. No signup required.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-9 h-9 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Latest Tools */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-4">Latest Tools</h3>
            <ul className="space-y-3">
              {footerLinks.latestTools.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Most Used */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-4">Most Used</h3>
            <ul className="space-y-3">
              {footerLinks.mostUsed.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-4">Categories</h3>
            <ul className="space-y-3">
              {footerLinks.categories.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-4">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-500 dark:text-gray-500">
              {new Date().getFullYear()} DocHive. All rights reserved.
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-500">
              Made with care for productivity everywhere.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

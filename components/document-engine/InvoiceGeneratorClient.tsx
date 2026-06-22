'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Home, ChevronRight, FileText, Check, Shield, Monitor } from 'lucide-react';
import Link from 'next/link';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { InvoiceForm } from './InvoiceForm';
import { InvoicePreview } from './InvoicePreview';
import { DocumentActions } from './DocumentActions';
import {
  defaultInvoiceData,
  recalculateInvoice,
  generateDocumentNumber,
} from '@/lib/document-engine/types';
import type { InvoiceData } from '@/lib/document-engine/types';

export function InvoiceGeneratorClient() {
  const [data, setData] = useState<InvoiceData>(() => {
    const initial = {
      ...defaultInvoiceData,
      documentNumber: generateDocumentNumber('INV'),
    };
    return recalculateInvoice(initial);
  });
  const previewRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState<'form' | 'preview'>('form');
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
      if (window.innerWidth >= 1024) setActiveTab('form');
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleChange = useCallback((newData: InvoiceData) => {
    setData(recalculateInvoice(newData));
  }, []);

  const handleReset = useCallback(() => {
    const reset = {
      ...defaultInvoiceData,
      documentNumber: generateDocumentNumber('INV'),
    };
    setData(recalculateInvoice(reset));
  }, []);

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar />

      {/* Header */}
      <section className="pt-28 pb-8 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm mb-6">
            <Link href="/" className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors flex items-center gap-1">
              <Home className="w-4 h-4" />
              Home
            </Link>
            <ChevronRight className="w-4 h-4 text-gray-400" />
            <Link href="/tools" className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors">
              Tools
            </Link>
            <ChevronRight className="w-4 h-4 text-gray-400" />
            <span className="text-gray-900 dark:text-white font-medium">Invoice Generator</span>
          </nav>

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-3">
                Free Invoice Generator
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
                Create professional invoices online in seconds. No signup. Download instantly.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              {[
                { icon: Check, label: 'Free' },
                { icon: Shield, label: 'Privacy First' },
                { icon: Monitor, label: 'Browser Based' },
              ].map((badge) => (
                <div
                  key={badge.label}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200/50 dark:border-emerald-800/50 text-sm font-medium text-emerald-700 dark:text-emerald-300"
                >
                  <badge.icon className="w-3.5 h-3.5" />
                  {badge.label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Tab Switcher */}
      {!isDesktop && (
        <div className="sticky top-16 z-40 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex gap-1 py-2">
              <button
                onClick={() => setActiveTab('form')}
                className={`flex-1 py-2.5 rounded-lg text-sm font-medium transition-all ${
                  activeTab === 'form'
                    ? 'bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400'
                    : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800'
                }`}
              >
                Invoice Form
              </button>
              <button
                onClick={() => setActiveTab('preview')}
                className={`flex-1 py-2.5 rounded-lg text-sm font-medium transition-all ${
                  activeTab === 'preview'
                    ? 'bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400'
                    : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800'
                }`}
              >
                Preview
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          {/* Form - Left */}
          <div
            className={`flex-1 min-w-0 ${
              !isDesktop ? (activeTab === 'form' ? 'block' : 'hidden') : 'block'
            }`}
            style={isDesktop ? { maxWidth: '42%' } : undefined}
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <InvoiceForm data={data} onChange={handleChange} />
            </motion.div>
          </div>

          {/* Preview - Right */}
          <div
            className={`flex-1 min-w-0 ${
              !isDesktop ? (activeTab === 'preview' ? 'block' : 'hidden') : 'block'
            }`}
            style={isDesktop ? { maxWidth: '58%' } : undefined}
          >
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="sticky top-28 space-y-6"
            >
              <InvoicePreview
                data={data}
                config={{
                  title: 'Invoice',
                  documentType: 'Invoice',
                  currency: '₹',
                  showTax: true,
                  showDiscount: true,
                  showShipping: true,
                  showLogo: true,
                  showNotes: true,
                  showTerms: true,
                  showPaymentTerms: true,
                }}
                previewRef={previewRef}
              />

              <div className="flex flex-wrap gap-3">
                <DocumentActions
                  previewRef={previewRef}
                  fileName={`Invoice-${data.documentNumber}`}
                  onReset={handleReset}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}

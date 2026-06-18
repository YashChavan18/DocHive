'use client';

import { motion } from 'framer-motion';
import { FileText, FileSpreadsheet, QrCode, Lock, Calculator, FileDigit, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

const floatingCards = [
  { icon: FileText, label: 'Invoice Generator', color: 'from-blue-500 to-blue-600', delay: 0 },
  { icon: FileSpreadsheet, label: 'Resume Builder', color: 'from-emerald-500 to-emerald-600', delay: 0.2 },
  { icon: FileDigit, label: 'PDF Tools', color: 'from-orange-500 to-orange-600', delay: 0.4 },
  { icon: Calculator, label: 'GST Calculator', color: 'from-cyan-500 to-cyan-600', delay: 0.6 },
  { icon: QrCode, label: 'QR Generator', color: 'from-purple-500 to-purple-600', delay: 0.8 },
  { icon: Lock, label: 'Password Gen', color: 'from-rose-500 to-rose-600', delay: 1 },
];

const trustBadges = [
  { label: 'No Signup', icon: Check },
  { label: 'Free Forever', icon: Check },
  { label: 'Privacy First', icon: Check },
  { label: 'Works on Mobile', icon: Check },
];

export function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 via-white to-white dark:from-blue-950/30 dark:via-gray-900 dark:to-gray-900" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-400/20 dark:bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute top-20 right-1/4 w-96 h-96 bg-cyan-400/20 dark:bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-blue-500/10 dark:bg-blue-400/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-950/50 border border-blue-100 dark:border-blue-900/50 mb-6"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              <span className="text-sm font-medium text-blue-700 dark:text-blue-300">
                100+ Free Tools Available
              </span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600">
                100+ Free Online Tools.
              </span>
            </h1>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white leading-tight tracking-tight mt-2">
              One Place. No Signup Required.
            </h2>

            <p className="mt-6 text-lg sm:text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Generate invoices, resumes, PDFs, QR codes, calculators and dozens of other free online tools directly from your browser. Fast, secure and completely free.
            </p>

            {/* Trust Badges */}
            <div className="mt-6 flex flex-wrap items-center justify-center lg:justify-start gap-3">
              {trustBadges.map((badge) => (
                <div
                  key={badge.label}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200/50 dark:border-emerald-800/50"
                >
                  <badge.icon className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                  <span className="text-xs font-medium text-emerald-700 dark:text-emerald-300">{badge.label}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white shadow-xl shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-[1.02] transition-all duration-300 rounded-xl px-8 h-12 text-base font-semibold"
              >
                Explore Tools
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 hover:scale-[1.02] transition-all duration-300 rounded-xl px-8 h-12 text-base font-semibold"
              >
                View Categories
              </Button>
            </div>

            <div className="mt-10 flex items-center gap-6 justify-center lg:justify-start">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-cyan-400 border-2 border-white dark:border-gray-900 flex items-center justify-center text-xs font-medium text-white"
                  >
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                <span className="font-semibold text-gray-900 dark:text-white">10,000+</span> users worldwide
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative bg-white dark:bg-gray-800/50 rounded-3xl shadow-2xl shadow-blue-500/10 border border-gray-200/50 dark:border-gray-700/50 p-6 backdrop-blur-sm">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
                <div className="flex-1 ml-4 h-6 bg-gray-100 dark:bg-gray-700/50 rounded-full" />
              </div>

              <div className="grid grid-cols-3 gap-3">
                {floatingCards.map((card, index) => (
                  <motion.div
                    key={card.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    className="relative group"
                  >
                    <div className={`p-4 rounded-2xl bg-gradient-to-br ${card.color} text-white shadow-lg transform transition-all duration-300 hover:scale-105 hover:-translate-y-1`}>
                      <card.icon className="w-6 h-6 mb-2" />
                      <p className="text-xs font-medium opacity-90">{card.label}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-4 grid grid-cols-3 gap-3">
                <div className="p-3 rounded-xl bg-gray-100 dark:bg-gray-700/30">
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">100+</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">Tools</div>
                </div>
                <div className="p-3 rounded-xl bg-gray-100 dark:bg-gray-700/30">
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">100%</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">Free</div>
                </div>
                <div className="p-3 rounded-xl bg-gray-100 dark:bg-gray-700/30">
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">0</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">Signup</div>
                </div>
              </div>
            </div>

            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-8 -right-4 bg-white dark:bg-gray-800 rounded-2xl shadow-xl shadow-blue-500/10 border border-gray-200 dark:border-gray-700 p-4"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-400 to-emerald-500 flex items-center justify-center">
                  <FileText className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900 dark:text-white">Invoice.pdf</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Generated ready</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [10, -10, 10] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-800 rounded-2xl shadow-xl shadow-blue-500/10 border border-gray-200 dark:border-gray-700 p-4"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-400 to-blue-500 flex items-center justify-center">
                  <QrCode className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900 dark:text-white">QR Created</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Ready to download</p>
                </div>
              </div>
            </motion.div>

            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 blur-3xl transform scale-110" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

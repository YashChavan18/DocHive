'use client';

import { motion } from 'framer-motion';
import { Calculator, FileText, CreditCard, Calendar, Sparkles, Clock } from 'lucide-react';

const recentlyAddedTools = [
  {
    icon: Calculator,
    name: 'Age Calculator',
    description: 'Calculate exact age in years, months, and days',
    gradient: 'from-blue-500 to-blue-600',
    addedDate: 'June 15, 2024',
    slug: 'age-calculator',
  },
  {
    icon: FileText,
    name: 'Text to PDF',
    description: 'Convert any text document to PDF format',
    gradient: 'from-emerald-500 to-emerald-600',
    addedDate: 'June 12, 2024',
    slug: 'text-to-pdf',
  },
  {
    icon: CreditCard,
    name: 'UPI QR Generator',
    description: 'Generate UPI QR codes for instant payments',
    gradient: 'from-orange-500 to-orange-600',
    addedDate: 'June 10, 2024',
    slug: 'upi-qr-generator',
  },
  {
    icon: Calendar,
    name: 'Date Calculator',
    description: 'Calculate days between dates, add or subtract days',
    gradient: 'from-purple-500 to-purple-600',
    addedDate: 'June 8, 2024',
    slug: 'date-calculator',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export function RecentlyAddedSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-blue-50/30 to-white dark:from-gray-900 dark:via-blue-950/10 dark:to-gray-900" />
      <div className="absolute top-0 right-1/4 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-100 dark:border-emerald-900/50 mb-4">
            <Sparkles className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            <span className="text-sm font-medium text-emerald-700 dark:text-emerald-300">Just Added</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Recently Added Tools
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Fresh tools added to our collection. We are constantly expanding to serve you better.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {recentlyAddedTools.map((tool) => (
            <motion.div
              key={tool.name}
              variants={cardVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group relative"
            >
              <a href={`/tools/${tool.slug}`}>
                <div className="relative h-full p-6 rounded-2xl bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 hover:border-emerald-300 dark:hover:border-emerald-700 transition-all duration-300 shadow-lg shadow-gray-200/30 dark:shadow-gray-900/30 hover:shadow-xl">
                  <div className={`
                    w-12 h-12 rounded-xl flex items-center justify-center mb-4
                    bg-gradient-to-br ${tool.gradient} shadow-lg
                    transform group-hover:scale-110 transition-transform duration-300
                  `}>
                    <tool.icon className="w-6 h-6 text-white" />
                  </div>

                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                    {tool.name}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                    {tool.description}
                  </p>

                  <div className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400">
                    <Clock className="w-3.5 h-3.5" />
                    Added {tool.addedDate}
                  </div>

                  {/* Hover glow */}
                  <div className={`
                    absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10
                    bg-gradient-to-br ${tool.gradient} blur-xl
                  `} />
                </div>
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

'use client';

import { motion } from 'framer-motion';
import { Flame } from 'lucide-react';

const trendingTools = [
  'Invoice Generator',
  'Resume Builder',
  'GST Calculator',
  'Merge PDF',
  'QR Generator',
  'Leave Letter',
  'Business Card',
  'EMI Calculator',
];

export function TrendingSection() {
  return (
    <section className="py-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-4 justify-center">
            <Flame className="w-5 h-5 text-orange-500" />
            <span className="text-sm font-semibold text-gray-900 dark:text-white">Trending Today</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            {trendingTools.map((tool, index) => (
              <motion.a
                key={tool}
                href={`/tools/${tool.toLowerCase().replace(/\s+/g, '-')}`}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="group px-4 py-2 rounded-full text-sm font-medium bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-700 hover:text-blue-600 dark:hover:text-blue-400 shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer"
              >
                <span className="relative">
                  {tool}
                  <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-200" />
                </span>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

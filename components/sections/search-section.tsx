'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const exampleSearches = [
  'Invoice Generator',
  'Resume Builder',
  'Merge PDF',
  'GST Calculator',
  'QR Generator',
  'Loan Calculator',
  'Password Generator',
];

export function SearchSection() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <section className="py-16 relative">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          {/* Search Container */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-cyan-500/20 to-blue-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative bg-white dark:bg-gray-800/80 rounded-2xl shadow-xl shadow-gray-200/50 dark:shadow-gray-900/50 border border-gray-200 dark:border-gray-700 p-2 backdrop-blur-sm hover:shadow-2xl transition-shadow duration-300">
              <div className="flex items-center gap-3">
                <div className="flex-1 relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 dark:text-gray-500" />
                  <Input
                    type="text"
                    placeholder="Search for a tool..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-12 h-14 text-lg border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-gray-400 dark:placeholder:text-gray-500"
                  />
                </div>
                <Button
                  size="lg"
                  className="h-12 px-6 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white shadow-lg shadow-blue-500/25 rounded-xl hover:scale-[1.02] transition-transform duration-200"
                >
                  Search
                </Button>
              </div>
            </div>
          </div>

          {/* Example Searches */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6"
          >
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-3 text-center">
              Try:
            </p>
            <div className="flex flex-wrap items-center gap-2 justify-center">
              {exampleSearches.map((search, index) => (
                <motion.button
                  key={search}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setSearchQuery(search)}
                  className="px-4 py-2 rounded-full text-sm font-medium text-gray-600 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 hover:bg-blue-50 dark:hover:bg-blue-950/50 hover:text-blue-600 dark:hover:text-blue-400 border border-gray-200 dark:border-gray-700 transition-all duration-200"
                >
                  {search}
                </motion.button>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

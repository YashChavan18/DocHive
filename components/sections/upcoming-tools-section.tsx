'use client';

import { motion } from 'framer-motion';
import { Clock, Image, FileText, Calculator, ScanLine, Droplet, Barcode } from 'lucide-react';

const upcomingTools = [
  {
    icon: Image,
    name: 'Image Compressor',
    description: 'Compress images without losing quality',
    gradient: 'from-violet-500 to-purple-600',
  },
  {
    icon: FileText,
    name: 'PNG to PDF',
    description: 'Convert PNG images to PDF format',
    gradient: 'from-blue-500 to-blue-600',
  },
  {
    icon: FileText,
    name: 'Markdown Editor',
    description: 'Write and preview Markdown documents',
    gradient: 'from-emerald-500 to-emerald-600',
  },
  {
    icon: Calculator,
    name: 'Age Calculator',
    description: 'Calculate exact age from birthdate',
    gradient: 'from-orange-500 to-orange-600',
  },
  {
    icon: ScanLine,
    name: 'Invoice OCR',
    description: 'Extract data from invoice images',
    gradient: 'from-pink-500 to-rose-600',
  },
  {
    icon: Droplet,
    name: 'PDF Watermark',
    description: 'Add watermarks to PDF documents',
    gradient: 'from-cyan-500 to-cyan-600',
  },
  {
    icon: Barcode,
    name: 'Barcode Generator',
    description: 'Create various barcode formats',
    gradient: 'from-amber-500 to-amber-600',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
    },
  },
};

export function UpcomingToolsSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-gray-50/50 via-white to-gray-50/50 dark:from-gray-900/50 dark:via-gray-900 dark:to-gray-900/50" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-violet-500/10 via-pink-500/10 to-orange-500/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-50 dark:bg-violet-950/50 border border-violet-100 dark:border-violet-900/50 mb-4">
            <Clock className="w-4 h-4 text-violet-600 dark:text-violet-400" />
            <span className="text-sm font-medium text-violet-700 dark:text-violet-300">Coming Soon</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Upcoming Tools
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            We are constantly expanding our toolkit. Here's a sneak peek at what's coming next.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-4"
        >
          {upcomingTools.map((tool) => (
            <motion.div
              key={tool.name}
              variants={cardVariants}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="group relative"
            >
              <div className="relative p-4 rounded-xl bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-300 text-center opacity-75 hover:opacity-100">
                <div className={`
                  w-10 h-10 mx-auto rounded-lg flex items-center justify-center mb-3
                  bg-gradient-to-br ${tool.gradient} shadow-md
                  transform group-hover:scale-110 transition-transform duration-300
                `}>
                  <tool.icon className="w-5 h-5 text-white" />
                </div>

                <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-1">
                  {tool.name}
                </h3>
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">
                  {tool.description}
                </p>

                <span className="inline-flex items-center gap-1 text-[10px] text-violet-600 dark:text-violet-400 bg-violet-50 dark:bg-violet-950/50 px-2 py-0.5 rounded-full">
                  <Clock className="w-2.5 h-2.5" />
                  Coming Soon
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

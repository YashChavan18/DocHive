'use client';

import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, Landmark, Share2, Globe, User, Code, Image, FileText, Clock } from 'lucide-react';

const categories = [
  {
    icon: GraduationCap,
    title: 'Students',
    description: 'Resume Builder, PDF Tools, Certificate Generator, Assignment Tools',
    tools: ['Resume Builder', 'PDF Tools', 'Certificate Generator', 'Assignment Tools'],
    gradient: 'from-blue-500 to-blue-600',
    bgGradient: 'from-blue-50 to-blue-100/50 dark:from-blue-950/30 dark:to-blue-900/20',
    count: 12,
    comingSoon: false,
  },
  {
    icon: Briefcase,
    title: 'Business',
    description: 'Invoice, Receipt, Quotation, GST, Purchase Order',
    tools: ['Invoice', 'Receipt', 'Quotation', 'GST', 'Purchase Order'],
    gradient: 'from-emerald-500 to-emerald-600',
    bgGradient: 'from-emerald-50 to-emerald-100/50 dark:from-emerald-950/30 dark:to-emerald-900/20',
    count: 15,
    comingSoon: false,
  },
  {
    icon: Landmark,
    title: 'Finance',
    description: 'EMI Calculator, GST Calculator, Loan Calculator, SIP Calculator',
    tools: ['EMI Calculator', 'GST Calculator', 'Loan Calculator', 'SIP Calculator', 'Interest Calculator'],
    gradient: 'from-amber-500 to-orange-500',
    bgGradient: 'from-amber-50 to-orange-100/50 dark:from-amber-950/30 dark:to-orange-900/20',
    count: 10,
    comingSoon: false,
  },
  {
    icon: Share2,
    title: 'Social Media',
    description: 'QR Generator, WhatsApp Link, Bio Link, Character Counter',
    tools: ['QR Generator', 'WhatsApp Link', 'Bio Link', 'Character Counter', 'Hashtag Tools'],
    gradient: 'from-pink-500 to-rose-500',
    bgGradient: 'from-pink-50 to-rose-100/50 dark:from-pink-950/30 dark:to-rose-900/20',
    count: 8,
    comingSoon: false,
  },
  {
    icon: Globe,
    title: 'Web Utilities',
    description: 'Password Generator, UUID Generator, JSON Formatter, Base64 Encoder',
    tools: ['Password Generator', 'UUID Generator', 'JSON Formatter', 'Base64 Encoder', 'Word Counter'],
    gradient: 'from-cyan-500 to-teal-500',
    bgGradient: 'from-cyan-50 to-teal-100/50 dark:from-cyan-950/30 dark:to-teal-900/20',
    count: 12,
    comingSoon: false,
  },
  {
    icon: FileText,
    title: 'PDF Tools',
    description: 'Merge PDF, Split PDF, Compress PDF, PDF to Image Converter',
    tools: ['Merge PDF', 'Split PDF', 'Compress PDF', 'PDF to Image'],
    gradient: 'from-red-500 to-orange-500',
    bgGradient: 'from-red-50 to-orange-100/50 dark:from-red-950/30 dark:to-orange-900/20',
    count: 8,
    comingSoon: false,
  },
  {
    icon: User,
    title: 'Personal',
    description: 'Rent Receipt, Leave Letter, Invitation Generator, ID Card Generator',
    tools: ['Rent Receipt', 'Leave Letter', 'Invitation Generator', 'ID Card Generator'],
    gradient: 'from-violet-500 to-purple-500',
    bgGradient: 'from-violet-50 to-purple-100/50 dark:from-violet-950/30 dark:to-purple-900/20',
    count: 7,
    comingSoon: false,
  },
  {
    icon: Code,
    title: 'Developer Tools',
    description: 'JSON Formatter, Base64 Encoder, UUID Generator, Code Beautifier',
    tools: ['JSON Formatter', 'Base64 Encoder', 'UUID Generator', 'Code Beautifier'],
    gradient: 'from-slate-500 to-gray-600',
    bgGradient: 'from-slate-50 to-gray-100/50 dark:from-slate-950/30 dark:to-gray-900/20',
    count: 5,
    comingSoon: true,
  },
  {
    icon: Image,
    title: 'Image Tools',
    description: 'Image Compressor, Image Resizer, Format Converter',
    tools: ['Image Compressor', 'Image Resizer', 'Format Converter'],
    gradient: 'from-fuchsia-500 to-pink-500',
    bgGradient: 'from-fuchsia-50 to-pink-100/50 dark:from-fuchsia-950/30 dark:to-pink-900/20',
    count: 4,
    comingSoon: true,
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
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export function CategoriesSection() {
  return (
    <section id="categories" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-gray-50/50 to-white dark:from-gray-900 dark:via-gray-900/50 dark:to-gray-900" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-950/50 border border-blue-100 dark:border-blue-900/50 mb-4">
            <span className="text-sm font-medium text-blue-700 dark:text-blue-300">Browse by Category</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Tools for Every Need
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            From students to businesses, we have carefully crafted tools for everyone. Choose your category and get started instantly.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {categories.map((category) => (
            <motion.div
              key={category.title}
              variants={cardVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group relative"
            >
              <div className={`
                relative h-full p-6 rounded-2xl border border-gray-100 dark:border-gray-800
                bg-gradient-to-br ${category.bgGradient}
                bg-white dark:bg-gray-800/50 hover:bg-white/80 dark:hover:bg-gray-800/80
                backdrop-blur-sm transition-all duration-300
                shadow-lg shadow-gray-200/30 dark:shadow-gray-900/30
                hover:shadow-xl hover:shadow-gray-300/40 dark:hover:shadow-gray-800/40
                ${category.comingSoon ? 'opacity-80' : ''}
              `}>
                <div className="flex items-start justify-between mb-4">
                  <div className={`
                    w-14 h-14 rounded-2xl flex items-center justify-center
                    bg-gradient-to-br ${category.gradient} shadow-lg
                    transform group-hover:scale-110 transition-transform duration-300
                  `}>
                    <category.icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex items-center gap-2">
                    {category.comingSoon && (
                      <span className="text-xs font-medium text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-full flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        Soon
                      </span>
                    )}
                    <span className="text-sm font-medium text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full">
                      {category.count} tools
                    </span>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {category.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  {category.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {category.tools.slice(0, 4).map((tool) => (
                    <span
                      key={tool}
                      className="text-xs px-2 py-1 rounded-md bg-gray-100/80 dark:bg-gray-700/50 text-gray-600 dark:text-gray-300"
                    >
                      {tool}
                    </span>
                  ))}
                  {category.tools.length > 4 && (
                    <span className="text-xs px-2 py-1 rounded-md bg-gray-100/80 dark:bg-gray-700/50 text-gray-500 dark:text-gray-400">
                      +{category.tools.length - 4} more
                    </span>
                  )}
                </div>

                {/* Hover glow effect */}
                <div className={`
                  absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10
                  bg-gradient-to-br ${category.bgGradient} blur-xl
                `} />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

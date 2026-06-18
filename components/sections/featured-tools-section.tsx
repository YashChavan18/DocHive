'use client';

import { motion } from 'framer-motion';
import { FileText, FileSpreadsheet, QrCode, Lock, Calculator, CreditCard, ArrowRight, Zap, Sparkles, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

type LabelType = 'popular' | 'new' | 'recommended';

const featuredTools = [
  {
    icon: FileText,
    name: 'Invoice Generator',
    description: 'Create professional invoices in seconds with customizable templates',
    gradient: 'from-blue-500 to-blue-600',
    shadowColor: 'shadow-blue-500/25',
    label: 'popular' as LabelType,
    timing: 'Less than 1 minute',
    slug: 'invoice-generator',
  },
  {
    icon: FileSpreadsheet,
    name: 'Resume Builder',
    description: 'Build stunning resumes that stand out with modern templates',
    gradient: 'from-emerald-500 to-emerald-600',
    shadowColor: 'shadow-emerald-500/25',
    label: 'recommended' as LabelType,
    timing: '2-3 minutes',
    slug: 'resume-builder',
  },
  {
    icon: FileSpreadsheet,
    name: 'Merge PDF',
    description: 'Combine multiple PDF files into one seamless document',
    gradient: 'from-orange-500 to-orange-600',
    shadowColor: 'shadow-orange-500/25',
    label: 'popular' as LabelType,
    timing: 'Less than 30 seconds',
    slug: 'merge-pdf',
  },
  {
    icon: QrCode,
    name: 'QR Code Generator',
    description: 'Generate custom QR codes for links, text, or contact info',
    gradient: 'from-purple-500 to-purple-600',
    shadowColor: 'shadow-purple-500/25',
    label: 'popular' as LabelType,
    timing: 'Less than 30 seconds',
    slug: 'qr-code-generator',
  },
  {
    icon: Calculator,
    name: 'GST Calculator',
    description: 'Calculate GST amounts quickly with breakdown details',
    gradient: 'from-cyan-500 to-cyan-600',
    shadowColor: 'shadow-cyan-500/25',
    label: 'new' as LabelType,
    timing: 'Instant',
    slug: 'gst-calculator',
  },
  {
    icon: CreditCard,
    name: 'Business Card Generator',
    description: 'Design and download professional business cards',
    gradient: 'from-pink-500 to-pink-600',
    shadowColor: 'shadow-pink-500/25',
    label: 'recommended' as LabelType,
    timing: '1-2 minutes',
    slug: 'business-card-generator',
  },
  {
    icon: Lock,
    name: 'Password Generator',
    description: 'Generate secure random passwords with custom options',
    gradient: 'from-rose-500 to-rose-600',
    shadowColor: 'shadow-rose-500/25',
    label: 'popular' as LabelType,
    timing: 'Instant',
    slug: 'password-generator',
  },
];

const labelStyles: Record<LabelType, { bg: string; text: string; icon: React.ComponentType<{ className?: string }> }> = {
  popular: { bg: 'bg-amber-100 dark:bg-amber-950/50', text: 'text-amber-700 dark:text-amber-300', icon: Zap },
  new: { bg: 'bg-emerald-100 dark:bg-emerald-950/50', text: 'text-emerald-700 dark:text-emerald-300', icon: Sparkles },
  recommended: { bg: 'bg-blue-100 dark:bg-blue-950/50', text: 'text-blue-700 dark:text-blue-300', icon: ArrowRight },
};

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

export function FeaturedToolsSection() {
  return (
    <section id="tools" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-gray-50/50 via-white to-gray-50/50 dark:from-gray-900/50 dark:via-gray-900 dark:to-gray-900/50" />
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-100 dark:border-emerald-900/50 mb-4">
            <span className="text-sm font-medium text-emerald-700 dark:text-emerald-300">Featured</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Most Popular Free Tools
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Our most-loved tools used by thousands every day. Each tool is crafted for simplicity, speed, and instant results.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
        >
          {featuredTools.map((tool) => {
            const LabelIcon = labelStyles[tool.label].icon;
            return (
              <motion.div
                key={tool.name}
                variants={cardVariants}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group relative"
              >
                <a href={`/tools/${tool.slug}`}>
                  <div className="relative h-full p-6 rounded-2xl bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-700 transition-all duration-300 shadow-lg shadow-gray-200/30 dark:shadow-gray-900/30 hover:shadow-xl hover:shadow-gray-300/40 dark:hover:shadow-gray-800/40 backdrop-blur-sm">
                    <div className="flex items-start justify-between mb-4">
                      <div className={`
                        w-12 h-12 rounded-xl flex items-center justify-center
                        bg-gradient-to-br ${tool.gradient} shadow-lg ${tool.shadowColor}
                        transform group-hover:scale-110 transition-transform duration-300
                      `}>
                        <tool.icon className="w-6 h-6 text-white" />
                      </div>
                      <span className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${labelStyles[tool.label].bg} ${labelStyles[tool.label].text}`}>
                        <LabelIcon className="w-3 h-3" />
                        {tool.label.charAt(0).toUpperCase() + tool.label.slice(1)}
                      </span>
                    </div>

                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {tool.name}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 min-h-[40px]">
                      {tool.description}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400">
                        <Zap className="w-3 h-3 text-amber-500" />
                        {tool.timing}
                      </div>
                      <div className="text-sm font-medium text-blue-600 dark:text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity">
                        Launch
                      </div>
                    </div>

                    {/* Hover glow */}
                    <div className={`
                      absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10
                      bg-gradient-to-br ${tool.gradient} blur-xl
                    `} />
                  </div>
                </a>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Button
            size="lg"
            variant="outline"
            className="border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-xl px-8 hover:scale-[1.02] transition-all duration-200"
          >
            View All Tools
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

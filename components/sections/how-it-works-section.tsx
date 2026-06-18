'use client';

import { motion } from 'framer-motion';
import { MousePointerClick, FormInput, Download } from 'lucide-react';

const steps = [
  {
    icon: MousePointerClick,
    step: '01',
    title: 'Choose a Tool',
    description: 'Browse our collection of 100+ free tools. From PDF editors to financial calculators, find exactly what you need.',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    icon: FormInput,
    step: '02',
    title: 'Fill Details',
    description: 'Enter your information in a clean, intuitive interface. No complex forms, no unnecessary steps.',
    gradient: 'from-emerald-500 to-teal-500',
  },
  {
    icon: Download,
    step: '03',
    title: 'Download or Copy',
    description: 'Get your results instantly. Download as PDF, copy to clipboard, or share directly. Done in seconds.',
    gradient: 'from-orange-500 to-amber-500',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const stepVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

export function HowItWorksSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-gray-50/50 via-white to-gray-50/50 dark:from-gray-900/50 dark:via-gray-900 dark:to-gray-900/50" />
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-50 dark:bg-cyan-950/50 border border-cyan-100 dark:border-cyan-900/50 mb-4">
            <span className="text-sm font-medium text-cyan-700 dark:text-cyan-300">Simple Process</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Create Documents in 3 Simple Steps
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            No complex workflows. No learning curve. Just pick, fill, and finish.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative"
        >
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 via-emerald-500 to-orange-500 opacity-20 -translate-y-1/2" />

          <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
            {steps.map((item) => (
              <motion.div
                key={item.step}
                variants={stepVariants}
                className="relative group"
              >
                <div className="relative text-center">
                  {/* Step Number */}
                  <div className={`
                    relative z-10 w-28 h-28 mx-auto rounded-full flex items-center justify-center mb-6
                    bg-white dark:bg-gray-800 border-2 border-gray-100 dark:border-gray-700
                    shadow-xl shadow-gray-200/50 dark:shadow-gray-900/50
                    group-hover:scale-110 transition-transform duration-300
                  `}>
                    <div className={`
                      w-16 h-16 rounded-xl flex items-center justify-center
                      bg-gradient-to-br ${item.gradient} shadow-lg
                    `}>
                      <item.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-gradient-to-br from-gray-900 to-gray-800 dark:from-white dark:to-gray-200 flex items-center justify-center text-xs font-bold text-white dark:text-gray-900 shadow-lg">
                      {item.step}
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed max-w-xs mx-auto">
                    {item.description}
                  </p>

                  {/* Hover Glow */}
                  <div className={`
                    absolute top-12 left-1/2 -translate-x-1/2 w-32 h-32 rounded-full
                    opacity-0 group-hover:opacity-30 transition-opacity duration-500 -z-10
                    bg-gradient-to-br ${item.gradient} blur-3xl
                  `} />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

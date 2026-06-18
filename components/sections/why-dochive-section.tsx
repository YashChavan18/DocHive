'use client';

import { motion } from 'framer-motion';
import { Zap, Shield, Smartphone, Gift } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Everything runs in your browser. No server uploads, no waiting. Get instant results every time you use a tool.',
    gradient: 'from-amber-400 to-orange-500',
    shadowColor: 'shadow-amber-500/20',
  },
  {
    icon: Shield,
    title: 'Privacy First',
    description: 'Nothing is stored on our servers. Your data stays on your device, always private and always secure.',
    gradient: 'from-emerald-400 to-emerald-600',
    shadowColor: 'shadow-emerald-500/20',
  },
  {
    icon: Smartphone,
    title: 'Works Everywhere',
    description: 'Desktop, tablet, or mobile phone. Every tool is fully responsive and works flawlessly on any device.',
    gradient: 'from-blue-400 to-blue-600',
    shadowColor: 'shadow-blue-500/20',
  },
  {
    icon: Gift,
    title: 'Completely Free',
    description: 'Use every tool without registration, without paying, without limits. Free forever, for everyone.',
    gradient: 'from-pink-400 to-rose-500',
    shadowColor: 'shadow-pink-500/20',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
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

export function WhyDocHiveSection() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-blue-50/30 to-white dark:from-gray-900 dark:via-blue-950/10 dark:to-gray-900" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-950/50 border border-blue-100 dark:border-blue-900/50 mb-4">
            <span className="text-sm font-medium text-blue-700 dark:text-blue-300">Why Choose Us</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Why Millions Will Choose DocHive
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            No signup walls. No credit card gates. No waiting. Just powerful tools that work instantly, every time.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={cardVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group relative"
            >
              <div className="relative h-full p-6 rounded-2xl bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-300 shadow-lg shadow-gray-200/30 dark:shadow-gray-900/30 hover:shadow-xl text-center">
                <div className={`
                  w-16 h-16 mx-auto rounded-2xl flex items-center justify-center mb-5
                  bg-gradient-to-br ${feature.gradient} shadow-lg ${feature.shadowColor}
                  transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300
                `}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover glow */}
                <div className={`
                  absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10
                  bg-gradient-to-br ${feature.gradient} blur-xl opacity-20
                `} />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

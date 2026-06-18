'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Clock } from 'lucide-react';
import { cn } from '@/lib/utils';
import { categoryIcons, categoryGradients, categoryBgGradients } from '@/lib/tool-data';

interface CategoryCardProps {
  title: string;
  description: string;
  count: number;
  comingSoon?: boolean;
  index?: number;
}

export function CategoryCard({ title, description, count, comingSoon, index = 0 }: CategoryCardProps) {
  const Icon = categoryIcons[title] || ArrowRight;
  const gradient = categoryGradients[title] || 'from-gray-500 to-gray-600';
  const bgGradient = categoryBgGradients[title] || 'from-gray-50 to-gray-100 dark:from-gray-950/30 dark:to-gray-900/20';

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className="group relative cursor-pointer"
    >
      <div className={cn(
        "relative h-full p-6 rounded-2xl border border-gray-100 dark:border-gray-800",
        "bg-gradient-to-br",
        bgGradient,
        "bg-white dark:bg-gray-800/50 hover:bg-white/80 dark:hover:bg-gray-800/80",
        "backdrop-blur-sm transition-all duration-300",
        "shadow-lg shadow-gray-200/30 dark:shadow-gray-900/30",
        "hover:shadow-xl hover:shadow-gray-300/40 dark:hover:shadow-gray-800/40",
        comingSoon && "opacity-80"
      )}>
        <div className="flex items-start justify-between mb-4">
          <div className={cn(
            "w-14 h-14 rounded-2xl flex items-center justify-center bg-gradient-to-br",
            gradient,
            "shadow-lg transform group-hover:scale-110 transition-transform duration-300"
          )}>
            <Icon className="w-7 h-7 text-white" />
          </div>
          <div className="flex items-center gap-2">
            {comingSoon && (
              <span className="text-xs font-medium text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-full flex items-center gap-1">
                <Clock className="w-3 h-3" />
                Soon
              </span>
            )}
            <span className="text-sm font-medium text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full">
              {count} tools
            </span>
          </div>
        </div>

        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          {title}
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
          {description}
        </p>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
            <span className="px-2 py-1 rounded-md bg-gray-100/80 dark:bg-gray-700/50 text-gray-600 dark:text-gray-300">
              Ready
            </span>
          </div>
          <div className="flex items-center gap-1 text-sm font-medium text-blue-600 dark:text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity">
            <span>Browse</span>
            <ArrowRight className="w-4 h-4" />
          </div>
        </div>

        {/* Hover glow */}
        <div className={cn(
          "absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 bg-gradient-to-br",
          bgGradient,
          "blur-xl"
        )} />
      </div>
    </motion.div>
  );
}

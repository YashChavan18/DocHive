'use client';

import { motion } from 'framer-motion';
import { Zap, ArrowRight, Clock, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import type { Tool } from '@/lib/tool-data';

interface ToolCardProps {
  tool: Tool;
  index?: number;
}

export function ToolCard({ tool, index = 0 }: ToolCardProps) {
  const isComingSoon = tool.status === 'Coming Soon';

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      whileHover={{ y: -6, transition: { duration: 0.3 } }}
      className="group relative"
    >
      <Link href={isComingSoon ? '#' : `/tools/${tool.slug}`}>
        <div className={cn(
          "relative h-full p-6 rounded-2xl bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-700 transition-all duration-300 shadow-lg shadow-gray-200/30 dark:shadow-gray-900/30 hover:shadow-xl hover:shadow-gray-300/40 dark:hover:shadow-gray-800/40 backdrop-blur-sm",
          isComingSoon && "opacity-70 cursor-not-allowed"
        )}>
          <div className="flex items-start justify-between mb-4">
            <div className={cn(
              "w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br",
              tool.gradient,
              "shadow-lg",
              tool.shadowColor,
              "transform group-hover:scale-110 transition-transform duration-300"
            )}>
              <tool.icon className="w-6 h-6 text-white" />
            </div>
            <div className="flex items-center gap-2">
              {tool.isNew && !isComingSoon && (
                <span className="flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium bg-emerald-100 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300">
                  <Sparkles className="w-3 h-3" />
                  New
                </span>
              )}
              {isComingSoon && (
                <span className="flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300">
                  <Clock className="w-3 h-3" />
                  Soon
                </span>
              )}
              {tool.isPopular && !isComingSoon && (
                <span className="flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium bg-amber-100 dark:bg-amber-950/50 text-amber-700 dark:text-amber-300">
                  <Zap className="w-3 h-3" />
                  Popular
                </span>
              )}
            </div>
          </div>

          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            {tool.name}
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 min-h-[40px]">
            {tool.description}
          </p>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="text-xs font-medium px-2 py-1 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300">
                {tool.category}
              </span>
              <span className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400">
                <Clock className="w-3 h-3" />
                {tool.time}
              </span>
            </div>
            {!isComingSoon && (
              <div className="flex items-center gap-1 text-sm font-medium text-blue-600 dark:text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity">
                <span>Launch</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            )}
          </div>

          {/* Free badge */}
          <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="text-xs font-medium px-2 py-1 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg">
              Free
            </span>
          </div>

          {/* Hover glow */}
          <div className={cn(
            "absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-15 transition-opacity duration-500 -z-10 bg-gradient-to-br",
            tool.gradient,
            "blur-xl"
          )} />
        </div>
      </Link>
    </motion.div>
  );
}

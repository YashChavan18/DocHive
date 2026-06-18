'use client';

import { cn } from '@/lib/utils';

interface FilterChipProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
  isComingSoon?: boolean;
}

export function FilterChip({ label, isActive, onClick, isComingSoon }: FilterChipProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "relative px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300",
        "border border-gray-200 dark:border-gray-700",
        "hover:scale-105 active:scale-95",
        isActive
          ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white border-transparent shadow-lg shadow-blue-500/25"
          : "bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white",
        isComingSoon && !isActive && "opacity-80"
      )}
    >
      <span className="flex items-center gap-2">
        {label}
        {isComingSoon && (
          <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400">
            Soon
          </span>
        )}
      </span>
    </button>
  );
}

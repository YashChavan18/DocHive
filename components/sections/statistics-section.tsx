'use client';

import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Zap, CheckCircle2, UserX, Timer } from 'lucide-react';

const stats = [
  {
    icon: Zap,
    value: 100,
    suffix: '+',
    label: 'Free Tools',
    description: 'And growing every week',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    icon: CheckCircle2,
    value: 100,
    suffix: '%',
    label: 'Browser Based',
    description: 'No installations required',
    gradient: 'from-emerald-500 to-teal-500',
  },
  {
    icon: UserX,
    value: 0,
    suffix: '',
    label: 'Signup Required',
    description: 'Use without an account',
    gradient: 'from-orange-500 to-amber-500',
  },
  {
    icon: Timer,
    value: 0,
    suffix: '',
    label: 'Instant Downloads',
    description: 'No waiting, no queues',
    gradient: 'from-pink-500 to-rose-500',
  },
];

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      if (value === 0) return;
      const duration = 2000;
      const steps = 60;
      const stepDuration = duration / steps;
      const increment = value / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, stepDuration);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  if (value === 0) {
    return <span ref={ref}>No</span>;
  }

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export function StatisticsSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-600 via-cyan-600 to-blue-700 dark:from-blue-900 dark:via-cyan-900 dark:to-blue-900" />
      <div className="absolute inset-0 -z-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            DocHive by the Numbers
          </h2>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            Real metrics that matter. We measure success by how much time we save you.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group text-center"
            >
              <div className="relative p-8 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-colors duration-300">
                <div className={`
                  w-14 h-14 mx-auto rounded-xl flex items-center justify-center mb-4
                  bg-white/20 backdrop-blur-sm
                  group-hover:scale-110 transition-transform duration-300
                `}>
                  <stat.icon className="w-7 h-7 text-white" />
                </div>

                <div className="text-4xl sm:text-5xl font-bold text-white mb-2">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>

                <div className="text-lg font-semibold text-white mb-1">
                  {stat.label}
                </div>
                <div className="text-sm text-blue-200">
                  {stat.description}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

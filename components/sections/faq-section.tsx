'use client';

import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'Is DocHive completely free?',
    answer: 'Yes! DocHive is 100% free to use. There are no hidden charges, no premium tiers, and no usage limits. All 100+ tools are available to everyone at no cost, now and forever.',
  },
  {
    question: 'Do I need to create an account?',
    answer: 'No account required! Simply visit dochive.com, select your tool, and start using it immediately. We believe in friction-free experiences. No email verification, no passwords to remember.',
  },
  {
    question: 'Is my data stored on your servers?',
    answer: 'No, never. All processing happens directly in your browser using modern web technologies. Your files, documents, and data never leave your device. This means maximum privacy and security for your sensitive information.',
  },
  {
    question: 'Can I use DocHive on my phone?',
    answer: 'Absolutely! Every tool on DocHive is fully responsive and works flawlessly on smartphones, tablets, laptops, and desktops. Use it anywhere, anytime, on any device with a web browser.',
  },
  {
    question: 'Can I use the generated documents for commercial purposes?',
    answer: 'Yes! All documents, files, and content you create with DocHive are yours to use however you like. This includes commercial and business purposes, client work, and professional projects.',
  },
];

export function FAQSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-gray-50/50 via-white to-white dark:from-gray-900/50 dark:via-gray-900 dark:to-gray-900" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-50 dark:bg-amber-950/50 border border-amber-100 dark:border-amber-900/50 mb-4">
            <span className="text-sm font-medium text-amber-700 dark:text-amber-300">FAQ</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Got questions? We have answers. If you need more help, feel free to reach out.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={faq.question}
                value={`item-${index}`}
                className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-2xl px-6 shadow-sm hover:shadow-md transition-shadow data-[state=open]:shadow-lg"
              >
                <AccordionTrigger className="text-left py-5 text-base font-semibold text-gray-900 dark:text-white hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 dark:text-gray-400 pb-5 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}

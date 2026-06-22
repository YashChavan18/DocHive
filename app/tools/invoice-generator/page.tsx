import { Metadata } from 'next';
import { InvoiceGeneratorClient } from '@/components/document-engine/InvoiceGeneratorClient';

export const metadata: Metadata = {
  title: 'Free Invoice Generator | DocHive',
  description: 'Create professional invoices online for free. Download printable PDF invoices instantly. No signup required. Generate invoices with GST, custom items, and business branding.',
  keywords: ['invoice generator', 'free invoice', 'online invoice', 'GST invoice', 'PDF invoice', 'create invoice', 'invoice maker', 'print invoice'],
  openGraph: {
    title: 'Free Invoice Generator | DocHive',
    description: 'Create professional invoices online for free. Download printable PDF invoices instantly. No signup required.',
    url: 'https://dochive.com/tools/invoice-generator',
    siteName: 'DocHive',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Invoice Generator | DocHive',
    description: 'Create professional invoices online for free. Download printable PDF invoices instantly.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function InvoiceGeneratorPage() {
  return <InvoiceGeneratorClient />;
}

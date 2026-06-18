import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from 'next-themes';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'DocHive - Free Online Tools for Everyone',
  description: 'Generate documents, calculate finances, edit PDFs, create QR codes and access dozens of free online utilities—all without installing software or creating an account.',
  keywords: ['free tools', 'online tools', 'PDF tools', 'invoice generator', 'resume builder', 'QR code generator', 'GST calculator', 'password generator'],
  authors: [{ name: 'DocHive' }],
  openGraph: {
    title: 'DocHive - Free Online Tools for Everyone',
    description: 'Generate documents, calculate finances, edit PDFs, create QR codes and access dozens of free online utilities.',
    url: 'https://dochive.com',
    siteName: 'DocHive',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DocHive - Free Online Tools for Everyone',
    description: 'Generate documents, calculate finances, edit PDFs, create QR codes and access dozens of free online utilities.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

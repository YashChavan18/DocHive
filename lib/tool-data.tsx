import {
  FileText, FileSpreadsheet, QrCode, Lock, Calculator, CreditCard,
  Merge, Split, Clock, FileSearch, FileDown, FileUp, Image, Code,
  Search, FilePlus, Hash, Globe, User, GraduationCap, Briefcase,
  Landmark, Share2, Shield, Barcode, Binary, Hexagon, Aperture,
  ArrowRightLeft, Receipt, DollarSign, BadgeCheck, FileSignature,
  Type, BookOpen, ReceiptText,
  Scale, PiggyBank, TrendingUp, Target,
  ClipboardCheck, MessageSquare, Link, Quote, Printer, Minimize2,
  Zap, Package,
  Truck, Wallet, Sparkles,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export type Category = 'Students' | 'Business' | 'Finance' | 'PDF' | 'Social' | 'Web Utilities' | 'Personal' | 'Developer' | 'Image';

export type ToolStatus = 'Ready' | 'Coming Soon';

export interface Tool {
  id: string;
  name: string;
  description: string;
  category: Category;
  time: string;
  status: ToolStatus;
  icon: LucideIcon;
  gradient: string;
  shadowColor: string;
  slug: string;
  isNew?: boolean;
  isPopular?: boolean;
}

export const categoryGradients: Record<string, string> = {
  'Students': 'from-blue-500 to-blue-600',
  'Business': 'from-emerald-500 to-emerald-600',
  'Finance': 'from-amber-500 to-orange-500',
  'PDF': 'from-red-500 to-orange-500',
  'Social': 'from-pink-500 to-rose-500',
  'Web Utilities': 'from-cyan-500 to-teal-500',
  'Personal': 'from-violet-500 to-purple-500',
  'Developer': 'from-slate-500 to-gray-600',
  'Image': 'from-fuchsia-500 to-pink-500',
};

export const categoryBgGradients: Record<string, string> = {
  'Students': 'from-blue-50 to-blue-100/50 dark:from-blue-950/30 dark:to-blue-900/20',
  'Business': 'from-emerald-50 to-emerald-100/50 dark:from-emerald-950/30 dark:to-emerald-900/20',
  'Finance': 'from-amber-50 to-orange-100/50 dark:from-amber-950/30 dark:to-orange-900/20',
  'PDF': 'from-red-50 to-orange-100/50 dark:from-red-950/30 dark:to-orange-900/20',
  'Social': 'from-pink-50 to-rose-100/50 dark:from-pink-950/30 dark:to-rose-900/20',
  'Web Utilities': 'from-cyan-50 to-teal-100/50 dark:from-cyan-950/30 dark:to-teal-900/20',
  'Personal': 'from-violet-50 to-purple-100/50 dark:from-violet-950/30 dark:to-purple-900/20',
  'Developer': 'from-slate-50 to-gray-100/50 dark:from-slate-950/30 dark:to-gray-900/20',
  'Image': 'from-fuchsia-50 to-pink-100/50 dark:from-fuchsia-950/30 dark:to-pink-900/20',
};

export const categoryIcons: Record<string, LucideIcon> = {
  'Students': GraduationCap,
  'Business': Briefcase,
  'Finance': Landmark,
  'PDF': FileText,
  'Social': Share2,
  'Web Utilities': Globe,
  'Personal': User,
  'Developer': Code,
  'Image': Image,
};

export const categoryDescriptions: Record<string, string> = {
  'Students': 'Resume Builder, PDF Tools, Certificate Generator, Assignment Tools',
  'Business': 'Invoice, Receipt, Quotation, GST, Purchase Order',
  'Finance': 'EMI Calculator, GST Calculator, Loan Calculator, SIP Calculator',
  'PDF': 'Merge PDF, Split PDF, Compress PDF, PDF to Image Converter',
  'Social': 'QR Generator, WhatsApp Link, Bio Link, Character Counter',
  'Web Utilities': 'Password Generator, UUID Generator, JSON Formatter, Base64 Encoder',
  'Personal': 'Rent Receipt, Leave Letter, Invitation Generator, ID Card Generator',
  'Developer': 'JSON Formatter, Base64 Encoder, UUID Generator, Code Beautifier',
  'Image': 'Image Compressor, Image Resizer, Format Converter',
};

export const tools: Tool[] = [
  // Business
  { id: '1', name: 'Invoice Generator', description: 'Create professional invoices with customizable templates', category: 'Business', time: '< 1 min', status: 'Ready', icon: FileText, gradient: 'from-blue-500 to-blue-600', shadowColor: 'shadow-blue-500/25', slug: 'invoice-generator', isPopular: true },
  { id: '2', name: 'Business Card Generator', description: 'Design and download professional business cards instantly', category: 'Business', time: '2 min', status: 'Ready', icon: CreditCard, gradient: 'from-emerald-500 to-emerald-600', shadowColor: 'shadow-emerald-500/25', slug: 'business-card-generator', isPopular: true },
  { id: '3', name: 'Offer Letter Generator', description: 'Generate professional offer letters for new employees', category: 'Business', time: '2 min', status: 'Ready', icon: FileSignature, gradient: 'from-teal-500 to-teal-600', shadowColor: 'shadow-teal-500/25', slug: 'offer-letter-generator' },
  { id: '4', name: 'Salary Slip Generator', description: 'Create detailed salary slips with tax breakdowns', category: 'Business', time: '1 min', status: 'Ready', icon: Receipt, gradient: 'from-cyan-500 to-cyan-600', shadowColor: 'shadow-cyan-500/25', slug: 'salary-slip-generator', isPopular: true },
  { id: '5', name: 'Receipt Generator', description: 'Generate professional payment receipts', category: 'Business', time: '1 min', status: 'Ready', icon: ReceiptText, gradient: 'from-sky-500 to-sky-600', shadowColor: 'shadow-sky-500/25', slug: 'receipt-generator' },
  { id: '6', name: 'Quotation Generator', description: 'Create professional quotations and estimates', category: 'Business', time: '2 min', status: 'Ready', icon: DollarSign, gradient: 'from-indigo-500 to-indigo-600', shadowColor: 'shadow-indigo-500/25', slug: 'quotation-generator' },
  { id: '7', name: 'Purchase Order Generator', description: 'Create and manage purchase orders', category: 'Business', time: '2 min', status: 'Ready', icon: Package, gradient: 'from-lime-500 to-green-500', shadowColor: 'shadow-lime-500/25', slug: 'purchase-order-generator', isNew: true },
  { id: '8', name: 'Delivery Note Generator', description: 'Create professional delivery notes', category: 'Business', time: '1 min', status: 'Ready', icon: Truck, gradient: 'from-green-500 to-emerald-600', shadowColor: 'shadow-green-500/25', slug: 'delivery-note-generator', isNew: true },
  // Finance
  { id: '9', name: 'GST Calculator', description: 'Calculate GST amounts with detailed breakdown', category: 'Finance', time: '30 sec', status: 'Ready', icon: Calculator, gradient: 'from-amber-500 to-orange-500', shadowColor: 'shadow-amber-500/25', slug: 'gst-calculator', isPopular: true },
  { id: '10', name: 'Loan Calculator', description: 'Calculate EMI, interest, and repayment schedule', category: 'Finance', time: '1 min', status: 'Ready', icon: PiggyBank, gradient: 'from-orange-500 to-red-500', shadowColor: 'shadow-orange-500/25', slug: 'loan-calculator', isPopular: true },
  { id: '11', name: 'SIP Calculator', description: 'Calculate mutual fund SIP returns and growth', category: 'Finance', time: '1 min', status: 'Ready', icon: TrendingUp, gradient: 'from-yellow-500 to-amber-500', shadowColor: 'shadow-yellow-500/25', slug: 'sip-calculator' },
  { id: '12', name: 'EMI Calculator', description: 'Calculate Equated Monthly Installments', category: 'Finance', time: '1 min', status: 'Ready', icon: Landmark, gradient: 'from-red-500 to-pink-500', shadowColor: 'shadow-red-500/25', slug: 'emi-calculator' },
  { id: '13', name: 'FD Calculator', description: 'Calculate fixed deposit returns and maturity', category: 'Finance', time: '30 sec', status: 'Ready', icon: Wallet, gradient: 'from-rose-500 to-orange-500', shadowColor: 'shadow-rose-500/25', slug: 'fd-calculator' },
  { id: '14', name: 'PPF Calculator', description: 'Calculate Public Provident Fund returns', category: 'Finance', time: '1 min', status: 'Ready', icon: Target, gradient: 'from-amber-500 to-yellow-500', shadowColor: 'shadow-amber-500/25', slug: 'ppf-calculator' },
  { id: '15', name: 'NPS Calculator', description: 'Calculate National Pension System returns', category: 'Finance', time: '1 min', status: 'Ready', icon: Scale, gradient: 'from-orange-500 to-amber-500', shadowColor: 'shadow-orange-500/25', slug: 'nps-calculator', isNew: true },
  { id: '16', name: 'HRA Calculator', description: 'Calculate House Rent Allowance exemptions', category: 'Finance', time: '1 min', status: 'Ready', icon: Landmark, gradient: 'from-yellow-500 to-orange-500', shadowColor: 'shadow-yellow-500/25', slug: 'hra-calculator', isNew: true },
  // Students
  { id: '17', name: 'Resume Builder', description: 'Build stunning resumes with modern templates', category: 'Students', time: '3 min', status: 'Ready', icon: FileSpreadsheet, gradient: 'from-blue-500 to-indigo-500', shadowColor: 'shadow-blue-500/25', slug: 'resume-builder', isPopular: true },
  { id: '18', name: 'Certificate Generator', description: 'Create professional certificates and awards', category: 'Students', time: '2 min', status: 'Ready', icon: BadgeCheck, gradient: 'from-violet-500 to-purple-500', shadowColor: 'shadow-violet-500/25', slug: 'certificate-generator' },
  { id: '19', name: 'Assignment Formatter', description: 'Format and style your assignments', category: 'Students', time: '1 min', status: 'Ready', icon: BookOpen, gradient: 'from-sky-500 to-blue-500', shadowColor: 'shadow-sky-500/25', slug: 'assignment-formatter' },
  { id: '20', name: 'ID Card Generator', description: 'Create professional student ID cards', category: 'Students', time: '1 min', status: 'Ready', icon: User, gradient: 'from-indigo-500 to-blue-500', shadowColor: 'shadow-indigo-500/25', slug: 'id-card-generator', isNew: true },
  // Social
  { id: '21', name: 'QR Code Generator', description: 'Generate custom QR codes for links, text, and more', category: 'Social', time: '15 sec', status: 'Ready', icon: QrCode, gradient: 'from-purple-500 to-violet-500', shadowColor: 'shadow-purple-500/25', slug: 'qr-generator', isPopular: true },
  { id: '22', name: 'WhatsApp Link Generator', description: 'Create WhatsApp click-to-chat links', category: 'Social', time: '15 sec', status: 'Ready', icon: MessageSquare, gradient: 'from-green-500 to-emerald-500', shadowColor: 'shadow-green-500/25', slug: 'whatsapp-link-generator' },
  { id: '23', name: 'Bio Link Generator', description: 'Create a single link for all your profiles', category: 'Social', time: '1 min', status: 'Ready', icon: Link, gradient: 'from-pink-500 to-rose-500', shadowColor: 'shadow-pink-500/25', slug: 'bio-link-generator' },
  { id: '24', name: 'Hashtag Generator', description: 'Generate relevant hashtags for your posts', category: 'Social', time: '15 sec', status: 'Ready', icon: Hash, gradient: 'from-rose-500 to-pink-500', shadowColor: 'shadow-rose-500/25', slug: 'hashtag-generator', isNew: true },
  { id: '25', name: 'Character Counter', description: 'Count characters and words for social media', category: 'Social', time: 'Instant', status: 'Ready', icon: Type, gradient: 'from-violet-500 to-fuchsia-500', shadowColor: 'shadow-violet-500/25', slug: 'character-counter' },
  { id: '26', name: 'Quote Generator', description: 'Generate beautiful quotes and captions', category: 'Social', time: 'Instant', status: 'Ready', icon: Quote, gradient: 'from-fuchsia-500 to-purple-500', shadowColor: 'shadow-fuchsia-500/25', slug: 'quote-generator', isNew: true },
  // Web Utilities
  { id: '27', name: 'Password Generator', description: 'Generate secure random passwords with options', category: 'Web Utilities', time: '10 sec', status: 'Ready', icon: Lock, gradient: 'from-rose-500 to-red-500', shadowColor: 'shadow-rose-500/25', slug: 'password-generator', isPopular: true },
  { id: '28', name: 'JSON Formatter', description: 'Format and validate JSON data', category: 'Web Utilities', time: 'Instant', status: 'Ready', icon: Code, gradient: 'from-slate-500 to-gray-500', shadowColor: 'shadow-slate-500/25', slug: 'json-formatter' },
  { id: '29', name: 'Base64 Encoder', description: 'Encode and decode Base64 strings', category: 'Web Utilities', time: 'Instant', status: 'Ready', icon: Binary, gradient: 'from-zinc-500 to-slate-500', shadowColor: 'shadow-zinc-500/25', slug: 'base64-encoder' },
  { id: '30', name: 'Word Counter', description: 'Count words, characters, sentences, and paragraphs', category: 'Web Utilities', time: 'Instant', status: 'Ready', icon: Search, gradient: 'from-teal-500 to-cyan-500', shadowColor: 'shadow-teal-500/25', slug: 'word-counter' },
  { id: '31', name: 'URL Shortener', description: 'Shorten long URLs into compact links', category: 'Web Utilities', time: '15 sec', status: 'Ready', icon: Link, gradient: 'from-cyan-500 to-sky-500', shadowColor: 'shadow-cyan-500/25', slug: 'url-shortener', isNew: true },
  { id: '32', name: 'Color Picker', description: 'Pick and convert colors with various formats', category: 'Web Utilities', time: 'Instant', status: 'Ready', icon: Aperture, gradient: 'from-pink-500 to-fuchsia-500', shadowColor: 'shadow-pink-500/25', slug: 'color-picker', isNew: true },
  // PDF
  { id: '33', name: 'Merge PDF', description: 'Combine multiple PDFs into one document', category: 'PDF', time: '1 min', status: 'Ready', icon: Merge, gradient: 'from-red-500 to-orange-500', shadowColor: 'shadow-red-500/25', slug: 'merge-pdf', isPopular: true },
  { id: '34', name: 'Split PDF', description: 'Split a PDF into separate pages', category: 'PDF', time: '1 min', status: 'Ready', icon: Split, gradient: 'from-orange-500 to-red-500', shadowColor: 'shadow-orange-500/25', slug: 'split-pdf' },
  { id: '35', name: 'Text to PDF', description: 'Convert text to a professionally formatted PDF', category: 'PDF', time: '30 sec', status: 'Ready', icon: FilePlus, gradient: 'from-amber-500 to-red-500', shadowColor: 'shadow-amber-500/25', slug: 'text-to-pdf' },
  { id: '36', name: 'PDF to Image', description: 'Convert PDF pages to images', category: 'PDF', time: '1 min', status: 'Ready', icon: FileDown, gradient: 'from-red-500 to-pink-500', shadowColor: 'shadow-red-500/25', slug: 'pdf-to-image', isNew: true },
  { id: '37', name: 'Compress PDF', description: 'Reduce PDF file size while maintaining quality', category: 'PDF', time: '1 min', status: 'Ready', icon: Minimize2, gradient: 'from-pink-500 to-red-500', shadowColor: 'shadow-pink-500/25', slug: 'compress-pdf', isNew: true },
  { id: '38', name: 'Rotate PDF', description: 'Rotate PDF pages to the correct orientation', category: 'PDF', time: '30 sec', status: 'Ready', icon: ArrowRightLeft, gradient: 'from-rose-500 to-red-500', shadowColor: 'shadow-rose-500/25', slug: 'rotate-pdf', isNew: true },
  // Personal
  { id: '39', name: 'Rent Receipt Generator', description: 'Generate rent receipts for tax filing', category: 'Personal', time: '1 min', status: 'Ready', icon: Receipt, gradient: 'from-violet-500 to-purple-500', shadowColor: 'shadow-violet-500/25', slug: 'rent-receipt-generator', isPopular: true },
  { id: '40', name: 'Leave Letter Generator', description: 'Create professional leave application letters', category: 'Personal', time: '1 min', status: 'Ready', icon: FileSignature, gradient: 'from-purple-500 to-indigo-500', shadowColor: 'shadow-purple-500/25', slug: 'leave-letter-generator' },
  { id: '41', name: 'Invitation Generator', description: 'Design and download event invitations', category: 'Personal', time: '2 min', status: 'Ready', icon: ClipboardCheck, gradient: 'from-indigo-500 to-violet-500', shadowColor: 'shadow-indigo-500/25', slug: 'invitation-generator' },
  { id: '42', name: 'Lorem Ipsum Generator', description: 'Generate placeholder text for designs', category: 'Personal', time: 'Instant', status: 'Ready', icon: Type, gradient: 'from-fuchsia-500 to-purple-500', shadowColor: 'shadow-fuchsia-500/25', slug: 'lorem-ipsum-generator', isNew: true },
  // Coming Soon
  { id: '43', name: 'Image Compressor', description: 'Compress images without losing quality', category: 'Image', time: '1 min', status: 'Coming Soon', icon: Image, gradient: 'from-fuchsia-500 to-pink-500', shadowColor: 'shadow-fuchsia-500/25', slug: 'image-compressor' },
  { id: '44', name: 'Age Calculator', description: 'Calculate exact age in years, months, days', category: 'Personal', time: 'Instant', status: 'Coming Soon', icon: Clock, gradient: 'from-blue-500 to-sky-500', shadowColor: 'shadow-blue-500/25', slug: 'age-calculator' },
  { id: '45', name: 'PNG to PDF', description: 'Convert PNG images to PDF documents', category: 'Image', time: '30 sec', status: 'Coming Soon', icon: FileUp, gradient: 'from-pink-500 to-rose-500', shadowColor: 'shadow-pink-500/25', slug: 'png-to-pdf' },
  { id: '46', name: 'Markdown Editor', description: 'Write and preview Markdown in real time', category: 'Developer', time: 'Instant', status: 'Coming Soon', icon: FileText, gradient: 'from-slate-500 to-gray-500', shadowColor: 'shadow-slate-500/25', slug: 'markdown-editor' },
  { id: '47', name: 'Invoice OCR', description: 'Extract text from invoice images', category: 'Business', time: '1 min', status: 'Coming Soon', icon: FileSearch, gradient: 'from-blue-500 to-cyan-500', shadowColor: 'shadow-blue-500/25', slug: 'invoice-ocr' },
  { id: '48', name: 'Watermark PDF', description: 'Add text or image watermarks to PDFs', category: 'PDF', time: '1 min', status: 'Coming Soon', icon: Shield, gradient: 'from-red-500 to-orange-500', shadowColor: 'shadow-red-500/25', slug: 'watermark-pdf' },
  { id: '49', name: 'Barcode Generator', description: 'Create custom barcodes for products', category: 'Business', time: '15 sec', status: 'Coming Soon', icon: Barcode, gradient: 'from-emerald-500 to-teal-500', shadowColor: 'shadow-emerald-500/25', slug: 'barcode-generator' },
  { id: '50', name: 'UUID Generator', description: 'Generate unique UUIDs for identifiers', category: 'Developer', time: 'Instant', status: 'Coming Soon', icon: Hexagon, gradient: 'from-slate-500 to-zinc-500', shadowColor: 'shadow-slate-500/25', slug: 'uuid-generator' },
];

export const popularSearches = [
  'Invoice Generator', 'Resume Builder', 'QR Generator', 'GST Calculator',
  'Password Generator', 'Loan Calculator', 'Merge PDF', 'Offer Letter',
  'Salary Slip', 'Business Card',
];

export const filterCategories = [
  'All', 'Students', 'Business', 'Finance', 'PDF', 'Social', 'Web Utilities', 'Personal', 'Developer', 'Image',
];

export const categoryInfo = [
  { title: 'Students', description: 'Resume Builder, PDF Tools, Certificate Generator, Assignment Tools', count: 12, comingSoon: false },
  { title: 'Business', description: 'Invoice, Receipt, Quotation, GST, Purchase Order', count: 15, comingSoon: false },
  { title: 'Finance', description: 'EMI Calculator, GST Calculator, Loan Calculator, SIP Calculator', count: 10, comingSoon: false },
  { title: 'PDF Tools', description: 'Merge PDF, Split PDF, Compress PDF, PDF to Image Converter', count: 8, comingSoon: false },
  { title: 'Social Media', description: 'QR Generator, WhatsApp Link, Bio Link, Character Counter', count: 8, comingSoon: false },
  { title: 'Web Utilities', description: 'Password Generator, UUID Generator, JSON Formatter, Base64 Encoder', count: 12, comingSoon: false },
  { title: 'Personal', description: 'Rent Receipt, Leave Letter, Invitation Generator, ID Card Generator', count: 7, comingSoon: false },
  { title: 'Developer Tools', description: 'JSON Formatter, Base64 Encoder, UUID Generator, Code Beautifier', count: 5, comingSoon: true },
  { title: 'Image Tools', description: 'Image Compressor, Image Resizer, Format Converter', count: 4, comingSoon: true },
];

export const comingSoonTools = [
  'Image Compressor', 'Age Calculator', 'PNG to PDF', 'Markdown Editor',
  'Invoice OCR', 'Watermark PDF', 'Barcode Generator', 'UUID Generator',
];

export function getToolsByCategory(category: string): Tool[] {
  if (category === 'All') return tools;
  if (category === 'PDF') return tools.filter(t => t.category === 'PDF');
  if (category === 'Social') return tools.filter(t => t.category === 'Social');
  if (category === 'Image') return tools.filter(t => t.category === 'Image');
  return tools.filter(t => t.category === category);
}

export function searchTools(query: string): Tool[] {
  const q = query.toLowerCase();
  return tools.filter(t =>
    t.name.toLowerCase().includes(q) ||
    t.description.toLowerCase().includes(q) ||
    t.category.toLowerCase().includes(q) ||
    t.slug.toLowerCase().includes(q)
  );
}

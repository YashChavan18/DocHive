export interface DocumentItem {
  id: string;
  name: string;
  quantity: number;
  unitPrice: number;
  taxPercent: number;
  total: number;
}

export interface BusinessInfo {
  name: string;
  address: string;
  gstNumber: string;
  phone: string;
  email: string;
  logoUrl: string | null;
}

export interface CustomerInfo {
  name: string;
  address: string;
  phone: string;
  email: string;
}

export interface InvoiceData {
  documentNumber: string;
  documentDate: string;
  dueDate: string;
  business: BusinessInfo;
  customer: CustomerInfo;
  items: DocumentItem[];
  subtotal: number;
  discount: number;
  discountType: 'fixed' | 'percent';
  taxTotal: number;
  shipping: number;
  grandTotal: number;
  notes: string;
  paymentTerms: string;
  termsAndConditions: string;
}

export interface DocumentConfig {
  title: string;
  documentType: string;
  currency: string;
  showTax: boolean;
  showDiscount: boolean;
  showShipping: boolean;
  showLogo: boolean;
  showNotes: boolean;
  showTerms: boolean;
  showPaymentTerms: boolean;
}

export const defaultDocumentConfig: DocumentConfig = {
  title: 'Invoice',
  documentType: 'Invoice',
  currency: '₹',
  showTax: true,
  showDiscount: true,
  showShipping: true,
  showLogo: true,
  showNotes: true,
  showTerms: true,
  showPaymentTerms: true,
};

export const defaultInvoiceData: InvoiceData = {
  documentNumber: '',
  documentDate: new Date().toISOString().split('T')[0],
  dueDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
  business: {
    name: '',
    address: '',
    gstNumber: '',
    phone: '',
    email: '',
    logoUrl: null,
  },
  customer: {
    name: '',
    address: '',
    phone: '',
    email: '',
  },
  items: [
    { id: '1', name: '', quantity: 1, unitPrice: 0, taxPercent: 18, total: 0 },
  ],
  subtotal: 0,
  discount: 0,
  discountType: 'fixed',
  taxTotal: 0,
  shipping: 0,
  grandTotal: 0,
  notes: '',
  paymentTerms: 'Payment due within 30 days of invoice date.',
  termsAndConditions: 'Goods sold are not returnable once accepted.',
};

export function generateDocumentNumber(prefix: string = 'INV'): string {
  const now = new Date();
  const date = now.toISOString().split('T')[0].replace(/-/g, '');
  const random = Math.floor(1000 + Math.random() * 9000);
  return `${prefix}-${date}-${random}`;
}

export function calculateItemTotal(item: DocumentItem): number {
  const base = item.quantity * item.unitPrice;
  const tax = base * (item.taxPercent / 100);
  return base + tax;
}

export function recalculateInvoice(data: InvoiceData): InvoiceData {
  const items = data.items.map((item) => ({
    ...item,
    total: calculateItemTotal(item),
  }));

  const subtotal = items.reduce((sum, item) => sum + item.quantity * item.unitPrice, 0);
  const taxTotal = items.reduce((sum, item) => sum + item.quantity * item.unitPrice * (item.taxPercent / 100), 0);

  let discountAmount = 0;
  if (data.discountType === 'percent') {
    discountAmount = subtotal * (data.discount / 100);
  } else {
    discountAmount = data.discount;
  }

  const grandTotal = subtotal + taxTotal - discountAmount + data.shipping;

  return {
    ...data,
    items,
    subtotal,
    taxTotal,
    discount: data.discount,
    grandTotal,
  };
}

export function formatCurrency(amount: number, currency: string = '₹'): string {
  return `${currency}${amount.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
}

export function createNewItem(): DocumentItem {
  return {
    id: Math.random().toString(36).substring(2, 9),
    name: '',
    quantity: 1,
    unitPrice: 0,
    taxPercent: 18,
    total: 0,
  };
}

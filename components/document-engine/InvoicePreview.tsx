'use client';

import { cn } from '@/lib/utils';
import type { InvoiceData, DocumentConfig } from '@/lib/document-engine/types';
import { formatCurrency } from '@/lib/document-engine/types';

interface InvoicePreviewProps {
  data: InvoiceData;
  config: DocumentConfig;
  previewRef?: React.RefObject<HTMLDivElement>;
  className?: string;
}

export function InvoicePreview({ data, config, previewRef, className }: InvoicePreviewProps) {
  const { currency, title } = config;

  return (
    <div
      ref={previewRef}
      className={cn(
        'bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden',
        'w-full',
        className
      )}
    >
      <div className="p-8 sm:p-10">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-8">
          <div className="flex items-start gap-4">
            {data.business.logoUrl && (
              <img
                src={data.business.logoUrl}
                alt="Logo"
                className="w-20 h-20 object-contain rounded-lg"
                crossOrigin="anonymous"
              />
            )}
            <div>
              <h1 className="text-2xl font-bold text-gray-900 tracking-tight">{title.toUpperCase()}</h1>
              <div className="mt-2 space-y-0.5">
                <p className="text-sm font-semibold text-gray-800">{data.business.name}</p>
                {data.business.address && (
                  <p className="text-xs text-gray-500 leading-relaxed max-w-xs">{data.business.address}</p>
                )}
                {data.business.gstNumber && (
                  <p className="text-xs text-gray-500">GST: {data.business.gstNumber}</p>
                )}
                {data.business.phone && (
                  <p className="text-xs text-gray-500">Phone: {data.business.phone}</p>
                )}
                {data.business.email && (
                  <p className="text-xs text-gray-500">Email: {data.business.email}</p>
                )}
              </div>
            </div>
          </div>

          <div className="text-right sm:text-left">
            <div className="space-y-1">
              <div className="flex justify-between gap-4 text-sm">
                <span className="text-gray-500">Number</span>
                <span className="font-medium text-gray-900">{data.documentNumber || '—'}</span>
              </div>
              <div className="flex justify-between gap-4 text-sm">
                <span className="text-gray-500">Date</span>
                <span className="font-medium text-gray-900">{data.documentDate || '—'}</span>
              </div>
              <div className="flex justify-between gap-4 text-sm">
                <span className="text-gray-500">Due Date</span>
                <span className="font-medium text-gray-900">{data.dueDate || '—'}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bill To */}
        <div className="mb-8">
          <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Bill To</h3>
          <div className="border-l-4 border-blue-500 pl-4">
            <p className="text-sm font-semibold text-gray-900">{data.customer.name || 'Customer Name'}</p>
            {data.customer.address && (
              <p className="text-xs text-gray-500 mt-1 leading-relaxed max-w-sm">{data.customer.address}</p>
            )}
            <div className="flex flex-wrap gap-3 mt-1">
              {data.customer.phone && (
                <span className="text-xs text-gray-500">Phone: {data.customer.phone}</span>
              )}
              {data.customer.email && (
                <span className="text-xs text-gray-500">Email: {data.customer.email}</span>
              )}
            </div>
          </div>
        </div>

        {/* Items Table */}
        <div className="mb-8">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-50 border-y border-gray-200">
                <th className="text-left py-2 px-3 font-semibold text-gray-700 text-xs uppercase">Product</th>
                <th className="text-center py-2 px-3 font-semibold text-gray-700 text-xs uppercase">Qty</th>
                <th className="text-right py-2 px-3 font-semibold text-gray-700 text-xs uppercase">Price</th>
                <th className="text-right py-2 px-3 font-semibold text-gray-700 text-xs uppercase">Tax</th>
                <th className="text-right py-2 px-3 font-semibold text-gray-700 text-xs uppercase">Amount</th>
              </tr>
            </thead>
            <tbody>
              {data.items.map((item, i) => (
                <tr key={item.id} className={i % 2 === 0 ? '' : 'bg-gray-50/50'}>
                  <td className="py-3 px-3 text-gray-900 font-medium">{item.name || '—'}</td>
                  <td className="py-3 px-3 text-center text-gray-700">{item.quantity}</td>
                  <td className="py-3 px-3 text-right text-gray-700">{formatCurrency(item.unitPrice, currency)}</td>
                  <td className="py-3 px-3 text-right text-gray-700">{item.taxPercent}%</td>
                  <td className="py-3 px-3 text-right text-gray-900 font-semibold">{formatCurrency(item.total, currency)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Summary */}
        <div className="flex flex-col sm:flex-row justify-between items-start gap-6">
          <div className="space-y-3 max-w-sm">
            {data.notes && (
              <div>
                <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">Notes</h4>
                <p className="text-xs text-gray-600 leading-relaxed whitespace-pre-wrap">{data.notes}</p>
              </div>
            )}
            {data.paymentTerms && (
              <div>
                <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">Payment Terms</h4>
                <p className="text-xs text-gray-600 leading-relaxed">{data.paymentTerms}</p>
              </div>
            )}
            {data.termsAndConditions && (
              <div>
                <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">Terms & Conditions</h4>
                <p className="text-xs text-gray-600 leading-relaxed">{data.termsAndConditions}</p>
              </div>
            )}
          </div>

          <div className="w-full sm:w-64 space-y-2 bg-gray-50 rounded-xl p-4">
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Subtotal</span>
              <span className="font-medium text-gray-900">{formatCurrency(data.subtotal, currency)}</span>
            </div>
            {data.discount > 0 && (
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Discount</span>
                <span className="font-medium text-gray-900">-{formatCurrency(data.discount, currency)}</span>
              </div>
            )}
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Tax</span>
              <span className="font-medium text-gray-900">{formatCurrency(data.taxTotal, currency)}</span>
            </div>
            {data.shipping > 0 && (
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Shipping</span>
                <span className="font-medium text-gray-900">{formatCurrency(data.shipping, currency)}</span>
              </div>
            )}
            <div className="border-t border-gray-200 pt-2 flex justify-between">
              <span className="text-sm font-semibold text-gray-900">Grand Total</span>
              <span className="text-lg font-bold text-gray-900">{formatCurrency(data.grandTotal, currency)}</span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 pt-6 border-t border-gray-200 text-center">
          <p className="text-xs text-gray-400">Thank you for your business.</p>
        </div>
      </div>
    </div>
  );
}

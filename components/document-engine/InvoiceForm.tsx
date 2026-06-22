'use client';

import { useForm, useFieldArray } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Plus, Trash2, ChevronDown } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from '@/components/ui/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { LogoUploader } from './LogoUploader';
import { cn } from '@/lib/utils';
import type { InvoiceData } from '@/lib/document-engine/types';

const itemSchema = z.object({
  id: z.string(),
  name: z.string().min(1, 'Product name is required'),
  quantity: z.coerce.number().min(1, 'Minimum 1'),
  unitPrice: z.coerce.number().min(0, 'Must be positive'),
  taxPercent: z.coerce.number().min(0).max(100),
  total: z.coerce.number(),
});

const invoiceSchema = z.object({
  documentNumber: z.string().min(1, 'Required'),
  documentDate: z.string().min(1, 'Required'),
  dueDate: z.string().min(1, 'Required'),
  business: z.object({
    name: z.string().min(1, 'Business name required'),
    address: z.string(),
    gstNumber: z.string(),
    phone: z.string(),
    email: z.string().email('Invalid email').or(z.literal('')),
    logoUrl: z.string().nullable(),
  }),
  customer: z.object({
    name: z.string().min(1, 'Customer name required'),
    address: z.string(),
    phone: z.string(),
    email: z.string().email('Invalid email').or(z.literal('')),
  }),
  items: z.array(itemSchema).min(1, 'At least one item required'),
  discount: z.coerce.number().min(0),
  discountType: z.enum(['fixed', 'percent']),
  shipping: z.coerce.number().min(0),
  notes: z.string(),
  paymentTerms: z.string(),
  termsAndConditions: z.string(),
});

type InvoiceFormValues = z.infer<typeof invoiceSchema>;

interface InvoiceFormProps {
  data: InvoiceData;
  onChange: (data: InvoiceData) => void;
}

export function InvoiceForm({ data, onChange }: InvoiceFormProps) {
  const form = useForm<InvoiceFormValues>({
    resolver: zodResolver(invoiceSchema),
    defaultValues: {
      documentNumber: data.documentNumber,
      documentDate: data.documentDate,
      dueDate: data.dueDate,
      business: data.business,
      customer: data.customer,
      items: data.items,
      discount: data.discount,
      discountType: data.discountType,
      shipping: data.shipping,
      notes: data.notes,
      paymentTerms: data.paymentTerms,
      termsAndConditions: data.termsAndConditions,
    },
    mode: 'onChange',
  });

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: 'items',
  });

  const formValues = form.watch();

  // Notify parent on change
  const watchedValues = form.watch();
  const handleChange = (field: string, value: unknown) => {
    const current = form.getValues();
    const updated = { ...current, [field]: value };
    form.setValue(field as any, value);
    onChange({ ...data, ...updated });
  };

  return (
    <Form {...form}>
      <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
        {/* Business Information */}
        <div className="bg-white dark:bg-gray-800/50 rounded-2xl border border-gray-200 dark:border-gray-700 p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-5 flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
              <span className="text-white font-bold text-xs">B</span>
            </div>
            Business Information
          </h3>

          <div className="space-y-4">
            <FormField
              control={form.control}
              name="business.name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Business Name <span className="text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="Your Business Name"
                      className="h-11 rounded-xl border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/50 focus:ring-2 focus:ring-blue-500"
                      onChange={(e) => {
                        field.onChange(e);
                        onChange({ ...data, business: { ...data.business, name: e.target.value } });
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="business.address"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-medium text-gray-700 dark:text-gray-300">Business Address</FormLabel>
                  <FormControl>
                    <Textarea
                      {...field}
                      placeholder="123, Main Street, City, State, PIN"
                      className="min-h-[80px] rounded-xl border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/50 focus:ring-2 focus:ring-blue-500 resize-none"
                      onChange={(e) => {
                        field.onChange(e);
                        onChange({ ...data, business: { ...data.business, address: e.target.value } });
                      }}
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="business.gstNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium text-gray-700 dark:text-gray-300">GST Number</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="22AAAAA0000A1Z5"
                        className="h-11 rounded-xl border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/50 focus:ring-2 focus:ring-blue-500"
                        onChange={(e) => {
                          field.onChange(e);
                          onChange({ ...data, business: { ...data.business, gstNumber: e.target.value } });
                        }}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="business.phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium text-gray-700 dark:text-gray-300">Phone Number</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="+91 98765 43210"
                        className="h-11 rounded-xl border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/50 focus:ring-2 focus:ring-blue-500"
                        onChange={(e) => {
                          field.onChange(e);
                          onChange({ ...data, business: { ...data.business, phone: e.target.value } });
                        }}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="business.email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-medium text-gray-700 dark:text-gray-300">Email</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="business@example.com"
                      className="h-11 rounded-xl border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/50 focus:ring-2 focus:ring-blue-500"
                      onChange={(e) => {
                        field.onChange(e);
                        onChange({ ...data, business: { ...data.business, email: e.target.value } });
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="business.logoUrl"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-medium text-gray-700 dark:text-gray-300">Business Logo</FormLabel>
                  <FormControl>
                    <LogoUploader
                      logoUrl={field.value}
                      onLogoChange={(url) => {
                        field.onChange(url);
                        onChange({ ...data, business: { ...data.business, logoUrl: url } });
                      }}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
        </div>

        {/* Customer Information */}
        <div className="bg-white dark:bg-gray-800/50 rounded-2xl border border-gray-200 dark:border-gray-700 p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-5 flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center">
              <span className="text-white font-bold text-xs">C</span>
            </div>
            Customer Information
          </h3>

          <div className="space-y-4">
            <FormField
              control={form.control}
              name="customer.name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Customer Name <span className="text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="Customer Name"
                      className="h-11 rounded-xl border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/50 focus:ring-2 focus:ring-blue-500"
                      onChange={(e) => {
                        field.onChange(e);
                        onChange({ ...data, customer: { ...data.customer, name: e.target.value } });
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="customer.address"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-medium text-gray-700 dark:text-gray-300">Customer Address</FormLabel>
                  <FormControl>
                    <Textarea
                      {...field}
                      placeholder="Customer Address"
                      className="min-h-[80px] rounded-xl border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/50 focus:ring-2 focus:ring-blue-500 resize-none"
                      onChange={(e) => {
                        field.onChange(e);
                        onChange({ ...data, customer: { ...data.customer, address: e.target.value } });
                      }}
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="customer.phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium text-gray-700 dark:text-gray-300">Phone</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="+91 98765 43210"
                        className="h-11 rounded-xl border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/50 focus:ring-2 focus:ring-blue-500"
                        onChange={(e) => {
                          field.onChange(e);
                          onChange({ ...data, customer: { ...data.customer, phone: e.target.value } });
                        }}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="customer.email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium text-gray-700 dark:text-gray-300">Email</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="customer@example.com"
                        className="h-11 rounded-xl border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/50 focus:ring-2 focus:ring-blue-500"
                        onChange={(e) => {
                          field.onChange(e);
                          onChange({ ...data, customer: { ...data.customer, email: e.target.value } });
                        }}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <FormField
                control={form.control}
                name="documentNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      Invoice Number <span className="text-red-500">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="INV-001"
                        className="h-11 rounded-xl border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/50 focus:ring-2 focus:ring-blue-500"
                        onChange={(e) => {
                          field.onChange(e);
                          onChange({ ...data, documentNumber: e.target.value });
                        }}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="documentDate"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium text-gray-700 dark:text-gray-300">Invoice Date</FormLabel>
                    <FormControl>
                      <Input
                        type="date"
                        {...field}
                        className="h-11 rounded-xl border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/50 focus:ring-2 focus:ring-blue-500"
                        onChange={(e) => {
                          field.onChange(e);
                          onChange({ ...data, documentDate: e.target.value });
                        }}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="dueDate"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium text-gray-700 dark:text-gray-300">Due Date</FormLabel>
                    <FormControl>
                      <Input
                        type="date"
                        {...field}
                        className="h-11 rounded-xl border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/50 focus:ring-2 focus:ring-blue-500"
                        onChange={(e) => {
                          field.onChange(e);
                          onChange({ ...data, dueDate: e.target.value });
                        }}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>
          </div>
        </div>

        {/* Products */}
        <div className="bg-white dark:bg-gray-800/50 rounded-2xl border border-gray-200 dark:border-gray-700 p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-5 flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center">
              <span className="text-white font-bold text-xs">P</span>
            </div>
            Products & Services
          </h3>

          <div className="space-y-4">
            {fields.map((field, index) => (
              <div
                key={field.id}
                className="grid grid-cols-12 gap-3 items-start p-4 rounded-xl bg-gray-50 dark:bg-gray-900/50 border border-gray-100 dark:border-gray-800"
              >
                <div className="col-span-12 sm:col-span-4">
                  <Label className="text-xs font-medium text-gray-500 mb-1 block">Product Name</Label>
                  <FormField
                    control={form.control}
                    name={`items.${index}.name`}
                    render={({ field }) => (
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="Product Name"
                          className="h-10 rounded-lg border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800"
                          onChange={(e) => {
                            field.onChange(e);
                            const items = form.getValues('items');
                            items[index].name = e.target.value;
                            onChange({ ...data, items });
                          }}
                        />
                      </FormControl>
                    )}
                  />
                  {form.formState.errors.items?.[index]?.name && (
                    <p className="text-xs text-red-500 mt-1">{form.formState.errors.items[index]?.name?.message}</p>
                  )}
                </div>

                <div className="col-span-6 sm:col-span-2">
                  <Label className="text-xs font-medium text-gray-500 mb-1 block">Qty</Label>
                  <FormField
                    control={form.control}
                    name={`items.${index}.quantity`}
                    render={({ field }) => (
                      <FormControl>
                        <Input
                          type="number"
                          {...field}
                          min={1}
                          className="h-10 rounded-lg border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800"
                          onChange={(e) => {
                            field.onChange(e);
                            const items = form.getValues('items');
                            items[index].quantity = Number(e.target.value);
                            onChange({ ...data, items });
                          }}
                        />
                      </FormControl>
                    )}
                  />
                </div>

                <div className="col-span-6 sm:col-span-2">
                  <Label className="text-xs font-medium text-gray-500 mb-1 block">Price</Label>
                  <FormField
                    control={form.control}
                    name={`items.${index}.unitPrice`}
                    render={({ field }) => (
                      <FormControl>
                        <Input
                          type="number"
                          {...field}
                          min={0}
                          className="h-10 rounded-lg border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800"
                          onChange={(e) => {
                            field.onChange(e);
                            const items = form.getValues('items');
                            items[index].unitPrice = Number(e.target.value);
                            onChange({ ...data, items });
                          }}
                        />
                      </FormControl>
                    )}
                  />
                </div>

                <div className="col-span-6 sm:col-span-2">
                  <Label className="text-xs font-medium text-gray-500 mb-1 block">Tax %</Label>
                  <FormField
                    control={form.control}
                    name={`items.${index}.taxPercent`}
                    render={({ field }) => (
                      <FormControl>
                        <Input
                          type="number"
                          {...field}
                          min={0}
                          max={100}
                          className="h-10 rounded-lg border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800"
                          onChange={(e) => {
                            field.onChange(e);
                            const items = form.getValues('items');
                            items[index].taxPercent = Number(e.target.value);
                            onChange({ ...data, items });
                          }}
                        />
                      </FormControl>
                    )}
                  />
                </div>

                <div className="col-span-6 sm:col-span-1 flex flex-col justify-center">
                  <Label className="text-xs font-medium text-gray-500 mb-1 block">Total</Label>
                  <div className="text-sm font-semibold text-gray-900 dark:text-white pt-1">
                    ₹{(data.items[index]?.quantity * data.items[index]?.unitPrice * (1 + data.items[index]?.taxPercent / 100)).toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                  </div>
                </div>

                <div className="col-span-1 flex items-center justify-center pt-5">
                  <button
                    type="button"
                    onClick={() => {
                      if (fields.length > 1) {
                        remove(index);
                        const items = form.getValues('items');
                        items.splice(index, 1);
                        onChange({ ...data, items });
                      }
                    }}
                    className="text-gray-400 hover:text-red-500 transition-colors"
                    disabled={fields.length <= 1}
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}

            <Button
              type="button"
              variant="outline"
              className="w-full h-11 rounded-xl border-dashed border-gray-300 dark:border-gray-600 hover:border-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950/30 transition-all"
              onClick={() => {
                append({ id: Math.random().toString(36).substring(2, 9), name: '', quantity: 1, unitPrice: 0, taxPercent: 18, total: 0 });
                const items = form.getValues('items');
                items.push({ id: Math.random().toString(36).substring(2, 9), name: '', quantity: 1, unitPrice: 0, taxPercent: 18, total: 0 });
                onChange({ ...data, items });
              }}
            >
              <Plus className="w-4 h-4 mr-2" />
              Add Product
            </Button>
          </div>
        </div>

        {/* Summary Settings */}
        <div className="bg-white dark:bg-gray-800/50 rounded-2xl border border-gray-200 dark:border-gray-700 p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-5 flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-purple-500 flex items-center justify-center">
              <span className="text-white font-bold text-xs">S</span>
            </div>
            Summary
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label className="text-sm font-medium text-gray-700 dark:text-gray-300">Discount</Label>
              <div className="flex gap-2">
                <FormField
                  control={form.control}
                  name="discount"
                  render={({ field }) => (
                    <FormControl>
                      <Input
                        type="number"
                        {...field}
                        min={0}
                        className="h-11 rounded-xl border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/50"
                        onChange={(e) => {
                          field.onChange(e);
                          onChange({ ...data, discount: Number(e.target.value) });
                        }}
                      />
                    </FormControl>
                  )}
                />
                <FormField
                  control={form.control}
                  name="discountType"
                  render={({ field }) => (
                    <FormControl>
                      <Select
                        value={field.value}
                        onValueChange={(v) => {
                          field.onChange(v);
                          onChange({ ...data, discountType: v as 'fixed' | 'percent' });
                        }}
                      >
                        <SelectTrigger className="h-11 rounded-xl border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/50 w-24">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="fixed">₹</SelectItem>
                          <SelectItem value="percent">%</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormControl>
                  )}
                />
              </div>
            </div>

            <FormField
              control={form.control}
              name="shipping"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-medium text-gray-700 dark:text-gray-300">Shipping</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      {...field}
                      min={0}
                      className="h-11 rounded-xl border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/50"
                      onChange={(e) => {
                        field.onChange(e);
                        onChange({ ...data, shipping: Number(e.target.value) });
                      }}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
        </div>

        {/* Notes */}
        <div className="bg-white dark:bg-gray-800/50 rounded-2xl border border-gray-200 dark:border-gray-700 p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-5 flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-pink-500 to-rose-500 flex items-center justify-center">
              <span className="text-white font-bold text-xs">N</span>
            </div>
            Notes & Terms
          </h3>

          <div className="space-y-4">
            <FormField
              control={form.control}
              name="paymentTerms"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-medium text-gray-700 dark:text-gray-300">Payment Terms</FormLabel>
                  <FormControl>
                    <Textarea
                      {...field}
                      className="min-h-[80px] rounded-xl border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/50 resize-none"
                      onChange={(e) => {
                        field.onChange(e);
                        onChange({ ...data, paymentTerms: e.target.value });
                      }}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="termsAndConditions"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-medium text-gray-700 dark:text-gray-300">Terms & Conditions</FormLabel>
                  <FormControl>
                    <Textarea
                      {...field}
                      className="min-h-[80px] rounded-xl border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/50 resize-none"
                      onChange={(e) => {
                        field.onChange(e);
                        onChange({ ...data, termsAndConditions: e.target.value });
                      }}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="notes"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-medium text-gray-700 dark:text-gray-300">Additional Notes</FormLabel>
                  <FormControl>
                    <Textarea
                      {...field}
                      placeholder="Any additional notes..."
                      className="min-h-[80px] rounded-xl border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/50 resize-none"
                      onChange={(e) => {
                        field.onChange(e);
                        onChange({ ...data, notes: e.target.value });
                      }}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
        </div>
      </form>
    </Form>
  );
}

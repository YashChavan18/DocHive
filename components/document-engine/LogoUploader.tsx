'use client';

import { useState } from 'react';
import { Upload, X } from 'lucide-react';
import { cn } from '@/lib/utils';

interface LogoUploaderProps {
  logoUrl: string | null;
  onLogoChange: (url: string | null) => void;
}

export function LogoUploader({ logoUrl, onLogoChange }: LogoUploaderProps) {
  const [dragActive, setDragActive] = useState(false);

  const handleFile = (file: File) => {
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (e) => {
        onLogoChange(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') setDragActive(true);
    if (e.type === 'dragleave') setDragActive(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files?.[0]) handleFile(e.dataTransfer.files[0]);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) handleFile(e.target.files[0]);
  };

  if (logoUrl) {
    return (
      <div className="relative group inline-block">
        <img src={logoUrl} alt="Business Logo" className="h-20 w-auto object-contain rounded-lg border border-gray-200 dark:border-gray-700" />
        <button
          onClick={() => onLogoChange(null)}
          className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-red-500 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-md"
        >
          <X className="w-3 h-3" />
        </button>
      </div>
    );
  }

  return (
    <div
      className={cn(
        'relative border-2 border-dashed rounded-xl p-6 text-center transition-all cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800',
        dragActive ? 'border-blue-500 bg-blue-50 dark:bg-blue-950/30' : 'border-gray-300 dark:border-gray-700'
      )}
      onDragEnter={handleDrag}
      onDragLeave={handleDrag}
      onDragOver={handleDrag}
      onDrop={handleDrop}
      onClick={() => document.getElementById('logo-upload')?.click()}
    >
      <Upload className="w-8 h-8 mx-auto text-gray-400 dark:text-gray-500 mb-2" />
      <p className="text-sm font-medium text-gray-700 dark:text-gray-300">Click to upload logo</p>
      <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">PNG, JPG up to 2MB</p>
      <input
        id="logo-upload"
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleChange}
      />
    </div>
  );
}

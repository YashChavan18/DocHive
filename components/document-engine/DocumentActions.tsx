'use client';

import { useRef, useCallback } from 'react';
import { Download, Printer, RotateCcw, Share2 } from 'lucide-react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { Button } from '@/components/ui/button';

interface DocumentActionsProps {
  previewRef: React.RefObject<HTMLDivElement>;
  fileName: string;
  onReset: () => void;
}

export function DocumentActions({ previewRef, fileName, onReset }: DocumentActionsProps) {
  const handleDownload = useCallback(async () => {
    if (!previewRef.current) return;
    const element = previewRef.current;
    const canvas = await html2canvas(element, {
      scale: 2,
      useCORS: true,
      backgroundColor: '#ffffff',
    });
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF('p', 'mm', 'a4');
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();
    const imgWidth = canvas.width;
    const imgHeight = canvas.height;
    const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
    const imgX = (pdfWidth - imgWidth * ratio) / 2;
    const imgY = 0;
    pdf.addImage(imgData, 'PNG', imgX, imgY, imgWidth * ratio, imgHeight * ratio);
    pdf.save(`${fileName}.pdf`);
  }, [previewRef, fileName]);

  const handlePrint = useCallback(() => {
    if (!previewRef.current) return;
    const printWindow = window.open('', '_blank');
    if (!printWindow) return;
    const html = `
      <html>
        <head>
          <title>${fileName}</title>
          <style>
            @media print { body { margin: 0; } }
            body { margin: 20px; font-family: system-ui, sans-serif; }
          </style>
        </head>
        <body>${previewRef.current.innerHTML}</body>
      </html>
    `;
    printWindow.document.write(html);
    printWindow.document.close();
    printWindow.focus();
    setTimeout(() => {
      printWindow.print();
      printWindow.close();
    }, 250);
  }, [previewRef, fileName]);

  return (
    <div className="flex flex-wrap gap-3">
      <Button
        onClick={handleDownload}
        className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white rounded-xl shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300 hover:scale-[1.02]"
      >
        <Download className="w-4 h-4 mr-2" />
        Download PDF
      </Button>
      <Button
        onClick={handlePrint}
        variant="outline"
        className="border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-xl transition-all duration-300 hover:scale-[1.02]"
      >
        <Printer className="w-4 h-4 mr-2" />
        Print
      </Button>
      <Button
        onClick={onReset}
        variant="outline"
        className="border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-xl transition-all duration-300 hover:scale-[1.02]"
      >
        <RotateCcw className="w-4 h-4 mr-2" />
        Reset
      </Button>
      <Button
        disabled
        variant="outline"
        className="border-gray-300 dark:border-gray-600 rounded-xl opacity-50 cursor-not-allowed"
      >
        <Share2 className="w-4 h-4 mr-2" />
        Share
      </Button>
    </div>
  );
}

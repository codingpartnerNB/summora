'use client';

import React, { forwardRef, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input';
import { Upload, FileText, Loader2 } from 'lucide-react';

interface UploadFormInputProps {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  isLoading: boolean;
}

const UploadInputForm = forwardRef<HTMLFormElement, UploadFormInputProps>(({ onSubmit, isLoading }, ref) => {
  const [isDragging, setIsDragging] = useState(false);
  const [fileName, setFileName] = useState('');

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      setFileName(files[0].name);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFileName(e.target.files[0].name);
    }
  };

  return (
    <form action="" ref={ref} className="flex flex-col gap-6" onSubmit={onSubmit}>
      <div 
        className={`relative border-2 border-dashed rounded-2xl p-8 text-center transition-all duration-300 ${
          isDragging 
            ? 'border-rose-400 bg-rose-50/50' 
            : 'border-gray-300 hover:border-rose-300 bg-gray-50/50'
        }`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <div className="flex flex-col items-center justify-center gap-4">
          <div className="p-3 bg-gradient-to-br from-rose-100 to-pink-100 rounded-full">
            <Upload className="w-8 h-8 text-rose-600" />
          </div>
          
          <div className="space-y-2">
            <p className="text-lg font-semibold text-gray-900">
              {fileName ? fileName : 'Drag & drop your PDF here'}
            </p>
            <p className="text-sm text-gray-500">
              or click to browse files
            </p>
          </div>
          
          <Input 
            type="file" 
            name="file" 
            id="file" 
            accept="application/pdf" 
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            onChange={handleFileChange}
            required 
            disabled={isLoading}
          />
        </div>
      </div>
      
      <Button 
        type="submit" 
        className="w-full py-6 rounded-xl bg-gradient-to-r from-rose-600 to-pink-600 text-white font-semibold text-lg hover:from-rose-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl group"
        disabled={isLoading || !fileName}
      >
        {isLoading ? (
          <>
            <Loader2 className="w-5 h-5 mr-2 animate-spin" />
            Processing...
          </>
        ) : fileName ? (
          <>
            <FileText className="w-5 h-5 mr-2" />
            Process PDF with AI
          </>
        ) : (
          'Select a PDF to continue'
        )}
      </Button>
    </form>
  )
});

export default UploadInputForm
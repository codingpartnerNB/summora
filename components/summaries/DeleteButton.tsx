'use client';

import React, { useState, useTransition } from 'react';
import { Button } from '@/components/ui/button';
import { Trash2, X, AlertTriangle } from 'lucide-react';
import * as Dialog from '@radix-ui/react-dialog';
import { deleteSummaryAction } from '@/actions/SummaryActions';
import { toast } from 'sonner';

interface DeleteButtonProps {
  summaryId: string;
}

const DeleteButton = ({ summaryId }: DeleteButtonProps) => {
  const [open, setOpen] = useState(false);
  const [isPending, startTransition] = useTransition();
  
  const handleDelete = async () => {
    startTransition(async()=>{
        const result = await deleteSummaryAction({ summaryId });
        
        if (!result.success) {
          toast.error('Error', {
            description: 'Failed to delete summary'
          });
        } else {
          toast.success('Success', {
            description: 'Summary deleted successfully'
          });
        }
        setOpen(false);
    })
  }

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <Button
          variant={'ghost'}
          size="icon"
          className="text-gray-500 hover:text-rose-600 bg-gray-50 hover:bg-rose-50 border border-gray-300 hover:border-rose-300 transition-colors duration-200 p-2"
        >
          <Trash2 className="w-4 h-4" />
        </Button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 animate-fadeIn" />
        
        <Dialog.Content className="fixed left-1/2 top-1/2 z-50 w-full max-w-md -translate-x-1/2 -translate-y-1/2 rounded-xl bg-white p-6 shadow-xl focus:outline-none animate-scaleIn">
          {/* Close button */}
          <Dialog.Close className="absolute right-3 top-3 p-1.5 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-200">
            <X className="h-4 w-4 text-gray-600" />
            <span className="sr-only">Close</span>
          </Dialog.Close>
          
          <div className="flex flex-col items-center text-center">
            {/* Warning icon */}
            <div className="flex items-center justify-center w-14 h-14 rounded-full bg-rose-100 mb-4">
              <AlertTriangle className="w-7 h-7 text-rose-600" fill="currentColor" fillOpacity={0.2} />
            </div>
            
            <Dialog.Title className="text-xl font-semibold text-gray-900 mb-2">
              Delete Summary
            </Dialog.Title>
            
            <Dialog.Description className="text-gray-500 mb-6">
              Are you sure you want to delete this summary? This action cannot be undone.
            </Dialog.Description>
            
            <div className="flex gap-3 w-full">
              <Dialog.Close asChild>
                <Button
                  variant="outline"
                  className="flex-1 border-gray-200 bg-gray-50 hover:text-gray-700 hover:bg-gray-100"
                  disabled={isPending}
                >
                  Cancel
                </Button>
              </Dialog.Close>
              
              <Button
                variant="destructive"
                onClick={handleDelete}
                className="flex-1 bg-rose-600 hover:bg-rose-700 focus:ring-rose-500 flex items-center justify-center gap-1"
                disabled={isPending}
              >
                {isPending ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-1"></div>
                    Deleting...
                  </>
                ) : (
                  <>
                    Delete
                  </>
                )}
              </Button>
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default DeleteButton;
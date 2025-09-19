import { ExternalLink, FileText } from 'lucide-react';
import React from 'react'
import { Button } from '@/components/ui/button';
import DownloadSummaryButton from './DownloadSummaryButton';

const SourceInfo = ({file_name, originalFileUrl, title, summaryText, createdAt}:{file_name:string; originalFileUrl:string; title:string; summaryText:string; createdAt:string}) => {
    return (
        <div className='flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-4 bg-white/80 backdrop-blur-sm rounded-xl border border-rose-100/40 shadow-sm mb-6'>
            <div className="flex items-center gap-3 text-gray-700">
                <div className="p-2 bg-rose-100 rounded-lg">
                    <FileText className='h-5 w-5 text-rose-600' />
                </div>
                <div>
                    <p className="text-sm font-medium text-gray-500">Source Document</p>
                    <p className="text-base font-medium text-gray-800">{file_name}</p>
                </div>
            </div>
            
            <div className="flex flex-wrap gap-3">
                <Button 
                    variant={'outline'} 
                    size={'sm'} 
                    className='h-9 px-4 text-rose-700 border-rose-200 hover:text-rose-800 hover:bg-rose-50 hover:border-rose-300 transition-all duration-300 rounded-lg group' 
                    asChild
                >
                    <a href={originalFileUrl} target='_blank' rel='noopener noreferrer'>
                        <ExternalLink className='h-4 w-4 mr-2 transition-transform group-hover:scale-110' />
                        View Original
                    </a>
                </Button>
                
                <DownloadSummaryButton 
                    title={title} 
                    summaryText={summaryText} 
                    fileName={file_name} 
                    createdAt={createdAt} 
                />
            </div>
        </div>
    )
}

export default SourceInfo
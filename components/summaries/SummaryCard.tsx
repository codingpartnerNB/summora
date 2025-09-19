import React from 'react'
import { Card } from '@/components/ui/card'
import DeleteButton from './DeleteButton';
import Link from 'next/link';
import { FileText, Calendar, ArrowRight } from 'lucide-react';
import { cn, formatFileName } from '@/lib/utils';
import { formatDistanceToNow } from 'date-fns';
import { MotionDiv } from '@/components/common/MotionWrapper';
import { itemVariants } from '@/utils/constants';

const SummaryHeader = ({fileUrl, title, createdAt}:{fileUrl: string; title: string|null; createdAt: string;})=>{
    return (
      <div className='flex items-start gap-3'>
        <div className="flex-shrink-0 p-2 bg-rose-50 rounded-lg">
          <FileText className='w-5 h-5 text-rose-500' />
        </div>
        <div className="flex-1 min-w-0">
            <h3 className="text-base md:text-lg font-semibold text-gray-900 truncate">{title || formatFileName(fileUrl)}</h3>
            <div className="flex items-center mt-1 text-gray-500 text-sm">
              <Calendar className="w-4 h-4 mr-1" />
              <span>{formatDistanceToNow(new Date(createdAt), {addSuffix: true})}</span>
            </div>
        </div>
      </div>
    )
}

const StatusBadge = ({ status }: { status: string }) => {
    return (
        <span className={cn(
          'px-3 py-1.5 text-xs font-medium rounded-full capitalize flex items-center',
          status === 'completed' 
            ? 'bg-green-100 text-green-800' 
            : 'bg-amber-100 text-amber-800'
        )}>
          <span className={cn(
            'w-2 h-2 rounded-full mr-2',
            status === 'completed' ? 'bg-green-500' : 'bg-amber-500'
          )}></span>
          {status}
        </span>
    )
}

const SummaryCard = ({summary}:{summary:any}) => {
  return (
    <MotionDiv variants={itemVariants} initial="hidden" animate="visible" whileHover={{scale: 1.02, transition: {duration: 0.2, ease: 'easeOut'}}} className="group">
      <Card className='relative h-full overflow-hidden transition-all duration-300 border border-gray-200 hover:border-rose-200 hover:shadow-lg'>
        <div className="absolute top-3 right-3 opacity-80 group-hover:opacity-100 transition-opacity">
            <DeleteButton summaryId={summary.id} />
        </div>
        <Link href={`summaries/${summary.id}`} className='block p-5'>
            <div className='flex flex-col gap-4'>
                <SummaryHeader fileUrl={summary.original_file_url} title={summary.title} createdAt={summary.created_at} />
                
                <div className="bg-gray-50 p-3 rounded-lg border border-gray-100 mt-2">
                  <p className='text-gray-600 line-clamp-2 text-sm leading-relaxed'>
                    {summary.summary_text}
                  </p>
                </div>
                
                <div className="flex justify-between items-center mt-2">
                    <StatusBadge status={summary.status} />
                    <div className="flex items-center text-sm text-rose-600 font-medium group-hover:translate-x-1 transition-transform">
                      <span>View details</span>
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </div>
                </div>
            </div>
        </Link>
      </Card>
    </MotionDiv>
  )
}

export default SummaryCard
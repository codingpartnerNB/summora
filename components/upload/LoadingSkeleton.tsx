'use client'
import React from 'react'
import { Card } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'
import { MotionDiv } from '@/components/common/MotionWrapper'

const LoadingSkeleton = () => {
  return (
    <Card className='relative px-2 h-[500px] sm:h-[600px] lg:h-[700px] w-full overflow-hidden bg-linear-to-br from-background via-background/95 to-rose-500/10 backdrop-blur-lg shadow-2xl rounded-3xl border border-rose-500/10'>
      {/* Loading Progress Bar */}
      <div className='absolute top-0 left-0 right-0 z-20 bg-background/80 backdrop-blur-xs pt-4 pb-2 border-b border-gray-200'>
        <div className="px-4 flex gap-1.5">
          {[1, 2, 3].map((_, index) => (
            <div key={index} className='h-1.5 flex-1 rounded-full bg-gray-200 overflow-hidden'>
              <div className='h-full bg-gray-300 w-full' />
            </div>
          ))}
        </div>
      </div>

      {/* Loading Content */}
      <MotionDiv 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 0.2, ease: 'easeInOut' }} 
        className="h-full overflow-y-auto scrollbar-hide pt-8 sm:pt-16 pb-20 sm:pb-24"
      >
        <div className="px-2 sm:px-6">
          {/* Loading Title */}
          <div className='flex flex-col gap-2 mb-6 sticky top-0 pt-2 pb-4 bg-background/80 backdrop-blur-xs z-10'>
            <Skeleton className="h-8 w-3/4 mx-auto bg-gray-200 rounded-lg" />
          </div>

          {/* Loading Content Section */}
          <div className='space-y-4'>
            {[1, 2, 3, 4].map((_, index) => (
              <div key={index} className='group relative bg-linear-to-br from-gray-200/[0.08] to-gray-400/[0.03] p-4 rounded-2xl border border-gray-500/10'>
                <div className='flex items-start gap-3'>
                  <Skeleton className="w-6 h-6 rounded-full bg-gray-300" />
                  <Skeleton className="h-5 flex-1 bg-gray-200 rounded-lg" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </MotionDiv>

      {/* Loading Navigation Controls */}
      <div className='absolute bottom-0 left-0 right-0 p-4 bg-background/80 backdrop-blur-xs border-t border-rose-500/10'>
        <div className="flex justify-between items-center">
          <Skeleton className="w-12 h-12 rounded-full bg-gray-200" />
          <div className="flex gap-2">
            {[1, 2, 3].map((_, index) => (
              <Skeleton key={index} className="w-2 h-2 rounded-full bg-gray-300" />
            ))}
          </div>
          <Skeleton className="w-12 h-12 rounded-full bg-gray-200" />
        </div>
      </div>
    </Card>
  )
}

export default LoadingSkeleton
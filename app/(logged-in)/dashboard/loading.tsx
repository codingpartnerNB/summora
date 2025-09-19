import BackgroundGradient from '@/components/common/BackgroundGradient'
import { MotionDiv, MotionH1, MotionP } from '@/components/common/MotionWrapper'
import { Skeleton } from '@/components/ui/skeleton'
import { itemVariants } from '@/utils/constants'
import React from 'react'

function HeaderSkeleton(){
    return (
        <div className="flex flex-col sm:flex-row gap-4 mb-8 justify-between items-start">
            <div className='flex flex-col gap-4 flex-1'>
                <div className="flex items-center gap-3">
                    <MotionH1 variants={itemVariants} initial="hidden" whileInView="visible" className='text-4xl font-bold tracking-tight'>
                        <Skeleton className='h-10 w-48 bg-gray-300' />
                    </MotionH1>
                </div>
                <MotionP variants={itemVariants} initial="hidden" animate="visible" className='max-w-lg'>
                    <Skeleton className='h-6 w-80 bg-gray-300' />
                </MotionP>
            </div>
            <MotionDiv variants={itemVariants} initial="hidden" animate="visible" className='self-start sm:self-auto'>
                <Skeleton className='h-10 w-36 rounded-xl bg-gray-200' />
            </MotionDiv>
        </div>
    )
}

function SummaryCardSkeleton(){
    return (
        <MotionDiv 
            variants={itemVariants} 
            initial="hidden" 
            animate="visible" 
            className='rounded-2xl border border-rose-100/10 bg-linear-to-br from-background via-background/95 to-rose-500/10 backdrop-blur-sm shadow-sm overflow-hidden'
        >
            <div className="p-5 space-y-4">
                {/* Header */}
                <div className="flex items-start gap-3">
                    <Skeleton className='h-8 w-8 rounded-lg bg-gray-300' />
                    <div className="flex-1 space-y-2">
                        <Skeleton className='h-6 w-4/5 bg-gray-200' />
                        <Skeleton className='h-4 w-3/5 bg-gray-200' />
                    </div>
                </div>
                
                {/* Content */}
                <div className="space-y-3">
                    <Skeleton className='h-4 w-full bg-gray-200' />
                    <Skeleton className='h-4 w-5/6 bg-gray-200' />
                    <Skeleton className='h-4 w-4/6 bg-gray-200' />
                </div>
                
                {/* Footer */}
                <div className="flex justify-between items-center pt-2">
                    <Skeleton className='h-6 w-20 rounded-full bg-gray-300' />
                    <Skeleton className='h-8 w-8 rounded-full bg-gray-300' />
                </div>
            </div>
        </MotionDiv>
    )
}

const LoadingSkeleton = () => {
  return (
    <div className='min-h-screen relative'>
        <BackgroundGradient className='from-emerald-200 via-teal-200 to-cyan-200' />
        <div className="container mx-auto px-4 py-8 sm:py-16">
            <HeaderSkeleton />
            <div className='grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-3'>
                {Array.from({length: 3}).map((_, index) => (
                    <SummaryCardSkeleton key={index} />
                ))}
            </div>
        </div>
    </div>
  )
}

export default LoadingSkeleton
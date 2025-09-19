import BackgroundGradient from '@/components/common/BackgroundGradient'
import { Skeleton } from '@/components/ui/skeleton'
import LoadingSkeleton from '@/components/upload/LoadingSkeleton'
import React from 'react'

function HeaderSkeleton(){
    return (
        <div className='space-y-6'>
            <div className="flex flex-wrap items-center gap-4">
                <Skeleton className='h-7 w-32 rounded-full bg-gray-200' />
                <Skeleton className='h-7 w-32 rounded-full bg-gray-200' />
                <Skeleton className='h-7 w-32 rounded-full bg-gray-200' />
            </div>
            <Skeleton className='h-12 w-3/5 rounded-lg bg-gray-300' />
        </div>
    )
}

const LoadingSummary = () => {
  return (
    <div className="relative isolate min-h-screen bg-gradient-to-b from-rose-50/40 to-white overflow-visible">
        <BackgroundGradient className=' from-rose-400 via-rose-300 to-orange-300' />
        <div className="container mx-auto flex flex-col gap-4 relative z-10">
            <div className="px-1 sm:px-2 lg:px-6 py-6 sm:py-12 lg:py-20">
                <div className="flex flex-col gap-8">
                    <HeaderSkeleton />

                    <div className='flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-4 bg-white/80 backdrop-blur-sm rounded-xl border border-rose-100/40 shadow-sm mb-6'>
                        <div className="flex items-center gap-3">
                              <Skeleton className='h-10 w-10 rounded-lg bg-gray-300' />
                            <div className='flex-1 space-y-2'>
                              <Skeleton className='w-36 h-4 bg-gray-200' />
                              <Skeleton className='w-72 h-6 bg-gray-200' />
                            </div>
                        </div>
                        
                        <div className="flex flex-wrap gap-3">
                            <Skeleton className='w-32 h-10 bg-gray-200' />
                            <Skeleton className='w-52 h-10 bg-gray-200' />
                        </div>
                    </div>

                    <div className="relative overflow-hidden">
                        <div className="relative max-w-4xl mx-auto p-8 lg:p-10 bg-white/90 backdrop-blur-md rounded-2xl border border-rose-100/30 shadow-xl">

                            {/* Gradient Background */}
                            <div className="absolute inset-0 bg-gradient-to-br from-rose-50/50 via-orange-50/30 to-transparent opacity-50 rounded-3xl" />

                            {/* Icon */}
                            <div className="absolute top-4 right-4">
                                <Skeleton className='h-6 w-14 rounded-full bg-gray-200' />
                            </div>
                            <div className="relative mt-5 w-full mx-auto xl:w-[650px]">
                                <LoadingSkeleton />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LoadingSummary

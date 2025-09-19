import React from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Calendar, ChevronLeft, Clock, Sparkles } from 'lucide-react'
import { Badge } from '@/components/ui/badge'

const SummaryHeader = ({title, createdAt, readingTime}:{title:string;createdAt:string;readingTime:number}) => {
  return (
    <div className="flex flex-col sm:flex-row gap-4 mb-6 justify-between">
        <div className='space-y-6 flex-1'>
            <div className='flex flex-wrap items-center gap-3'>
                <Badge variant={'secondary'} className='relative px-4 py-1.5 text-sm font-medium bg-gradient-to-r from-rose-50 to-pink-50 backdrop-blur-xs rounded-full hover:bg-gradient-to-r hover:from-rose-100 hover:to-pink-100 transition-all duration-300 shadow-xs hover:shadow-md border border-rose-100/50 group'>
                    <Sparkles className='h-4 w-4 mr-1.5 text-rose-500 transition-transform group-hover:scale-110' />
                    AI Summary
                </Badge>
                <div className='flex items-center gap-2 text-sm text-gray-600 bg-white/80 backdrop-blur-xs px-3 py-1.5 rounded-full border border-gray-100 shadow-xs'>
                    <Calendar className='h-4 w-4 text-rose-500' />
                    {new Date(createdAt).toLocaleDateString('en-US', {year:'numeric', month:'long', day:'numeric'})}
                </div>
                <div className='flex items-center gap-2 text-sm text-gray-600 bg-white/80 backdrop-blur-xs px-3 py-1.5 rounded-full border border-gray-100 shadow-xs'>
                    <Clock className='h-4 w-4 text-rose-500' />
                    {readingTime} min read
                </div>
            </div>
            <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight bg-gradient-to-r from-rose-900 via-rose-500 to-orange-400 bg-clip-text text-transparent pb-2'>
                {title}
            </h1>
        </div>
        <div className='self-start sm:self-auto'>
            <Link href="/dashboard">
                <Button variant={'outline'} size={'sm'} className='group flex items-center gap-2 hover:bg-rose-50 transition-all duration-300 rounded-full px-4 py-2 border-rose-200/60 hover:border-rose-300 hover:shadow-md bg-white/80 backdrop-blur-xs'>
                    <ChevronLeft className='h-4 w-4 text-rose-500 transition-transform group-hover:-translate-x-1' />
                    <span className='text-sm text-gray-700 font-medium'>Back to Dashboard</span>
                </Button>
            </Link>
        </div>
    </div>
  )
}

export default SummaryHeader
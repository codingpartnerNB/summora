import React from 'react'
import { Button } from '@/components/ui/button'
import { ArrowRight, Sparkles } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'
import { MotionDiv, MotionH1, MotionH2, MotionSection, MotionSpan } from '@/components/common/MotionWrapper'
import { containerVariants, itemVariants } from '@/utils/constants'

const buttonVariants = {
  scale: 1.05,
  transition: {
    type: 'spring' as const,
    stiffness: 300,
    damping: 10,
  },
}

const HeroSection = () => {
  return (
    <MotionSection variants={containerVariants} initial="hidden" animate="visible" className='relative mx-auto flex flex-col z-0 items-center justify-center py-16 sm:py-20 lg:pb-28 transition-all animate-in lg:px-12 max-w-7xl'>
      <MotionDiv variants={itemVariants} className='relative p-[1px] overflow-hidden rounded-full bg-linear-to-r from-rose-200 via-rose-500 to-rose-800 animate-gradient-x group'>
        <Badge variant={'secondary'} className='relative px-6 py-2 text-base font-medium rounded-full transition-colors duration-200 bg-white group-hover:bg-linear-to-r from-rose-50 via-rose-100 to-rose-200'>
          <Sparkles style={{width: '20px', height: '20px'}} className='mr-2 text-rose-600 animate-pulse' />
          <p className='text-base text-rose-600'>Powered By AI</p>
        </Badge>
      </MotionDiv>
      <MotionH1 variants={itemVariants} className='font-bold py-6 text-center bg-gradient-to-r from-gray-900 to-rose-700 bg-clip-text text-transparent'>
        Transform PDFs into{' '}
        <span className='relative inline-block'>
          <MotionSpan whileHover={buttonVariants} className='relative z-10 px-2 text-rose-800'>concise</MotionSpan> 
          <span className="absolute inset-0 bg-rose-200/50 -rotate-2 rounded-lg transform -skew-y-1" aria-hidden="true"></span>
        </span>{' '}
        summaries
      </MotionH1>
      <MotionH2 variants={itemVariants} className='text-lg sm:text-xl lg:text-2xl text-center px-4 lg:px-0 lg:max-w-4xl text-gray-600'>Get a beautiful summary reel of the document in seconds.</MotionH2>
      <MotionDiv variants={itemVariants} whileHover={buttonVariants} className='relative mt-8 lg:mt-16'>
        <Button
          variant={'link'}
          className="relative inline-flex items-center justify-center px-8 sm:px-10 lg:px-12 py-6 sm:py-7 lg:py-8 font-bold text-white overflow-hidden rounded-full group transition-all duration-500 ease-out hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/40 bg-gradient-to-r from-slate-900 via-pink-600 to-rose-600"
        >
          {/* Animated Gradient Background */}
          <span className="absolute inset-0 bg-gradient-to-r from-rose-600 via-pink-700 to-slate-900 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></span>
          
          {/* Shine Effect */}
          <span className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/30 to-transparent transform -translate-y-full group-hover:translate-y-0 transition-transform duration-700"></span>
          
          {/* Animated Background Circle */}
          <span className="absolute bottom-0 right-0 w-72 h-72 mb-32 mr-4 transition-all duration-700 origin-bottom-left transform rotate-45 translate-x-24 bg-pink-400 rounded-full opacity-30 group-hover:rotate-12 group-hover:scale-125 group-hover:opacity-40 ease"></span>
          
          {/* Button Text */}
          <span className="relative flex items-center text-white text-base sm:text-lg lg:text-xl tracking-wide group-hover:tracking-wider transition-all duration-300">
            <Link href='/#pricing' className='flex items-center'>
              <span>Try Summora</span>
              <ArrowRight className="ml-3 arrow-animate transition-all duration-200" />
            </Link>
          </span>
        </Button>

        {/* Floating elements around button */}
        <div className="absolute -top-2 -right-4 w-4 h-4 bg-rose-400 rounded-full animate-bounce animation-delay-1000"></div>
        <div className="absolute -bottom-2 -left-4 w-3 h-3 bg-pink-400 rounded-full animate-bounce animation-delay-500"></div>
      </MotionDiv>
    </MotionSection>
  )
}

export default HeroSection

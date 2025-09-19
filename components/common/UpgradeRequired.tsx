import React from 'react'
import BackgroundGradient from './BackgroundGradient'
import { ArrowRight, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { MotionDiv, MotionH1 } from './MotionWrapper'
import { containerVariants, itemVariants } from '@/utils/constants'

const buttonVariants = {
  scale: 1.05,
  transition: {
    type: 'spring' as const,
    stiffness: 300,
    damping: 10,
  },
}

const UpgradeRequired = () => {
  return (
    <MotionDiv variants={containerVariants} initial="hidden" whileInView="visible" className='relative min-h-[50vh] overflow-visible'>
        <BackgroundGradient className='from-rose-400 via-rose-300 to-orange-200' />
        
        {/* Decorative elements */}
        <div className="absolute top-10 right-10 opacity-10">
            <Sparkles className="w-24 h-24 text-rose-600" />
        </div>
        <div className="absolute bottom-10 left-10 opacity-10">
            <Sparkles className="w-20 h-20 text-rose-600" />
        </div>
        
        <div className="container px-4 sm:px-8 py-16 relative z-10">
            <div className="flex flex-col items-center justify-center gap-7 text-center max-w-2xl mx-auto">
                <MotionDiv variants={itemVariants} className="flex items-center gap-3 text-rose-600 bg-rose-50 px-4 py-2 rounded-full border border-rose-200/50">
                    <Sparkles className='w-5 h-5' />
                    <span className="text-sm font-medium uppercase tracking-wider">
                        Premium Feature
                    </span>
                </MotionDiv>
                
                <MotionH1 variants={itemVariants} className='text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-normal bg-gradient-to-r from-rose-800 to-gray-800 bg-clip-text text-transparent'>
                    Subscription Required
                </MotionH1>
                
                <MotionDiv variants={itemVariants} className='text-lg leading-8 text-gray-700 bg-white/80 backdrop-blur-sm rounded-2xl p-6 border-2 border-rose-200 border-dashed shadow-sm max-w-xl'>
                    <p>You need to upgrade to the Basic Plan or the Pro Plan to access this feature 💖</p>
                </MotionDiv>
                
                <MotionDiv variants={itemVariants} whileHover={buttonVariants}>
                    <Button asChild className='relative bg-gradient-to-r from-rose-500 to-rose-600 hover:from-rose-600 hover:to-rose-700 text-white shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 rounded-xl py-4 px-6 overflow-hidden group'>
                        <div className="relative">
                            <Link href="/#pricing" className='flex gap-2 items-center relative z-10'>
                                View Pricing Plans
                                <ArrowRight className='w-4 h-4 transition-transform group-hover:translate-x-1' />
                            </Link>
                            
                            {/* Shine effect */}
                            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent group-hover:translate-x-full transition-transform duration-700 ease-out pointer-events-none"></span>
                        </div>
                    </Button>
                </MotionDiv>
            </div>
        </div>
    </MotionDiv>
  )
}

export default UpgradeRequired

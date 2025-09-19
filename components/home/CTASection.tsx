import Link from 'next/link'
import React from 'react'
import { Button } from '@/components/ui/button'
import { ArrowRight, Sparkles, Clock, Zap } from 'lucide-react'
import { MotionDiv, MotionH2, MotionP, MotionSection } from '@/components/common/MotionWrapper'
import { containerVariants, itemVariants } from '@/utils/constants'

const buttonVariants = {
  scale: 1.05,
  transition: {
    type: 'spring' as const,
    stiffness: 300,
    damping: 10,
  },
}

const CTASection = () => {
  return (
    <MotionSection variants={containerVariants} initial="hidden" whileInView="visible" className='relative py-16 lg:py-24 overflow-visible bg-transparent'>

      {/* Background elements */}
      <div aria-hidden='true' className="pointer-events-none absolute inset-0 -z-10 transform-gpu overflow-hidden blur-2xl">
          <div className="absolute left-[20%] top-0 aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-br from-rose-400/20 via-pink-400/20 to-rose-400/20 sm:left-[calc(40%-30rem)] sm:w-[40.1875rem]" style={{
              clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'
          }} />
      </div>

      {/* Background decorative elements */}
      <div className="absolute -top-20 -right-20 w-96 h-96 bg-rose-200/20 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-pink-200/20 rounded-full blur-3xl"></div>
      
      {/* Animated floating elements */}
      <div className="absolute top-1/4 left-1/4 w-8 h-8 bg-rose-300/30 rounded-full animate-float animation-delay-1000"></div>
      <div className="absolute top-1/3 right-1/4 w-6 h-6 bg-pink-300/30 rounded-full animate-float animation-delay-2000"></div>
      <div className="absolute bottom-1/4 left-1/3 w-4 h-4 bg-rose-400/40 rounded-full animate-float animation-delay-3000"></div>
      
      <div className="py-12 lg:py-24 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center justify-center space-y-8 text-center">
          {/* Icon header */}
          <div className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-rose-100 to-pink-100 rounded-2xl shadow-sm">
            <Zap className="w-8 h-8 text-rose-600 animate-pulse" />
          </div>
          
          <div className='space-y-4 max-w-3xl'>
            <MotionH2 variants={itemVariants} className='text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl leading-[1.2] bg-gradient-to-r from-gray-900 to-rose-700 bg-clip-text text-transparent'>
              Ready to Save Hours of Reading Time?
            </MotionH2>
            <MotionP variants={itemVariants} className='mx-auto text-lg text-gray-600 md:text-xl lg:text-xl/relaxed'>
              Transform lengthy documents into clear, actionable insights with our AI-powered summarizer.
            </MotionP>
          </div>
          
          {/* Stats row */}
          <div className="flex flex-wrap justify-center gap-6 py-4">
            <MotionDiv variants={itemVariants} className="flex items-center gap-2 text-sm text-gray-600 bg-white/80 px-4 py-2 rounded-full shadow-sm border border-gray-100">
              <Clock className="w-4 h-4 text-rose-500" />
              <span>Save 90% reading time</span>
            </MotionDiv>
            <MotionDiv variants={itemVariants} className="flex items-center gap-2 text-sm text-gray-600 bg-white/80 px-4 py-2 rounded-full shadow-sm border border-gray-100">
              <Sparkles className="w-4 h-4 text-rose-500" />
              <span>AI-powered summaries</span>
            </MotionDiv>
          </div>
          
          <div className='flex flex-col gap-4 min-[400px]:flex-row justify-center pt-4'>
            <MotionDiv variants={itemVariants} whileHover={buttonVariants}>
              <Button size={'lg'} className='relative w-full min-[400px]:w-auto px-8 py-6 rounded-xl bg-gradient-to-r from-rose-600 to-pink-600 text-white font-semibold text-lg shadow-lg hover:shadow-xl hover:from-rose-700 hover:to-pink-700 transition-all duration-500 ease-out group overflow-hidden'>
                {/* Shine effect */}
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-white/0 via-white/30 to-white/0 group-hover:translate-x-full transition-transform duration-700 ease-out"></span>
                
                <Link href="/#pricing" className='flex items-center justify-center gap-2 relative'>
                  Get Started
                  <ArrowRight className='h-5 w-5 transition-transform duration-300 group-hover:translate-x-1' />
                </Link>
              </Button>
            </MotionDiv>
          </div>
        </div>
      </div>
    </MotionSection>
  )
}

export default CTASection
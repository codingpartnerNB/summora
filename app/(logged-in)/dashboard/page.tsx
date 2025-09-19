import BackgroundGradient from '@/components/common/BackgroundGradient'
import { MotionDiv, MotionH1, MotionP } from '@/components/common/MotionWrapper'
import EmptySummaryState from '@/components/summaries/EmptySummaryState'
import SummaryCard from '@/components/summaries/SummaryCard'
import { Button } from '@/components/ui/button'
import getSummaries from '@/lib/summaries'
import { hasReachedUploadLimit } from '@/lib/user'
import { itemVariants } from '@/utils/constants'
import { currentUser } from '@clerk/nextjs/server'
import { ArrowRight, Plus, Crown, Sparkles } from 'lucide-react'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import React from 'react'

const page = async() => {
    const user = await currentUser();
    const userId = user?.id;
    if(!userId){
        return redirect('/sign-in');
    }

    const {hasReachedLimit, uploadLimit} = await hasReachedUploadLimit(userId);
    const summaries = await getSummaries(userId);
    
    return (
        <main className='min-h-screen relative overflow-visible'>
            <BackgroundGradient className='from-emerald-200 via-teal-200 to-cyan-200' />
            
            {/* Decorative elements */}
            <div className="absolute top-10 right-10 opacity-10">
                <Sparkles className="w-24 h-24 text-rose-400" />
            </div>
            <div className="absolute bottom-10 left-10 opacity-10">
                <Sparkles className="w-20 h-20 text-rose-400" />
            </div>
            
            <MotionDiv initial={{opacity: 0, y: 20}} animate={{opacity: 1, y: 0}} transition={{duration: 0.5}} className="container mx-auto px-4 py-8 sm:py-16 relative z-10">
                <div className='max-w-6xl mx-auto'>
                    {/* Header Section */}
                    <div className='flex flex-col sm:flex-row gap-6 mb-10 justify-between items-start'>
                        <div className='flex flex-col gap-3'>
                            <div className="flex items-center gap-3 mb-2">
                                <MotionH1 variants={itemVariants} initial="hidden" whileInView="visible" className='text-4xl font-bold tracking-tight bg-linear-to-r from-rose-700 to-gray-900 bg-clip-text text-transparent'>
                                    Your Summaries
                                </MotionH1>
                            </div>
                            <MotionP variants={itemVariants} initial="hidden" animate="visible" className='text-gray-600'>Transform your PDFs into concise, actionable insights.</MotionP>
                        </div>
                        
                        {!hasReachedLimit && (
                            <MotionDiv variants={itemVariants} initial="hidden" animate="visible" whileHover={{scale: 1.05}} className='self-start'>
                                <Button asChild className="relative bg-gradient-to-r from-rose-500 to-rose-600 hover:from-rose-600 hover:to-rose-700 text-white font-medium py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group overflow-hidden">
                                <Link href="/upload" className="flex items-center gap-2 relative z-10">
                                    <Plus className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300" />
                                    <span>New Summary</span>
                                    
                                    {/* Shine effect on hover */}
                                    <span className="absolute inset-0 flex items-center justify-center">
                                        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
                                    </span>
                                </Link>
                            </Button>
                        </MotionDiv>)}
                    </div>
                    
                    {/* Banner */}
                    {hasReachedLimit && (
                        <MotionDiv variants={itemVariants} initial="hidden" animate="visible" className='mb-6 bg-rose-50 border border-rose-200 rounded-xl p-4 text-rose-800 shadow-sm'>
                            <div className="flex items-start gap-3">
                                <Crown className="w-5 h-5 text-rose-600 mt-0.5 flex-shrink-0" />
                                <p className='text-sm'>
                                    You've reached the limit of {uploadLimit} uploads on the Basic plan.{' '}
                                    <Link href='/#pricing' className='font-medium underline underline-offset-4 inline-flex items-center gap-1 hover:text-rose-900 transition-colors'>
                                        Click here to upgrade to Pro <ArrowRight className='w-4 h-4' />
                                    </Link>{' '}
                                    for unlimited uploads.
                                </p>
                            </div>
                        </MotionDiv>
                    )}
                    
                    {/* Summaries Grid */}
                    {summaries.length > 0 ? (
                        <div className="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
                            {summaries.map((summary, index) => (
                                <SummaryCard key={index} summary={summary} />
                            ))}
                        </div>
                    ) : (
                        <EmptySummaryState />
                    )}
                </div>
            </MotionDiv>
        </main>
    )
}

export default page
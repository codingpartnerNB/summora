import BackgroundGradient from '@/components/common/BackgroundGradient';
import { MotionDiv } from '@/components/common/MotionWrapper';
import SourceInfo from '@/components/summaries/SourceInfo';
import SummaryHeader from '@/components/summaries/SummaryHeader';
import SummaryViewer from '@/components/summaries/SummaryViewer';
import { getSummaryById } from '@/lib/summaries';
import { FileText, Sparkles } from 'lucide-react';
import { notFound } from 'next/navigation';
import React from 'react'

const page = async(props: {
    params: Promise<{ id: string }>;
}) => {
    const params = await props.params;
    const id = params.id;
    const summary = await getSummaryById(id);
    if(!summary){
        notFound();
    }
    const { title, summary_text, file_name, word_count, created_at, original_file_url } = summary;
    const readingTime = Math.ceil((word_count || 0) / 200); // Assuming average reading speed of 200 wpm
    
    return (
        <div className="relative isolate min-h-screen bg-gradient-to-b from-rose-50/40 to-white overflow-visible">
            <BackgroundGradient className=' from-rose-400 via-rose-300 to-orange-300' />
            
            {/* Decorative elements */}
            <div className="absolute top-20 right-10 opacity-10">
                <Sparkles className="w-24 h-24 text-rose-500" />
            </div>
            <div className="absolute bottom-20 left-10 opacity-10">
                <Sparkles className="w-20 h-20 text-rose-500" />
            </div>
            
            <div className="container mx-auto flex flex-col gap-4 relative z-10">
                <div className="px-1 sm:px-2 lg:px-6 py-6 sm:py-12 lg:py-20">
                    <MotionDiv initial={{opacity: 0, y: 20}} animate={{opacity: 1, y: 0}} transition={{duration: 0.5}} className="flex flex-col">
                        <SummaryHeader title={title} createdAt={created_at} readingTime={readingTime} />

                        {file_name && <SourceInfo file_name={file_name} title={title} originalFileUrl={original_file_url} summaryText={summary_text} createdAt={created_at}  />}
                        
                        <MotionDiv initial={{opacity: 0, y: 20}} animate={{opacity: 1, y: 0}} transition={{duration: 0.5}} className="relative mt-6 sm:mt-10 lg:mt-14">
                            <div className="relative p-4 sm:p-8 lg:p-10 bg-white/90 backdrop-blur-md rounded-2xl sm:rounded-3xl shadow-xl border border-rose-100/30 transition-all duration-300 hover:shadow-2xl max-w-4xl mx-auto">
                                <div className="absolute inset-0 bg-gradient-to-br from-rose-50/50 via-orange-50/30 to-transparent opacity-60 rounded-2xl sm:rounded-3xl" />
                                
                                {/* Word count badge */}
                                <div className="absolute top-4 right-4 flex items-center gap-2 text-sm text-rose-700 bg-white/95 px-3 py-1.5 rounded-full shadow-md border border-rose-100/50">
                                    <FileText className='h-4 w-4 text-rose-500' />
                                    {word_count?.toLocaleString()} words
                                </div>
                                
                                <div className="relative mt-10 sm:mt-8 flex justify-center">
                                    <SummaryViewer summary={summary_text} />
                                </div>
                            </div>
                        </MotionDiv>
                    </MotionDiv>
                </div>
            </div>
        </div>
    )
}

export default page
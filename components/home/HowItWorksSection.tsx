import { BrainCircuit, FileOutput, FileText, MoveRight } from 'lucide-react';
import React from 'react'
import { MotionDiv, MotionH2, MotionSpan } from '@/components/common/MotionWrapper';

type Step = {
    icon: React.ReactNode;
    label: string;
    description: string;
}

const steps: Step[] = [
    {
        icon: <FileText size={48} strokeWidth={1.5} />,
        label: 'Upload PDF',
        description: 'Simply drag and drop your PDF document or click to upload.',
    },
    {
        icon: <BrainCircuit size={48} strokeWidth={1.5} />,
        label: 'AI Analysis',
        description: 'Our advanced AI processes and analyzes your document instantly.'
    },
    {
        icon: <FileOutput size={48} strokeWidth={1.5} />,
        label: 'Get Summary',
        description: 'Receive a clear, concise summary of your document'
    }
];

const HowItWorksSection = () => {
  return (
    <section className="relative overflow-visible bg-transparent py-16 lg:py-24">
        {/* Background elements */}
        <div aria-hidden='true' className="pointer-events-none absolute inset-0 -z-10 transform-gpu overflow-hidden blur-2xl">
            <div className="absolute left-[20%] top-0 aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-br from-emerald-400/20 via-teal-400/20 to-cyan-400/20 sm:left-[calc(40%-30rem)] sm:w-[40.1875rem]" style={{
                clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'
            }} />
            <div className="absolute right-[20%] bottom-0 aspect-[1155/678] w-[36.125rem] translate-x-1/2 bg-gradient-to-bl from-rose-400/20 via-pink-400/20 to-rose-400/20 sm:right-[calc(40%-30rem)] sm:w-[40.1875rem]" style={{
                clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'
            }} />
        </div>
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <MotionSpan initial={{opacity: 0, y: 20}} whileInView={{opacity: 1, y: 0}} transition={{duration: 0.5}} className='inline-block font-bold text-base uppercase mb-4 text-rose-500 tracking-wider bg-rose-50 border border-rose-200 px-3 py-1 rounded-full'>
                    How it works
                </MotionSpan>
                <MotionH2 initial={{opacity: 0, y: 20}} whileInView={{opacity: 1, y: 0}} transition={{duration: 0.5, delay: 0.2}} className='font-bold text-3xl max-w-2xl mx-auto mt-4 text-gray-900'>
                    Transform any PDF into an easy-to-digest summary in three simple steps
                </MotionH2>
                <div className="mx-auto mt-8 h-1 w-20 bg-gradient-to-r from-rose-500 to-rose-300 rounded-full"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto relative">
                {steps.map((step, idx) => (
                    <MotionDiv initial={{opacity: 0, y: 50}} whileInView={{opacity: 1, y: 0}} transition={{duration: 0.5, delay: idx * 0.2}} key={idx} className='relative flex items-stretch group'>
                        <StepItem {...step} index={idx} />
                        {idx < steps.length - 1 && (
                            <MotionDiv initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration: 0.5, delay: idx * 0.2 + 0.3}} className='hidden md:flex absolute top-1/2 -right-4 transform -translate-y-1/2 z-10 items-center justify-center w-8 h-8 bg-rose-100 rounded-full'>
                                <MoveRight size={20} strokeWidth={2} className='text-rose-500' />
                            </MotionDiv>
                        )}
                    </MotionDiv>
                ))}
            </div>
        </div>
    </section>
  )
}

function StepItem({ icon, label, description, index }: Step & { index: number }) {
    return (
        <div className="relative p-8 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group-hover:border-rose-200 group-hover:-translate-y-1 w-full">
            <div className="absolute -top-3 -left-3 flex items-center justify-center w-8 h-8 bg-rose-500 text-white rounded-full font-bold text-sm">
                {index + 1}
            </div>
            
            <div className="flex flex-col gap-6 h-full">
                <div className="flex items-center justify-center h-20 w-20 mx-auto rounded-2xl bg-gradient-to-br from-rose-500/10 via-rose-400/10 to-transparent group-hover:from-rose-100 group-hover:to-rose-200 transition-all duration-300 shadow-inner">
                    <div className='text-rose-500'>{icon}</div>
                </div>
                
                <div className="flex flex-col flex-1 gap-3 justify-between">
                    <h4 className='text-center font-bold text-xl text-gray-900'>{label}</h4>
                    <p className='text-center text-gray-600 leading-relaxed'>{description}</p>
                </div>
            </div>
            
            {/* Hover effect element */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-rose-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
        </div>
    )
}

export default HowItWorksSection

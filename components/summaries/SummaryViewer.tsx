'use client'
import React, { useState } from 'react'
import { Card } from '@/components/ui/card'
import NavigationControls from './NavigationControls';
import ProgressBar from './ProgressBar';
import { parseSection } from '@/utils/summaryHelpers';
import ContentSection from './ContentSection';
import { MotionDiv } from '@/components/common/MotionWrapper';

const SectionTitle = ({title}:{title: string})=>{
  return <div className='flex flex-col gap-2 mb-6 sticky top-0 pt-2 pb-4 bg-background/80 backdrop-blur-xs z-10'>
    <h2 className='text-2xl lg:text-3xl font-bold text-center flex items-center justify-center gap-2 text-rose-800'>{title}</h2>
  </div>
}

const SummaryViewer = ({summary}:{summary: string}) => {
  const [currentSection, setCurrentSection] = useState(0);

  const handleNext = ()=>setCurrentSection((prev)=>Math.min(prev+1, sections.length - 1));

  const handlePrevious = ()=>setCurrentSection((prev)=>Math.max(prev-1, 0));

  const sections = summary.split('\n#').map((section)=>section.trim()).filter(Boolean).map(parseSection);
  return (
    <Card className='relative px-2 h-[500px] sm:h-[600px] lg:h-[700px] w-full xl:w-[650px] overflow-hidden bg-linear-to-br from-background via-background/95 to-rose-500/5 backdrop-blur-lg shadow-2xl rounded-3xl border border-rose-500/10'>
      <ProgressBar sections={sections} currentSection={currentSection} />
      <MotionDiv key={currentSection} initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration: 0.2, ease: 'easeInOut'}} exit={{opacity: 0}} className="h-full overflow-y-auto scrollbar-hide pt-8 sm:pt-16 pb-20 sm:pb-24">
        <div className="px-2 sm:px-6">
          <SectionTitle title={sections[currentSection]?.title || ''} />
          <ContentSection title={sections[currentSection]?.title || ''} points={sections[currentSection]?.points || ''} />
        </div>
      </MotionDiv>
      <NavigationControls currentSection={currentSection} totalSections={sections.length} onPrevious={handlePrevious} onNext={handleNext} onSectionSelect={setCurrentSection} />  
    </Card>
  )
}

export default SummaryViewer


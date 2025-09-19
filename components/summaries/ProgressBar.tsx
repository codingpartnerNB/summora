import { cn } from '@/lib/utils';
import React from 'react'

const ProgressBar = ({sections, currentSection}: {sections: Array<{title: string; points: string[]}>; currentSection: number;}) => {
  return (
    <div className='absolute top-0 left-0 right-0 z-20 bg-white/90 backdrop-blur-xs pt-4 pb-2 border-b border-rose-100'>
      <div className="px-4 flex gap-1.5">
        {sections.map((_, index)=>(
            <div className='h-1.5 flex-1 rounded-full bg-rose-100 overflow-hidden' key={index}>
              <div className={cn(
                'h-full bg-gradient-to-r from-orange-400 via-rose-500 to-pink-600 transition-all duration-500 ease-out',
                index === currentSection ? 'w-full' : 
                currentSection > index ? 'w-full opacity-35' : 'w-0'
              )} />
            </div>
        ))}
      </div>
    </div>
  )
}

export default ProgressBar
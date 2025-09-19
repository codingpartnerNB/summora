import React from 'react'
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const NavigationControls = ({currentSection, totalSections, onPrevious, onNext, onSectionSelect}: {currentSection: number; totalSections: number; onPrevious: ()=>void; onNext: ()=>void; onSectionSelect: (index: number)=>void;}) => {
  return (
    <div className='absolute bottom-0 left-0 right-0 p-4 bg-white/90 backdrop-blur-xs border-t border-rose-100'>
      <div className="flex justify-between items-center">
        <Button 
          variant={'ghost'} 
          size={'icon'} 
          onClick={onPrevious} 
          disabled={currentSection === 0} 
          className={cn(
            'rounded-full w-10 h-10 sm:w-12 sm:h-12 transition-all duration-300 bg-gradient-to-br from-rose-500 to-rose-600 text-white shadow-md hover:shadow-lg border border-rose-400/30 group',
            currentSection === 0 ? 'opacity-50' : 'hover:from-rose-600 hover:to-rose-700 hover:scale-105'
          )}
        >
            <ChevronLeft className='h-6 w-6 transition-colors duration-300 group-hover:text-rose-50' />
        </Button>
        <div className="flex gap-2">
            {Array.from({length:totalSections}).map((_, index)=>(
                <button 
                  key={index} 
                  onClick={()=>onSectionSelect(index)} 
                  className={cn(
                    'w-1.5 h-1.5 sm:w-2.5 sm:h-2.5 rounded-full transition-all duration-300',
                    currentSection === index 
                      ? 'bg-gradient-to-r from-rose-500 to-rose-600 shadow-sm' 
                      : 'bg-rose-200 hover:bg-rose-300'
                  )} 
                />
            ))}
        </div>
        <Button 
          variant={'ghost'} 
          size={'icon'} 
          onClick={onNext} 
          disabled={currentSection === totalSections - 1} 
          className={cn(
            'rounded-full w-10 h-10 sm:w-12 sm:h-12 transition-all duration-300 bg-gradient-to-br from-rose-500 to-rose-600 text-white shadow-md hover:shadow-lg border border-rose-400/30 group',
            currentSection === totalSections - 1 ? 'opacity-50' : 'hover:from-rose-600 hover:to-rose-700 hover:scale-105'
          )}
        >
            <ChevronRight className='h-6 w-6 transition-colors duration-300 group-hover:text-rose-50' />
        </Button>
      </div>
    </div>
  )
}

export default NavigationControls
import { FileText, Plus } from 'lucide-react'
import React from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const EmptySummaryState = () => {
  return (
    <div className="flex flex-col items-center justify-center py-16 text-center bg-white/70 backdrop-blur-sm rounded-2xl border border-rose-100 shadow-sm">
        <div className="p-4 bg-rose-100 rounded-full mb-4">
            <FileText className="w-10 h-10 text-rose-600" />
        </div>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">No summaries yet</h3>
        <p className="text-gray-600 max-w-md mb-6">Get started by uploading your first PDF to generate an AI-powered summary</p>
        <Button asChild className="relative bg-gradient-to-r from-rose-500 to-rose-600 hover:from-rose-600 hover:to-rose-700 text-white font-medium py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group overflow-hidden">
            <Link href="/upload" className="flex items-center gap-2 relative z-10">
                <Plus className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300" />
                <span>Create your first summary</span>
                
                {/* Shine effect on hover */}
                <span className="absolute inset-0 flex items-center justify-center">
                    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
                </span>
            </Link>
        </Button>
    </div>
  )
}

export default EmptySummaryState

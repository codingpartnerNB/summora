import { Pizza } from 'lucide-react'
import React from 'react'
import { MotionDiv, MotionH3 } from '@/components/common/MotionWrapper'
import SummaryViewer from '@/components/summaries/SummaryViewer';

const DEMO_SUMMARY = `# 🚀 Quick Overview
🎯 Comprehensive Next.js 15 course covering everything from fundamentals to advanced deployment strategies.

# 📋 Document Details
• 📄 Type: Technical Course
• 👥 For: Web Developers & React Engineers

# 🔑 Key Highlights
• 🌐 Complete guide to Next.js 15's App Router
• 🧑‍💻 Server Components & Server Actions deep dive
• ⚡ Full-stack application development with Next.js

# 🌟 Why It Matters
• 💡 Next.js is becoming the industry standard for React applications, offering superior performance, SEO, and developer experience. This course provides the essential knowledge needed to build modern web applications.

# 📚 Main Points
• 🏗️ Modern application architecture with App Router
• 💻 Server and Client Components best practices
• 🔄 Data fetching patterns and caching strategies
• 🔒 Authentication and API route implementation
• 📱 Responsive design and component libraries

# 💡 Pro Tips
• ⭐ Always consider server components as your default choice.
• 🗂️ Implement route groups for better code organization.
• ⚙️ Use loading.tsx and error.tsx for better UX.

# 🧠 Key Terms to Know
• 🔹 Server Components: React components that render on the server for better performance.
• 🚦 Route Groups: Next.js feature for organizing routes without affecting URL structure.
• 🎯 Streaming: Technique for progressively rendering UI components.
• ⏳ Suspense: React feature for handling loading states.

# 🔥 Bottom Line
• 💫 Master Next.js 15 to build fast, scalable, and SEO-friendly web applications with the latest React features and best practices.

# 🏁 Final Thoughts
This course transforms developers into Next.js experts, enabling them to build production-ready applications with confidence and efficiency.

`;

const DemoSection = () => {
  return (
    <section className="relative overflow-visible py-16 lg:py-24 bg-transparent">
        {/* Background elements */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-10 transform-gpu overflow-hidden blur-3xl">
            <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-br from-emerald-100 via-teal-200 to-cyan-400 opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" style={{
                clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'
            }} />
        </div>
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className='flex flex-col items-center text-center space-y-6'>
                <div className='inline-flex items-center justify-center p-3 rounded-2xl bg-gradient-to-br from-slate-50 to-slate-100 backdrop-blur-xs border border-rose-200/50 shadow-sm mb-6 group hover:from-rose-50 hover:to-rose-100 transition-all duration-300'>
                    <Pizza className='w-7 h-7 text-rose-500' />
                </div>
                
                <div className='text-center mb-12'>
                    <MotionH3 initial={{y: 20, opacity: 0}} whileInView={{y: 0, opacity: 1}} transition={{duration: 0.5, delay: 0.2}} className='font-bold text-3xl max-w-3xl mx-auto px-4 sm:px-6'>
                        Watch how Summora transforms <span className='bg-gradient-to-r from-rose-500 to-rose-700 bg-clip-text text-transparent'>this Next.js course PDF</span> into an easy-to-read summary!
                    </MotionH3>
                    <div className="mx-auto mt-8 h-1 w-20 bg-gradient-to-r from-rose-500 to-rose-300 rounded-full"></div>
                </div>
            </div>
            <div className="flex justify-center items-center px-2 sm:px-4 lg:px-6">
                <MotionDiv initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration: 0.5}}>
                    <SummaryViewer summary={DEMO_SUMMARY} />
                </MotionDiv>
            </div>
        </div>
    </section>
  )
}

export default DemoSection
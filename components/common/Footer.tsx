import React from 'react'
import Link from 'next/link'
import { Code2, Mail, BookOpen, Crown, Sparkles, User } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-10 left-10">
          <Code2 className="w-24 h-24" />
        </div>
        <div className="absolute bottom-10 right-10">
          <Sparkles className="w-20 h-20" />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        {/* Main footer content */}
        <div className="flex flex-col lg:flex-row justify-between gap-8 lg:gap-16">
          
          {/* Brand section */}
          <div className="lg:flex-1 lg:max-w-md">
            <div className="flex items-center gap-3 mb-6">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-r from-rose-500 to-pink-600 rounded-full flex items-center justify-center ring-2 ring-rose-400/30 ring-offset-2 ring-offset-gray-900 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 cursor-pointer group">
                  <User className="w-5 h-5 text-white transition-all group-hover:scale-110" />
                </div>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Creating amazing developer experiences that deliver high-quality, impactful results, captivate, and convert.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-gray-800 hover:bg-rose-600 rounded-lg transition-all duration-300 hover:scale-110">
                <Mail className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-gray-800 hover:bg-rose-600 rounded-lg transition-all duration-300 hover:scale-110">
                <BookOpen className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-8 lg:gap-16 justify-end">
            
            {/* About section */}
            <div className="sm:w-auto">
              <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
                <span className="w-2 h-2 bg-rose-500 rounded-full"></span>
                ABOUT
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link href="#" className="text-gray-300 hover:text-rose-300 hover:underline hover:underline-offset-2 transition-colors duration-300 flex items-center gap-2 group">
                    <span className="w-1 h-1 bg-rose-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Resources section */}
            <div className="sm:w-auto">
              <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
                <span className="w-2 h-2 bg-rose-500 rounded-full"></span>
                RESOURCES
              </h3>
              <ul className="space-y-3">
                {[
                  {title: "Upload Thing", url: 'https://docs.uploadthing.com/'},
                  {title: "NeonDB", url: 'https://neon.com/docs/introduction'},
                  {title: "Langchain", url: 'https://js.langchain.com/docs/introduction/'},
                  {title: "Stripe", url: 'https://docs.stripe.com/'}
                ].map((item, index) => (
                  <li key={index}>
                    <Link href={item.url} className="text-gray-300 hover:text-rose-300 hover:underline hover:underline-offset-2 transition-colors duration-300 flex items-center gap-2 group">
                      <span className="w-1 h-1 bg-rose-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-4 mb-4 md:mb-0">
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <Crown className="w-4 h-4 text-rose-400" />
              <span>Made with ❤️ by <span className='underline underline-offset-2 font-medium'>Neha</span></span>
            </div>
          </div>
          
          <div className="flex items-center gap-6 text-sm text-gray-400">
            <span>© {new Date().getFullYear()} All rights reserved</span>
            <div className="flex gap-4">
              <Link href="#" className="hover:text-rose-300 transition-colors">Privacy</Link>
              <Link href="#" className="hover:text-rose-300 transition-colors">Terms</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Gradient accent */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-rose-500 via-pink-500 to-purple-500"></div>
    </footer>
  )
}

export default Footer
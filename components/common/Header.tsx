import React from "react";
import { FileText } from "lucide-react";
import NavLink from "./NavLink";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import HeaderMobileMenu from "./HeaderMobileMenu";
import PlanBadge from "./PlanBadge";

const Header = () => {
  return (
    <nav className="container flex items-center justify-between py-4 lg:px-8 px-4 mx-auto border-b border-gray-100/50 bg-transparent backdrop-blur-sm relative z-50">
      {/* Logo */}
      <div className="flex lg:flex-1">
        <NavLink href="/" className="flex items-center gap-2 lg:gap-3 shrink-0 group">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-rose-400 to-pink-500 rounded-lg blur opacity-20 group-hover:opacity-30 transition duration-200"></div>
            <FileText className="relative w-6 h-6 lg:w-8 lg:h-8 text-gray-900 group-hover:rotate-12 transform transition duration-300 ease-in-out" />
          </div>
          <span className="font-extrabold lg:text-xl bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent">
            Summora
          </span>
        </NavLink>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden lg:flex lg:justify-center gap-6 lg:gap-12 lg:items-center">
        <NavLink 
          href="/#pricing" 
          className="relative group font-medium text-gray-600 hover:text-gray-900 transition-all duration-300 px-4 py-1 rounded-lg hover:bg-rose-100/50"
        >
          Pricing
          <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-rose-400 to-pink-500 transition-all duration-300 group-hover:w-4/5"></span>
        </NavLink>
        <SignedIn>
          <NavLink 
            href="/dashboard" 
            className="relative group font-medium text-gray-600 hover:text-gray-900 transition-all duration-300 px-3 py-1 rounded-lg hover:bg-rose-50/50"
          >
            Your Summaries
            <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-rose-400 to-pink-500 transition-all duration-300 group-hover:w-4/5"></span>
          </NavLink>
        </SignedIn>
      </div>

      {/* Desktop Actions */}
      <div className="hidden lg:flex lg:justify-end lg:flex-1">
        <SignedIn>
          <div className="flex gap-4 items-center">
            <NavLink 
              href="/upload" 
              className="relative px-4 py-2 rounded-lg bg-gradient-to-r from-rose-50 to-pink-50 text-rose-700 font-medium hover:from-rose-100 hover:to-pink-100 transition-all duration-200 border border-rose-200/50"
            >
              Upload a PDF
            </NavLink>
            <PlanBadge />
            <UserButton />
          </div>
        </SignedIn>
        <SignedOut>
          <NavLink 
            href="/sign-in" 
            className="relative px-5 py-2.5 rounded-lg bg-gradient-to-r from-rose-500 to-pink-500 font-medium hover:from-rose-600 hover:to-pink-600 !text-white hover:text-white transition-all duration-200 shadow-sm hover:shadow-md hover:shadow-rose-100"
          >
            Sign In
          </NavLink>
        </SignedOut>
      </div>

      {/* Mobile Actions - Always visible on mobile */}
      <div className="flex lg:hidden items-center gap-3">
        <SignedIn>
          <div className="flex items-center gap-2">
            <PlanBadge />
            <UserButton />
          </div>
        </SignedIn>
        
        <SignedOut>
          <NavLink 
            href="/sign-in" 
            className="relative px-3 py-1.5 rounded-lg bg-gradient-to-r from-rose-500 to-pink-500 font-medium hover:from-rose-600 hover:to-pink-600 !text-white hover:text-white transition-all duration-200 shadow-sm hover:shadow-md hover:shadow-rose-100 text-sm"
          >
            Sign In
          </NavLink>
        </SignedOut>
        
        {/* Mobile Menu Component */}
        <HeaderMobileMenu />
      </div>
    </nav>
  );
};

export default Header;
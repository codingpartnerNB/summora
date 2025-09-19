'use client';

import React, { useState, useRef, useEffect } from "react";
import { Menu, X } from "lucide-react";
import NavLink from "./NavLink";
import { SignedIn } from "@clerk/nextjs";

const HeaderMobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Close menu when a link is clicked
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <div className="lg:hidden relative" ref={menuRef}>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-1 rounded-lg text-white hover:text-gray-900 hover:bg-rose-50/50 transition-colors"
        aria-label="Toggle menu"
      >
        {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="absolute right-0 top-full mt-1 w-48 bg-white/95 backdrop-blur-lg rounded-lg shadow-xl border border-gray-200 py-2 z-50">
          <div className="flex flex-col">
            <NavLink 
              href="/#pricing" 
              className="px-4 py-2.5 text-gray-700 hover:text-gray-900 hover:bg-rose-50 transition-colors text-sm font-medium border-b border-gray-100"
              onClick={handleLinkClick}
            >
              Pricing
            </NavLink>
            <SignedIn>
              <NavLink 
                href="/dashboard" 
                className="px-4 py-2.5 text-gray-700 hover:text-gray-900 hover:bg-rose-50 transition-colors text-sm font-medium border-b border-gray-100"
                onClick={handleLinkClick}
              >
                Your Summaries
              </NavLink>
              <NavLink 
                href="/upload" 
                className="px-4 py-2.5 text-gray-700 hover:text-gray-900 hover:bg-rose-50 transition-colors text-sm font-medium"
                onClick={handleLinkClick}
              >
                Upload a PDF
              </NavLink>
            </SignedIn>
          </div>
        </div>
      )}
    </div>
  );
};

export default HeaderMobileMenu;
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ByteSpaceLogo from './ByteSpaceLogo';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <header className="relative w-full z-50">
      <div className="max-w-[1240px] mx-auto px-6 h-24 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group transition-transform hover:scale-105 duration-200">
          <ByteSpaceLogo />
        </Link>

        {/* Center Nav */}
        <nav className="hidden md:flex items-center gap-8 text-[15px] font-normal text-[#242528]">
          <Link 
            to="/" 
            className={`transition-colors hover:text-black relative ${
              isHomePage
                ? "text-[#242528] font-medium after:content-[''] after:absolute after:bottom-[-6px] after:left-0 after:w-full after:h-[2px] after:bg-[#D4FB20]"
                : "text-[#565A65]"
            }`}
          >
            Home
          </Link>
          <Link 
            to="/courses" 
            className="text-[#565A65] hover:text-[#242528] transition-colors"
          >
            Courses
          </Link>
          <Link 
            to="/creator" 
            className={`transition-colors hover:text-black relative ${
              location.pathname.startsWith('/creator')
                ? "text-[#242528] font-medium after:content-[''] after:absolute after:bottom-[-6px] after:left-0 after:w-full after:h-[2px] after:bg-[#D4FB20]"
                : "text-[#565A65]"
            }`}
          >
            Creators
          </Link>
        </nav>

        {/* Right CTA / Auth */}
        <div className="hidden md:flex items-center gap-6">
          <Link 
            to="/login" 
            className="text-[15px] font-normal text-[#242528] hover:text-black transition-colors cursor-pointer"
          >
            Sign In
          </Link>
          <Link 
            to="/register" 
            className="text-[15px] font-normal text-[#242528] hover:text-black transition-colors cursor-pointer"
          >
            Join Us
          </Link>
          <button 
            type="button" 
            aria-label="Shopping bag"
            className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-[#F5F5F6] transition-colors text-[#242528] cursor-pointer"
          >
            <svg className="w-5 h-5 text-[#242528]" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18 6H16C16 3.79 14.21 2 12 2C9.79 2 8 3.79 8 6H6C4.9 6 4 6.9 4 8V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8C20 6.9 19.1 6 18 6ZM12 4C13.1 4 14 4.9 14 6H10C10 4.9 10.9 4 12 4ZM18 20H6V8H8V10C8 10.55 8.45 11 9 11C9.55 11 10 10.55 10 10V8H14V10C14 10.55 14.45 11 15 11C15.55 11 16 10.55 16 10V8H18V20Z" />
            </svg>
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="flex md:hidden items-center gap-3">
          <button 
            type="button" 
            aria-label="Shopping bag"
            className="w-9 h-9 rounded-full flex items-center justify-center bg-[#F5F5F6] text-[#242528]"
          >
            <svg className="w-4 h-4 text-[#242528]" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18 6H16C16 3.79 14.21 2 12 2C9.79 2 8 3.79 8 6H6C4.9 6 4 6.9 4 8V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8C20 6.9 19.1 6 18 6ZM12 4C13.1 4 14 4.9 14 6H10C10 4.9 10.9 4 12 4ZM18 20H6V8H8V10C8 10.55 8.45 11 9 11C9.55 11 10 10.55 10 10V8H14V10C14 10.55 14.45 11 15 11C15.55 11 16 10.55 16 10V8H18V20Z" />
            </svg>
          </button>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#242528] focus:outline-none cursor-pointer"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-b border-[#E8E9EB] px-6 py-4 space-y-3 shadow-lg">
          <Link 
            to="/" 
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-semibold text-[#242528] py-1"
          >
            Home
          </Link>
          <Link 
            to="/courses" 
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base text-[#565A65] py-1"
          >
            Courses
          </Link>
          <Link 
            to="/creator" 
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base text-[#565A65] py-1"
          >
            Creators
          </Link>
          <div className="pt-2 border-t border-[#E8E9EB] flex items-center justify-between">
            <Link 
              to="/login" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-medium text-[#242528]"
            >
              Sign In
            </Link>
            <Link 
              to="/register" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-semibold bg-[#D4FB20] text-[#242528] px-4 py-2 rounded-full"
            >
              Join Us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

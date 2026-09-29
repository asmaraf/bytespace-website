import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <header className="relative w-full z-50">
      <div className="max-w-[1240px] mx-auto px-6 h-24 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <img 
            src={isHomePage ? "/assets/bytespace_logo_home.svg" : "/assets/bytespace_logo_full.svg"} 
            alt="ByteSpace" 
            className="h-7 md:h-8 object-contain transition-transform group-hover:scale-105 duration-200" 
          />
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
            <img 
              src="/assets/icon_shopping_bag.svg" 
              alt="Cart" 
              className="w-5 h-5 opacity-90 hover:opacity-100" 
            />
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="flex md:hidden items-center gap-3">
          <button 
            type="button" 
            aria-label="Shopping bag"
            className="w-9 h-9 rounded-full flex items-center justify-center bg-[#F5F5F6]"
          >
            <img src="/assets/icon_shopping_bag.svg" alt="Cart" className="w-4 h-4" />
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

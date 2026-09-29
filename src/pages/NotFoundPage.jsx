import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import GridBackground from '../components/GridBackground';

export default function NotFoundPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-[#242528] selection:bg-[#D4FB20] selection:text-[#242528] flex flex-col font-sans">
      {/* ======================================================== */}
      {/* 1. HERO 404 SECTION (Persian Blue #003BE2 with Blueprint Grid) */}
      {/* ======================================================== */}
      <section className="relative w-full min-h-[900px] lg:min-h-[957px] bg-[#003BE2] overflow-hidden text-white flex flex-col justify-between">
        {/* Blueprint Grid Overlay */}
        <GridBackground />

        {/* Top Navbar */}
        <header className="relative w-full z-30">
          <div className="max-w-[1280px] mx-auto px-6 lg:px-8 h-24 flex items-center justify-between">
            {/* ByteSpace Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <img 
                src="/assets/bytespace_logo_white.svg" 
                alt="ByteSpace" 
                className="h-7 md:h-8 object-contain transition-transform group-hover:scale-105 duration-200" 
              />
            </Link>

            {/* Center Navigation Links */}
            <nav className="hidden md:flex items-center gap-8 text-[15px] font-normal text-white/90">
              <Link to="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <Link to="/courses" className="hover:text-white transition-colors">
                Courses
              </Link>
              <Link to="/creator" className="hover:text-white transition-colors">
                Creators
              </Link>
            </nav>

            {/* Right Nav Auth & Shopping Bag */}
            <div className="hidden md:flex items-center gap-6 text-white text-[15px] font-normal">
              <Link to="/login" className="hover:text-[#D4FB20] transition-colors">
                Sign In
              </Link>
              <Link to="/register" className="hover:text-[#D4FB20] transition-colors">
                Join Us
              </Link>
              <button
                type="button"
                aria-label="Shopping bag"
                className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors text-white cursor-pointer"
              >
                <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex md:hidden items-center gap-3">
              <button
                type="button"
                aria-label="Shopping bag"
                className="w-9 h-9 rounded-full flex items-center justify-center bg-white/10 text-white"
              >
                <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </button>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-white focus:outline-none cursor-pointer"
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
            <div className="md:hidden bg-[#0031BD] border-b border-white/15 px-6 py-4 space-y-3 text-white">
              <Link to="/" className="block py-1">Home</Link>
              <Link to="/courses" className="block py-1">Courses</Link>
              <Link to="/creator" className="block py-1">Creators</Link>
              <div className="pt-2 border-t border-white/20 flex items-center justify-between">
                <Link to="/login" className="text-sm">Sign In</Link>
                <Link to="/register" className="text-sm font-medium bg-[#D4FB20] text-[#242528] px-4 py-2 rounded-full">Join Us</Link>
              </div>
            </div>
          )}
        </header>

        {/* 404 Hero Visual & Content */}
        <div className="relative z-10 max-w-[1280px] w-full mx-auto px-4 sm:px-6 pt-2 sm:pt-4 md:pt-6 pb-6 sm:pb-8 lg:pb-10 flex flex-col items-center justify-center text-center my-auto">
          {/* 1. 404 Digits - Separated Individual Digits ("4", "0", "4" alada alada) */}
          <div className="flex items-center justify-center gap-2 sm:gap-6 md:gap-8 select-none pointer-events-none">
            {/* First Digit 4 */}
            <div className="w-[95px] sm:w-[155px] md:w-[210px] lg:w-[265px]">
              <svg viewBox="0 25 590 720" className="w-full h-auto block overflow-visible" fill="none" aria-label="4">
                <defs>
                  <linearGradient id="lime404Grad1" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#D4FB20" />
                    <stop offset="35%" stopColor="#A4E822" />
                    <stop offset="65%" stopColor="#4A8AE8" />
                    <stop offset="100%" stopColor="#0033BD" />
                  </linearGradient>
                </defs>
                <path fill="url(#lime404Grad1)" d="M 0 615 V 477 L 316 25 H 507 V 467 H 589 V 615 H 507 V 745 H 336 V 615 Z M 348 213 L 180 467 H 348 Z" />
              </svg>
            </div>

            {/* Center Digit 0 */}
            <div className="w-[90px] sm:w-[145px] md:w-[200px] lg:w-[255px]">
              <svg viewBox="45 0 562 742" className="w-full h-auto block overflow-visible" fill="none" aria-label="0">
                <defs>
                  <linearGradient id="lime404Grad0" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#D4FB20" />
                    <stop offset="35%" stopColor="#A4E822" />
                    <stop offset="65%" stopColor="#4A8AE8" />
                    <stop offset="100%" stopColor="#0033BD" />
                  </linearGradient>
                </defs>
                <path fill="url(#lime404Grad0)" d="M 326 0 Q 474 0 540.5 99 Q 607 198 607 370 Q 607 544 540.5 643 Q 474 742 326 742 Q 178 742 111.5 643 Q 45 544 45 370 Q 45 198 111.5 99 Q 178 0 326 0 Z M 326 160 Q 257 160 235 214.5 Q 213 269 213 370 Q 213 438 221 482.5 Q 229 527 253.5 554.5 Q 278 582 326 582 Q 374 582 398.5 554.5 Q 423 527 431 482.5 Q 439 438 439 370 Q 439 269 417 214.5 Q 395 160 326 160 Z" />
              </svg>
            </div>

            {/* Second Digit 4 */}
            <div className="w-[95px] sm:w-[155px] md:w-[210px] lg:w-[265px]">
              <svg viewBox="0 25 590 720" className="w-full h-auto block overflow-visible" fill="none" aria-label="4">
                <defs>
                  <linearGradient id="lime404Grad2" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#D4FB20" />
                    <stop offset="35%" stopColor="#A4E822" />
                    <stop offset="65%" stopColor="#4A8AE8" />
                    <stop offset="100%" stopColor="#0033BD" />
                  </linearGradient>
                </defs>
                <path fill="url(#lime404Grad2)" d="M 0 615 V 477 L 316 25 H 507 V 467 H 589 V 615 H 507 V 745 H 336 V 615 Z M 348 213 L 180 467 H 348 Z" />
              </svg>
            </div>
          </div>

          {/* 2. Text Content Aligned BELOW the 404 digits (Not inside 404, not overlapping together) */}
          <div className="mt-6 sm:mt-8 md:mt-10 flex flex-col items-center text-center px-4 max-w-[820px]">
            <h1 
              className="font-semibold text-xl sm:text-3xl md:text-[44px] lg:text-[48px] text-white tracking-tight leading-[1.25]"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              The page you are looking <br />for doesn’t exist
            </h1>

            {/* Subtitle instructions */}
            <p 
              className="mt-4 sm:mt-5 text-white/80 text-xs sm:text-sm font-normal max-w-[500px]"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Try to use a correct url or go back to homepage to start again
            </p>

            {/* Back to Home Button */}
            <div className="mt-6 sm:mt-7">
              <Link
                to="/"
                className="inline-flex items-center justify-center bg-[#D4FB20] hover:bg-[#cbf516] active:scale-95 text-[#242528] font-medium text-xs sm:text-sm px-8 py-2.5 rounded-full shadow-[0_4px_16px_rgba(212,251,32,0.25)] transition-all duration-200 cursor-pointer"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 2. FOOTER (Exact Figma Frame Match)                      */}
      {/* ======================================================== */}
      <Footer />
    </div>
  );
}

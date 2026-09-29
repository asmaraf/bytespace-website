import React from 'react';
import { Link } from 'react-router-dom';

export default function AuthGraphic({ title, description }) {
  return (
    <div className="flex flex-col justify-between h-full min-h-[600px] text-white">
      {/* Top Header / Logo */}
      <div>
        <Link to="/" className="inline-flex items-center gap-3 group mb-10">
          <img 
            src="/assets/bytespace_logo_white.svg" 
            alt="ByteSpace" 
            className="h-7 md:h-8 object-contain transition-transform group-hover:scale-105 duration-200" 
          />
        </Link>

        {/* Heading & Subtitle */}
        <div className="max-w-[480px]">
          <h1 className="font-['Poppins'] font-semibold text-2xl sm:text-3xl text-white tracking-tight mb-3">
            {title}
          </h1>
          <p className="text-white/80 text-sm sm:text-base leading-relaxed font-normal">
            {description}
          </p>
        </div>
      </div>

      {/* Visual Composition: Stacked Cards + 3D Ornaments */}
      <div className="relative mt-8 sm:mt-12 w-full max-w-[520px] pb-12 select-none">
        {/* Floating 3D Torus (Top-Left) */}
        <div className="absolute -top-6 left-6 z-30 pointer-events-none drop-shadow-[0_12px_24px_rgba(0,0,0,0.25)]">
          <svg width="72" height="72" viewBox="0 0 100 100" fill="none" className="animate-pulse duration-1000">
            <circle cx="50" cy="50" r="34" stroke="#D4FB20" strokeWidth="22" strokeLinecap="round" />
            <circle cx="50" cy="50" r="34" stroke="rgba(255,255,255,0.4)" strokeWidth="4" strokeDasharray="30 15" />
          </svg>
        </div>

        {/* Card 1 (Behind, Left): Build Digital Asset */}
        <div className="absolute left-0 top-12 w-[310px] sm:w-[330px] bg-white rounded-[24px] p-3.5 border border-[#E8E9EB] shadow-[0_16px_40px_rgba(0,0,0,0.18)] opacity-95 -rotate-2 transition-transform hover:rotate-0 duration-300 z-10">
          <div className="relative rounded-[16px] overflow-hidden aspect-[16/10] bg-[#F5F5F6]">
            <img
              src="/assets/course_digital_asset.png"
              alt="Build Digital Asset"
              className="w-full h-full object-cover"
            />
            <div className="absolute left-2 bottom-2">
              <span className="bg-white/85 backdrop-blur-md text-[10px] font-medium text-[#242528] px-2 py-0.5 rounded-full">
                17 Lessons
              </span>
            </div>
          </div>
          <div className="pt-3 px-1">
            <h4 className="font-['Poppins'] font-semibold text-sm text-[#242528] truncate">
              Build Digital Asset
            </h4>
            <p className="text-[11px] text-[#82868E] mt-0.5">by purepearl studio</p>
            <div className="flex items-center justify-between mt-3 pt-2 border-t border-[#F5F5F6]">
              <span className="text-[11px] text-[#565A65] bg-[#F5F5F6] px-2 py-0.5 rounded-full">
                Beginner
              </span>
              <div className="flex items-center -space-x-1">
                <img className="h-5 w-5 rounded-full ring-2 ring-white object-cover" src="/assets/testimonial_sarah.png" alt="" />
                <img className="h-5 w-5 rounded-full ring-2 ring-white object-cover" src="/assets/testimonial_james.png" alt="" />
                <span className="h-5 px-1 rounded-full text-[9px] font-bold bg-[#242528] text-white flex items-center">
                  26+
                </span>
              </div>
            </div>
            <div className="mt-2 text-xs font-bold text-[#003BE2]">
              $25 <span className="text-[10px] font-normal text-[#82868E]">/lifetime</span>
            </div>
          </div>
        </div>

        {/* Card 2 (Front, Center): the Power of Big Data */}
        <div className="relative ml-20 sm:ml-28 w-[320px] sm:w-[350px] bg-white rounded-[24px] p-4 border border-white shadow-[0_24px_50px_rgba(0,0,0,0.22)] z-20 transition-transform hover:scale-[1.02] duration-300">
          <div className="relative rounded-[16px] overflow-hidden aspect-[16/10] bg-[#F5F5F6]">
            <img
              src="/assets/course_big_data.png"
              alt="the Power of Big Data"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-x-2 bottom-2 flex items-center justify-between gap-1">
              <span className="bg-white/85 backdrop-blur-md text-[10px] font-medium text-[#242528] px-2 py-0.5 rounded-full">
                17 Lessons
              </span>
              <span className="bg-white/85 backdrop-blur-md text-[10px] font-medium text-[#242528] px-2 py-0.5 rounded-full">
                2 hours 16 mins
              </span>
              <span className="bg-white/85 backdrop-blur-md text-[10px] font-medium text-[#242528] px-2 py-0.5 rounded-full">
                59 Comments
              </span>
            </div>
          </div>

          <div className="pt-3.5 px-1">
            <div className="flex items-center justify-between gap-2">
              <h3 className="font-['Poppins'] font-semibold text-base text-[#242528] leading-tight">
                the Power of Big Data
              </h3>
              <div className="flex items-center gap-1 text-xs font-semibold text-[#242528]">
                <span>4.5</span>
                <span className="text-[#D4FB20] text-sm">★</span>
              </div>
            </div>
            <p className="text-xs text-[#82868E] mt-0.5">by <span className="text-[#565A65]">purepearl studio</span></p>

            <div className="flex items-center justify-between mt-3 pt-2.5 border-t border-[#F5F5F6]">
              <span className="text-xs text-[#565A65] bg-[#F5F5F6] px-2.5 py-1 rounded-full font-medium">
                Beginner
              </span>
              <div className="flex items-center -space-x-1.5">
                <img className="h-6 w-6 rounded-full ring-2 ring-white object-cover" src="/assets/testimonial_sarah.png" alt="" />
                <img className="h-6 w-6 rounded-full ring-2 ring-white object-cover" src="/assets/testimonial_james.png" alt="" />
                <img className="h-6 w-6 rounded-full ring-2 ring-white object-cover" src="/assets/testimonial_alex.png" alt="" />
                <span className="h-6 px-1.5 rounded-full text-[10px] font-bold bg-[#242528] text-white flex items-center">
                  26+
                </span>
              </div>
            </div>

            <div className="mt-2 text-sm font-bold text-[#003BE2]">
              $25 <span className="text-xs font-normal text-[#82868E]">/lifetime</span>
            </div>
          </div>
        </div>

        {/* Happy Students Card (Bright Lime, bottom overlay) */}
        <div className="absolute right-2 sm:right-6 -bottom-6 z-30 bg-[#D4FB20] rounded-[20px] p-3.5 sm:p-4 shadow-[0_16px_36px_rgba(0,0,0,0.2)] border border-[#c6ee16] min-w-[210px] sm:min-w-[230px] transition-transform hover:scale-105 duration-300">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[#242528] font-bold text-xs sm:text-sm">
              Happy Students
            </span>
            <div className="flex items-center gap-1 text-[11px] font-bold text-[#003BE2]">
              <span>4.5</span>
              <span className="text-xs font-semibold text-[#003BE2]">(240)</span>
              <span className="text-[#003BE2]">★</span>
            </div>
          </div>
          <div className="flex items-center">
            <div className="flex -space-x-2">
              <img className="h-6 w-6 rounded-full ring-2 ring-[#D4FB20] object-cover" src="/assets/testimonial_sarah.png" alt="" />
              <img className="h-6 w-6 rounded-full ring-2 ring-[#D4FB20] object-cover" src="/assets/testimonial_james.png" alt="" />
              <img className="h-6 w-6 rounded-full ring-2 ring-[#D4FB20] object-cover" src="/assets/testimonial_alex.png" alt="" />
              <img className="h-6 w-6 rounded-full ring-2 ring-[#D4FB20] object-cover" src="/assets/course_startup.png" alt="" />
            </div>
            <span className="ml-2 inline-flex items-center px-1.5 py-0.5 rounded-full text-[10px] font-bold bg-[#242528] text-white">
              2K+
            </span>
          </div>
        </div>

        {/* Floating 3D Cone / Pyramid (Bottom-Left) */}
        <div className="absolute -bottom-10 left-4 z-40 pointer-events-none drop-shadow-[0_16px_28px_rgba(0,0,0,0.3)]">
          <svg width="86" height="86" viewBox="0 0 100 100" fill="none">
            <polygon points="50,10 90,85 10,85" fill="#D4FB20" />
            <polygon points="50,10 90,85 50,92" fill="#bde213" />
            <polygon points="50,10 10,85 50,92" fill="#e8ff47" opacity="0.8" />
          </svg>
        </div>

        {/* Floating 3D Squiggly Ribbon (Right) */}
        <div className="absolute -right-6 top-1/2 z-20 pointer-events-none drop-shadow-[0_12px_24px_rgba(0,0,0,0.18)]">
          <svg width="68" height="88" viewBox="0 0 100 120" fill="none" className="opacity-90">
            <path
              d="M20 10 Q 80 20 70 40 T 30 70 T 80 100"
              stroke="#FFFFFF"
              strokeWidth="20"
              strokeLinecap="round"
              fill="none"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

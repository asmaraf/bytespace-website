import React, { useState } from 'react';

export default function Hero({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSearch) onSearch(query);
  };

  return (
    <section id="home" className="relative pt-6 pb-20 overflow-hidden">
      {/* 3D Ornaments Background Overlay */}
      <div 
        className="pointer-events-none absolute inset-0 max-w-[1720px] mx-auto overflow-hidden opacity-95 z-0"
        aria-hidden="true"
      >
        <img 
          src="/assets/hero_3d_ornaments.png" 
          alt="" 
          className="w-full h-auto object-contain select-none" 
        />
      </div>

      <div className="relative z-10 max-w-[1240px] mx-auto px-6 flex flex-col items-center">
        {/* Main Hero Header */}
        <div className="text-center max-w-[960px] mx-auto mt-4">
          <h1 className="font-['Poppins'] font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-[70px] leading-[1.12] text-[#242528] tracking-[-0.02em]">
            Get Access to Hundreds Courses Available
          </h1>
          <p className="mt-5 text-[#82868E] text-base sm:text-lg md:text-[18px] leading-[1.6] max-w-[720px] mx-auto font-normal">
            Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.
          </p>

          {/* Search Bar */}
          <form 
            onSubmit={handleSubmit}
            className="mt-8 sm:mt-10 mx-auto max-w-[540px] w-full bg-white rounded-full p-2 pl-6 flex items-center justify-between border border-[#E5E6E8] shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:border-[#D4FB20] focus-within:border-[#D4FB20] focus-within:ring-2 focus-within:ring-[#D4FB20]/30 transition-all duration-300"
          >
            <div className="flex items-center gap-3.5 flex-1 mr-2">
              <img 
                src="/assets/icon_search.svg" 
                alt="" 
                className="w-5 h-5 opacity-50 shrink-0" 
              />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Course, topic, creator"
                aria-label="Search courses, topics, or creators"
                className="w-full bg-transparent text-[#242528] text-base placeholder-[#82868E] focus:outline-none"
              />
            </div>
            <button
              type="submit"
              aria-label="Submit search"
              className="bg-[#D4FB20] hover:bg-[#c9f212] active:scale-95 text-[#242528] font-medium text-[15px] px-7 py-3 rounded-full transition-all duration-200 cursor-pointer shadow-sm shrink-0"
            >
              Search
            </button>
          </form>
        </div>

        {/* Visual Centerpiece (Giant Ring + Student + Badges) */}
        <div className="relative w-full max-w-[1000px] mt-12 sm:mt-16 flex justify-center items-center">
          {/* Giant Neon Lime Circle / Donut Backdrop */}
          <div 
            className="absolute w-[620px] h-[620px] sm:w-[740px] sm:h-[740px] md:w-[860px] md:h-[860px] rounded-full border-[70px] sm:border-[100px] md:border-[120px] border-[#CBFC01] -z-10 shadow-[0_0_120px_rgba(203,252,1,0.25)] flex items-center justify-center"
            style={{
              top: '52%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              background: 'radial-gradient(circle, #ffffff 68%, transparent 70%)'
            }}
          />

          {/* Main Student Image */}
          <div className="relative z-10 w-[340px] sm:w-[460px] md:w-[540px] max-w-full">
            <img 
              src="/assets/hero_student.png" 
              alt="ByteSpace student with laptop and headphones" 
              className="w-full h-auto object-contain drop-shadow-[0_25px_35px_rgba(0,0,0,0.12)] select-none" 
            />

            {/* Floating Badge 1: UI/UX Design (Top-Left) */}
            <div className="absolute -left-6 sm:-left-12 md:-left-16 top-1/4 z-20 transition-transform duration-300 hover:scale-105">
              <div className="bg-white/95 backdrop-blur-md rounded-2xl p-3.5 sm:p-4 border border-white/80 shadow-[0_12px_32px_rgba(0,0,0,0.08)] flex flex-col gap-1 min-w-[170px] sm:min-w-[195px]">
                <span className="text-[#242528] font-semibold text-sm sm:text-base leading-snug">
                  UI/UX Design
                </span>
                <span className="text-[#82868E] text-xs font-normal flex items-center gap-1.5">
                  <span>200 Courses</span>
                  <span className="w-1 h-1 rounded-full bg-[#82868E]"></span>
                  <span>1000+ Students</span>
                </span>
              </div>
            </div>

            {/* Floating Badge 2: Learning Progress 55% (Top-Right) */}
            <div className="absolute -right-4 sm:-right-8 md:-right-12 top-[32%] z-20 transition-transform duration-300 hover:scale-105">
              <div className="bg-white/95 backdrop-blur-md rounded-2xl p-3.5 sm:p-4 border border-white/80 shadow-[0_12px_32px_rgba(0,0,0,0.08)] flex flex-col gap-1 min-w-[150px] sm:min-w-[170px]">
                <span className="text-[#82868E] font-medium text-xs">
                  Learning Progress
                </span>
                <span className="text-[#242528] font-bold text-2xl sm:text-3xl leading-none my-1">
                  55%
                </span>
                {/* Progress bar */}
                <div className="w-full h-1.5 bg-[#F5F5F6] rounded-full overflow-hidden mt-1">
                  <div className="h-full bg-[#D4FB20] rounded-full w-[55%]"></div>
                </div>
              </div>
            </div>

            {/* Floating Badge 3: Happy Students (Bottom-Left) */}
            <div className="absolute -left-4 sm:-left-8 md:-left-12 bottom-12 z-20 transition-transform duration-300 hover:scale-105">
              <div className="bg-white/95 backdrop-blur-md rounded-2xl p-3.5 sm:p-4 border border-white/80 shadow-[0_12px_32px_rgba(0,0,0,0.08)] flex flex-col gap-2 min-w-[210px] sm:min-w-[240px]">
                <div className="flex items-center justify-between">
                  <span className="text-[#242528] font-semibold text-sm sm:text-base">
                    Happy Students
                  </span>
                  <div className="flex items-center gap-1 text-xs text-[#82868E]">
                    <span className="font-semibold text-[#242528]">4.5</span>
                    <span>(240)</span>
                    <span className="text-[#F59E0B]">★</span>
                  </div>
                </div>
                {/* Avatars row */}
                <div className="flex items-center">
                  <div className="flex -space-x-2 overflow-hidden">
                    <img className="inline-block h-7 w-7 rounded-full ring-2 ring-white object-cover" src="/assets/testimonial_sarah.png" alt="" />
                    <img className="inline-block h-7 w-7 rounded-full ring-2 ring-white object-cover" src="/assets/testimonial_james.png" alt="" />
                    <img className="inline-block h-7 w-7 rounded-full ring-2 ring-white object-cover" src="/assets/testimonial_alex.png" alt="" />
                    <img className="inline-block h-7 w-7 rounded-full ring-2 ring-white object-cover" src="/assets/course_startup.png" alt="" />
                  </div>
                  <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-bold bg-[#D4FB20] text-[#242528]">
                    2K+
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Partner Logos Row */}
        <div className="w-full max-w-[1100px] mt-16 sm:mt-24 pt-6">
          <div className="flex flex-wrap items-center justify-center md:justify-between gap-8 md:gap-12 opacity-85">
            <img src="/assets/partner_logo_1.svg" alt="Logoipsum" className="h-7 sm:h-8 object-contain transition-opacity hover:opacity-100" />
            <img src="/assets/partner_logo_2.svg" alt="Logoipsum" className="h-7 sm:h-8 object-contain transition-opacity hover:opacity-100" />
            <img src="/assets/partner_logo_3.svg" alt="Logoipsum" className="h-7 sm:h-8 object-contain transition-opacity hover:opacity-100" />
            <img src="/assets/partner_logo_4.svg" alt="Logoipsum" className="h-7 sm:h-8 object-contain transition-opacity hover:opacity-100" />
            <img src="/assets/partner_logo_5.svg" alt="Logoipsum" className="h-7 sm:h-8 object-contain transition-opacity hover:opacity-100" />
          </div>
        </div>
      </div>
    </section>
  );
}

import React from 'react';
import { Link } from 'react-router-dom';

export default function CtaBanner() {
  return (
    <section className="relative py-28 overflow-hidden bg-gradient-to-b from-white via-[#F7F9F4] to-white">
      {/* 3D Floating Ornaments Background */}
      <div 
        className="pointer-events-none absolute inset-0 max-w-[1720px] mx-auto overflow-hidden opacity-90 z-0 flex items-center justify-center"
        aria-hidden="true"
      >
        <img
          src="/assets/cta_3d_ornaments.png"
          alt=""
          className="w-full h-auto object-contain select-none"
        />
      </div>

      <div className="relative z-10 max-w-[1040px] mx-auto px-6 text-center">
        <h2 className="font-['Poppins'] font-semibold text-3xl sm:text-4xl md:text-[46px] leading-[1.2] text-[#242528] tracking-tight">
          Unlock Your Potential as a <br className="hidden sm:inline" />
          <span className="relative inline-block">
            Creator
            <span className="absolute bottom-1 left-0 w-full h-2.5 bg-[#D4FB20]/40 -z-10 rounded"></span>
          </span>{' '}
          with ByteSpace
        </h2>

        <p className="mt-6 text-[#565A65] text-base sm:text-lg leading-[1.7] max-w-[840px] mx-auto font-normal">
          Experience the collaboration of numerous creators and an expanding selection of courses. Register now and become a part of a community comprising over 10,000 local and international creators. Utilize our Course Editor, and showcase your expertise by publishing your finest course on the ByteSpace Course Library.
        </p>

        <div className="mt-10">
          <Link
            to="/creator"
            className="inline-flex items-center justify-center bg-[#D4FB20] hover:bg-[#c9f212] active:scale-95 text-[#242528] font-semibold text-base px-8 py-3.5 rounded-full shadow-[0_8px_24px_rgba(212,251,32,0.4)] transition-all duration-200 cursor-pointer"
          >
            Join as Creator
          </Link>
        </div>
      </div>
    </section>
  );
}

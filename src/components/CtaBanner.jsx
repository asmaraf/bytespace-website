import React from 'react';
import { Link } from 'react-router-dom';
import GlowBlob from './GlowBlob';

export default function CtaBanner() {
  return (
    <section className="relative min-h-[720px] sm:min-h-[820px] lg:min-h-[900px] py-24 sm:py-32 md:py-40 flex items-center justify-center bg-white overflow-hidden">
      {/* Glow Blobs behind 3D ornaments matching Figma */}
      <GlowBlob
        color="lime"
        className="absolute -left-20 top-1/4 w-[550px] h-[550px]"
        blur="blur-[110px]"
        opacity="opacity-70"
      />
      <GlowBlob
        color="blue"
        className="absolute -right-24 -top-12 w-[650px] h-[650px] sm:w-[800px] sm:h-[800px]"
        blur="blur-[120px]"
        opacity="opacity-75"
      />
      <GlowBlob
        color="lime"
        className="absolute -right-20 bottom-1/4 w-[550px] h-[550px]"
        blur="blur-[110px]"
        opacity="opacity-70"
      />
      <GlowBlob
        color="white"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px]"
        blur="blur-[90px]"
        opacity="opacity-80"
      />

      {/* 3D Floating Ornaments Background Layer */}
      <div 
        className="pointer-events-none absolute inset-0 max-w-[1720px] mx-auto z-0 flex items-center justify-center"
        aria-hidden="true"
      >
        <img
          src="/assets/cta_3d_ornaments.png"
          alt=""
          className="w-full h-full max-h-[860px] object-contain select-none opacity-95"
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

import React from 'react';
import { Link } from 'react-router-dom';

export default function CreatorSection() {
  const benefits = [
    "Share Your Expertise",
    "Monetize Your Passion",
    "Flexibility and Autonomy",
    "Build a Community"
  ];

  return (
    <section id="creators" className="py-24 sm:py-32 md:py-36 relative overflow-hidden bg-white">
      {/* 1. Radiant Lime-Yellow Atmosphere on Bottom-Left (Matches Screenshot) */}
      <div 
        className="pointer-events-none absolute -left-20 -bottom-16 w-[650px] h-[650px] sm:w-[750px] sm:h-[750px] rounded-full bg-[#D4FB20]/40 blur-[120px] -z-10"
        aria-hidden="true"
      />
      <div 
        className="pointer-events-none absolute left-0 bottom-24 w-[450px] h-[450px] rounded-full bg-[#EEFF55]/25 blur-[100px] -z-10"
        aria-hidden="true"
      />

      {/* 2. Soft Blue Atmosphere on Right */}
      <div 
        className="pointer-events-none absolute -right-24 top-1/4 w-[500px] h-[500px] rounded-full bg-[#003BE2]/10 blur-[120px] -z-10"
        aria-hidden="true"
      />

      {/* 3. Floating 3D Lime Ribbon Ornament (Bottom-Left from Figma) */}
      <div 
        className="pointer-events-none absolute -left-12 -bottom-12 sm:-left-8 sm:-bottom-8 w-44 sm:w-56 md:w-64 z-0 opacity-90 drop-shadow-[0_20px_35px_rgba(212,251,32,0.35)] select-none"
        aria-hidden="true"
      >
        <img
          src="/assets/shape_ribbon.png"
          alt=""
          className="w-full h-auto object-contain transform -rotate-12"
        />
      </div>

      <div className="max-w-[1240px] mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-center">
          {/* Left Column: Visual Showcase */}
          <div className="lg:col-span-6 relative flex justify-center lg:justify-start order-2 lg:order-1">
            <div className="relative w-full max-w-[560px] p-2 group transition-transform duration-500 hover:scale-[1.02]">
              <img
                src="/assets/creator_showcase.png"
                alt="Create & manage courses on ByteSpace"
                className="w-full h-auto object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.08)] select-none"
                loading="lazy"
              />
            </div>
          </div>

          {/* Right Column: Content & Checkmarks */}
          <div className="lg:col-span-6 flex flex-col justify-center order-1 lg:order-2">
            <h2 className="font-['Poppins'] font-semibold text-3xl sm:text-4xl lg:text-[44px] leading-[1.2] text-[#242528] tracking-tight">
              Create & Manage <br className="hidden sm:inline" />Courses Easily.
            </h2>
            <p className="mt-6 text-[#565A65] text-base sm:text-lg leading-[1.65] font-normal">
              <strong className="text-[#242528] font-semibold">ByteSpace</strong> supports individuals or entities in the creation, publication, and administration of educational courses.
            </p>

            {/* Checkmark List */}
            <div className="mt-8 space-y-4">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-center gap-3.5">
                  <div className="w-6 h-6 rounded-full bg-[#003BE2] flex items-center justify-center shrink-0 shadow-sm">
                    <img
                      src="/assets/icon_check.svg"
                      alt=""
                      className="w-3.5 h-3.5 invert brightness-200"
                    />
                  </div>
                  <span className="text-base sm:text-lg font-medium text-[#242528]">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Link */}
            <div className="mt-10">
              <Link
                to="/creator"
                className="inline-flex items-center gap-2 text-base font-semibold text-[#003BE2] hover:text-[#002BB3] group cursor-pointer"
              >
                <span>Learn more about becoming a creator</span>
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

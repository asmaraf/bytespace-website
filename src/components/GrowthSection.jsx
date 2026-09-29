import React from 'react';

export default function GrowthSection() {
  return (
    <section className="py-24 sm:py-32 md:py-36 relative overflow-hidden bg-white">
      {/* 1. Prominent Lime-Yellow Aura on Top-Left (Matches Screenshot) */}
      <div 
        className="pointer-events-none absolute -left-20 -top-24 w-[600px] h-[600px] sm:w-[750px] sm:h-[750px] rounded-full bg-[#D4FB20]/35 blur-[120px] -z-10"
        aria-hidden="true"
      />
      <div 
        className="pointer-events-none absolute left-0 top-1/4 w-[450px] h-[450px] rounded-full bg-[#E5FF55]/25 blur-[100px] -z-10"
        aria-hidden="true"
      />

      {/* 2. Soft Blue Atmosphere on Right Behind Student */}
      <div 
        className="pointer-events-none absolute -right-20 top-1/3 w-[550px] h-[550px] rounded-full bg-[#003BE2]/10 blur-[120px] -z-10"
        aria-hidden="true"
      />

      <div className="max-w-[1240px] mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Text & Stats */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <h2 className="font-['Poppins'] font-semibold text-3xl sm:text-4xl lg:text-[44px] leading-[1.2] text-[#242528] tracking-tight">
              Your Path to Professional Growth Starts Here!
            </h2>
            <p className="mt-6 text-[#565A65] text-base sm:text-lg leading-[1.65] font-normal">
              Explore our curated selection of courses tailored to enhance your capabilities and accelerate your career journey. Whether you are looking to sharpen specific skills, gain industry expertise, or embark on a new career path entirely, we have the resources you need.
            </p>

            {/* Metrics */}
            <div className="mt-10 pt-8 border-t border-[#E8E9EB] grid grid-cols-3 gap-6 sm:gap-10">
              <div>
                <span className="font-['Poppins'] font-bold text-3xl sm:text-4xl text-[#003BE2] block">
                  12K
                </span>
                <span className="text-[#82868E] text-sm sm:text-base font-medium mt-1 block">
                  Students
                </span>
              </div>
              <div>
                <span className="font-['Poppins'] font-bold text-3xl sm:text-4xl text-[#003BE2] block">
                  70+
                </span>
                <span className="text-[#82868E] text-sm sm:text-base font-medium mt-1 block">
                  Courses
                </span>
              </div>
              <div>
                <span className="font-['Poppins'] font-bold text-3xl sm:text-4xl text-[#003BE2] block">
                  16
                </span>
                <span className="text-[#82868E] text-sm sm:text-base font-medium mt-1 block">
                  Creators
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Showcase */}
          <div className="lg:col-span-6 relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[580px] group transition-transform duration-500 hover:scale-[1.02]">
              <img
                src="/assets/growth_showcase.png"
                alt="Professional growth showcase"
                className="w-full h-auto object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.08)] select-none"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

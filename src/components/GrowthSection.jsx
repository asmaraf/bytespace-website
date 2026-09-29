import React from 'react';

export default function GrowthSection() {
  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-b from-white via-[#FAFBF8] to-white">
      {/* Subtle background glow */}
      <div 
        className="pointer-events-none absolute -left-40 top-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#D4FB20]/15 blur-[120px] -z-10"
        aria-hidden="true"
      />

      <div className="max-w-[1240px] mx-auto px-6">
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

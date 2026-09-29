import React from 'react';
import { testimonials } from '../data/coursesData';
import GlowBlob from './GlowBlob';

export default function TestimonialsSection() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Figma Matched Lime Glow on Right */}
      <GlowBlob
        color="lime"
        className="absolute -right-28 top-0 w-[700px] h-[700px] sm:w-[850px] sm:h-[850px]"
        blur="blur-[120px]"
        opacity="opacity-80"
      />
      {/* Figma Matched Blue Glow on Left */}
      <GlowBlob
        color="blue"
        className="absolute -left-24 bottom-0 w-[600px] h-[600px]"
        blur="blur-[110px]"
        opacity="opacity-50"
      />

      <div className="max-w-[1240px] mx-auto px-6 relative z-10">
        {/* Header Row: Title & Subtitle side-by-side */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div className="max-w-[540px]">
            <h2 className="font-['Poppins'] font-semibold text-3xl sm:text-4xl md:text-[44px] leading-[1.2] text-[#242528] tracking-tight">
              Discover What Our Community Is Saying
            </h2>
          </div>
          <div className="max-w-[560px]">
            <p className="text-[#565A65] text-base sm:text-lg leading-[1.65] font-normal">
              At ByteSpace, our vibrant community of learners and creators is at the heart of what we do. Hear directly from those who have experienced the transformative journey of learning and creating on our platform. Explore testimonials that reflect the diverse perspectives of enthusiastic learners and accomplished creators.
            </p>
          </div>
        </div>

        {/* 3 Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-white rounded-[24px] p-8 border border-[#E8E9EB] shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_16px_36px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* User Info */}
                <div className="flex items-center gap-4 mb-6">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-14 h-14 rounded-full object-cover ring-2 ring-[#E8E9EB]"
                  />
                  <div>
                    <h3 className="font-['Poppins'] font-semibold text-lg text-[#242528]">
                      {t.name}
                    </h3>
                    <p className="text-sm font-medium text-[#003BE2]">
                      {t.role}
                    </p>
                  </div>
                </div>

                {/* Quote */}
                <p className="text-[#565A65] text-[15px] sm:text-base leading-[1.7] italic">
                  {t.quote}
                </p>
              </div>

              {/* Rating stars */}
              <div className="flex items-center gap-1 text-[#F59E0B] text-sm mt-6 pt-4 border-t border-[#F5F5F6]">
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import React from 'react';
import { pathCategories } from '../data/coursesData';

export default function CategoriesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1240px] mx-auto px-6">
        {/* Section Heading */}
        <div className="text-center max-w-[920px] mx-auto mb-14">
          <h2 className="font-['Poppins'] font-semibold text-3xl sm:text-4xl md:text-[44px] leading-[1.2] text-[#242528] tracking-tight">
            Explore Diverse Learning Paths at Bytespace
          </h2>
          <p className="mt-4 text-[#82868E] text-base sm:text-lg leading-[1.6] max-w-[840px] mx-auto font-normal">
            At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various fields, ensuring there's something for everyone. Unleash your potential and explore our carefully curated categories.
          </p>
        </div>

        {/* 6 Category Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {pathCategories.map((cat) => (
            <div
              key={cat.id}
              className="group bg-white rounded-[24px] p-6 sm:p-7 border border-[#E8E9EB] shadow-[0_2px_12px_rgba(0,0,0,0.02)] hover:border-[#D4FB20] hover:shadow-[0_12px_28px_rgba(212,251,32,0.2)] hover:-translate-y-1 transition-all duration-300 flex flex-col items-center justify-center cursor-pointer text-center"
            >
              {/* Lime Icon Circle */}
              <div className="w-14 h-14 rounded-2xl bg-[#D4FB20] flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110 shadow-sm">
                <img
                  src={cat.icon}
                  alt={cat.name}
                  className="w-6 h-6 object-contain text-[#242528]"
                />
              </div>

              {/* Title */}
              <h3 className="font-semibold text-base sm:text-[17px] text-[#242528] group-hover:text-black transition-colors">
                {cat.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

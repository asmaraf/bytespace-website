import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { courses, categories } from '../data/coursesData';

export default function CoursesSection({ searchQuery = '' }) {
  const [activeCategory, setActiveCategory] = useState('Featured');
  const [showAllCategories, setShowAllCategories] = useState(false);

  const row1 = categories.slice(0, 8);
  const row2 = categories.slice(8, 14);
  const row3 = categories.slice(14);

  const filteredCourses = courses.filter((course) => {
    const matchesCategory =
      activeCategory === 'Featured' ||
      course.category.toLowerCase().includes(activeCategory.toLowerCase()) ||
      activeCategory.toLowerCase().includes(course.category.toLowerCase());

    const matchesSearch =
      !searchQuery ||
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.category.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <section id="courses" className="py-20 bg-white">
      <div className="max-w-[1240px] mx-auto px-6">
        {/* Section Heading */}
        <div className="text-center max-w-[920px] mx-auto mb-12">
          <h2 className="font-['Poppins'] font-semibold text-3xl sm:text-4xl md:text-[46px] leading-[1.2] text-[#242528] tracking-tight">
            Discover Your Passion, <br className="hidden sm:inline" />Build Your Skills
          </h2>
          <p className="mt-4 text-[#82868E] text-base sm:text-lg leading-[1.6] max-w-[840px] mx-auto font-normal">
            At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different fields, from technology to the arts, and make a difference in your career and life.
          </p>
        </div>

        {/* Filter Pills Category Badges */}
        <div className="flex flex-col items-center gap-3 mb-16 select-none">
          {/* Row 1 */}
          <div className="flex flex-wrap items-center justify-center gap-2.5">
            {row1.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-[#D4FB20] text-[#242528] font-semibold shadow-sm scale-105'
                    : 'bg-[#F5F5F6] text-[#565A65] hover:bg-[#E8E9EB] hover:text-[#242528]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Row 2 */}
          <div className="flex flex-wrap items-center justify-center gap-2.5">
            {row2.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-[#D4FB20] text-[#242528] font-semibold shadow-sm scale-105'
                    : 'bg-[#F5F5F6] text-[#565A65] hover:bg-[#E8E9EB] hover:text-[#242528]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Row 3 */}
          <div className="flex flex-wrap items-center justify-center gap-2.5">
            {row3.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-[#D4FB20] text-[#242528] font-semibold shadow-sm scale-105'
                    : 'bg-[#F5F5F6] text-[#565A65] hover:bg-[#E8E9EB] hover:text-[#242528]'
                }`}
              >
                {cat}
              </button>
            ))}
            <button
              type="button"
              onClick={() => setShowAllCategories(!showAllCategories)}
              className="px-3 py-2 text-sm font-semibold text-[#003BE2] hover:underline cursor-pointer"
            >
              + More
            </button>
          </div>
        </div>

        {/* Course Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {(filteredCourses.length > 0 ? filteredCourses : courses).map((course) => (
            <article
              key={course.id}
              className="group bg-white rounded-[24px] p-3.5 sm:p-4 border border-[#E8E9EB] shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_16px_36px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Image with Meta Badges */}
              <Link to={`/courses/${course.id}`} className="block">
                <div className="relative rounded-[16px] overflow-hidden aspect-[16/10] bg-[#F5F5F6]">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />

                    {/* Badges on bottom of card image */}
                    <div className="absolute inset-x-2.5 bottom-2.5 flex items-center justify-between gap-1.5 z-10">
                      <span className="bg-white/85 backdrop-blur-md text-[11px] font-medium text-[#242528] px-2.5 py-1 rounded-full shadow-sm">
                        {course.lessons}
                      </span>
                      <span className="bg-white/85 backdrop-blur-md text-[11px] font-medium text-[#242528] px-2.5 py-1 rounded-full shadow-sm">
                        {course.duration}
                      </span>
                      <span className="bg-white/85 backdrop-blur-md text-[11px] font-medium text-[#242528] px-2.5 py-1 rounded-full shadow-sm">
                        {course.comments}
                      </span>
                    </div>
                  </div>
                </Link>

              {/* Course Info */}
              <div className="pt-4 px-1 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <Link
                      to={`/courses/${course.id}`}
                      className="font-['Poppins'] font-semibold text-lg text-[#242528] group-hover:text-[#003BE2] transition-colors leading-snug truncate"
                    >
                      {course.title}
                    </Link>
                    <div className="flex items-center gap-1 shrink-0 text-sm font-semibold text-[#242528]">
                      <span>{course.rating}</span>
                      <span className="text-[#82868E] text-xs">★</span>
                    </div>
                  </div>
                  <p className="text-xs text-[#82868E] font-normal mt-1">
                    by <Link to="/creator" className="text-[#565A65] hover:text-[#003BE2] font-medium transition-colors">{course.author}</Link>
                  </p>
                </div>

                {/* Level & Student Avatars Stack */}
                <div className="flex items-center justify-between mt-5 pt-3 border-t border-[#F5F5F6]">
                  <div className="flex items-center gap-1.5 text-xs text-[#565A65] font-medium bg-[#F5F5F6] px-2.5 py-1 rounded-full">
                    {/* Signal bars icon */}
                    <svg className="w-3.5 h-3.5 text-[#565A65]" viewBox="0 0 24 24" fill="currentColor">
                      <rect x="3" y="14" width="3" height="7" rx="1" />
                      <rect x="9" y="10" width="3" height="11" rx="1" />
                      <rect x="15" y="6" width="3" height="15" rx="1" />
                    </svg>
                    <span>{course.level}</span>
                  </div>

                  {/* Avatars Stack */}
                  <div className="flex items-center">
                    <div className="flex -space-x-1.5 overflow-hidden">
                      <img className="inline-block h-6 w-6 rounded-full ring-2 ring-white object-cover" src="/assets/testimonial_sarah.png" alt="" />
                      <img className="inline-block h-6 w-6 rounded-full ring-2 ring-white object-cover" src="/assets/testimonial_james.png" alt="" />
                      <img className="inline-block h-6 w-6 rounded-full ring-2 ring-white object-cover" src="/assets/testimonial_alex.png" alt="" />
                    </div>
                    <span className="ml-1.5 inline-flex items-center justify-center h-6 px-1.5 rounded-full text-[10px] font-bold bg-[#242528] text-white">
                      {course.studentsCount}
                    </span>
                  </div>
                </div>

                {/* Price & Action */}
                <div className="flex items-center justify-between mt-3">
                  <div className="flex items-baseline gap-1">
                    <span className="font-['Poppins'] font-bold text-xl text-[#003BE2]">
                      {course.price}
                    </span>
                    <span className="text-xs text-[#82868E] font-normal">
                      {course.period}
                    </span>
                  </div>
                  <Link
                    to={`/courses/${course.id}`}
                    className="text-xs font-semibold text-[#242528] bg-[#F5F5F6] hover:bg-[#D4FB20] px-3.5 py-1.5 rounded-full transition-colors cursor-pointer"
                  >
                    Enroll Now
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

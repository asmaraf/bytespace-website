import React, { useState, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import Footer from '../components/Footer';
import GridBackground from '../components/GridBackground';
import ByteSpaceLogo from '../components/ByteSpaceLogo';

// Extended catalogue of courses for the Search & Browse page
const fullCourseCatalog = [
  {
    id: 1,
    title: "Learn Figma from Basic",
    author: "purepearl studio",
    category: "UI/UX Design",
    level: "Beginner",
    rating: 4.5,
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
    studentsCount: "26+",
    price: 25,
    image: "/assets/course_figma.png"
  },
  {
    id: 2,
    title: "Build Digital Asset",
    author: "purepearl studio",
    category: "Creative Marketing",
    level: "Beginner",
    rating: 4.5,
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
    studentsCount: "26+",
    price: 25,
    image: "/assets/course_digital_asset.png"
  },
  {
    id: 3,
    title: "the Power of Big Data",
    author: "purepearl studio",
    category: "Marketing",
    level: "Beginner",
    rating: 4.5,
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
    studentsCount: "26+",
    price: 25,
    image: "/assets/course_big_data.png"
  },
  {
    id: 4,
    title: "Balancing Productivity and Life",
    author: "purepearl studio",
    category: "Featured",
    level: "Beginner",
    rating: 4.5,
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
    studentsCount: "26+",
    price: 25,
    image: "/assets/course_productivity.png"
  },
  {
    id: 5,
    title: "Mastering Money Management",
    author: "purepearl studio",
    category: "Marketing",
    level: "Beginner",
    rating: 4.5,
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
    studentsCount: "26+",
    price: 25,
    image: "/assets/course_money.png"
  },
  {
    id: 6,
    title: "From Idea to Startup Success",
    author: "purepearl studio",
    category: "Creative Marketing",
    level: "Beginner",
    rating: 4.5,
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
    studentsCount: "26+",
    price: 25,
    image: "/assets/course_startup.png"
  },
  {
    id: 7,
    title: "Learn Figma from Basic",
    author: "purepearl studio",
    category: "UI/UX Design",
    level: "Beginner",
    rating: 4.5,
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
    studentsCount: "26+",
    price: 25,
    image: "/assets/course_figma.png"
  },
  {
    id: 8,
    title: "Build Digital Asset",
    author: "purepearl studio",
    category: "Animation",
    level: "Beginner",
    rating: 4.5,
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
    studentsCount: "26+",
    price: 25,
    image: "/assets/course_digital_asset.png"
  },
  {
    id: 9,
    title: "the Power of Big Data",
    author: "purepearl studio",
    category: "Social Media",
    level: "Beginner",
    rating: 4.5,
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
    studentsCount: "26+",
    price: 25,
    image: "/assets/course_big_data.png"
  },
  {
    id: 10,
    title: "Balancing Productivity and Life",
    author: "purepearl studio",
    category: "Featured",
    level: "Beginner",
    rating: 4.5,
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
    studentsCount: "26+",
    price: 25,
    image: "/assets/course_productivity.png"
  },
  {
    id: 11,
    title: "Mastering Money Management",
    author: "purepearl studio",
    category: "Marketing",
    level: "Beginner",
    rating: 4.5,
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
    studentsCount: "26+",
    price: 25,
    image: "/assets/course_money.png"
  },
  {
    id: 12,
    title: "From Idea to Startup Success",
    author: "purepearl studio",
    category: "Cooking",
    level: "Beginner",
    rating: 4.5,
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
    studentsCount: "26+",
    price: 25,
    image: "/assets/course_startup.png"
  },
  {
    id: 13,
    title: "Learn Figma from Basic",
    author: "purepearl studio",
    category: "Drawing & Painting",
    level: "Beginner",
    rating: 4.5,
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
    studentsCount: "26+",
    price: 25,
    image: "/assets/course_figma.png"
  },
  {
    id: 14,
    title: "Build Digital Asset",
    author: "purepearl studio",
    category: "Music",
    level: "Beginner",
    rating: 4.5,
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
    studentsCount: "26+",
    price: 25,
    image: "/assets/course_digital_asset.png"
  },
  {
    id: 15,
    title: "the Power of Big Data",
    author: "purepearl studio",
    category: "Drawing & Painting",
    level: "Beginner",
    rating: 4.5,
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
    studentsCount: "26+",
    price: 25,
    image: "/assets/course_big_data.png"
  },
  {
    id: 16,
    title: "Balancing Productivity and Life",
    author: "purepearl studio",
    category: "Music",
    level: "Beginner",
    rating: 4.5,
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
    studentsCount: "26+",
    price: 25,
    image: "/assets/course_productivity.png"
  },
  {
    id: 17,
    title: "Mastering Money Management",
    author: "purepearl studio",
    category: "Cooking",
    level: "Beginner",
    rating: 4.5,
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
    studentsCount: "26+",
    price: 25,
    image: "/assets/course_money.png"
  },
  {
    id: 18,
    title: "From Idea to Startup Success",
    author: "purepearl studio",
    category: "Featured",
    level: "Beginner",
    rating: 4.5,
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
    studentsCount: "26+",
    price: 25,
    image: "/assets/course_startup.png"
  }
];

const categoryTabs = [
  "Featured",
  "Music",
  "Drawing & Painting",
  "Marketing",
  "Animation",
  "Social Media",
  "UI/UX Design",
  "Creative Marketing",
  "Cooking"
];

export default function SearchPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialQuery = searchParams.get('q') || '';
  
  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const [activeCategory, setActiveCategory] = useState('Featured');
  const [selectedLevel, setSelectedLevel] = useState('All');
  const [sortBy, setSortBy] = useState('Most relevant');
  const [currentPage, setCurrentPage] = useState(1);
  const [coursesDropdownOpen, setCoursesDropdownOpen] = useState(false);
  const [filterDropdownOpen, setFilterDropdownOpen] = useState(false);
  const [levelDropdownOpen, setLevelDropdownOpen] = useState(false);
  const [sortDropdownOpen, setSortDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const ITEMS_PER_PAGE = 9;

  // Filter logic
  const filteredCourses = useMemo(() => {
    return fullCourseCatalog.filter((course) => {
      const matchesCategory =
        activeCategory === 'Featured' ||
        course.category.toLowerCase() === activeCategory.toLowerCase();

      const matchesSearch =
        !searchQuery.trim() ||
        course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.category.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesLevel =
        selectedLevel === 'All' || course.level === selectedLevel;

      return matchesCategory && matchesSearch && matchesLevel;
    });
  }, [activeCategory, searchQuery, selectedLevel]);

  // Pagination logic
  const totalPages = Math.max(1, Math.ceil(filteredCourses.length / ITEMS_PER_PAGE));
  const pageIndex = Math.min(currentPage, totalPages);
  const paginatedCourses = useMemo(() => {
    const start = (pageIndex - 1) * ITEMS_PER_PAGE;
    return filteredCourses.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredCourses, pageIndex]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setSearchParams(searchQuery ? { q: searchQuery } : {});
    setCurrentPage(1);
  };

  return (
    <div className="min-h-screen bg-white text-[#242528] selection:bg-[#D4FB20] selection:text-[#242528] flex flex-col font-sans">
      {/* ======================================================== */}
      {/* 1. TOP BANNER & HEADER (Persian Blue #003BE2 with grid)  */}
      {/* ======================================================== */}
      <section className="relative w-full bg-[#003BE2] overflow-hidden pt-0 pb-16">
        {/* Blueprint grid background */}
        <GridBackground />

        {/* Top Navbar with White Text */}
        <header className="relative w-full z-30">
          <div className="max-w-[1240px] mx-auto px-6 h-24 flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group transition-transform hover:scale-105 duration-200">
              <ByteSpaceLogo white />
            </Link>

            {/* Center Navigation */}
            <nav className="hidden md:flex items-center gap-8 text-[15px] font-normal text-white/90">
              <Link to="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <Link to="/courses" className="text-white font-medium relative after:content-[''] after:absolute after:bottom-[-6px] after:left-0 after:w-full after:h-[2px] after:bg-[#D4FB20]">
                Courses
              </Link>
              <Link to="/creator" className="hover:text-white transition-colors">
                Creators
              </Link>
            </nav>

            {/* Right Nav */}
            <div className="hidden md:flex items-center gap-6 text-white">
              <Link to="/login" className="text-[15px] font-normal hover:text-[#D4FB20] transition-colors">
                Sign In
              </Link>
              <Link to="/register" className="text-[15px] font-normal hover:text-[#D4FB20] transition-colors">
                Join Us
              </Link>
              <button
                type="button"
                aria-label="Shopping bag"
                className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors text-white cursor-pointer"
              >
                <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 6H16C16 3.79 14.21 2 12 2C9.79 2 8 3.79 8 6H6C4.9 6 4 6.9 4 8V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8C20 6.9 19.1 6 18 6ZM12 4C13.1 4 14 4.9 14 6H10C10 4.9 10.9 4 12 4ZM18 20H6V8H8V10C8 10.55 8.45 11 9 11C9.55 11 10 10.55 10 10V8H14V10C14 10.55 14.45 11 15 11C15.55 11 16 10.55 16 10V8H18V20Z" />
                </svg>
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="flex md:hidden items-center gap-3">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-white focus:outline-none cursor-pointer"
                aria-label="Toggle menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {mobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Dropdown */}
          {mobileMenuOpen && (
            <div className="md:hidden bg-[#0031BD] border-b border-white/10 px-6 py-4 space-y-3 text-white">
              <Link to="/" className="block py-1">Home</Link>
              <Link to="/courses" className="block font-bold text-[#D4FB20] py-1">Courses</Link>
              <Link to="/creator" className="block py-1">Creators</Link>
              <div className="pt-2 border-t border-white/20 flex items-center justify-between">
                <Link to="/login" className="text-sm">Sign In</Link>
                <Link to="/register" className="text-sm font-semibold bg-[#D4FB20] text-[#242528] px-4 py-2 rounded-full">Join Us</Link>
              </div>
            </div>
          )}
        </header>

        {/* Center Title and Search Bar */}
        <div className="relative z-10 max-w-[900px] mx-auto px-6 mt-4 sm:mt-6 text-center flex flex-col items-center">
          <h1 className="font-['Poppins'] font-semibold text-3xl sm:text-4xl md:text-[44px] text-white tracking-tight mb-8">
            Find Your Next Course
          </h1>

          {/* Search Bar + Courses Dropdown Pill */}
          <form
            onSubmit={handleSearchSubmit}
            className="flex items-center justify-center gap-3 w-full max-w-[620px]"
          >
            {/* White search input pill */}
            <div className="flex-1 bg-white rounded-full px-5 py-3 flex items-center gap-3 shadow-[0_8px_30px_rgba(0,0,0,0.12)]">
              <svg className="w-5 h-5 text-[#82868E] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by course title, author or keyword..."
                className="w-full bg-transparent text-[#242528] placeholder-[#82868E] text-base focus:outline-none"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  aria-label="Clear search"
                  className="text-gray-400 hover:text-gray-600 p-1 text-sm rounded-full transition-colors cursor-pointer"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Yellow/Lime Courses dropdown button */}
            <div className="relative shrink-0">
              <button
                type="button"
                onClick={() => setCoursesDropdownOpen(!coursesDropdownOpen)}
                className="bg-[#D4FB20] hover:bg-[#cbf516] active:scale-95 text-[#242528] font-medium text-base px-6 py-3 rounded-full flex items-center gap-2 cursor-pointer shadow-md transition-all"
              >
                <span>Courses</span>
                <svg className={`w-4 h-4 transition-transform ${coursesDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {coursesDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-2xl shadow-xl border border-[#E8E9EB] py-2 z-40 text-left text-sm text-[#242528]">
                  <button
                    type="button"
                    onClick={() => { setActiveCategory('Featured'); setCoursesDropdownOpen(false); }}
                    className="w-full text-left px-4 py-2 hover:bg-[#F5F5F6]"
                  >
                    All Courses
                  </button>
                  <button
                    type="button"
                    onClick={() => { setActiveCategory('UI/UX Design'); setCoursesDropdownOpen(false); }}
                    className="w-full text-left px-4 py-2 hover:bg-[#F5F5F6]"
                  >
                    UI/UX Design
                  </button>
                  <button
                    type="button"
                    onClick={() => { setActiveCategory('Marketing'); setCoursesDropdownOpen(false); }}
                    className="w-full text-left px-4 py-2 hover:bg-[#F5F5F6]"
                  >
                    Marketing
                  </button>
                  <button
                    type="button"
                    onClick={() => { setActiveCategory('Cooking'); setCoursesDropdownOpen(false); }}
                    className="w-full text-left px-4 py-2 hover:bg-[#F5F5F6]"
                  >
                    Cooking
                  </button>
                </div>
              )}
            </div>
          </form>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 2. FILTER TOOLBAR & CATEGORY PILLS                       */}
      {/* ======================================================== */}
      <section className="pt-10 pb-6 bg-white border-b border-[#F5F5F6]">
        <div className="max-w-[1240px] mx-auto px-6">
          {/* Top Filter Buttons Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
            {/* Left Filter Buttons */}
            <div className="flex flex-wrap items-center gap-3">
              {/* Filter Button */}
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setFilterDropdownOpen(!filterDropdownOpen)}
                  className="rounded-full px-5 py-2.5 border border-[#E8E9EB] hover:border-[#242528] bg-white text-sm font-medium text-[#565A65] hover:text-[#242528] flex items-center gap-2 cursor-pointer transition-colors"
                >
                  {/* Filter icon */}
                  <svg className="w-4 h-4 text-[#565A65]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 6h16M7 12h10M10 18h4" strokeLinecap="round" />
                  </svg>
                  <span>Filter</span>
                </button>
                {filterDropdownOpen && (
                  <div className="absolute left-0 mt-2 w-56 bg-white rounded-2xl shadow-xl border border-[#E8E9EB] p-3 z-30">
                    <p className="text-xs font-semibold text-[#82868E] mb-2 uppercase">Quick Filter</p>
                    <button
                      type="button"
                      onClick={() => { setSelectedLevel('All'); setActiveCategory('Featured'); setFilterDropdownOpen(false); }}
                      className="block w-full text-left px-3 py-1.5 text-sm hover:bg-[#F5F5F6] rounded-lg"
                    >
                      Reset All Filters
                    </button>
                  </div>
                )}
              </div>

              {/* Level Button */}
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setLevelDropdownOpen(!levelDropdownOpen)}
                  className={`rounded-full px-5 py-2.5 border border-[#E8E9EB] hover:border-[#242528] bg-white text-sm font-medium flex items-center gap-2 cursor-pointer transition-colors ${
                    selectedLevel !== 'All' ? 'border-[#003BE2] text-[#003BE2]' : 'text-[#565A65]'
                  }`}
                >
                  {/* Signal Cellular Icon */}
                  <svg className="w-4 h-4 text-[#565A65]" viewBox="0 0 24 24" fill="currentColor">
                    <rect x="3" y="14" width="3" height="7" rx="1" />
                    <rect x="9" y="10" width="3" height="11" rx="1" />
                    <rect x="15" y="6" width="3" height="15" rx="1" />
                  </svg>
                  <span>Level{selectedLevel !== 'All' ? `: ${selectedLevel}` : ''}</span>
                </button>
                {levelDropdownOpen && (
                  <div className="absolute left-0 mt-2 w-44 bg-white rounded-2xl shadow-xl border border-[#E8E9EB] p-2 z-30 text-sm">
                    {['All', 'Beginner', 'Intermediate', 'Advanced'].map((lvl) => (
                      <button
                        key={lvl}
                        type="button"
                        onClick={() => { setSelectedLevel(lvl); setLevelDropdownOpen(false); }}
                        className={`block w-full text-left px-3 py-2 rounded-lg hover:bg-[#F5F5F6] ${
                          selectedLevel === lvl ? 'font-semibold text-[#003BE2]' : 'text-[#242528]'
                        }`}
                      >
                        {lvl}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Category Button */}
              <button
                type="button"
                onClick={() => {
                  const element = document.getElementById('category-pills');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="rounded-full px-5 py-2.5 border border-[#E8E9EB] hover:border-[#242528] bg-white text-sm font-medium text-[#565A65] hover:text-[#242528] flex items-center gap-2 cursor-pointer transition-colors"
              >
                {/* Shapes / Category Icon */}
                <svg className="w-4 h-4 text-[#565A65]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="3" width="7" height="7" rx="1" />
                  <rect x="14" y="3" width="7" height="7" rx="1" />
                  <rect x="14" y="14" width="7" height="7" rx="1" />
                  <circle cx="6.5" cy="17.5" r="3.5" />
                </svg>
                <span>Category</span>
              </button>
            </div>

            {/* Right Sort Button ("Most relevant") */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setSortDropdownOpen(!sortDropdownOpen)}
                className="rounded-full px-5 py-2.5 border border-[#E8E9EB] hover:border-[#242528] bg-white text-sm font-medium text-[#565A65] hover:text-[#242528] flex items-center gap-2 cursor-pointer transition-colors"
              >
                {/* Sort / descending lines icon */}
                <svg className="w-4 h-4 text-[#565A65]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 6h16M4 12h10M4 18h6" strokeLinecap="round" />
                </svg>
                <span>{sortBy}</span>
              </button>
              {sortDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-2xl shadow-xl border border-[#E8E9EB] p-2 z-30 text-sm">
                  {['Most relevant', 'Highest Rated', 'Price: Low to High', 'Newest'].map((item) => (
                    <button
                      key={item}
                      type="button"
                      onClick={() => { setSortBy(item); setSortDropdownOpen(false); }}
                      className={`block w-full text-left px-3 py-2 rounded-lg hover:bg-[#F5F5F6] ${
                        sortBy === item ? 'font-semibold text-[#003BE2]' : 'text-[#242528]'
                      }`}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* 9 Category Pills (Exact from Figma frame 55:1819) */}
          <div id="category-pills" className="flex flex-wrap items-center gap-2.5 select-none pt-2">
            {categoryTabs.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => { setActiveCategory(cat); setCurrentPage(1); }}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-[#D4FB20] text-[#242528] font-bold shadow-sm scale-105'
                    : 'bg-[#F5F5F6] text-[#565A65] hover:bg-[#E8E9EB] hover:text-[#242528]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 3. COURSES GRID                                          */}
      {/* ======================================================== */}
      <section className="py-16 bg-white flex-grow">
        <div className="max-w-[1240px] mx-auto px-6">
          {paginatedCourses.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-xl font-medium text-[#242528]">No courses found matching your criteria.</p>
              <button
                type="button"
                onClick={() => { setSearchQuery(''); setActiveCategory('Featured'); setSelectedLevel('All'); }}
                className="mt-4 bg-[#D4FB20] text-[#242528] font-semibold px-6 py-2.5 rounded-full"
              >
                Reset Search
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {paginatedCourses.map((course, idx) => (
                <article
                  key={`${course.id}-${idx}`}
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
                        onError={(e) => {
                          if (!e.currentTarget.dataset.retried) {
                            e.currentTarget.dataset.retried = "1";
                            e.currentTarget.src = "/assets/course_video_preview.png";
                          }
                        }}
                      />
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

                  {/* Course Details */}
                  <div className="pt-4 px-1 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between gap-2">
                        <Link to={`/courses/${course.id}`} className="flex-1 truncate">
                          <h3 className="font-['Poppins'] font-semibold text-lg text-[#242528] group-hover:text-[#003BE2] transition-colors leading-snug truncate">
                            {course.title}
                          </h3>
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

                    {/* Level & Avatars */}
                    <div className="flex items-center justify-between mt-5 pt-3 border-t border-[#F5F5F6]">
                      <div className="flex items-center gap-1.5 text-xs text-[#565A65] font-medium bg-[#F5F5F6] px-2.5 py-1 rounded-full">
                        <svg className="w-3.5 h-3.5 text-[#565A65]" viewBox="0 0 24 24" fill="currentColor">
                          <rect x="3" y="14" width="3" height="7" rx="1" />
                          <rect x="9" y="10" width="3" height="11" rx="1" />
                          <rect x="15" y="6" width="3" height="15" rx="1" />
                        </svg>
                        <span>{course.level}</span>
                      </div>

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

                    {/* Price */}
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-baseline gap-1">
                        <span className="font-['Poppins'] font-bold text-xl text-[#003BE2]">
                          ${course.price}
                        </span>
                        <span className="text-xs text-[#82868E] font-normal">
                          /lifetime
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
          )}

          {/* ======================================================== */}
          {/* 4. PAGINATION (Exact Figma #55:834)                      */}
          {/* ======================================================== */}
          <div className="mt-16 flex items-center justify-center gap-6 select-none">
            {/* Previous Button */}
            <button
              type="button"
              disabled={currentPage <= 1}
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              aria-label="Previous page"
              className="w-10 h-10 rounded-full border border-[#E8E9EB] hover:border-[#242528] disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center text-[#242528] transition-colors cursor-pointer"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Page Numbers: 1, 2, 3, 4, 5 */}
            <div className="flex items-center gap-5 font-['Poppins'] text-base font-semibold">
              {[1, 2, 3, 4, 5].map((pageNum) => (
                <button
                  key={pageNum}
                  type="button"
                  onClick={() => setCurrentPage(pageNum)}
                  className={`transition-colors cursor-pointer ${
                    currentPage === pageNum
                      ? 'text-[#242528] font-bold text-lg underline decoration-[#D4FB20] decoration-4 underline-offset-4'
                      : 'text-[#82868E] hover:text-[#242528]'
                  }`}
                >
                  {pageNum}
                </button>
              ))}
            </div>

            {/* Next Button */}
            <button
              type="button"
              disabled={currentPage >= 5}
              onClick={() => setCurrentPage((p) => Math.min(5, p + 1))}
              aria-label="Next page"
              className="w-10 h-10 rounded-full border border-[#E8E9EB] hover:border-[#242528] disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center text-[#242528] transition-colors cursor-pointer"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 5. FOOTER                                                */}
      {/* ======================================================== */}
      <Footer />
    </div>
  );
}

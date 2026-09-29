import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import GridBackground from '../components/GridBackground';
import ByteSpaceLogo from '../components/ByteSpaceLogo';

// 6 creator courses matching Figma frame 60:1878
const creatorCourses = [
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
    period: "/lifetime",
    image: "/assets/course_figma.png"
  },
  {
    id: 2,
    title: "Build Digital Asset",
    author: "purepearl studio",
    category: "Graphic Design",
    level: "Beginner",
    rating: 4.5,
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
    studentsCount: "26+",
    price: 25,
    period: "/lifetime",
    image: "/assets/course_digital_asset.png"
  },
  {
    id: 3,
    title: "the Power of Big Data",
    author: "purepearl studio",
    category: "Data Science",
    level: "Beginner",
    rating: 4.5,
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
    studentsCount: "26+",
    price: 25,
    period: "/lifetime",
    image: "/assets/course_big_data.png"
  },
  {
    id: 4,
    title: "Balancing Productivity an...",
    fullTitle: "Balancing Productivity and Life",
    author: "purepearl studio",
    category: "Productivity",
    level: "Beginner",
    rating: 4.5,
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
    studentsCount: "26+",
    price: 25,
    period: "/lifetime",
    image: "/assets/course_productivity.png"
  },
  {
    id: 5,
    title: "Mastering Money Manage...",
    fullTitle: "Mastering Money Management",
    author: "purepearl studio",
    category: "Finance",
    level: "Beginner",
    rating: 4.5,
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
    studentsCount: "26+",
    price: 25,
    period: "/lifetime",
    image: "/assets/course_money.png"
  },
  {
    id: 6,
    title: "From Idea to Startup Succ...",
    fullTitle: "From Idea to Startup Success",
    author: "purepearl studio",
    category: "Marketing",
    level: "Beginner",
    rating: 4.5,
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
    studentsCount: "26+",
    price: 25,
    period: "/lifetime",
    image: "/assets/course_startup.png"
  }
];

export default function CreatorPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isFollowing, setIsFollowing] = useState(false);
  const [followerCount, setFollowerCount] = useState(12);

  // Filter & Sort State
  const [selectedLevel, setSelectedLevel] = useState('All');
  const [levelDropdownOpen, setLevelDropdownOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [categoryDropdownOpen, setCategoryDropdownOpen] = useState(false);
  const [sortBy, setSortBy] = useState('Most relevant');
  const [sortDropdownOpen, setSortDropdownOpen] = useState(false);

  const toggleFollow = () => {
    if (isFollowing) {
      setIsFollowing(false);
      setFollowerCount(prev => prev - 1);
    } else {
      setIsFollowing(true);
      setFollowerCount(prev => prev + 1);
    }
  };

  const categoriesList = useMemo(() => {
    const cats = new Set(creatorCourses.map(c => c.category));
    return ['All', ...Array.from(cats)];
  }, []);

  const filteredAndSortedCourses = useMemo(() => {
    return creatorCourses
      .filter(course => {
        const matchesLevel = selectedLevel === 'All' || course.level === selectedLevel;
        const matchesCategory = selectedCategory === 'All' || course.category === selectedCategory;
        return matchesLevel && matchesCategory;
      })
      .sort((a, b) => {
        if (sortBy === 'Highest Rated') return b.rating - a.rating;
        if (sortBy === 'Price: Low to High') return a.price - b.price;
        if (sortBy === 'Newest') return b.id - a.id;
        return 0; // Most relevant default order
      });
  }, [selectedLevel, selectedCategory, sortBy]);

  return (
    <div className="min-h-screen bg-white text-[#242528] selection:bg-[#D4FB20] selection:text-[#242528] flex flex-col font-sans">
      {/* ======================================================== */}
      {/* 1. HERO HEADER (Persian Blue #003BE2 with Blueprint Grid)*/}
      {/* ======================================================== */}
      <section className="relative w-full bg-[#003BE2] overflow-hidden text-white">
        {/* Crisp Blueprint Grid Overlay */}
        <GridBackground />

        {/* Top Navbar */}
        <header className="relative w-full z-30">
          <div className="max-w-[1240px] mx-auto px-6 h-24 flex items-center justify-between">
            {/* ByteSpace Logo */}
            <Link to="/" className="flex items-center gap-3 group transition-transform hover:scale-105 duration-200">
              <ByteSpaceLogo white />
            </Link>

            {/* Center Navigation Links */}
            <nav className="hidden md:flex items-center gap-8 text-[15px] font-normal text-white/90">
              <Link 
                to="/" 
                className="hover:text-white transition-colors"
              >
                Home
              </Link>
              <Link 
                to="/courses" 
                className="hover:text-white transition-colors"
              >
                Courses
              </Link>
              <Link 
                to="/creator" 
                className="text-white font-medium relative after:content-[''] after:absolute after:bottom-[-6px] after:left-0 after:w-full after:h-[2px] after:bg-[#D4FB20]"
              >
                Creators
              </Link>
            </nav>

            {/* Right Nav Auth & Shopping Bag */}
            <div className="hidden md:flex items-center gap-6 text-white text-[15px] font-normal">
              <Link 
                to="/login" 
                className="hover:text-[#D4FB20] transition-colors"
              >
                Sign In
              </Link>
              <Link 
                to="/register" 
                className="hover:text-[#D4FB20] transition-colors"
              >
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

            {/* Mobile Menu Button */}
            <div className="flex md:hidden items-center gap-3">
              <button
                type="button"
                aria-label="Shopping bag"
                className="w-9 h-9 rounded-full flex items-center justify-center bg-white/10 text-white"
              >
                <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 6H16C16 3.79 14.21 2 12 2C9.79 2 8 3.79 8 6H6C4.9 6 4 6.9 4 8V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8C20 6.9 19.1 6 18 6ZM12 4C13.1 4 14 4.9 14 6H10C10 4.9 10.9 4 12 4ZM18 20H6V8H8V10C8 10.55 8.45 11 9 11C9.55 11 10 10.55 10 10V8H14V10C14 10.55 14.45 11 15 11C15.55 11 16 10.55 16 10V8H18V20Z" />
                </svg>
              </button>
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
            <div className="md:hidden bg-[#0031BD] border-b border-white/15 px-6 py-4 space-y-3 text-white">
              <Link to="/" className="block py-1">Home</Link>
              <Link to="/courses" className="block py-1">Courses</Link>
              <Link to="/creator" className="block font-bold text-[#D4FB20] py-1">Creators</Link>
              <div className="pt-2 border-t border-white/20 flex items-center justify-between">
                <Link to="/login" className="text-sm">Sign In</Link>
                <Link to="/register" className="text-sm font-semibold bg-[#D4FB20] text-[#242528] px-4 py-2 rounded-full">Join Us</Link>
              </div>
            </div>
          )}
        </header>

        {/* Creator Profile Section */}
        <div className="relative z-10 max-w-[1240px] mx-auto px-6 pt-4 pb-14 sm:pb-16 md:pb-20">
          {/* Avatar and Profile Header */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 sm:gap-6">
            {/* Avatar Container: Squircle on Salmon Background */}
            <div className="relative w-[100px] h-[100px] sm:w-[110px] sm:h-[110px] md:w-[118px] md:h-[118px] rounded-[26px] overflow-hidden shrink-0 shadow-lg border border-white/25">
              <img 
                src="/assets/purepearl_creator_avatar.png" 
                alt="PurePearl Studio" 
                className="w-full h-full object-cover"
                onError={(e) => {
                  if (!e.currentTarget.dataset.retried) {
                    e.currentTarget.dataset.retried = "1";
                    e.currentTarget.src = "/assets/purepearl_avatar.png";
                  }
                }}
              />
            </div>

            {/* Name, Creator Badge, and Subtitle */}
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-3">
                <h1 className="font-['Poppins'] font-semibold text-2xl sm:text-3xl md:text-[38px] text-white tracking-tight leading-tight">
                  PurePearl Studio
                </h1>
                {/* Lime Creator Badge */}
                <span className="bg-[#D4FB20] text-[#242528] text-xs font-semibold px-3.5 py-1 rounded-full shadow-sm select-none">
                  Creator
                </span>
              </div>
              <p className="text-white/85 text-sm sm:text-base font-normal mt-1.5">
                Passionate UI/UX, Web designer
              </p>
            </div>
          </div>

          {/* Bio Description Paragraphs */}
          <div className="mt-7 sm:mt-8 max-w-[840px] space-y-3.5 text-white/90 text-sm md:text-[15px] leading-[1.68] font-normal">
            <p>
              Welcome to the creative world of [Creator's Name]. Here, you'll discover the passion, expertise, and inspiration that drive my creative journey. Let's explore and learn together!
            </p>
            <p>
              Dive into my creative portfolio, showcasing a glimpse of my artistic endeavors. From digital designs to multimedia projects, each piece tells a unique story. Explore the world of creativity with me.
            </p>
          </div>

          {/* Stats Badges and Follow CTA */}
          <div className="mt-8 sm:mt-10 flex flex-wrap items-center justify-between gap-4">
            {/* Stats Pills */}
            <div className="flex items-center gap-3 sm:gap-4 select-none">
              {/* Products Pill */}
              <div className="bg-white rounded-full px-5 sm:px-6 py-2 sm:py-2.5 flex items-center gap-1.5 shadow-sm text-sm sm:text-base">
                <span className="font-bold text-[#003BE2]">3</span>
                <span className="font-medium text-[#242528]">Products</span>
              </div>

              {/* Followers Pill */}
              <div className="bg-white rounded-full px-5 sm:px-6 py-2 sm:py-2.5 flex items-center gap-1.5 shadow-sm text-sm sm:text-base">
                <span className="font-bold text-[#003BE2]">{followerCount}</span>
                <span className="font-medium text-[#242528]">Followers</span>
              </div>
            </div>

            {/* Follow Button */}
            <button
              type="button"
              onClick={toggleFollow}
              className={`rounded-full px-8 py-2.5 text-sm sm:text-base font-medium shadow-sm transition-all duration-200 cursor-pointer active:scale-95 flex items-center gap-2 ${
                isFollowing
                  ? 'bg-white text-[#003BE2] hover:bg-[#F5F5F6]'
                  : 'bg-[#D4FB20] hover:bg-[#c9f212] text-[#242528]'
              }`}
            >
              {isFollowing ? (
                <>
                  <svg className="w-4 h-4 text-[#003BE2]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>Following</span>
                </>
              ) : (
                <span>Follow</span>
              )}
            </button>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 2. CREATOR'S PRODUCTS & COURSES SECTION (Figma frame 60) */}
      {/* ======================================================== */}
      <section className="py-12 sm:py-16 md:py-20 bg-white flex-grow">
        <div className="max-w-[1240px] mx-auto px-6">
          {/* Top Filter and Sort Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-10 select-none">
            {/* Left Filter Buttons */}
            <div className="flex flex-wrap items-center gap-3">
              {/* Filter Button */}
              <button
                type="button"
                onClick={() => {
                  setSelectedLevel('All');
                  setSelectedCategory('All');
                }}
                className={`rounded-full px-5 py-2 border transition-all text-sm font-medium flex items-center gap-2 cursor-pointer shadow-xs ${
                  selectedLevel !== 'All' || selectedCategory !== 'All'
                    ? 'border-[#003BE2] bg-[#003BE2]/5 text-[#003BE2]'
                    : 'border-[#E8E9EB] hover:border-[#242528] bg-white text-[#242528]'
                }`}
              >
                {/* Funnel Filter Icon */}
                <svg className="w-4 h-4 text-current" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
                </svg>
                <span>Filter</span>
                {(selectedLevel !== 'All' || selectedCategory !== 'All') && (
                  <span className="w-2 h-2 rounded-full bg-[#003BE2]" />
                )}
              </button>

              {/* Level Dropdown */}
              <div className="relative">
                <button
                  type="button"
                  onClick={() => {
                    setLevelDropdownOpen(!levelDropdownOpen);
                    setCategoryDropdownOpen(false);
                    setSortDropdownOpen(false);
                  }}
                  className={`rounded-full px-5 py-2 border transition-all text-sm font-medium flex items-center gap-2 cursor-pointer shadow-xs ${
                    selectedLevel !== 'All'
                      ? 'border-[#003BE2] bg-[#003BE2]/5 text-[#003BE2]'
                      : 'border-[#E8E9EB] hover:border-[#242528] bg-white text-[#242528]'
                  }`}
                >
                  {/* 3 ascending vertical bars icon */}
                  <svg className="w-4 h-4 text-current" viewBox="0 0 24 24" fill="currentColor">
                    <rect x="3" y="14" width="3.5" height="7" rx="1" />
                    <rect x="10.25" y="9" width="3.5" height="12" rx="1" />
                    <rect x="17.5" y="4" width="3.5" height="17" rx="1" />
                  </svg>
                  <span>{selectedLevel === 'All' ? 'Level' : selectedLevel}</span>
                </button>

                {levelDropdownOpen && (
                  <div className="absolute left-0 mt-2 w-44 bg-white rounded-2xl shadow-xl border border-[#E8E9EB] p-2 z-30 text-sm">
                    {['All', 'Beginner', 'Intermediate', 'Advanced'].map((lvl) => (
                      <button
                        key={lvl}
                        type="button"
                        onClick={() => {
                          setSelectedLevel(lvl);
                          setLevelDropdownOpen(false);
                        }}
                        className={`block w-full text-left px-3 py-2 rounded-lg hover:bg-[#F5F5F6] transition-colors ${
                          selectedLevel === lvl ? 'font-semibold text-[#003BE2]' : 'text-[#242528]'
                        }`}
                      >
                        {lvl === 'All' ? 'All Levels' : lvl}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Category Dropdown */}
              <div className="relative">
                <button
                  type="button"
                  onClick={() => {
                    setCategoryDropdownOpen(!categoryDropdownOpen);
                    setLevelDropdownOpen(false);
                    setSortDropdownOpen(false);
                  }}
                  className={`rounded-full px-5 py-2 border transition-all text-sm font-medium flex items-center gap-2 cursor-pointer shadow-xs ${
                    selectedCategory !== 'All'
                      ? 'border-[#003BE2] bg-[#003BE2]/5 text-[#003BE2]'
                      : 'border-[#E8E9EB] hover:border-[#242528] bg-white text-[#242528]'
                  }`}
                >
                  {/* Category 4 shapes icon */}
                  <svg className="w-4 h-4 text-current" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="3" width="7" height="7" rx="1.5" />
                    <rect x="14" y="3" width="7" height="7" rx="1.5" />
                    <rect x="14" y="14" width="7" height="7" rx="1.5" />
                    <circle cx="6.5" cy="17.5" r="3.5" />
                  </svg>
                  <span>{selectedCategory === 'All' ? 'Category' : selectedCategory}</span>
                </button>

                {categoryDropdownOpen && (
                  <div className="absolute left-0 mt-2 w-52 bg-white rounded-2xl shadow-xl border border-[#E8E9EB] p-2 z-30 text-sm max-h-60 overflow-y-auto">
                    {categoriesList.map((cat) => (
                      <button
                        key={cat}
                        type="button"
                        onClick={() => {
                          setSelectedCategory(cat);
                          setCategoryDropdownOpen(false);
                        }}
                        className={`block w-full text-left px-3 py-2 rounded-lg hover:bg-[#F5F5F6] transition-colors ${
                          selectedCategory === cat ? 'font-semibold text-[#003BE2]' : 'text-[#242528]'
                        }`}
                      >
                        {cat === 'All' ? 'All Categories' : cat}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Right Sort Dropdown ("Most relevant") */}
            <div className="relative">
              <button
                type="button"
                onClick={() => {
                  setSortDropdownOpen(!sortDropdownOpen);
                  setLevelDropdownOpen(false);
                  setCategoryDropdownOpen(false);
                }}
                className="rounded-full px-5 py-2 border border-[#E8E9EB] hover:border-[#242528] bg-white text-sm font-medium text-[#242528] flex items-center gap-2 cursor-pointer shadow-xs transition-colors"
              >
                {/* 3 descending horizontal lines icon */}
                <svg className="w-4 h-4 text-[#242528]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
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
                      onClick={() => {
                        setSortBy(item);
                        setSortDropdownOpen(false);
                      }}
                      className={`block w-full text-left px-3 py-2 rounded-lg hover:bg-[#F5F5F6] transition-colors ${
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

          {/* Course Cards Grid: 3 columns */}
          {filteredAndSortedCourses.length === 0 ? (
            <div className="text-center py-20 bg-[#F5F5F6] rounded-3xl p-8">
              <p className="text-lg font-medium text-[#242528]">No courses found for the selected filters.</p>
              <button
                type="button"
                onClick={() => {
                  setSelectedLevel('All');
                  setSelectedCategory('All');
                }}
                className="mt-4 bg-[#D4FB20] text-[#242528] font-semibold px-6 py-2 rounded-full cursor-pointer hover:bg-[#c9f212]"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 md:gap-8">
              {filteredAndSortedCourses.map((course) => (
                <article
                  key={course.id}
                  className="group bg-white rounded-[26px] p-3.5 sm:p-4 border border-[#E8E9EB] shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_16px_36px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
                >
                  {/* Card Image with Frosted Badges */}
                  <Link to={`/courses/${course.id}`} className="block">
                    <div className="relative rounded-[18px] overflow-hidden aspect-[16/10] bg-[#F5F5F6]">
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
                      {/* Frosted Badges Bar on Image Bottom */}
                      <div className="absolute inset-x-2.5 bottom-2.5 flex items-center justify-between gap-1.5 z-10 select-none">
                        <span className="bg-white/80 backdrop-blur-md text-[11px] font-medium text-[#242528] px-2.5 py-1 rounded-full shadow-xs">
                          {course.lessons}
                        </span>
                        <span className="bg-white/80 backdrop-blur-md text-[11px] font-medium text-[#242528] px-2.5 py-1 rounded-full shadow-xs">
                          {course.duration}
                        </span>
                        <span className="bg-white/80 backdrop-blur-md text-[11px] font-medium text-[#242528] px-2.5 py-1 rounded-full shadow-xs">
                          {course.comments}
                        </span>
                      </div>
                    </div>
                  </Link>

                  {/* Card Content */}
                  <div className="pt-4 px-1 flex-1 flex flex-col justify-between">
                    <div>
                      {/* Title & Rating Row */}
                      <div className="flex items-center justify-between gap-2">
                        <Link to={`/courses/${course.id}`}>
                          <h3 
                            className="font-['Poppins'] font-semibold text-lg text-[#242528] group-hover:text-[#003BE2] transition-colors leading-snug truncate max-w-[240px]"
                            title={course.fullTitle || course.title}
                          >
                            {course.title}
                          </h3>
                        </Link>
                        {/* Rating with star */}
                        <div className="flex items-center gap-1 shrink-0 text-sm font-semibold text-[#242528]">
                          <span>{course.rating}</span>
                          <span className="text-[#82868E] text-xs">★</span>
                        </div>
                      </div>

                      {/* Author */}
                      <p className="text-xs text-[#82868E] font-normal mt-1">
                        by <span className="text-[#003BE2] font-medium hover:underline cursor-pointer">{course.author}</span>
                      </p>
                    </div>

                    {/* Bottom Metadata & Avatars Stack */}
                    <div className="mt-5">
                      <div className="flex items-center justify-between gap-2">
                        {/* Level Badge with 3-bar icon */}
                        <div className="inline-flex items-center gap-1.5 text-xs text-[#565A65] font-medium bg-[#F5F5F6] px-3 py-1.5 rounded-full select-none">
                          <svg className="w-3.5 h-3.5 text-[#565A65]" viewBox="0 0 24 24" fill="currentColor">
                            <rect x="3" y="14" width="3" height="7" rx="1" />
                            <rect x="9" y="10" width="3" height="11" rx="1" />
                            <rect x="15" y="6" width="3" height="15" rx="1" />
                          </svg>
                          <span>{course.level}</span>
                        </div>

                        {/* Overlapping Student Avatars + Lime 26+ Badge */}
                        <div className="flex items-center select-none">
                          <div className="flex -space-x-1.5 overflow-hidden">
                            <img 
                              className="inline-block h-6 w-6 rounded-full ring-2 ring-white object-cover" 
                              src="/assets/testimonial_alex.png" 
                              alt="Student" 
                            />
                            <img 
                              className="inline-block h-6 w-6 rounded-full ring-2 ring-white object-cover" 
                              src="/assets/testimonial_sarah.png" 
                              alt="Student" 
                            />
                            <img 
                              className="inline-block h-6 w-6 rounded-full ring-2 ring-white object-cover" 
                              src="/assets/review_avatar_1.png" 
                              alt="Student" 
                            />
                            <img 
                              className="inline-block h-6 w-6 rounded-full ring-2 ring-white object-cover" 
                              src="/assets/testimonial_james.png" 
                              alt="Student" 
                            />
                          </div>
                          {/* Lime 26+ Pill Badge */}
                          <span className="ml-1 inline-flex items-center justify-center h-6 px-1.5 rounded-full text-[10px] font-bold bg-[#D4FB20] text-[#242528] ring-2 ring-white">
                            {course.studentsCount}
                          </span>
                        </div>
                      </div>

                      {/* Price Row: $25 /lifetime */}
                      <Link to={`/courses/${course.id}`} className="mt-4 inline-flex items-baseline gap-1 group/price">
                        <span className="font-['Poppins'] font-bold text-xl text-[#003BE2] group-hover/price:underline">
                          ${course.price}
                        </span>
                        <span className="text-xs text-[#82868E] font-normal">
                          {course.period}
                        </span>
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ======================================================== */}
      {/* 3. FOOTER (Exact Figma Frame Match)                      */}
      {/* ======================================================== */}
      <Footer />
    </div>
  );
}

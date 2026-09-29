import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Link, useParams } from 'react-router-dom';
import Footer from '../components/Footer';
import GridBackground from '../components/GridBackground';
import { courses } from '../data/coursesData';

export default function CourseDetailsPage() {
  const { id } = useParams();
  const course = courses.find((c) => String(c.id) === String(id)) || courses[1] || courses[0];

  const [activeTab, setActiveTab] = useState('About');
  const [isPlaying, setIsPlaying] = useState(false);
  const [enrolled, setEnrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [shareCopied, setShareCopied] = useState(false);
  const [selectedRating, setSelectedRating] = useState('all');

  const videoRef = useRef(null);
  const [blueHeight, setBlueHeight] = useState(957);

  const updateBlueHeight = useCallback(() => {
    if (videoRef.current) {
      const rect = videoRef.current.getBoundingClientRect();
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const isDesktop = window.innerWidth >= 1024;
      const bottomSpacing = isDesktop ? 62 : 40;
      const calculatedHeight = Math.round(rect.top + scrollTop + rect.height + bottomSpacing);
      if (calculatedHeight > 0) {
        setBlueHeight(calculatedHeight);
      }
    }
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  useEffect(() => {
    updateBlueHeight();

    const handleResize = () => {
      updateBlueHeight();
    };

    window.addEventListener('resize', handleResize);

    let resizeObserver;
    if (typeof ResizeObserver !== 'undefined' && videoRef.current) {
      resizeObserver = new ResizeObserver(() => {
        updateBlueHeight();
      });
      resizeObserver.observe(videoRef.current);
      if (document.body) {
        resizeObserver.observe(document.body);
      }
    }

    const timer = setTimeout(updateBlueHeight, 150);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (resizeObserver) {
        resizeObserver.disconnect();
      }
      clearTimeout(timer);
    };
  }, [updateBlueHeight]);

  const handleShare = () => {
    navigator.clipboard?.writeText(window.location.href);
    setShareCopied(true);
    setTimeout(() => setShareCopied(false), 2500);
  };

  const keyPoints = [
    "Foundational Concepts",
    "Design Principles Mastery",
    "Advanced Techniques in Digital Creation",
    "Project Showcase and Critique",
    "Optimizing for Various Platforms",
    "Digital Asset Management Best Practices",
    "Monetization Strategies",
    "Capstone Project: Building Your Portfolio"
  ];

  const lessonModules = [
    {
      id: 1,
      title: "Module 1: Introduction to Digital Assets",
      description: "Lay the groundwork with lessons like 'Understanding Digital Elements' and 'Navigating Design Software Tools.' Dive into the essentials of digital asset creation."
    },
    {
      id: 2,
      title: "Module 2: Design Principles for Impact",
      description: "Master the principles that drive impactful designs with lessons such as 'Color Theory in Digital Design' and 'Typography Essentials.' Elevate your visual communication skills."
    },
    {
      id: 4,
      title: "Module 4: User-Centric Design Strategies",
      description: "Understand 'Design Thinking in Digital Creation' and delve into 'User Experience (UX) Essentials.' Craft digital assets with a focus on user-centric design."
    },
    {
      id: 5,
      title: "Module 5: Interactive Media and Engagement",
      description: "Engage your audience with lessons like 'Creating Interactive Presentations' and 'Integrating Multimedia Elements.' Master the art of creating immersive digital experiences."
    },
    {
      id: 6,
      title: "Module 6: Project Showcase and Critique",
      description: "Perfect your presentation skills with 'Effective Presentation Techniques' and embrace collaboration with 'Peer Critique and Collaboration.' Showcase your work with confidence."
    },
    {
      id: 7,
      title: "Module 7: Optimizing Digital Assets for Various Platforms",
      description: "Adapt your digital creations for 'Mobile Platforms' and optimize for 'Social Media.' Ensure widespread accessibility and engagement across diverse digital landscapes."
    }
  ];

  const ratingBars = [
    { id: 1, percent: '82%', stars: 5, count: 720 },
    { id: 2, percent: '32%', stars: 5, count: 120 },
    { id: 3, percent: '8%', stars: 5, count: 21 },
    { id: 4, percent: '5%', stars: 5, count: 12 },
    { id: 5, percent: '6%', stars: 5, count: 16 }
  ];

  const ratingFilters = [
    { label: 'All rating', value: 'all' },
    { label: '★ 5', value: 5 },
    { label: '★ 4', value: 4 },
    { label: '★ 3', value: 3 },
    { label: '★ 2', value: 2 },
    { label: '★ 1', value: 1 }
  ];

  const reviewsList = [
    {
      id: 1,
      name: "PurePearl Studio",
      avatar: "/assets/review_avatar_1.png",
      role: "UI/UX Designer",
      rating: 5,
      date: "a year ago",
      comment: '"The course provided me with a comprehensive understanding of digital asset creation. The lessons were in-depth, practical, and immediately applicable to my work. Highly recommended!"'
    },
    {
      id: 2,
      name: "Albert Flores",
      avatar: "/assets/review_avatar_2.png",
      role: "UI/UX Designer",
      rating: 5,
      date: "a year ago",
      comment: "This course transformed my approach to digital design. The combination of theory, hands-on exercises, and real-world applications made it a truly enriching experience. Excited to implement what I've learned!"
    },
    {
      id: 3,
      name: "Cody Fisher",
      avatar: "/assets/review_avatar_3.png",
      role: "UI/UX Designer",
      rating: 5,
      date: "a year ago",
      comment: "The project showcase and critique module created a collaborative environment where I could showcase my work, receive valuable feedback, and refine my skills. It added a unique and valuable dimension to the learning process."
    },
    {
      id: 4,
      name: "Brooklyn Simmons",
      avatar: "/assets/review_avatar_4.png",
      role: "UI/UX Designer",
      rating: 5,
      date: "a year ago",
      comment: "The lessons on optimizing digital assets for various platforms were particularly insightful. The course adapts to the evolving digital landscape, and the engaging content kept me motivated throughout."
    }
  ];

  const filteredReviews = selectedRating === 'all'
    ? reviewsList
    : reviewsList.filter((r) => r.rating === selectedRating);

  const courseIncludes = [
    {
      id: 1,
      title: "Learning Resources",
      icon: (
        <svg className="w-5 h-5 text-[#003BE2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    },
    {
      id: 2,
      title: "Quality Lesson Videos",
      icon: (
        <svg className="w-5 h-5 text-[#003BE2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      id: 3,
      title: "Certificate of Completion",
      icon: (
        <svg className="w-5 h-5 text-[#003BE2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      )
    },
    {
      id: 4,
      title: "Private Consultation",
      icon: (
        <svg className="w-5 h-5 text-[#003BE2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-white text-[#242528] selection:bg-[#D4FB20] selection:text-[#242528] flex flex-col font-sans relative overflow-x-hidden">
      {/* Persian Blue Top Background (dynamically aligns 62px below video player matching Figma frame #55:4160) */}
      <div 
        className="absolute top-0 left-0 right-0 bg-[#003BE2] pointer-events-none -z-0 overflow-hidden"
        style={{ height: `${blueHeight}px` }}
        aria-hidden="true"
      >
        <GridBackground />
      </div>

      {/* Top Navbar */}
      <header className="relative w-full z-30">
        <div className="max-w-[1240px] mx-auto px-6 h-24 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <img 
              src="/assets/bytespace_logo_white.svg" 
              alt="ByteSpace" 
              className="h-7 md:h-8 object-contain transition-transform group-hover:scale-105 duration-200" 
            />
          </Link>

          {/* Center Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-[15px] font-normal text-white/90">
            <Link to="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <Link to="/courses" className="hover:text-white transition-colors">
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
            <Link to="/courses" className="block py-1">Courses</Link>
            <Link to="/creator" className="block py-1">Creators</Link>
            <div className="pt-2 border-t border-white/20 flex items-center justify-between">
              <Link to="/login" className="text-sm">Sign In</Link>
              <Link to="/register" className="text-sm font-semibold bg-[#D4FB20] text-[#242528] px-4 py-2 rounded-full">Join Us</Link>
            </div>
          </div>
        )}
      </header>

      {/* Course Header Banner Info */}
      <div className="relative z-10 max-w-[1240px] mx-auto px-6 mt-4 sm:mt-6 pb-8 lg:pb-10">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          {/* Left title & badges */}
          <div className="max-w-[760px]">
            <h1 className="font-['Poppins'] font-semibold text-3xl sm:text-4xl lg:text-[44px] text-white tracking-tight leading-tight">
              {course.title}: A Comprehensive Guide
            </h1>
            <p className="mt-3 text-white/90 text-base sm:text-xl font-medium">
              Unlock the Power of {course.category || 'Digital Creation'} with Expert Guidance
            </p>
            <p className="mt-2 text-[#F1F4FE] text-sm sm:text-base font-medium">
              by{' '}
              <Link to="/creator" className="underline hover:text-[#D4FB20] transition-colors">
                {course.author}
              </Link>
            </p>

            {/* 3 Info Badges */}
            <div className="flex flex-wrap items-center gap-3 mt-6 select-none">
              {/* Level */}
              <div className="bg-white rounded-full px-4 py-2 flex items-center gap-2 shadow-sm text-xs sm:text-sm font-semibold text-[#242528]">
                <svg className="w-4 h-4 text-[#003BE2]" viewBox="0 0 24 24" fill="currentColor">
                  <rect x="3" y="14" width="3" height="7" rx="1" />
                  <rect x="9" y="10" width="3" height="11" rx="1" />
                  <rect x="15" y="6" width="3" height="15" rx="1" />
                </svg>
                <span>{course.level || 'Intermediate'}</span>
              </div>

              {/* Rating */}
              <div className="bg-white rounded-full px-4 py-2 flex items-center gap-1.5 shadow-sm text-xs sm:text-sm font-semibold text-[#242528]">
                <span className="text-[#003BE2] text-base leading-none">★</span>
                <span>{course.rating || 4.5} (172 reviews)</span>
              </div>

              {/* 199 Students */}
              <div className="bg-white rounded-full px-4 py-2 flex items-center gap-2 shadow-sm text-xs sm:text-sm font-semibold text-[#242528]">
                <svg className="w-4 h-4 text-[#003BE2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
                <span>199 Students</span>
              </div>
            </div>
          </div>

          {/* Right: Share Button */}
          <div className="shrink-0">
            <button
              type="button"
              onClick={handleShare}
              className="bg-[#D4FB20] hover:bg-[#cbf516] active:scale-95 text-[#242528] font-semibold text-sm sm:text-base px-6 py-2.5 rounded-full flex items-center gap-2 shadow-[0_4px_16px_rgba(212,251,32,0.3)] transition-all cursor-pointer"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
              </svg>
              <span>{shareCopied ? 'Link Copied!' : 'Share'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* ======================================================== */}
      {/* 2. MAIN 2-COLUMN SECTION: VIDEO/CONTENT (720px) + CARD (412px) */}
      {/* Both columns start at the EXACT same Y level (Figma y: 416) */}
      {/* ======================================================== */}
      <div className="relative z-10 max-w-[1240px] w-full mx-auto px-6 pb-20 sm:pb-28">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-10 lg:gap-14">
          
          {/* LEFT COLUMN: Video Player + Tabs + Tab Content (720px width) */}
          <div className="w-full lg:w-[720px] max-w-[720px] shrink-0">
            {/* Video Preview Player (720px width x 479px height matching Figma #55:4202) */}
            <div 
              ref={videoRef}
              className="relative w-full rounded-[24px] overflow-hidden aspect-[16/10.6] lg:h-[479px] shadow-[0_25px_50px_rgba(0,0,0,0.3)] border border-white/20 bg-[#242528] group mb-20 lg:mb-[124px]"
            >
              <img
                src="/assets/course_video_preview.png"
                alt="Course Video Preview"
                onLoad={updateBlueHeight}
                className="w-full h-full object-cover select-none transition-transform duration-700 group-hover:scale-105"
              />

              {/* Frosted Squircle Play/Pause Button (Exact Figma Match) */}
              <div className="absolute inset-0 flex items-center justify-center">
                <button
                  type="button"
                  onClick={() => setIsPlaying(!isPlaying)}
                  aria-label={isPlaying ? "Pause course preview" : "Play course preview"}
                  className="w-20 h-20 sm:w-[92px] sm:h-[92px] rounded-[24px] sm:rounded-[26px] bg-black/45 hover:bg-black/55 active:scale-95 backdrop-blur-xl border border-white/20 shadow-2xl flex items-center justify-center transition-all duration-300 cursor-pointer group-hover:scale-105 select-none"
                >
                  {/* White Circle with Transparent Play Triangle Cutout */}
                  {isPlaying ? (
                    <svg viewBox="0 0 100 100" className="w-12 h-12 sm:w-[52px] sm:h-[52px]" fill="white">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M 50 0 A 50 50 0 1 0 50 100 A 50 50 0 1 0 50 0 Z M 37 32 H 45 V 68 H 37 Z M 55 32 H 63 V 68 H 55 Z"
                      />
                    </svg>
                  ) : (
                    <svg viewBox="0 0 100 100" className="w-12 h-12 sm:w-[52px] sm:h-[52px]" fill="white">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M 50 0 A 50 50 0 1 0 50 100 A 50 50 0 1 0 50 0 Z M 43 33 L 66 50 L 43 67 Z"
                      />
                    </svg>
                  )}
                </button>
              </div>

              {isPlaying && (
                <div className="absolute inset-0 bg-black/90 flex flex-col items-center justify-center p-6 text-white text-center z-20">
                  <p className="text-xl font-semibold mb-4">Sample Course Lesson Playing...</p>
                  <button
                    type="button"
                    onClick={() => setIsPlaying(false)}
                    className="bg-[#D4FB20] text-[#242528] px-6 py-2 rounded-full font-bold text-sm cursor-pointer"
                  >
                    Close Preview
                  </button>
                </div>
              )}
            </div>

            {/* Tabs: About, Lesson, Reviews */}
            <div className="flex items-center gap-3 mb-10 select-none">
              {['About', 'Lesson', 'Reviews'].map((tab) => (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 cursor-pointer ${
                    (activeTab === tab || (tab === 'Lesson' && activeTab === 'Lessons'))
                      ? 'bg-[#D4FB20] text-[#242528] shadow-sm'
                      : 'bg-[#F5F5F6] text-[#565A65] hover:bg-[#E8E9EB]'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* TAB 1: About */}
            {activeTab === 'About' && (
              <div className="space-y-12 animate-fadeIn">
                {/* Description Section */}
                <div>
                  <h2 className="font-['Poppins'] font-bold text-2xl text-[#242528] mb-4">
                    Description
                  </h2>
                  <div className="text-[#565A65] text-base leading-[1.7] space-y-4 font-normal">
                    <p>
                      Embark on an enlightening exploration into the world of digital creation with our comprehensive course, "Build Digital Assets: A Comprehensive Guide." This transformative learning experience invites you to delve deep into the intricacies of crafting impactful digital content. From laying the groundwork with foundational concepts to mastering advanced techniques, this guide is meticulously curated to empower you with the skills essential for navigating the dynamic landscape of digital asset creation.
                    </p>
                    <p>
                      In the initial modules, you'll establish a solid foundation by immersing yourself in the foundational concepts that form the backbone of digital asset creation. Understand the fundamental elements that constitute compelling digital content and gain proficiency in leveraging these elements to communicate effectively in the digital realm.
                    </p>
                    <p>
                      As you progress through the course, you'll ascend to higher levels of expertise, delving into the nuances of design principles that drive impactful creations. Uncover the secrets behind effective visual communication, exploring color theory, typography, and layout strategies that elevate your digital assets to new heights. Engage in hands-on exercises that reinforce your understanding, allowing you to apply these principles in practical scenarios.
                    </p>
                  </div>
                </div>

                {/* Sneak Peak Section */}
                <div>
                  <h2 className="font-['Poppins'] font-bold text-2xl text-[#242528] mb-5">
                    Sneak Peak
                  </h2>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    <div className="rounded-[16px] overflow-hidden aspect-[4/3] bg-[#F5F5F6] shadow-sm hover:shadow-md transition-shadow">
                      <img
                        src="/assets/sneak_peak_1.png"
                        alt="Wireframe Sketching"
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="rounded-[16px] overflow-hidden aspect-[4/3] bg-[#F5F5F6] shadow-sm hover:shadow-md transition-shadow">
                      <img
                        src="/assets/sneak_peak_2.png"
                        alt="UI Mockup on Laptop"
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="rounded-[16px] overflow-hidden aspect-[4/3] bg-[#F5F5F6] shadow-sm hover:shadow-md transition-shadow">
                      <img
                        src="/assets/sneak_peak_3.png"
                        alt="Desktop Web Design"
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="rounded-[16px] overflow-hidden aspect-[4/3] bg-[#F5F5F6] shadow-sm hover:shadow-md transition-shadow">
                      <img
                        src="/assets/sneak_peak_4.png"
                        alt="Mobile App UI"
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </div>
                </div>

                {/* Key Points Section */}
                <div>
                  <h2 className="font-['Poppins'] font-bold text-2xl text-[#242528] mb-5">
                    Key Points
                  </h2>
                  <div className="space-y-3.5">
                    {keyPoints.map((point) => (
                      <div key={point} className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded-full bg-[#003BE2] flex items-center justify-center shrink-0">
                          <svg className="w-3.5 h-3.5 text-white" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-[#565A65] text-base font-normal">
                          {point}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* TAB 2: Lessons (matching Figma node 60:102 and user screenshot) */}
            {(activeTab === 'Lessons' || activeTab === 'Lesson') && (
              <div className="space-y-10 animate-fadeIn">
                {/* Explore the Modules */}
                <div>
                  <h2 className="font-['Poppins'] font-bold text-2xl sm:text-[26px] text-[#242528] tracking-tight mb-3">
                    Explore the Modules
                  </h2>
                  <p className="text-[#565A65] text-sm sm:text-base leading-relaxed max-w-[680px]">
                    Immerse yourself in the course content as we break down each module into comprehensive lessons, providing practical insights and hands-on experiences.
                  </p>
                </div>

                {/* Lesson List */}
                <div>
                  <h3 className="font-['Poppins'] font-bold text-xl text-[#242528] mb-6">
                    Lesson List
                  </h3>

                  <div className="space-y-5">
                    {lessonModules.map((item) => (
                      <div key={item.id} className="flex items-start gap-4 sm:gap-5 group">
                        {/* Video Camera Icon in Lime Rounded Square */}
                        <div className="w-12 h-12 rounded-[14px] bg-[#D4FB20] flex items-center justify-center shrink-0 shadow-sm transition-transform duration-200 group-hover:scale-105">
                          <svg className="w-5 h-5 text-[#242528]" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M4 6a2 2 0 00-2 2v8a2 2 0 002 2h10a2 2 0 002-2V8a2 2 0 00-2-2H4zm14 3.5l4-2.5v10l-4-2.5v-5z" />
                          </svg>
                        </div>

                        {/* Module details */}
                        <div className="flex-1">
                          <h4 className="font-semibold text-[15px] sm:text-base text-[#242528] leading-snug group-hover:text-[#003BE2] transition-colors">
                            {item.title}
                          </h4>
                          <p className="text-xs sm:text-[13px] text-[#565A65] leading-relaxed mt-1 max-w-[620px]">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Lesson Content */}
                <div>
                  <h3 className="font-['Poppins'] font-bold text-xl text-[#242528] mb-3">
                    Lesson Content
                  </h3>
                  <p className="text-[#565A65] text-sm sm:text-base leading-relaxed max-w-[680px]">
                    Engage with each lesson through captivating video content, detailed textual explanations, and interactive elements. Download resources, complete assignments, and test your understanding with quizzes.
                  </p>
                </div>

                {/* Lesson Progress Tracking */}
                <div>
                  <h3 className="font-['Poppins'] font-bold text-xl text-[#242528] mb-3">
                    Lesson Progress Tracking
                  </h3>
                  <p className="text-[#565A65] text-sm sm:text-base leading-relaxed max-w-[680px] mb-6">
                    Witness your growth as you complete lessons, with an intuitive progress tracking feature guiding you through your learning journey.
                  </p>

                  {/* Progress Card */}
                  <div className="border border-[#E8E9EB] rounded-[18px] p-6 bg-white shadow-sm max-w-[580px]">
                    <div className="text-xs font-semibold text-[#565A65] mb-2 tracking-wide">
                      Learning Progress
                    </div>
                    <div className="text-3xl sm:text-[38px] font-bold text-[#242528] tracking-tight leading-none mb-4">
                      55%
                    </div>
                    <div className="w-full h-2.5 bg-[#E8E9EB] rounded-full overflow-hidden flex">
                      <div className="w-[55%] h-full bg-[#D4FB20] rounded-full transition-all duration-700" />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 3: Reviews (matching Figma node 60:681 and user screenshots) */}
            {activeTab === 'Reviews' && (
              <div className="space-y-10 animate-fadeIn">
                {/* Heading & Subtitle */}
                <div>
                  <h2 className="font-['Poppins'] font-bold text-2xl sm:text-[26px] text-[#242528] tracking-tight mb-3">
                    What Learners Are Saying
                  </h2>
                  <p className="text-[#565A65] text-sm sm:text-base leading-relaxed max-w-[680px]">
                    Discover what our learners have to say about their experience with &apos;Build Digital Assets: A Comprehensive Guide.&apos; Read reviews and ratings from individuals who have embarked on the transformative journey of mastering digital asset creation.
                  </p>
                </div>

                {/* Overall Ratings Card */}
                <div className="border border-[#E8E9EB] rounded-[24px] p-6 sm:p-8 bg-white shadow-sm flex flex-col sm:flex-row items-center gap-6 sm:gap-8">
                  {/* Left Ratings Box */}
                  <div className="w-28 h-28 sm:w-[124px] sm:h-[124px] rounded-[20px] bg-[#D4FB20] flex flex-col items-center justify-center shrink-0">
                    <span className="text-xs font-semibold text-[#242528] mb-1">
                      Ratings
                    </span>
                    <span className="font-['Poppins'] font-bold text-4xl sm:text-[42px] text-[#242528] leading-none">
                      4.7
                    </span>
                  </div>

                  {/* Right Rating Breakdown Bars */}
                  <div className="flex-1 w-full space-y-2.5">
                    {ratingBars.map((bar) => (
                      <div key={bar.id} className="flex items-center gap-3 sm:gap-4 text-xs sm:text-sm">
                        {/* Progress Bar */}
                        <div className="flex-1 h-2 sm:h-2.5 bg-[#E8E9EB] rounded-full overflow-hidden">
                          <div
                            className="h-full bg-[#D4FB20] rounded-full"
                            style={{ width: bar.percent }}
                          />
                        </div>

                        {/* 5 Stars */}
                        <div className="flex items-center gap-0.5 text-[#242528] shrink-0 select-none">
                          {[...Array(bar.stars)].map((_, i) => (
                            <svg key={i} className="w-3.5 h-3.5 fill-[#242528]" viewBox="0 0 24 24">
                              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                            </svg>
                          ))}
                        </div>

                        {/* Rating Count */}
                        <span className="text-[#242528] text-xs sm:text-sm font-medium w-8 text-right shrink-0">
                          {bar.count}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Individual Reviews Section */}
                <div className="space-y-6">
                  {/* Section Title & Filter Pills */}
                  <div>
                    <h3 className="font-['Poppins'] font-bold text-lg text-[#242528] mb-4">
                      Individual Reviews:
                    </h3>
                    <div className="flex flex-wrap items-center gap-2.5 select-none">
                      {ratingFilters.map((filt) => (
                        <button
                          key={String(filt.value)}
                          type="button"
                          onClick={() => setSelectedRating(filt.value)}
                          className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                            selectedRating === filt.value
                              ? 'bg-[#D4FB20] text-[#242528] shadow-sm'
                              : 'bg-[#F5F5F6] text-[#565A65] hover:bg-[#E8E9EB]'
                          }`}
                        >
                          {filt.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Review Cards List */}
                  <div className="space-y-5">
                    {filteredReviews.length > 0 ? (
                      filteredReviews.map((rev) => (
                        <div
                          key={rev.id}
                          className="bg-white rounded-[24px] border border-[#E8E9EB] p-6 sm:p-7 space-y-4 shadow-sm"
                        >
                          {/* Header: Avatar, Name, Role, Date */}
                          <div className="flex items-start justify-between gap-4">
                            <div className="flex items-center gap-3.5">
                              <img
                                src={rev.avatar}
                                alt={rev.name}
                                className="w-12 h-12 rounded-full object-cover border border-[#E8E9EB] shrink-0"
                              />
                              <div>
                                <h4 className="font-semibold text-base text-[#242528] leading-snug">
                                  {rev.name}
                                </h4>
                                <p className="text-xs sm:text-[13px] text-[#82868E] mt-0.5">
                                  {rev.role}
                                </p>
                              </div>
                            </div>
                            <span className="text-xs sm:text-sm text-[#82868E] shrink-0 font-normal">
                              {rev.date}
                            </span>
                          </div>

                          {/* 5 Stars */}
                          <div className="flex items-center gap-1 select-none">
                            {[...Array(rev.rating)].map((_, i) => (
                              <svg key={i} className="w-4 h-4 fill-[#242528]" viewBox="0 0 24 24">
                                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                              </svg>
                            ))}
                          </div>

                          {/* Comment Body */}
                          <p className="text-sm sm:text-[14px] text-[#565A65] leading-[1.7] font-normal">
                            {rev.comment}
                          </p>
                        </div>
                      ))
                    ) : (
                      <div className="bg-[#F8F9FA] rounded-[20px] border border-[#E8E9EB] p-8 text-center text-[#565A65]">
                        <p className="text-base font-medium">No reviews found for this rating.</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* RIGHT COLUMN: 412px Sidebar Card (Figma node #55:4206 - 412 Hug x 959 Hug) */}
          <div className="w-full lg:w-[412px] max-w-[412px] shrink-0">
            <aside className="w-full bg-white rounded-[24px] p-8 sm:p-10 border border-[#E8E9EB] shadow-[0_24px_50px_rgba(0,0,0,0.12)] space-y-6">
              {/* 112 Lessons (24 hours) */}
              <div>
                <h3 className="font-['Poppins'] font-bold text-xl text-[#242528] mb-4">
                  112 Lessons (24 hours)
                </h3>

                <div className="space-y-3.5 text-sm">
                  <div className="flex items-center justify-between gap-2 py-1">
                    <div className="flex items-center gap-3 text-[#242528] font-medium">
                      <span className="text-[#82868E]">01</span>
                      <span>Introduction to Digital Assets</span>
                    </div>
                    <span className="text-[#003BE2] font-semibold shrink-0">12 mins</span>
                  </div>

                  <div className="flex items-center justify-between gap-2 py-1">
                    <div className="flex items-center gap-3 text-[#242528] font-medium">
                      <span className="text-[#82868E]">02</span>
                      <span>Design Principles for Impacts</span>
                    </div>
                    <span className="text-[#003BE2] font-semibold shrink-0">21 mins</span>
                  </div>

                  <div className="flex items-center justify-between gap-2 py-1">
                    <div className="flex items-center gap-3 text-[#242528] font-medium">
                      <span className="text-[#82868E]">03</span>
                      <span>Advanced Techniques in Digital Creation</span>
                    </div>
                    <span className="text-[#003BE2] font-semibold shrink-0">16 mins</span>
                  </div>

                  <p className="text-xs text-[#82868E] font-medium pt-1 cursor-pointer hover:underline">
                    99 more videos
                  </p>
                </div>
              </div>

              {/* Ready to dive in & Price */}
              <div className="pt-2">
                <p className="text-xs text-[#82868E] leading-relaxed mb-4">
                  Ready to Dive In? Enroll Now and Start Building Your Digital Future!
                </p>

                <div className="flex items-baseline gap-1 mb-4">
                  <span className="font-['Poppins'] font-bold text-3xl sm:text-4xl text-[#003BE2]">
                    {course.price ? (typeof course.price === 'number' ? `$${course.price}` : course.price) : '$25'}
                  </span>
                  <span className="text-xs text-[#82868E] font-normal">
                    /lifetime
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() => setEnrolled(!enrolled)}
                  className="w-full bg-[#D4FB20] hover:bg-[#cbf516] active:scale-95 text-[#242528] font-bold text-base py-3.5 rounded-full shadow-[0_6px_20px_rgba(212,251,32,0.4)] transition-all cursor-pointer"
                >
                  {enrolled ? '✓ Enrolled Successfully' : 'Enroll Now'}
                </button>
              </div>

              {/* This course include */}
              <div className="pt-3 border-t border-[#F5F5F6]">
                <h4 className="font-['Poppins'] font-bold text-base text-[#242528] mb-3.5">
                  This course include
                </h4>
                <div className="space-y-3">
                  {courseIncludes.map((item) => (
                    <div key={item.id} className="flex items-center gap-3 text-sm text-[#565A65]">
                      <span className="shrink-0">{item.icon}</span>
                      <span>{item.title}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Instructor Profile */}
              <div id="instructor" className="pt-5 border-t border-[#F5F5F6]">
                <div className="flex items-center gap-3.5 mb-3">
                  <img
                    src="/assets/instructor_purepearl.png"
                    alt="PurePearl Studio"
                    className="w-13 h-13 rounded-full object-cover ring-2 ring-[#E8E9EB]"
                  />
                  <div>
                    <h5 className="font-['Poppins'] font-semibold text-base text-[#242528]">
                      PurePearl Studio
                    </h5>
                    <p className="text-xs text-[#82868E]">Professional Creator</p>
                  </div>
                </div>

                <p className="text-xs text-[#82868E] leading-relaxed mb-4">
                  Ready to Dive In? Enroll Now and Start Building Your Digital Future!
                </p>

                <button
                  type="button"
                  className="w-full py-2.5 rounded-full border border-[#E8E9EB] hover:border-[#242528] hover:bg-[#F5F5F6] text-sm font-medium text-[#565A65] hover:text-[#242528] transition-colors cursor-pointer"
                >
                  See Full Profile
                </button>
              </div>
            </aside>
          </div>

        </div>
      </div>

      {/* ======================================================== */}
      {/* 3. FOOTER                                                */}
      {/* ======================================================== */}
      <Footer />
    </div>
  );
}

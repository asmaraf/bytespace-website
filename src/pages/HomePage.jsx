import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import CoursesSection from '../components/CoursesSection';
import CategoriesSection from '../components/CategoriesSection';
import GrowthSection from '../components/GrowthSection';
import CreatorSection from '../components/CreatorSection';
import CtaBanner from '../components/CtaBanner';
import TestimonialsSection from '../components/TestimonialsSection';
import Footer from '../components/Footer';

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleHeroSearch = (query) => {
    setSearchQuery(query);
    const element = document.getElementById('courses');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-[#242528] selection:bg-[#D4FB20] selection:text-[#242528] flex flex-col font-sans">
      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow">
        {/* Hero Section with Search and Badges */}
        <Hero onSearch={handleHeroSearch} />

        {/* Courses Section with Filter Badges & Grid */}
        <CoursesSection searchQuery={searchQuery} />

        {/* Learning Paths / Categories Grid */}
        <CategoriesSection />

        {/* Professional Growth Section */}
        <GrowthSection />

        {/* Creator Management Section */}
        <CreatorSection />

        {/* Unlock Potential as Creator CTA Banner */}
        <CtaBanner />

        {/* Testimonials Community Section */}
        <TestimonialsSection />
      </main>

      {/* Comprehensive Footer */}
      <Footer />
    </div>
  );
}

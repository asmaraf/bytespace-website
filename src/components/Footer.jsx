import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ByteSpaceLogo from './ByteSpaceLogo';
import Toast from './Toast';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [toastMessage, setToastMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && email.includes('@')) {
      setToastMessage('Thank you for subscribing to ByteSpace updates!');
      setEmail('');
    }
  };

  return (
    <footer className="w-full bg-white border-t border-[#F0F1F3] pt-16 sm:pt-20 pb-12">
      <div className="max-w-[1240px] mx-auto px-6">
        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pb-16">
          {/* Newsletter & Brand */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              {/* Logo */}
              <Link to="/" className="inline-block mb-6">
                <ByteSpaceLogo />
              </Link>

              <p className="text-[#565A65] text-base leading-[1.6] max-w-[460px] font-normal mb-8">
                Stay Up to date with our latest features and releases by joining our newsletter.
              </p>

              {/* Newsletter Form */}
              <form onSubmit={handleSubmit} className="max-w-[460px]">
                <div className="flex items-center gap-3">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="flex-1 bg-white border border-[#E8E9EB] rounded-full px-5 py-3 text-sm text-[#242528] placeholder-[#82868E] focus:outline-none focus:border-[#D4FB20] focus:ring-2 focus:ring-[#D4FB20]/30 transition-all"
                  />
                  <button
                    type="submit"
                    className="bg-[#D4FB20] hover:bg-[#c9f212] active:scale-95 text-[#242528] font-medium text-sm px-6 py-3 rounded-full transition-all duration-200 cursor-pointer shadow-sm shrink-0"
                  >
                    Search
                  </button>
                </div>
                <p className="text-xs text-[#82868E] leading-relaxed mt-4">
                  By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
                </p>
              </form>
            </div>
          </div>

          {/* Navigation Links Columns */}
          <div className="lg:col-span-6 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {/* Column 1 */}
            <div>
              <ul className="space-y-3.5 text-sm text-[#242528]">
                <li>
                  <Link to="/courses" className="hover:text-[#003BE2] transition-colors">
                    Featured Courses
                  </Link>
                </li>
                <li>
                  <a href="#categories" className="hover:text-[#003BE2] transition-colors">
                    Featured Categories
                  </a>
                </li>
                <li>
                  <a href="#business" className="hover:text-[#003BE2] transition-colors">
                    Business
                  </a>
                </li>
                <li>
                  <a href="#it" className="hover:text-[#003BE2] transition-colors">
                    IT
                  </a>
                </li>
                <li>
                  <a href="#design" className="hover:text-[#003BE2] transition-colors">
                    Design
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 2 */}
            <div>
              <ul className="space-y-3.5 text-sm text-[#242528]">
                <li>
                  <a href="#development" className="hover:text-[#003BE2] transition-colors">
                    Development
                  </a>
                </li>
                <li>
                  <a href="#marketing" className="hover:text-[#003BE2] transition-colors">
                    Marketing
                  </a>
                </li>
                <li>
                  <a href="#photography" className="hover:text-[#003BE2] transition-colors">
                    Photography
                  </a>
                </li>
                <li>
                  <a href="#finance" className="hover:text-[#003BE2] transition-colors">
                    Finance
                  </a>
                </li>
                <li>
                  <a href="#sport" className="hover:text-[#003BE2] transition-colors">
                    Sport
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3 */}
            <div>
              <ul className="space-y-3.5 text-sm text-[#242528]">
                <li>
                  <Link to="/creator" className="hover:text-[#003BE2] transition-colors font-medium">
                    Become a Creator
                  </Link>
                </li>
                <li>
                  <a href="#affiliate" className="hover:text-[#003BE2] transition-colors">
                    Affiliate Program
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-[#003BE2] transition-colors">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#help" className="hover:text-[#003BE2] transition-colors">
                    Help
                  </a>
                </li>
                <li>
                  <a href="#about" className="hover:text-[#003BE2] transition-colors">
                    About
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Legal Links */}
        <div className="pt-8 border-t border-[#E8E9EB] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#82868E]">
          <div>
            @ 2023 ByteSpace. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <a href="#privacy" className="hover:text-[#242528] transition-colors">
              Privacy Policy
            </a>
            <a href="#terms" className="hover:text-[#242528] transition-colors">
              Terms of Service
            </a>
            <a href="#cookies" className="hover:text-[#242528] transition-colors">
              Cookies Settings
            </a>
          </div>
        </div>
      </div>
      <Toast 
        message={toastMessage} 
        type="success" 
        onClose={() => setToastMessage('')} 
      />
    </footer>
  );
}

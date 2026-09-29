import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthGraphic from '../components/AuthGraphic';
import GridBackground from '../components/GridBackground';

export default function RegisterPage() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      // Navigate to login or home upon registration
      navigate('/login');
    }, 1200);
  };

  return (
    <div className="min-h-screen w-full bg-[#003BE2] relative overflow-hidden flex items-center justify-center p-4 sm:p-6 md:p-12">
      {/* Background Blueprint Grid Lines matching Figma */}
      <GridBackground />

      {/* Main Container */}
      <div className="relative z-10 w-full max-w-[1240px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        {/* Left Side: Illustration & Intro Text */}
        <div className="lg:col-span-6 w-full">
          <AuthGraphic
            title="Sign up and come in"
            description="The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost"
          />
        </div>

        {/* Right Side: Register Card */}
        <div className="lg:col-span-6 w-full flex justify-center lg:justify-end">
          <div className="w-full max-w-[540px] bg-white rounded-[28px] sm:rounded-[32px] p-8 sm:p-12 md:p-14 shadow-[0_30px_70px_rgba(0,0,0,0.25)] border border-white">
            {/* Header Text */}
            <div className="mb-8">
              <span className="text-[#003BE2] font-medium text-base sm:text-lg block">
                Create an Account
              </span>
              <h2 className="font-['Poppins'] font-semibold text-3xl sm:text-[38px] text-[#242528] tracking-tight leading-tight mt-1.5">
                Welcome to ByteSpace
              </h2>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Full Name */}
              <div>
                <label className="block text-sm font-medium text-[#242528] mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Jamie Davis"
                  className="w-full bg-white border border-[#E8E9EB] rounded-2xl px-5 py-3.5 text-base text-[#242528] placeholder-[#82868E] focus:outline-none focus:border-[#003BE2] focus:ring-2 focus:ring-[#003BE2]/20 transition-all"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-[#242528] mb-2">
                  Email
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="designer@example.com"
                  className="w-full bg-white border border-[#E8E9EB] rounded-2xl px-5 py-3.5 text-base text-[#242528] placeholder-[#82868E] focus:outline-none focus:border-[#003BE2] focus:ring-2 focus:ring-[#003BE2]/20 transition-all"
                />
              </div>

              {/* Password */}
              <div>
                <label className="block text-sm font-medium text-[#242528] mb-2">
                  Password
                </label>
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full bg-white border border-[#E8E9EB] rounded-2xl px-5 py-3.5 text-base text-[#242528] placeholder-[#82868E] focus:outline-none focus:border-[#003BE2] focus:ring-2 focus:ring-[#003BE2]/20 transition-all"
                />
              </div>

              {/* Submit Button */}
              <div className="flex justify-end pt-4">
                <button
                  type="submit"
                  disabled={submitted}
                  className="bg-[#D4FB20] hover:bg-[#cbf516] active:scale-95 text-[#242528] font-medium text-base px-8 py-3.5 rounded-full shadow-[0_6px_20px_rgba(212,251,32,0.35)] transition-all duration-200 cursor-pointer"
                >
                  {submitted ? 'Creating account...' : 'Continue'}
                </button>
              </div>
            </form>

            {/* Already have an account link */}
            <div className="mt-10 pt-6 border-t border-[#F5F5F6] text-center text-sm text-[#565A65]">
              <span>Already have an account? </span>
              <Link
                to="/login"
                className="font-medium text-[#003BE2] hover:underline transition-colors"
              >
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthGraphic from '../components/AuthGraphic';
import GridBackground from '../components/GridBackground';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      // Navigate to home upon login
      navigate('/');
    }, 1000);
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
            title="Sign in with ease"
            description="Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge."
          />
        </div>

        {/* Right Side: Login Card */}
        <div className="lg:col-span-6 w-full flex justify-center lg:justify-end">
          <div className="w-full max-w-[540px] bg-white rounded-[28px] sm:rounded-[32px] p-8 sm:p-12 md:p-14 shadow-[0_30px_70px_rgba(0,0,0,0.25)] border border-white">
            {/* Header Text */}
            <div className="mb-8">
              <span className="text-[#003BE2] font-medium text-base sm:text-lg block">
                Sign In
              </span>
              <h2 className="font-['Poppins'] font-semibold text-3xl sm:text-[38px] text-[#242528] tracking-tight leading-tight mt-1.5">
                Welcome Back
              </h2>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
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
                  disabled={loading}
                  className="bg-[#D4FB20] hover:bg-[#cbf516] active:scale-95 text-[#242528] font-medium text-base px-8 py-3.5 rounded-full shadow-[0_6px_20px_rgba(212,251,32,0.35)] transition-all duration-200 cursor-pointer"
                >
                  {loading ? 'Signing in...' : 'Sign In'}
                </button>
              </div>
            </form>

            {/* Divider "or" */}
            <div className="flex items-center gap-4 my-8">
              <div className="flex-1 h-[1px] bg-[#E8E9EB]"></div>
              <span className="text-sm text-[#82868E] font-normal">or</span>
              <div className="flex-1 h-[1px] bg-[#E8E9EB]"></div>
            </div>

            {/* Social Logins: Facebook & Google */}
            <div className="flex items-center justify-center gap-4">
              {/* Facebook Button */}
              <button
                type="button"
                aria-label="Sign in with Facebook"
                className="w-14 h-14 rounded-full border border-[#E8E9EB] hover:border-[#242528] hover:bg-[#F5F5F6] flex items-center justify-center transition-all cursor-pointer shadow-sm group"
              >
                <svg className="w-6 h-6 fill-[#242528] group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </button>

              {/* Google Button */}
              <button
                type="button"
                aria-label="Sign in with Google"
                className="w-14 h-14 rounded-full border border-[#E8E9EB] hover:border-[#242528] hover:bg-[#F5F5F6] flex items-center justify-center transition-all cursor-pointer shadow-sm group"
              >
                <svg className="w-6 h-6 group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.8-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.14-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.99 0 12s.45 3.82 1.25 5.42l4.03-3.15z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
                  />
                </svg>
              </button>
            </div>

            {/* New user? Create an account link */}
            <div className="mt-8 text-center text-sm text-[#82868E]">
              <span>New user? </span>
              <Link
                to="/register"
                className="font-medium text-[#003BE2] hover:underline transition-colors"
              >
                Create an account
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

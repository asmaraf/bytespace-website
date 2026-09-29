import React from 'react';

export default function LoadingSkeleton({ count = 3, className = "" }) {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ${className}`}>
      {Array.from({ length: count }).map((_, index) => (
        <div 
          key={index}
          className="bg-white rounded-[26px] p-4 border border-[#E8E9EB] shadow-xs animate-pulse flex flex-col justify-between"
        >
          {/* Shimmer Image Area */}
          <div className="rounded-[18px] bg-gray-200 aspect-[16/10] w-full mb-4 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full animate-[shimmer_1.5s_infinite]" />
          </div>

          {/* Shimmer Metadata Lines */}
          <div className="space-y-3">
            <div className="h-5 bg-gray-200 rounded-md w-3/4" />
            <div className="h-3.5 bg-gray-100 rounded-md w-1/2" />
            <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
              <div className="h-5 bg-gray-200 rounded-full w-20" />
              <div className="h-5 bg-gray-200 rounded-full w-14" />
            </div>
            <div className="pt-2 flex items-center justify-between">
              <div className="h-6 bg-gray-200 rounded-md w-16" />
              <div className="h-7 bg-gray-200 rounded-full w-24" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

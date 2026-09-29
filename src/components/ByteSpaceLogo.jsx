import React from 'react';

export default function ByteSpaceLogo({ white = false, className = "" }) {
  return (
    <div className={`flex items-center gap-2.5 select-none ${className}`}>
      {/* Lime 3-leaf ByteSpace brandmark */}
      <svg width="27" height="30" viewBox="0 0 29 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
        <path d="M10.5455 10.5455C10.5455 4.72136 5.82409 0 0 0V21.0909C0 26.915 4.72136 31.6364 10.5455 31.6364V10.5455Z" fill="#D4FB20"/>
        <path d="M18.4545 10.5455C24.2786 10.5455 29 15.2668 29 21.0909H21.0909C15.2668 21.0909 10.5455 16.3696 10.5455 10.5455L18.4545 10.5455Z" fill="#D4FB20"/>
        <path d="M18.4545 31.6364C24.2786 31.6364 29 26.915 29 21.0909H21.0909C15.2668 21.0909 10.5455 25.8123 10.5455 31.6364L18.4545 31.6364Z" fill="#D4FB20"/>
      </svg>
      {/* Brand Name Typography */}
      <span className={`text-[21px] font-bold tracking-tight leading-none ${white ? 'text-white' : 'text-[#242528]'}`}>
        ByteSpace
      </span>
    </div>
  );
}

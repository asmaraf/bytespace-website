import React from 'react';

/**
 * GlowBlob Component
 * Renders a soft radial-gradient glowing aura/blob behind images or section elements.
 * 
 * Props:
 * - color: 'lime' | 'lime-white' | 'blue' | 'white' | custom gradient string
 * - className: Tailwind position and dimension classes (e.g. "absolute top-1/2 left-1/2 ...")
 * - blur: Tailwind blur class (e.g. "blur-[80px]", default "blur-[80px]")
 * - opacity: Tailwind opacity class (e.g. "opacity-80", default "opacity-85")
 * - style: optional custom style object
 */
export default function GlowBlob({
  color = 'lime',
  className = '',
  blur = 'blur-[80px]',
  opacity = 'opacity-85',
  style = {},
  ...props
}) {
  const getGradient = (col) => {
    switch (col) {
      case 'lime':
        // Figma exact Electric Lime: rgba(203, 252, 1, ...)
        return 'radial-gradient(circle at 50% 50%, rgba(203, 252, 1, 0.65) 0%, rgba(203, 252, 1, 0.28) 45%, rgba(203, 252, 1, 0.08) 70%, transparent 100%)';
      case 'lime-white':
        // Luminous white core surrounded by electric lime
        return 'radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.95) 0%, rgba(203, 252, 1, 0.6) 35%, rgba(203, 252, 1, 0.2) 65%, transparent 100%)';
      case 'blue':
        // Vibrant Persian & Royal Blue for atmospheric side glow matching screenshot
        return 'radial-gradient(circle at 50% 50%, rgba(37, 99, 235, 0.35) 0%, rgba(0, 59, 226, 0.20) 45%, rgba(0, 59, 226, 0.06) 70%, transparent 100%)';
      case 'blue-soft':
        return 'radial-gradient(circle at 50% 50%, rgba(0, 59, 226, 0.22) 0%, rgba(0, 59, 226, 0.06) 55%, transparent 100%)';
      case 'white':
        return 'radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.85) 0%, rgba(255, 255, 255, 0.25) 50%, transparent 100%)';
      default:
        // Supports passing direct CSS gradient
        return col.includes('gradient') ? col : `radial-gradient(circle, ${col} 0%, transparent 100%)`;
    }
  };

  return (
    <div
      className={`pointer-events-none rounded-full select-none -z-10 ${blur} ${opacity} ${className}`}
      style={{
        background: getGradient(color),
        ...style,
      }}
      aria-hidden="true"
      {...props}
    />
  );
}

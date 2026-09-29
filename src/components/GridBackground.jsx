import React from 'react';

/**
 * GridBackground Component
 * Unified, pixel-perfect blueprint grid pattern for all blue sections across ByteSpace.
 *
 * Specifications matched to Figma:
 * - Cell Size: 120px x 120px fixed square cells (12-column grid alignment on 1440px desktop)
 * - Line Width: 1px crisp stroke
 * - Line Color: rgba(255, 255, 255, 0.12) which on Persian Blue (#003BE2) yields exact Figma tone
 * - Repeating pattern using CSS linear-gradient
 * - Positioned absolute inset-0 with pointer-events-none
 */
export default function GridBackground({
  cellSize = 120,
  lineColor = 'rgba(255, 255, 255, 0.12)',
  lineWidth = 1,
  className = '',
  style = {},
  ...props
}) {
  return (
    <div
      className={`absolute inset-0 pointer-events-none ${className}`}
      style={{
        backgroundImage: `
          linear-gradient(to right, ${lineColor} ${lineWidth}px, transparent ${lineWidth}px),
          linear-gradient(to bottom, ${lineColor} ${lineWidth}px, transparent ${lineWidth}px)
        `,
        backgroundSize: `${cellSize}px ${cellSize}px`,
        backgroundRepeat: 'repeat',
        ...style
      }}
      aria-hidden="true"
      {...props}
    />
  );
}

import React from 'react'

/**
 * Premium Geometric BM Monogram for Barun Mishra
 *
 * Combines 'B' and 'M' into a single architectural line-art symbol.
 * - Shared vertical spine (left)
 * - Chamfered geometric B lobes (upper and lower)
 * - Interconnected M chevron connecting through the central waist to the right peak and stem
 * - High-precision SVG path drawing animation on initial load
 * - Respects prefers-reduced-motion
 * - Subtle hover interaction with blue highlight and stroke emphasis
 */
export function BmMonogram({
  size = 28,
  animated = true,
  className = '',
  color,
  title = 'Barun Mishra BM Monogram',
}) {
  return (
    <span
      className={`inline-flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-[1.03] ${className}`}
      style={{ width: size, height: size }}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 44 44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="bm-monogram-svg overflow-visible"
        role="img"
        aria-label={title}
      >
        <title>{title}</title>

        <defs>
          <style>{`
            .bm-monogram-svg {
              --bm-stroke: ${color || 'currentColor'};
              --bm-accent: #2563EB;
            }

            .bm-stroke {
              stroke: var(--bm-stroke);
              stroke-width: 2.3;
              stroke-linecap: round;
              stroke-linejoin: round;
              fill: none;
              transition: stroke 0.25s cubic-bezier(0.16, 1, 0.3, 1),
                          stroke-width 0.25s cubic-bezier(0.16, 1, 0.3, 1),
                          filter 0.25s ease;
            }

            /* Hover interaction: subtle blue highlight and stroke emphasis */
            .group:hover .bm-stroke,
            .bm-monogram-svg:hover .bm-stroke {
              stroke: var(--bm-accent);
              stroke-width: 2.6;
              filter: drop-shadow(0 0 4px rgba(37, 99, 235, 0.28));
            }

            /* Drawing Keyframes */
            @keyframes bmDrawSpine {
              0% { stroke-dashoffset: 32; }
              100% { stroke-dashoffset: 0; }
            }

            @keyframes bmDrawBUpper {
              0% { stroke-dashoffset: 45; }
              100% { stroke-dashoffset: 0; }
            }

            @keyframes bmDrawWaist {
              0% { stroke-dashoffset: 16; }
              100% { stroke-dashoffset: 0; }
            }

            @keyframes bmDrawBLower {
              0% { stroke-dashoffset: 48; }
              100% { stroke-dashoffset: 0; }
            }

            @keyframes bmDrawM {
              0% { stroke-dashoffset: 75; }
              100% { stroke-dashoffset: 0; }
            }

            @keyframes bmSettle {
              0% { transform: scale(0.96); opacity: 0.9; }
              60% { transform: scale(1.02); opacity: 1; }
              100% { transform: scale(1); opacity: 1; }
            }

            ${
              animated
                ? `
            .bm-anim-spine {
              stroke-dasharray: 32;
              stroke-dashoffset: 32;
              animation: bmDrawSpine 0.32s cubic-bezier(0.4, 0, 0.2, 1) 0.05s forwards;
            }

            .bm-anim-b-upper {
              stroke-dasharray: 45;
              stroke-dashoffset: 45;
              animation: bmDrawBUpper 0.36s cubic-bezier(0.4, 0, 0.2, 1) 0.28s forwards;
            }

            .bm-anim-waist {
              stroke-dasharray: 16;
              stroke-dashoffset: 16;
              animation: bmDrawWaist 0.2s cubic-bezier(0.4, 0, 0.2, 1) 0.5s forwards;
            }

            .bm-anim-b-lower {
              stroke-dasharray: 48;
              stroke-dashoffset: 48;
              animation: bmDrawBLower 0.38s cubic-bezier(0.4, 0, 0.2, 1) 0.56s forwards;
            }

            .bm-anim-m {
              stroke-dasharray: 75;
              stroke-dashoffset: 75;
              animation: bmDrawM 0.45s cubic-bezier(0.4, 0, 0.2, 1) 0.76s forwards;
            }

            .bm-monogram-svg {
              animation: bmSettle 0.4s cubic-bezier(0.16, 1, 0.3, 1) 1.1s both;
            }
            `
                : ''
            }

            /* Accessibility: prefers-reduced-motion disables all drawing transitions */
            @media (prefers-reduced-motion: reduce) {
              .bm-anim-spine,
              .bm-anim-b-upper,
              .bm-anim-waist,
              .bm-anim-b-lower,
              .bm-anim-m {
                stroke-dasharray: none !important;
                stroke-dashoffset: 0 !important;
                animation: none !important;
              }
              .bm-monogram-svg {
                animation: none !important;
              }
            }
          `}</style>
        </defs>

        {/* 1. Shared Spine (Left Vertical: connects the back of B and left leg of M) */}
        <line
          x1="10"
          y1="8"
          x2="10"
          y2="36"
          className={`bm-stroke ${animated ? 'bm-anim-spine' : ''}`}
        />

        {/* 2. B Upper Lobe (Starts from top of spine, chamfers cleanly down to the waist) */}
        <path
          d="M 10 8 H 21 L 26.5 13.5 V 16.5 L 21 22"
          className={`bm-stroke ${animated ? 'bm-anim-b-upper' : ''}`}
        />

        {/* 3. B Center Waist Line (Anchors horizontal stability at y=22) */}
        <line
          x1="10"
          y1="22"
          x2="21"
          y2="22"
          className={`bm-stroke ${animated ? 'bm-anim-waist' : ''}`}
        />

        {/* 4. B Lower Lobe (Starts from waist joint, chamfers down to base, returns to spine) */}
        <path
          d="M 21 22 L 27.5 28 V 30 L 21.5 36 H 10"
          className={`bm-stroke ${animated ? 'bm-anim-b-lower' : ''}`}
        />

        {/* 5. M Integrated Chevron & Right Pillar:
            Descends from (10, 8) through the waist joint (21, 22),
            ascends up to the right peak (30.5, 8),
            and drops down the right vertical stem (36.5, 36) */}
        <path
          d="M 10 8 L 21 22 L 30.5 8 L 36.5 14 V 36"
          className={`bm-stroke ${animated ? 'bm-anim-m' : ''}`}
        />
      </svg>
    </span>
  )
}
export default BmMonogram

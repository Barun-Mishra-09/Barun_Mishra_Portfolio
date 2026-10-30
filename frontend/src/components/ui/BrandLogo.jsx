import React from 'react'
import { BmMonogram } from './BmMonogram'

/**
 * BrandLogo Component
 *
 * Displays: [ BM ANIMATED MONOGRAM ]  BARUN MISHRA
 *
 * Coordinates:
 * - Sequential line-art SVG drawing animation on initial load
 * - Subtle opacity and slide transition for the "BARUN MISHRA" wordmark
 * - Synchronized hover state (subtle blue highlight and stroke emphasis)
 * - Zero layout shift
 */
export function BrandLogo({
  size = 28,
  animated = true,
  href = '#',
  className = '',
  onClick,
}) {
  return (
    <a
      href={href}
      onClick={onClick}
      className={`group inline-flex items-center space-x-2.5 text-sm sm:text-base font-bold tracking-wider uppercase transition-colors select-none text-[#171717] dark:text-white hover:text-[#2563EB] dark:hover:text-blue-400 ${className}`}
      aria-label="Barun Mishra — Home"
    >
      {/* Monogram Symbol */}
      <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-black/[0.03] dark:bg-blue-600/10 border border-black/[0.08] dark:border-blue-500/20 text-[#171717] dark:text-white transition-all duration-300 group-hover:border-blue-500/40 group-hover:bg-blue-50/50 dark:group-hover:bg-blue-600/20">
        <BmMonogram
          size={size}
          animated={animated}
          className="text-[#171717] dark:text-white"
        />
      </span>

      {/* Wordmark with smooth entrance transition */}
      <span
        className={`tracking-[0.14em] font-bold text-xs sm:text-sm text-[#171717] dark:text-white transition-colors duration-200 group-hover:text-[#2563EB] dark:group-hover:text-blue-400 ${
          animated ? 'bm-wordmark-animated' : ''
        }`}
      >
        Barun Mishra
      </span>

      <style>{`
        @keyframes bmWordmarkFadeIn {
          0% {
            opacity: 0;
            transform: translateX(-4px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .bm-wordmark-animated {
          animation: bmWordmarkFadeIn 0.5s cubic-bezier(0.16, 1, 0.3, 1) 0.95s both;
        }

        @media (prefers-reduced-motion: reduce) {
          .bm-wordmark-animated {
            animation: none !important;
            opacity: 1 !important;
            transform: none !important;
          }
        }
      `}</style>
    </a>
  )
}

export default BrandLogo


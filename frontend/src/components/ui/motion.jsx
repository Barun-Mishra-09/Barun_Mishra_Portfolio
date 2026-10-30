import React from 'react'
import { motion } from 'framer-motion'

// Easing presets
export const EASE_EXPERT = [0.16, 1, 0.3, 1] // Linear/Vercel standard curve
export const EASE_SMOOTH = [0.25, 0.1, 0.25, 1.0]

// Motion variants
export const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (customDelay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: EASE_EXPERT,
      delay: customDelay,
    },
  }),
}

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: (customDelay = 0) => ({
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: 'easeOut',
      delay: customDelay,
    },
  }),
}

export const scaleUp = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: (customDelay = 0) => ({
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.45,
      ease: EASE_EXPERT,
      delay: customDelay,
    },
  }),
}

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
}

export const staggerItem = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: EASE_EXPERT,
    },
  },
}

// Interactive hover props
export const hoverCardProps = {
  whileHover: { y: -4, transition: { duration: 0.2, ease: EASE_EXPERT } },
  whileTap: { scale: 0.985 },
}

export const hoverButtonProps = {
  whileHover: { scale: 1.02, transition: { duration: 0.18, ease: 'easeOut' } },
  whileTap: { scale: 0.97 },
}

// Reusable ScrollReveal Wrapper Component
export function MotionSection({ children, className = '', delay = 0, once = true, ...props }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: '-60px' }}
      variants={{
        hidden: { opacity: 0, y: 24 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.5,
            ease: EASE_EXPERT,
            delay,
          },
        },
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
}

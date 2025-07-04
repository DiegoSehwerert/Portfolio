"use client"

import { motion } from "framer-motion"
import { ReactNode } from "react"

type AnimatedSectionProps = {
  children: ReactNode
  delay?: number
}

export function AnimatedSection({ children, delay = 0 }: AnimatedSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  )
}

type AnimatedIntroProps = {
  children: ReactNode
}

export function AnimatedIntro({ children }: AnimatedIntroProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="flex flex-col items-center text-center mb-8"
    >
      {children}
    </motion.div>
  )
}

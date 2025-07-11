"use client";

import { motion, useInView } from "framer-motion";
import { ReactNode } from "react";
import { useRef } from "react";

type AnimatedSectionProps = {
  children: React.ReactNode;
  delay?: number;
};

export function AnimatedSection({ children, delay = 0 }: AnimatedSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.4, delay }}
    >
      {children}
    </motion.div>
  );
}
type AnimatedIntroProps = {
  children: ReactNode;
};

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
  );
}

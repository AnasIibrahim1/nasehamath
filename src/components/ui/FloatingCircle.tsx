"use client";

import { motion } from "motion/react";

interface FloatingCircleProps {
  size?: number;
  color?: string;
  position?: {
    top?: string | number;
    right?: string | number;
    bottom?: string | number;
    left?: string | number;
  };
  delay?: number;
  duration?: number;
  className?: string;
}

export default function FloatingCircle({
  size = 12,
  color = "bg-primary/70",
  position = { top: "50%", left: "50%" },
  delay = 0,
  duration = 5,
  className = "",
}: FloatingCircleProps) {
  return (
    <motion.div
      className={`absolute ${color} rounded-full ${className}`}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        ...position,
      }}
      animate={{
        y: [0, -10, 0],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
    />
  );
}

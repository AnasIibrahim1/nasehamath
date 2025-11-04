"use client";

import { motion } from "motion/react";

interface FloatingShapeProps {
  type?: "dashed-circle" | "solid-circle" | "blob";
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

export default function FloatingShape({
  type = "dashed-circle",
  size = 80,
  color = "border-accent/60",
  position = { top: "50%", left: "50%" },
  delay = 0,
  duration = 16,
  className = "",
}: FloatingShapeProps) {
  if (type === "dashed-circle") {
    return (
      <motion.div
        className={`absolute ${color} ${className}`}
        style={{
          width: `${size}px`,
          height: `${size}px`,
          ...position,
        }}
        animate={{ rotate: 360 }}
        transition={{
          duration,
          repeat: Infinity,
          ease: "linear",
          delay,
        }}
      >
        <div
          className="w-full h-full rounded-full border-2 border-dashed"
          style={{ borderColor: "inherit" }}
        />
      </motion.div>
    );
  }

  if (type === "solid-circle") {
    return (
      <motion.div
        className={`absolute ${color} rounded-full ${className}`}
        style={{
          width: `${size}px`,
          height: `${size}px`,
          ...position,
        }}
        animate={{
          y: [0, -6, 0],
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

  // Blob shape (can be customized further)
  return (
    <motion.div
      className={`absolute ${color} ${className}`}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%",
        ...position,
      }}
      animate={{
        borderRadius: [
          "30% 70% 70% 30% / 30% 30% 70% 70%",
          "70% 30% 30% 70% / 70% 70% 30% 30%",
          "30% 70% 70% 30% / 30% 30% 70% 70%",
        ],
        rotate: [0, 180, 360],
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

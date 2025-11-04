"use client";

import { forwardRef } from "react";
import { motion } from "motion/react";
import type { HTMLMotionProps } from "motion/react";
import clsx from "clsx";

type ButtonProps = HTMLMotionProps<"button"> & {
  variant?: "primary" | "signup" | "login" | "outline";
  size?: "sm" | "md" | "lg";
  asChild?: boolean;
  loading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
};

const sizeClasses: Record<NonNullable<ButtonProps["size"]>, string> = {
  sm: "h-9 px-3 text-sm",
  md: "px-6 py-2.5 text-sm",
  lg: "px-7 py-3 text-base",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { className, variant = "primary", size = "md", loading, leftIcon, rightIcon, children, ...props },
  ref
) {
  // Login variant - Glassmorphism design
  if (variant === "login") {
    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.05, y: -1 }}
        whileTap={{ scale: 0.95 }}
        className={clsx(
          "group relative rounded-xl font-medium text-foreground/80 bg-white/50 backdrop-blur-sm border border-border/40 hover:border-primary/40 hover:text-primary transition-all duration-300 overflow-hidden cursor-pointer",
          sizeClasses[size],
          className
        )}
        {...props}
      >
        {/* Animated background gradient */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-primary/5 via-accent/8 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          initial={false}
        />

        {/* Glowing border effect */}
        <motion.div
          className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100"
          style={{
            background: "linear-gradient(90deg, transparent, rgba(6, 106, 201, 0.1), transparent)",
            backgroundSize: "200% 100%",
          }}
          animate={{
            backgroundPosition: ["200% 0", "-200% 0"],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        <span className="relative z-10 flex items-center justify-center gap-2">
          {loading ? (
            <svg
              className="animate-spin h-4 w-4"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
            </svg>
          ) : (
            leftIcon
          )}
          <span>{children as React.ReactNode}</span>
          {!loading && rightIcon}
        </span>
      </motion.button>
    );
  }

  // Signup/Primary variant - Premium gradient design
  if (variant === "signup" || variant === "primary") {
    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.05, y: -1 }}
        whileTap={{ scale: 0.95 }}
        className={clsx(
          "group relative rounded-xl font-bold text-white overflow-hidden shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-all duration-300 cursor-pointer",
          sizeClasses[size],
          className
        )}
        style={{
          background: "linear-gradient(135deg, #0553a3 0%, #066ac9 50%, #0778e8 100%)",
          backgroundSize: "200% 200%",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundPosition = "100% 100%";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundPosition = "0% 0%";
        }}
        {...props}
      >
        {/* Animated shimmer overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
          animate={{
            x: ["-100%", "100%"],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatDelay: 1,
            ease: "linear",
          }}
        />

        {/* Glowing orb effect */}
        <motion.div
          className="absolute -right-4 -top-4 w-16 h-16 bg-white/20 rounded-full blur-xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <span className="relative z-10 flex items-center justify-center gap-2">
          {loading ? (
            <svg
              className="animate-spin h-4 w-4"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
            </svg>
          ) : (
            leftIcon
          )}
          <span>{children as React.ReactNode}</span>
          {!loading && rightIcon}
        </span>
      </motion.button>
    );
  }

  // Outline variant - Default outline style
  const base = "inline-flex items-center justify-center gap-2 rounded-xl font-medium transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 disabled:opacity-60 disabled:pointer-events-none shadow-sm hover:shadow-md cursor-pointer";
  const variants: Record<NonNullable<ButtonProps["variant"]>, string> = {
    outline:
      "border border-border text-foreground bg-background/60 backdrop-blur hover:border-primary/60 hover:text-primary",
  };

  return (
    <motion.button
      whileHover={{ y: -1 }}
      whileTap={{ scale: 0.985 }}
      className={clsx(base, variants[variant] || "", sizeClasses[size], className)}
      ref={ref}
      {...props}
    >
      {loading ? (
        <svg
          className="animate-spin h-4 w-4"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
        </svg>
      ) : (
        leftIcon
      )}
      <span>{children as React.ReactNode}</span>
      {!loading && rightIcon}
    </motion.button>
  );
});

export default Button;



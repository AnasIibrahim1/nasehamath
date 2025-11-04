"use client";

import { forwardRef } from "react";
import { motion } from "motion/react";
import type { HTMLMotionProps } from "motion/react";
import clsx from "clsx";

type ButtonProps = HTMLMotionProps<"button"> & {
  variant?: "primary" | "outline";
  size?: "sm" | "md" | "lg";
  asChild?: boolean;
  loading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
};

const sizeClasses: Record<NonNullable<ButtonProps["size"]>, string> = {
  sm: "h-9 px-3 text-sm",
  md: "h-10 px-4 text-sm",
  lg: "h-11 px-5 text-base",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { className, variant = "primary", size = "md", loading, leftIcon, rightIcon, children, ...props },
  ref
) {
  const base = "inline-flex items-center justify-center gap-2 rounded-xl font-medium transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 disabled:opacity-60 disabled:pointer-events-none shadow-sm hover:shadow-md";
  const variants: Record<NonNullable<ButtonProps["variant"]>, string> = {
    primary:
      "bg-gradient-to-l from-primary-600 to-primary text-white hover:from-primary-600/95 hover:to-primary/95",
    outline:
      "border border-border text-foreground bg-background/60 backdrop-blur hover:border-primary/60 hover:text-primary",
  };

  return (
    <motion.button
      whileHover={{ y: -1 }}
      whileTap={{ scale: 0.985 }}
      className={clsx(base, variants[variant], sizeClasses[size], className)}
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
      ) : (leftIcon as React.ReactNode)}
      <span>{children as React.ReactNode}</span>
      {!loading && (rightIcon as React.ReactNode)}
    </motion.button>
  );
});

export default Button;



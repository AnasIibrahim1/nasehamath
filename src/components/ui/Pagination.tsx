"use client";

import { motion } from "motion/react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  className?: string;
}

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  className = "",
}: PaginationProps) {
  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div className={`flex items-center justify-center gap-4 ${className}`}>
      {/* Previous Button */}
      <motion.button
        onClick={handlePrevious}
        disabled={currentPage === 1}
        className="w-10 h-10 rounded-full flex items-center justify-center border border-border/40 hover:border-primary/40 hover:bg-primary/10 disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-300 cursor-pointer"
        whileHover={currentPage > 1 ? { scale: 1.1 } : {}}
        whileTap={currentPage > 1 ? { scale: 0.95 } : {}}
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-foreground"
        >
          <path d="M9 6l6 6-6 6" />
        </svg>
      </motion.button>

      {/* Dots */}
      <div className="flex items-center gap-2">
        {Array.from({ length: totalPages }).map((_, index) => {
          const page = index + 1;
          const isActive = page === currentPage;

          return (
            <motion.button
              key={page}
              onClick={() => onPageChange(page)}
              className={`relative w-2 h-2 rounded-full transition-all duration-300 cursor-pointer ${
                isActive
                  ? "bg-primary w-8"
                  : "bg-border/40 hover:bg-primary/40"
              }`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              aria-label={`Go to page ${page}`}
            />
          );
        })}
      </div>

      {/* Next Button */}
      <motion.button
        onClick={handleNext}
        disabled={currentPage === totalPages}
        className="w-10 h-10 rounded-full flex items-center justify-center border border-border/40 hover:border-primary/40 hover:bg-primary/10 disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-300 cursor-pointer"
        whileHover={currentPage < totalPages ? { scale: 1.1 } : {}}
        whileTap={currentPage < totalPages ? { scale: 0.95 } : {}}
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-foreground"
        >
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </motion.button>
    </div>
  );
}

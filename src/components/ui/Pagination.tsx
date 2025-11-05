"use client";

import { motion } from "motion/react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  className?: string;
  variant?: "dots" | "numbers";
}

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  className = "",
  variant = "dots",
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

  // Generate page numbers to display (with ellipsis for large page counts)
  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    const maxVisible = 5;

    if (totalPages <= maxVisible) {
      // Show all pages if total is small
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Show first page
      pages.push(1);

      if (currentPage > 3) {
        pages.push("...");
      }

      // Show pages around current page
      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 1);

      for (let i = start; i <= end; i++) {
        pages.push(i);
      }

      if (currentPage < totalPages - 2) {
        pages.push("...");
      }

      // Show last page
      if (totalPages > 1) {
        pages.push(totalPages);
      }
    }

    return pages;
  };

  return (
    <div className={`flex items-center justify-center gap-2 sm:gap-4 ${className}`}>
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

      {/* Page Numbers or Dots */}
      <div className="flex items-center gap-1 sm:gap-2">
        {variant === "dots" ? (
          // Dots variant
          Array.from({ length: totalPages }).map((_, index) => {
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
          })
        ) : (
          // Numbers variant
          getPageNumbers().map((page, index) => {
            if (page === "...") {
              return (
                <span
                  key={`ellipsis-${index}`}
                  className="px-2 text-foreground/40"
                >
                  ...
                </span>
              );
            }

            const pageNum = page as number;
            const isActive = pageNum === currentPage;

            return (
              <motion.button
                key={pageNum}
                onClick={() => onPageChange(pageNum)}
                className={`min-w-[2.5rem] h-10 px-3 rounded-lg flex items-center justify-center text-sm font-medium transition-all duration-300 cursor-pointer ${
                  isActive
                    ? "bg-primary text-white shadow-lg shadow-primary/30"
                    : "bg-white border border-border/40 text-foreground hover:border-primary/40 hover:bg-primary/10"
                }`}
                whileHover={!isActive ? { scale: 1.05, y: -2 } : {}}
                whileTap={{ scale: 0.95 }}
                aria-label={`Go to page ${pageNum}`}
                aria-current={isActive ? "page" : undefined}
              >
                {pageNum}
              </motion.button>
            );
          })
        )}
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

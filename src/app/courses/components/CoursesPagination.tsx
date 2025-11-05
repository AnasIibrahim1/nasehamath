"use client";

import { motion } from "motion/react";
import Pagination from "@/components/ui/Pagination";

interface CoursesPaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function CoursesPagination({
  currentPage,
  totalPages,
  onPageChange,
}: CoursesPaginationProps) {
  if (totalPages <= 1) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.2 }}
      className="flex justify-center"
    >
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={onPageChange}
        variant="numbers"
      />
    </motion.div>
  );
}


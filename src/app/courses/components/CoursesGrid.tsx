"use client";

import { motion, AnimatePresence } from "motion/react";
import CourseCard from "./CourseCard";
import { Course } from "@/types/course";

interface CoursesGridProps {
  courses: Course[];
  currentPage: number;
}

export default function CoursesGrid({ courses, currentPage }: CoursesGridProps) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={currentPage}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.4 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-10 sm:mb-12 md:mb-16"
      >
        {courses.map((course, index) => (
          <CourseCard key={course.id} course={course} index={index} />
        ))}
      </motion.div>
    </AnimatePresence>
  );
}


"use client";

import { useState, useMemo } from "react";
import FloatingShape from "@/components/ui/FloatingShape";
import { Course } from "@/types/course";
import CoursesHeader from "./CoursesHeader";
import CoursesGrid from "./CoursesGrid";
import CoursesBackground from "./CoursesBackground";
import CoursesPagination from "./CoursesPagination";

const COURSES_PER_PAGE = 12;

interface CoursesPageClientProps {
  courses: Course[];
}

export default function CoursesPageClient({ courses }: CoursesPageClientProps) {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(courses.length / COURSES_PER_PAGE);

  const currentCourses = useMemo(() => {
    const startIndex = (currentPage - 1) * COURSES_PER_PAGE;
    const endIndex = startIndex + COURSES_PER_PAGE;
    return courses.slice(startIndex, endIndex);
  }, [currentPage, courses]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // Scroll to top when page changes
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="relative w-full py-12 sm:py-16 md:py-20 lg:py-28 overflow-hidden min-h-screen">
      <CoursesBackground />

      <div className="mx-auto max-w-7xl px-3 sm:px-4 md:px-6 lg:px-8">
        <CoursesHeader />
        <CoursesGrid courses={currentCourses} currentPage={currentPage} />
        <CoursesPagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>

      {/* Floating Shapes */}
      <FloatingShape
        type="solid-circle"
        size={60}
        color="bg-primary/10"
        position={{ top: "20%", right: "5%" }}
        duration={4}
        delay={0}
      />
      <FloatingShape
        type="dashed-circle"
        size={100}
        color="border-accent/30"
        position={{ bottom: "15%", left: "3%" }}
        duration={6}
        delay={1}
      />
    </section>
  );
}


"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/ui/Button";
import { Course } from "@/types/course";

interface CourseCardProps {
  course: Course;
  index: number;
}

export default function CourseCard({ course, index }: CourseCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        duration: 0.4,
        delay: index * 0.05,
        ease: "easeOut",
      }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="group relative bg-white rounded-2xl overflow-hidden border border-border/40 hover:border-primary/40 transition-all duration-300 shadow-sm hover:shadow-xl"
    >
      {/* Course Image */}
      <div className="relative h-56 bg-gradient-to-br from-primary/10 to-accent/10 overflow-hidden">
        <Image
          src="/courses/course.jpg"
          alt={course.title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
          priority={index < 4}
          loading={index < 4 ? "eager" : "lazy"}
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent z-10" />

        {/* Duration Badge */}
        <div className="absolute bottom-4 right-4 z-20">
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.05 + 0.2 }}
            className="px-3 py-1.5 bg-white/95 backdrop-blur-sm rounded-lg text-xs font-semibold text-primary border border-white/20 shadow-sm"
          >
            {course.duration}
          </motion.span>
        </div>
      </div>

      {/* Course Content */}
      <div className="p-5 sm:p-6">
        {/* Title */}
        <h3 className="text-lg sm:text-xl font-bold text-foreground mb-3 line-clamp-1 group-hover:text-primary transition-colors duration-300">
          {course.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-foreground/70 mb-5 line-clamp-2 leading-relaxed">
          {course.description}
        </p>

        {/* Students Count */}
        <div className="flex items-center gap-2 mb-5 text-sm text-foreground/60">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
          </svg>
          <span>{course.students.toLocaleString()} طالب</span>
        </div>

        {/* Price and CTA */}
        <div className="flex items-center justify-between pt-5 border-t border-border/30">
          <div className="flex items-baseline gap-1">
            <span className="text-2xl sm:text-3xl font-bold text-primary">
              {course.price}
            </span>
            <span className="text-sm text-foreground/60 font-medium">ريال</span>
          </div>
                     <Link href={`/courses/${course.id}`}>
                       <Button
                         variant="login"
                         size="md"
                         className="px-4 sm:px-5 cursor-pointer"
                       >
                         سجل الآن
                       </Button>
                     </Link>
        </div>
      </div>

      {/* Hover effect overlay */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </motion.div>
  );
}


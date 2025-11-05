"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Button from "@/components/ui/Button";
import { CourseDetail } from "@/types/course-detail";

interface CourseHeaderProps {
  course: CourseDetail;
  isAuthenticated: boolean;
  isSubscribed: boolean;
}

export default function CourseHeader({ course, isAuthenticated, isSubscribed }: CourseHeaderProps) {
  return (
    <div className="relative w-full bg-gradient-to-br from-primary/10 via-accent/5 to-primary/10">
      {/* Course Image */}
      <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[500px] overflow-hidden">
        <Image
          src={course.image || "/courses/course.jpg"}
          alt={course.title}
          fill
          className="object-cover HERO NNAME"
          priority
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20" />
        
        {/* Content Overlay */}
        <div className="absolute inset-0 flex items-end">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 sm:pb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl w-full"
            >
              {/* Transparent Box with Blur */}
              <div className="bg-[#0553a3]/50 backdrop-blur-md border border-[#0553a3]/20 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight drop-shadow-lg">
                  {course.title}
                </h1>
                <p className="text-base sm:text-lg md:text-xl text-white/95 mb-6 line-clamp-2 drop-shadow-md">
                  {course.longDescription || course.description}
                </p>
                
                {/* Stats */}
                <div className="flex flex-wrap items-center gap-4 sm:gap-6">
                  <div className="flex items-center gap-2 text-white drop-shadow-md">
                    <div className="p-1.5 sm:p-2 bg-white/20 rounded-lg backdrop-blur-sm">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                        <circle cx="9" cy="7" r="4" />
                        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                      </svg>
                    </div>
                    <span className="text-sm sm:text-base font-medium">{course.students.toLocaleString()} طالب</span>
                  </div>
                  <div className="flex items-center gap-2 text-white drop-shadow-md">
                    <div className="p-1.5 sm:p-2 bg-white/20 rounded-lg backdrop-blur-sm">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10" />
                        <polyline points="12 6 12 12 16 14" />
                      </svg>
                    </div>
                    <span className="text-sm sm:text-base font-medium">{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-white drop-shadow-md">
                    <div className="p-1.5 sm:p-2 bg-white/20 rounded-lg backdrop-blur-sm">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                        <circle cx="12" cy="7" r="4" />
                      </svg>
                    </div>
                    <span className="text-sm sm:text-base font-medium">{course.instructor.name}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Banner Section */}
      <div className="bg-white border-b border-border/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex-1">
              {!isAuthenticated ? (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="flex items-center gap-3"
                >
                  <div className="px-4 py-2 bg-red-100 border-2 border-red-500 rounded-xl">
                    <span className="text-red-700 font-bold text-sm sm:text-base">⚠ سجل دخولك للوصول إلى المحتوى المجاني</span>
                  </div>
                </motion.div>
              ) : isSubscribed ? (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="flex items-center gap-3"
                >
                  <div className="px-4 py-2 bg-green-100 border-2 border-green-500 rounded-xl">
                    <span className="text-green-700 font-bold text-sm sm:text-base">✓ متاح - أنت مشترك في هذه الدورة</span>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="flex items-center gap-3"
                >
                  <div className="px-4 py-2 bg-amber-100 border-2 border-amber-500 rounded-xl">
                    <span className="text-amber-700 font-bold text-sm sm:text-base">المحتوى المجاني متاح - اشترك الآن للوصول إلى جميع المحتويات</span>
                  </div>
                </motion.div>
              )}
            </div>
            
            <div className="flex items-center gap-4">
              <div className="text-left sm:text-right">
                <p className="text-xs sm:text-sm text-foreground/60 mb-1">السعر</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl sm:text-4xl font-bold text-primary">{course.price}</span>
                  <span className="text-sm sm:text-base text-foreground/70 font-medium">ريال</span>
                </div>
              </div>
              {!isAuthenticated ? (
                <Button variant="primary" size="lg" href="/login">
                  سجل دخول
                </Button>
              ) : !isSubscribed ? (
                <Button variant="primary" size="lg" onClick={() => {
                  // Subscribe logic - save subscription token
                  const subscriptionToken = `sub_token_${course.id}_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
                  localStorage.setItem(`subscription_token_${course.id}`, subscriptionToken);
                  window.location.reload();
                }}>
                  اشترك الآن
                </Button>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


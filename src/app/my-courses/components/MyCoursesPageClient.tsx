"use client";

import { useState, useEffect, useMemo, useCallback } from "react";
import { useRouter } from "next/navigation";
import { motion } from "motion/react";
import Link from "next/link";
import Image from "next/image";
import Button from "@/components/ui/Button";
import { Course } from "@/types/course";
import { allCourses } from "@/data/courses";
import {
  getSubscribedCourses,
  getCourseSubscriptionDate,
  getCourseProgress,
  setCourseSubscriptionDate,
} from "@/data/user-data";
import { normalizeToISODate, TIME_CONSTANTS } from "@/utils/date-utils";
import BlurCircle from "@/components/ui/BlurCircle";

interface CourseWithSubscription extends Course {
  subscriptionDate: string;
  progress: number;
}

export default function MyCoursesPageClient() {
  const router = useRouter();
  const [courses, setCourses] = useState<CourseWithSubscription[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check authentication
    const token = localStorage.getItem("auth_token");
    if (!token) {
      router.push("/login");
      return;
    }

    try {
      // Get subscribed courses
      const subscribedIds = getSubscribedCourses();
      
      // If no subscribed courses, get from subscription tokens (for backward compatibility)
      // This is a migration path for existing subscriptions
      if (subscribedIds.length === 0) {
        allCourses.forEach((course) => {
          const subscriptionToken = localStorage.getItem(`subscription_token_${course.id}`);
          if (subscriptionToken) {
            subscribedIds.push(course.id);
            // Migrate: set subscription date if not exists
            const existingDate = getCourseSubscriptionDate(course.id);
            if (!existingDate) {
              // Use current date as fallback for migration
              setCourseSubscriptionDate(course.id);
            }
          }
        });
      }

      // Use Set for O(1) lookup performance
      const subscribedSet = new Set(subscribedIds);

      const subscribedCoursesList = allCourses
        .filter((c) => subscribedSet.has(c.id))
        .map((course) => {
          // Get subscription date with proper validation
          let subscriptionDate = getCourseSubscriptionDate(course.id);
          
          // Fallback: check subscription token (but don't use it as date)
          if (!subscriptionDate) {
            const subscriptionToken = localStorage.getItem(`subscription_token_${course.id}`);
            if (subscriptionToken) {
              // If token exists but no date, set current date
              setCourseSubscriptionDate(course.id);
              subscriptionDate = getCourseSubscriptionDate(course.id);
            }
          }
          
          // Final fallback: use current date
          if (!subscriptionDate || !normalizeToISODate(subscriptionDate)) {
            subscriptionDate = new Date().toISOString();
          }
          
          const progress = getCourseProgress(course.id);

          return {
            ...course,
            subscriptionDate,
            progress,
          };
        })
        .sort((a, b) => {
          // Sort by subscription date (newest first)
          try {
            const dateA = new Date(a.subscriptionDate).getTime();
            const dateB = new Date(b.subscriptionDate).getTime();
            return dateB - dateA;
          } catch (error) {
            if (process.env.NODE_ENV === 'development') {
              console.error('Error sorting dates:', error);
            }
            return 0;
          }
        });

      setCourses(subscribedCoursesList);
    } catch (error) {
      if (process.env.NODE_ENV === 'development') {
        console.error('Error loading courses:', error);
      }
      setCourses([]);
    } finally {
      setLoading(false);
    }
  }, [router]);

  const getTimeAgo = useCallback((dateString: string): string => {
    try {
      // Validate date string
      const normalizedDate = normalizeToISODate(dateString);
      if (!normalizedDate) {
        return "تاريخ غير صحيح";
      }

      const date = new Date(normalizedDate);
      const now = new Date();
      
      // Validate date is valid
      if (isNaN(date.getTime())) {
        return "تاريخ غير صحيح";
      }

      const diffInMs = now.getTime() - date.getTime();
      
      // Handle future dates
      if (diffInMs < 0) {
        return "اليوم";
      }

      const diffInDays = Math.floor(diffInMs / TIME_CONSTANTS.MS_PER_DAY);
      const diffInWeeks = Math.floor(diffInDays / TIME_CONSTANTS.DAYS_PER_WEEK);
      const diffInMonths = Math.floor(diffInDays / TIME_CONSTANTS.DAYS_PER_MONTH);
      const diffInYears = Math.floor(diffInDays / TIME_CONSTANTS.DAYS_PER_YEAR);

      if (diffInYears > 0) {
        return `منذ ${diffInYears} ${diffInYears === 1 ? "سنة" : "سنوات"}`;
      } else if (diffInMonths > 0) {
        return `منذ ${diffInMonths} ${diffInMonths === 1 ? "شهر" : "أشهر"}`;
      } else if (diffInWeeks > 0) {
        return `منذ ${diffInWeeks} ${diffInWeeks === 1 ? "أسبوع" : "أسابيع"}`;
      } else if (diffInDays > 0) {
        return `منذ ${diffInDays} ${diffInDays === 1 ? "يوم" : "أيام"}`;
      } else {
        return "اليوم";
      }
    } catch (error) {
      if (process.env.NODE_ENV === 'development') {
        console.error('Error in getTimeAgo:', error);
      }
      return "تاريخ غير صحيح";
    }
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-foreground/60">جاري التحميل...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen">
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <BlurCircle size={500} color="bg-primary/5" position={{ top: "10%", right: "10%" }} />
        <BlurCircle size={400} color="bg-primary/5" position={{ bottom: "10%", left: "10%" }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 ">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative pt-20 sm:pt-24 pb-16 sm:pb-20 flex flex-col items-center justify-center"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-primary">
            دوراتي
          </h1>
          <p className="text-foreground/70 text-base sm:text-lg">
            جميع الدورات التي اشتركت فيها ومعلومات التقدم
          </p>
        </motion.div>

        {/* Courses List */}
        {courses.length > 0 ? (
          <div className="space-y-6">
            {courses.map((course, index) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl sm:rounded-3xl overflow-hidden border border-border/40 hover:border-primary/40 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <div className="flex flex-col lg:flex-row">
                  {/* Course Image */}
                  <Link
                    href={`/courses/${course.id}`}
                    className="relative w-full lg:w-64 h-48 lg:h-auto flex-shrink-0 group"
                  >
                    <Image
                      src="/courses/course.jpg"
                      alt={course.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </Link>

                  {/* Course Info */}
                  <div className="flex-1 p-6 sm:p-8">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-6">
                      <div className="flex-1">
                        <Link href={`/courses/${course.id}`}>
                          <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-2 hover:text-primary transition-colors">
                            {course.title}
                          </h2>
                        </Link>
                        <p className="text-sm sm:text-base text-foreground/70 mb-4 line-clamp-2">
                          {course.description}
                        </p>
                        <div className="flex flex-wrap items-center gap-4 text-sm text-foreground/60">
                          <div className="flex items-center gap-2">
                            <svg
                              width="18"
                              height="18"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                            >
                              <circle cx="12" cy="12" r="10" />
                              <polyline points="12 6 12 12 16 14" />
                            </svg>
                            <span>{course.duration}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <svg
                              width="18"
                              height="18"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                            >
                              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                              <circle cx="9" cy="7" r="4" />
                              <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                            </svg>
                            <span>{course.students} طالب</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <svg
                              width="18"
                              height="18"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                            >
                              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                              <line x1="16" y1="2" x2="16" y2="6" />
                              <line x1="8" y1="2" x2="8" y2="6" />
                              <line x1="3" y1="10" x2="21" y2="10" />
                            </svg>
                            <span>{getTimeAgo(course.subscriptionDate)}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Progress Section */}
                    <div className="mb-6">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm sm:text-base font-semibold text-foreground">
                          نسبة الإنجاز
                        </span>
                        <span className="text-lg sm:text-xl font-bold text-primary">
                          {course.progress}%
                        </span>
                      </div>
                      <div className="w-full h-3 bg-primary/10 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${course.progress}%` }}
                          transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.1 }}
                          className="h-full bg-gradient-to-r from-primary to-primary-600 rounded-full"
                        />
                      </div>
                    </div>

                    {/* Action Button */}
                    <Link href={`/courses/${course.id}`}>
                      <Button variant="primary" size="md" className="w-full sm:w-auto">
                        أكمل الدورة
                      </Button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16 bg-white rounded-2xl border border-border/40"
          >
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
              <svg
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="text-primary"
              >
                <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
              </svg>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3">
              لا توجد دورات مشترك فيها
            </h3>
            <p className="text-foreground/60 mb-6">ابدأ رحلتك التعليمية الآن</p>
            <Link href="/courses">
              <Button variant="primary" size="md">
                تصفح الدورات
              </Button>
            </Link>
          </motion.div>
        )}
      </div>
    </div>
  );
}


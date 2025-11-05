"use client";

import { motion } from "motion/react";
import Link from "next/link";
import Image from "next/image";
import { User } from "@/types/user";
import { Course } from "@/types/course";
import Button from "@/components/ui/Button";
import { getCourseProgress } from "@/data/user-data";

interface DashboardProps {
  user: User;
  subscribedCourses: Course[];
}

export default function Dashboard({ user, subscribedCourses }: DashboardProps) {
  return (
    <div className="space-y-6">
      {/* Welcome Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-br from-primary to-primary-600 rounded-2xl p-6 sm:p-8 text-white shadow-xl"
      >
        <h2 className="text-2xl sm:text-3xl font-bold mb-2">مرحباً، {user.username}!</h2>
        <p className="text-white/90 text-sm sm:text-base">
          استمر في التعلم والوصول إلى أهدافك التعليمية
        </p>
      </motion.div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-gradient-to-br from-primary/10 to-primary/5 backdrop-blur-sm rounded-2xl p-8 sm:p-10 border-2 border-primary/20 shadow-xl"
        >
          <div className="flex items-center justify-between mb-6">
            <div className="w-16 h-16 rounded-xl bg-primary/20 backdrop-blur-sm flex items-center justify-center shadow-lg">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-primary">
                <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
              </svg>
            </div>
          </div>
          <p className="text-4xl sm:text-5xl font-bold text-primary mb-3">{user.totalCourses}</p>
          <p className="text-base sm:text-lg font-semibold text-foreground/70">دورة مشترك فيها</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-gradient-to-br from-accent/10 to-accent/5 backdrop-blur-sm rounded-2xl p-8 sm:p-10 border-2 border-accent/20 shadow-xl"
        >
          <div className="flex items-center justify-between mb-6">
            <div className="w-16 h-16 rounded-xl bg-accent/20 backdrop-blur-sm flex items-center justify-center shadow-lg">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-accent">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
              </svg>
            </div>
          </div>
          <p className="text-4xl sm:text-5xl font-bold text-accent mb-3">{user.totalExams}</p>
          <p className="text-base sm:text-lg font-semibold text-foreground/70">اختبار مكتمل</p>
        </motion.div>
      </div>

      {/* Recent Courses */}
      {subscribedCourses.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-2xl p-6 border border-border/40 shadow-lg"
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold text-foreground">دوراتي الأخيرة</h3>
            <Link href="/courses">
              <Button variant="login" size="sm">
                عرض الكل
              </Button>
            </Link>
          </div>
          <div className="space-y-4">
            {subscribedCourses.slice(0, 3).map((course) => {
              const progress = getCourseProgress(course.id);
              return (
                <div
                  key={course.id}
                  className="flex flex-col sm:flex-row items-start sm:items-center gap-4 p-4 sm:p-5 rounded-xl border border-border/40 hover:border-primary/40 transition-all bg-white/50"
                >
                  <Link
                    href={`/courses/${course.id}`}
                    className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-xl overflow-hidden flex-shrink-0 group"
                  >
                    <Image
                      src="/courses/course.jpg"
                      alt={course.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform"
                    />
                  </Link>
                  <div className="flex-1 w-full">
                    <Link
                      href={`/courses/${course.id}`}
                      className="block mb-2 group"
                    >
                      <h4 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                        {course.title}
                      </h4>
                      <p className="text-sm text-foreground/60">{course.duration}</p>
                    </Link>
                    
                    {/* Progress Bar */}
                    <div className="mb-3">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs text-foreground/60">نسبة الإنجاز</span>
                        <span className="text-xs font-semibold text-primary">{progress}%</span>
                      </div>
                      <div className="w-full h-2 bg-primary/10 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${progress}%` }}
                          transition={{ duration: 0.5, ease: "easeOut" }}
                          className="h-full bg-gradient-to-r from-primary to-primary-600 rounded-full"
                        />
                      </div>
                    </div>

                    {/* Continue Button */}
                    <Link href={`/courses/${course.id}`}>
                      <Button variant="primary" size="sm" className="w-full sm:w-auto">
                        أكمل الدورة
                      </Button>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      )}
    </div>
  );
}


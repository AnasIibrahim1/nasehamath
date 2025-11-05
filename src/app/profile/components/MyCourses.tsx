"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";
import Image from "next/image";
import Button from "@/components/ui/Button";
import { Course } from "@/types/course";

interface MyCoursesProps {
  subscribedCourses: Course[];
  allCourses: Course[];
}

export default function MyCourses({ subscribedCourses, allCourses }: MyCoursesProps) {
  const [courseCode, setCourseCode] = useState("");
  const [showCodeInput, setShowCodeInput] = useState(false);

  const handleSubscribeWithCode = () => {
    // TODO: Implement subscription with code
    if (courseCode.trim()) {
      alert(`سيتم الاشتراك بالدورة باستخدام الكود: ${courseCode}`);
      setCourseCode("");
      setShowCodeInput(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* Subscribe with Code Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-2xl p-6 sm:p-8 border border-border/40 shadow-lg"
      >
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
          <h2 className="text-xl sm:text-2xl font-bold text-foreground">دوراتي</h2>
          <Button
            variant="primary"
            size="md"
            onClick={() => setShowCodeInput(!showCodeInput)}
          >
            {showCodeInput ? "إلغاء" : "اشترك في دورة جديدة"}
          </Button>
        </div>

        <AnimatePresence>
          {showCodeInput && (
            <motion.div
              initial={{ opacity: 0, height: 0, marginTop: 0 }}
              animate={{ opacity: 1, height: "auto", marginTop: 16 }}
              exit={{ opacity: 0, height: 0, marginTop: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl sm:rounded-2xl p-5 sm:p-6 border-2 border-primary/20">
                <label className="block text-base sm:text-lg font-bold text-foreground mb-3">
                  أدخل كود الدورة
                </label>
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="text"
                    value={courseCode}
                    onChange={(e) => setCourseCode(e.target.value)}
                    onKeyPress={(e) => {
                      if (e.key === "Enter" && courseCode.trim()) {
                        handleSubscribeWithCode();
                      }
                    }}
                    placeholder="أدخل الكود هنا"
                    className="flex-1 px-5 py-3 rounded-xl border-2 border-border/40 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all bg-white text-foreground placeholder:text-foreground/40"
                  />
                  <Button
                    variant="primary"
                    size="md"
                    onClick={handleSubscribeWithCode}
                    disabled={!courseCode.trim()}
                    className="whitespace-nowrap"
                  >
                    اشترك
                  </Button>
                </div>
                <p className="text-xs text-foreground/60 mt-3">
                  سيتم التحقق من الكود وإضافته لدوراتك بعد التأكيد
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Courses Grid */}
      {subscribedCourses.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {subscribedCourses.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden border border-border/40 hover:border-primary/40 transition-all duration-300 shadow-sm hover:shadow-xl"
            >
              <Link href={`/courses/${course.id}`}>
                <div className="relative h-48 bg-gradient-to-br from-primary/10 to-accent/10">
                  <Image
                    src="/courses/course.jpg"
                    alt={course.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-foreground mb-2 line-clamp-2">
                    {course.title}
                  </h3>
                  <p className="text-sm text-foreground/70 mb-4 line-clamp-2">
                    {course.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-foreground/60">{course.duration}</span>
                    <span className="text-primary font-bold">{course.price} ريال</span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-12 bg-white rounded-2xl border border-border/40"
        >
          <p className="text-foreground/60 mb-4">لا توجد دورات مشترك فيها</p>
          <Link href="/courses">
            <Button variant="primary" size="md">
              تصفح الدورات
            </Button>
          </Link>
        </motion.div>
      )}
    </div>
  );
}


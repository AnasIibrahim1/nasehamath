"use client";

import { motion } from "motion/react";
import Image from "next/image";
import BlurCircle from "@/components/ui/BlurCircle";
import FloatingShape from "@/components/ui/FloatingShape";
import Button from "@/components/ui/Button";
import { homeCourses } from "@/data/courses-home";

export default function Courses() {
  return (
    <section className="relative w-full py-20 md:py-28 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10">
        <BlurCircle
          size={400}
          color="bg-primary/5"
          position={{ top: "10%", left: "10%" }}
        />
        <BlurCircle
          size={350}
          color="bg-accent/5"
          position={{ bottom: "10%", right: "10%" }}
        />
        <BlurCircle
          size={300}
          color="bg-blue-500/5"
          position={{ top: "50%", right: "20%" }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
             أهم <span className="text-primary">الدورات</span>
          </motion.h2>
          <motion.p
            className="text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            اكتشف مجموعة متنوعة من الدورات التعليمية المميزة والمصممة خصيصاً لتطوير مهاراتك
          </motion.p>
        </motion.div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {homeCourses.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative bg-white rounded-2xl overflow-hidden border border-border/40 hover:border-primary/40 transition-all duration-300"
            >
              {/* Course Image */}
              <div className="relative h-56 bg-gradient-to-br from-primary/10 to-accent/10 overflow-hidden">
                <Image
                  src="/courses/course.jpg"
                  alt={course.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent z-10" />

                {/* Duration Badge */}
                <div className="absolute bottom-4 right-4 z-20">
                  <span className="px-3 py-1.5 bg-white/95 backdrop-blur-sm rounded-lg text-xs font-semibold text-primary border border-white/20">
                    {course.duration}
                  </span>
                </div>
              </div>

              {/* Course Content */}
              <div className="p-6">
                {/* Title */}
                <h3 className="text-xl font-bold text-foreground mb-3 line-clamp-1 group-hover:text-primary transition-colors duration-300">
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
                    <span className="text-3xl font-bold text-primary">
                      {course.price}
                    </span>
                    <span className="text-sm text-foreground/60 font-medium">ريال</span>
                  </div>
                  <Button
                    variant="login"
                    size="md"
                    className="px-5 cursor-pointer"
                  >
                    سجل الآن
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
                                             <motion.button
              whileHover={{ scale: 1.05, y: -1 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-8 py-3 text-base font-bold text-white rounded-xl overflow-hidden shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 transition-all duration-300 cursor-pointer"
              style={{
                backgroundImage: "linear-gradient(135deg, #3b82f6 0%, #2563eb 50%, #1d4ed8 100%)",
                backgroundSize: "200% 200%",
                backgroundPosition: "0% 0%",
              }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundPosition = "100% 100%";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundPosition = "0% 0%";
            }}
          >
            {/* Animated shimmer overlay */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
              animate={{
                x: ["-100%", "100%"],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatDelay: 1,
                ease: "linear",
              }}
            />

            {/* Glowing orb effect */}
            <motion.div
              className="absolute -right-4 -top-4 w-16 h-16 bg-white/20 rounded-full blur-xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            <span className="relative z-10 flex items-center justify-center gap-2">
            عرض جميع الدورات
            </span>
          </motion.button>
        </motion.div>
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

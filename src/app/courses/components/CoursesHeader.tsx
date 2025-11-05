"use client";

import { motion } from "motion/react";

export default function CoursesHeader() {
  return (
    <motion.div
      className="text-center mb-10 sm:mb-12 md:mb-16"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <motion.h1
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.05 }}
      >
        جميع <span className="text-primary">الدورات</span>
      </motion.h1>
      <motion.p
        className="text-base sm:text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto leading-relaxed"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.1 }}
      >
        اكتشف جميع دوراتنا المتاحة واختر ما يناسبك لتحقيق أهدافك التعليمية
      </motion.p>
    </motion.div>
  );
}


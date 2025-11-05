"use client";

import { motion } from "motion/react";
import Link from "next/link";
import Button from "@/components/ui/Button";
import BlurCircle from "@/components/ui/BlurCircle";
import FloatingShape from "@/components/ui/FloatingShape";
import FloatingCircle from "@/components/ui/FloatingCircle";

export default function NotFoundContent() {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center py-12 sm:py-16 md:py-20 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10">
        <BlurCircle
          size={500}
          color="bg-primary/10"
          position={{ top: "10%", right: "10%" }}
        />
        <BlurCircle
          size={400}
          color="bg-accent/10"
          position={{ bottom: "10%", left: "10%" }}
        />
        <BlurCircle
          size={350}
          color="bg-blue-500/5"
          position={{ top: "50%", left: "50%" }}
        />
      </div>

      {/* Floating decorative shapes */}
      <FloatingShape
        type="dashed-circle"
        size={120}
        color="border-primary/20"
        position={{ top: "15%", left: "5%" }}
        duration={20}
        delay={0}
      />
      <FloatingShape
        type="solid-circle"
        size={80}
        color="bg-accent/20"
        position={{ bottom: "20%", right: "8%" }}
        duration={8}
        delay={1}
      />
      <FloatingShape
        type="blob"
        size={100}
        color="bg-primary/10"
        position={{ top: "60%", right: "15%" }}
        duration={12}
        delay={0.5}
      />

      {/* Floating circles */}
      <FloatingCircle
        size={16}
        color="bg-primary/60"
        position={{ top: "25%", left: "20%" }}
        duration={4}
        delay={0}
      />
      <FloatingCircle
        size={12}
        color="bg-accent/70"
        position={{ bottom: "30%", left: "15%" }}
        duration={5}
        delay={0.8}
      />
      <FloatingCircle
        size={14}
        color="bg-primary/50"
        position={{ top: "40%", right: "25%" }}
        duration={6}
        delay={1.2}
      />

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* 404 Number in a Box */}
        <motion.div
          className="mb-6 sm:mb-8"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {/* Box Container */}
          <motion.div
            className="relative inline-block"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {/* Box */}
            <div className="relative bg-white/80 backdrop-blur-sm border-2 border-primary/20 rounded-2xl sm:rounded-3xl px-8 sm:px-12 md:px-16 lg:px-20 py-6 sm:py-8 md:py-10 shadow-xl shadow-primary/5">
              {/* Animated border gradient */}
              <motion.div
                className="absolute inset-0 rounded-2xl sm:rounded-3xl opacity-0 hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: "linear-gradient(135deg, rgba(6, 106, 201, 0.1), rgba(247, 195, 46, 0.1))",
                  backgroundSize: "200% 200%",
                  zIndex: -1,
                }}
                animate={{
                  backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              
              <h1
                className="text-7xl sm:text-8xl md:text-9xl lg:text-[10rem] font-bold leading-none select-none relative z-20"
                style={{
                  background: "linear-gradient(270deg, #066AC9, #f7c32e, #066AC9)",
                  backgroundSize: "200% 200%",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  color: "transparent",
                  animation: "gradientMove 4s ease-in-out infinite"
                }}
              >
                4 0 4
              </h1>
              <style>
                {`
                  @keyframes gradientMove {
                    0% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                    100% { background-position: 0% 50%; }
                  }
                `}
              </style>
            </div>
          </motion.div>
        </motion.div>

        {/* Error Message */}
        <motion.div
          className="mb-8 sm:mb-10 md:mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-foreground"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            عذراً، الصفحة غير موجودة
          </motion.h2>

          <motion.p
            className="text-base sm:text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto leading-relaxed mt-6 sm:mt-8"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            يبدو أن الصفحة التي تبحث عنها غير موجودة أو تم نقلها إلى مكان آخر.
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>
            يمكنك العودة إلى الصفحة الرئيسية أو تصفح الدورات المتاحة.
          </motion.p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Link href="/" className="block">
            <Button
              variant="primary"
              size="lg"
              leftIcon={
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m12 19-7-7 7-7" />
                  <path d="M19 12H5" />
                </svg>
              }
            >
              العودة إلى الرئيسية
            </Button>
          </Link>

          <Link href="/courses" className="block">
            <Button
              variant="outline"
              size="lg"
              leftIcon={
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
                  <path d="M9 10h6" />
                  <path d="M12 7v6" />
                </svg>
              }
            >
              تصفح الدورات
            </Button>
          </Link>
        </motion.div>

        {/* Decorative element */}
        <motion.div
          className="mt-12 sm:mt-16 md:mt-20"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <div className="inline-flex items-center gap-2 text-sm text-foreground/50">
            <motion.div
              className="w-2 h-2 rounded-full bg-primary"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="w-2 h-2 rounded-full bg-accent"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}


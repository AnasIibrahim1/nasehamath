"use client";

import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import Image from "next/image";
import BlurCircle from "@/components/ui/BlurCircle";
import FloatingShape from "@/components/ui/FloatingShape";
import Pagination from "@/components/ui/Pagination";
import { testimonials } from "@/data/testimonials";

export default function Testimonials() {
  const [currentPage, setCurrentPage] = useState(1);
  const currentTestimonial = testimonials[currentPage - 1];

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

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
          position={{ top: "50%", right: "50%" }}
        />
      </div>

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
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
            ماذا يقول <span className="text-primary">طلابنا؟</span>
          </motion.h2>
          <motion.p
            className="text-lg md:text-xl text-foreground/70"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            هذا ما يقوله طلابنا عن الدورات
          </motion.p>
        </motion.div>

        {/* Testimonial Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
          <div className="relative bg-white rounded-2xl p-8 md:p-12 border border-border/40 shadow-lg hover:shadow-xl transition-shadow duration-300">
            {/* Quote Icon */}
            <div className="absolute top-6 right-6 w-16 h-16 opacity-10">
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="text-primary w-full h-full"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.984zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
              </svg>
            </div>

            {/* Rating Stars */}
            <div className="flex items-center gap-1 mb-6 justify-center md:justify-start">
              {Array.from({ length: 5 }).map((_, index) => (
                <motion.svg
                  key={index}
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="text-yellow-400"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </motion.svg>
              ))}
            </div>

            {/* Message */}
            <motion.p
              className="text-lg md:text-xl text-foreground/80 mb-8 text-center md:text-right leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              "{currentTestimonial.message}"
            </motion.p>

            {/* Name with Avatar */}
            <motion.div
              className="flex items-center gap-4 justify-center md:justify-start"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-primary/20 flex-shrink-0 ring-2 ring-primary/10">
                <Image
                  src={currentTestimonial.avatar || "/Newppl/01.jpg"}
                  alt={currentTestimonial.name}
                  fill
                  className="object-cover"
                  sizes="64px"
                />
              </div>
              <p className="text-xl font-bold text-primary">
                {currentTestimonial.name}
              </p>
            </motion.div>
          </div>
        </motion.div>
        </AnimatePresence>

        {/* Pagination */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <Pagination
            currentPage={currentPage}
            totalPages={testimonials.length}
            onPageChange={handlePageChange}
          />
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

"use client";

import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import Image from "next/image";
import BlurCircle from "@/components/ui/BlurCircle";
import FloatingShape from "@/components/ui/FloatingShape";
import Pagination from "@/components/ui/Pagination";

interface TestimonialScreenshot {
  id: number;
  imageUrl: string;
  platform: "whatsapp" | "facebook" | "website";
  alt: string;
}

const screenshotTestimonials: TestimonialScreenshot[] = [
  {
    id: 1,
    imageUrl: "/whatsapp.jpeg",
    platform: "whatsapp",
    alt: "رأي طالب عن الدورات عبر واتساب",
  },
  {
    id: 2,
    imageUrl: "/testimonials/facebook-1.jpg",
    platform: "facebook",
    alt: "رأي طالب عن الدورات عبر فيسبوك",
  },
  {
    id: 3,
    imageUrl: "/whatsapp.jpeg",
    platform: "whatsapp",
    alt: "رأي طالب آخر عن الدورات عبر واتساب",
  },
  {
    id: 4,
    imageUrl: "/testimonials/facebook-2.jpg",
    platform: "facebook",
    alt: "رأي طالب عن الدورات عبر فيسبوك",
  },
  {
    id: 5,
    imageUrl: "/whatsapp.jpeg",
    platform: "whatsapp",
    alt: "رأي طالب عن الدورات عبر واتساب",
  },
  {
    id: 6,
    imageUrl: "/testimonials/website-1.jpg",
    platform: "website",
    alt: "رأي طالب عن الدورات عبر الموقع",
  },
];

const getPlatformLabel = (platform: string) => {
  switch (platform) {
    case "whatsapp":
      return "واتساب";
    case "facebook":
      return "فيسبوك";
    default:
      return "رسائل الموقع";
  }
};

const getPlatformColor = (platform: string) => {
  switch (platform) {
    case "whatsapp":
      return "bg-green-500";
    case "facebook":
      return "bg-blue-500";
    default:
      return "bg-primary";
  }
};

interface SaidAboutUsV2Props {
  showTopPagination?: boolean;
}

export default function SaidAboutUsV2({ showTopPagination = false }: SaidAboutUsV2Props) {
  const [currentPage, setCurrentPage] = useState(1);
  const currentScreenshot = screenshotTestimonials[currentPage - 1];

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <section className="relative w-full py-12 sm:py-16 md:py-20 lg:py-28 overflow-hidden">
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
          position={{ top: "50%", left: "50%" }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-3 sm:px-4 md:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-10 sm:mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-3 sm:mb-4 leading-tight"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            قالوا عن <span className="text-primary">دوراتنا</span>
          </motion.h2>
          <motion.p
            className="text-sm sm:text-base md:text-lg text-foreground/70 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            هذا ما يقوله طلابنا عن الدورات والخدمات التي نقدمها
          </motion.p>
        </motion.div>

        {/* Top Pagination - Optional */}
        {showTopPagination && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="flex justify-center mb-6 sm:mb-8"
          >
            <Pagination
              currentPage={currentPage}
              totalPages={screenshotTestimonials.length}
              onPageChange={handlePageChange}
            />
          </motion.div>
        )}

        {/* Screenshot Display Area */}
        <div className="relative mb-8 sm:mb-10 md:mb-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPage}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="relative"
            >
              {/* Platform Badge */}
              <div className="absolute top-4 right-4 z-10">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 }}
                  className={`${getPlatformColor(
                    currentScreenshot.platform
                  )} text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg flex items-center gap-2`}
                >
                  <span>{getPlatformLabel(currentScreenshot.platform)}</span>
                  {currentScreenshot.platform === "whatsapp" && (
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  )}
                  {currentScreenshot.platform === "facebook" && (
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  )}
                </motion.div>
              </div>

              {/* Screenshot Image */}
              <div className="relative max-w-4xl mx-auto bg-white rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden border border-border/40">
                <div className="relative aspect-[16/10] w-full">
                  <Image
                    src={currentScreenshot.imageUrl}
                    alt={currentScreenshot.alt}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 800px"
                    priority={currentPage === 1}
                  />
                  
                  {/* Gradient overlay at edges for better visual */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/5 via-transparent to-transparent pointer-events-none"></div>
                </div>

                {/* Decorative frame effect */}
                <div className="absolute inset-0 rounded-2xl sm:rounded-3xl ring-4 ring-primary/10 pointer-events-none"></div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Pagination */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex justify-center"
        >
          <Pagination
            currentPage={currentPage}
            totalPages={screenshotTestimonials.length}
            onPageChange={handlePageChange}
          />
        </motion.div>
      </div>

      {/* Floating Shapes */}
      <FloatingShape
        type="solid-circle"
        size={60}
        color="bg-primary/10"
        position={{ top: "20%", left: "5%" }}
        duration={4}
        delay={0}
      />
      <FloatingShape
        type="dashed-circle"
        size={100}
        color="border-accent/30"
        position={{ bottom: "15%", right: "3%" }}
        duration={6}
        delay={1}
      />
    </section>
  );
}

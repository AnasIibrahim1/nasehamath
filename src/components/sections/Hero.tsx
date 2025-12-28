"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { useMemo } from "react";
import Button from "@/components/ui/Button";
import FloatingCircle from "@/components/ui/FloatingCircle";
import FloatingShape from "@/components/ui/FloatingShape";
import BlurCircle from "@/components/ui/BlurCircle";

export default function Hero() {
  // (background blob removed)

  // Box morphing paths (provided sequence), will animate and return to first
  const boxPaths = useMemo(
    () => [
      "M44.6,-66.5C56.5,-61.6,64.2,-47.2,67.5,-32.9C70.9,-18.6,69.9,-4.3,69.9,11.5C69.9,27.3,70.8,44.7,63.8,58.3C56.8,72,41.8,81.8,26.9,81.8C11.9,81.7,-3.1,71.7,-18.6,65.9C-34,60.1,-49.9,58.6,-60.6,50.3C-71.3,42,-76.9,26.9,-80.5,10.7C-84.1,-5.4,-85.8,-22.7,-79.1,-35.5C-72.3,-48.4,-57.1,-56.7,-42.5,-60.4C-27.9,-64.1,-14,-63.1,1.2,-65C16.3,-66.8,32.6,-71.4,44.6,-66.5Z",
      "M33.5,-53.3C41.8,-46.8,45.8,-34.8,48.5,-23.7C51.1,-12.6,52.3,-2.5,53.2,9.3C54,21,54.5,34.3,48.7,43.5C42.8,52.7,30.6,57.7,17.6,62.9C4.6,68.1,-9.3,73.5,-21.1,70.6C-33,67.8,-42.8,56.7,-49.1,45C-55.5,33.3,-58.4,21.1,-61.2,8.2C-64.1,-4.8,-66.9,-18.3,-64,-31.1C-61.1,-44,-52.4,-56,-40.8,-61C-29.2,-65.9,-14.6,-63.8,-1,-62.2C12.6,-60.7,25.2,-59.7,33.5,-53.3Z",
      "M30.4,-50.9C39.5,-41.5,47.1,-33.2,54.8,-23C62.6,-12.9,70.6,-0.8,71.9,12.4C73.1,25.5,67.7,39.7,58.1,49.9C48.6,60.2,35,66.4,21.5,67.9C8.1,69.4,-5.2,66.2,-19.3,63.2C-33.4,60.2,-48.2,57.5,-54.9,48.4C-61.6,39.3,-60.1,23.8,-59.9,10C-59.7,-3.9,-61,-16.1,-57.9,-28C-54.9,-39.9,-47.7,-51.4,-37.3,-60.1C-26.9,-68.9,-13.5,-74.9,-1.4,-72.8C10.7,-70.6,21.3,-60.2,30.4,-50.9Z",
      "M30.6,-48.9C38.5,-42.6,42.7,-32,47.4,-21.7C52,-11.3,56.9,-1.2,57.4,9.6C57.9,20.3,53.9,31.8,48,45.6C42.2,59.4,34.6,75.5,23,79.5C11.4,83.5,-4.2,75.4,-19.6,69.5C-34.9,63.7,-50.2,60.2,-55.4,50.2C-60.7,40.2,-56,23.8,-56.6,9.1C-57.2,-5.6,-63,-18.5,-60.7,-29.5C-58.4,-40.4,-48,-49.4,-36.5,-54C-25,-58.7,-12.5,-59,-0.6,-58.1C11.4,-57.3,22.8,-55.2,30.6,-48.9Z",
      "M33.6,-50.7C43.6,-46,51.5,-36.6,59.8,-25.3C68,-14,76.5,-0.9,73.4,9.6C70.4,20,55.8,27.9,44.5,35.7C33.3,43.6,25.4,51.5,15.8,54.6C6.3,57.6,-4.8,55.9,-14.6,52C-24.5,48.2,-33,42.1,-42.9,34.9C-52.8,27.6,-64,19.2,-68.6,7.9C-73.3,-3.4,-71.4,-17.6,-63.9,-27.1C-56.3,-36.7,-43.1,-41.6,-31.5,-45.6C-19.9,-49.6,-10,-52.7,1,-54.2C11.9,-55.6,23.7,-55.5,33.6,-50.7Z",
      // back to first to make loop seamless
      "M44.6,-66.5C56.5,-61.6,64.2,-47.2,67.5,-32.9C70.9,-18.6,69.9,-4.3,69.9,11.5C69.9,27.3,70.8,44.7,63.8,58.3C56.8,72,41.8,81.8,26.9,81.8C11.9,81.7,-3.1,71.7,-18.6,65.9C-34,60.1,-49.9,58.6,-60.6,50.3C-71.3,42,-76.9,26.9,-80.5,10.7C-84.1,-5.4,-85.8,-22.7,-79.1,-35.5C-72.3,-48.4,-57.1,-56.7,-42.5,-60.4C-27.9,-64.1,-14,-63.1,1.2,-65C16.3,-66.8,32.6,-71.4,44.6,-66.5Z",
    ],
    []
  );

  return (
    <section className="relative min-h-screen">
      {/* Pattern background */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[1]"
        style={{
          backgroundImage: "url('/pattern/05.png')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "100%",
          backgroundPosition: "top left",
        }}
      />
      {/* Blur background circles */}
      <BlurCircle
        size={256}
        color="bg-primary/20"
        position={{ right: "6rem", top: "-5rem" }}
      />



      <div className="mx-auto max-w-7xl px-4 py-16 md:py-24">
        <div className="grid items-center gap-10 md:grid-cols-2">
          {/* Text */}
          <div className="text-center md:text-right">
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.2]"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.05 }}
            >
              دعني أساعدك في الوصول إلى <span className="text-accent hover:text-primary transition-all duration-300">
              أهدافك
              </span>
            </motion.h1>

            <motion.p
              className="mt-4 text-[15px] font-medium text-foreground/50 "
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: "easeOut", delay: 0.15 }}
            >
              هدفنا أن نصل بالطلاب إلى العلامة الكاملة، فإن كان عندك الهمة انضم إلينا.
            </motion.p>

            <motion.div
              className="mt-8 flex items-center justify-center md:justify-start gap-3"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: "easeOut", delay: 0.25 }}
            >
              <Button
                variant="primary"
                size="lg"
                className="rounded-full px-6 shadow-[0_8px_24px_rgba(6,106,201,0.35)] hover:shadow-[0_10px_28px_rgba(6,106,201,0.45)]"
                whileHover={{ y: -2}}
              >
                ابدأ الآن
              </Button>

              <Button
                variant="login"
                size="lg"
                className="rounded-full px-5 border-0 text-[#0553a3]"
                leftIcon={
                  <span className="relative inline-flex h-10 w-10 items-center justify-center">
                    {/* Outer circle - largest */}
                    <motion.span
                      className="absolute inset-0 rounded-full border-2 border-[#0553a3]/30"
                      animate={{
                        scale: [1, 1.8, 1.8],
                        opacity: [0.6, 0.3, 0],
                      }}
                      transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        ease: "easeOut",
                        delay: 0,
                      }}
                    />
                    {/* Middle circle */}
                    <motion.span
                      className="absolute inset-0 rounded-full border-2 border-[#0553a3]/40"
                      animate={{
                        scale: [1, 1.5, 1.5],
                        opacity: [0.7, 0.4, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeOut",
                        delay: 0.2,
                      }}
                    />
                    {/* Inner circle - smallest */}
                    <motion.span
                      className="absolute inset-0 rounded-full border-2 border-[#0553a3]/50"
                      animate={{
                        scale: [1, 1.25, 1.25],
                        opacity: [0.8, 0.5, 0],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeOut",
                        delay: 0.4,
                      }}
                    />
                    {/* Pulsing glow effect */}
                    <motion.span
                      className="absolute inset-0 rounded-full bg-[#0553a3]/20"
                      animate={{
                        scale: [1, 1.15, 1],
                        opacity: [0.5, 0.8, 0.5],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                    {/* Video icon button */}
                    <motion.span
                      className="relative z-10 inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#0553a3] text-white shadow-lg shadow-[#0553a3]/30"
                      animate={{
                        boxShadow: [
                          "0 0 0 0 rgba(5, 83, 163, 0.4)",
                          "0 0 0 8px rgba(5, 83, 163, 0)",
                          "0 0 0 0 rgba(5, 83, 163, 0)",
                        ],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeOut",
                      }}
                    >
                      <motion.svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                        animate={{
                          scale: [1, 1.1, 1],
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      >
                        <path d="M8 5v14l11-7z" />
                      </motion.svg>
                    </motion.span>
                  </span>
                }
                whileHover={{ y: -2 }}
              >
                شاهد الفيديو
              </Button>
            </motion.div>

            <div className="mt-6 flex flex-wrap items-center justify-center md:justify-start gap-4 text-sm text-muted">
              <motion.div
                whileHover={{ scale: 1.1, rotate: -2 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
                className="inline-flex items-center gap-2 font-medium text-[#226CF9] cursor-pointer"
              >
                <span className="i-hero-dot" />
                <span className="text-lg">
                  <svg width="18" height="18" viewBox="0 0 20 20" fill="none"><path d="M7.5 5V15M12.5 5V15M2.5 3.5V16.5C2.5 17.3284 3.17157 18 4 18H16C16.8284 18 17.5 17.3284 17.5 16.5V3.5C17.5 2.67157 16.8284 2 16 2H4C3.17157 2 2.5 2.67157 2.5 3.5Z" stroke="#226CF9" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/><path d="M6 7.5H14M6 12.5H14" stroke="#226CF9" strokeWidth="1.4" strokeLinecap="round"/></svg>
                </span>
                شاهد وتعلم
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.1, rotate: -2 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
                className="inline-flex items-center gap-2 font-medium text-[#F6B800] cursor-pointer"
              >
                <span className="i-hero-dot" />
                <span className="text-lg">
                  <svg width="18" height="18" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="7.5" stroke="#F6B800" strokeWidth="1.4"/><path d="M8.8 7.7L13 10L8.8 12.3V7.7Z" fill="#F6B800"/></svg>
                </span>
                قم بالاختبار
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.1, rotate: -2 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
                className="inline-flex items-center gap-2 font-medium text-[#059669] cursor-pointer"
              >
                <span className="i-hero-dot" />
                <span className="text-lg">
                  <svg width="18" height="18" viewBox="0 0 20 20" fill="none"><path d="M10 2C5.02944 2 1 6.02944 1 11C1 12.1144 1.22786 13.1704 1.64287 14.1115C3.12937 17.2238 6.32944 19.5072 9.98561 19.9954C13.7144 20.4911 17.0429 18.4608 18.4293 14.9451C18.7555 14.0861 19 13.0757 19 11.9984C19 6.02944 14.9706 2 10 2ZM10 13C8.34315 13 7 11.6569 7 10C7 8.34315 8.34315 7 10 7C11.6569 7 13 8.34315 13 10C13 11.6569 11.6569 13 10 13Z" fill="#059669"/></svg>
                </span>
                احصل على شهادة معتمدة
              </motion.div>
            </div>

          </div>

          {/* Visual */}
          <div className="relative">
            <motion.div
              className="relative mx-auto aspect-[4/5]overflow-visible"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
            >
              {/* Animated SVG (no box) */}
              <motion.svg
                viewBox="0 0 200 200"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute inset-0 h-[100%] w-[100%]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                <motion.path
                  fill="#066ac9"
                  initial={{ d: boxPaths[0] }}
                  animate={{ d: boxPaths }}
                  transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
                  transform="translate(100 100)"
                />
              </motion.svg>
              {/* Person image layered above the SVG */}
              <div className="relative z-10 flex h-fulll w-full items-end justify-center">
                <Image
                  src="/ppl/person.png"
                  alt="طالب"
                  width={480}
                  height={480}
                  className="w-98 object-contain drop-shadow-[0_24px_64px_rgba(6,106,201,0.35)]"
                  priority
                />
              </div>
            </motion.div>

            {/* Floating badges/icons */}
            <motion.div
              className="absolute right-20 top-10 rounded-2xl  bg-white px-3 py-2 shadow-sm"
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.25 }}
            >
              <div className="flex items-center gap-2">
                <Image src="/icons/angular.svg" alt="Angular" width={45} height={35} />
              </div>
            </motion.div>
            <motion.div
              className="absolute left-0 bottom-80 rounded-2xl  bg-white px-3 py-2 shadow-sm"
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.25 }}
            >
              <div className="flex items-center gap-2">
                <Image src="/icons/figma.svg" alt="Angular" width={45} height={35} />
              </div>
            </motion.div>
            <motion.div
              className="absolute left-20 top-10 rounded-2xl bg-white px-2.5 py-2 shadow-sm"
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
            >
              <Image src="/icons/pencil.svg" alt="Pencil" width={45} height={35} />
            </motion.div>

            <motion.div
              className="absolute -right-4 bottom-10 rounded-2xl  bg-white px-2.5 py-2 shadow-sm"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
            >
              <Image src="/icons/science.svg" alt="Science" width={45} height={35} />
            </motion.div>

            {/* Floating: Congratulations box */}
            <motion.div
              className="absolute z-40 right-8 bottom-0 lg:bottom-32 rounded-2xl bg-white/40 backdrop-blur-md border border-white/30 px-4 py-3 shadow-lg"
              initial={{ opacity: 0, scale: 0.9, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="flex items-center gap-3">
                <div className="relative flex-shrink-0">
                  <div className="h-10 w-10 rounded-full bg-accent flex items-center justify-center">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" fill="currentColor" className="text-white"/>
                    </svg>
                  </div>
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-semibold text-foreground">تم التسجيل</span>
                  <span className="text-xs text-foreground/80 font-medium">تم التسجيل بنجاح</span>
                </div>
              </div>
            </motion.div>

            {/* Extra floating circles */}
            <FloatingCircle
              size={12}
              color="bg-primary/70"
              position={{ left: "2rem", bottom: "6rem" }}
              duration={5}
              delay={0}
            />
            <FloatingCircle
              size={10}
              color="bg-accent/80"
              position={{ right: "2rem", top: "6rem" }}
              duration={4}
              delay={0.6}
            />
            <FloatingCircle
              size={8}
              color="bg-primary/60"
              position={{ right: "6rem", bottom: "8rem" }}
              duration={3.5}
              delay={0.3}
            />

            {/* Floating: New students today */}
            <motion.div
              className="absolute z-40 -left-4 bottom-28 rounded-2xl bg-white/90 px-3.5 py-2.5 shadow-sm backdrop-blur"
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
            >
              <div className="flex items-center flex-col gap-3">
              <div className="flex items-center gap-2">
                  <span className="text-lg font-medium text-[#0553a3] ">طلابنا الجدد اليوم</span>
                </div>
                <div className="flex -space-x-2 rtl:space-x-reverse">
                  <Image src="/Newppl/01.jpg" alt="طالب جديد" width={28} height={28} className="h-7 w-7 rounded-full border border-white object-cover" />
                  <Image src="/Newppl/02.jpg" alt="طالبة جديدة" width={28} height={28} className="h-7 w-7 rounded-full border border-white object-cover" />
                  <Image src="/Newppl/03.jpg" alt="طالب جديد" width={28} height={28} className="h-7 w-7 rounded-full border border-white object-cover" />
                  <Image src="/Newppl/04.jpg" alt="طالبة جديدة" width={28} height={28} className="h-7 w-7 rounded-full border border-white object-cover" />
                  <Image src="/Newppl/05.jpg" alt="طالب جديد" width={28} height={28} className="h-7 w-7 rounded-full border border-white object-cover" />
                <span className="flex items-center justify-center ml-2 rounded-full bg-green-100 px-2 py-0.5 text-xs font-semibold text-green-700 border border-green-200">
                  +1k
                </span>
                </div>

              </div>
            </motion.div>


            <div className="absolute left-1/2 -bottom-4 -translate-x-1/2">
              <FloatingShape
                type="dashed-circle"
                size={80}
                color="border-accent/60"
                position={{ bottom: 0, left: 0 }}
                duration={16}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}



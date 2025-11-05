"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useScroll, AnimatePresence, useMotionValueEvent } from "motion/react";
import { useState, useMemo } from "react";
import Button from "@/components/ui/Button";
import { navLinks } from "@/data/navigation";

export default function HeaderV2() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();

  const isActive = useMemo(
    () => (href: string) => (href === "/" ? pathname === href : pathname?.startsWith(href)),
    [pathname]
  );

  const [scrollProgress, setScrollProgress] = useState(0);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setScrollProgress(latest);
  });

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        style={{
          backdropFilter: scrollProgress > 0.05 ? `blur(20px) saturate(180%)` : `blur(10px) saturate(150%)`,
          backgroundColor: scrollProgress > 0.05 ? "rgba(255, 255, 255, 0.95)" : "rgba(255, 255, 255, 0.85)",
        }}
        className="fixed top-0 z-50 w-full border-b border-white/20 bg-gradient-to-b from-white/95 via-white/90 to-white/85 shadow-lg shadow-black/5"
      >
        {/* Animated scroll progress line */}
        <motion.div
          style={{ scaleX: scrollYProgress, transformOrigin: "0% 50%" }}
          className="absolute bottom-0 left-0 h-[2px] w-full bg-gradient-to-r from-transparent via-primary via-50% via-accent to-primary origin-left"
        />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            {/* Logo - Static, no animation */}
            <Link
              href="/"
              className="flex items-center gap-3 shrink-0 group"
              aria-label="Naseehamath"
            >
              <div className="relative">
                <Image
                  src="/logo/logo.png"
                  alt="Naseehamath Logo"
                  width={140}
                  height={140}
                  className="rounded-lg shadow-md"
                  priority
                />
              </div>
            </Link>

                         {/* Desktop Navigation - Enhanced */}
             <nav className="hidden lg:flex items-center gap-1 flex-1 justify-center">
               {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: -15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <Link
                    href={link.href}
                    className="relative group px-5 py-2.5 rounded-xl font-medium text-sm transition-all duration-300"
                  >
                    {/* Text */}
                    <span
                      className={`relative z-10 transition-all duration-300 ${
                        isActive(link.href)
                          ? "text-primary font-bold"
                          : "text-foreground/70 group-hover:text-foreground"
                      }`}
                    >
                      {link.label}
                    </span>

                    {/* Active indicator with smooth transition */}
                    {isActive(link.href) && (
                      <motion.div
                        layoutId="activeNavIndicator"
                        className="absolute inset-0 bg-gradient-to-r from-primary/15 via-primary/20 to-accent/15 rounded-xl border border-primary/30 shadow-sm shadow-primary/10"
                        initial={false}
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 35,
                        }}
                      >
                      </motion.div>
                    )}

                    {/* Hover background effect */}
                    {!isActive(link.href) && (
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-accent/5 via-primary/8 to-accent/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        whileHover={{ scale: 1.02 }}
                      />
                    )}

                    {/* Underline effect on hover */}
                    <motion.div
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 w-0 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full group-hover:w-3/4 transition-all duration-300"
                      initial={false}
                    />
                  </Link>
                </motion.div>
              ))}
                         </nav>

             {/* Auth Buttons - Premium Design */}
             <div className="hidden lg:flex items-center gap-3">
               {/* Login Button */}
               <Button
                 variant="login"
                 size="md"
                 href="/login"
                 leftIcon={
                   <motion.svg
                     width="16"
                     height="16"
                     viewBox="0 0 24 24"
                     fill="none"
                     stroke="currentColor"
                     strokeWidth="2"
                     strokeLinecap="round"
                     strokeLinejoin="round"
                     animate={{
                       x: [0, 2, 0],
                     }}
                     transition={{
                       duration: 1.5,
                       repeat: Infinity,
                       ease: "easeInOut",
                     }}
                   >
                     <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
                     <polyline points="10 17 15 12 10 7" />
                     <line x1="15" y1="12" x2="3" y2="12" />
                   </motion.svg>
                 }
               >
                   تسجيل الدخول
               </Button>

               {/* Sign Up Button */}
               <Button
                 variant="primary"
                 size="md"
                 href="/register"
                 leftIcon={
                   <motion.svg
                     width="16"
                     height="16"
                     viewBox="0 0 24 24"
                     fill="none"
                     stroke="currentColor"
                     strokeWidth="2.5"
                     strokeLinecap="round"
                     strokeLinejoin="round"
                     animate={{
                       rotate: [0, 10, -10, 0],
                     }}
                     transition={{
                       duration: 2,
                       repeat: Infinity,
                       repeatDelay: 1.5,
                       ease: "easeInOut",
                     }}
                   >
                     <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                     <circle cx="9" cy="7" r="4" />
                     <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                     <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                   </motion.svg>
                 }
               >
                   إنشاء حساب
               </Button>
             </div>

             {/* Mobile Menu Button - Enhanced */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2.5 rounded-xl text-foreground/80 hover:text-foreground hover:bg-white/60 transition-all duration-300 relative"
              aria-label="Toggle menu"
            >
              {/* Animated background on hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl opacity-0 hover:opacity-100 transition-opacity duration-300"
                layoutId="mobileMenuBg"
              />
              
              {/* Hamburger/Close Icon */}
              <motion.div
                className="relative z-10 w-6 h-6 flex flex-col justify-center gap-1.5"
                animate={{
                  rotate: isMobileMenuOpen ? 90 : 0,
                }}
                transition={{ duration: 0.3 }}
              >
                <motion.span
                  className="block h-0.5 w-full bg-foreground rounded-full"
                  animate={{
                    rotate: isMobileMenuOpen ? 45 : 0,
                    y: isMobileMenuOpen ? 6 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                />
                <motion.span
                  className="block h-0.5 w-full bg-foreground rounded-full"
                  animate={{
                    opacity: isMobileMenuOpen ? 0 : 1,
                  }}
                  transition={{ duration: 0.2 }}
                />
                <motion.span
                  className="block h-0.5 w-full bg-foreground rounded-full"
                  animate={{
                    rotate: isMobileMenuOpen ? -45 : 0,
                    y: isMobileMenuOpen ? -6 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* Enhanced Mobile Menu */}
      <AnimatePresence mode="wait">
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0, y: -20 }}
            animate={{ opacity: 1, height: "auto", y: 0 }}
            exit={{ opacity: 0, height: 0, y: -20 }}
            transition={{
              duration: 0.4,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="fixed top-20 left-0 right-0 z-40 bg-white/98 backdrop-blur-2xl border-b border-border/30 shadow-2xl lg:hidden overflow-hidden"
          >
            {/* Gradient overlay at top */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

            <div className="px-4 py-6 space-y-2">
              {/* Mobile Nav Links with staggered animation */}
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -30, scale: 0.95 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: -30, scale: 0.95 }}
                  transition={{
                    duration: 0.3,
                    delay: index * 0.05,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <Link
                    href={link.href}
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                    }}
                    className={`block relative px-5 py-3.5 rounded-xl font-medium transition-all duration-300 overflow-hidden group ${
                      isActive(link.href)
                        ? "bg-gradient-to-r from-primary/15 via-primary/20 to-accent/15 text-primary border border-primary/30 shadow-sm"
                        : "text-foreground/80 hover:bg-white/80 hover:text-foreground hover:shadow-md"
                    }`}
                  >


                    {/* Hover shimmer effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"
                      initial={false}
                    />

                    <span className="relative z-10 block">{link.label}</span>
                  </Link>
                </motion.div>
                             ))}
             </div>

             {/* Mobile Auth Buttons - Premium Design */}
             <div className="px-4 pt-4 pb-6 space-y-3 border-t border-border/30 mt-4">
               {/* Mobile Login Button */}
               <Button
                 variant="login"
                 size="lg"
                 className="w-full"
                 href="/login"
                 leftIcon={
                   <svg
                     width="18"
                     height="18"
                     viewBox="0 0 24 24"
                     fill="none"
                     stroke="currentColor"
                     strokeWidth="2"
                     strokeLinecap="round"
                     strokeLinejoin="round"
                   >
                     <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
                     <polyline points="10 17 15 12 10 7" />
                     <line x1="15" y1="12" x2="3" y2="12" />
                   </svg>
                 }
               >
                   تسجيل الدخول
               </Button>

               {/* Mobile Sign Up Button */}
               <Button
                 variant="primary"
                 size="lg"
                 className="w-full"
                 href="/register"
                 leftIcon={
                   <svg
                     width="18"
                     height="18"
                     viewBox="0 0 24 24"
                     fill="none"
                     stroke="currentColor"
                     strokeWidth="2.5"
                     strokeLinecap="round"
                     strokeLinejoin="round"
                   >
                     <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                     <circle cx="9" cy="7" r="4" />
                     <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                     <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                   </svg>
                 }
               >
                   إنشاء حساب
               </Button>
             </div>

             {/* Decorative bottom gradient */}
             <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Spacer for fixed header */}
      <div className="h-20" />
    </>
  );
}

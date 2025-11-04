"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useScroll } from "motion/react";
import { useMemo, useState } from "react";
import Button from "@/components/ui/Button";

const navLinks = [
  { href: "/", label: "الرئيسية" },
  { href: "/about", label: "قالوا عن الدورات" },
  { href: "/courses", label: "الدورات" },
  { href: "/contact", label: "تواصل معنا" },
  { href: "/blog", label: "المدونة" },
];

export default function Header() {
  const pathname = usePathname();
  const [query, setQuery] = useState("");

  const isActive = useMemo(
    () => (href: string) => (href === "/" ? pathname === href : pathname?.startsWith(href)),
    [pathname]
  );

  return (
    <motion.header
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="top-0 z-40 backdrop-blur bg-white/50 sticky w-full"
    >
      <TopScrollLine />
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex h-16 items-center gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0" aria-label="Naseehamath">
            <Image
              src="/logo/logo.png"
              alt="Naseehamath Logo"
              width={200}
              height={200}
              className="rounded"
              priority
            />
          </Link>

          {/* Search */}
          <div className="flex-1">
            <div className="relative">
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="ابحث عن دورة أو موضوع..."
                className="w-full rounded-md border border-border bg-background pr-10 pl-3 py-2 text-sm placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-primary/30"
              />
              <svg
                viewBox="0 0 24 24"
                width="18"
                height="18"
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-muted"
                aria-hidden="true"
              >
                <path
                  fill="currentColor"
                  d="M15.5 14h-.79l-.28-.27a6.471 6.471 0 0 0 1.57-4.23C15.99 6.01 13 3 9.5 3S3.01 6.01 3.01 9.5 6 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l4.25 4.25c.41.41 1.08.41 1.49 0s.41-1.08 0-1.49L15.5 14Zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14Z"
                />
              </svg>
            </div>
          </div>

          {/* Nav */}
          <nav className="hidden lg:flex items-center gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-md px-3 py-2 text-sm font-medium transition ${
                  isActive(link.href)
                    ? "text-[#0553a3]"
                    : "text-[#000] hover:text-[#0553a3]"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Auth */}
          <div className="hidden sm:flex items-center gap-2">
            <Button variant="outline">تسجيل الدخول</Button>
            <Button variant="primary">إنشاء حساب</Button>
          </div>
        </div>
      </div>
    </motion.header>
  );
}

function TopScrollLine() {
  const { scrollYProgress } = useScroll();
  return (
    <motion.div
      style={{ scaleX: scrollYProgress, transformOrigin: "0% 50%" }}
      className="pointer-events-none fixed left-0 top-0 h-[2px] w-full bg-primary/70"
    />
  );
}



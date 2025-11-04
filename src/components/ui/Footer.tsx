"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import BlurCircle from "@/components/ui/BlurCircle";
import FloatingShape from "@/components/ui/FloatingShape";

const navLinks = [
  { href: "/", label: "الرئيسية" },
  { href: "/about", label: "قالوا عن الدورات" },
  { href: "/courses", label: "الدورات" },
  { href: "/contact", label: "تواصل معنا" },
  { href: "/blog", label: "المدونة" },
];

const quickLinks = [
  { href: "/courses", label: "جميع الدورات" },
  { href: "/courses?category=free", label: "الدورات المجانية" },
  { href: "/courses?category=paid", label: "الدورات المدفوعة" },
  { href: "/about", label: "من نحن" },
];

const supportLinks = [
  { href: "/faq", label: "الأسئلة الشائعة" },
  { href: "/contact", label: "الدعم الفني" },
  { href: "/terms", label: "شروط الاستخدام" },
  { href: "/privacy", label: "سياسة الخصوصية" },
];

const socialLinks = [
  {
    name: "Facebook",
    href: "https://web.facebook.com/Thamer.Tutorial",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path
          fillRule="evenodd"
          d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/962787488070",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="relative w-full text-white overflow-hidden"
      style={{
        backgroundImage: "url('/pattern/04.png') , linear-gradient(135deg, #0553a3 0%, #0377bc 100%)",
        backgroundSize: "cover, 100% 100%",
        backgroundRepeat: "no-repeat, no-repeat",
        backgroundPosition: "center, center"
      }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10">
        {/* Gradient overlay */}
        <motion.div
          className="absolute inset-0 opacity-10"
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Blur circles */}
        <BlurCircle
          size={500}
          color="bg-primary/5"
          position={{ top: "-10%", right: "10%" }}
        />
        <BlurCircle
          size={400}
          color="bg-accent/5"
          position={{ bottom: "-5%", left: "15%" }}
        />

        {/* Floating shapes */}
        <FloatingShape
          type="dashed-circle"
          size={120}
          color="border-primary/10"
          position={{ top: "20%", left: "5%" }}
          duration={25}
        />
        <FloatingShape
          type="solid-circle"
          size={80}
          color="bg-accent/10"
          position={{ bottom: "30%", right: "10%" }}
          duration={6}
          delay={1}
        />
      </div>

      {/* Main footer content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="flex flex-col items-center justify-center gap-8 lg:flex-row lg:justify-between lg:items-start lg:gap-12 mb-12">
          {/* Brand section */}
          <motion.div
            className="w-full max-w-md lg:max-w-xs lg:w-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/logo/logo.png"
                alt="Naseehamath Logo"
                width={180}
                height={180}
                className="rounded"
                priority
              />
            </Link>
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              منصة عربية لتعلم الرياضيات بأسلوب مبسط وتمارين تفاعلية. نوفر لك أفضل
              الدورات التعليمية مع الأستاذ ثامر قدورة.
            </p>
            {/* Social media */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-primary flex items-center justify-center text-white transition-colors duration-300 backdrop-blur-sm"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.name}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            className="w-full max-w-md lg:max-w-xs lg:w-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-lg font-bold mb-4 text-white">روابط سريعة</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-accent transition-colors duration-300 text-sm flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-accent/50 group-hover:bg-accent transition-colors duration-300"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Navigation */}
          <motion.div
            className="w-full max-w-md lg:max-w-xs lg:w-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-lg font-bold mb-4 text-white">التنقل</h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-accent transition-colors duration-300 text-sm flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-accent/50 group-hover:bg-accent transition-colors duration-300"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact & Support */}
          <motion.div
            className="w-full max-w-md lg:max-w-xs lg:w-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-lg font-bold mb-4 text-white">تواصل معنا</h3>
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 backdrop-blur-sm">
                  <svg
                    className="w-5 h-5 text-accent"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-white/70 text-sm mb-1">واتساب</p>
                  <a
                    href="https://wa.me/962787488070"
                    className="text-white hover:text-accent transition-colors duration-300 text-sm block"
                  >
                    0787488070
                  </a>
                  <a
                    href="https://wa.me/962797488070"
                    className="text-white hover:text-accent transition-colors duration-300 text-sm block"
                  >
                    0797488070
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 backdrop-blur-sm">
                  <svg
                    className="w-5 h-5 text-accent"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white/70 text-sm mb-1">فيسبوك</p>
                  <a
                    href="https://web.facebook.com/Thamer.Tutorial"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-accent transition-colors duration-300 text-sm block break-all"
                  >
                    Thamer.Tutorial
                  </a>
                </div>
              </div>
            </div>
        
          </motion.div>
        </div>

        {/* Bottom bar */}
        <motion.div
          className="border-t border-white/10 pt-8 mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="flex flex-col items-center justify-center md:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-sm text-center md:text-right">
              © {currentYear} Naseehamath. جميع الحقوق محفوظة.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

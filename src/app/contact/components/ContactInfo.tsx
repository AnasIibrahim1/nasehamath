"use client";

import { motion } from "motion/react";
import Link from "next/link";

export default function ContactInfo() {
  return (
    <>
      {/* WhatsApp Contact */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="group relative bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-green-100 hover:border-green-300 transition-all duration-300 hover:shadow-2xl overflow-hidden"
      >
        {/* Animated Background */}
        <div className="absolute inset-0 bg-green-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        <div className="relative flex flex-col sm:flex-row items-start sm:items-center gap-5">
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            className="flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 bg-[#25D366] rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow"
          >
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="white"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
          </motion.div>
          <div className="flex-1">
            <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2">
              واتساب
            </h3>
            <p className="text-foreground/60 text-sm sm:text-base mb-3">
              تواصل معنا مباشرة عبر واتساب
            </p>
            <Link
              href="https://wa.me/962787488070"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#25D366] hover:text-[#20BA5A] font-bold text-lg sm:text-xl transition-colors group/link"
            >
              <span>0787488070</span>
              <motion.svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="group-hover/link:translate-x-1 transition-transform"
              >
                <path d="M5 12h14" />
                <path d="M12 5l7 7-7 7" />
              </motion.svg>
            </Link>
          </div>
        </div>
      </motion.div>

      {/* Website Messages */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="group relative bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-2xl overflow-hidden"
      >
        {/* Animated Background */}
        <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        <div className="relative flex flex-col sm:flex-row items-start sm:items-center gap-5">
          <motion.div
            whileHover={{ scale: 1.1, rotate: -5 }}
            className="flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 bg-primary rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow"
          >
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
          </motion.div>
          <div className="flex-1">
            <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2">
              رسائل الموقع
            </h3>
            <p className="text-foreground/60 text-sm sm:text-base">
              يمكنك استخدام نموذج الاتصال أدناه أو التمرير إلى أسفل الصفحة
            </p>
          </div>
        </div>
      </motion.div>
    </>
  );
}


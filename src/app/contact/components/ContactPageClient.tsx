"use client";

import { motion } from "motion/react";
import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";
import BlurCircle from "@/components/ui/BlurCircle";
import FloatingShape from "@/components/ui/FloatingShape";

export default function ContactPageClient() {
  return (
    <div className="relative min-h-screen bg-white">
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <BlurCircle
          size={500}
          color="bg-primary/8"
          position={{ top: "-10%", right: "-5%" }}
        />
        <BlurCircle
          size={450}
          color="bg-primary/8"
          position={{ bottom: "-10%", left: "-5%" }}
        />
      </div>

      <FloatingShape
        type="solid-circle"
        size={100}
        color="bg-primary/10"
        position={{ top: "15%", left: "3%" }}
        duration={10}
        delay={0}
      />

      <FloatingShape
        type="dashed-circle"
        size={70}
        color="border-primary/25"
        position={{ bottom: "25%", right: "8%" }}
        duration={14}
        delay={3}
      />

      {/* Hero Section */}
      <div className="relative pt-20 sm:pt-24 pb-16 sm:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-primary">
              <span className="text-black">تواصل</span> معنا
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-foreground/70 max-w-3xl mx-auto leading-relaxed">
              للاقتراحات والملاحظات
            </p>
            <p className="text-base sm:text-lg text-foreground/60 mt-4 max-w-2xl mx-auto">
              بامكانك استخدام رسائل الموقع (في اسفل الصفحة) او الواتس
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 sm:pb-24">
        {/* Contact Methods - Top Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 lg:mb-12">
          <ContactInfo />
        </div>

        {/* Contact Form - Full Width or Centered */}
        <div className="max-w-3xl mx-auto">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}


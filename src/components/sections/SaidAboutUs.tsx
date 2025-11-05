"use client";

import { motion } from "motion/react";
import Image from "next/image";
import BlurCircle from "@/components/ui/BlurCircle";
import FloatingShape from "@/components/ui/FloatingShape";
import { testimonialScreenshots } from "@/data/testimonials";

const getPlatformColor = (platform: string) => {
  switch (platform) {
    case "whatsapp":
      return "from-green-500 to-green-600";
    case "facebook":
      return "from-blue-500 to-blue-600";
    default:
      return "from-primary to-primary-600";
  }
};

const getPlatformIcon = (platform: string) => {
  switch (platform) {
    case "whatsapp":
      return (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      );
    case "facebook":
      return (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      );
    default:
      return (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
        </svg>
      );
  }
};

export default function SaidAboutUs() {
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
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <motion.h2
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-3 sm:mb-4 leading-tight"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.05 }}
          >
            قالوا عن <span className="text-primary">دوراتنا</span>
          </motion.h2>
          <motion.p
            className="text-sm sm:text-base md:text-lg text-foreground/70 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            هذا ما يقوله طلابنا عن الدورات والخدمات التي نقدمها
          </motion.p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {testimonialScreenshots.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: Math.min(index * 0.05, 0.3) }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group"
            >
              {/* Screenshot-style card */}
              <div className="relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-border/40">
                {/* Platform header */}
                <div
                  className={`bg-gradient-to-r ${getPlatformColor(
                    testimonial.platform
                  )} px-4 py-3 flex items-center gap-2`}
                >
                  <div className="text-white">{getPlatformIcon(testimonial.platform)}</div>
                  <div className="flex-1">
                    <p className="text-white text-xs font-medium opacity-90">
                      {testimonial.platform === "whatsapp"
                        ? "واتساب"
                        : testimonial.platform === "facebook"
                        ? "فيسبوك"
                        : "رسائل الموقع"}
                    </p>
                  </div>
                  <p className="text-white/80 text-xs">{testimonial.time}</p>
                </div>

                {/* Message content */}
                <div className="p-4 sm:p-5">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden ring-2 ring-primary/20 flex-shrink-0">
                      <Image
                        src={testimonial.avatar || "/Newppl/01.jpg"}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 48px, 56px"
                        priority={index < 3}
                        loading={index < 3 ? "eager" : "lazy"}
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-foreground text-sm sm:text-base mb-1">
                        {testimonial.name}
                      </h3>
                      <div className="flex items-center gap-1 mb-2">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            className="w-3 h-3 sm:w-4 sm:h-4 text-accent"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-xl p-3 sm:p-4 relative">
                    <p className="text-foreground/80 text-sm sm:text-base leading-relaxed">
                      {testimonial.message}
                    </p>
                    {/* Message tail */}
                    <div className="absolute right-0 bottom-0 w-0 h-0 border-l-8 border-l-gray-50 border-t-8 border-t-transparent transform translate-y-1/2"></div>
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </motion.div>
          ))}
        </div>
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

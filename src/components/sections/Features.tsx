"use client";

import { motion } from "motion/react";
import FloatingCircle from "@/components/ui/FloatingCircle";
import FloatingShape from "@/components/ui/FloatingShape";
import BlurCircle from "@/components/ui/BlurCircle";

const features = [
  {
    title: "سهولة حضور الدرس",
    description: "يمكنك الدراسة بسهولة من خلال هاتفك الجوال أو جهاز الكمبيوتر الخاص بك",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"
          fill="currentColor"
        />
      </svg>
    ),
    color: "from-blue-500 to-blue-600",
    borderColor: "border-blue-200",
    glowColor: "shadow-blue-500/20",
    delay: 0.1,
  },
  {
    title: "أوراق عمل واختبارات",
    description: "ومراجعة وكل ما يلزمك بصورة الكترونية عن طريق الهاتف او الكمبيوتر",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"
          fill="currentColor"
        />
      </svg>
    ),
    color: "from-purple-500 to-purple-600",
    borderColor: "border-purple-200",
    glowColor: "shadow-purple-500/20",
    delay: 0.2,
  },
  {
    title: "تمارين الكترونية",
    description: "بعد ان تشاهد كل فيديو سنوفر لك تمارين الكترونية لتتمرن على الافكار",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
          fill="currentColor"
        />
      </svg>
    ),
    color: "from-amber-500 to-amber-600",
    borderColor: "border-amber-200",
    glowColor: "shadow-amber-500/20",
    delay: 0.3,
  },
  {
    title: "فيديوهات",
    description: "فيديوهاتنا تعالج كل موضوع لوحده بصورة مفصلة",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M17 10.5V7a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h12a1 1 0 001-1v-3.5l4 4v-11l-4 4z"
          fill="currentColor"
        />
      </svg>
    ),
    color: "from-pink-500 to-pink-600",
    borderColor: "border-pink-200",
    glowColor: "shadow-pink-500/20",
    delay: 0.4,
  },
];

export default function Features() {
  return (
    <section className="relative w-full py-20 md:py-28">
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10">
      <BlurCircle
        size={256}
        color="bg-primary/20"
        position={{ right: "6rem", top: "-5rem" }}
      />
      <BlurCircle
        size={288}
        color="bg-accent/20"
        position={{ left: "6rem", bottom: "-6rem" }}
      />
      </div>

      {/* Floating shapes */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
        <FloatingShape
          type="dashed-circle"
          size={80}
          color="border-accent/60"
          position={{ bottom: 0, left: 0 }}
          duration={16}
        />
      </div>

      <FloatingShape
        type="solid-circle"
        size={48}
        color="bg-accent/20"
        position={{ bottom: "2rem", left: "-1.5rem" }}
        duration={3}
        delay={0.3}
      />

      {/* Floating circles */}
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

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: feature.delay }}
              whileHover={{ y: -12, scale: 1.03 }}
              className="group relative"
            >
              {/* Outer glow effect */}
              <div
                className={`absolute -inset-0.5 bg-gradient-to-r ${feature.color} rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 -z-10`}
              />

              {/* Main card */}
              <div className="relative h-full bg-gradient-to-br from-white via-white to-white/95 backdrop-blur-xl rounded-2xl p-6 border border-border/40 transition-all duration-500 hover:border-opacity-60 overflow-hidden">
                {/* Shimmer effect on hover */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent -z-0" />

                {/* Top accent line */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />

                {/* Content wrapper */}
                <div className="relative z-10">
                  {/* Icon Container with floating animation */}
                  <motion.div
                    className={`relative w-16 h-16 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center text-white mb-4 transition-all duration-300`}
                    whileHover={{ 
                      scale: 1.15,
                      rotate: [0, -5, 5, -5, 0],
                    }}
                    animate={{
                      y: [0, -4, 0],
                    }}
                    transition={{
                      y: {
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                      },
                      rotate: {
                        duration: 0.5,
                      },
                    }}
                  >
                    {/* Icon glow */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${feature.color} rounded-xl blur-md opacity-50 group-hover:opacity-75 transition-opacity duration-300 -z-10`}
                    />
                    {feature.icon}
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300 relative">
                    {feature.title}
                  </h3>
                  <p className="text-muted leading-relaxed text-sm relative z-10">
                    {feature.description}
                  </p>

                  {/* Corner decoration */}
                  <div className="absolute bottom-0 right-0 w-20 h-20 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                    <div
                      className={`absolute bottom-0 right-0 w-full h-full bg-gradient-to-tl ${feature.color} rounded-tl-2xl`}
                    />
                  </div>
                </div>

                {/* Hover gradient overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500 rounded-2xl -z-0`}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

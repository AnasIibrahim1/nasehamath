"use client";

import { motion } from "motion/react";
import Button from "@/components/ui/Button";
import BlurCircle from "@/components/ui/BlurCircle";
import FloatingShape from "@/components/ui/FloatingShape";
import FloatingCircle from "@/components/ui/FloatingCircle";

export default function Banner() {
  return (
    <section className="relative w-full py-16 md:py-24 overflow-hidden">
      {/* Animated gradient background */}
      <motion.div
        className="absolute inset-0 -z-10"
        animate={{
          background: [
            "linear-gradient(135deg, rgba(6, 106, 201, 0.1) 0%, rgba(255, 193, 7, 0.1) 50%, rgba(6, 106, 201, 0.1) 100%)",
            "linear-gradient(135deg, rgba(255, 193, 7, 0.1) 0%, rgba(6, 106, 201, 0.1) 50%, rgba(255, 193, 7, 0.1) 100%)",
            "linear-gradient(135deg, rgba(6, 106, 201, 0.1) 0%, rgba(255, 193, 7, 0.1) 50%, rgba(6, 106, 201, 0.1) 100%)",
          ],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          backgroundSize: "200% 200%",
        }}
      />

      {/* Animated gradient overlay */}
      <motion.div
        className="absolute inset-0 -z-10 opacity-40"
        animate={{
          backgroundPosition: [
            "0% 0%",
            "100% 100%",
            "0% 0%",
          ],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          backgroundImage:
            "linear-gradient(135deg, rgba(6, 106, 201, 0.15) 0%, transparent 50%, rgba(255, 193, 7, 0.15) 100%)",
          backgroundSize: "200% 200%",
        }}
      />

      {/* Blur circles for depth */}
      <BlurCircle
        size={400}
        color="bg-primary/10"
        position={{ top: "20%", right: "10%" }}
      />
      <BlurCircle
        size={350}
        color="bg-accent/10"
        position={{ bottom: "20%", left: "10%" }}
      />
      <BlurCircle
        size={300}
        color="bg-primary/8"
        position={{ top: "50%", left: "50%" }}
      />

      {/* Floating shapes */}
      <FloatingShape
        type="dashed-circle"
        size={100}
        color="border-primary/20"
        position={{ top: "10%", left: "5%" }}
        duration={20}
      />
      <FloatingShape
        type="solid-circle"
        size={60}
        color="bg-accent/15"
        position={{ bottom: "15%", right: "8%" }}
        duration={4}
        delay={0.5}
      />
      <FloatingShape
        type="blob"
        size={80}
        color="bg-primary/10"
        position={{ top: "60%", right: "15%" }}
        duration={8}
        delay={1}
      />

      {/* Floating circles */}
      <FloatingCircle
        size={14}
        color="bg-primary/40"
        position={{ left: "20%", top: "30%" }}
        duration={6}
        delay={0}
      />
      <FloatingCircle
        size={12}
        color="bg-accent/50"
        position={{ right: "25%", bottom: "25%" }}
        duration={5}
        delay={0.8}
      />
      <FloatingCircle
        size={10}
        color="bg-primary/30"
        position={{ left: "15%", bottom: "40%" }}
        duration={4.5}
        delay={0.4}
      />

      {/* Content */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            سجل الان واحصل علي المزيد من الدورات
          </motion.h2>

          <motion.p
            className="text-base md:text-lg text-foreground/70 mb-8 max-w-3xl leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          >
            هناك دورات يمكنك ايجادها والوصول اليها فقط عندما يكون لديك حساب، لذا
            يمكنك التسجيل الان للاستمتاع بكل الدورات اللتي نوفرها وتستفيد اقصي
            استفادة
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          >
            <Button
              variant="signup"
              size="lg"
              className="rounded-full px-8 py-4 text-lg shadow-[0_8px_24px_rgba(6,106,201,0.35)] hover:shadow-[0_12px_32px_rgba(6,106,201,0.45)]"
            >
              سجل الان
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}


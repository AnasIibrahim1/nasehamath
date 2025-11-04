"use client";

import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import Image from "next/image";
import BlurCircle from "@/components/ui/BlurCircle";
import FloatingShape from "@/components/ui/FloatingShape";

interface FAQItem {
  id: number;
  question: string;
  answer: string | React.ReactNode;
}

const faqItems: FAQItem[] = [
  {
    id: 1,
    question: "أين أبعث أسئلتي؟",
    answer: (
      <div className="space-y-2 sm:space-y-3">
        <p className="text-foreground/80">
          بإمكانك أن تبعث سؤالك مباشرة على:
        </p>
        <ul className="space-y-2 mr-2 sm:mr-4">
          <li className="flex items-start gap-2">
            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-primary mt-1.5 flex-shrink-0"></span>
            <span>رسائل الموقع</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-primary mt-1.5 flex-shrink-0"></span>
            <span className="break-words">الواتس: 0787488070 – 0797488070</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-primary mt-1.5 flex-shrink-0"></span>
            <span className="break-words">
              الفيس:{" "}
              <a
                href="https://web.facebook.com/Thamer.Tutorial"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline break-all"
              >
                https://web.facebook.com/Thamer.Tutorial
              </a>
            </span>
          </li>
        </ul>
      </div>
    ),
  },
  {
    id: 2,
    question: "كيف ستكون الإجابة؟",
    answer: (
      <p className="text-foreground/80 leading-relaxed">
        حسب السؤال، إن كان استفسار بسيط سأجيبك كتابة أو بصورة، لكن غالباً
        تكون الإجابة بفيديو قصير.
      </p>
    ),
  },
];

export default function FAQ() {
  const [openId, setOpenId] = useState<number | null>(1);

  const toggleItem = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="relative w-full py-12 sm:py-16 md:py-20 lg:py-28 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10">
        <BlurCircle
          size={400}
          color="bg-primary/5"
          position={{ top: "10%", right: "10%" }}
        />
        <BlurCircle
          size={350}
          color="bg-accent/5"
          position={{ bottom: "10%", left: "10%" }}
        />
        <BlurCircle
          size={300}
          color="bg-blue-500/5"
          position={{ top: "50%", left: "50%" }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
          {/* Content Side - Right */}
          <div>
            {/* Section Header */}
            <motion.div
              className="mb-8 sm:mb-10 md:mb-12 lg:mb-16 text-right max-[768px]:text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <motion.h2
                className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-3 sm:mb-4 leading-tight px-2"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                معنا في <span className="text-primary">دوراتنا الاحترافية</span>
              </motion.h2>
              <motion.p
                className="text-sm sm:text-base md:text-lg lg:text-xl text-foreground/70 mb-4 sm:mb-6 leading-relaxed px-2"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                سواء كانت الدورات المجانية مثل التأسيس والمراجعة وأوراق العمل
                <br className="hidden sm:block" />
                <span className="sm:hidden"> </span>
                أو الدورات المدفوعة مثل دورات التوجيهي العلمي والصناعي
              </motion.p>
              <motion.div
                className="flex justify-start max-[768px]:justify-center"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <span className="inline-block px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base bg-gradient-to-r from-primary/10 via-primary/20 to-accent/10 rounded-full text-primary font-semibold border border-primary/20">
                  دعنا نساعدك
                </span>
              </motion.div>
            </motion.div>

            {/* FAQ Items */}
            <div className="space-y-3 sm:space-y-4 mb-8 sm:mb-10 md:mb-12">
              {faqItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group"
                >
                  <div
                    className="relative bg-white rounded-xl sm:rounded-2xl border border-border/40 overflow-hidden transition-all duration-300 hover:border-primary/40 hover:shadow-lg"
                  >
                    <button
                      onClick={() => toggleItem(item.id)}
                      className="w-full px-3 sm:px-4 md:px-6 py-3 sm:py-4 md:py-5 flex items-center justify-between gap-2 sm:gap-3 md:gap-4 text-right group"
                    >
                      <div className="flex-1 min-w-0">
                        <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300 leading-snug sm:leading-normal">
                          {item.question}
                        </h3>
                      </div>
                      <motion.div
                        animate={{
                          rotate: openId === item.id ? 180 : 0,
                        }}
                        transition={{ duration: 0.3 }}
                        className="flex-shrink-0 w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300"
                      >
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-primary sm:w-5 sm:h-5"
                        >
                          <path d="M6 9l6 6 6-6" />
                        </svg>
                      </motion.div>
                    </button>

                    <AnimatePresence>
                      {openId === item.id && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="px-3 sm:px-4 md:px-6 pb-3 sm:pb-4 md:pb-5 pt-2 border-t border-border/30">
                            <div className="text-sm sm:text-base leading-relaxed">
                              {item.answer}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Call to Action */}
            <motion.div
              className="text-right max-[768px]:text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="bg-gradient-to-br from-primary/10 via-primary/5 to-accent/10 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 border border-primary/20">
                <motion.h3
                  className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-foreground mb-3 sm:mb-4"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  معقول؟!
                </motion.h3>
                <motion.p
                  className="text-sm sm:text-base md:text-lg text-foreground/70 mb-4 sm:mb-5 md:mb-6"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  اضغط هنا وتأكد
                </motion.p>
                <motion.div
                  className="flex justify-start max-[768px]:justify-center"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <a
                    href="#contact"
                    className="inline-block px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 text-sm sm:text-base bg-gradient-to-r from-primary to-accent text-white font-bold rounded-lg sm:rounded-xl shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-all duration-300 cursor-pointer"
                  >
                    تواصل معنا الآن
                  </a>
                </motion.div>
              </div>
            </motion.div>

            {/* Teacher Signature */}
            <motion.div
              className="mt-8 sm:mt-10 md:mt-12 text-right max-[768px]:text-center px-2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <p className="text-sm sm:text-base md:text-lg text-foreground/70">
                يسرني أن تسأل وتتواصل معي باستمرار
              </p>
              <p className="text-base sm:text-lg md:text-xl font-bold text-primary mt-2">
                (الأستاذ ثامر قدورة)
              </p>
            </motion.div>
          </div>

          {/* Image Side - Left */}
          <motion.div
            className="hidden md:block h-full w-full"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative h-full w-full">
              <div className="relative aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 via-primary/10 to-accent/20 border border-primary/20 shadow-xl h-full w-full">
                {/* Image */}
                <Image
                  src="/cont.jpg"
                  alt="دورات تعليمية"
                  fill
                  className="object-cover opacity-90"
                  sizes="(max-width: 768px) 0vw, 50vw"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent"></div>
                {/* Decorative circles */}
                <div className="absolute top-4 right-4 w-20 h-20 bg-primary/30 rounded-full blur-xl"></div>
                <div className="absolute bottom-4 left-4 w-32 h-32 bg-accent/30 rounded-full blur-2xl"></div>
              </div>
            </div>
          </motion.div>
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

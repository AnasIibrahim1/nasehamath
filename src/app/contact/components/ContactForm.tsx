"use client";

import { useState } from "react";
import { motion } from "motion/react";
import Button from "@/components/ui/Button";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    // TODO: Replace with actual API call
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({ name: "", email: "", message: "" });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus("idle");
      }, 5000);
    }, 1000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      className="relative bg-white rounded-3xl p-8 sm:p-10 md:p-12 shadow-2xl border border-border/40 overflow-hidden"
    >
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
      
      <div className="relative">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-12 sm:w-14 sm:h-14 bg-primary rounded-xl flex items-center justify-center shadow-lg">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
          </div>
          <div>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
              تحدث معنا !
            </h3>
          </div>
        </div>
        <p className="text-foreground/70 mb-8 text-base sm:text-lg leading-relaxed">
          نحن نتطلع دائمًا إلى الاستماع إلى ما لديك لتقوله، لذا لا تتردد في الاتصال بنا.
        </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name Field */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 }}
        >
          <label
            htmlFor="name"
            className="block text-sm sm:text-base font-bold text-foreground mb-3"
          >
            اسمك <span className="text-red-500 text-lg">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-5 py-4 rounded-2xl border-2 border-border/40 focus:border-primary focus:ring-4 focus:ring-primary/20 focus:outline-none transition-all bg-white text-foreground placeholder:text-foreground/40 text-base"
            placeholder="أدخل اسمك"
          />
        </motion.div>

        {/* Email Field */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.7 }}
        >
          <label
            htmlFor="email"
            className="block text-sm sm:text-base font-bold text-foreground mb-3"
          >
            بريدك الإلكتروني
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-5 py-4 rounded-2xl border-2 border-border/40 focus:border-primary focus:ring-4 focus:ring-primary/20 focus:outline-none transition-all bg-white text-foreground placeholder:text-foreground/40 text-base"
            placeholder="example@email.com"
          />
        </motion.div>

        {/* Message Field */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8 }}
        >
          <label
            htmlFor="message"
            className="block text-sm sm:text-base font-bold text-foreground mb-3"
          >
            رسالتك
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={7}
            className="w-full px-5 py-4 rounded-2xl border-2 border-border/40 focus:border-primary focus:ring-4 focus:ring-primary/20 focus:outline-none transition-all bg-white text-foreground placeholder:text-foreground/40 resize-none text-base"
            placeholder="اكتب رسالتك هنا..."
          />
        </motion.div>

        {/* Submit Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="pt-2"
        >
          <Button
            type="submit"
            variant="primary"
            size="lg"
            className="w-full text-lg py-4"
            disabled={isSubmitting || !formData.name.trim()}
          >
            {isSubmitting ? "جاري الإرسال..." : "إرسال الرسالة"}
          </Button>
        </motion.div>

        {/* Success Message */}
        {submitStatus === "success" && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="p-5 bg-primary/10 border-2 border-primary/40 rounded-2xl text-primary text-center font-semibold shadow-lg"
          >
            <div className="flex items-center justify-center gap-2">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <span>تم إرسال رسالتك بنجاح! سنتواصل معك قريبًا.</span>
            </div>
          </motion.div>
        )}

        {/* Error Message */}
        {submitStatus === "error" && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="p-5 bg-red-50/50 border-2 border-red-300 rounded-2xl text-red-600 text-center font-semibold shadow-lg"
          >
            <div className="flex items-center justify-center gap-2">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="8" x2="12" y2="12" />
                <line x1="12" y1="16" x2="12.01" y2="16" />
              </svg>
              <span>حدث خطأ أثناء إرسال الرسالة. يرجى المحاولة مرة أخرى.</span>
            </div>
          </motion.div>
        )}
      </form>
      </div>
    </motion.div>
  );
}


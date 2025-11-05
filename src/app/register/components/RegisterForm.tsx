"use client";

import { useState } from "react";
import { motion } from "motion/react";
import Link from "next/link";
import Button from "@/components/ui/Button";
import BlurCircle from "@/components/ui/BlurCircle";
import FloatingShape from "@/components/ui/FloatingShape";

export default function RegisterForm() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(false);

    if (password.length < 6) {
      setError("كلمة المرور يجب أن تكون 6 أحرف على الأقل");
      return;
    }
    if (password !== confirmPassword) {
      setError("كلمتا المرور غير متطابقتين");
      return;
    }

    setLoading(true);
    setTimeout(() => {
      try {
        // Generate temporary token
        const token = `temp_token_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
        localStorage.setItem("auth_token", token);
        localStorage.setItem("user_data", JSON.stringify({ email, username, phone, role: "user" }));
      } catch {}
      setLoading(false);
      setSuccess(true);
      setTimeout(() => {
        window.location.href = "/";
      }, 800);
    }, 700);
  };

  return (
    <section className="relative w-full py-14 sm:py-16 md:py-20 lg:py-24 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10">
        <BlurCircle size={420} color="bg-primary/10" position={{ top: "12%", left: "12%" }} />
        <BlurCircle size={360} color="bg-accent/10" position={{ bottom: "12%", right: "12%" }} />
      </div>

      {/* Floating shapes */}
      <FloatingShape type="dashed-circle" size={110} color="border-primary/20" position={{ top: "18%", right: "6%" }} duration={16} delay={0} />
      <FloatingShape type="solid-circle" size={80} color="bg-accent/20" position={{ bottom: "18%", left: "8%" }} duration={10} delay={1} />

      <div className="mx-auto max-w-md px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white/80 backdrop-blur-sm rounded-2xl border border-border/60 shadow-xl p-6 sm:p-8"
        >
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.05 }}
            className="text-2xl sm:text-3xl font-bold text-center mb-2"
          >
            إنشاء <span className="text-primary">حساب</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="text-center text-foreground/70 mb-6"
          >
            قم بإنشاء حسابك للبدء في التعلم والاستفادة من جميع الدورات.
          </motion.p>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email */}
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">
                الإيميل <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full rounded-xl border-2 border-border/40 bg-white px-4 py-3 text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                placeholder="الإيميل"
              />
            </div>

            {/* Username */}
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">
                اسم المستخدم <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                className="w-full rounded-xl border-2 border-border/40 bg-white px-4 py-3 text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                placeholder="اسم المستخدم"
              />
            </div>

            {/* Password Fields - Side by Side */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Password */}
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  الرقم السري <span className="text-red-500">*</span>
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full rounded-xl border-2 border-border/40 bg-white px-4 py-3 text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                  placeholder="*********"
                />
              </div>

              {/* Confirm Password */}
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  قم بتأكيد الرقم السري <span className="text-red-500">*</span>
                </label>
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                  className="w-full rounded-xl border-2 border-border/40 bg-white px-4 py-3 text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                  placeholder="*********"
                />
              </div>
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">
                رقم الهاتف <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                className="w-full rounded-xl border-2 border-border/40 bg-white px-4 py-3 text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                placeholder=""
              />
            </div>

            {error && (
              <div className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg p-3">{error}</div>
            )}
            {success && (
              <div className="text-sm text-green-700 bg-green-50 border border-green-200 rounded-lg p-3">تم إنشاء الحساب بنجاح، سيتم تحويلك الآن...</div>
            )}

            <Button variant="primary" size="lg" className="w-full cursor-pointer" disabled={loading}>
              {loading ? "جارِ الإنشاء..." : "إنشاء الحساب"}
            </Button>
          </form>

          <div className="mt-5 text-center text-sm">
            لديك حساب بالفعل؟
            <Link href="/login" className="text-primary hover:underline mx-1">
              تسجيل الدخول
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

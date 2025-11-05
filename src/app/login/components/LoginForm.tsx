"use client";

import { useState } from "react";
import { motion } from "motion/react";
import Link from "next/link";
import Button from "@/components/ui/Button";
import BlurCircle from "@/components/ui/BlurCircle";
import FloatingShape from "@/components/ui/FloatingShape";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(false);
    setLoading(true);

    // Temporary mock auth
    setTimeout(() => {
      if (email.trim().toLowerCase() === "admin@admin.com" && password === "password") {
        try {
          // Generate temporary token
          const token = `temp_token_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
          localStorage.setItem("auth_token", token);
          localStorage.setItem("user_data", JSON.stringify({ email, name: "Admin", role: "admin" }));
        } catch {}
        setSuccess(true);
        setLoading(false);
        // Redirect after short delay
        setTimeout(() => {
          window.location.href = "/";
        }, 600);
      } else {
        setLoading(false);
        setError("بيانات الدخول غير صحيحة. جرّب admin@admin.com وكلمة المرور password");
      }
    }, 600);
  };

  return (
    <section className="relative w-full py-14 sm:py-16 md:py-20 lg:py-24 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10">
        <BlurCircle size={420} color="bg-primary/10" position={{ top: "12%", right: "12%" }} />
        <BlurCircle size={360} color="bg-accent/10" position={{ bottom: "12%", left: "12%" }} />
      </div>

      {/* Floating shapes */}
      <FloatingShape type="dashed-circle" size={110} color="border-primary/20" position={{ top: "18%", left: "6%" }} duration={16} delay={0} />
      <FloatingShape type="solid-circle" size={80} color="bg-accent/20" position={{ bottom: "18%", right: "8%" }} duration={10} delay={1} />

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
            تسجيل <span className="text-primary">الدخول</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="text-center text-foreground/70 mb-6"
          >
            ادخل بياناتك للمتابعة. للاختبار استخدم admin@admin.com وكلمة المرور password
          </motion.p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">البريد الإلكتروني</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full rounded-xl border border-border/60 bg-white px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-primary/30"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">كلمة المرور</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full rounded-xl border border-border/60 bg-white px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-primary/30"
                placeholder="••••••••"
              />
            </div>

            {error && (
              <div className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg p-3">{error}</div>
            )}
            {success && (
              <div className="text-sm text-green-700 bg-green-50 border border-green-200 rounded-lg p-3">تم تسجيل الدخول بنجاح، سيتم تحويلك الآن...</div>
            )}

            <Button variant="primary" size="lg" className="w-full cursor-pointer" disabled={loading}>
              {loading ? "جارِ التحقق..." : "تسجيل الدخول"}
            </Button>
          </form>

          <div className="mt-5 text-center text-sm">
            ليس لديك حساب؟
            <Link href="/register" className="text-primary hover:underline mx-1">
              أنشئ حساباً الآن
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

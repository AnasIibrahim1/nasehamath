"use client";

import { motion } from "motion/react";
import { UserExam } from "@/types/user";

interface ExamsTableProps {
  exams: UserExam[];
}

export default function ExamsTable({ exams }: ExamsTableProps) {
  return (
    <div className="bg-white rounded-2xl border border-border/40 shadow-lg overflow-hidden">
      <div className="p-6 border-b border-border/40 bg-gradient-to-r from-primary/5 to-accent/5">
        <h2 className="text-xl sm:text-2xl font-bold text-foreground">
          إجمالي اختباراتك: {exams.length}
        </h2>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-primary/5">
            <tr>
              <th className="px-4 py-3 text-right text-sm font-semibold text-foreground">الرقم</th>
              <th className="px-4 py-3 text-right text-sm font-semibold text-foreground">الدورة</th>
              <th className="px-4 py-3 text-right text-sm font-semibold text-foreground">الموضوع</th>
              <th className="px-4 py-3 text-right text-sm font-semibold text-foreground">إجمالي الأسئلة</th>
              <th className="px-4 py-3 text-right text-sm font-semibold text-foreground">إجمالي الإجابات الصحيحة</th>
              <th className="px-4 py-3 text-right text-sm font-semibold text-foreground">النسبة المئوية</th>
              <th className="px-4 py-3 text-right text-sm font-semibold text-foreground">الوقت المستغرق</th>
              <th className="px-4 py-3 text-right text-sm font-semibold text-foreground">التاريخ والوقت</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border/40">
            {exams.length > 0 ? (
              exams.map((exam, index) => (
                <motion.tr
                  key={exam.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="hover:bg-primary/5 transition-colors"
                >
                  <td className="px-4 py-4 text-sm text-foreground/80">{index + 1}</td>
                  <td className="px-4 py-4 text-sm text-foreground/80">{exam.courseTitle}</td>
                  <td className="px-4 py-4 text-sm text-foreground/80">{exam.topic}</td>
                  <td className="px-4 py-4 text-sm text-foreground/80 text-center">{exam.totalQuestions}</td>
                  <td className="px-4 py-4 text-sm text-foreground/80 text-center">{exam.correctAnswers}</td>
                  <td className="px-4 py-4 text-sm">
                    <span
                      className={`px-3 py-1 rounded-lg font-semibold ${
                        exam.percentage >= 80
                          ? "bg-green-100 text-green-700"
                          : exam.percentage >= 60
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {exam.percentage}%
                    </span>
                  </td>
                  <td className="px-4 py-4 text-sm text-foreground/80">{exam.timeSpent}</td>
                  <td className="px-4 py-4 text-sm text-foreground/80">
                    {new Date(exam.dateTime).toLocaleDateString("ar-EG", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </td>
                </motion.tr>
              ))
            ) : (
              <tr>
                <td colSpan={8} className="px-4 py-12 text-center text-foreground/60">
                  لا توجد اختبارات متاحة
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}


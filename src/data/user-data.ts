import { User, UserExam } from "@/types/user";

export const getUserData = (): User | null => {
  if (typeof window === "undefined") return null;
  
  try {
    const data = localStorage.getItem("user_data");
    if (data) {
      const parsed = JSON.parse(data);
      return {
        id: parsed.id || "1",
        email: parsed.email || "user@example.com",
        username: parsed.username || parsed.name || "مستخدم",
        phone: parsed.phone || "",
        photo: parsed.photo || "/ppl/person.png",
        cover: parsed.cover || "/courses/course.jpg",
        totalCourses: parsed.totalCourses || 0,
        totalExams: parsed.totalExams || 0,
      };
    }
  } catch {}
  return null;
};

export const getUserExams = (): UserExam[] => {
  if (typeof window === "undefined") return [];
  
  try {
    const exams = localStorage.getItem("user_exams");
    if (exams) {
      return JSON.parse(exams);
    }
  } catch {}
  
  // Sample data for demo
  return [
    {
      id: 1,
      courseId: 1,
      courseTitle: "دورة التأسيس والمراجعة الشاملة",
      topic: "الأساسيات الرياضية",
      totalQuestions: 20,
      correctAnswers: 18,
      percentage: 90,
      timeSpent: "15:30",
      dateTime: "2024-01-15T10:30:00",
    },
    {
      id: 2,
      courseId: 1,
      courseTitle: "دورة التأسيس والمراجعة الشاملة",
      topic: "الجبر الأساسي",
      totalQuestions: 25,
      correctAnswers: 22,
      percentage: 88,
      timeSpent: "20:45",
      dateTime: "2024-01-14T14:20:00",
    },
    {
      id: 3,
      courseId: 2,
      courseTitle: "دورة التوجيهي العلمي",
      topic: "التفاضل والتكامل",
      totalQuestions: 30,
      correctAnswers: 25,
      percentage: 83,
      timeSpent: "35:20",
      dateTime: "2024-01-12T09:15:00",
    },
  ];
};

export const saveUserExam = (exam: UserExam) => {
  if (typeof window === "undefined") return;
  
  try {
    const exams = getUserExams();
    exams.unshift(exam);
    localStorage.setItem("user_exams", JSON.stringify(exams));
  } catch {}
};

export const getCourseProgress = (courseId: number): number => {
  if (typeof window === "undefined") return 0;
  
  try {
    const progress = localStorage.getItem(`course_progress_${courseId}`);
    if (progress) {
      return parseInt(progress, 10);
    }
  } catch {}
  return 0;
};

export const setCourseProgress = (courseId: number, progress: number) => {
  if (typeof window === "undefined") return;
  
  try {
    localStorage.setItem(`course_progress_${courseId}`, progress.toString());
  } catch {}
};


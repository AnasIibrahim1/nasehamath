import { User, UserExam } from "@/types/user";
import { validateProgress, isValidCourseId } from "@/utils/validation";
import { isValidISODate } from "@/utils/date-utils";

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
  } catch (error) {
    if (process.env.NODE_ENV === 'development') {
      console.error('Error in getUserData:', error);
    }
  }
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
  } catch (error) {
    if (process.env.NODE_ENV === 'development') {
      console.error('Error in saveUserExam:', error);
    }
  }
};

export const getCourseProgress = (courseId: number): number => {
  if (typeof window === "undefined") return 0;
  
  if (!isValidCourseId(courseId)) {
    if (process.env.NODE_ENV === 'development') {
      console.warn(`Invalid course ID: ${courseId}`);
    }
    return 0;
  }
  
  try {
    const progress = localStorage.getItem(`course_progress_${courseId}`);
    if (progress) {
      const parsedProgress = parseInt(progress, 10);
      return validateProgress(parsedProgress);
    }
  } catch (error) {
    if (process.env.NODE_ENV === 'development') {
      console.error(`Error in getCourseProgress for course ${courseId}:`, error);
    }
  }
  return 0;
};

export const setCourseProgress = (courseId: number, progress: number) => {
  if (typeof window === "undefined") return;
  
  if (!isValidCourseId(courseId)) {
    if (process.env.NODE_ENV === 'development') {
      console.warn(`Invalid course ID: ${courseId}`);
    }
    return;
  }
  
  try {
    const validatedProgress = validateProgress(progress);
    localStorage.setItem(`course_progress_${courseId}`, validatedProgress.toString());
  } catch (error) {
    if (process.env.NODE_ENV === 'development') {
      console.error(`Error in setCourseProgress for course ${courseId}:`, error);
    }
  }
};

export const getCourseSubscriptionDate = (courseId: number): string | null => {
  if (typeof window === "undefined") return null;
  
  if (!isValidCourseId(courseId)) {
    if (process.env.NODE_ENV === 'development') {
      console.warn(`Invalid course ID: ${courseId}`);
    }
    return null;
  }
  
  try {
    const date = localStorage.getItem(`course_subscription_${courseId}`);
    if (date) {
      // Validate that it's a proper ISO date string
      if (isValidISODate(date)) {
        return date;
      } else {
        if (process.env.NODE_ENV === 'development') {
          console.warn(`Invalid date format for course ${courseId}: ${date}`);
        }
      }
    }
  } catch (error) {
    if (process.env.NODE_ENV === 'development') {
      console.error(`Error in getCourseSubscriptionDate for course ${courseId}:`, error);
    }
  }
  return null;
};

export const setCourseSubscriptionDate = (courseId: number, date?: string) => {
  if (typeof window === "undefined") return;
  
  if (!isValidCourseId(courseId)) {
    if (process.env.NODE_ENV === 'development') {
      console.warn(`Invalid course ID: ${courseId}`);
    }
    return;
  }
  
  try {
    const subscriptionDate = date || new Date().toISOString();
    // Validate date format
    if (isValidISODate(subscriptionDate)) {
      localStorage.setItem(`course_subscription_${courseId}`, subscriptionDate);
    } else {
      if (process.env.NODE_ENV === 'development') {
        console.warn(`Invalid date format provided: ${subscriptionDate}`);
      }
      // Fallback to current date
      localStorage.setItem(`course_subscription_${courseId}`, new Date().toISOString());
    }
  } catch (error) {
    if (process.env.NODE_ENV === 'development') {
      console.error(`Error in setCourseSubscriptionDate for course ${courseId}:`, error);
    }
  }
};

export const getSubscribedCourses = (): number[] => {
  if (typeof window === "undefined") return [];
  
  try {
    const subscribed = localStorage.getItem("subscribed_courses");
    if (subscribed) {
      const parsed = JSON.parse(subscribed);
      // Validate that all items are valid course IDs
      if (Array.isArray(parsed)) {
        return parsed.filter((id) => isValidCourseId(id));
      }
    }
  } catch (error) {
    if (process.env.NODE_ENV === 'development') {
      console.error('Error in getSubscribedCourses:', error);
    }
  }
  return [];
};

export const subscribeToCourse = (courseId: number) => {
  if (typeof window === "undefined") return;
  
  if (!isValidCourseId(courseId)) {
    if (process.env.NODE_ENV === 'development') {
      console.warn(`Invalid course ID: ${courseId}`);
    }
    return;
  }
  
  try {
    const subscribed = getSubscribedCourses();
    if (!subscribed.includes(courseId)) {
      subscribed.push(courseId);
      localStorage.setItem("subscribed_courses", JSON.stringify(subscribed));
      setCourseSubscriptionDate(courseId);
    }
  } catch (error) {
    if (process.env.NODE_ENV === 'development') {
      console.error(`Error in subscribeToCourse for course ${courseId}:`, error);
    }
  }
};


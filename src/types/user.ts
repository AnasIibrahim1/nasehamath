export interface User {
  id: string;
  email: string;
  username: string;
  phone?: string;
  photo?: string;
  cover?: string;
  totalCourses: number;
  totalExams: number;
}

export interface UserExam {
  id: number;
  courseId: number;
  courseTitle: string;
  topic: string;
  totalQuestions: number;
  correctAnswers: number;
  percentage: number;
  timeSpent: string; // in format "MM:SS"
  dateTime: string; // ISO date string
}


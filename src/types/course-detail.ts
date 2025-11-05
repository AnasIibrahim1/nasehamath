import { Course } from "./course";

export interface CourseVideo {
  id: string;
  title: string;
  duration: string;
  isLocked: boolean; // true if requires subscription
  url?: string; // Video URL or placeholder
}

export interface CourseSection {
  id: string;
  title: string;
  videos: CourseVideo[];
}

export interface CourseDetail extends Course {
  image: string;
  longDescription: string;
  sections: CourseSection[];
  instructor: {
    name: string;
    avatar: string;
    bio: string;
  };
  whatYouWillLearn: string[];
  requirements: string[];
}


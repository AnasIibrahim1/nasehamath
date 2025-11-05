import { allCourses } from "@/data/courses";
import CoursesPageClient from "./components/CoursesPageClient";

export default function CoursesPage() {
  return <CoursesPageClient courses={allCourses} />;
}


import { notFound } from "next/navigation";
import { courseDetails } from "@/data/course-details";
import CourseDetailClient from "./components/CourseDetailClient";

interface CoursePageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: CoursePageProps) {
  const { id } = await params;
  const courseId = parseInt(id);
  const course = courseDetails[courseId];

  if (!course) {
    return {
      title: "الدورة غير موجودة",
    };
  }

  return {
    title: course.title,
    description: course.description,
  };
}

export default async function CourseDetailPage({ params }: CoursePageProps) {
  const { id } = await params;
  const courseId = parseInt(id);
  const course = courseDetails[courseId];

  if (!course) {
    notFound();
  }

  return <CourseDetailClient course={course} />;
}


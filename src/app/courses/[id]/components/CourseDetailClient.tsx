"use client";

import { useEffect, useState } from "react";
import { CourseDetail } from "@/types/course-detail";
import CourseHeader from "./CourseHeader";
import CourseContent from "./CourseContent";
import BlurCircle from "@/components/ui/BlurCircle";
import FloatingShape from "@/components/ui/FloatingShape";

interface CourseDetailClientProps {
  course: CourseDetail;
}

export default function CourseDetailClient({ course }: CourseDetailClientProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);

  useEffect(() => {
    // Check authentication and subscription status
    const checkAuthAndSubscription = () => {
      try {
        const authToken = localStorage.getItem("auth_token");
        const subscriptionToken = localStorage.getItem(`subscription_token_${course.id}`);
        
        setIsAuthenticated(!!authToken);
        setIsSubscribed(!!subscriptionToken);
      } catch {
        setIsAuthenticated(false);
        setIsSubscribed(false);
      }
    };

    checkAuthAndSubscription();
    const interval = setInterval(checkAuthAndSubscription, 1000);
    return () => clearInterval(interval);
  }, [course.id]);

  return (
    <div className="relative min-h-screen">
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10">
        <BlurCircle size={400} color="bg-primary/5" position={{ top: "10%", right: "10%" }} />
        <BlurCircle size={350} color="bg-accent/5" position={{ bottom: "10%", left: "10%" }} />
      </div>

      <FloatingShape
        type="solid-circle"
        size={80}
        color="bg-primary/10"
        position={{ top: "20%", left: "5%" }}
        duration={8}
        delay={0}
      />

      <CourseHeader course={course} isAuthenticated={isAuthenticated} isSubscribed={isSubscribed} />
      <CourseContent course={course} isAuthenticated={isAuthenticated} isSubscribed={isSubscribed} />
    </div>
  );
}


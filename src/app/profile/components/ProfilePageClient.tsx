"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "motion/react";
import ProfileHeader from "./ProfileHeader";
import ProfileSidebar from "./ProfileSidebar";
import Dashboard from "./Dashboard";
import MyCourses from "./MyCourses";
import ExamsTable from "./ExamsTable";
import { User } from "@/types/user";
import { UserExam } from "@/types/user";
import { getUserData, getUserExams } from "@/data/user-data";
import { allCourses } from "@/data/courses";
import BlurCircle from "@/components/ui/BlurCircle";

export default function ProfilePageClient() {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [exams, setExams] = useState<UserExam[]>([]);
  const [activeTab, setActiveTab] = useState("dashboard");
  const [subscribedCourses, setSubscribedCourses] = useState<any[]>([]);

  useEffect(() => {
    // Check authentication
    const token = localStorage.getItem("auth_token");
    if (!token) {
      router.push("/login");
      return;
    }

    // Load user data
    const userData = getUserData();
    if (!userData) {
      router.push("/login");
      return;
    }

    // Get subscribed courses from localStorage
    const subscribed: number[] = [];
    allCourses.forEach((course) => {
      const subscriptionToken = localStorage.getItem(`subscription_token_${course.id}`);
      if (subscriptionToken) {
        subscribed.push(course.id);
      }
    });

    const subscribedCoursesList = allCourses.filter((c) => subscribed.includes(c.id));

    // Update user stats
    const updatedUser: User = {
      ...userData,
      totalCourses: subscribedCoursesList.length,
      totalExams: getUserExams().length,
    };

    setUser(updatedUser);
    setExams(getUserExams());
    setSubscribedCourses(subscribedCoursesList);

    // Update localStorage
    try {
      localStorage.setItem("user_data", JSON.stringify(updatedUser));
    } catch {}
  }, [router]);

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-foreground/60">جاري التحميل...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-primary/5">
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <BlurCircle size={500} color="bg-primary/5" position={{ top: "10%", right: "10%" }} />
        <BlurCircle size={400} color="bg-primary/5" position={{ bottom: "10%", left: "10%" }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Profile Header */}
        <ProfileHeader user={user} />

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-8">
          {/* Sidebar */}
          <ProfileSidebar activeTab={activeTab} onTabChange={setActiveTab} />

          {/* Content */}
          <div className="lg:col-span-3">
            {activeTab === "dashboard" && (
              <Dashboard user={user} subscribedCourses={subscribedCourses} />
            )}
            {activeTab === "exams" && <ExamsTable exams={exams} />}
            {activeTab === "courses" && (
              <MyCourses subscribedCourses={subscribedCourses} allCourses={allCourses} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}


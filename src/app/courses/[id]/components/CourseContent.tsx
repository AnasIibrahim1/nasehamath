"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { CourseDetail } from "@/types/course-detail";
import Button from "@/components/ui/Button";
import { subscribeToCourse } from "@/data/user-data";

interface CourseContentProps {
  course: CourseDetail;
  isAuthenticated: boolean;
  isSubscribed: boolean;
}

export default function CourseContent({ course, isAuthenticated, isSubscribed }: CourseContentProps) {
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set([course.sections[0]?.id]));
  const [selectedVideo, setSelectedVideo] = useState<string | null>(course.sections[0]?.videos[0]?.id || null);

  const toggleSection = (sectionId: string) => {
    const newExpanded = new Set(expandedSections);
    if (newExpanded.has(sectionId)) {
      newExpanded.delete(sectionId);
    } else {
      newExpanded.add(sectionId);
    }
    setExpandedSections(newExpanded);
  };

  const handleVideoClick = (videoId: string, isLocked: boolean) => {
    // If not authenticated, all content is locked
    if (!isAuthenticated) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    
    // If locked and not subscribed, show message
    if (isLocked && !isSubscribed) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    
    setSelectedVideo(videoId);
    // Scroll video into view on mobile
    if (window.innerWidth < 1024) {
      setTimeout(() => {
        document.getElementById("video-player")?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
    }
  };

  const currentVideo = course.sections
    .flatMap((s) => s.videos)
    .find((v) => v.id === selectedVideo);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
        {/* Video Player Section */}
        <div className="lg:col-span-2 space-y-6">
          {/* Video Player */}
          {currentVideo ? (
            <motion.div
              id="video-player"
              key={selectedVideo}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="relative w-full aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl"
            >
              {!isAuthenticated ? (
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800">
                  <div className="text-center p-8">
                    <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-red-500/20 flex items-center justify-center">
                      <svg
                        width="40"
                        height="40"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-red-500"
                      >
                        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">يرجى تسجيل الدخول</h3>
                    <p className="text-white/70 mb-6">سجل دخولك للوصول إلى المحتوى المجاني</p>
                    <Button variant="primary" size="lg" href="/login">
                      سجل دخول
                    </Button>
                  </div>
                </div>
              ) : currentVideo.isLocked && !isSubscribed ? (
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800">
                  <div className="text-center p-8">
                    <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-amber-500/20 flex items-center justify-center">
                      <svg
                        width="40"
                        height="40"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-amber-500"
                      >
                        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">هذا المحتوى مقفل</h3>
                    <p className="text-white/70 mb-6">اشترك في الدورة للوصول إلى هذا الفيديو</p>
                    <Button variant="primary" size="lg" onClick={() => {
                      const subscriptionToken = `sub_token_${course.id}_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
                      localStorage.setItem(`subscription_token_${course.id}`, subscriptionToken);
                      
                      // Save subscription date
                      subscribeToCourse(course.id);
                      
                      window.location.reload();
                    }}>
                      اشترك الآن
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/20 to-accent/20">
                  <div className="text-center">
                    <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
                      <svg
                        width="48"
                        height="48"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-white ml-1"
                      >
                        <polygon points="5 3 19 12 5 21 5 3" />
                      </svg>
                    </div>
                    <p className="text-white/90 font-medium">مشغل الفيديو</p>
                    <p className="text-white/70 text-sm mt-1">{currentVideo.title}</p>
                  </div>
                </div>
              )}
            </motion.div>
          ) : null}

          {/* Video Info */}
          {currentVideo && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="bg-white rounded-2xl p-6 shadow-lg border border-border/40"
            >
              <h2 className="text-2xl font-bold text-foreground mb-3">{currentVideo.title}</h2>
              <div className="flex items-center gap-4 text-sm text-foreground/70">
                <span>المدة: {currentVideo.duration}</span>
                {!isAuthenticated && (
                  <span className="px-3 py-1 bg-red-100 text-red-700 rounded-lg font-medium">🔒 يتطلب تسجيل الدخول</span>
                )}
                {isAuthenticated && currentVideo.isLocked && !isSubscribed && (
                  <span className="px-3 py-1 bg-amber-100 text-amber-700 rounded-lg font-medium">🔒 يتطلب الاشتراك</span>
                )}
              </div>
            </motion.div>
          )}

          {/* Course Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-2xl p-6 shadow-lg border border-border/40"
          >
            <h3 className="text-xl font-bold text-foreground mb-4">عن هذه الدورة</h3>
            <p className="text-foreground/80 leading-relaxed">{course.longDescription}</p>
          </motion.div>

          {/* What You Will Learn */}
          {course.whatYouWillLearn && course.whatYouWillLearn.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-2xl p-6 shadow-lg border border-border/40"
            >
              <h3 className="text-xl font-bold text-foreground mb-4">ما ستتعلمه</h3>
              <ul className="space-y-3">
                {course.whatYouWillLearn.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-primary mt-0.5 flex-shrink-0"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className="text-foreground/80">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </div>

        {/* Course Curriculum Sidebar */}
        <div className="lg:col-span-1">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-2xl shadow-lg border border-border/40 overflow-hidden sticky top-24"
          >
            <div className="p-4 sm:p-6 border-b border-border/40 bg-gradient-to-r from-primary/5 to-accent/5">
              <h3 className="text-lg font-bold text-foreground">محتوى الدورة</h3>
              <p className="text-sm text-foreground/70 mt-1">
                {course.sections.reduce((acc, s) => acc + s.videos.length, 0)} فيديو
              </p>
            </div>

            <div className="max-h-[600px] overflow-y-auto">
              {course.sections.map((section, sectionIndex) => (
                <div key={section.id} className="border-b border-border/30 last:border-b-0">
                  {/* Section Header */}
                  <button
                    onClick={() => toggleSection(section.id)}
                    className="w-full px-4 sm:px-6 py-4 flex items-center justify-between hover:bg-primary/5 transition-colors"
                  >
                    <div className="flex items-center gap-3 flex-1 text-right">
                      <span className="text-sm font-medium text-foreground/60">
                        {sectionIndex + 1}
                      </span>
                      <span className="font-semibold text-foreground">{section.title}</span>
                    </div>
                    <motion.svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-foreground/60"
                      animate={{ rotate: expandedSections.has(section.id) ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </motion.svg>
                  </button>

                  {/* Section Videos */}
                  <AnimatePresence>
                    {expandedSections.has(section.id) && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="pb-2">
                          {section.videos.map((video, videoIndex) => {
                            // Content is locked if: not authenticated OR (video is locked AND not subscribed)
                            const isLocked = !isAuthenticated || (video.isLocked && !isSubscribed);
                            const isSelected = selectedVideo === video.id;
                            const requiresAuth = !isAuthenticated;
                            const requiresSubscription = isAuthenticated && video.isLocked && !isSubscribed;

                            return (
                              <button
                                key={video.id}
                                onClick={() => handleVideoClick(video.id, video.isLocked)}
                                disabled={isLocked}
                                className={`w-full px-4 sm:px-6 py-3 pr-12 text-right hover:bg-primary/5 transition-colors relative ${
                                  isSelected ? "bg-primary/10 border-r-4 border-primary" : ""
                                } ${isLocked ? "opacity-60 cursor-not-allowed" : "cursor-pointer"}`}
                              >
                                <div className="flex items-start justify-between gap-3">
                                  <div className="flex-1">
                                    <div className="flex items-center gap-2 mb-1">
                                      <span className="text-xs text-foreground/50">
                                        {sectionIndex + 1}.{videoIndex + 1}
                                      </span>
                                      <span
                                        className={`text-sm font-medium ${
                                          isSelected ? "text-primary" : "text-foreground/80"
                                        }`}
                                      >
                                        {video.title}
                                      </span>
                                    </div>
                                    <div className="flex items-center gap-3 text-xs text-foreground/50">
                                      <span>{video.duration}</span>
                                      {requiresAuth && (
                                        <span className="px-2 py-0.5 bg-red-100 text-red-700 rounded text-xs">
                                          🔒 يتطلب تسجيل الدخول
                                        </span>
                                      )}
                                      {requiresSubscription && (
                                        <span className="px-2 py-0.5 bg-amber-100 text-amber-700 rounded text-xs">
                                          🔒 يتطلب الاشتراك
                                        </span>
                                      )}
                                    </div>
                                  </div>
                                  {requiresAuth ? (
                                    <svg
                                      width="18"
                                      height="18"
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      stroke="currentColor"
                                      strokeWidth="2"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      className="text-red-600 flex-shrink-0"
                                    >
                                      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                                      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                                    </svg>
                                  ) : requiresSubscription ? (
                                    <svg
                                      width="18"
                                      height="18"
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      stroke="currentColor"
                                      strokeWidth="2"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      className="text-amber-600 flex-shrink-0"
                                    >
                                      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                                      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                                    </svg>
                                  ) : (
                                    <svg
                                      width="18"
                                      height="18"
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      stroke="currentColor"
                                      strokeWidth="2"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      className={`flex-shrink-0 ${
                                        isSelected ? "text-primary" : "text-foreground/40"
                                      }`}
                                    >
                                      <polygon points="5 3 19 12 5 21 5 3" />
                                    </svg>
                                  )}
                                </div>
                              </button>
                            );
                          })}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}


"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { User } from "@/types/user";

interface ProfileHeaderProps {
  user: User;
}

export default function ProfileHeader({ user }: ProfileHeaderProps) {
  return (
    <div className="relative w-full mb-8">
      {/* Cover Image */}
      <div className="relative w-full h-48 sm:h-64 md:h-80 overflow-hidden rounded-2xl">
        <Image
          src={user.cover || "/courses/course.jpg"}
          alt="Cover"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
      </div>

      {/* Profile Info */}
      <div className="relative -mt-16 sm:-mt-20 px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row items-center lg:items-end gap-6 lg:gap-8">
          {/* Profile Photo */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="relative w-32 h-32 sm:w-40 sm:h-40 lg:w-44 lg:h-44 rounded-full border-4 border-white shadow-2xl overflow-hidden bg-white z-10 flex-shrink-0"
          >
            <Image
              src={user.photo || "/ppl/person.png"}
              alt={user.username}
              fill
              className="object-cover"
              priority
            />
          </motion.div>

          {/* User Info Box with Glass Effect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex-1 w-full bg-white/80 backdrop-blur-md rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl border border-white/20"
          >
            {/* Name and Email */}
            <div className="text-center lg:text-right">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3">
                {user.username}
              </h1>
              <div className="flex items-center justify-center lg:justify-start gap-2">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-foreground/60">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                <p className="text-foreground/70 text-base sm:text-lg font-medium">
                  {user.email}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}


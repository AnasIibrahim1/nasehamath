"use client";

import { useState } from "react";
import { motion } from "motion/react";
import BlogCard from "./BlogCard";
import { blogPosts } from "@/data/blog-posts";
import BlurCircle from "@/components/ui/BlurCircle";
import FloatingShape from "@/components/ui/FloatingShape";

const categories = ["الكل", ...Array.from(new Set(blogPosts.map((post) => post.category)))];

export default function BlogPageClient() {
  const [selectedCategory, setSelectedCategory] = useState("الكل");

  const filteredPosts =
    selectedCategory === "الكل"
      ? blogPosts
      : blogPosts.filter((post) => post.category === selectedCategory);

  return (
    <div className="relative min-h-screen bg-white">
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <BlurCircle
          size={500}
          color="bg-primary/5"
          position={{ top: "-10%", right: "-5%" }}
        />
        <BlurCircle
          size={450}
          color="bg-primary/5"
          position={{ bottom: "-10%", left: "-5%" }}
        />
      </div>

      <FloatingShape
        type="solid-circle"
        size={100}
        color="bg-primary/10"
        position={{ top: "15%", left: "3%" }}
        duration={10}
        delay={0}
      />

      {/* Hero Section */}
      <div className="relative pt-20 sm:pt-24 pb-12 sm:pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-primary">
              المدونة
            </h1>
            <p className="text-lg sm:text-xl text-foreground/70 max-w-3xl mx-auto">
              مقالات ونصائح مفيدة لتحسين مستواك في الرياضيات
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 sm:pb-24">
        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-xl font-semibold transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-primary text-white shadow-lg"
                  : "bg-white text-foreground/70 hover:bg-primary/10 hover:text-primary border border-border/40"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredPosts.map((post, index) => (
            <BlogCard key={post.id} post={post} index={index} />
          ))}
        </div>

        {/* Empty State */}
        {filteredPosts.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <p className="text-foreground/60 text-lg">لا توجد مقالات في هذه الفئة</p>
          </motion.div>
        )}
      </div>
    </div>
  );
}


"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { BlogPost } from "@/types/blog";
import BlurCircle from "@/components/ui/BlurCircle";
import FloatingShape from "@/components/ui/FloatingShape";
import { getRecentPosts } from "@/data/blog-posts";
import BlogCard from "../../components/BlogCard";

interface BlogPostClientProps {
  post: BlogPost;
}

export default function BlogPostClient({ post }: BlogPostClientProps) {
  const recentPosts = getRecentPosts(3).filter((p) => p.id !== post.id);

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

      {/* Hero Section */}
      <div className="relative pt-20 sm:pt-24 pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Back Button */}
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-foreground/70 hover:text-primary transition-colors mb-8"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M19 12H5" />
                <path d="M12 19l-7-7 7-7" />
              </svg>
              <span>العودة إلى المدونة</span>
            </Link>

            {/* Category */}
            <div className="mb-4">
              <span className="px-4 py-2 bg-primary/10 text-primary text-sm font-semibold rounded-lg">
                {post.category}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              {post.title}
            </h1>

            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-foreground/60 mb-8 pb-8 border-b border-border/40">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-bold">
                    {post.author.name.charAt(0)}
                  </span>
                </div>
                <span>{post.author.name}</span>
              </div>
              <span>•</span>
              <span>{new Date(post.publishedAt).toLocaleDateString("ar-EG")}</span>
              <span>•</span>
              <span>{post.readTime} دقيقة قراءة</span>
            </div>

            {/* Featured Image */}
            <div className="relative w-full h-64 sm:h-80 md:h-96 rounded-2xl overflow-hidden mb-12">
              <Image
                src={post.image || "/courses/course.jpg"}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="blog-content"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Tags */}
        <div className="mt-12 pt-8 border-t border-border/40">
          <h3 className="text-lg font-bold text-foreground mb-4">الوسوم:</h3>
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-4 py-2 bg-primary/10 text-primary rounded-lg text-sm font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </article>

      {/* Related Posts */}
      {recentPosts.length > 0 && (
        <div className="bg-primary/5 py-16 mt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                مقالات ذات صلة
              </h2>
              <p className="text-foreground/70">مقالات قد تهمك</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {recentPosts.map((relatedPost, index) => (
                <BlogCard key={relatedPost.id} post={relatedPost} index={index} />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}


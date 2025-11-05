"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { BlogPost } from "@/types/blog";

interface BlogCardProps {
  post: BlogPost;
  index: number;
}

export default function BlogCard({ post, index }: BlogCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="group relative bg-white rounded-2xl overflow-hidden border border-border/40 hover:border-primary/40 transition-all duration-300 shadow-sm hover:shadow-xl"
    >
      <Link href={`/blog/${post.slug}`}>
        {/* Image */}
        <div className="relative h-56 overflow-hidden">
          <Image
            src={post.image || "/courses/course.jpg"}
            alt={post.title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          {/* Category Badge */}
          <div className="absolute top-4 right-4">
            <span className="px-3 py-1.5 bg-primary text-white text-xs font-semibold rounded-lg backdrop-blur-sm">
              {post.category}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Meta Info */}
          <div className="flex items-center gap-4 text-xs text-foreground/60 mb-3">
            <span>{new Date(post.publishedAt).toLocaleDateString("ar-EG")}</span>
            <span>•</span>
            <span>{post.readTime} دقيقة قراءة</span>
          </div>

          {/* Title */}
          <h2 className="text-xl font-bold text-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors">
            {post.title}
          </h2>

          {/* Excerpt */}
          <p className="text-foreground/70 text-sm mb-4 line-clamp-2">
            {post.excerpt}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 text-xs bg-primary/10 text-primary rounded-md"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Author */}
          <div className="flex items-center gap-3 pt-4 border-t border-border/30">
            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
              <span className="text-primary text-xs font-bold">
                {post.author.name.charAt(0)}
              </span>
            </div>
            <span className="text-sm text-foreground/70">{post.author.name}</span>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}


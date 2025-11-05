export interface BlogPost {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: {
    name: string;
    avatar: string;
  };
  publishedAt: string;
  category: string;
  image: string;
  readTime: number; // in minutes
  tags: string[];
}


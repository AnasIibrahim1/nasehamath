export interface Testimonial {
  id: number;
  name: string;
  rate: number;
  message: string;
  avatar?: string;
}

export interface TestimonialScreenshot {
  id: number;
  name: string;
  avatar: string;
  message: string;
  time: string;
  platform: "whatsapp" | "facebook" | "website";
}

export interface TestimonialPreview {
  id: number;
  name: string;
  avatar: string;
  message: string;
  platform: "whatsapp" | "facebook" | "website";
}

export interface TestimonialScreenshotV2 {
  id: number;
  imageUrl: string;
  platform: "whatsapp" | "facebook" | "website";
  alt: string;
}


import { Feature } from "@/types/feature";

export const features: Feature[] = [
  {
    id: 1,
    title: "سهولة حضور الدرس",
    description: "يمكنك الدراسة بسهولة من خلال هاتفك الجوال أو جهاز الكمبيوتر الخاص بك",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"
          fill="currentColor"
        />
      </svg>
    ),
    color: "from-blue-500 to-blue-600",
    borderColor: "border-blue-200",
    glowColor: "shadow-blue-500/20",
    delay: 0.1,
  },
  {
    id: 2,
    title: "أوراق عمل واختبارات",
    description: "ومراجعة وكل ما يلزمك بصورة الكترونية عن طريق الهاتف او الكمبيوتر",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"
          fill="currentColor"
        />
      </svg>
    ),
    color: "from-purple-500 to-purple-600",
    borderColor: "border-purple-200",
    glowColor: "shadow-purple-500/20",
    delay: 0.2,
  },
  {
    id: 3,
    title: "تمارين الكترونية",
    description: "بعد ان تشاهد كل فيديو سنوفر لك تمارين الكترونية لتتمرن على الافكار",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
          fill="currentColor"
        />
      </svg>
    ),
    color: "from-amber-500 to-amber-600",
    borderColor: "border-amber-200",
    glowColor: "shadow-amber-500/20",
    delay: 0.3,
  },
  {
    id: 4,
    title: "فيديوهات",
    description: "فيديوهاتنا تعالج كل موضوع لوحده بصورة مفصلة",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M17 10.5V7a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h12a1 1 0 001-1v-3.5l4 4v-11l-4 4z"
          fill="currentColor"
        />
      </svg>
    ),
    color: "from-pink-500 to-pink-600",
    borderColor: "border-pink-200",
    glowColor: "shadow-pink-500/20",
    delay: 0.4,
  },
];


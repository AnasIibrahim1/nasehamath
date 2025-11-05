import { CourseDetail } from "@/types/course-detail";

export const courseDetails: Record<number, CourseDetail> = {
  1: {
    id: 1,
    title: "دورة التأسيس والمراجعة الشاملة",
    description: "دورة شاملة في التأسيس والمراجعة تغطي جميع الأساسيات والمفاهيم المهمة",
    students: 1250,
    price: "299",
    duration: "8 أسابيع",
    image: "/courses/course.jpg",
    longDescription:
      "دورة شاملة ومتكاملة في التأسيس والمراجعة تغطي جميع الأساسيات والمفاهيم المهمة التي تحتاجها لفهم الرياضيات بشكل صحيح. هذه الدورة مصممة لتناسب جميع المستويات وتهدف إلى بناء أساس قوي في الرياضيات.",
    instructor: {
      name: "الأستاذ ثامر قدورة",
      avatar: "/ppl/person.png",
      bio: "خبير في الرياضيات مع أكثر من 10 سنوات من الخبرة في التدريس",
    },
    whatYouWillLearn: [
      "فهم الأساسيات الرياضية بشكل صحيح",
      "حل المسائل بطرق منظمة",
      "بناء قاعدة قوية في الرياضيات",
      "التحضير للامتحانات بشكل فعال",
    ],
    requirements: ["معرفة أساسية بالحساب", "رغبة في التعلم", "التزام بحضور الدروس"],
    sections: [
      {
        id: "section-1",
        title: "الأساسيات الرياضية",
        videos: [
          { id: "1-1", title: "مقدمة في الأعداد", duration: "15:30", isLocked: false },
          { id: "1-2", title: "العمليات الحسابية الأساسية", duration: "20:45", isLocked: false },
          { id: "1-3", title: "الكسور والكسور العشرية", duration: "18:20", isLocked: true },
          { id: "1-4", title: "النسب المئوية", duration: "22:10", isLocked: true },
        ],
      },
      {
        id: "section-2",
        title: "الجبر الأساسي",
        videos: [
          { id: "2-1", title: "المتغيرات والمعادلات", duration: "25:00", isLocked: false },
          { id: "2-2", title: "حل المعادلات الخطية", duration: "30:15", isLocked: true },
          { id: "2-3", title: "نظم المعادلات", duration: "28:45", isLocked: true },
        ],
      },
      {
        id: "section-3",
        title: "الهندسة الأساسية",
        videos: [
          { id: "3-1", title: "الأشكال الأساسية", duration: "20:00", isLocked: false },
          { id: "3-2", title: "المحيط والمساحة", duration: "35:20", isLocked: true },
          { id: "3-3", title: "الحجم والمساحة الجانبية", duration: "32:10", isLocked: true },
        ],
      },
    ],
  },
  2: {
    id: 2,
    title: "دورة التوجيهي العلمي",
    description: "دورة متخصصة في التوجيهي العلمي تغطي جميع المواد المطلوبة",
    students: 890,
    price: "349",
    duration: "10 أسابيع",
    image: "/courses/course.jpg",
    longDescription:
      "دورة متخصصة وشاملة في التوجيهي العلمي تغطي جميع المواد المطلوبة وتمارين شاملة لضمان النجاح. هذه الدورة مصممة خصيصاً لطلاب التوجيهي العلمي.",
    instructor: {
      name: "الأستاذ ثامر قدورة",
      avatar: "/ppl/person.png",
      bio: "خبير في الرياضيات مع أكثر من 10 سنوات من الخبرة في التدريس",
    },
    whatYouWillLearn: [
      "إتقان جميع مواضيع التوجيهي العلمي",
      "حل المسائل بطرق احترافية",
      "التحضير المثالي للامتحانات",
      "تقنيات حل الامتحانات",
    ],
    requirements: ["إتمام المرحلة الثانوية", "معرفة أساسية بالرياضيات"],
    sections: [
      {
        id: "section-1",
        title: "التفاضل والتكامل",
        videos: [
          { id: "1-1", title: "مقدمة في التفاضل", duration: "30:00", isLocked: false },
          { id: "1-2", title: "قواعد الاشتقاق", duration: "35:20", isLocked: true },
          { id: "1-3", title: "التطبيقات الهندسية", duration: "40:15", isLocked: true },
        ],
      },
      {
        id: "section-2",
        title: "الجبر المتقدم",
        videos: [
          { id: "2-1", title: "المعادلات المتعددة", duration: "28:00", isLocked: false },
          { id: "2-2", title: "المصفوفات", duration: "32:45", isLocked: true },
        ],
      },
    ],
  },
  3: {
    id: 3,
    title: "دورة التوجيهي الصناعي",
    description: "دورة شاملة في التوجيهي الصناعي",
    students: 1100,
    price: "279",
    duration: "9 أسابيع",
    image: "/courses/course.jpg",
    longDescription: "دورة شاملة في التوجيهي الصناعي تغطي جميع الأساسيات والمفاهيم المهمة",
    instructor: {
      name: "الأستاذ ثامر قدورة",
      avatar: "/ppl/person.png",
      bio: "خبير في الرياضيات مع أكثر من 10 سنوات من الخبرة",
    },
    whatYouWillLearn: ["فهم الرياضيات الصناعية", "حل المسائل العملية"],
    requirements: ["معرفة أساسية"],
    sections: [
      {
        id: "section-1",
        title: "الأساسيات",
        videos: [
          { id: "1-1", title: "مقدمة", duration: "20:00", isLocked: false },
          { id: "1-2", title: "الموضوع الأول", duration: "25:00", isLocked: true },
        ],
      },
    ],
  },
};


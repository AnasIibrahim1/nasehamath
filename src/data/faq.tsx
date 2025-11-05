import { FAQItem } from "@/types/faq";

export const faqItems: FAQItem[] = [
  {
    id: 1,
    question: "أين أبعث أسئلتي؟",
    answer: (
      <div className="space-y-2 sm:space-y-3">
        <p className="text-foreground/80">
          يمكنك أن تبعث سؤالك مباشرة على إحدى الطرق التالية:
        </p>
        <ul className="space-y-2 mr-2 sm:mr-4">
          <li className="flex items-start gap-2">
            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-primary mt-1.5 flex-shrink-0"></span>
            <span>رسائل الموقع</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-primary mt-1.5 flex-shrink-0"></span>
            <span className="break-words">الواتساب: 0787488070 – 0797488070</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-primary mt-1.5 flex-shrink-0"></span>
            <span className="break-words">
              الفيسبوك:{" "}
              <a
                href="https://web.facebook.com/Thamer.Tutorial"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline break-all"
              >
                https://web.facebook.com/Thamer.Tutorial
              </a>
            </span>
          </li>
        </ul>
      </div>
    ),
  },
  {
    id: 2,
    question: "كيف ستكون الإجابة؟",
    answer: (
      <p className="text-foreground/80 leading-relaxed">
        حسب السؤال، إن كان استفسار بسيط سأجيبك كتابة أو بصورة، لكن غالباً تكون الإجابة بفيديو قصير معقول.
      </p>
    ),
  },
];


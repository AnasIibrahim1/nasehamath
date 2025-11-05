"use client";

import BlurCircle from "@/components/ui/BlurCircle";

export default function CoursesBackground() {
  return (
    <div className="absolute inset-0 -z-10">
      <BlurCircle
        size={500}
        color="bg-primary/10"
        position={{ top: "10%", right: "10%" }}
      />
      <BlurCircle
        size={400}
        color="bg-accent/10"
        position={{ bottom: "10%", left: "10%" }}
      />
      <BlurCircle
        size={350}
        color="bg-blue-500/5"
        position={{ top: "50%", left: "50%" }}
      />
    </div>
  );
}


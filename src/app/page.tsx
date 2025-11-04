import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import Courses from "@/components/sections/Courses";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import FAQV2 from "@/components/sections/FAQ-V2";
import Banner from "@/components/sections/Banner";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Courses />
      <Testimonials />
      <FAQV2 />
      <Banner />
      {/* <FAQ /> */}
    </>
  );
}

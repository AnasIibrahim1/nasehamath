import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import Courses from "@/components/sections/Courses";
import Testimonials from "@/components/sections/Testimonials";
import SaidAboutUsPreview from "@/components/sections/SaidAboutUsPreview";
import FAQ from "@/components/sections/FAQ";
import Banner from "@/components/sections/Banner";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Courses />
      <Testimonials />
      <SaidAboutUsPreview />
      <FAQ />
      <Banner />
    </>
  );
}

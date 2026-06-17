
import About from "@/components/home/About";
import Features from "@/components/home/Features";
import Formats from "@/components/home/Formats";
import Gallery from "@/components/home/Gallery";
import Hero from "@/components/home/Hero";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Gallery />
      <Features />
      <Formats />
    </>
  );
}
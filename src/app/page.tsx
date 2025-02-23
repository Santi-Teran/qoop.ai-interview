import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import { Toaster } from "react-hot-toast";

export default function Home() {
  return (
    <div>
      <Toaster />
      <Hero />
      <Features />
      <Testimonials />
      <Pricing />
      <Contact />
    </div>
  );
}

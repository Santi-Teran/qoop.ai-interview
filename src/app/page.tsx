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
      <div id="home">
        <Hero />
      </div>
      <div id="features">
        <Features />
      </div>
      <Testimonials />
      <div id="pricing">
        <Pricing />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </div>
  );
}

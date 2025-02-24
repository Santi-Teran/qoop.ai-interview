"use client";
import { useEffect, useState } from "react";
import EmblaCarousel from "./EmblaCarousel";

interface Testimonial {
  id: number;
  name: string;
  email: string;
  body: string;
}

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/comments?_limit=6")
      .then((res) => res.json())
      .then((data) => {
        setTestimonials(data);
        setLoading(false);
      });
  }, []);

  return (
    <section className="relative flex flex-col items-center gap-10 py-20 px-6 overflow-hidden">
      <div className="flex flex-col md:flex-row md:items-center md:justify-center md:gap-6 w-full max-w-4xl text-center md:text-left">
        <h2 className="text-3xl font-bold text-light-textPrimary dark:text-dark-textPrimary md:w-2/3">
          What our{" "}
          <span className="text-light-primary dark:text-dark-primary">
            users say
          </span>
        </h2>
        <p className="text-lg text-light-textSecondary dark:text-dark-textSecondary md:w-1/3">
          Hear from our happy users about how Smart Habit Tracker has improved
          their daily lives.
        </p>
      </div>
      <>
        {loading ? (
          <div className="loader my-20"></div>
        ) : (
          <EmblaCarousel slides={testimonials} />
        )}
      </>
    </section>
  );
};

export default Testimonials;

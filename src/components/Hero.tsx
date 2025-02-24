"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { exo, nunito } from "@/app/fonts";

const words = ["objectives", "goals", "dreams", "success"];

const Hero = () => {
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative flex flex-col items-center text-center gap-6 pt-40 pb-20 px-6 overflow-hidden">
      {/* Background Circles */}
      <div className="absolute inset-0 -z-10 flex justify-center items-center">
        <motion.div
          className="w-[500px] h-[500px] bg-light-primary dark:bg-dark-primary opacity-20 rounded-full absolute -top-20 -left-40 blur-3xl"
          animate={{ scale: [1, 1.2, 1], rotate: [0, 15, 0] }}
          transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
        />
        <motion.div
          className="w-[300px] h-[300px] bg-light-tertiary dark:bg-dark-tertiary opacity-20 rounded-full absolute bottom-30 right-0 blur-3xl"
          animate={{ scale: [1, 1.2, 1], rotate: [0, -15, 0] }}
          transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
        />
      </div>

      {/* Animated Title */}
      <h1
        className={`${exo.className} text-4xl font-bold text-light-textPrimary dark:text-dark-textPrimary`}
      >
        Track your habits, achieve your{" "}
        <motion.span
          key={wordIndex}
          className="text-light-primary dark:text-dark-primary"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: [0, 1, 1, 0], y: [10, 0, 0, -10] }}
          transition={{ duration: 1.5 }}
        >
          {words[wordIndex]}
        </motion.span>
      </h1>

      {/* Description */}
      <p
        className={`${nunito.className} text-lg text-light-textSecondary dark:text-dark-textSecondary max-w-lg`}
      >
        Stay on top of your daily habits with Smart Habit Tracker. Build
        consistency, stay motivated, and reach your goals effortlessly.
      </p>

      {/* Call to Action */}
      <div
        className={`${exo.className} flex flex-col md:flex-row gap-4 w-full max-w-md`}
      >
        <button className="w-full md:w-1/2 bg-light-primary dark:bg-dark-primary py-3 text-lg rounded-full">
          Start tracking now
        </button>
        <button className="w-full md:w-1/2 border border-light-textSecondary dark:border-dark-textSecondary py-3 text-lg rounded-full">
          View pricing
        </button>
      </div>

      {/* Illustration Placeholder */}
      <motion.div
        className="mt-10 w-full max-w-md h-64 bg-gray-200 dark:bg-gray-700 rounded-lg"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      />
    </section>
  );
};

export default Hero;

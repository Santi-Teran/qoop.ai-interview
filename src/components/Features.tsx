"use client";
import { motion } from "framer-motion";
import { CheckCircle, Clock, TrendingUp, BarChart, Shield, RefreshCcw } from "lucide-react";

const features = [
  { icon: <CheckCircle size={32} />, title: "Track Progress", description: "Monitor your habits and see your daily progress." },
  { icon: <Clock size={32} />, title: "Reminders", description: "Stay consistent with customizable habit reminders." },
  { icon: <TrendingUp size={32} />, title: "Growth Insights", description: "Analyze trends and improve your habits over time." },
  { icon: <BarChart size={32} />, title: "Detailed Analytics", description: "Visualize your progress with insightful reports." },
  { icon: <Shield size={32} />, title: "Secure Data", description: "Your data is safe with end-to-end encryption." },
  { icon: <RefreshCcw size={32} />, title: "Daily Streaks", description: "Stay motivated with streak-based tracking." },
];

const Features = () => {
  return (
    <section className="relative flex flex-col items-center gap-10 py-20 px-6 overflow-hidden">

<div className="flex flex-col md:flex-row md:items-center md:justify-center md:gap-6 w-full max-w-4xl text-center md:text-left">
        {/* Section Title */}
        <h2 className="text-3xl font-bold text-light-textPrimary dark:text-dark-textPrimary md:w-2/3">
          Why choose <span className="text-light-primary dark:text-dark-primary">SmartTracker?</span>
        </h2>

        {/* Section Description */}
        <p className="text-lg text-light-textSecondary dark:text-dark-textSecondary md:w-1/3">
          Discover powerful features designed to help you build better habits, stay consistent, and achieve your goals.
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-4xl">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="flex flex-col p-6 bg-light-background dark:bg-dark-background rounded-2xl shadow-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="text-light-primary dark:text-dark-primary mb-6">{feature.icon}</div>
            <h3 className="text-xl font-semibold text-light-textPrimary dark:text-dark-textPrimary">{feature.title}</h3>
            <p className="text-light-textSecondary dark:text-dark-textSecondary">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Features;

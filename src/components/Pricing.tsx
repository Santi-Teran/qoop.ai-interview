"use client"
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const pricingPlans = [
  {
    name: "Basic",
    price: "$9/month",
    features: [
      "Track up to 5 habits",
      "Basic analytics",
      "Daily reminders",
      "Limited integrations",
    ],
    recommended: false,
  },
  {
    name: "Pro",
    price: "$19/month",
    features: [
      "Unlimited habit tracking",
      "Advanced analytics & insights",
      "Custom reminders & schedules",
      "Integration with Notion",
      "Cross-device synchronization",
    ],
    recommended: true,
  },
  {
    name: "Enterprise",
    price: "$39/month",
    features: [
      "All Pro features",
      "Team & group habit tracking",
      "Priority support",
      "Custom automation workflows",
      "API access",
    ],
    recommended: false,
  },
];

const Pricing = () => {
  return (
    <section className="relative flex flex-col items-center text-center overflow-hidden">
            {/* Background Circles */}
            <div className="absolute inset-0 -z-10 flex justify-center items-center">
        <motion.div
          className="w-[300] h-[300] bg-light-background opacity-20 rounded-full absolute top-25 -left-40 blur-3xl"
          animate={{ scale: [1, 1.2, 1], rotate: [0, 15, 0] }}
          transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
        />
        <motion.div
          className="w-[300px] h-[300px] bg-light-secondary dark:bg-dark-secondary opacity-20 rounded-full absolute bottom-30 right-0 blur-3xl"
          animate={{ scale: [1, 1.2, 1], rotate: [0, -15, 0] }}
          transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
        />
      </div>
      <h2 className="text-3xl font-bold text-light-textPrimary dark:text-dark-textPrimary mb-6">
        Choose Your <span className="text-light-primary dark:text-dark-primary">Plan</span>
      </h2>
      <p className="text-light-textSecondary dark:text-dark-textSecondary max-w-xl mx-auto mb-10">
        Find the perfect plan to build better habits and stay on track with your goals.
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {pricingPlans.map((plan, index) => (
          <motion.div
            key={index}
            className={`p-6 rounded-2xl shadow-md border-2 transition-all flex flex-col justify-between h-[350px] w-[320px] mx-auto md:mx-0 ${
              plan.recommended
                ? "border-light-primary dark:border-dark-primary bg-light-background dark:bg-dark-background"
                : "border-transparent bg-light-secondary dark:bg-dark-secondary"
            }`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <h3 className="text-xl font-semibold text-light-textPrimary dark:text-white">
              {plan.name}
            </h3>
            <p className={`text-2xl font-bold ${
              plan.recommended ? "text-light-primary dark:text-dark-primary" : "dark:text-dark-background"} mt-2`}>
              {plan.price}
            </p>
            <ul className="mt-4 space-y-2">
              {plan.features.map((feature, i) => (
                <li key={i} className={`flex items-center justify-start gap-2 ${ plan.recommended ? "text-light-textSecondary dark:text-dark-textSecondary" : "dark:text-dark-background"}`}>
                  <CheckCircle className={`w-5 h-5 ${plan.recommended ? "text-light-primary dark:text-dark-primary" : "dark:text-dark-background"}`} /> {feature}
                </li>
              ))}
            </ul>
            <button
  className={`mt-auto mb-1 w-full py-2 shadow rounded-lg font-semibold transition-transform duration-300 transform hover:scale-105 ${
    plan.recommended
      ? "bg-light-primary text-white dark:bg-dark-primary"
      : "bg-light-tertiary text-light-textPrimary dark:bg-dark-tertiary"
  }`}
>
  {plan.recommended ? "Get Started" : "Choose Plan"}
</button>

          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;

"use client";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { motion } from "framer-motion";
import { toast } from "react-hot-toast";

const contactSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  message: yup.string().required("Message cannot be empty"),
});

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: yupResolver(contactSchema),
  });

  const onSubmit = async (data: unknown) => {
    try {
      console.log("Form Data:", data);
      toast.success("Message sent successfully!");
      reset();
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <section className="relative flex flex-col items-center py-20 px-6 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto text-center"
      >
        <h2 className="text-3xl font-bold text-light-textPrimary dark:text-dark-textPrimary mb-4">
          Contact Us
        </h2>
        <p className="text-light-textSecondary dark:text-dark-textSecondary mb-6">
          Have any questions? Feel free to reach out!
        </p>

        {/* FORM */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Name Field */}
          <div>
            <input
              type="text"
              placeholder="Your Name"
              {...register("name")}
              className={`w-full px-4 py-3 rounded-lg border transition ${
                errors.name
                  ? "border-red-500"
                  : "border-light-tertiary dark:border-dark-tertiary"
              } bg-light-background dark:bg-dark-background text-light-textPrimary dark:text-dark-textPrimary focus:outline-none focus:ring-2 focus:ring-light-primary dark:focus:ring-dark-primary`}
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          {/* Email Field */}
          <div>
            <input
              type="email"
              placeholder="Your Email"
              {...register("email")}
              className={`w-full px-4 py-3 rounded-lg border transition ${
                errors.email
                  ? "border-red-500"
                  : "border-light-tertiary dark:border-dark-tertiary"
              } bg-light-background dark:bg-dark-background text-light-textPrimary dark:text-dark-textPrimary focus:outline-none focus:ring-2 focus:ring-light-primary dark:focus:ring-dark-primary`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Message Field */}
          <div>
            <textarea
              rows={4}
              placeholder="Your Message"
              {...register("message")}
              className={`w-full px-4 py-3 rounded-lg border transition ${
                errors.message
                  ? "border-red-500"
                  : "border-light-tertiary dark:border-dark-tertiary"
              } bg-light-background dark:bg-dark-background text-light-textPrimary dark:text-dark-textPrimary focus:outline-none focus:ring-2 focus:ring-light-primary dark:focus:ring-dark-primary`}
            />
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">
                {errors.message.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.05 }}
            disabled={isSubmitting}
            type="submit"
            className="w-full py-3 rounded-lg font-semibold transition-colors bg-light-primary text-white dark:bg-dark-primary hover:bg-opacity-90 disabled:opacity-50"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </motion.button>
        </form>
      </motion.div>
    </section>
  );
};

export default Contact;

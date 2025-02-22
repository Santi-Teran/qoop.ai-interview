"use client"
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ThemeChanger from "./ThemeChanger";

const Navbar = () => {

  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      className={`fixed top-0 left-0 w-full px-6 py-4 flex justify-between items-center transition-all z-50 ${
        scrolled
          ? "backdrop-blur-md bg-white/50 dark:bg-black/50 shadow-md"
          : "bg-transparent"
      }`}
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
    >
      {/* Logo */}
      <h1 className="text-xl font-bold">SmartTracker</h1>

      {/* Menú en Desktop */}
      <ul className="hidden md:flex gap-6 text-light-textPrimary dark:text-dark-textPrimary">
        <li className="cursor-pointer hover:text-light-primary dark:hover:text-dark-primary transition">Home</li>
        <li className="cursor-pointer hover:text-light-primary dark:hover:text-dark-primary transition">About</li>
        <li className="cursor-pointer hover:text-light-primary dark:hover:text-dark-primary transition">Features</li>
        <li className="cursor-pointer hover:text-light-primary dark:hover:text-dark-primary transition">Pricing</li>
        <li className="cursor-pointer hover:text-light-primary dark:hover:text-dark-primary transition">Contact</li>
      </ul>

      <div className="flex items-center">
        {/* Botón de Modo Oscuro/Claro */}
        <ThemeChanger />

        {/* Icono de Menú en Mobile */}
        <button className="md:hidden p-2" onClick={toggleMenu}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Menú Lateral para Mobile */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed top-0 right-0 w-full h-full bg-light-background dark:bg-dark-background shadow-lg flex flex-col p-6 z-50"
          >
            {/* Cerrar Menú */}
            <button className="self-end mr-2 mb-6 text-light-textPrimary dark:text-dark-textPrimary" onClick={toggleMenu}>
              <X size={28} />
            </button>

            {/* Links del Menú */}
            <ul className="flex flex-col gap-6 text-lg text-light-textSecondary dark:text-dark-textSecondary">
              <li className="cursor-pointer hover:text-light-primary dark:hover:text-dark-primary transition">Home</li>
              <li className="cursor-pointer hover:text-light-primary dark:hover:text-dark-primary transition">About</li>
              <li className="cursor-pointer hover:text-light-primary dark:hover:text-dark-primary transition">Features</li>
              <li className="cursor-pointer hover:text-light-primary dark:hover:text-dark-primary transition">Pricing</li>
              <li className="cursor-pointer hover:text-light-primary dark:hover:text-dark-primary transition">Contact</li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;

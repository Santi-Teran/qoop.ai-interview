import { Github, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-500 bg-opacity-40 backdrop-filter backdrop-blur-lg text-white w-full py-2">
      <div className="px-12 flex flex-col md:flex-row items-center justify-between">
        {/* Copyright */}
        <div className="flex items-center mb-3 md:mb-0">
          <span className="text-2xl mr-2">&copy;</span>
          <p className="text-sm">2025 Santiago Teran. Done with ⚡</p>
        </div>

        {/* Social Links */}
        <ul className="flex gap-4">
          <Link
            href="https://github.com/Santi-Teran"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-gray-300 transition"
          >
            <Github size={24} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/santi-teran/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-gray-300 transition"
          >
            <Linkedin size={24} />
          </Link>
          <Link
            href="https://www.instagram.com/santii.teran/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:text-gray-300 transition"
          >
            <Instagram size={24} />
          </Link>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;

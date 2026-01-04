import React from "react";
import Link from "next/link";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 py-10 border-t border-gray-900">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl font-bold text-white mb-6">Muhammad Abdullah</h2>
        <div className="flex justify-center space-x-6 mb-8">
          <Link
            href="https://linkedin.com/in/abdullah-programming"
            target="_blank"
            className="hover:text-cyan-400 transition-colors text-2xl"
          >
            <FaLinkedin />
          </Link>
          <Link
            href="https://github.com/abdullah-programming"
            target="_blank"
            className="hover:text-cyan-400 transition-colors text-2xl"
          >
            <FaGithub />
          </Link>
          <Link
            href="https://instagram.com/abdullah_programming"
            target="_blank"
            className="hover:text-cyan-400 transition-colors text-2xl"
          >
            <FaInstagram />
          </Link>
        </div>
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Muhammad Abdullah. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

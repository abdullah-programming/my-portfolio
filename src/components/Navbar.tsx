"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";
import { FaSun, FaMoon, FaGlobe, FaChevronDown } from "react-icons/fa";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { useLanguage } from "@/context/LanguageContext";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const { language, setLanguage, t, dir } = useLanguage();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: t.nav.home, href: "/" },
    { name: t.nav.about, href: "/about" },
    { name: t.nav.skills, href: "/skills" },
    { name: t.nav.portfolio, href: "/portfolio" },
    { name: t.nav.achievements, href: "/achievements" },
    { name: t.nav.contact, href: "/contact" },
  ];

  if (!mounted) return null; // Avoid hydration mismatch for theme

  return (
    <>
      <nav
        dir={dir}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-gray-200 dark:border-white/10 py-4"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="group relative">
              <span className="text-xl font-bold font-poppins text-gray-900 dark:text-white tracking-wider group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                M. ABDULLAH
              </span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-600 dark:bg-cyan-400 transition-all group-hover:w-full"></span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-1 rtl:space-x-reverse">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="relative px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-white transition-colors group"
                  >
                    {isActive && (
                      <motion.div
                        layoutId="navbar-indicator"
                        className="absolute inset-0 bg-gray-200 dark:bg-white/10 rounded-full"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                    <span className="relative z-10">{item.name}</span>
                  </Link>
                );
              })}
            </div>

            {/* Controls */}
            <div className="hidden md:flex items-center gap-4">
                 {/* Theme Toggle */}
                <button
                    onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                    className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-yellow-400 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
                >
                    {theme === "dark" ? <FaSun size={18} /> : <FaMoon size={18} />}
                </button>

                {/* Lang Toggle */}
                <div className="relative">
                    <button 
                        onClick={() => setLangMenuOpen(!langMenuOpen)}
                        className="flex items-center gap-1 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-white/5 transition-colors"
                    >
                        <FaGlobe size={18} className="text-gray-700 dark:text-gray-300" />
                        <span className="uppercase text-sm font-medium text-gray-700 dark:text-gray-300">{language}</span>
                        <FaChevronDown size={12} className="text-gray-500" />
                    </button>
                    
                    {langMenuOpen && (
                        <div className="absolute top-full right-0 mt-2 w-32 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg shadow-xl overflow-hidden">
                            {['en', 'ur', 'ar', 'hi'].map((lang) => (
                                <button
                                    key={lang}
                                    onClick={() => {
                                        setLanguage(lang as any);
                                        setLangMenuOpen(false);
                                    }}
                                    className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors ${language === lang ? 'text-cyan-600 font-bold' : 'text-gray-700 dark:text-gray-300'}`}
                                >
                                    {lang === 'en' ? 'English' : lang === 'ur' ? 'Urdu' : lang === 'ar' ? 'Arabic' : 'Hindi'}
                                </button>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center gap-4">
                 <button
                    onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                    className="p-2 text-gray-800 dark:text-yellow-400"
                >
                    {theme === "dark" ? <FaSun size={20} /> : <FaMoon size={20} />}
                </button>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-800 dark:text-white hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors p-2"
              >
                {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed inset-0 z-40 bg-white dark:bg-black/95 backdrop-blur-xl md:hidden flex flex-col items-center justify-center space-y-8"
          >
            {navItems.map((item, index) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + index * 0.1 }}
              >
                <Link
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-2xl font-bold ${
                    pathname === item.href ? "text-cyan-600 dark:text-cyan-400" : "text-gray-900 dark:text-white"
                  } hover:text-cyan-500 transition-colors`}
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
             {/* Mobile Lang Selector */}
             <div className="flex gap-4 mt-8">
                {['en', 'ur', 'ar', 'hi'].map((lang) => (
                    <button
                        key={lang}
                        onClick={() => setLanguage(lang as any)}
                        className={`px-3 py-1 rounded border ${language === lang ? 'border-cyan-500 text-cyan-500' : 'border-gray-500 text-gray-500'}`}
                    >
                        {lang.toUpperCase()}
                    </button>
                ))}
             </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

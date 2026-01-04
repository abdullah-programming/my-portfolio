"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { useLanguage } from "@/context/LanguageContext";

const Hero = () => {
  const { t, dir } = useLanguage();

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden bg-gradient-to-b from-blue-900 via-gray-100 to-white dark:from-blue-950 dark:via-gray-950 dark:to-black transition-colors duration-500"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-blue-400/20 dark:bg-blue-600/10 rounded-full blur-[120px]" 
        />
        <motion.div 
          animate={{ scale: [1, 1.3, 1], rotate: [0, -60, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-cyan-400/20 dark:bg-cyan-500/10 rounded-full blur-[120px]" 
        />
      </div>

      <div className="container mx-auto px-4 text-center z-10" dir={dir}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h2 className="text-xl md:text-2xl font-light text-cyan-600 dark:text-cyan-400 mb-4 tracking-widest uppercase">
            {t.hero.greeting}
          </h2>
          <h1 className="text-5xl md:text-8xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 drop-shadow-[0_0_20px_rgba(6,182,212,0.3)]">
              {t.hero.name}
            </span>
          </h1>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="inline-block mb-8 px-4 py-1 rounded-full border border-cyan-500/30 bg-cyan-100/50 dark:bg-cyan-900/10 backdrop-blur-sm text-cyan-600 dark:text-cyan-400 text-sm tracking-wider uppercase font-semibold"
          >
            {t.hero.role}
          </motion.div>

          <p className="text-lg md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed font-light">
            {t.hero.description}
          </p>

          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <Link
              href="/portfolio"
              className="group relative px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-full font-bold transition-all hover:shadow-[0_0_40px_rgba(8,145,178,0.6)] hover:scale-105 overflow-hidden"
            >
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              <span className="relative flex items-center gap-2">
                {t.hero.cta} <FaArrowRight className="group-hover:translate-x-1 transition-transform rtl:rotate-180" />
              </span>
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 bg-white/50 dark:bg-white/5 border border-gray-200 dark:border-white/10 backdrop-blur-md text-gray-800 dark:text-white rounded-full font-bold hover:bg-white/80 dark:hover:bg-white/10 transition-all hover:shadow-[0_0_20px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:scale-105"
            >
              {t.hero.contact}
            </Link>
          </div>
        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 2, duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-500 dark:text-gray-500 flex flex-col items-center gap-2"
      >
        <span className="text-xs uppercase tracking-widest">{t.hero.scroll}</span>
        <div className="w-0.5 h-12 bg-gradient-to-b from-cyan-500 to-transparent" />
      </motion.div>
    </section>
  );
};

export default Hero;

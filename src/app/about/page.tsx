"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const timeline = [
  { year: "2026", title: "B.Sc. Applied Computing", description: "Expected graduation from UET Lahore." },
  { year: "2023", title: "Founded Weblopy", description: "Launched digital agency serving international clients." },
  { year: "2022", title: "LivePure & Purion", description: "Started managing operations and branding for water filter brands." },
  { year: "2021", title: "F.Sc. Pre-Engineering", description: "Built strong analytical foundation." },
];

const AboutPage = () => {
  return (
    <main className="pt-24 min-h-screen bg-gray-50 dark:bg-black transition-colors duration-300">
      <section className="container mx-auto px-4 mb-20">
        <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2">
                <div className="relative h-[400px] w-full rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 shadow-xl">
                    <Image
                        src="/images/Gemini_Generated_Image_v5q2e1v5q2e1v5q2.png"
                        alt="About Me"
                        fill
                        className="object-cover"
                    />
                     <div className="absolute inset-0 bg-gradient-to-t from-white/10 dark:from-black via-transparent to-transparent opacity-60" />
                </div>
            </div>
            <div className="w-full md:w-1/2">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                    About <span className="text-cyan-600 dark:text-cyan-400">Me</span>
                </h1>
                <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-6">
                    I am Muhammad Abdullah, a technologist and entrepreneur with a passion for building systems that solve real-world problems.
                    Currently pursuing my B.Sc. in Applied Computing at UET Lahore, I combine academic rigor with practical business experience.
                </p>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    My journey started with biology but quickly pivoted to engineering and computing as I discovered my love for logic and creation.
                    Today, I run Weblopy, a digital agency, and manage operations for Purion and LivePure.
                </p>
            </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="container mx-auto px-4 pb-20">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">My Journey</h2>
        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-cyan-500 before:to-transparent">
            {timeline.map((item, index) => (
                <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border border-cyan-500 bg-white dark:bg-black shadow-[0_0_10px_rgba(6,182,212,0.5)] shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                        <div className="w-3 h-3 bg-cyan-500 dark:bg-cyan-400 rounded-full" />
                    </div>
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 bg-white dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800 rounded-xl hover:border-cyan-500/30 transition-colors shadow-sm dark:shadow-none">
                        <div className="flex items-center justify-between mb-2">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white">{item.title}</h3>
                            <span className="text-cyan-600 dark:text-cyan-400 font-mono text-sm">{item.year}</span>
                        </div>
                        <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
                    </div>
                </div>
            ))}
        </div>
      </section>
    </main>
  );
};

export default AboutPage;

"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaPython, FaWordpress, FaHtml5, FaCss3Alt, FaJs, FaReact } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiTypescript } from "react-icons/si";

const skills = [
  { name: "Python", icon: FaPython, color: "text-yellow-400" },
  { name: "WordPress", icon: FaWordpress, color: "text-blue-500" },
  { name: "HTML5", icon: FaHtml5, color: "text-orange-500" },
  { name: "CSS3", icon: FaCss3Alt, color: "text-blue-400" },
  { name: "JavaScript", icon: FaJs, color: "text-yellow-300" },
  { name: "TypeScript", icon: SiTypescript, color: "text-blue-600" },
  { name: "React / Next.js", icon: SiNextdotjs, color: "text-white" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-400" },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-black relative overflow-hidden transition-colors duration-300">
        {/* Background Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-blue-200/50 dark:bg-blue-900/20 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600 dark:from-cyan-400 dark:to-blue-600">Arsenal</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
            The tools and technologies I use to bring ideas to life.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={item}
              className="bg-white dark:bg-gray-900/50 backdrop-blur-sm border border-gray-200 dark:border-gray-800 p-8 rounded-2xl flex flex-col items-center justify-center hover:border-cyan-500/50 hover:shadow-xl dark:hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] transition-all duration-300 group"
            >
              <div className={`text-5xl mb-4 ${skill.color} drop-shadow-md group-hover:scale-110 transition-transform duration-300`}>
                <skill.icon />
              </div>
              <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-200 group-hover:text-cyan-600 dark:group-hover:text-white transition-colors">
                {skill.name}
              </h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;

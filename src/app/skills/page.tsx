"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaPython, FaWordpress, FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiTypescript, SiPostgresql, SiMongodb, SiFigma, SiVercel } from "react-icons/si";

const categories = [
  {
    title: "Frontend Development",
    skills: [
      { name: "React", icon: FaReact, color: "text-cyan-400" },
      { name: "Next.js", icon: SiNextdotjs, color: "text-white" },
      { name: "TypeScript", icon: SiTypescript, color: "text-blue-500" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-300" },
      { name: "HTML5", icon: FaHtml5, color: "text-orange-500" },
      { name: "CSS3", icon: FaCss3Alt, color: "text-blue-400" },
      { name: "JavaScript", icon: FaJs, color: "text-yellow-400" },
    ]
  },
  {
    title: "Backend & Systems",
    skills: [
      { name: "Python", icon: FaPython, color: "text-yellow-300" },
      { name: "Node.js", icon: FaNodeJs, color: "text-green-500" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-300" },
      { name: "MongoDB", icon: SiMongodb, color: "text-green-400" },
      { name: "WordPress", icon: FaWordpress, color: "text-blue-500" },
    ]
  },
  {
    title: "Tools & DevOps",
    skills: [
        { name: "Git", icon: FaGitAlt, color: "text-orange-600" },
        { name: "Vercel", icon: SiVercel, color: "text-white" },
        { name: "Figma", icon: SiFigma, color: "text-purple-400" },
    ]
  }
];

const SkillsPage = () => {
  return (
    <main className="pt-24 min-h-screen bg-gray-50 dark:bg-black transition-colors duration-300">
      <div className="container mx-auto px-4 pb-20">
        <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
                Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600 dark:from-cyan-400 dark:to-blue-600">Expertise</span>
            </h1>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
                A comprehensive look at the technologies I use to build scalable solutions.
            </p>
        </div>

        <div className="space-y-16">
            {categories.map((category, idx) => (
                <div key={idx}>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 border-l-4 border-cyan-500 pl-4">{category.title}</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
                        {category.skills.map((skill, sIdx) => (
                            <motion.div
                                key={sIdx}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.3, delay: sIdx * 0.05 }}
                                viewport={{ once: true }}
                                className="bg-white dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800 p-6 rounded-xl flex flex-col items-center justify-center hover:border-cyan-500/50 hover:shadow-lg dark:hover:bg-gray-800 transition-all group"
                            >
                                <div className={`text-4xl mb-4 ${skill.color} group-hover:scale-110 transition-transform`}>
                                    <skill.icon />
                                </div>
                                <span className="text-gray-700 dark:text-gray-300 font-medium group-hover:text-cyan-600 dark:group-hover:text-white">{skill.name}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
      </div>
    </main>
  );
};

export default SkillsPage;

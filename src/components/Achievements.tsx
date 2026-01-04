"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaTrophy, FaCertificate, FaGraduationCap } from "react-icons/fa";

const achievements = [
  {
    title: "Applied Computing (B.Sc.)",
    organization: "UET Lahore",
    date: "Present",
    description: "Pursuing a degree with a focus on software engineering and data science.",
    icon: FaGraduationCap,
    color: "text-blue-500",
  },
  {
    title: "Founder of Weblopy",
    organization: "Weblopy Agency",
    date: "2023 - Present",
    description: "Successfully managed 70+ projects delivering web development and SEO services.",
    icon: FaTrophy,
    color: "text-yellow-500",
  },
  {
    title: "Full Stack Development",
    organization: "Online Certification",
    date: "2024",
    description: "Mastered modern web stack including React, Next.js, and Node.js.",
    icon: FaCertificate,
    color: "text-green-500",
  },
];

const Achievements = () => {
  return (
    <section id="achievements" className="py-20 bg-gray-50 dark:bg-gray-950 relative transition-colors duration-300">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Achievements & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-600">Certifications</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
             Milestones in my professional and academic journey.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {achievements.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 p-8 rounded-2xl hover:border-blue-500/50 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] transition-all group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4 opacity-5 dark:opacity-10 group-hover:opacity-10 dark:group-hover:opacity-20 transition-opacity text-gray-900 dark:text-white">
                <item.icon size={100} />
              </div>
              <div className={`text-4xl mb-6 ${item.color}`}>
                <item.icon />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{item.title}</h3>
              <p className="text-blue-600 dark:text-blue-400 font-medium mb-4">{item.organization}</p>
              <p className="text-gray-500 text-sm mb-4">{item.date}</p>
              <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;

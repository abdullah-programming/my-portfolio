"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "LifeLink",
    description: "A sophisticated blood bank management system utilizing Python-based file handling for secure and efficient data management.",
    image: "https://placehold.co/600x400/1e1e2e/06b6d4?text=LifeLink",
    link: "#",
    tags: ["Python", "File Handling", "System Architecture"],
  },
  {
    title: "Weblopy",
    description: "A premium digital agency website delivering high-quality web development and SEO services to international markets.",
    image: "https://placehold.co/600x400/1e1e2e/06b6d4?text=Weblopy",
    link: "https://www.weblopy.com",
    tags: ["Agency", "Web Dev", "SEO", "Next.js"],
  },
  {
    title: "Purion",
    description: "E-commerce platform and brand identity for a leading water filter brand, featuring integrated digital marketing strategies.",
    image: "https://placehold.co/600x400/1e1e2e/06b6d4?text=Purion",
    link: "https://www.purionfilter.net",
    tags: ["E-commerce", "Branding", "Operations"],
  },
  {
    title: "LivePure",
    description: "Comprehensive digital presence for LivePure, managing digital marketing and business operations.",
    image: "https://placehold.co/600x400/1e1e2e/06b6d4?text=LivePure",
    link: "https://www.livepurefilters.net",
    tags: ["Marketing", "Business", "Management"],
  },
  {
    title: "PentaPure",
    description: "Another successful venture in the water filtration industry, optimizing business processes and online reach.",
    image: "https://placehold.co/600x400/1e1e2e/06b6d4?text=PentaPure",
    link: "https://www.pentapure.net",
    tags: ["Filters", "Lahore", "Business"],
  },
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
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 }
};

const ProjectGrid = () => {
  return (
    <section className="py-20 min-h-screen bg-transparent">
      <div className="container mx-auto px-4">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
        >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
                Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600 dark:from-cyan-400 dark:to-blue-600">Projects</span>
            </h1>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
                A curated selection of my work in software development, branding, and business operations.
            </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={item}
              className="group bg-white dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800 rounded-2xl overflow-hidden hover:border-cyan-500/50 hover:shadow-xl dark:hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] transition-all duration-300 flex flex-col"
            >
              <div className="relative h-56 w-full overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  unoptimized
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Link href={project.link} target="_blank" className="bg-white text-black px-6 py-2 rounded-full font-bold flex items-center gap-2 hover:bg-cyan-400 transition-colors">
                        Visit Site <FaExternalLinkAlt />
                    </Link>
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 flex-1">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs bg-cyan-100 dark:bg-cyan-900/30 text-cyan-800 dark:text-cyan-300 px-3 py-1 rounded-full border border-cyan-200 dark:border-cyan-500/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectGrid;

"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectCoverflow, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const Projects = () => {
  const projects = [
    {
      title: "LifeLink",
      description: "A sophisticated blood bank management system.",
      image: "https://placehold.co/600x400/111827/06b6d4?text=LifeLink",
      link: "#",
      tags: ["Python", "File Handling", "System"],
    },
    {
      title: "Weblopy",
      description: "Digital agency delivering high-quality web development and SEO.",
      image: "https://placehold.co/600x400/111827/06b6d4?text=Weblopy", // Placeholder as no image provided
      link: "https://www.weblopy.com",
      tags: ["Agency", "Web Dev", "SEO"],
    },
    {
      title: "Purion",
      description: "Water filter brand with integrated digital marketing strategies.",
      image: "https://placehold.co/600x400/111827/06b6d4?text=Purion", // Placeholder
      link: "https://www.purionfilter.net",
      tags: ["E-commerce", "Branding", "Operations"],
    },
    {
      title: "LivePure",
      description: "Managing digital marketing and operations for water filters.",
      image: "https://placehold.co/600x400/111827/06b6d4?text=LivePure", // Placeholder
      link: "https://www.livepurefilters.net",
      tags: ["Marketing", "Business", "Management"],
    },
    {
      title: "PentaPure",
      description: "Another successful venture in the water filtration industry.",
      image: "https://placehold.co/600x400/111827/06b6d4?text=PentaPure", // Placeholder
      link: "https://www.pentapure.net",
      tags: ["Filters", "Lahore", "Business"],
    },
  ];

  return (
    <section id="portfolio" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            My Portfolio
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A showcase of my projects, ranging from digital agencies to specialized
            business solutions.
          </p>
        </motion.div>

        <Swiper
          modules={[Navigation, Pagination, EffectCoverflow, Autoplay]}
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={false}
          slidesPerView={1}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 50,
            modifier: 1,
            slideShadows: false,
          }}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          className="w-full py-10"
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
            1280: {
              slidesPerView: 4,
            },
          }}
        >
          {projects.map((project, index) => (
            <SwiperSlide
              key={index}
              className="bg-gray-800 rounded-xl overflow-hidden shadow-lg border border-gray-700 max-w-sm"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  unoptimized // For external placeholders
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 h-12 overflow-hidden">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs bg-cyan-900/50 text-cyan-300 px-2 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Link
                  href={project.link}
                  target="_blank"
                  className="inline-block w-full text-center py-2 bg-cyan-600 hover:bg-cyan-500 text-white rounded transition-colors"
                >
                  View Project
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Projects;

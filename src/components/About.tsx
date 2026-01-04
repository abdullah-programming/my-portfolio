"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-950">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center gap-12"
        >
          {/* Image Section */}
          <div className="w-full md:w-1/3 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-cyan-500/30 shadow-2xl shadow-cyan-500/20">
              <Image
                src="/images/Gemini_Generated_Image_v5q2e1v5q2e1v5q2.png"
                alt="Muhammad Abdullah"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Text Section */}
          <div className="w-full md:w-2/3">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 border-l-4 border-cyan-500 pl-4">
              About Me
            </h2>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                Muhammad Abdullah is a driven technologist and entrepreneur
                currently pursuing a B.Sc. in Applied Computing at the
                University of Engineering and Technology (UET), Lahore. With a
                solid academic foundation in F.Sc. Pre-Engineering and an
                earlier focus on biology during his Matriculation, he possesses
                a unique analytical perspective that he applies to complex
                software and business challenges.
              </p>
              <p>
                As the founder of the digital agency <strong>Weblopy</strong>,
                Abdullah has successfully managed over 70 projects, delivering
                high-quality web development and SEO services to international
                markets such as Dubai.
              </p>
              <p>
                Parallel to his agency work, he manages his own water filter
                brands, <strong>Purion</strong> and <strong>LivePure</strong>,
                where he spearheads the digital marketing strategies, branding,
                and operations for the Lahore-based business. His technical
                repertoire includes proficiency in Python, WordPress, HTML, and
                CSS.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

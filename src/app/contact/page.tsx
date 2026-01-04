"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { FaEnvelope, FaGithub, FaInstagram } from "react-icons/fa";
import Link from "next/link";

const ContactPage = () => {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm();
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const onSubmit = async (data: any) => {
    setSuccess(false);
    setError(false);
    
    try {
      // Mocking submission
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setSuccess(true);
      reset();
    } catch (err) {
      setError(true);
    }
  };

  const contactMethods = [
    {
      name: "Email",
      value: "m.abdullah142@hotmail.com",
      link: "mailto:m.abdullah142@hotmail.com",
      icon: FaEnvelope,
      color: "text-cyan-400",
      bg: "bg-cyan-500/10",
      border: "border-cyan-500/30"
    },
    {
      name: "GitHub",
      value: "abdullah-programming",
      link: "https://github.com/abdullah-programming",
      icon: FaGithub,
      color: "text-purple-400",
      bg: "bg-purple-500/10",
      border: "border-purple-500/30"
    },
    {
      name: "Instagram",
      value: "@abdullah_programming",
      link: "https://instagram.com/abdullah_programming",
      icon: FaInstagram,
      color: "text-pink-400",
      bg: "bg-pink-500/10",
      border: "border-pink-500/30"
    }
  ];

  return (
    <main className="pt-24 min-h-screen bg-gradient-to-b from-gray-950 to-black relative overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Collaborate</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Have a project in mind? Reach out via email or social media, or send me a message directly.
          </p>
        </motion.div>

        {/* Big Boxes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {contactMethods.map((method, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
                <Link 
                    href={method.link} 
                    target="_blank"
                    className={`block p-8 rounded-2xl border ${method.border} ${method.bg} backdrop-blur-sm hover:scale-105 transition-transform duration-300 group`}
                >
                    <div className={`text-5xl mb-6 ${method.color} group-hover:scale-110 transition-transform`}>
                        <method.icon />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{method.name}</h3>
                    <p className="text-gray-300 font-mono text-sm break-words">{method.value}</p>
                </Link>
            </motion.div>
          ))}
        </div>

        {/* Contact Form */}
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto bg-gray-900/50 dark:bg-gray-900/50 p-8 md:p-12 rounded-3xl border border-gray-200 dark:border-gray-800 shadow-2xl backdrop-blur-xl mb-20"
        >
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Send Me a Message</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-gray-400 mb-2 text-sm font-medium">Your Name</label>
                        <input
                            {...register("name", { required: true })}
                            className="w-full bg-black/50 border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors"
                            placeholder="John Doe"
                        />
                         {errors.name && <span className="text-red-500 text-xs mt-1">Name is required</span>}
                    </div>
                    <div>
                        <label className="block text-gray-400 mb-2 text-sm font-medium">Your Email</label>
                        <input
                            {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
                            className="w-full bg-black/50 border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors"
                            placeholder="john@example.com"
                        />
                        {errors.email && <span className="text-red-500 text-xs mt-1">Valid email is required</span>}
                    </div>
                </div>
                <div>
                    <label className="block text-gray-400 mb-2 text-sm font-medium">Your Message</label>
                    <textarea
                        rows={6}
                        {...register("message", { required: true })}
                        className="w-full bg-black/50 border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors"
                        placeholder="Tell me about your project..."
                    />
                    {errors.message && <span className="text-red-500 text-xs mt-1">Message is required</span>}
                </div>
                
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-bold py-4 rounded-xl transition-all transform hover:scale-[1.01] shadow-lg shadow-cyan-900/20 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {isSubmitting ? "Sending..." : "Send Message"}
                </button>

                {success && (
                    <div className="p-4 bg-green-500/10 text-green-400 rounded-xl text-center border border-green-500/20">
                        Message sent successfully! I will get back to you shortly.
                    </div>
                )}
                 {error && (
                    <div className="p-4 bg-red-500/10 text-red-400 rounded-xl text-center border border-red-500/20">
                        Failed to send message. Please try again.
                    </div>
                )}
            </form>
        </motion.div>
      </div>
    </main>
  );
};

export default ContactPage;

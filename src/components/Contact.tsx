"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  // Web3Forms endpoint (Mocked for Demo)
  const onSubmit = async (data: any) => {
    setSuccess(false);
    setError(false);
    
    // TODO: For production, replace with your actual Web3Forms Access Key.
    // Go to https://web3forms.com/ to get your free access key.
    // const access_key = "YOUR_ACCESS_KEY_HERE"; 

    try {
      // Mocking successful submission for demo purposes
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      // Uncomment the block below for real implementation
      /*
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ ...data, access_key }),
      });

      const result = await response.json();

      if (result.success) {
        setSuccess(true);
        reset();
      } else {
        setError(true);
      }
      */
     
      // Simulating success
      setSuccess(true);
      reset();
    } catch (err) {
      setError(true);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-950">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Get In Touch
            </h2>
            <p className="text-gray-400">
              Have a project in mind or want to collaborate? I'd love to hear
              from you.
            </p>
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-gray-900/50 p-8 rounded-2xl border border-gray-800 shadow-xl"
          >
             {/* Hidden Access Key Input for Web3Forms if needed directly */}
             <input type="hidden" value="YOUR_ACCESS_KEY_HERE" {...register("access_key")} />

            <div className="mb-6">
              <label className="block text-gray-300 mb-2 font-medium">
                Name
              </label>
              <input
                type="text"
                {...register("name", { required: "Name is required" })}
                className={`w-full bg-gray-800 border ${
                  errors.name ? "border-red-500" : "border-gray-700"
                } text-white rounded-lg px-4 py-3 focus:outline-none focus:border-cyan-500 transition-colors`}
                placeholder="Your Name"
              />
              {errors.name && (
                <span className="text-red-500 text-sm mt-1">
                  {String(errors.name.message)}
                </span>
              )}
            </div>

            <div className="mb-6">
              <label className="block text-gray-300 mb-2 font-medium">
                Email
              </label>
              <input
                type="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Invalid email address",
                  },
                })}
                className={`w-full bg-gray-800 border ${
                  errors.email ? "border-red-500" : "border-gray-700"
                } text-white rounded-lg px-4 py-3 focus:outline-none focus:border-cyan-500 transition-colors`}
                placeholder="your.email@example.com"
              />
              {errors.email && (
                <span className="text-red-500 text-sm mt-1">
                  {String(errors.email.message)}
                </span>
              )}
            </div>

            <div className="mb-6">
              <label className="block text-gray-300 mb-2 font-medium">
                Message
              </label>
              <textarea
                rows={5}
                {...register("message", { required: "Message is required" })}
                className={`w-full bg-gray-800 border ${
                  errors.message ? "border-red-500" : "border-gray-700"
                } text-white rounded-lg px-4 py-3 focus:outline-none focus:border-cyan-500 transition-colors`}
                placeholder="Tell me about your project..."
              ></textarea>
              {errors.message && (
                <span className="text-red-500 text-sm mt-1">
                  {String(errors.message.message)}
                </span>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-cyan-600 hover:bg-cyan-500 text-white font-bold py-3 rounded-lg transition-all transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>

            {success && (
              <div className="mt-4 p-4 bg-green-900/30 text-green-400 rounded-lg text-center">
                Message sent successfully! I'll get back to you soon.
              </div>
            )}

            {error && (
              <div className="mt-4 p-4 bg-red-900/30 text-red-400 rounded-lg text-center">
                Something went wrong. Please try again later.
              </div>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;

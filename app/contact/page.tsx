"use client";

import { useState } from "react";
import Link from "next/link";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <main className="min-h-screen bg-[#0d0d0d] px-6 py-24">
      {/* Back Link */}
      <div className="max-w-2xl mx-auto mb-12">
        <Link
          href="/"
          className="text-white/50 hover:text-white/80 transition-colors text-sm flex items-center gap-2"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back to Home
        </Link>
      </div>

      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-cyan-400/80 text-sm font-medium tracking-widest uppercase mb-4">
            Request a Demo
          </p>
          <h1 className="text-4xl md:text-5xl font-semibold text-white/90 tracking-tight mb-4">
            Contact Us
          </h1>
          <p className="text-white/60 text-lg">
            Get in touch with our team to learn more about NeuralCore X1.
          </p>
        </div>

        {isSubmitted ? (
          /* Success State */
          <div className="text-center py-16 px-8 bg-white/[0.02] border border-white/[0.05] rounded-2xl">
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-green-500/20 flex items-center justify-center">
              <svg
                className="w-8 h-8 text-green-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h2 className="text-2xl font-semibold text-white/90 mb-2">
              Thank You!
            </h2>
            <p className="text-white/60 mb-8">
              We&apos;ve received your message and will get back to you shortly.
            </p>
            <Link
              href="/"
              className="inline-block px-8 py-4 bg-white text-black font-medium text-base rounded-full hover:bg-white/90 transition-all duration-300 hover:scale-105 active:scale-95"
            >
              Back to Home
            </Link>
          </div>
        ) : (
          /* Contact Form */
          <form
            onSubmit={handleSubmit}
            className="space-y-6 p-8 bg-white/[0.02] border border-white/[0.05] rounded-2xl"
          >
            {/* Name Field */}
            <div>
              <label
                htmlFor="name"
                className="block text-white/80 text-sm font-medium mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white/[0.05] border border-white/[0.1] rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/50 transition-all"
                placeholder="Your name"
              />
            </div>

            {/* Email Field */}
            <div>
              <label
                htmlFor="email"
                className="block text-white/80 text-sm font-medium mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white/[0.05] border border-white/[0.1] rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/50 transition-all"
                placeholder="your@email.com"
              />
            </div>

            {/* Message Field */}
            <div>
              <label
                htmlFor="message"
                className="block text-white/80 text-sm font-medium mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 bg-white/[0.05] border border-white/[0.1] rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/50 transition-all resize-none"
                placeholder="Tell us about your project and requirements..."
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full px-8 py-4 bg-white text-black font-medium text-base rounded-full hover:bg-white/90 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
            >
              Submit Request
            </button>
          </form>
        )}
      </div>
    </main>
  );
}

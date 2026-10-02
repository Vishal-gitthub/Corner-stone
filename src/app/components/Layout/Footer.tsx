"use client";

import Image from "next/image";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { modalBackdrop, modalContent } from "@/lib/motion/variants";
import MotionButton from "@/components/motion/MotionButton";
import { business, openingHoursForDay, WEEKDAYS } from "@/lib/site";

export default function Footer() {
  const [isSubscribeOpen, setIsSubscribeOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // You can replace this with your actual API endpoint
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert(
          "Thank you for subscribing! You'll receive our latest news and events.",
        );
        setFormData({ name: "", email: "" });
        setIsSubscribeOpen(false);
      } else {
        alert("Failed to subscribe. Please try again later.");
      }
    } catch (error) {
      console.error("Error submitting subscription:", error);
      alert("An error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <footer
        className="bg-blue border-t-2 border-white"
        style={{ backgroundImage: "url(/home/BgTexture.jpg)" }}
        data-reveal
      >
        <div className="container-responsive">
          {/* Logo Section */}
          <Link href="/">
            <div className="flex items-center py-8 justify-center" data-reveal>
              <Image
                src="/logo_gold.png"
                width={200}
                height={200}
                alt="Cornerstone Pub in Port Melbourne"
                className="w-48 md:w-64 h-auto"
              />
            </div>
          </Link>

          {/* Main Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 py-8" data-stagger>
            {/* Newsletter Section */}
            <div className="lg:col-span-1">
              <h3 className="text-lg md:text-xl lg:text-2xl py-2 text-white font-medium heading-aleo">
                Subscribe to our mailing list to receive the latest news and
                events.
              </h3>
              <MotionButton>
                <button
                  onClick={() => setIsSubscribeOpen(true)}
                  className="py-3 px-8 md:px-12 text-white bg-brown rounded-md hover:bg-opacity-90 transition-all duration-300 btn-hover mt-4 font-aleo"
                >
                  Subscribe
                </button>
              </MotionButton>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col gap-4 md:gap-6">
              <div>
                <h3 className="text-lg md:text-xl text-white font-medium mb-2 heading-aleo">
                  Visit Us
                </h3>
                <a href={business.mapsUrl} target="_blank" rel="noopener noreferrer" className="text-white text-lexend hover:text-brown">
                  <address className="not-italic">{business.formattedAddress}</address>
                </a>
              </div>
              <div>
                <h3 className="text-lg md:text-xl text-white font-medium mb-2 heading-aleo">
                  Contact
                </h3>
                <p className="text-white text-lexend">
                  <a href={business.telephoneHref}>{business.displayTelephone}</a>
                  <br />
                  <a href={`mailto:${business.email}`}>
                    {business.email}
                  </a>
                </p>
              </div>
              <div className="flex items-center gap-4">
                <a
                  href="https://www.instagram.com/cornerstone.melb?igsh=NnZpcW4yaHAwZmp4&utm_source=qr"
                  className="text-brown hover:text-white transition-colors duration-300 motion-social"
                  aria-label="Follow us on Instagram"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram className="text-2xl md:text-3xl" />
                </a>
                <a
                  href="https://www.facebook.com/share/1LUEPjPXML/?mibextid=wwXIfr"
                  className="text-brown hover:text-white transition-colors duration-300 motion-social"
                  aria-label="Follow us on Facebook"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebook className="text-2xl md:text-3xl" />
                </a>
              </div>
            </div>

            {/* Opening Hours */}
            <div className="lg:col-span-1">
              <h2 className="uppercase text-white font-semibold pb-3 text-lg md:text-xl heading-aleo">
                Opening Hours
              </h2>

              {/* Days Grid */}
              <div className="grid grid-cols-2 gap-x-10 gap-y-4 text-white">
                {WEEKDAYS.slice(0, 6).map((day) => (
                  <div key={day}>
                    <p className="text-lg font-medium heading-aleo">{day.toUpperCase()}</p>
                    <p className="text-sm md:text-base text-lexend">{openingHoursForDay(day)}</p>
                  </div>
                ))}
              </div>

              {/* Sunday */}
              <div className="mt-4 text-center text-white">
                <p className="text-lg font-medium heading-aleo">SUNDAY</p>
                <p className="text-sm md:text-base text-lexend">{openingHoursForDay("Sunday")}</p>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-white/20 py-6">
            <p className="text-white text-center text-sm md:text-base text-lexend">
              © The Cornerstone Pub, all rights reserved |
              <Link
                href="/privacy-policy"
                className="hover:text-brown transition-colors duration-300 ml-1 text-lexend"
              >
                Privacy Policy
              </Link>
            </p>
          </div>
        </div>
      </footer>

      {/* Subscribe Popup Modal */}
      <AnimatePresence>
      {isSubscribeOpen && (
        <motion.div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          variants={modalBackdrop}
          initial="hidden"
          animate="visible"
          exit="exit"
          onClick={() => setIsSubscribeOpen(false)}
        >
          <motion.div
            className="bg-white rounded-xl shadow-xl p-6 md:p-8 w-full max-w-md relative"
            variants={modalContent}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setIsSubscribeOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl transition-colors duration-300"
              aria-label="Close"
            >
              ✕
            </button>

            {/* Form Header */}
            <div className="mb-6">
              <h2 className="text-2xl md:text-3xl text-blue font-semibold heading-aleo mb-2">
                Subscribe to Our Newsletter
              </h2>
              <p className="text-gray-600 text-lexend">
                Stay updated with our latest news and events
              </p>
            </div>

            {/* Subscribe Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-2 text-lexend"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brown focus:border-transparent text-lexend"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2 text-lexend"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brown focus:border-transparent text-lexend"
                  placeholder="Enter your email"
                />
              </div>

              <div className="flex gap-3 pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 py-3 px-6 text-white bg-brown rounded-md hover:bg-opacity-90 transition-all duration-300 btn-hover font-aleo disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Subscribing..." : "Subscribe"}
                </button>
                <button
                  type="button"
                  onClick={() => setIsSubscribeOpen(false)}
                  className="px-6 py-3 text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300 transition-all duration-300 font-aleo"
                >
                  Cancel
                </button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
      </AnimatePresence>
    </>
  );
}

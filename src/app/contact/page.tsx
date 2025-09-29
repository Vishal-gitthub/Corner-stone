"use client";

import React from "react";
import { FaInstagram, FaTiktok } from "react-icons/fa";

export default function Page() {
  return (
    <main className="bg-blue min-h-screen">
      <div
        className="py-12 md:py-20"
        style={{ backgroundImage: "url(/home/BgTexture.jpg)" }}
      >
        <div className="container-responsive">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Info */}
            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl lg:text-8xl uppercase text-white font-bold">Contact</h1>
              <div className="space-y-4">
                <div>
                  <h2 className="text-white text-lg md:text-xl font-medium mb-2">Phone</h2>
                  <p className="text-white text-base md:text-lg">(03) 9645 5277</p>
                </div>
                <div>
                  <h2 className="text-white text-lg md:text-xl font-medium mb-2">Email</h2>
                  <p className="text-white text-base md:text-lg">info@thealbion.bar</p>
                </div>
                <div>
                  <h2 className="text-white text-lg md:text-xl font-medium mb-2">Address</h2>
                  <p className="text-white text-base md:text-lg">
                    172 York Street,<br />
                    South Melbourne, VIC, 3205
                  </p>
                </div>
                <div>
                  <a
                    href="https://www.google.com/maps?q=172+York+Street,+South+Melbourne,+VIC,+3205"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-brown hover:text-white transition-colors duration-300 text-base md:text-lg font-medium"
                  >
                    View on Google Maps →
                  </a>
                </div>
                <div className="flex items-center gap-4 pt-4">
                  <a 
                    href="#" 
                    className="text-brown hover:text-white transition-colors duration-300"
                    aria-label="Follow us on Instagram"
                  >
                    <FaInstagram className="text-2xl md:text-3xl" />
                  </a>
                  <a 
                    href="#" 
                    className="text-brown hover:text-white transition-colors duration-300"
                    aria-label="Follow us on TikTok"
                  >
                    <FaTiktok className="text-2xl md:text-3xl" />
                  </a>
                </div>
              </div>
            </div>

            {/* Enquiry Form */}
            <div className="space-y-6">
              <h2 className="text-4xl md:text-6xl lg:text-8xl uppercase text-white font-bold">Enquiry</h2>
              <form className="space-y-6">
                {/* Name */}
                <div>
                  <label className="block text-white text-sm md:text-base font-medium mb-3">
                    Name <span className="text-brown">(Required)</span>
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-white text-xs md:text-sm mb-1">
                        First Name
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        required
                        className="form-input"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-white text-xs md:text-sm mb-1">
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        required
                        className="form-input"
                      />
                    </div>
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-white text-sm md:text-base font-medium mb-3">
                    Phone <span className="text-brown">(Required)</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    className="form-input"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-white text-sm md:text-base font-medium mb-3">
                    Email <span className="text-brown">(Required)</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="form-input"
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-white text-sm md:text-base font-medium mb-3">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="form-input resize-vertical min-h-[100px]"
                    placeholder="Tell us how we can help you..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="bg-brown text-white uppercase py-3 px-8 rounded-md hover:bg-opacity-90 transition-all duration-300 btn-hover font-medium"
                >
                  Submit Enquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

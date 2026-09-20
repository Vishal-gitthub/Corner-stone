"use client";

import { FormEvent, useState } from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    const form = event.currentTarget;
    const values = Object.fromEntries(new FormData(form));

    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values, enquiryType: "General website enquiry" }),
      });
      if (!response.ok) throw new Error("Request failed");
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }
  return (
    <main className="bg-blue min-h-screen">
      <div className="h-[95vh] max-sm:h-[50vh] w-full overflow-hidden" data-reveal>
        <Image
          src="/contact/Enquiry.jpg"
          width={4571}
          height={3047}
          sizes="100vw"
          priority
          className="h-full object-top object-cover w-full image-optimized"
          alt="Interior at The Cornerstone Pub in Port Melbourne"
          data-parallax
        />
      </div>
      <div
        className="py-12 mt-2 md:py-20"
        style={{ backgroundImage: "url(/home/BgTexture.jpg)" }}
        data-reveal
      >
        <div className="container-responsive">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12" data-stagger>
            {/* Contact Info */}
            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl lg:text-8xl uppercase text-white font-bold heading-aleo">
                Cont<span className="text-brown">act</span>
              </h1>
              <div className="space-y-4">
                <div>
                  <h2 className="text-white text-lg md:text-xl font-medium mb-2 heading-aleo">
                    Phone
                  </h2>
                  <a href="tel:+61396451405" className="text-white text-base md:text-lg text-lexend hover:text-brown">(03) 9645 1405</a>
                </div>
                <div>
                  <h2 className="text-white text-lg md:text-xl font-medium mb-2 heading-aleo">
                    Email
                  </h2>
                  <a href="mailto:bookings@cornerstonepub.com.au" className="text-white text-base md:text-lg text-lexend hover:text-brown">bookings@cornerstonepub.com.au</a>
                </div>
                <div>
                  <h2 className="text-white text-lg md:text-xl font-medium mb-2 heading-aleo">
                    Address
                  </h2>
                  <address className="not-italic text-white text-base md:text-lg text-lexend">
                    1 Crockford Street, <br /> Port Melbourne, 3207
                  </address>
                </div>
                <div>
                  <h2 className="text-white text-lg md:text-xl font-medium mb-2 heading-aleo">Opening hours</h2>
                  <p className="text-white text-base md:text-lg text-lexend">Monday–Thursday and Sunday: midday–10pm<br />Friday–Saturday: midday–midnight</p>
                  <p className="mt-2 text-sm text-white/75">Kitchen and public-holiday hours may differ; contact the venue to confirm.</p>
                </div>
                <div>
                  <a
                    href="https://maps.app.goo.gl/g97kv5vxhA6FeNdo6"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-brown hover:text-white transition-colors duration-300 text-base md:text-lg font-medium text-lexend"
                  >
                    View on Google Maps →
                  </a>
                </div>
                <div className="flex items-center gap-4 pt-4">
                  <a
                    href="https://www.instagram.com/cornerstone.melb?igsh=NnZpcW4yaHAwZmp4&utm_source=qr"
                    className="text-brown hover:text-white transition-colors duration-300 motion-social"
                    aria-label="Follow us on Instagram"
                    target="_blank"
                  >
                    <FaInstagram className="text-2xl md:text-3xl" />
                  </a>
                  <a
                    href="https://www.facebook.com/share/1LUEPjPXML/?mibextid=wwXIfr"
                    className="text-brown hover:text-white transition-colors duration-300 motion-social"
                    aria-label="Follow us on Facebook"
                    target="_blank"
                  >
                    <FaFacebook className="text-2xl md:text-3xl" />
                  </a>
                </div>
                <div className="flex flex-wrap gap-3 pt-2">
                  <a href="https://www.opentable.com.au/r/the-cornerstone-reservations-port-melbourne?restref=304496&lang=en-AU&ot_source=Restaurant%20website" target="_blank" rel="noopener noreferrer" className="rounded-md bg-brown px-5 py-3 font-medium text-white hover:bg-white hover:text-brown">Book a table</a>
                  <Link href="/events#enquire-section" className="rounded-md border border-white px-5 py-3 font-medium text-white hover:bg-white hover:text-blue">Function enquiry</Link>
                </div>
              </div>
            </div>

            {/* Enquiry Form */}
            <div className="space-y-6">
              <h2 className="text-4xl md:text-6xl lg:text-8xl uppercase text-white font-bold heading-aleo">
                <span className="text-brown">Enq</span>uiry
              </h2>
              <form className="space-y-6" onSubmit={handleSubmit}>
                {/* Name */}
                <div>
                  <label className="block text-white text-sm md:text-base font-medium mb-3 text-lexend">
                    Name <span className="text-brown">(Required)</span>
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                    <div>
                      <label
                        htmlFor="firstName"
                        className="block text-white text-xs md:text-sm mb-1 text-lexend"
                      >
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
                      <label
                        htmlFor="lastName"
                        className="block text-white text-xs md:text-sm mb-1 text-lexend"
                      >
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
                  <label
                    htmlFor="phone"
                    className="block text-white text-sm md:text-base font-medium mb-3 text-lexend"
                  >
                    Phone <span className="text-brown">(Required)</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phoneNumber"
                    required
                    className="form-input"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-white text-sm md:text-base font-medium mb-3 text-lexend"
                  >
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
                  <label
                    htmlFor="message"
                    className="block text-white text-sm md:text-base font-medium mb-3 text-lexend"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="celebrationDescription"
                    rows={4}
                    className="form-input resize-vertical min-h-[100px]"
                    placeholder="Tell us how we can help you..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="bg-brown text-white uppercase py-3 px-8 rounded-md hover:bg-opacity-90 transition-all duration-300 btn-hover font-medium font-aleo"
                >
                  {status === "sending" ? "Sending…" : "Submit Enquiry"}
                </button>
                <p aria-live="polite" className="text-white text-sm">
                  {status === "sent" && "Thanks—your enquiry has been sent."}
                  {status === "error" && "We couldn't send this enquiry. Please call or email the venue instead."}
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

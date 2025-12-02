"use client";

import React, { useState } from "react";

// export const metadata = {
//   title: "Privacy Policy — Cornerstone Pub Port Melbourne",
//   description: "Our commitment to protecting your privacy.",
// };

const sections = [
  "1. Information We Collect",
  "2. How We Use Your Information",
  "3. Cookies & Tracking",
  "4. How We Store & Protect Your Information",
  "5. Disclosure to Third Parties",
  "6. Access & Correction",
  "7. Links to Other Websites",
  "8. Children’s Privacy",
  "9. Updates to This Policy",
  "10. Contact Us",
];

export default function PrivacyPolicyPage() {
  const [showTOC, setShowTOC] = useState(false);

  return (
    <main className="mx-auto max-w-6xl px-6 py-24 text-gray-800">
      {/* ------------------------------ */}
      {/*        PAGE HEADER             */}
      {/* ------------------------------ */}
      <header className="mb-20 text-center">
        <h1 className="text-5xl font-serif tracking-tight text-gray-900">
          Privacy Policy
        </h1>
        <p className="mt-3 text-gray-500 text-sm">
          Last updated: <span className="font-medium">November 2025</span>
        </p>

        <div className="mt-6 mx-auto h-px w-20 bg-gray-300" />
      </header>

      <div className="flex gap-12">
        {/* ------------------------------ */}
        {/*           TOC SIDEBAR          */}
        {/* ------------------------------ */}
        <aside className="hidden lg:block w-64">
          <div className="sticky top-32 border-l pl-6 space-y-4">
            <h3 className="font-serif text-xl text-gray-900 mb-4">
              On this page
            </h3>

            <ul className="space-y-3 text-gray-700">
              {sections.map((label, i) => (
                <li key={i}>
                  <a
                    href={`#s${i + 1}`}
                    className="hover:text-black transition-all text-sm"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        {/* ------------------------------ */}
        {/*          MOBILE TOC            */}
        {/* ------------------------------ */}
        <div className="lg:hidden mb-12 w-full">
          <button
            onClick={() => setShowTOC(!showTOC)}
            className="w-full rounded-md border p-4 bg-gray-50 text-left font-medium"
          >
            {showTOC ? "Hide" : "Show"} Table of Contents
          </button>

          {showTOC && (
            <div className="mt-4 bg-gray-50 border p-4 rounded-md">
              <ul className="space-y-3 text-gray-700">
                {sections.map((label, i) => (
                  <li key={i}>
                    <a
                      onClick={() => setShowTOC(false)}
                      href={`#s${i + 1}`}
                      className="block py-1 hover:text-black transition-all text-sm"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* ------------------------------ */}
        {/*          POLICY CONTENT        */}
        {/* ------------------------------ */}
        <section className="flex-1 space-y-16 leading-relaxed text-lg text-gray-700">

          {/* INTRO */}
          <p className="text-gray-700">
            Cornerstone Pub Port Melbourne (“Cornerstone”, “we”, “our”, “us”) is
            committed to protecting your privacy and ensuring your personal
            information is handled in accordance with the Privacy Act 1988 (Cth)
            and the Australian Privacy Principles (APPs). This Privacy Policy
            outlines how we collect, use, store, and disclose your information
            when you visit our website, make a booking, or interact with us
            online or in-venue.
          </p>

          {/* ----------------------------- */}
          {/* Section 1 */}
          {/* ----------------------------- */}
          <div id="s1">
            <h2 className="font-serif text-3xl font-bold text-gray-900 mb-6">
              1. Information We Collect
            </h2>

            <h3 className="text-xl font-semibold mt-6">
              1.1 Information you provide directly
            </h3>
            <ul className="list-disc ml-6 mt-2 space-y-1">
              <li>Name</li>
              <li>Phone number</li>
              <li>Email address</li>
              <li>Booking details (date, time, number of guests)</li>
              <li>Event enquiry details</li>
              <li>
                Payment details (processed securely by third-party providers; we
                do not store full card information)
              </li>
              <li>Feedback, reviews, or messages</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6">
              1.2 Information collected automatically
            </h3>
            <ul className="list-disc ml-6 mt-2 space-y-1">
              <li>IP address</li>
              <li>Browser type and version</li>
              <li>Device type</li>
              <li>Pages visited</li>
              <li>Time and date of your visit</li>
              <li>Cookies and tracking technologies</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6">
              1.3 Third-party information
            </h3>
            <p className="mt-2">We may receive limited information from:</p>
            <ul className="list-disc ml-6 mt-2 space-y-1">
              <li>Booking platforms – OpenTable</li>
              <li>Social media (Facebook, Instagram, TikTok)</li>
            </ul>
          </div>

          {/* ----------------------------- */}
          {/* Section 2 */}
          {/* ----------------------------- */}
          <div id="s2">
            <h2 className="font-serif text-3xl font-bold text-gray-900 mb-6">
              2. How We Use Your Information
            </h2>
            <ul className="list-disc ml-6 space-y-1">
              <li>Manage table and function bookings</li>
              <li>Respond to enquiries</li>
              <li>Provide customer support</li>
              <li>Process payments</li>
              <li>Improve website performance and experience</li>
              <li>Send marketing communications (with consent)</li>
              <li>Run competitions and promotions</li>
              <li>Ensure venue security and comply with legal obligations</li>
            </ul>
            <p className="italic text-gray-600 mt-4">
              You may opt-out of marketing emails at any time.
            </p>
          </div>

          {/* ----------------------------- */}
          {/* Section 3 */}
          {/* ----------------------------- */}
          <div id="s3">
            <h2 className="font-serif text-3xl font-bold text-gray-900 mb-6">
              3. Cookies & Tracking
            </h2>
            <p>We use cookies to:</p>
            <ul className="list-disc ml-6 mt-2 space-y-1">
              <li>Improve website functionality</li>
              <li>Analyse visitor behaviour</li>
              <li>Personalise your experience</li>
              <li>Support advertising on Meta, Google, and others</li>
            </ul>
          </div>

          {/* ----------------------------- */}
          {/* Section 4 */}
          {/* ----------------------------- */}
          <div id="s4">
            <h2 className="font-serif text-3xl font-bold text-gray-900 mb-6">
              4. How We Store & Protect Your Information
            </h2>
            <p>We use reasonable security measures including:</p>
            <ul className="list-disc ml-6 mt-2 space-y-1">
              <li>Secure servers & encrypted connections</li>
              <li>Restricted staff access</li>
              <li>Regular security updates & monitoring</li>
            </ul>
            <p className="mt-3">
              No method of online transmission is completely secure, and we
              cannot guarantee absolute protection.
            </p>
          </div>

          {/* ----------------------------- */}
          {/* Section 5 */}
          {/* ----------------------------- */}
          <div id="s5">
            <h2 className="font-serif text-3xl font-bold text-gray-900 mb-6">
              5. Disclosure to Third Parties
            </h2>
            <p>We may share your information with:</p>
            <ul className="list-disc ml-6 mt-2 space-y-1">
              <li>Booking and reservation systems</li>
              <li>Payment providers</li>
              <li>Email marketing tools</li>
              <li>Website/IT service providers</li>
              <li>Event partners (with consent)</li>
            </ul>
            <p className="mt-3">
              We do not sell personal data. Information may be disclosed to
              comply with legal obligations.
            </p>
          </div>

          {/* ----------------------------- */}
          {/* Section 6 */}
          {/* ----------------------------- */}
          <div id="s6">
            <h2 className="font-serif text-3xl font-bold text-gray-900 mb-6">
              6. Access & Correction
            </h2>
            <p>You may request to:</p>
            <ul className="list-disc ml-6 mt-2 space-y-1">
              <li>Access your personal information</li>
              <li>Request corrections</li>
              <li>Request deletion (where legally permitted)</li>
            </ul>
          </div>

          {/* ----------------------------- */}
          {/* Section 7 */}
          {/* ----------------------------- */}
          <div id="s7">
            <h2 className="font-serif text-3xl font-bold text-gray-900 mb-6">
              7. Links to Other Websites
            </h2>
            <p>
              Our website may include links to third-party platforms. We are not
              responsible for their privacy practices.
            </p>
          </div>

          {/* ----------------------------- */}
          {/* Section 8 */}
          {/* ----------------------------- */}
          <div id="s8">
            <h2 className="font-serif text-3xl font-bold text-gray-900 mb-6">
              8. Children’s Privacy
            </h2>
            <p>
              Our website is not intended for users under 18. We do not
              knowingly collect information from minors without parental consent.
            </p>
          </div>

          {/* ----------------------------- */}
          {/* Section 9 */}
          {/* ----------------------------- */}
          <div id="s9">
            <h2 className="font-serif text-3xl font-bold text-gray-900 mb-6">
              9. Updates to This Policy
            </h2>
            <p>
              We may update this Privacy Policy. Changes will be posted here
              with a revised date.
            </p>
          </div>

          {/* ----------------------------- */}
          {/* Section 10 */}
          {/* ----------------------------- */}
          <div id="s10">
            <h2 className="font-serif text-3xl font-bold text-gray-900 mb-6">
              10. Contact Us
            </h2>

            <div className="rounded-lg border bg-gray-50 p-6 space-y-1 text-gray-800">
              <p className="font-semibold text-lg font-serif">
                Cornerstone Pub Port Melbourne
              </p>
              <p>1 Crockford Street, Port Melbourne, VIC</p>
              <p>
                Email:{" "}
                <a
                  href="mailto:admin@cornerstonepub.com.au"
                  className="text-blue-600 underline"
                >
                  admin@cornerstonepub.com.au
                </a>
              </p>
              <p>Phone: (03) 9645 1405</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

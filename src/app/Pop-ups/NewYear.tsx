"use client";
import { useState } from "react";

function NewYear() {
  const [open, setOpen] = useState(true);

  if (!open) return null;

  return (
    <>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm animate-fade-in"
        onClick={() => setOpen(false)}
      >
        <div
          className="bg-white rounded-xl shadow-xl p-5 w-[90%] max-w-md animate-scale-in relative"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button */}
          <button
            onClick={() => setOpen(false)}
            className="absolute top-2 right-2 text-gray-500 hover:text-black text-lg"
          >
            ✕
          </button>

          {/* Image */}
          <img
            src="/popups/MothersDay- At corner Stone pub.jpg"
            alt="popup"
            className="rounded-lg w-full mb-5"
          />

          {/* CTA */}
          <a
            href="https://www.opentable.com.au/r/the-cornerstone-reservations-port-melbourne?restref=304496&lang=en-AU&ot_source=Restaurant%20websiteF"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center bg-yellow-800 hover:bg-blue-600 text-white py-2 rounded-lg transition"
          >
            Book a Table
          </a>
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        .animate-fade-in {
          animation: fadeIn 0.25s ease-out;
        }
        .animate-scale-in {
          animation: scaleIn 0.25s ease-out;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes scaleIn {
          from {
            transform: scale(0.9);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }
      `}</style>
    </>
  );
}

export default NewYear;
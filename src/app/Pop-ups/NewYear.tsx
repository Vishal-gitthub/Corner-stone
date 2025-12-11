import { useState } from "react";

function NewYear() {
  const [open, setOpen] = useState(true);

  return (
    <>
      {/* Center container */}
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        {open && (
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center animate-fade-in"
            onClick={() => setOpen(false)}
          >
            <div
              className="bg-white rounded-xl shadow-xl p-5 w-[90%] max-w-md animate-scale-in"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src="/popups/newyear.jpg"
                alt="popup"
                className="rounded-lg w-full mb-5"
              />
              <div className="w-full text-center bg-brown hover:bg-blue text-white py-2 rounded-lg transition">
                <a
                  href="https://www.opentable.com.au/r/the-cornerstone-reservations-port-melbourne?restref=304496&lang=en-AU&ot_source=Restaurant%20websiteF"
                  className="text-center"
                  target="_blank"
                >
                  Book a Table
                </a>
              </div>
              {/* <button
                onClick={() => setOpen(false)}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition"
              >
                Close
              </button> */}
            </div>
          </div>
        )}
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
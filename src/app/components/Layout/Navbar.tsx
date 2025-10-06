"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const navigation = [
    { link: "/", name: "Home" },
    { link: "/club", name: "Club" },
    { link: "/events", name: "Events" },
    { link: "/whatson", name: "Whats-on" },
    { link: "/contact", name: "Contact" },
  ];

  const [toggleMenu, setToggleMenu] = useState(false);

  // lock/unlock body scroll when menu open
  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", toggleMenu);
    return () => document.body.classList.remove("overflow-hidden");
  }, [toggleMenu]);

  return (
    <>
      <nav className="bg-[#cac6c3c0] backdrop-blur-sm fixed top-0 left-0 right-0 z-50 w-full">
        <div className="container-responsive flex items-center justify-between py-3 md:py-4">
          {/* logo */}
          <div className="w-32 md:w-44 min-w-20">
            <Image
              src="/logo.png"
              alt="The Albion Rooftop Logo"
              width={176}
              height={64}
              priority
              className="w-full h-auto"
            />
          </div>

          {/* desktop navigation */}
          <div className="hidden lg:flex gap-6 xl:gap-8 items-center">
            {navigation.map((item, i) => (
              <Link
                key={i}
                href={item.link}
                className="text-blue font-medium hover:text-brown transition-colors duration-300 relative group font-lexend"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brown transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
            <a
              href="https://www.opentable.com.au/r/the-cornerstone-reservations-port-melbourne?restref=304496&lang=en-AU&ot_source=Restaurant%20website"
              className="py-2 px-6 xl:px-9 bg-brown text-white rounded-md hover:bg-opacity-90 transition-all duration-300 btn-hover font-lexend"
              target="_blank"
            >
              Book a Table
            </a>
          </div>

          {/* mobile menu button */}
          <button
            className="lg:hidden z-50 p-2 bg-brown text-white rounded-md hover:bg-opacity-90 transition-all duration-300"
            onClick={() => setToggleMenu(true)}
            aria-label="Open navigation menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </nav>

      {/* mobile menu overlay with backdrop (outside nav to avoid clipping) */}
      {toggleMenu && (
        <div className="fixed inset-0 z-[60] flex h-screen overflow-hidden overscroll-contain">
          {/* semi-transparent backdrop */}
          <div
            className="absolute inset-0 bg-black bg-opacity-40"
            onClick={() => setToggleMenu(false)}
          ></div>

          {/* sliding mobile menu */}
          <div className="relative ml-auto w-4/5 max-w-sm h-full bg-white flex flex-col items-center justify-center gap-6 transition-transform transform overflow-y-auto px-6 py-16">
            <button
              className="absolute top-6 right-6 p-2 bg-brown text-white rounded-md hover:bg-opacity-90 transition-all duration-300"
              onClick={() => setToggleMenu(false)}
              aria-label="Close navigation menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <div className="flex flex-col items-center gap-6 w-full">
              {navigation.map((item, i) => (
                <Link
                  key={i}
                  href={item.link}
                  className="text-2xl md:text-3xl text-blue font-medium hover:text-brown transition-colors duration-300 w-full text-center font-lexend"
                  onClick={() => setToggleMenu(false)}
                >
                  {item.name}
                </Link>
              ))}

              <button
                className="mt-2 py-3 px-10 bg-brown text-white rounded-md hover:bg-opacity-90 transition-all duration-300 btn-hover text-lg w-full max-w-xs font-lexend"
                onClick={() => setToggleMenu(false)}
              >
                Reservation
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;

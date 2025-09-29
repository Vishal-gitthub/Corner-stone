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
    <nav className="bg-[#cac6c3c0] backdrop-blur-sm sticky top-0 z-50">
      {/* fixed top navbar */}
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
              className="text-blue font-medium hover:text-brown transition-colors duration-300 relative group"
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brown transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
          <button className="py-2 px-6 xl:px-9 bg-brown text-white rounded-md hover:bg-opacity-90 transition-all duration-300 btn-hover">
            Reservation
          </button>
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

      {/* mobile sidebar overlay */}
      <div className="hidden max-md:block">
        <div
          className={`fixed inset-0 bg-white  transition-transform duration-300 z-50 flex flex-col items-center justify-center gap-8 ${
            toggleMenu ? "translate-x-0" : "translate-x-full"
          }`}
        >
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

          <div className="flex flex-col items-center gap-8">
            {navigation.map((item, i) => (
              <Link
                key={i}
                href={item.link}
                className="text-2xl md:text-3xl text-blue font-medium hover:text-brown transition-colors duration-300"
                onClick={() => setToggleMenu(false)}
              >
                {item.name}
              </Link>
            ))}

            <button
              className="mt-4 py-3 px-12 bg-brown text-white rounded-md hover:bg-opacity-90 transition-all duration-300 btn-hover text-lg"
              onClick={() => setToggleMenu(false)}
            >
              Reservation
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

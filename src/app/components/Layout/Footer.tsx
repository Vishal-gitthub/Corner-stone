import Image from "next/image";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  return (
    <footer
      className="bg-blue border-t-2 border-white"
      style={{ backgroundImage: "url(/home/BgTexture.jpg)" }}
    >
      <div className="container-responsive">
        {/* Logo Section */}
        <Link href="/">
          <div className="flex items-center py-8 justify-center">
            <Image
              src="/logo_gold.png"
              width={200}
              height={200}
              alt="The Albion Rooftop Logo"
              className="w-48 md:w-64 h-auto"
            />
          </div>
        </Link>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 py-8">
          {/* Newsletter Section */}
          <div className="lg:col-span-1">
            <h3 className="text-lg md:text-xl lg:text-2xl py-2 text-white font-medium heading-aleo">
              Subscribe to our mailing list to receive the latest news and
              events.
            </h3>
            <button className="py-3 px-8 md:px-12 text-white bg-brown rounded-md hover:bg-opacity-90 transition-all duration-300 btn-hover mt-4 font-aleo">
              Subscribe
            </button>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-4 md:gap-6">
            <div>
              <h3 className="text-lg md:text-xl text-white font-medium mb-2 heading-aleo">
                Visit Us
              </h3>
              <p className="text-white text-lexend">
                <br />1 Crockford Street, Port Melbourne, 3207
              </p>
            </div>
            <div>
              <h3 className="text-lg md:text-xl text-white font-medium mb-2 heading-aleo">
                Contact
              </h3>
              <p className="text-white text-lexend">
                (03) 9645 1405
                <br />
                <a href="mailto:bookings@cornerstonepub.com.au">
                  bookings@cornerstonepub.com.au
                </a>
              </p>
            </div>
            <div className="flex items-center gap-4">
              <a
                href="https://www.instagram.com/cornerstone.melb?igsh=NnZpcW4yaHAwZmp4&utm_source=qr"
                className="text-brown hover:text-white transition-colors duration-300"
                aria-label="Follow us on Instagram"
                target="_blank"
              >
                <FaInstagram className="text-2xl md:text-3xl" />
              </a>
              <a
                href="https://www.facebook.com/share/1LUEPjPXML/?mibextid=wwXIfr"
                className="text-brown hover:text-white transition-colors duration-300"
                aria-label="Follow us on Facebook"
                target="_blank"

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
            <div className="text-white space-y-3">
              <div>
                <p className="text-lg font-medium heading-aleo">WEDNESDAY</p>
                <p className="text-sm md:text-base text-lexend">
                  Midday – 11 PM
                </p>
              </div>
              <div>
                <p className="text-lg font-medium heading-aleo">THURSDAY</p>
                <p className="text-sm md:text-base text-lexend">
                  Midday – Midnight
                </p>
              </div>
              <div>
                <p className="text-lg font-medium heading-aleo">FRIDAY</p>
                <p className="text-sm md:text-base text-lexend">
                  Midday – Midnight
                </p>
              </div>
              <div>
                <p className="text-lg font-medium heading-aleo">SATURDAY</p>
                <p className="text-sm md:text-base text-lexend">
                  Midday – Midnight
                </p>
              </div>
              <div>
                <p className="text-lg font-medium heading-aleo">SUNDAY</p>
                <p className="text-sm md:text-base text-lexend">
                  Midday – 11 PM
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/20 py-6">
          <p className="text-white text-center text-sm md:text-base text-lexend">
            © The Cornerstone Pub, all rights reserved |
            <a
              href="#"
              className="hover:text-brown transition-colors duration-300 ml-1 text-lexend"
            >
              Privacy Policy
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

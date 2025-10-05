import Image from "next/image";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";

export default function Footer() {
  return (
    <footer
      className="bg-blue/90 border-t-2 border-white"
      style={{ backgroundImage: "url(/home/BgTexture.jpg)" }}
    >
      <div className="container-responsive">
        {/* Logo Section */}
        <div className="flex items-center py-8 justify-center">
          <Image 
            src="/logo.png" 
            width={200} 
            height={200} 
            alt="The Albion Rooftop Logo" 
            className="w-48 md:w-64 h-auto"
          />
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 py-8">
          {/* Newsletter Section */}
          <div className="lg:col-span-1">
            <h3 className="text-xl md:text-2xl lg:text-3xl py-2 text-white font-medium heading-aleo">
              Subscribe to our mailing list to receive the latest news and events.
            </h3>
            <button className="py-3 px-8 md:px-12 text-white bg-brown rounded-md hover:bg-opacity-90 transition-all duration-300 btn-hover mt-4 font-lexend">
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
                172 York Street,<br />
                South Melbourne, VIC, 3205
              </p>
            </div>
            <div>
              <h3 className="text-lg md:text-xl text-white font-medium mb-2 heading-aleo">
                Contact
              </h3>
              <p className="text-white text-lexend">
                (03) 9645 5277<br />
                info@thealbion.bar
              </p>
            </div>
            <div className="flex items-center gap-4">
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

          {/* Opening Hours */}
          <div className="lg:col-span-1">
            <h2 className="uppercase text-white font-semibold pb-3 text-lg md:text-xl heading-aleo">
              Opening Hours
            </h2>
            <div className="text-white space-y-3">
              <div>
                <p className="text-lg font-medium heading-aleo">FRIDAY</p>
                <p className="text-sm md:text-base text-lexend">
                  Rooftop: 3pm - Late<br />
                  Club: 10pm - Late
                </p>
              </div>
              <div>
                <p className="text-lg font-medium heading-aleo">SATURDAY</p>
                <p className="text-sm md:text-base text-lexend">
                  Rooftop: 3pm - Late<br />
                  Club: 9pm - Late
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/20 py-6">
          <p className="text-white text-center text-sm md:text-base text-lexend">
            © The Albion Rooftop, all rights reserved. | Designed by ARINON. | 
            <a href="#" className="hover:text-brown transition-colors duration-300 ml-1 text-lexend">
              Privacy Policy
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

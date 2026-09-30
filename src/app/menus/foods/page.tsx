import React from "react";
import Image from "next/image";
import Breadcrumbs from "@/components/seo/Breadcrumbs";

export default function page() {
  return (
    <div className="max-md:pt-0">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Menus", href: "/menus" }, { label: "Food menu" }]} />
      <h1 className="sr-only">The Cornerstone Pub food menu</h1>
      <div data-reveal>
        <div className="max-w-7xl mx-auto" data-stagger>
          <Image
            src="/menu/FoodsMenu/Cornerstone Menu Oct 26_page-0001.jpg"
            width={4960}
            height={3510}
            sizes="100vw"
            className="image-optimized w-full"
            alt="Cornerstone Pub food menu by Head Chef Stuart Russ - modern Australian pub cuisine with share plates, mains, and seasonal dishes in Port Melbourne"
          />
          <Image
            src="/menu/FoodsMenu/Cornerstone Menu Oct 26_page-0002.jpg"
            width={4960}
            height={3510}
            sizes="100vw"
            className="image-optimized w-full"
            alt="Cornerstone Pub food menu by Head Chef Stuart Russ - modern Australian pub cuisine with share plates, mains, and seasonal dishes in Port Melbourne"
          />
        </div>
      </div>
      <div className="fixed right-5 bottom-5">
        <button className=" animate-bounce">
          <a
            href="/menu/FoodsMenu/Cornerstone-Menu.pdf"
            download="Cornerstone-Menu.pdf"
            className="py-4 px-12 text-white font-semibold bg-brown btn-hover"
          >
            Grab the Menu
          </a>
        </button>
      </div>
    </div>
  );
}

import Image from "next/image";
import Breadcrumbs from "@/components/seo/Breadcrumbs";

export default function page() {
  return (
    <div
      className="relative py-24  bg-contain bg-fixed"
      style={{ backgroundImage: "url(/menu/menuBg-optimized.webp)" }}
    >
      <div className="bg-white/80 py-12">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Menus", href: "/menus" },
            { label: "Drinks menu" },
          ]}
        />
        <h1 className="sr-only">The Cornerstone Pub drinks menu</h1>
        <div className="w-[70vw] max-md:w-[80vw] max-sm:w-[95vw] m-auto pt-8">
          <Image
            src="/menu/DrinkMenu/Drinks List_page-0001.jpg"
            width={2482}
            height={3510}
            sizes="(max-width: 768px) 95vw, 70vw"
            className="h-auto w-full"
            alt="The Cornerstone Pub drinks menu, page 1"
          />
          <Image
            src="/menu/DrinkMenu/Drinks List_page-0002.jpg"
            width={2482}
            height={3510}
            sizes="(max-width: 768px) 95vw, 70vw"
            className="h-auto w-full"
            alt="The Cornerstone Pub drinks menu, page 2"
          />
          <Image
            src="/menu/DrinkMenu/Drinks List_page-0003.jpg"
            width={2482}
            height={3510}
            sizes="(max-width: 768px) 95vw, 70vw"
            className="h-auto w-full"
            alt="The Cornerstone Pub drinks menu, page 3"
          />
          <Image
            src="/menu/DrinkMenu/Drinks List_page-0004.jpg"
            width={2482}
            height={3510}
            sizes="(max-width: 768px) 95vw, 70vw"
            className="h-auto w-full"
            alt="The Cornerstone Pub drinks menu, page 4"
          />
          <Image
            src="/menu/DrinkMenu/Drinks List_page-0005.jpg"
            width={2482}
            height={3510}
            sizes="(max-width: 768px) 95vw, 70vw"
            className="h-auto w-full"
            alt="The Cornerstone Pub drinks menu, page 5"
          />
        </div>
        <div className="fixed right-5 bottom-5">
          <button className=" animate-bounce">
            <a
              href="/menu/DrinkMenu/Drinks List.pdf"
              download="Drinks List.pdf"
              className="py-4 px-12 text-white font-semibold  bg-brown"
            >
              Grab the Menu
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}

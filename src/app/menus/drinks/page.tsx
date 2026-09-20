import Image from "next/image";
import Breadcrumbs from "@/components/seo/Breadcrumbs";

export default function page() {
  return (
    <div
      className="relative bg-contain bg-fixed"
      style={{ backgroundImage: "url(/menu/menuBg.png)" }}
    >
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Menus", href: "/menus" }, { label: "Drinks menu" }]} />
      <h1 className="sr-only">The Cornerstone Pub drinks menu</h1>
      <div className="w-[70vw] max-md:w-[80vw] max-sm:w-[95vw] m-auto pt-8">
        <Image src="/menu/DrinkMenu/CornerDrinks1.jpg" width={2482} height={3510} sizes="(max-width: 768px) 95vw, 70vw" className="h-auto w-full" alt="The Cornerstone Pub drinks menu, page 1" />
        <Image src="/menu/DrinkMenu/CornerDrinks2.jpg" width={2482} height={3510} sizes="(max-width: 768px) 95vw, 70vw" className="h-auto w-full" alt="The Cornerstone Pub drinks menu, page 2" />
      </div>
      <div className="fixed right-5 bottom-5">
        <button className=" animate-bounce">
          <a
            href="/menu/DrinkMenu/Cornerstone Drinks Menu A4.pdf"
            download="Cornerstone_Drinks_Menu_A4.pdf"
            className="py-4 px-12 text-white font-semibold  bg-brown"
          >
            Grab the Menu
          </a>
        </button>
      </div>
    </div>
  );
}

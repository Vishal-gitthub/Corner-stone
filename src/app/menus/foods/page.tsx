import React from "react";

export default function page() {
  return (
    <div className="pt-24 max-md:pt-16">
      <div>
        <img src="/menu/FoodsMenu/Cornerstone Menu_page-0001.jpg" alt="Cornerstone Pub food menu by Head Chef Stuart Russ - modern Australian pub cuisine with share plates, mains, and seasonal dishes in Port Melbourne" />
        <img src="/menu/FoodsMenu/Cornerstone Menu_page-0002.jpg" alt="Cornerstone Pub food menu by Head Chef Stuart Russ - modern Australian pub cuisine with share plates, mains, and seasonal dishes in Port Melbourne" />
      </div>
      <div className="fixed right-5 bottom-5">
        <button className=" animate-bounce">
          <a
            href="/menu/foods/Cornerstone-Menu.pdf"
            download="Cornerstone-Menu.pdf"
            className="py-4 px-12 text-white font-semibold  bg-brown"
          >
            Grab the Menu
          </a>
        </button>
      </div>
    </div>
  );
}

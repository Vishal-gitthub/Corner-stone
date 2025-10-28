import React from "react";

export default function page() {
  return (
    <div className="pt-24 max-md:pt-16">
      <div>
        <img src="/menu/FoodsMenu/CornerFoodsMenu.jpg" alt="" />
      </div>
      <div className="fixed right-5 bottom-5">
        <button className=" animate-bounce">
          <a
            href="/menu/foods/Cornerstone Food Menu A3.pdf"
            download="Cornerstone_Food_Menu_A3.pdf"
            className="py-4 px-12 text-white font-semibold  bg-brown"
          >
            Grab the Menu
          </a>
        </button>
      </div>
    </div>
  );
}

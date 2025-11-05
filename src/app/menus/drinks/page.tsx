export default function page() {
  return (
    <div
      className="pt-24 relative max-md:pt-16 bg-contain bg-fixed"
      style={{ backgroundImage: "url(/menu/menuBg.png)" }}
    >
      <div className="w-[70vw] max-md:w-[80vw] max-sm:w-[95vw] m-auto">
        <img src="/menu/DrinkMenu/CornerDrinks1.jpg" alt="Cornerstone Pub drinks menu page 1 - featuring cocktails, wines, beers, and premium beverages available at Port Melbourne location" />
        <img src="/menu/DrinkMenu/CornerDrinks2.jpg" alt="Cornerstone Pub drinks menu page 2 - complete beverage selection including spirits, cocktails, and specialty drinks" />
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

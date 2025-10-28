export default function page() {
  return (
    <div
      className="pt-24 max-md:pt-16 bg-contain bg-fixed"
      style={{ backgroundImage: "url(/menu/menuBg.png)" }}
    >
      <div className="w-[70vw] max-md:w-[80vw] max-sm:w-[95vw] m-auto">
        <img
          src="/menu/events_menu/Cornerstone Event Menus_page-0002.jpg"
          alt=""
        />
        <img
          src="/menu/events_menu/Cornerstone Event Menus_page-0003.jpg"
          alt=""
        />
        <img
          src="/menu/events_menu/Cornerstone Event Menus_page-0004.jpg"
          alt=""
        />
      </div>
      <div className="fixed right-5 bottom-5">
        <button className=" animate-bounce">
          <a
            href="/menu/events_menu/Cornerstone Event Menus.pdf"
            download="Cornerstone_Events_Menu.pdf"
            className="py-4 px-12 text-white font-semibold  bg-brown"
          >
            Grab the Menu
          </a>
        </button>
      </div>
    </div>
  );
}

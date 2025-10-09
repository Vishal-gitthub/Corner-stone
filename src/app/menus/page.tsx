"use client";
import Drinks from "../../../public/menu/drinks.jpg";
import Link from "next/link";
export default function page() {
  return (
    <div className="w-full m-auto text-center">
      <div className="py-32 max-sm:pt-32 max-sm:pb-16">
        <h1 className=" font-aleo text-7xl max-md:text-4xl max-sm:text-3xl text-blue">Hungry? Thirsty? <span className="text-brown"> Maybe both? </span></h1>
        <p className="text-2xl max-md:text-xl max-sm:text-lg font-lexend py-5 text-blue">Craving food or thirsting for a drink? We’ve got you covered.</p>
        <p className="font-lexend text-gray-700">Check out our menus and find what hits the spot:</p>
      </div>
      <div className=" flex items-center pb-56 justify-center h-full w-full">
        <div className="flex  gap-10 flex-wrap justify-center items-center">
          <Link href="/menus/drinks" className=" hover:scale-[1.07] transition-all duration-300 outline-1 outline-blue hover:p-1">
            <div
              style={{ backgroundImage: "url(/menu/drinks.jpg)" }}
              className="w-96 h-96 max-sm:w-64 max-sm:h-64  flex items-center justify-center object-cover bg-center bg-cover bg-no-repeat"
            >
              <div className="bg-black/20 h-full w-full flex items-center justify-center  text-white max-sm:text-3xl font-aleo text-6xl">
                DRINKS
              </div>
            </div>
          </Link>
          <Link href="/menus/foods" className=" hover:scale-[1.07] transition-all duration-300 outline-1 hover:p-1">
            <div
              style={{ backgroundImage: "url(/menu/foods.jpg)" }}
              className="w-96 h-96 max-sm:w-64 max-sm:h-64 flex items-center justify-center object-cover bg-center bg-cover bg-no-repeat"
            >
              <div className="bg-black/20 h-full w-full flex items-center justify-center  text-white max-sm:text-3xl font-aleo text-6xl">
                FOODS
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

import React from "react";

const Page = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br py-20 from-white to-brown/20 text-gray-800 font-poppins">
      {/* Hero Section */}
      <section className="text-center py-20 px-6 max-w-3xl mx-auto">
        <h1 className="text-5xl font-bold mb-4 text-brown">
          Share a Little Happiness
        </h1>
        <p className="text-lg text-gray-600">
          Sometimes, the best gift is the freedom to choose. Brighten someone’s
          day with a digital gift card they can enjoy whenever they like.
        </p>
      </section>

      {/* Gift Card Display */}
      <div className="flex items-center h-full w-full justify-center perspective-[1000px] mb-24">
        <a
          href="https://app.squareup.com/gift/ML93N921TFBMY/order"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="relative w-[400px] h-[250px] [transform-style:preserve-3d] transition-transform duration-1000 cursor-pointer hover:[transform:rotateY(180deg)]">
            {/* FRONT SIDE */}
            <div className="absolute w-full h-full rounded-xl shadow-2xl text-white flex flex-col justify-between p-6 backface-hidden bg-gradient-to-br from-white/50 to-blue overflow-hidden">
              <div className="relative">
                {/* Glow animation */}
                <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-[radial-gradient(circle,rgba(255,255,255,0.15),transparent_60%)] animate-[spin_6s_linear_infinite]" />
                {/* Logo */}
                <div className="relative w-40 z-10">
                  <img src="/logo.png" alt="Brand Logo" />
                </div>
              </div>
              <div className="z-10">
                <h1 className="text-2xl font-semibold">Exclusive Gift Card</h1>
                <p className="text-gray-200">Give the gift of choice 🎁</p>
                <p className="text-sm text-gray-400">
                  Tap to flip and reveal details
                </p>
              </div>
            </div>

            {/* BACK SIDE */}
            <div className="absolute w-full h-full rounded-xl shadow-2xl text-white flex flex-col justify-between p-6 bg-gradient-to-br from-blue to-blue/40 [transform:rotateY(180deg)] backface-hidden">
              <div>
                <div className="h-12 bg-black/50 rounded-md mb-4" />
                <div className="space-y-2">
                  <p>
                    <strong>Value:</strong> $100
                  </p>
                  <p>
                    <strong>Valid Until:</strong> Dec 31, 2026
                  </p>
                  <div className="bg-white/10 py-2 px-4 rounded-md text-center tracking-[0.3em] font-mono">
                    XXXX-XXXX-XXXX
                  </div>
                </div>
              </div>
              <a
                href="https://app.squareup.com/gift/ML93N921TFBMY/order"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-brown hover:bg-brown/60 transition-colors duration-300 text-white py-2 rounded-md text-center font-medium"
              >
                Redeem / Order
              </a>
            </div>
          </div>
        </a>
      </div>

      {/* Info Section */}
      <section className="max-w-5xl mx-auto px-6 space-y-16">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4 text-brown">
            Why Choose Our Gift Cards
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Whether it’s for birthdays, holidays, or just to say “thank you,” a
            gift card is always the right fit. Choose any amount and send it
            instantly — it’s the easiest way to make someone’s day.
          </p>
        </div>
      </section>

      {/* CTA Section */}
    </div>
  );
};

export default Page;

"use client";
export default function Banner() {
  return (
    <div>
      <section className="">
        <video autoPlay muted loop className="h-screen w-full object-cover">
          <source src="/home/showReel.mp4" />
        </video>
      </section>
    </div>
  );
}

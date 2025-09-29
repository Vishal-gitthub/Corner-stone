import AboutSec from "./components/Home/About";
import Banner from "./components/Home/Banner";
import LiveSport from "./components/Home/LiveSport";
import Nightlife from "./components/Home/Nightlife";
import WhatsOn from "./components/Home/Whats_on";

export default function HomePage() {
  return (
    <main>
      <section aria-label="Hero video banner">
        <Banner />
      </section>
      <section aria-labelledby="about-heading">
        <AboutSec />
      </section>
      <section aria-labelledby="live-sport-heading">
        <LiveSport />
      </section>
      <section aria-labelledby="whats-on-heading">
        <WhatsOn />
      </section>
      <section aria-labelledby="nightlife-heading">
        <Nightlife />
      </section>
    </main>
  );
}

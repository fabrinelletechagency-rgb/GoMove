import { useState } from "react";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./components/sections/Home.jsx";
import Pricing from "./components/sections/Pricing.jsx";
import Testimonials from "./components/sections/Testimonials.jsx";
import Booking from "./components/sections/Booking.jsx";

export default function App() {
  const [activeTab, setActiveTab] = useState("accueil");
  const [prefill, setPrefill] = useState(null);

  const goToTab = (id, data) => {
    setActiveTab(id);
    if (data) setPrefill(data);
    document.getElementById("tabs-section")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />

      {activeTab === "accueil" && (
        <Hero
          onOrder={(data) => goToTab("commander", data)}
          onDiscover={() => goToTab("accueil")}
        />
      )}

      <main id="tabs-section" className="flex-1 max-w-6xl w-full mx-auto px-4 sm:px-6 py-14">
        {activeTab === "accueil" && <Home onOrder={() => goToTab("commander")} />}
        {activeTab === "tarifs" && <Pricing onOrder={() => goToTab("commander")} />}
        {activeTab === "temoignages" && <Testimonials />}
        {activeTab === "commander" && <Booking prefill={prefill} />}
      </main>

      <Footer />
    </div>
  );
}

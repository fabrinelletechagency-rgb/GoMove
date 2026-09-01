import { useState } from "react";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./components/sections/Home.jsx";
import Pricing from "./components/sections/Pricing.jsx";
import Testimonials from "./components/sections/Testimonials.jsx";
import Booking from "./components/sections/Booking.jsx";

const TABS = [
  { id: "accueil", label: "Accueil" },
  { id: "tarifs", label: "Tarifs" },
  { id: "temoignages", label: "Témoignages" },
  { id: "commander", label: "Commander" },
];

export default function App() {
  const [activeTab, setActiveTab] = useState("accueil");

  const goToTab = (id) => {
    setActiveTab(id);
    document.getElementById("tabs-section")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />

      <Hero onOrder={() => goToTab("commander")} onDiscover={() => goToTab("accueil")} />

      <main id="tabs-section" className="flex-1 max-w-6xl w-full mx-auto px-4 sm:px-6 py-14">
        <div className="flex justify-center mb-12">
          <div className="inline-flex flex-wrap justify-center gap-1 bg-white border border-brand-100 rounded-full p-1.5 shadow-sm">
            {TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-colors ${
                  activeTab === tab.id
                    ? "bg-brand-600 text-white shadow-soft"
                    : "text-brand-900 hover:bg-brand-50"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {activeTab === "accueil" && <Home onOrder={() => goToTab("commander")} />}
        {activeTab === "tarifs" && <Pricing onOrder={() => goToTab("commander")} />}
        {activeTab === "temoignages" && <Testimonials />}
        {activeTab === "commander" && <Booking />}
      </main>

      <Footer />
    </div>
  );
}

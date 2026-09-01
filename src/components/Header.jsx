import { useState } from "react";
import Logo from "./Logo.jsx";

const TABS = [
  { id: "accueil", label: "Accueil" },
  { id: "tarifs", label: "Tarifs" },
  { id: "temoignages", label: "Témoignages" },
  { id: "commander", label: "Commander" },
];

export default function Header({ activeTab, setActiveTab }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleSelect = (id) => {
    setActiveTab(id);
    setMenuOpen(false);
    document.getElementById("tabs-section")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-brand-100 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        <button onClick={() => handleSelect("accueil")} aria-label="GoMove — Accueil">
          <Logo />
        </button>

        <nav className="hidden md:flex items-center gap-1">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => handleSelect(tab.id)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
                activeTab === tab.id
                  ? "bg-brand-600 text-white shadow-soft"
                  : "text-brand-900 hover:bg-brand-50"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </nav>

        <button
          onClick={() => handleSelect("commander")}
          className="hidden md:inline-block bg-brand-600 hover:bg-brand-700 transition-colors text-white text-sm font-semibold px-5 py-2.5 rounded-xl shadow-soft"
        >
          Commander un taxi
        </button>

        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Ouvrir le menu"
          aria-expanded={menuOpen}
        >
          <span className={`block w-6 h-0.5 bg-brand-900 transition-transform ${menuOpen ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`block w-6 h-0.5 bg-brand-900 transition-opacity ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-brand-900 transition-transform ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </div>

      {menuOpen && (
        <nav className="md:hidden border-t border-brand-100 bg-white px-4 py-3 flex flex-col gap-1">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => handleSelect(tab.id)}
              className={`text-left px-4 py-3 rounded-xl text-sm font-semibold ${
                activeTab === tab.id ? "bg-brand-600 text-white" : "text-brand-900 hover:bg-brand-50"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      )}
    </header>
  );
}

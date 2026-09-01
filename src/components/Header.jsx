import { useState } from "react";
import Logo from "./Logo.jsx";

const TABS = [
  { id: "accueil", label: "Accueil" },
  { id: "tarifs", label: "Tarifs" },
  { id: "temoignages", label: "Témoignages" },
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
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16 gap-2">
        <button onClick={() => handleSelect("accueil")} aria-label="GoMove — Accueil" className="shrink-0">
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

        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={() => handleSelect("commander")}
            className="bg-brand-600 hover:bg-brand-700 transition-colors text-white text-sm font-semibold px-3.5 py-2 sm:px-5 sm:py-2.5 rounded-xl shadow-soft whitespace-nowrap"
          >
            <span className="sm:hidden">Commander</span>
            <span className="hidden sm:inline">Commander un taxi</span>
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

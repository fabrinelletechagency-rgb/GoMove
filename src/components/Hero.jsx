import { useState } from "react";

export default function Hero({ onOrder, onDiscover }) {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");

  const handleQuickSearch = (e) => {
    e.preventDefault();
    onOrder({ pickup, destination });
  };

  return (
    <section className="relative overflow-hidden text-white bg-brand-950">
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-90"
          style={{
            background:
              "radial-gradient(1100px 520px at 12% -10%, #3a4bef 0%, transparent 60%), radial-gradient(900px 480px at 100% 0%, #1f28ad 0%, transparent 55%)",
          }}
        />
        <svg className="absolute right-0 bottom-0 w-2/3 max-w-xl opacity-25" viewBox="0 0 400 300" fill="none">
          <path
            d="M0 260 C 90 220, 130 300, 220 240 S 340 120, 400 150"
            stroke="#8798ff"
            strokeWidth="3"
            strokeDasharray="2 14"
            strokeLinecap="round"
          />
          <circle cx="0" cy="260" r="6" fill="#5d6ffb" />
          <circle cx="400" cy="150" r="6" fill="#ffffff" />
        </svg>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-xs font-semibold tracking-wide uppercase px-4 py-1.5 rounded-full mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            Chauffeurs disponibles près de vous
          </span>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] mb-5">
            La ville vous attend.
            <br />
            <span className="text-brand-300">GoMove vous y emmène.</span>
          </h1>
          <p className="text-lg text-white/75 mb-10 max-w-xl">
            Entrez votre trajet, comparez les offres, et montez à bord en quelques
            minutes. Transport urbain rapide, suivi en direct, prix annoncé avant
            de partir.
          </p>

          <form
            onSubmit={handleQuickSearch}
            className="bg-white rounded-2xl p-2 shadow-2xl grid sm:grid-cols-[1fr_1fr_auto] gap-2 max-w-2xl"
          >
            <label className="flex items-center gap-3 rounded-xl px-4 py-3.5 sm:border-r sm:border-slate-100">
              <span className="text-brand-500 text-lg">●</span>
              <input
                value={pickup}
                onChange={(e) => setPickup(e.target.value)}
                type="text"
                placeholder="Point de départ"
                className="w-full text-sm text-brand-950 placeholder:text-slate-400 focus:outline-none"
              />
            </label>
            <label className="flex items-center gap-3 rounded-xl px-4 py-3.5">
              <span className="text-brand-500 text-lg">▸</span>
              <input
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                type="text"
                placeholder="Destination"
                className="w-full text-sm text-brand-950 placeholder:text-slate-400 focus:outline-none"
              />
            </label>
            <button
              type="submit"
              className="bg-brand-600 hover:bg-brand-700 transition-colors text-white font-semibold px-6 py-3.5 rounded-xl whitespace-nowrap"
            >
              Voir les prix
            </button>
          </form>

          <div className="flex items-center gap-3 mt-4">
            <button
              onClick={onDiscover}
              className="text-sm font-semibold text-white/80 hover:text-white underline underline-offset-4 decoration-white/30"
            >
              Découvrir comment GoMove fonctionne →
            </button>
          </div>

          <div className="flex flex-wrap gap-x-10 gap-y-4 mt-12 pt-8 border-t border-white/10">
            <div>
              <p className="font-display text-2xl font-bold text-white">10 000+</p>
              <p className="text-sm text-white/60">Courses effectuées</p>
            </div>
            <div>
              <p className="font-display text-2xl font-bold text-white">500+</p>
              <p className="text-sm text-white/60">Chauffeurs partenaires</p>
            </div>
            <div>
              <p className="font-display text-2xl font-bold text-white">4.8/5</p>
              <p className="text-sm text-white/60">Satisfaction client</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

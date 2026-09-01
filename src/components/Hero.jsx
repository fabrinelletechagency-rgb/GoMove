import { useState } from "react";

export default function Hero({ onOrder, onDiscover }) {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");

  const handleQuickSearch = (e) => {
    e.preventDefault();
    onOrder({ pickup, destination });
  };

  return (
    <section className="relative overflow-hidden bg-white">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -right-40 w-[28rem] h-[28rem] rounded-full bg-brand-50" />
        <div className="absolute top-40 -left-24 w-72 h-72 rounded-full bg-brand-50" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 bg-brand-50 border border-brand-100 text-brand-700 text-xs font-semibold tracking-wide uppercase px-4 py-1.5 rounded-full mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            Chauffeurs disponibles près de vous
          </span>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] mb-5 text-brand-900">
            La ville vous attend.
            <br />
            <span className="text-brand-500">GoMove vous y emmène.</span>
          </h1>
          <p className="text-lg text-slate-600 mb-10 max-w-xl">
            Entrez votre trajet, comparez les offres, et montez à bord en quelques
            minutes. Transport urbain en voiture, suivi en direct, prix annoncé
            avant de partir.
          </p>

          <form
            onSubmit={handleQuickSearch}
            className="bg-white rounded-2xl p-2 shadow-soft border border-brand-100 grid sm:grid-cols-[1fr_1fr_auto] gap-2 max-w-2xl"
          >
            <label className="flex items-center gap-3 rounded-xl px-4 py-3.5 sm:border-r sm:border-brand-100">
              <span className="text-brand-500 text-lg">●</span>
              <input
                value={pickup}
                onChange={(e) => setPickup(e.target.value)}
                type="text"
                placeholder="Point de départ"
                className="w-full text-sm text-brand-900 placeholder:text-slate-400 focus:outline-none"
              />
            </label>
            <label className="flex items-center gap-3 rounded-xl px-4 py-3.5">
              <span className="text-brand-500 text-lg">▸</span>
              <input
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                type="text"
                placeholder="Destination"
                className="w-full text-sm text-brand-900 placeholder:text-slate-400 focus:outline-none"
              />
            </label>
            <button
              type="submit"
              className="bg-brand-600 hover:bg-brand-700 transition-colors text-white font-semibold px-6 py-3.5 rounded-xl whitespace-nowrap"
            >
              Voir les prix
            </button>
          </form>

          <button
            onClick={onDiscover}
            className="text-sm font-semibold text-brand-700 hover:text-brand-900 underline underline-offset-4 decoration-brand-200 mt-4 inline-block"
          >
            Découvrir comment GoMove fonctionne →
          </button>

          <div className="flex flex-wrap gap-x-10 gap-y-4 mt-12 pt-8 border-t border-brand-100">
            <div>
              <p className="font-display text-2xl font-bold text-brand-900">10 000+</p>
              <p className="text-sm text-slate-500">Courses effectuées</p>
            </div>
            <div>
              <p className="font-display text-2xl font-bold text-brand-900">500+</p>
              <p className="text-sm text-slate-500">Chauffeurs partenaires</p>
            </div>
            <div>
              <p className="font-display text-2xl font-bold text-brand-900">4.8/5</p>
              <p className="text-sm text-slate-500">Satisfaction client</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

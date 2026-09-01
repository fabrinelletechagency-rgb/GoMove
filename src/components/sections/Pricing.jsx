const PLANS = [
  {
    name: "GoMove Éco",
    price: "450",
    unit: "F CFA / course dès",
    desc: "Le trajet malin pour vos déplacements de tous les jours.",
    features: [
      "Véhicule standard climatisé",
      "Jusqu'à 3 passagers",
      "Tarif au kilomètre transparent",
      "Paiement cash ou mobile money",
    ],
    highlight: false,
  },
  {
    name: "GoMove Confort",
    price: "900",
    unit: "F CFA / course dès",
    desc: "Notre offre la plus choisie : confort, ponctualité, tranquillité.",
    features: [
      "Véhicule récent, climatisation renforcée",
      "Jusqu'à 4 passagers",
      "Chauffeur prioritaire sous 5 min",
      "Suivi du trajet en temps réel",
      "Assistance client dédiée 24h/24",
    ],
    highlight: true,
  },
  {
    name: "GoMove VIP",
    price: "1 800",
    unit: "F CFA / course dès",
    desc: "Un service haut de gamme pour vos rendez-vous d'affaires ou occasions spéciales.",
    features: [
      "Véhicule haut de gamme, intérieur soigné",
      "Jusqu'à 4 passagers",
      "Chauffeur professionnel dédié",
      "Eau offerte et wifi à bord",
      "Réservation à l'avance et facturation",
    ],
    highlight: false,
  },
];

export default function Pricing({ onOrder }) {
  return (
    <div>
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-brand-900 mb-3">
          Une offre pour chaque trajet
        </h2>
        <p className="text-slate-600">
          Le prix s'affiche avant de valider votre course. Pas de compteur, pas de
          surprise à l'arrivée.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 items-stretch">
        {PLANS.map((plan) => (
          <div
            key={plan.name}
            className={`rounded-2xl p-8 flex flex-col border transition-all ${
              plan.highlight
                ? "bg-brand-600 text-white border-brand-600 shadow-soft scale-[1.02] md:-translate-y-2"
                : "bg-white text-brand-900 border-brand-100 shadow-sm hover:-translate-y-1 hover:shadow-soft"
            }`}
          >
            {plan.highlight && (
              <span className="self-start bg-white text-brand-600 text-xs font-bold uppercase tracking-wide px-3 py-1 rounded-full mb-4">
                Le plus choisi
              </span>
            )}
            <h3 className="font-display text-xl font-bold mb-1">{plan.name}</h3>
            <p className={`text-sm mb-6 ${plan.highlight ? "text-brand-50/90" : "text-slate-600"}`}>
              {plan.desc}
            </p>
            <div className="mb-6">
              <span className="font-display text-4xl font-bold">{plan.price}</span>
              <span className={`text-sm ml-1 ${plan.highlight ? "text-brand-50/90" : "text-slate-500"}`}>
                {plan.unit}
              </span>
            </div>
            <ul className="space-y-3 mb-8 flex-1">
              {plan.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm">
                  <span className={plan.highlight ? "text-white" : "text-brand-500"}>✓</span>
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <button
              onClick={onOrder}
              className={`font-semibold py-3 rounded-xl transition-colors ${
                plan.highlight
                  ? "bg-white text-brand-700 hover:bg-brand-50"
                  : "bg-brand-600 text-white hover:bg-brand-700"
              }`}
            >
              Choisir cette offre
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

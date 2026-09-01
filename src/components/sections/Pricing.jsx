const PLANS = [
  {
    name: "GoMove Éco",
    price: "500",
    unit: "F CFA / course dès",
    desc: "Idéal pour vos trajets du quotidien à petit prix.",
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
    price: "1 000",
    unit: "F CFA / course dès",
    desc: "Le meilleur rapport confort/prix pour vos déplacements.",
    features: [
      "Véhicule récent et confortable",
      "Jusqu'à 4 passagers",
      "Chauffeur prioritaire",
      "Suivi du trajet en temps réel",
      "Assistance client dédiée",
    ],
    highlight: true,
  },
  {
    name: "GoMove Premium",
    price: "2 000",
    unit: "F CFA / course dès",
    desc: "Une expérience haut de gamme pour vos occasions spéciales.",
    features: [
      "Véhicule haut de gamme",
      "Jusqu'à 4 passagers",
      "Chauffeur professionnel dédié",
      "Eau et wifi à bord",
      "Réservation à l'avance possible",
    ],
    highlight: false,
  },
];

export default function Pricing({ onOrder }) {
  return (
    <div>
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-900 mb-3">
          Nos offres tarifaires
        </h2>
        <p className="text-slate-600">
          Choisissez l'offre GoMove qui correspond à vos besoins. Prix clairs, sans
          surprise.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 items-stretch">
        {PLANS.map((plan) => (
          <div
            key={plan.name}
            className={`rounded-3xl p-8 flex flex-col border transition-all ${
              plan.highlight
                ? "bg-brand-600 text-white border-brand-600 shadow-soft scale-[1.02] md:-translate-y-2"
                : "bg-white text-brand-900 border-brand-100 shadow-sm hover:-translate-y-1 hover:shadow-soft"
            }`}
          >
            {plan.highlight && (
              <span className="self-start bg-white text-brand-600 text-xs font-bold uppercase tracking-wide px-3 py-1 rounded-full mb-4">
                Le plus populaire
              </span>
            )}
            <h3 className="text-xl font-bold mb-1">{plan.name}</h3>
            <p className={`text-sm mb-6 ${plan.highlight ? "text-brand-50/90" : "text-slate-600"}`}>
              {plan.desc}
            </p>
            <div className="mb-6">
              <span className="text-4xl font-extrabold">{plan.price}</span>
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
              className={`font-semibold py-3 rounded-full transition-colors ${
                plan.highlight
                  ? "bg-white text-brand-700 hover:bg-brand-50"
                  : "bg-brand-500 text-white hover:bg-brand-600"
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

const REVIEWS = [
  {
    name: "Aïcha Diallo",
    city: "Cotonou",
    trip: "Trajet quotidien travail",
    rating: 5,
    text: "Toujours un chauffeur en moins de 5 minutes, même aux heures de pointe. GoMove a changé ma façon de me déplacer en ville !",
  },
  {
    name: "Karim Bello",
    city: "Lomé",
    trip: "Trajet professionnel",
    rating: 5,
    text: "Prix affiché avant de monter, chauffeur ponctuel pour mes rendez-vous en ville. Exactement ce qu'il me fallait pour mes déplacements pro.",
  },
  {
    name: "Fatou Sow",
    city: "Abidjan",
    trip: "Course en soirée",
    rating: 4,
    text: "Application simple, suivi en direct rassurant pour rentrer seule le soir. Véhicule propre et chauffeur ponctuel.",
  },
  {
    name: "Junior Kouassi",
    city: "Cotonou",
    trip: "Abonné GoMove Confort",
    rating: 5,
    text: "Je réserve tous les matins pour aller au travail, c'est devenu un réflexe. Jamais un retard en trois mois d'utilisation.",
  },
  {
    name: "Nadège Aholou",
    city: "Porto-Novo",
    trip: "Trajet en famille",
    rating: 5,
    text: "GoMove VIP pour l'anniversaire de ma fille, chauffeur impeccable et voiture spacieuse pour toute la famille. On recommande !",
  },
];

function Stars({ rating }) {
  return (
    <div className="flex gap-0.5 text-amber-400 mb-3" aria-label={`${rating} sur 5 étoiles`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i}>{i < rating ? "★" : "☆"}</span>
      ))}
    </div>
  );
}

function initials(name) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export default function Testimonials() {
  return (
    <div>
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-brand-900 mb-3">
          Ils font confiance à GoMove
        </h2>
        <p className="text-slate-600">
          Découvrez ce que nos passagers pensent de leurs trajets avec nous.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {REVIEWS.map((review, i) => (
          <div
            key={review.name}
            className={`bg-white rounded-2xl p-6 border border-brand-100 shadow-sm hover:shadow-soft hover:-translate-y-1 transition-all ${
              i === 4 ? "sm:col-span-2 lg:col-span-1" : ""
            }`}
          >
            <div className="flex items-center justify-between mb-3">
              <Stars rating={review.rating} />
              <span className="text-[11px] font-semibold uppercase tracking-wide text-brand-500 bg-brand-50 px-2 py-0.5 rounded-full">
                {review.trip}
              </span>
            </div>
            <p className="text-slate-600 text-sm mb-5">&ldquo;{review.text}&rdquo;</p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-brand-500 text-white flex items-center justify-center font-bold text-sm">
                {initials(review.name)}
              </div>
              <div>
                <p className="font-semibold text-brand-900 text-sm">{review.name}</p>
                <p className="text-xs text-slate-500">{review.city}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const REVIEWS = [
  {
    name: "Aïcha Diallo",
    city: "Cotonou",
    rating: 5,
    text: "Toujours un chauffeur en moins de 5 minutes. GoMove a changé ma façon de me déplacer en ville !",
  },
  {
    name: "Karim Bello",
    city: "Lomé",
    rating: 5,
    text: "Les tarifs sont clairs dès le départ, aucune mauvaise surprise. Je recommande à tout le monde.",
  },
  {
    name: "Fatou Sow",
    city: "Abidjan",
    rating: 4,
    text: "Application simple à utiliser, chauffeurs polis et véhicules propres. Très satisfaite du service.",
  },
  {
    name: "Junior Kouassi",
    city: "Cotonou",
    rating: 5,
    text: "J'utilise GoMove Confort tous les jours pour aller au travail, c'est rapide et fiable.",
  },
  {
    name: "Nadège Aholou",
    city: "Porto-Novo",
    rating: 5,
    text: "Le suivi en temps réel me rassure énormément, surtout la nuit. Bravo à toute l'équipe GoMove !",
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
        <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-900 mb-3">
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
            <Stars rating={review.rating} />
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

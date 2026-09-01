const STEPS = [
  {
    icon: "📍",
    title: "1. Indiquez votre trajet",
    text: "Renseignez votre point de départ et votre destination en quelques secondes.",
  },
  {
    icon: "🚕",
    title: "2. Choisissez votre chauffeur",
    text: "GoMove trouve le chauffeur disponible le plus proche de vous.",
  },
  {
    icon: "🛣️",
    title: "3. Voyagez sereinement",
    text: "Suivez votre trajet en temps réel jusqu'à votre destination.",
  },
  {
    icon: "⭐",
    title: "4. Notez votre course",
    text: "Payez facilement et laissez un avis sur votre expérience.",
  },
];

const VALUES = [
  { icon: "🛡️", title: "Sécurité", text: "Chauffeurs vérifiés et trajets suivis en temps réel." },
  { icon: "⚡", title: "Rapidité", text: "Un taxi disponible en quelques minutes, jour et nuit." },
  { icon: "💰", title: "Prix juste", text: "Tarifs transparents affichés avant chaque course." },
];

export default function Home({ onOrder }) {
  return (
    <div className="space-y-20">
      <section>
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-900 mb-3">
            Comment fonctionne GoMove&nbsp;?
          </h2>
          <p className="text-slate-600">
            Commander un taxi n'a jamais été aussi simple. Suivez ces 4 étapes.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STEPS.map((step) => (
            <div
              key={step.title}
              className="bg-white rounded-2xl p-6 border border-brand-100 shadow-sm hover:shadow-soft hover:-translate-y-1 transition-all"
            >
              <div className="text-3xl mb-4">{step.icon}</div>
              <h3 className="font-bold text-brand-900 mb-2">{step.title}</h3>
              <p className="text-sm text-slate-600">{step.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white rounded-3xl border border-brand-100 shadow-sm overflow-hidden">
        <div className="grid md:grid-cols-2">
          <div className="p-8 sm:p-12">
            <span className="text-brand-600 font-semibold text-sm uppercase tracking-wide">
              Qui sommes-nous
            </span>
            <h2 className="text-3xl font-extrabold text-brand-900 mt-2 mb-4">
              GoMove, la mobilité urbaine réinventée
            </h2>
            <p className="text-slate-600 mb-4">
              GoMove est une entreprise de transport qui met en relation passagers et
              chauffeurs partenaires pour des déplacements urbains rapides, sûrs et
              abordables. Notre mission&nbsp;: rendre la ville accessible à tous, à
              tout moment.
            </p>
            <p className="text-slate-600 mb-6">
              Présents dans plusieurs villes, nous accompagnons chaque jour des
              milliers de passagers grâce à un réseau de chauffeurs formés et
              vérifiés, une application intuitive et un service client disponible
              24h/24.
            </p>
            <button
              onClick={onOrder}
              className="bg-brand-500 hover:bg-brand-600 transition-colors text-white font-semibold px-6 py-3 rounded-full"
            >
              Rejoindre l'aventure GoMove
            </button>
          </div>
          <div className="bg-gradient-to-br from-brand-600 to-brand-800 p-8 sm:p-12 flex flex-col justify-center gap-6">
            {VALUES.map((v) => (
              <div key={v.title} className="flex items-start gap-4">
                <div className="text-2xl bg-white/15 rounded-xl w-12 h-12 flex items-center justify-center shrink-0">
                  {v.icon}
                </div>
                <div>
                  <h4 className="font-bold text-white">{v.title}</h4>
                  <p className="text-brand-50/90 text-sm">{v.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

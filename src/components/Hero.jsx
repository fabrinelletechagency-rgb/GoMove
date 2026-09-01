export default function Hero({ onOrder, onDiscover }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-700 via-brand-600 to-brand-500 text-white">
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-white blur-3xl" />
        <div className="absolute -bottom-32 -left-16 w-80 h-80 rounded-full bg-brand-300 blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <span className="inline-block bg-white/15 border border-white/30 text-xs font-semibold tracking-wide uppercase px-4 py-1.5 rounded-full mb-5">
            Votre taxi, partout, à tout moment
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-4">
            Déplacez-vous en toute simplicité avec GoMove
          </h1>
          <p className="text-lg text-brand-50/90 mb-8 max-w-xl">
            GoMove connecte instantanément passagers et chauffeurs pour des trajets
            rapides, sûrs et abordables. Commandez votre taxi en quelques secondes,
            où que vous soyez.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={onOrder}
              className="bg-white text-brand-700 font-bold px-7 py-3.5 rounded-full shadow-soft hover:bg-brand-50 transition-colors"
            >
              Commander un taxi
            </button>
            <button
              onClick={onDiscover}
              className="border border-white/60 font-semibold px-7 py-3.5 rounded-full hover:bg-white/10 transition-colors"
            >
              Découvrir GoMove
            </button>
          </div>

          <div className="flex flex-wrap gap-6 mt-10 text-sm text-brand-50/90">
            <div>
              <p className="text-2xl font-extrabold text-white">10 000+</p>
              <p>Courses effectuées</p>
            </div>
            <div>
              <p className="text-2xl font-extrabold text-white">500+</p>
              <p>Chauffeurs partenaires</p>
            </div>
            <div>
              <p className="text-2xl font-extrabold text-white">4.8/5</p>
              <p>Satisfaction client</p>
            </div>
          </div>
        </div>

        <div className="relative hidden md:flex justify-center">
          <div className="w-full max-w-sm bg-white text-brand-900 rounded-3xl shadow-2xl p-6">
            <p className="font-bold text-lg mb-4">Réservez en 3 étapes</p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-brand-500 text-white flex items-center justify-center font-bold">1</div>
                <p className="text-sm font-medium">Indiquez votre point de départ</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-brand-500 text-white flex items-center justify-center font-bold">2</div>
                <p className="text-sm font-medium">Choisissez votre destination</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-brand-500 text-white flex items-center justify-center font-bold">3</div>
                <p className="text-sm font-medium">Confirmez et roulez !</p>
              </div>
            </div>
            <button
              onClick={onOrder}
              className="mt-6 w-full bg-brand-600 hover:bg-brand-700 transition-colors text-white font-semibold py-3 rounded-xl"
            >
              Je commande maintenant
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

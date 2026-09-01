import Logo from "./Logo.jsx";

const SOCIALS = [
  { label: "Facebook", href: "https://facebook.com/gomove", icon: "f" },
  { label: "Instagram", href: "https://instagram.com/gomove", icon: "◎" },
  { label: "X / Twitter", href: "https://x.com/gomove", icon: "𝕏" },
  { label: "WhatsApp", href: "https://wa.me/22900000000", icon: "☎" },
];

export default function Footer() {
  return (
    <footer className="bg-brand-950 text-brand-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <Logo light />
          <p className="text-sm text-brand-200/80 mt-4 leading-relaxed">
            GoMove connecte passagers et chauffeurs pour des trajets rapides, sûrs
            et abordables, partout en ville.
          </p>
        </div>

        <div>
          <h4 className="font-bold text-white mb-4">Navigation</h4>
          <ul className="space-y-2 text-sm text-brand-200/80">
            <li>Accueil</li>
            <li>Tarifs</li>
            <li>Témoignages</li>
            <li>Commander un taxi</li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-white mb-4">Contact</h4>
          <ul className="space-y-2 text-sm text-brand-200/80">
            <li>📍 Cotonou, Bénin</li>
            <li>📞 +229 00 00 00 00</li>
            <li>✉️ contact@gomove.com</li>
            <li>🕐 Disponible 24h/24, 7j/7</li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-white mb-4">Suivez-nous</h4>
          <div className="flex gap-3">
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-brand-500 transition-colors flex items-center justify-center font-semibold"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-6">
        <p className="text-center text-xs text-brand-200/70">
          © {new Date().getFullYear()} GoMove. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}

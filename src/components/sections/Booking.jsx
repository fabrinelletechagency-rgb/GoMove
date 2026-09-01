import { useEffect, useState } from "react";

const VEHICLES = [
  { id: "eco", label: "GoMove Éco", price: "dès 450 F CFA" },
  { id: "confort", label: "GoMove Confort", price: "dès 900 F CFA" },
  { id: "vip", label: "GoMove VIP", price: "dès 1 800 F CFA" },
];

const initialForm = {
  pickup: "",
  destination: "",
  date: "",
  time: "",
  phone: "",
  vehicle: "confort",
  notes: "",
};

export default function Booking({ prefill }) {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(null);

  useEffect(() => {
    if (!prefill) return;
    setForm((f) => ({
      ...f,
      pickup: prefill.pickup || f.pickup,
      destination: prefill.destination || f.destination,
    }));
  }, [prefill]);

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted({ ...form });
  };

  const handleReset = () => {
    setForm(initialForm);
    setSubmitted(null);
  };

  if (submitted) {
    const vehicle = VEHICLES.find((v) => v.id === submitted.vehicle);
    return (
      <div className="max-w-xl mx-auto text-center bg-white rounded-3xl border border-brand-100 shadow-sm p-10">
        <div className="w-16 h-16 rounded-full bg-brand-50 text-brand-600 flex items-center justify-center text-3xl mx-auto mb-5">
          ✅
        </div>
        <h2 className="font-display text-2xl font-bold text-brand-900 mb-2">
          Course réservée avec succès !
        </h2>
        <p className="text-slate-600 mb-6">
          Un chauffeur GoMove vous sera assigné sous peu. Vous recevrez une
          confirmation par SMS au {submitted.phone}.
        </p>
        <div className="text-left bg-brand-50 rounded-2xl p-5 mb-6 text-sm space-y-2">
          <p><span className="font-semibold text-brand-900">Départ :</span> {submitted.pickup}</p>
          <p><span className="font-semibold text-brand-900">Destination :</span> {submitted.destination}</p>
          <p><span className="font-semibold text-brand-900">Date :</span> {submitted.date || "Dès que possible"} {submitted.time}</p>
          <p><span className="font-semibold text-brand-900">Offre :</span> {vehicle?.label} ({vehicle?.price})</p>
        </div>
        <button
          onClick={handleReset}
          className="bg-brand-600 hover:bg-brand-700 transition-colors text-white font-semibold px-6 py-3 rounded-xl"
        >
          Réserver une autre course
        </button>
      </div>
    );
  }

  return (
    <div className="grid md:grid-cols-5 gap-10 items-start">
      <div className="md:col-span-2">
        <h2 className="font-display text-3xl font-bold text-brand-900 mb-3">
          Commander un taxi
        </h2>
        <p className="text-slate-600 mb-6">
          Renseignez les informations de votre trajet et un chauffeur GoMove vous
          prendra en charge en quelques minutes.
        </p>
        <ul className="space-y-4 text-sm text-slate-600">
          <li className="flex items-start gap-3">
            <span className="text-brand-500">📍</span>
            Indiquez précisément votre lieu de départ et d'arrivée.
          </li>
          <li className="flex items-start gap-3">
            <span className="text-brand-500">⏱️</span>
            Réservez immédiatement ou programmez une course future.
          </li>
          <li className="flex items-start gap-3">
            <span className="text-brand-500">📱</span>
            Recevez la confirmation et le suivi de votre chauffeur par SMS.
          </li>
        </ul>
      </div>

      <form
        onSubmit={handleSubmit}
        className="md:col-span-3 bg-white rounded-3xl border border-brand-100 shadow-sm p-6 sm:p-8 space-y-5"
      >
        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label className="block text-sm font-semibold text-brand-900 mb-1.5">
              Lieu de départ
            </label>
            <input
              required
              type="text"
              value={form.pickup}
              onChange={update("pickup")}
              placeholder="Ex : Carrefour Zongo"
              className="w-full rounded-xl border border-brand-100 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-400"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-brand-900 mb-1.5">
              Destination
            </label>
            <input
              required
              type="text"
              value={form.destination}
              onChange={update("destination")}
              placeholder="Ex : Aéroport de Cotonou"
              className="w-full rounded-xl border border-brand-100 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-400"
            />
          </div>
        </div>

        <div className="grid sm:grid-cols-3 gap-5">
          <div>
            <label className="block text-sm font-semibold text-brand-900 mb-1.5">
              Date
            </label>
            <input
              type="date"
              value={form.date}
              onChange={update("date")}
              className="w-full rounded-xl border border-brand-100 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-400"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-brand-900 mb-1.5">
              Heure
            </label>
            <input
              type="time"
              value={form.time}
              onChange={update("time")}
              className="w-full rounded-xl border border-brand-100 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-400"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-brand-900 mb-1.5">
              Téléphone
            </label>
            <input
              required
              type="tel"
              value={form.phone}
              onChange={update("phone")}
              placeholder="+229 00 00 00 00"
              className="w-full rounded-xl border border-brand-100 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-400"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-brand-900 mb-2">
            Choisissez votre offre
          </label>
          <div className="grid sm:grid-cols-3 gap-3">
            {VEHICLES.map((v) => (
              <label
                key={v.id}
                className={`cursor-pointer rounded-xl border px-4 py-3 text-sm transition-colors ${
                  form.vehicle === v.id
                    ? "border-brand-500 bg-brand-50 text-brand-900"
                    : "border-brand-100 text-slate-600 hover:border-brand-300"
                }`}
              >
                <input
                  type="radio"
                  name="vehicle"
                  value={v.id}
                  checked={form.vehicle === v.id}
                  onChange={update("vehicle")}
                  className="sr-only"
                />
                <span className="font-semibold block">{v.label}</span>
                <span className="text-xs text-slate-500">{v.price}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-brand-900 mb-1.5">
            Note pour le chauffeur (optionnel)
          </label>
          <textarea
            value={form.notes}
            onChange={update("notes")}
            rows={3}
            placeholder="Ex : bagages volumineux, portail bleu..."
            className="w-full rounded-xl border border-brand-100 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-400"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-brand-600 hover:bg-brand-700 transition-colors text-white font-bold py-3.5 rounded-xl shadow-soft"
        >
          Confirmer ma course
        </button>
      </form>
    </div>
  );
}

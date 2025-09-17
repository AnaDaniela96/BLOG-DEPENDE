// src/components/NewsletterCard.jsx
import { useState } from "react";

export default function NewsletterCard() {
  const [email, setEmail] = useState("");
  const [ok, setOk] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock: solo mostramos éxito y limpiamos. Aquí conectarás tu API real.
    setOk(true);
    setEmail("");
  };

  return (
    <section className="max-w-6xl mx-auto px-6 my-12">
      <div className="rounded-2xl border bg-white shadow-sm overflow-hidden">
        <div className="grid md:grid-cols-2">
          {/* Lado izq: texto */}
          <div className="p-6 sm:p-8">
            <h2 className="text-2xl sm:text-3xl font-semibold text-brand-navy">
              Suscríbete al newsletter
            </h2>
            <p className="mt-2 text-gray-600">
              Reseñas, ideas y hallazgos de cultura pop con mirada histórica y filosófica. 1–2 veces al mes.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 flex flex-col sm:flex-row gap-3" noValidate>
              <label htmlFor="newsletter-email" className="sr-only">Correo</label>
              <input
                id="newsletter-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="tu@email.com"
                className="w-full sm:flex-1 rounded-lg border px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-brand-blue"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-lg px-5 py-3 font-medium bg-brand-navy text-brand-cream hover:bg-black transition"
              >
                Suscribirme
              </button>
            </form>

            {ok && (
              <p className="mt-3 text-sm text-green-700">
                ¡Gracias! Te avisaré cuando el newsletter esté activo.
              </p>
            )}

            <p className="mt-3 text-xs text-gray-500">
              Al suscribirte aceptas recibir correos ocasionales. Puedes darte de baja cuando quieras.
            </p>
          </div>

          {/* Lado der: estética/tema */}
          <div className="relative hidden md:block">
            <div
              className="absolute inset-0"
              style={{ backgroundColor: "var(--secondary-color)" }}
            />
            <div
              className="absolute inset-0 opacity-30 mix-blend-screen"
              style={{
                backgroundImage:
                  "radial-gradient(600px 200px at 20% 10%, rgba(255,255,255,.25), transparent 60%)",
              }}
            />
            <div className="relative h-full w-full grid place-items-center p-8">
              <div className="rounded-xl bg-white/20 border border-white/40 text-brand-cream backdrop-blur px-4 py-2 text-sm">
                ✨ Historias, ideas y enlaces seleccionados
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

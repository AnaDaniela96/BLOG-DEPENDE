// src/pages/About.jsx
import { Link } from "react-router-dom";

const Pill = ({ children }) => (
  <span className="inline-flex items-center rounded-full border px-3 py-1 text-sm bg-white/60 border-white/30 backdrop-blur">
    {children}
  </span>
);

export default function About() {
  return (
    <div className="space-y-16">
      {/* Hero */}
      <section className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-brand-navy via-black to-brand-blue text-brand-cream">
        <div
          className="absolute inset-0 "
          style={{
            backgroundColor: "var(--accent-color)",
          }}
        />

        <div className="relative max-w-5xl mx-auto px-6 py-16">
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight">
            Revista digital de cultura pop
            <br className="hidden sm:block" />
            con mirada <span className="text-brand-blue">
              filosófica
            </span> e <span className="text-brand-cream">histórica</span>.
          </h1>
          <p className="mt-4 text-brand-cream/90 max-w-3xl">
            Leemos lo cotidiano con lupa: reseñas, crónicas y comentarios para
            pensar lo pop sin perder el encanto.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Pill>#Reseñas</Pill>
            <Pill>#Crónicas</Pill>
            <Pill>#HistoriaCultural</Pill>
            <Pill>#FilosofíaPop</Pill>
            <Pill>#InternetFinds</Pill>
          </div>
        </div>
      </section>

      {/* Quiénes somos / Manifiesto */}
      <section className="max-w-5xl mx-auto px-6 grid md:grid-cols-5 gap-8">
        <div className="md:col-span-2">
          <h2 className="text-2xl font-semibold text-brand-navy">
            ¿Quiénes somos?
          </h2>
          <p className="mt-3 text-gray-700">
            Somos un pequeño equipo (y una gran curiosidad) que cruza{" "}
            <strong>cultura pop</strong> con
            <strong> preguntas filosóficas</strong> y{" "}
            <strong>contexto histórico</strong>. Nos gustan los guiños, los
            memes y las bibliografías. Publicamos lo que nos mueve y buscamos
            conversación, no dogma.
          </p>
          <ul className="mt-4 space-y-2 text-gray-700">
            <li>• Rigurosidad amable (fuentes y humor pueden convivir).</li>
            <li>• Mirada crítica sin elitismo.</li>
            <li>• Amor por las referencias y las conexiones raras.</li>
          </ul>
        </div>
        <div className="md:col-span-3">
          <div className="rounded-xl border bg-white p-6 shadow-sm">
            <h3 className="text-lg font-medium text-brand-navy">
              Qué vas a encontrar
            </h3>
            <div className="mt-4 grid sm:grid-cols-2 gap-4">
              <Card
                title="Reseñas con contexto"
                body="Películas, series, discos y libros leídos con lentes históricos y filosóficos."
              />
              <Card
                title="Crónicas de internet"
                body="Hallazgos, tendencias, hilos y rarezas que merecen un comentario."
              />
              <Card
                title="Glosario pop"
                body="Conceptos clave explicados sin rollos, con ejemplos de la cultura pop."
              />
              <Card
                title="Bitácora creativa"
                body="Aprendizajes de front y diseño web: cómo lo hacemos y qué herramientas usamos."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Autoras/es (mock) */}
      <section className="max-w-5xl mx-auto px-6">
        <h2 className="text-2xl font-semibold text-brand-navy">El equipo</h2>
        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AuthorCard
            name="Daniela"
            role="Editora / Front & UX"
            bio="Cruzo historia cultural, filosofía y web bonita. Hija de la quesadilla 🌽🧀."
          />
          <AuthorCard
            name="Invitades"
            role="Colaboración"
            bio="Ensayos, reseñas y crónicas a varias voces. Si te late, escribe."
          />
          <AuthorCard
            name="Comunidad"
            role="Lectores críticos"
            bio="Comentarios con cariño y referencias que suman. Esto es diálogo."
          />
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-5xl mx-auto px-6">
        <div className="rounded-2xl border bg-brand-cream p-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h3 className="text-xl font-semibold text-brand-navy">
              ¿Te late esta mezcla?
            </h3>
            <p className="text-gray-700">
              Sigue el blog, o pásate a la miscelanea.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link to="/blog" className="btn-primary">
              Leer el blog
            </Link>
            <Link to="/play" className="btn-ghost">
              Ve a la Miscelánea! 🌮✨
            </Link>
          </div>
        </div>
      </section>

      {/* Redes / contacto */}
      <section className="max-w-5xl mx-auto px-6 pb-10">
        <div className="rounded-xl border bg-white p-6">
          <h3 className="text-lg font-medium text-brand-navy">Conecta</h3>
          <ul className="mt-3 flex flex-wrap gap-4 text-sm">
            <li>
              <a className="link" href="#" target="_blank" rel="noreferrer">
                Instagram
              </a>
            </li>
            <li>
              <a className="link" href="#" target="_blank" rel="noreferrer">
                X / Twitter
              </a>
            </li>
            <li>
              <a className="link" href="mailto:hola@tusitio.com">
                hola@tusitio.com
              </a>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}

/* --- Subcomponentes simples --- */

function Card({ title, body }) {
  return (
    <div className="rounded-lg border p-4 bg-white hover:shadow transition">
      <h4 className="font-medium text-brand-navy">{title}</h4>
      <p className="mt-1 text-gray-700 text-sm">{body}</p>
    </div>
  );
}

function AuthorCard({ name, role, bio }) {
  return (
    <article className="rounded-xl border bg-white p-5 hover:shadow-sm transition">
      <div className="flex items-start gap-4">
        <div className="h-12 w-12 rounded-full bg-brand-blue/20 grid place-items-center text-brand-navy font-semibold">
          {name.slice(0, 1)}
        </div>
        <div>
          <h4 className="font-medium text-brand-navy">{name}</h4>
          <p className="text-sm text-gray-600">{role}</p>
        </div>
      </div>
      <p className="mt-3 text-sm text-gray-700">{bio}</p>
    </article>
  );
}

import { Link } from "react-router-dom";

import CategoryGrid from "../components/CategoryGrid";
import { InfoCard } from "../../../components/infoCards";
import NewsletterCard from "../../../components/NewsletterCard";

import posts from "@/features/blog/data/post";

function SectionTitle({ children, to }) {
    return (
      <div className="flex items-end justify-between gap-4">
        <h2 className="text-2xl sm:text-3xl font-semibold text-brand-navy">
          {children}
        </h2>
        {to && (
          <Link
            to={to}
            className="text-sm text-brand-navy hover:text-brand-blue underline underline-offset-4"
          >
            Ver todo →
          </Link>
        )}
      </div>
    );
  }

  function MiniCard({ title, subtitle, to, cover }) {
    return (
      <Link
        to={to}
        className="group rounded-xl border bg-white overflow-hidden hover:shadow-md transition"
      >
        {cover && (
          <img src={cover} alt={title} className="h-40 w-full object-cover" />
        )}
        <div className="minicard p-4">
          <h3 className="minicard-text font-medium group-hover:underline">
            {title}
          </h3>
          {subtitle && <p className="minicard-text text-sm mt-1">{subtitle}</p>}
        </div>
      </Link>
    );
  }

export default function PlayIndex() {
  const latestPosts = [...posts]
      .sort((a, b) => new Date(b.date) - new Date(a.date))
      .slice(0, 3);

  return (
    <section className="space-y-16">
      {/* <section className="m-10">
        <h1 className="text-3xl font-semibold">Zona Miscelanea 🎮</h1>
        <p className="text-gray-600">
          Aquí voy creando y escribiendo diferentes temas.
        </p>
      </section> */}

      <CategoryGrid
        items={[
          {
            to: "/play/movies",
            title: "Cine",
            subtitle: "Reseñas y fichas",
            emoji: "🎬",
            bgVar: "--secondary-color", // morado
            stat: "12",
            // image: "/img/bg-cine.jpg", // si quieres imagen de fondo
          },
          {
            to: "/miscelanea/series",
            title: "Series",
            subtitle: "Temporadas y comentarios",
            emoji: "📺",
            bgVar: "--primary-color", // azul oscuro
            stat: "8",
          },
          {
            to: "/miscelanea/literatura",
            title: "Literatura",
            subtitle: "Citas y reseñas",
            emoji: "📚",
            bgVar: "--accent-color", // amarillo
            stat: "10",
            // image: "/img/bg-libros.jpg",
          },
          {
            to: "/miscelanea/musica",
            title: "Música",
            subtitle: "Discos y playlists",
            emoji: "🎧",
            bgVar: "--text-color", // gris oscuro (queda lindo con el velo)
            stat: "7",
          },
        ]}
      />

      {/* ÚLTIMOS POSTS */}
      <section className="max-w-6xl mx-auto px-6 mt-5">
        <SectionTitle to="/blog">Visita la sección de música</SectionTitle>
        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {latestPosts.map((p) => (
            <MiniCard
              key={p.slug}
              title={p.title}
              subtitle={p.excerpt}
              to={`/blog/${p.slug}`}
              cover={p.cover}
            />
          ))}
        </div>
      </section>

      {/* ÚLTIMOS POSTS */}
      <section className="max-w-6xl mx-auto px-6 mt-5">
        <SectionTitle to="/blog">Conoce lo que decimos sobre series</SectionTitle>
        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {latestPosts.map((p) => (
            <MiniCard
              key={p.slug}
              title={p.title}
              subtitle={p.excerpt}
              to={`/blog/${p.slug}`}
              cover={p.cover}
            />
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6">
        <InfoCard
          title="Visita el blog"
          text="Nos encanta escribir. Somos fans del arte, la música y el conocimiento."
          buttonText="Da clic para leer los últimos post"
          buttonLink="/blog"
          imageSrc="/icons/icons-.svg"
          backgroundColor="var(--background-color)"
        />
      </section>

      <NewsletterCard />
    </section>
  );
}

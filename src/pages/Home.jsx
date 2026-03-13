import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import movies from "@/features/play/movies/data/movies";
import { InfoCard } from "../components/infoCards";

import "@/styles/pages/home.css";
import PostsCarousel from "../features/blog/components/PostCarrusel";
import NewsletterCard from "../components/NewsletterCard";
import FeaturedContent from "../components/FeaturedContent";

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

export default function Home() {
  const [latestPosts, setLatestPosts] = useState([]);
  const [loadingPosts, setLoadingPosts] = useState(true);
  const [postsError, setPostsError] = useState("");

  const latestMovies = movies.slice(0, 3);

  useEffect(() => {
    const fetchLatestPosts = async () => {
      try {
        setLoadingPosts(true);
        setPostsError("");

        const response = await fetch("http://localhost:3001/api/content");

        if (!response.ok) {
          throw new Error("No se pudieron cargar los posts");
        }

        const data = await response.json();

        const latestThree = data.slice(0, 3);
        setLatestPosts(latestThree);
      } catch (error) {
        console.error("Error cargando últimos posts:", error);
        setPostsError(error.message || "Ocurrió un error");
      } finally {
        setLoadingPosts(false);
      }
    };

    fetchLatestPosts();
  }, []);

  return (
    <div className="space-y-14">
      <section className="relative overflow-hidden rounded-b-lg text-brand-cream">
        <div
          className="absolute inset-0 opacity-95"
          style={{ backgroundColor: "var(--accent-color)" }}
        />
        <div
          className="absolute inset-0 opacity-25 mix-blend-screen"
          style={{
            backgroundImage:
              "radial-gradient(600px 200px at 20% 10%, rgba(255,255,255,.25), transparent 60%)",
          }}
        />
        <div className="relative max-w-6xl mx-auto px-6 py-16 sm:py-24">
          <p className="uppercase tracking-[.2em] text-sm opacity-90">
            Depende Revista digital
          </p>
          <h1 className="mt-2 text-3xl sm:text-5xl font-bold leading-tight">
            Cultura pop con mirada{" "}
            <span className="opacity-90">filosófica</span> e{" "}
            <span className="opacity-90">histórica</span>
          </h1>
          <p className="mt-4 max-w-2xl text-brand-cream/90">
            Reseñas, crónicas y hallazgos de internet. Una miscelánea para
            pensar lo cotidiano sin perder el encanto.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <span className="inline-flex items-center rounded-full border px-3 py-1 text-sm bg-white/20 border-black/30">
              #Reseñas
            </span>
            <span className="inline-flex items-center rounded-full border px-3 py-1 text-sm bg-white/20 border-black/30">
              #HistoriaCultural
            </span>
            <span className="inline-flex items-center rounded-full border px-3 py-1 text-sm bg-white/20 border-black/30">
              #FilosofíaPop
            </span>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/blog"
              className="inline-flex items-center rounded-lg px-4 py-2 font-medium bg-brand-navy text-brand-cream hover:bg-white transition"
            >
              Leer el blog
            </Link>
            <Link
              to="/miscelanea"
              className="inline-flex items-center rounded-lg px-4 py-2 font-medium border border-brand-cream text-brand-cream hover:bg-brand-cream hover:text-brand-navy transition"
            >
              Miscelánea
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center rounded-lg px-4 py-2 font-medium bg-brand-navy text-brand-cream hover:bg-white transition"
            >
              ¿Quiénes somos?
            </Link>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6">
        <SectionTitle to="/blog">Visita el blog</SectionTitle>

        {loadingPosts && (
          <p className="mt-6 text-gray-600">Cargando últimos posts...</p>
        )}

        {postsError && (
          <p className="mt-6 text-red-600">{postsError}</p>
        )}

        {!loadingPosts && !postsError && (
          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {latestPosts.map((p) => (
              <MiniCard
                key={p.slug}
                title={p.title}
                subtitle={p.excerpt}
                to={`/blog/${p.slug}`}
                cover={p.cover_url}
              />
            ))}
          </div>
        )}
      </section>

      <FeaturedContent />

      <section className="max-w-6xl mx-auto px-6">
        <SectionTitle to="/miscelanea">¿Qué ver?</SectionTitle>
        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {latestMovies.map((m) => (
            <MiniCard
              key={m.id}
              title={m.name}
              subtitle={`${m.year} · ${
                Array.isArray(m.genre) ? m.genre.join(", ") : m.genre
              }`}
              to={`/play/movies/${m.id}`}
              cover={m.url_imagen}
            />
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6">
        <InfoCard
          title="¿Qué nos mueve?"
          text="Nos encanta escribir. Somos fans del arte, la música y el conocimiento."
          buttonText="Conoce nuestro proyecto"
          buttonLink="/about"
          imageSrc="/icons/icons-.svg"
          backgroundColor="var(--accent-color)"
        />
      </section>

      <section className="max-w-6xl mx-auto px-6">
        <SectionTitle to="/miscelanea">Recomendaciones de libros</SectionTitle>
        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {latestMovies.map((m) => (
            <MiniCard
              key={m.id}
              title={m.name}
              subtitle={`${m.year} · ${
                Array.isArray(m.genre) ? m.genre.join(", ") : m.genre
              }`}
              to={`/play/movies/${m.id}`}
              cover={m.url_imagen}
            />
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 my-12">
        <div className="rounded-2xl border card-podcast shadow-sm overflow-hidden">
          <div className="p-6 sm:p-8">
            <h2 className="text-2xl sm:text-3xl font-semibold text-brand-navy flex items-center gap-2">
              🎙 Escucha el podcast
            </h2>
            <p className="mt-2 text-gray-600 max-w-2xl">
              Conversaciones y notas sobre cultura pop con mirada histórica y
              filosófica. Síguelo en Spotify para no perderte los episodios
              nuevos.
            </p>
          </div>

          <div className="px-6 pb-6 sm:px-8">
            <iframe
              title="Podcast player"
              style={{ borderRadius: "12px" }}
              src="https://open.spotify.com/embed/show/647LVrV3SbYku0YbjmDP5R?utm_source=generator&theme=0"
              width="100%"
              height="232"
              frameBorder={0}
              allowFullScreen
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              className="w-full"
            ></iframe>
          </div>
        </div>
      </section>

      <PostsCarousel />
      <NewsletterCard />
    </div>
  );
}
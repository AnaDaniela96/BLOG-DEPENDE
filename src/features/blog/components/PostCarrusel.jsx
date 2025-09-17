import { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import postsData from "@/features/blog/data/post";

function PostSlide({ post }) {
  return (
    <Link
      to={`/blog/${post.slug}`}
      className="group block min-w-[260px] max-w-[280px] snap-start rounded-xl border bg-white overflow-hidden hover:shadow-md transition"
      aria-label={post.title}
    >
      {post.cover && (
        <img
          src={post.cover}
          alt={post.title}
          className="h-40 w-full object-cover"
          loading="lazy"
        />
      )}
      <div className="p-4">
        <h3 className="font-medium text-brand-navy group-hover:underline line-clamp-2">
          {post.title}
        </h3>
        {post.excerpt && (
          <p className="mt-1 text-sm text-gray-600 line-clamp-2">
            {post.excerpt}
          </p>
        )}
      </div>
    </Link>
  );
}

export default function PostsCarousel() {
  // ordena por fecha desc y toma los últimos 10
  const items = useMemo(
    () =>
      [...postsData]
        .sort((a, b) => new Date(b.date) - new Date(a.date))
        .slice(0, 10),
    []
  );

  const trackRef = useRef(null);
  const [canLeft, setCanLeft] = useState(false);
  const [canRight, setCanRight] = useState(true);

  function updateArrows() {
    const el = trackRef.current;
    if (!el) return;
    const { scrollLeft, scrollWidth, clientWidth } = el;
    setCanLeft(scrollLeft > 0);
    setCanRight(scrollLeft + clientWidth < scrollWidth - 1);
  }

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    updateArrows();
    const onScroll = () => updateArrows();
    const onResize = () => updateArrows();
    el.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    return () => {
      el.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  const scrollByCards = (dir = 1) => {
    const el = trackRef.current;
    if (!el) return;
    // desplazamiento aproximado: 1.25 cards
    const cardWidth = 280; // coincide con max-w
    const gap = 24;        // gap-6 = 1.5rem = 24px
    const delta = dir * (cardWidth + gap) * 1.25;
    el.scrollBy({ left: delta, behavior: "smooth" });
  };

  if (!items.length) return null;

  return (
    <section className="max-w-6xl mx-auto px-6 my-12">
      <div className="flex items-end justify-between mb-4">
        <h2 className="text-2xl sm:text-3xl font-semibold text-brand-navy">
          Últimas entradas
        </h2>
        <Link
          to="/blog"
          className="text-sm text-brand-navy hover:text-brand-blue underline underline-offset-4"
        >
          Ver blog →
        </Link>
      </div>

      <div className="relative">
        {/* Flecha izquierda */}
        <button
          type="button"
          onClick={() => scrollByCards(-1)}
          disabled={!canLeft}
          aria-label="Anterior"
          className={`hidden sm:flex absolute -left-3 top-1/2 -translate-y-1/2 z-10 h-10 w-10 items-center justify-center rounded-full border bg-white shadow transition
            ${canLeft ? "opacity-100" : "opacity-30 cursor-not-allowed"}`}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M15 18l-6-6 6-6" />
          </svg>
        </button>

        {/* Track */}
        <div
          ref={trackRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth pr-3"
          style={{ scrollbarWidth: "none" }}
          onScroll={updateArrows}
        >
          {/* Oculta scrollbar en WebKit */}
          <style>{`
            .hide-scrollbar::-webkit-scrollbar { display: none; }
          `}</style>
          <div className="hide-scrollbar flex gap-6">
            {items.map((p) => (
              <PostSlide key={p.slug} post={p} />
            ))}
          </div>
        </div>

        {/* Flecha derecha */}
        <button
          type="button"
          onClick={() => scrollByCards(1)}
          disabled={!canRight}
          aria-label="Siguiente"
          className={`hidden sm:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10 h-10 w-10 items-center justify-center rounded-full border bg-white shadow transition
            ${canRight ? "opacity-100" : "opacity-30 cursor-not-allowed"}`}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </div>
    </section>
  );
}

// src/components/CategoryGrid.jsx
import { Link } from "react-router-dom";

/**
 * items: Array de
 * {
 *   to: "/miscelanea/cine",
 *   title: "Cine",
 *   subtitle: "Reseñas y fichas",
 *   emoji: "🎬",                    // o deja "" si no quieres
 *   bgVar: "--secondary-color",     // var de :root (ej: --primary-color, --accent-color)
 *   stat: "12",                     // opcional: contador / chip
 *   image: "/img/bg-cine.jpg"       // opcional: imagen de fondo
 * }
 */
export default function CategoryGrid({ items = [] }) {
  return (
    <section className="max-w-6xl mx-auto px-6 my-10">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((it) => (
          <CategoryCard key={it.to} {...it} />
        ))}
      </div>
    </section>
  );
}

function CategoryCard({ to, title, subtitle, emoji, bgVar, stat, image }) {
  return (
    <Link
      to={to}
      aria-label={title}
      className="group relative rounded-2xl overflow-hidden border bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-black/50"
      style={
        image
          ? {} // si hay imagen, controlamos el fondo con <img />
          : { backgroundColor: `var(${bgVar || "--background-color"})` }
      }
    >
      {/* Fondo imagen (opcional) */}
      {image && (
        <>
          <img
            src={image}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* velo para legibilidad */}
          <div className="absolute inset-0 bg-black/25" />
        </>
      )}

      {/* brillo radial sutil */}
      <div
        className="absolute inset-0 opacity-20 mix-blend-screen"
        style={{
          backgroundImage:
            "radial-gradient(500px 160px at 15% 10%, rgba(255,255,255,.35), transparent 60%)",
        }}
      />

      {/* Contenido */}
      <div className="relative p-5 min-h-[140px] flex flex-col justify-between text-white">
        <div className="flex items-center justify-between">
          <div className="text-2xl leading-none drop-shadow">
            {emoji || "✦"}
          </div>
          {stat && (
            <span className="text-xs px-2 py-1 rounded-full bg-white/20 border border-white/30 backdrop-blur">
              {stat}
            </span>
          )}
        </div>

        <div>
          <h3 className="text-lg font-semibold leading-tight drop-shadow">
            {title}
          </h3>
          {subtitle && (
            <p className="text-sm opacity-90 drop-shadow">{subtitle}</p>
          )}
        </div>
      </div>

      {/* efectos hover */}
      <div className="absolute inset-0 transition-transform duration-300 group-hover:scale-[1.03]" />
      <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity bg-white" />
    </Link>
  );
}

import { useEffect, useMemo, useState } from "react";

export default function BlogHeader({
  q,
  setQ,
  tag,
  setTag,
  allTags = [],
  total = 0,          // opcional: cantidad de posts (para mostrar conteo)
  defaultOpen = false // filtros abiertos por default en mobile
}) {
  const [open, setOpen] = useState(defaultOpen);

  // Para mostrar chips ordenados alfabéticamente
  const tagsSorted = useMemo(() => [...allTags].sort(), [allTags]);

  // Cerrar filtros al cambiar tamaño a desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 640) setOpen(true);
    };
    setOpen(window.innerWidth >= 640 ? true : defaultOpen);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [defaultOpen]);

  const clearSearch = () => setQ("");

  return (
    <header className="max-w-6xl mx-auto px-6 my-10">
      {/* Top bar */}
      <div className="px-5 py-5 sm:px-7 sm:py-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="text-2xl sm:text-3xl font-semibold text-brand-navy">Blog</h1>
          <p className="text-sm text-gray-600 mt-2">
            Lecturas histórico-pop, reseñas y crónicas ·{" "}
            <span className="font-medium text-gray-800">{total}</span> entradas
          </p>
        </div>

        {/* Toggle filtros (solo visible en xs) */}
        <button
          className="sm:hidden mt-2 inline-flex items-center gap-2 rounded-lg border px-3 py-2 text-sm hover:bg-gray-50"
          onClick={() => setOpen(v => !v)}
          aria-expanded={open}
          aria-controls="blog-filters"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M3 6h18M6 12h12M10 18h4"/>
          </svg>
          {open ? "Ocultar filtros" : "Mostrar filtros"}
        </button>
      </div>

      {/* Filters */}
      <div
        id="blog-filters"
        className={`px-5 sm:px-7 pb-5 sm:pb-7 transition-all duration-200 ${
          open ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          {/* Search */}
          <div className="flex w-full sm:w-auto items-center gap-2">
            <div className="relative w-full sm:w-80">
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Buscar…"
                className="w-full rounded-lg border pl-10 pr-10 py-2.5 focus:outline-none focus:ring-2 focus:ring-brand-blue"
                aria-label="Buscar en el blog"
              />
              <svg
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
                width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
              >
                <circle cx="11" cy="11" r="7" strokeWidth="2"/><path d="M21 21l-3.5-3.5" strokeWidth="2"/>
              </svg>
              {q && (
                <button
                  onClick={clearSearch}
                  className="absolute right-2 top-1/2 -translate-y-1/2 rounded-md px-2 py-1 text-xs bg-gray-100 hover:bg-gray-200"
                  aria-label="Limpiar búsqueda"
                >
                  Limpiar
                </button>
              )}
            </div>
          </div>

          {/* Select tag */}
          <div className="flex items-center gap-2">
            <label htmlFor="tag-select" className="text-sm text-gray-600">Etiqueta:</label>
            <select
              id="tag-select"
              value={tag}
              onChange={(e) => setTag(e.target.value)}
              className="rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-blue"
            >
              <option value="">Todas</option>
              {tagsSorted.map((t) => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Chips (móvil / también útil en desktop) */}
        {tagsSorted.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            <button
              onClick={() => setTag("")}
              className={`px-3 py-1.5 rounded-full border text-sm transition
                ${!tag ? "bg-brand-blue/10 border-brand-blue/30 text-brand-navy" : "hover:bg-gray-50"}`}
            >
              Todas
            </button>
            {tagsSorted.map((t) => (
              <button
                key={t}
                onClick={() => setTag(t)}
                className={`px-3 py-1.5 rounded-full border text-sm transition ${
                  tag === t
                    ? "bg-brand-blue/10 border-brand-blue/30 text-brand-navy"
                    : "hover:bg-gray-50"
                }`}
              >
                #{t}
              </button>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}

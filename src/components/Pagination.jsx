export default function Pagination({
  page,            // número actual (1-based)
  setPage,         // setter de estado
  total,           // total de items
  pageSize = 10,   // por defecto 10
  maxButtons = 5,  // cuántos números mostrar en la tira
}) {
  const totalPages = Math.max(1, Math.ceil(total / pageSize));
  if (totalPages <= 1) return null;

  const go = (p) => setPage(Math.min(totalPages, Math.max(1, p)));

  // rango de botones centrado
  const half = Math.floor(maxButtons / 2);
  let start = Math.max(1, page - half);
  let end = Math.min(totalPages, start + maxButtons - 1);
  if (end - start + 1 < maxButtons) start = Math.max(1, end - maxButtons + 1);

  const pages = [];
  for (let i = start; i <= end; i++) pages.push(i);

  return (
    <nav className="mt-8 flex items-center justify-center gap-2 select-none" aria-label="Paginación">
      <button
        onClick={() => go(page - 1)}
        disabled={page === 1}
        className="px-3 py-2 rounded-lg border bg-white text-sm disabled:opacity-40 hover:bg-gray-50"
        aria-label="Página anterior"
      >
        ←
      </button>

      {start > 1 && (
        <>
          <button onClick={() => go(1)} className="px-3 py-2 rounded-lg border bg-white text-sm hover:bg-gray-50">1</button>
          {start > 2 && <span className="px-1 text-gray-500">…</span>}
        </>
      )}

      {pages.map((p) => (
        <button
          key={p}
          onClick={() => go(p)}
          className={`px-3 py-2 rounded-lg border text-sm hover:bg-gray-50 ${
            p === page ? "bg-brand-navy text-brand-cream border-brand-navy" : "bg-white"
          }`}
          aria-current={p === page ? "page" : undefined}
        >
          {p}
        </button>
      ))}

      {end < totalPages && (
        <>
          {end < totalPages - 1 && <span className="px-1 text-gray-500">…</span>}
          <button onClick={() => go(totalPages)} className="px-3 py-2 rounded-lg border bg-white text-sm hover:bg-gray-50">
            {totalPages}
          </button>
        </>
      )}

      <button
        onClick={() => go(page + 1)}
        disabled={page === totalPages}
        className="px-3 py-2 rounded-lg border bg-white text-sm disabled:opacity-40 hover:bg-gray-50"
        aria-label="Página siguiente"
      >
        →
      </button>
    </nav>
  );
}

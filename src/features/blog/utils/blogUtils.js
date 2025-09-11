export function formatDate(iso) {
  const d = new Date(iso);
  return d.toLocaleDateString("es-MX", { year: "numeric", month: "long", day: "numeric" });
}

export function readingTime(text) {
  const words = text?.split(/\s+/).filter(Boolean).length || 0;
  const mins = Math.max(1, Math.round(words / 200));
  return `${mins} min de lectura`;
}

export function classNames(...xs) {
  return xs.filter(Boolean).join(" ");
}

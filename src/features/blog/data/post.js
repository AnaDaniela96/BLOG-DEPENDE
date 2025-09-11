export const posts = [
    {
    slug: "bienvenida",
    title: "Bienvenida: una revista digital histórico-pop",
    date: "2025-09-10",
    tags: ["editorial", "presentación"],
    cover: "/img/cover-bienvenida.jpg",
    // 👇 SEO
    description: "Qué encontrarás aquí y por qué mezclamos cultura pop, historia y filosofía.",
    ogImage: "/img/og-bienvenida.jpg", // opcional, 1200x630 recomendado
    // 👇 Contenido en Markdown (simple por ahora)
    content: `
# Bienvenida

**Hola**. Esta es una revista digital donde cruzo cultura pop con preguntas
filosóficas e históricas. Aquí encontrarás:

- Reseñas con contexto
- Crónicas de internet
- Glosario pop
- Bitácora creativa (front + diseño web)

## ¿Por qué?
Porque lo cotidiano también merece lectura profunda.  
Nos gustan los guiños, las fuentes, y la conversación.

### Referencias
- Libro X (ed. tal, año tal)
- Ensayo Y (enlace, si aplica)
    `.trim()
  },
  {
    slug: "bienvenida",
    title: "Bienvenida: mezclo historia, mitos y front",
    date: "2025-09-09",
    excerpt: "Por qué abrí este blog y qué vas a encontrar.",
    tags: ["personal", "mitos", "frontend"]
  },
  {
    slug: "bienvenida",
    id: 1,
    title: "Mi primera entrada",
    content: "Este es el contenido de la entrada.",
    tags: ["personal", "inicio"],
    date: "2025-03-27",
    assets: ["imagen1.jpg"],
  },
  {
    slug: "bienvenida",
    id: 2,
    title: "Cómo construí mi blog",
    content: "Hablemos sobre mi proceso.",
    tags: ["tecnología", "desarrollo"],
    date: "2025-03-28",
    assets: ["imagen2.jpg"],
  },
  {
    slug: "bienvxxenida",
    id: 3,
    title: "Te gusta La filosofía",
    content: "Hablemos sobre mi proceso.",
    tags: ["tecnología", "desarrollo"],
    date: "2025-03-28",
    assets: ["imagen2.jpg"],
  },
  {
    slug: "bienvqqqqqqqqqqqqqqenida",
    id: 4,
    title: "Prefiero no decir nada",
    content: "Hablemos sobre mi proceso.",
    tags: ["tecnología", "desarrollo"],
    date: "2025-03-28",
    assets: ["imagen2.jpg"],
  },
  {
    slug: "bienvsssenida",
    id: 5,
    title: "Mi primer texto sobre minimalismo digital",
    content: "Hablemos sobre mi proceso.",
    tags: ["tecnología", "desarrollo"],
    date: "2025-03-28",
    assets: ["imagen2.jpg"],
  },
];

export default posts;

// import posts from "../data/post";
// import { useMemo, useState } from "react";
// import PostCard from "../components/PostCard";
// import BlogHeader from "../components/BlogHeader";

// export default function BlogList() {
//   const [q, setQ] = useState("");
//   const [tag, setTag] = useState("");

//   const allTags = useMemo(() => {
//     const s = new Set();
//     posts.forEach((p) => p.tags?.forEach((t) => s.add(t)));
//     return Array.from(s);
//   }, []);

//   const filtered = useMemo(() => {
//     return posts
//       .filter(
//         (p) =>
//           (!q ||
//             (p.title + p.excerpt + p.content)
//               .toLowerCase()
//               .includes(q.toLowerCase())) &&
//           (!tag || p.tags?.includes(tag))
//       )
//       .sort((a, b) => new Date(b.date) - new Date(a.date));
//   }, [q, tag]);

//   return (
//     <div className="m-4 space-y-6">
//       <BlogHeader
//         q={q}
//         setQ={setQ}
//         tag={tag}
//         setTag={setTag}
//         allTags={allTags}
//         total={filtered.length} // o posts.length si quieres total general
//       />

//       {/* <section className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         {filtered.map((p) => (
//           <PostCard key={p.slug} post={p} />
//         ))}
//       </section> */}
 
//       <div className="space-y-3">
//   {posts.slice(0, 5).map((p) => (
//     <PostCard key={p.slug} post={p} />
//   ))}
// </div>

//     </div>
//   );
// }
import { useMemo, useState, useEffect } from "react";
import posts from "../data/post";
 import PostCard from "../components/PostCard";
import BlogHeader from "../components/BlogHeader";
import Pagination from "@/components/Pagination";
import NewsletterCard from "../../../components/NewsletterCard";


export default function BlogList() {
  const [q, setQ] = useState("");
  const [tag, setTag] = useState("");
  const [page, setPage] = useState(1);
  const PAGE_SIZE = 10;

  // tags únicas
  const allTags = useMemo(() => {
    const s = new Set();
    posts.forEach(p => p.tags?.forEach(t => s.add(t)));
    return Array.from(s);
  }, []);

  // filtra y ordena
  const filtered = useMemo(() => {
    const res = posts
      .filter(p =>
        (!q || (p.title + p.excerpt + p.content).toLowerCase().includes(q.toLowerCase())) &&
        (!tag || p.tags?.includes(tag))
      )
      .sort((a, b) => new Date(b.date) - new Date(a.date));
    return res;
  }, [q, tag]);

  // resetea a página 1 cuando cambian los filtros
  useEffect(() => { setPage(1); }, [q, tag]);

  // calcula el slice visible
  const start = (page - 1) * PAGE_SIZE;
  const visible = filtered.slice(start, start + PAGE_SIZE);

  // (opcional) scroll a top al cambiar de página
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [page]);

  return (
    <div className="space-y-6">
      <BlogHeader 
        q={q}
        setQ={setQ}
        tag={tag}
        setTag={setTag}
        allTags={allTags}
        total={filtered.length}
      />

      {/* grid de posts de la página actual */}
      <section className="max-w-6xl mx-auto px-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {visible.map(p => <PostCard key={p.slug} post={p} />)}
        {visible.length === 0 && (
          <p className="text-gray-600 col-span-full">No hay resultados con esos filtros.</p>
        )}
      </section>

      {/* paginación */}
      <Pagination
        page={page}
        setPage={setPage}
        total={filtered.length}
        pageSize={PAGE_SIZE}
      />

      {/* 👇 aquí puedes agregar lo que quieras en el footer del listado */}
      <div className="max-w-6xl mx-auto px-6 my-10">
        <NewsletterCard />
      </div>
    </div>

    
  );
}

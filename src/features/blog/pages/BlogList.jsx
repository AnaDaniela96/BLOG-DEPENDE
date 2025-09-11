import posts  from "../data/post";
import { useMemo, useState } from "react";
import PostCard from "../components/PostCard";

export default function BlogList() {
  const [q, setQ] = useState("");
  const [tag, setTag] = useState("");

  const allTags = useMemo(() => {
    const s = new Set();
    posts.forEach(p => p.tags?.forEach(t => s.add(t)));
    return Array.from(s);
  }, []);

  const filtered = useMemo(() => {
    return posts
      .filter(p =>
        (!q || (p.title + p.excerpt + p.content).toLowerCase().includes(q.toLowerCase())) &&
        (!tag || p.tags?.includes(tag))
      )
      .sort((a, b) => new Date(b.date) - new Date(a.date));
  }, [q, tag]);

  return (
    <div className="space-y-6">
      <header className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-3xl font-semibold">Blog</h1>
        <div className="flex gap-2">
          <input
            value={q}
            onChange={e => setQ(e.target.value)}
            placeholder="Buscar…"
            className="w-56 rounded-lg border px-3 py-2"
          />
          <select
            value={tag}
            onChange={e => setTag(e.target.value)}
            className="rounded-lg border px-3 py-2"
          >
            <option value="">Todas las etiquetas</option>
            {allTags.map(t => <option key={t} value={t}>{t}</option>)}
          </select>
        </div>
      </header>

      <section className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map(p => <PostCard key={p.slug} post={p} />)}
      </section>
    </div>
  );
}


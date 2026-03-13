import { useMemo, useState, useEffect } from "react";
import PostCard from "../components/PostCard";
import BlogHeader from "../components/BlogHeader";
import Pagination from "@/components/Pagination";
import NewsletterCard from "../../../components/NewsletterCard";

const getTagName = (tag) => {
  if (!tag) return "";
  return typeof tag === "string" ? tag : tag.name || "";
};

export default function BlogList() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [q, setQ] = useState("");
  const [tag, setTag] = useState("");
  const [page, setPage] = useState(1);

  const PAGE_SIZE = 10;

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await fetch("http://localhost:3001/api/content");

        if (!response.ok) {
          throw new Error("No se pudieron cargar los posts");
        }

        const data = await response.json();
        setPosts(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Ocurrió un error cargando los posts");
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const allTags = useMemo(() => {
    const uniqueTags = new Set();

    posts.forEach((post) => {
      post.tags?.forEach((t) => {
        const name = getTagName(t).trim();
        if (name) uniqueTags.add(name);
      });
    });

    return Array.from(uniqueTags).sort((a, b) => a.localeCompare(b));
  }, [posts]);

  const filtered = useMemo(() => {
    const term = q.trim().toLowerCase();
    const selectedTag = tag.trim().toLowerCase();

    return [...posts]
      .filter((post) => {
        const tagNames = (post.tags || [])
          .map((t) => getTagName(t).trim())
          .filter(Boolean);

        const searchableText = [
          post.title || "",
          post.excerpt || "",
          post.body_markdown || "",
          post.seo_description || "",
          ...tagNames,
        ]
          .join(" ")
          .toLowerCase();

        const matchesQuery = !term || searchableText.includes(term);

        const matchesTag =
          !selectedTag ||
          tagNames.some((name) => name.toLowerCase() === selectedTag);

        return matchesQuery && matchesTag;
      })
      .sort((a, b) => {
        const dateA = new Date(a.published_at || a.created_at || 0).getTime();
        const dateB = new Date(b.published_at || b.created_at || 0).getTime();
        return dateB - dateA;
      });
  }, [posts, q, tag]);

  useEffect(() => {
    setPage(1);
  }, [q, tag]);

  const start = (page - 1) * PAGE_SIZE;
  const visible = filtered.slice(start, start + PAGE_SIZE);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [page]);

  if (loading) {
    return (
      <div className="max-w-6xl mx-auto px-6 py-10">
        <p>Cargando posts...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-6xl mx-auto px-6 py-10">
        <p className="text-red-600">{error}</p>
      </div>
    );
  }

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

      <section className="max-w-6xl mx-auto px-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {visible.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}

        {visible.length === 0 && (
          <p className="text-gray-600 col-span-full">
            No hay resultados con esos filtros.
          </p>
        )}
      </section>

      <Pagination
        page={page}
        setPage={setPage}
        total={filtered.length}
        pageSize={PAGE_SIZE}
      />

      <div className="max-w-6xl mx-auto px-6 my-10">
        <NewsletterCard />
      </div>
    </div>
  );
}
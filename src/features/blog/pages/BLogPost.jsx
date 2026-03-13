import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { formatDate, readingTime } from "../utils/blogUtils";
import Seo from "@/seo/Seo";
import Markdown from "@/components/Markdown";

export default function BlogPost() {
  const { slug } = useParams();

  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchPost = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await fetch(
          `http://localhost:3001/api/content/${slug}`,
        );

        if (!response.ok) {
          if (response.status === 404) {
            throw new Error("Post no encontrado");
          }
          throw new Error("Error al cargar el post");
        }

        const data = await response.json();
        setPost(data);
      } catch (err) {
        setError(err.message || "Ocurrió un error");
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [slug]);

  if (loading) {
    return <p>Cargando post...</p>;
  }

  if (error || !post) {
    return (
      <div>
        <p>{error || "Post no encontrado."}</p>
        <Link className="link" to="/blog">
          ← Volver al blog
        </Link>
      </div>
    );
  }

  const site = "https://tu-dominio.com";
  const url = `${site}/blog/${post.slug}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    image:
      post.og_image_url || post.cover_url
        ? [post.og_image_url || post.cover_url]
        : undefined,
    datePublished: post.published_at,
    author: [{ "@type": "Person", name: "Daniela" }],
    description: post.seo_description || post.excerpt,
    mainEntityOfPage: url,
  };

  return (
    <article className="max-w-3xl mx-auto px-6 py-10 space-y-8">

  <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight">
    {post.title}
  </h1>

  {post.cover_url && (
    <img
      src={post.cover_url}
      alt={post.title}
      className="w-full rounded-xl mb-10"
    />
  )}

  <p className="text-sm text-gray-500 mb-8">
    {post.published_at ? formatDate(post.published_at) : "Sin fecha"} ·{" "}
    {readingTime(post.body_markdown || "")}
  </p>

  <div className="prose prose-lg max-w-none">
    <Markdown source={post.body_markdown || ""} />
  </div>

  <div className="mt-10 flex flex-wrap gap-2">
    {post.tags?.map((t) => (
      <span
        key={typeof t === "string" ? t : t.name}
        className="text-sm px-3 py-1 rounded-full bg-brand-blue/10 text-brand-navy"
      >
        #{typeof t === "string" ? t : t.name}
      </span>
    ))}
  </div>

  <div className="mt-10">
    <Link className="text-sm text-brand-navy hover:underline" to="/blog">
      ← Volver al blog
    </Link>
  </div>

</article>

  );
}

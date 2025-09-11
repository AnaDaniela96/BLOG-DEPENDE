import { useParams, Link } from "react-router-dom";
import posts from "../data/post";
import { formatDate, readingTime } from "../utils/blogUtils";
import Seo from "@/seo/Seo";

export default function BlogPost() {
  const { slug } = useParams();
  const post = posts.find(p => p.slug === slug);

  if (!post) {
    return (
      <div>
        <p>Post no encontrado.</p>
        <Link className="link" to="/blog">← Volver al blog</Link>
      </div>
    );
  }

  // Si aún no tienes dominio, deja url en null o arma local
  const site = "https://tu-dominio.com";
  const url = `${site}/blog/${post.slug}`;

  // JSON-LD (Google)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    image: post.ogImage || post.cover ? [post.ogImage || post.cover] : undefined,
    datePublished: post.date,
    author: [{ "@type": "Person", name: "Daniela" }],
    description: post.description,
    mainEntityOfPage: url,
  };

  return (
    <article className="prose max-w-none">
      <Seo
        title={post.title}
        description={post.description}
        url={url}
        image={post.ogImage || post.cover}
        type="article"
        publishedTime={post.date}
        tags={post.tags}
      />
      {/* JSON-LD script */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {post.cover && (
        <img src={post.cover} alt={post.title} className="w-full rounded-xl mb-4" />
      )}
      <h1 className="m-8">{post.title}</h1>
      <p className="m-8 text-sm text-gray-500">
        {formatDate(post.date)} · {readingTime(post.content)}
      </p>

      {/* Render simple: por ahora texto/Markdown “plano” */}
      <div className="m-8 whitespace-pre-wrap">
        {post.content}
      </div>

      <div className="m-8 flex flex-wrap gap-2">
        {post.tags?.map(t => (
          <span key={t} className="text-xs px-2 py-1 rounded-full bg-brand-blue/10 text-brand-navy">
            #{t}
          </span>
        ))}
      </div>

      <div className="m-8">
        <Link className="link" to="/blog">← Volver al blog</Link>
      </div>
    </article>
  );
}
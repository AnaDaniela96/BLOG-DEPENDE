import { useParams, Link } from "react-router-dom";
import posts from "../data/post";
import { formatDate, readingTime } from "../utils/blogUtils";

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

  return (
    <article className="prose dark:prose-invert max-w-none">
      {post.cover && (
        <img src={post.cover} alt={post.title} className="w-full rounded-xl mb-4" />
      )}
      <h1 className="!mb-2">{post.title}</h1>
      <p className="!mt-0 text-sm text-gray-500">
        {formatDate(post.date)} · {readingTime(post.content)}
      </p>

      {/* Render rápido de contenido con Markdown mínimo */}
      <div className="mt-6 whitespace-pre-wrap">
        {post.content}
      </div>

      <div className="mt-8 flex flex-wrap gap-2">
        {post.tags?.map(t => (
          <span key={t} className="text-xs px-2 py-1 rounded-full bg-brand-blue/10 text-brand-navy">
            #{t}
          </span>
        ))}
      </div>

      <div className="mt-8">
        <Link className="link" to="/blog">← Volver al blog</Link>
      </div>
    </article>
  );
}

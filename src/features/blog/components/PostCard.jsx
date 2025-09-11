import { Link } from "react-router-dom";
import { formatDate, readingTime } from "../utils/blogUtils";

export default function PostCard({ post }) {
  return (
    <article className="rounded-xl border bg-white p-4 hover:shadow-md transition">
      {post.cover && (
        <img src={post.cover} alt={post.title}
             className="w-full h-48 object-cover rounded-lg mb-3" />
      )}
      <Link to={`/blog/${post.slug}`} className="text-xl font-semibold link">
        {post.title}
      </Link>
      <p className="text-sm text-gray-500">
        {formatDate(post.date)} · {readingTime(post.content)}
      </p>
      <p className="mt-2 text-gray-700">{post.excerpt}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {post.tags?.map(t => (
          <span key={t} className="text-xs px-2 py-1 rounded-full bg-brand-blue/10 text-brand-navy">
            #{t}
          </span>
        ))}
      </div>
    </article>
  );
}

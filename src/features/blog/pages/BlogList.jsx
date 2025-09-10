import { posts } from "../data/post";
import { Link } from "react-router-dom";

export default function BlogList() {
    return (
    <div className="space-y-6">
      <h1 className="text-3xl font-semibold">Blog</h1>
      <ul className="space-y-4">
        {posts.map(p => (
          <li key={p.slug} className="p-4 rounded-lg border bg-white">
            <Link to={`/blog/${p.slug}`} className="text-xl font-medium hover:underline">
              {p.title}
            </Link>
            <p className="text-sm text-gray-500">{p.excerpt}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

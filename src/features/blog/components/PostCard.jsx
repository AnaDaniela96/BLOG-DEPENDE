// import { Link } from "react-router-dom";
// import { formatDate, readingTime } from "../utils/blogUtils";

// export default function PostCard({ post }) {
//   return (
//     <article className="rounded-xl border bg-white p-4 hover:shadow-md transition">
//       {post.cover && (
//         <img src={post.cover} alt={post.title}
//              className="w-full h-48 object-cover rounded-lg mb-3" />
//       )}
//       <Link to={`/blog/${post.slug}`} className="text-xl font-semibold link">
//         {post.title}
//       </Link>
//       <p className="text-sm text-gray-500">
//         {formatDate(post.date)} · {readingTime(post.content)}
//       </p>
//       <p className="mt-2 text-gray-700">{post.excerpt}</p>
//       <div className="mt-3 flex flex-wrap gap-2">
//         {post.tags?.map(t => (
//           <span key={t} className="text-xs px-2 py-1 rounded-full bg-brand-blue/10 text-brand-navy">
//             #{t}
//           </span>
//         ))}
//       </div>
//     </article>
//   );
// }

import { Link } from "react-router-dom";
import { formatDate, readingTime } from "../utils/blogUtils";

export default function PostCard({ post }) {
  return (
    <Link
      to={`/blog/${post.slug}`}
      className="group flex items-center gap-4 rounded-lg border bg-white hover:bg-gray-50 transition p-3"
    >
      {post.cover && (
        <img
          src={post.cover}
          alt={post.title}
          className="w-20 h-20 object-cover rounded-md flex-shrink-0"
          loading="lazy"
        />
      )}
      <div className="flex flex-col min-w-0">
        <h3 className="text-sm font-medium text-brand-navy group-hover:underline line-clamp-2">
          {post.title}
        </h3>
        <p className="text-xs text-gray-500 mt-1">
          {formatDate(post.date)} · {readingTime(post.content)}
        </p>
        {post.tags && post.tags.length > 0 && (
          <div className="mt-1 flex flex-wrap gap-1">
            {post.tags.slice(0, 2).map((t) => (
              <span
                key={t}
                className="text-[10px] px-1.5 py-0.5 rounded-full bg-brand-blue/10 text-brand-navy"
              >
                #{t}
              </span>
            ))}
          </div>
        )}
      </div>
    </Link>
  );
}

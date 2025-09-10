import { useParams } from "react-router-dom";
import { posts } from "../data/post";

export default function BlogPost() {
  const { slug } = useParams();
  const post = posts.find(p => p.slug === slug);

  
  if (!post) return <p>Post no encontrado.</p>;

  return (
    <article className="prose max-w-none">
      <h1>{post.title}</h1>
      <p className="text-sm text-gray-500">{post.date}</p>
      <p>Contenido inicial del post (luego lo migramos a MD).</p>
    </article>
  );
}

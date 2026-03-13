import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Markdown from "@/components/Markdown";

export default function MusicDetail() {
  const { slug } = useParams();

  const [album, setAlbum] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchAlbum = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await fetch(`http://localhost:3001/api/music/${slug}`);

        if (!response.ok) {
          if (response.status === 404) {
            throw new Error("Reseña musical no encontrada");
          }
          throw new Error("No se pudo cargar la reseña musical");
        }

        const data = await response.json();
        setAlbum(data);
      } catch (err) {
        setError(err.message || "Ocurrió un error");
      } finally {
        setLoading(false);
      }
    };

    fetchAlbum();
  }, [slug]);

  if (loading) {
    return <p className="max-w-4xl mx-auto px-6 py-10">Cargando reseña...</p>;
  }

  if (error || !album) {
    return (
      <div className="max-w-4xl mx-auto px-6 py-10">
        <p>{error || "Reseña no encontrada"}</p>
        <Link className="underline mt-4 inline-block" to="/play/music">
          ← Volver a música
        </Link>
      </div>
    );
  }

  return (
    <article className="max-w-4xl mx-auto px-6 py-10">
      <Link className="underline" to="/play/music">
        ← Volver a música
      </Link>

      {album.cover_url && (
        <img
          src={album.cover_url}
          alt={album.title}
          className="w-full max-h-[500px] object-cover rounded-xl mt-6"
        />
      )}

      <h1 className="mt-8 text-3xl sm:text-4xl font-bold text-brand-navy">
        {album.title}
      </h1>

      <p className="mt-3 text-gray-600">
        <strong>{album.artist_name}</strong> · {album.album_title}
        {album.release_year ? ` · ${album.release_year}` : ""}
      </p>

      {album.listen_url && (
        <div className="mt-4">
          <a
            href={album.listen_url}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center rounded-lg px-4 py-2 font-medium bg-brand-navy text-brand-cream hover:bg-black transition"
          >
            Escuchar en {album.platform || "plataforma"}
          </a>
        </div>
      )}

      {album.excerpt && (
        <p className="mt-6 text-lg text-gray-700">{album.excerpt}</p>
      )}

      <div className="prose max-w-none mt-8">
        <Markdown>{album.body_markdown || ""}</Markdown>
      </div>
    </article>
  );
}
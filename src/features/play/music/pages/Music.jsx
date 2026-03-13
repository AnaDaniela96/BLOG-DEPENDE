import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Music() {
  const [albums, setAlbums] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchMusic = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await fetch("http://localhost:3001/api/music");

        if (!response.ok) {
          throw new Error("No se pudo cargar la sección de música");
        }

        const data = await response.json();
        setAlbums(data);
      } catch (err) {
        setError(err.message || "Ocurrió un error");
      } finally {
        setLoading(false);
      }
    };

    fetchMusic();
  }, []);

  if (loading) {
    return <p className="max-w-6xl mx-auto px-6 py-10">Cargando música...</p>;
  }

  if (error) {
    return <p className="max-w-6xl mx-auto px-6 py-10 text-red-600">{error}</p>;
  }

  return (
    <section className="max-w-6xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold text-brand-navy">Música</h1>
      <p className="mt-2 text-gray-600">
        Álbumes que escucho, pienso y valido desde la reseña.
      </p>

      <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {albums.map((album) => (
          <Link
            key={album.slug}
            to={`/play/music/${album.slug}`}
            className="group rounded-xl border bg-white overflow-hidden hover:shadow-md transition"
          >
            {album.cover_url && (
              <img
                src={album.cover_url}
                alt={album.title}
                className="h-56 w-full object-cover"
              />
            )}

            <div className="p-4">
              <h2 className="text-lg font-semibold group-hover:underline">
                {album.title}
              </h2>

              <p className="mt-1 text-sm text-gray-600">
                {album.artist_name} · {album.album_title}
                {album.release_year ? ` · ${album.release_year}` : ""}
              </p>

              {album.excerpt && (
                <p className="mt-3 text-sm text-gray-700 line-clamp-3">
                  {album.excerpt}
                </p>
              )}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
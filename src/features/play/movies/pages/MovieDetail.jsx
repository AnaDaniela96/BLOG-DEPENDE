import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getMovie } from "../../../../services/api";

export default function MovieDetail() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  useEffect(() => { getMovie(id).then(setMovie); }, [id]);

  if (!movie) return <p>Cargando…</p>;
  return (
    <article className="space-y-3">
       <img src={movie.url_imagen} alt="" />
      <h1 className="text-3xl font-semibold">{movie.name}</h1>
      <p className="text-gray-600">Año: {movie.year}</p>
      <p className="text-gray-600">Género: {movie.genre}</p>
      <p>{movie.comment}</p>

      
    </article>
  );
}

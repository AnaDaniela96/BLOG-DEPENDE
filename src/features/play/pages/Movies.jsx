import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { listMovies } from "../../../services/api";

export default function MoviesList() {
  const [movies, setMovies] = useState([]);
  useEffect(() => { listMovies().then(setMovies); }, []);
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Playground · Movies</h1>
      <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {movies.map(m => (
          <li key={m.id} className="p-4 border rounded-lg bg-white">
            <h2 className="font-medium">{m.name}</h2>
            <p className="text-sm text-gray-500">({m.year}) ★ {m.calification.daniela}</p>
            <Link to={`/play/movies/${m.id}`} className="text-green-700 hover:underline">
              Ver detalle
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

// import { movies as data } from '../Data/movies.js';

// import { Carrusel } from '../../../components/Carruseles.jsx';
// import { ItemDetails } from '../../../components/Items.jsx';

// import '../styles/pages/movies.css';

// export function MylastMovie() {
//     // Función para renderizar estrellas basada en la calificación de 1 a 5
//     const renderStars = (rating) => {
//         const stars = [];
//         const maxStars = 5; // Máximo de estrellas
//         for (let i = 0; i < maxStars; i++) {
//             stars.push(
//                 <span key={i} className={i < rating ? "star filled" : "star"}>★</span>
//             );
//         }
//         return stars;
//     };

//     return (
//         <ItemDetails
//             data={data}
//             title="Lo último que vi"
//             renderStars={renderStars}
//         />
//     );
// }

// export function GenresFavorite() {
//     // Obtener todos los géneros sin duplicados
//     const uniqueGenres = [...new Set(data.flatMap(movie => movie.genre))];

//     return (
//         <section className='container-genre'>
//             <h3 className='title-gnere'>Mis Géneros Favoritos</h3>
//             <div className='tag-genre'>
//                 {uniqueGenres.map((genre, index) => (
//                     <h5 className='tag' key={index}>{genre}</h5>
//                 ))}
//             </div>
//         </section>
//     );
// }

// export function LastReviews() {
//     const reviews = data;
//     return (
//         <section className="reviews-container">
//             <h2>Reseñas</h2>
//             <p>Da clic para leerla completa</p>
//             <div className="cards">
//                 {reviews.map((movie, index) => (
//                     <div key={index} className="review-card">
//                         <h3>{movie.name}</h3>
//                         <p>{movie.comment}</p>
//                         <small>Visto en: {movie.IseeIn}</small>
//                     </div>
//                 ))}
//             </div>
//         </section>
//     );
// }


// const Movies = () => {
//     return (
//         <>
//         <Carrusel
//             data={data}
//             title="Lo que ví durante el 2025"
//             imgAltPrefix="name"
//         />
//         <MylastMovie />

//         <GenresFavorite />

//         <LastReviews />

//         </>
//     );
// }
// export default Movies;



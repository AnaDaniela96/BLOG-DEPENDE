import { movies as data } from '../Data/movies.js';

import { Carrusel } from '../components/Carruseles.jsx';
import { ItemDetails } from '../components/Items.jsx';

import '../styles/pages/movies.css';

export function MylastMovie() {
    // Función para renderizar estrellas basada en la calificación de 1 a 5
    const renderStars = (rating) => {
        const stars = [];
        const maxStars = 5; // Máximo de estrellas
        for (let i = 0; i < maxStars; i++) {
            stars.push(
                <span key={i} className={i < rating ? "star filled" : "star"}>★</span>
            );
        }
        return stars;
    };

    return (
        <ItemDetails
            data={data}
            title="Lo último que vi"
            renderStars={renderStars}
        />
    );
}

export function GenresFavorite() {
    // Obtener todos los géneros sin duplicados
    const uniqueGenres = [...new Set(data.flatMap(movie => movie.genre))];

    return (
        <section className='container-genre'>
            <h3 className='title-gnere'>Mis Géneros Favoritos</h3>
            <div className='tag-genre'>
                {uniqueGenres.map((genre, index) => (
                    <h5 className='tag' key={index}>{genre}</h5>
                ))}
            </div>
        </section>
    );
}

export function LastReviews() {
    const reviews = data;
    return (
        <section className="reviews-container">
            <h2>Reseñas</h2>
            <p>Da clic para leerla completa</p>
            <div className="cards">
                {reviews.map((movie, index) => (
                    <div key={index} className="review-card">
                        <h3>{movie.name}</h3>
                        <p>{movie.comment}</p>
                        <small>Visto en: {movie.IseeIn}</small>
                    </div>
                ))}
            </div>
        </section>
    );
}


const Movies = () => {
    return (
        <>
        <Carrusel
            data={data}
            title="Lo que ví durante el 2025"
            imgAltPrefix="name"
        />
        <MylastMovie />

        <GenresFavorite />

        <LastReviews />

        </>
    );
}
export default Movies;



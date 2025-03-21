import { useRef } from 'react';
import { movies as data } from '../Data/movies.js';
import { useState, useEffect } from 'react';
import { CircleButton } from './Buttons.jsx';

import '../styles/components/Movies.css';


export function CarruselMovies() {
    const [movies, setMovies] = useState([]); // Cambié "movie" por "movies"

    useEffect(() => {
        setMovies(data);
        //console.log(data);
    }, []);

    //Buttons
    const carruselRef = useRef(null);

    const scrollLeft = () => {
        console.log('hola es el derecho')
        if (carruselRef.current) {
            carruselRef.current.scrollBy({ left: -220, behavior: 'smooth' });
        }
    };

    const scrollRight = () => {
        console.log('hola es el izquierdo')
        if (carruselRef.current) {
            carruselRef.current.scrollBy({ left: 220, behavior: 'smooth' });
        }
    };

    if (movies.length === 0) {
        return <h1>No hay películas aún</h1>;
    }

    return (
        <div className='container'>
            <CircleButton text='<' onClick={scrollLeft} />

            <div className='carrusel-static' ref={carruselRef}>
                {movies.map((movie) => (
                    <div className='card' key={movie.id}>

                        <img src={movie.url_imagen} alt={movie.name} title={movie.name + '.img'}/>

                        {/* <div className='card-title'>
                            <h2>{movie.name} </h2>
                        </div> */}
                    </div>
                ))}
            </div>

            <CircleButton text='>' onClick={scrollRight} />
        </div>
    );
}

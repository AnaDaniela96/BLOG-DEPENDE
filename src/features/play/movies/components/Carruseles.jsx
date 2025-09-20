
//import { movies as data } from '@/features/data/movies.js';
import { CircleButton } from '../../../../components/Buttons.jsx';

import { useRef, useState, useEffect } from 'react';

export function Carrusel({ data, title, imgAltPrefix }) {
    const [items, setItems] = useState([]);
    
    // Este useEffect asegura que los datos se seteen al montarse el componente.
    useEffect(() => {
        setItems(data);
    }, [data]);

    // Buttons
    const carruselRef = useRef(null);

    const scrollLeft = () => {
        if (carruselRef.current) {
            carruselRef.current.scrollBy({ left: -220, behavior: 'smooth' });
        }
    };

    const scrollRight = () => {
        if (carruselRef.current) {
            carruselRef.current.scrollBy({ left: 220, behavior: 'smooth' });
        }
    };

    if (items.length === 0) {
        return <h1>No hay elementos disponibles</h1>;
    }

    return (
        <section className='container'>
            <div className='container-title'>
                <h1 className="title">{title}</h1>
            </div>
            <CircleButton text='<' onClick={scrollLeft} />

            <div className='carrusel-static' ref={carruselRef}>
                {items.map((item) => (
                    <div className='card' key={item.id}>
                        <img 
                            src={item.url_imagen} 
                            alt={imgAltPrefix ? item[imgAltPrefix] : item.name} 
                            title={item.name + '.img'} 
                        />
                    </div>
                ))}
            </div>

            <CircleButton text='>' onClick={scrollRight} />
        </section>
    );
}

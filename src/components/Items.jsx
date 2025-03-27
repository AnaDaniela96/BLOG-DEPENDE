import React from 'react';

export function ItemDetails({ data, title, renderStars }) {
    const lastEvaluation = data[data.length - 1];

    return (
        <section className='container' id="lastItemContainer">
            <iframe width="760" height="515" src={lastEvaluation.url_trailer}
                title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; 
                gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen>
            </iframe>
            <div className="container-item-titles">
                <h3>{title}</h3>
                <h2 className='item-title'>{lastEvaluation.name}</h2>
                <p>{lastEvaluation.comment}</p>
                <div className="ratings">
                    <h4>Calificaciones:</h4>
                    <p>IMDb: {lastEvaluation.calification.imdb}</p>
                    <p>Filmaffinity: {lastEvaluation.calification.filmaffinity}</p>
                    <p>YoMiLala: {renderStars(parseInt(lastEvaluation.calification.daniela))}</p>
                </div>
            </div>
        </section>
    );
}

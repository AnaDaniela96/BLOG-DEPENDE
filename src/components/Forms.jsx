import { useState } from 'react'

export function FormNewMovie() {

    const [title, setTitle] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(title)
    }

    return (
        <div>
            <h2>¿Qué película viste?</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='Nombre'
                    onChange={(e) => setTitle(e.target.value)} />
                <input type="number" placeholder='Año' />
                <input type="text" placeholder='Director' />
                <input type="text" placeholder='País' />
                <input type="text" placeholder='Género' />
                <input type='number' placeholder='imdb' />
                <input type='number' placeholder='filmaffinity' />
                <input type='number' placeholder='daniela' />
                <input type='textarea' placeholder='comentario' />
                <input type='number' placeholder='año que la ví' />
                <input type="file" placeholder='Foto del director' />
                <input type="file" placeholder='Portada' />
                <input type="text" placeholder='url del trailer'/>
                <button>guardar</button>
            </form>
        </div>
    )
}



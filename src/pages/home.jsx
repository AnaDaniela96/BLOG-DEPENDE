import { InfoCard } from '../components/infoCards';

import '../styles/pages/home.css';

function Home() {
    return (
        <>
            <main className="container">


                <h1>Este es el home</h1>
            </main>

            <article>
                <InfoCard 
                    title="Descubre más sobre DependeBlog"
                    text="Nos encanta escribir. Somos fans del arte, la música y el conocimiento."
                    buttonText="Mirá nuestra colección de reseñas"
                    buttonLink="https://react.dev/"
                    imageSrc="/icons/icons-.svg"
                    backgroundColor="var(--accent-color)"
                />

            </article>
        </>
    )
}

export default Home;
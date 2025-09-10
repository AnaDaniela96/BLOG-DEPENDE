import { InfoCard } from '../components/infoCards';

import '../styles/pages/home.css';

function Home() {
    return (
        <>
         <div className="flex h-screen items-center justify-center bg-gradient-to-r from-green-400 to-blue-500">
      <h1 className="text-5xl font-bold text-white">¡Hola Tailwind!</h1>
    </div>
        <h1 class="text-3xl font-bold underline">    Hello world!  </h1>
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
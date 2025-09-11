import { InfoCard } from "../components/infoCards";

import "../styles/pages/home.css";

function Home() {
  return (
    <>
      <header
        className="flex h-screen items-center justify-center bg-gradient-to-r"
        style={{
          backgroundColor: "var(--secondary-color)",
        }}
      >
        <h1 className="text-5xl font-bold text-white">
          ¡Hola, soy dependeBLog!
        </h1>
      </header>
      <main className="container"></main>

      <article 
        className="pt-6">
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
  );
}

export default Home;

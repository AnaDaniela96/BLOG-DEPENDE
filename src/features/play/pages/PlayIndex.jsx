import { Link } from "react-router-dom";

export default function PlayIndex() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-semibold">Playground 🎮</h1>
      <p className="text-gray-600">
        Aquí voy a ir metiendo mis experimentos y mini-proyectos para practicar React, Tailwind y lo que se me ocurra.
      </p>

      <ul className="space-y-4">
        <li className="p-4 border rounded-lg bg-white shadow hover:shadow-md transition">
          <Link to="/play/movies" className="text-xl font-medium text-brand-blue hover:underline">
            🎬 Movies
          </Link>
          <p className="text-sm text-gray-500">
            Un listado de películas con detalle.
          </p>
        </li>

        {/* Más secciones que agregues */}
        <li className="p-4 border rounded-lg bg-white shadow hover:shadow-md transition">
          <span className="text-xl font-medium text-gray-400">✨ Otro experimento</span>
          <p className="text-sm text-gray-500">Pendiente por crear.</p>
        </li>
      </ul>
    </div>
  );
}

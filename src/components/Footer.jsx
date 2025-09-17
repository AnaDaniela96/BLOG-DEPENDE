import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer
      className="text-white"
      style={{ backgroundColor: "var(--primary-color)" }}
    >
      <div className="max-w-6xl mx-auto px-6 py-10">
        {/* Top: nombre y menú */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 border-b border-white/20 pb-6">
          {/* Nombre del proyecto */}
          <h2 className="text-xl font-semibold">✨ Depende Revista Digital</h2>

          {/* Menú navegación */}
          <nav className="flex flex-wrap gap-4 text-sm">
            <Link to="/" className="hover:underline underline-offset-4">
              Inicio
            </Link>
            <Link to="/blog" className="hover:underline underline-offset-4">
              Blog
            </Link>
            <Link to="/play" className="hover:underline underline-offset-4">
              Miscelánea
            </Link>
            <Link to="/about" className="hover:underline underline-offset-4">
              ¿Quiénes somos?
            </Link>
          </nav>
        </div>

        {/* Bottom: redes sociales y copy */}
        <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          {/* Redes sociales */}
          <div className="flex gap-4">
            <a
              href="#"
              target="_blank"
              rel="noreferrer"
              className="hover:text-gray-200"
              aria-label="Instagram"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="h-5 w-5"
              >
                <path d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9A5.5 5.5 0 0 1 16.5 22h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2zm0 2A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9a3.5 3.5 0 0 0 3.5-3.5v-9A3.5 3.5 0 0 0 16.5 4h-9zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm5.75-3.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5z" />
              </svg>
            </a>
            <a
              href="#"
              target="_blank"
              rel="noreferrer"
              className="hover:text-gray-200"
              aria-label="Twitter"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="h-5 w-5"
              >
                <path d="M19.633 7.997c.013.183.013.366.013.55 0 5.59-4.257 12.034-12.034 12.034-2.392 0-4.616-.7-6.49-1.912.333.04.653.053.999.053a8.505 8.505 0 0 0 5.272-1.817 4.26 4.26 0 0 1-3.975-2.951c.26.04.52.066.793.066.38 0 .76-.053 1.113-.146A4.254 4.254 0 0 1 4.28 9.16v-.053c.7.393 1.503.633 2.36.66a4.248 4.248 0 0 1-1.887-3.548c0-.78.207-1.486.567-2.106a12.072 12.072 0 0 0 8.77 4.446 4.797 4.797 0 0 1-.106-.974 4.254 4.254 0 0 1 4.253-4.254c1.225 0 2.333.52 3.111 1.354a8.357 8.357 0 0 0 2.693-1.026 4.235 4.235 0 0 1-1.867 2.347 8.5 8.5 0 0 0 2.453-.653 9.147 9.147 0 0 1-2.12 2.2z" />
              </svg>
            </a>
          </div>

          {/* Copy */}
          <p className="text-sm text-gray-200">
            © {new Date().getFullYear()} Depende, Revista Digital. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-brand-navy text-brand-cream shadow-md">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo / Nombre */}
          <Link to="/" className="text-xl font-bold">
            DependeBlog ✨
          </Link>

          {/* Links (desktop) */}
          <div className="hidden md:flex space-x-6">
            <Link to="/blog" className="hover:text-brand-blue">
              Blog
            </Link>
            <Link to="/play" className="hover:text-brand-blue">
              Miscelanea
            </Link>
            <Link to="/about" className="hover:text-brand-blue">
              Sobre nosotros
            </Link>
          </div>

          {/* Botón menú (mobile) */}
          <button
            className="md:hidden focus:outline-none"
            onClick={() => setOpen(!open)}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {open ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Links (mobile) */}
      {open && (
        <div className="md:hidden px-4 pb-4 space-y-2 bg-brand-navy">
          <Link to="/" className="block hover:text-brand-blue">
            Inicio
          </Link>
          <Link to="/peliculas" className="block hover:text-brand-blue">
            Qué ver
          </Link>
          <Link to="/about" className="block hover:text-brand-blue">
            About
          </Link>
        </div>
      )}
    </nav>
  );
}

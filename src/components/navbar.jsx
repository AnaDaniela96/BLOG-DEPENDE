import { useState, useMemo, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

/**
 * Mapea cada ruta a un tema visual.
 * Puedes usar clases Tailwind o variables CSS (var(--secondary-color)).
 */
const THEME_BY_PATH = {
  "/": { bg: "bg-[var(--accent-color)]", text: "var(--text-color)", border: "border-brand-navy" },
  "/about": { bg: "bg-[var(--accent-color)]", text: "", border: "border-brand-navy" },
  "/play": { bg: "bg-[var(--primary-color)]", text: "text-white", border: "border-brand-blue" },
  "/blog": { bg: "bg-[var(--background-color)]", text: "", border: "border-brand-navy" },
};


export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  // 1) Bandera/tema según ruta
  const theme = useMemo(() => {
    // usa beginsWith para agrupar subrutas (p.ej. /blog/slug)
    if (pathname.startsWith("/blog")) return THEME_BY_PATH["/blog"];
    if (pathname.startsWith("/miscelanea")) return THEME_BY_PATH["/miscelanea"];
    return THEME_BY_PATH[pathname] || THEME_BY_PATH["/"];
  }, [pathname]);

  useEffect(() => {
  if (open) {
    document.body.style.overflow = "hidden";   // bloquea scroll y evita empujón
  } else {
    document.body.style.overflow = "";         // restaura
  }
  return () => { document.body.style.overflow = ""; };
}, [open]);

  return (
    <>
      {/* Sticky Navbar */}
      <nav
        className={[
          "sticky top-0 z-50 border-b",
          theme.bg,
          theme.text,
          theme.border,
        ].join(" ")}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo / nombre */}
            <Link to="/" className="text-lg font-bold">
              Depende ✨
            </Link>

            {/* Links desktop */}
            <div className="hidden md:flex items-center gap-6">
              <Link to="/blog" className="hover:underline underline-offset-4">
                Blog
              </Link>
              <Link to="/play" className="hover:underline underline-offset-4">
                Miscelánea
              </Link>
              <Link to="/about" className="hover:underline underline-offset-4">
                ¿Quiénes somos?
              </Link>
            </div>

            {/* 2) Botón móvil: bg sólo en hover */}
            <button
              className={`md:hidden p-2 rounded-md transition-colors bg-transparent hover:bg-white/10 focus:outline-none ${
                open ? "text-gray-400" : ""
              }`}
              aria-label="Abrir menú"
              onClick={() => setOpen((v) => !v)}
            >
              {/* Usa tu ícono preferido; dejo un svg simple */}
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                {open ? (
                  <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* 3) Drawer móvil: 100% alto, 70% ancho, <ul>, transición suave */}
      {/* Backdrop */}
      <div
        className={`md:hidden fixed inset-0 z-40 bg-black/30 transition-opacity ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setOpen(false)}
      />
      {/* Panel */}
      <aside
        className={`md:hidden fixed inset-y-0 right-0 z-50 h-screen w-[70%] max-w-xs bg-white text-brand-navy shadow-xl
        transform transition-transform duration-300 ease-in-out
        ${open ? "translate-x-0" : "translate-x-full"}`}
        role="dialog"
        aria-modal="true"
      >
        <div className="p-6 h-full flex flex-col">
          <div className="flex items-center justify-between">
            <span className="font-semibold">Menú</span>
            <button
              className="p-2 rounded-md hover:bg-gray-100"
              onClick={() => setOpen(false)}
              aria-label="Cerrar menú"
            >
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <ul className="mt-6 flex-1 overflow-y-auto space-y-2 text-base">
            <li>
              <Link
                to="/blog"
                className="block rounded-lg px-4 py-3 hover:bg-gray-100"
                onClick={() => setOpen(false)}
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                to="/play"
                className="block rounded-lg px-4 py-3 hover:bg-gray-100"
                onClick={() => setOpen(false)}
              >
                Miscelánea
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="block rounded-lg px-4 py-3 hover:bg-gray-100"
                onClick={() => setOpen(false)}
              >
                ¿Quiénes somos?
              </Link>
            </li>
          </ul>

          {/* Puedes poner redes o un CTA abajo */}
          <div className="pt-4 border-t">
            <a
              href="#"
              className="block text-sm text-gray-600 hover:text-brand-navy"
              onClick={() => setOpen(false)}
            >
              Instagram
            </a>
          </div>
        </div>
      </aside>
    </>
  );
}


// import { useState } from "react";
// import { Link } from "react-router-dom";

// import "../styles/components/navbar.css";

// export default function Navbar() {
//   const [open, setOpen] = useState(false);

//   return (
//     <nav className="navbar">
//       <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-16">
//           {/* Logo / Nombre */}
//           <Link to="/" className="text-xl font-bold">
//             DependeBlog ✨
//           </Link>

//           {/* Links (desktop) */}
//           <div className="hidden md:flex space-x-6">
//             <Link to="/blog" className="hover:text-brand-blue">
//               Blog
//             </Link>
//             <Link to="/play" className="hover:text-brand-blue">
//               Miscelanea
//             </Link>
//             <Link to="/about" className="hover:text-brand-blue">
//               Sobre nosotros
//             </Link>
//           </div>

//           {/* Botón menú (mobile) */}
//           <button
//             className="primary m:hidden focus:outline-none"
//             onClick={() => setOpen(!open)}
//           >
//             <svg
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke-width="1.5"
//               stroke="currentColor"
//               class="size-6"
//             >{open ? (
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M6 18L18 6M6 6l12 12"
//                 />
//               ) : (
//               <path
//                 stroke-linecap="round"
//                 stroke-linejoin="round"
//                 d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
//               />
//               )}
//             </svg>
//           </button>
//         </div>
//       </div>

//       {/* Links (mobile) */}
//       {open && (
//         <div className="md:hidden px-4 pb-4 space-y-2 bg-brand-navy">
//           <Link to="/" className="block hover:text-brand-blue">
//             Inicio
//           </Link>
//           <Link to="/blog" className="hover:text-brand-blue">
//             Blog
//           </Link>
//           <Link to="/play" className="hover:text-brand-blue">
//             Miscelanea
//           </Link>
//           <Link to="/about" className="hover:text-brand-blue">
//             Sobre nosotros
//           </Link>
//         </div>
//       )}
//     </nav>
//   );
// }

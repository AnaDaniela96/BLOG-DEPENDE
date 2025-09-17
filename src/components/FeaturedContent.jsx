import { Link } from "react-router-dom";

export default function FeaturedContent() {
  return (
    <section className="max-w-6xl mx-auto px-6 my-12">
      <div className="grid md:grid-cols-2 gap-6 items-stretch rounded-2xl overflow-hidden border bg-white shadow-sm">
        
        {/* Imagen */}
        <div className="relative">
          <img
            src="/img/mercado-sanjuan.jpg" // 🔄 pon tu imagen real en /public/img/
            alt="Mercado de San Juan"
            className="h-64 w-full object-cover md:h-full"
          />
          {/* Overlay opcional para dar contraste */}
          <div className="absolute inset-0 bg-black/20 md:hidden" />
        </div>

        {/* Texto */}
        <div className="p-6 sm:p-8 flex flex-col justify-center">
          <h2 className="text-2xl sm:text-3xl font-semibold text-brand-navy">
            No te pierdas la crónica de la ciudad de la semana
          </h2>
          <p className="mt-3 text-gray-600">
            Visité el mercado de San Juan y venden cocodrilos 🐊.  
            Una mirada a la gastronomía exótica y la historia detrás de este lugar único.
          </p>

          <div className="mt-6">
            <Link
              to="/blog/cronica-mercado-sanjuan" // 🔄 slug de tu post real
              className="inline-flex items-center rounded-lg px-5 py-3 font-medium bg-brand-navy text-brand-cream hover:bg-black transition"
            >
              Leer la crónica →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

import '../styles/components/infoCards.css'

export function InfoCard({ title, text, buttonText, buttonLink, imageSrc, backgroundColor }) {
    return (
        <div className="max-w-6xl mx-auto px-6 my-12 m-6 info-card"  style={{ backgroundColor }}>
            <img src={imageSrc} alt={title} className="info-card-image" />
            <div className="info-card-content m-3">
                <h2 className="text-2xl sm:text-3xl font-semibold text-brand-navy flex items-center gap-2">{title}</h2>
                <p className="mt-2 text-gray-600 max-w-2xl">{text}</p>
                <a href={buttonLink} className="inline-flex items-center rounded-lg px-4 py-2 font-medium border border-brand-cream text-brand-cream hover:bg-brand-cream hover:text-brand-navy transition">
                    {buttonText}
                </a>
            </div>
        </div>
    );
}

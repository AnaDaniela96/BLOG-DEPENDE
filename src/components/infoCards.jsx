import '../styles/components/infoCards.css'

export function InfoCard({ title, text, buttonText, buttonLink, imageSrc, backgroundColor }) {
    return (
        <div className="info-card"  style={{ backgroundColor }}>
            <img src={imageSrc} alt={title} className="info-card-image" />
            <div className="info-card-content">
                <h2 className="info-card-title">{title}</h2>
                <p className="info-card-text">{text}</p>
                <a href={buttonLink} className="info-card-button">
                    {buttonText}
                </a>
            </div>
        </div>
    );
}

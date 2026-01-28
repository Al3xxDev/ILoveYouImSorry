import { motion } from 'framer-motion';
import { RevealOnScroll } from './RevealOnScroll';

const photos = [
    { src: "100861BA-8A37-4EB2-A843-FCAE8DFD65D3.jpg", caption: "Sei bellissima appena sveglia, la mia versione preferita di te ❤️" },
    { src: "1494C563-6724-4E07-BEA2-501D920C16BC.jpg", caption: "I tuoi occhi che sorridono sono la cosa più bella del mondo" },
    { src: "62D1ED36-F6A0-43C1-8A18-285C71B05B00.jpg", caption: "Insieme su chi ci ha visti innamorare 🏍️" },
    { src: "A93C2353-205E-48FE-BA2E-7796BC06C058.jpg", caption: "Tutto l'amore in un bacio" },
    { src: "F2E3FFB6-B40F-4224-BD00-9BD04F23BA8D.jpg", caption: "Il tuo casco vicino al mio ❤️" },
    { src: "IMG_0434.jpg", caption: "La magia di noi ✨" },
    { src: "IMG_0548.jpg", caption: "Il mio angelo che dorme 😴" },
    { src: "IMG_0565.jpg", caption: "Bianco e nero, colori dell'anima, la mia sei tu" },
    { src: "IMG_0601.jpg", caption: "Il mio amore ama molto i cani ❤️" },
    { src: "IMG_0604.jpg", caption: "Un bel bacione per amarti ancora di più" },
    { src: "IMG_1876.jpg", caption: "Come sei bella in questa foto patatina mia" },
    { src: "IMG_2370.jpg", caption: "Byron sempre con noi a fare da guardia" }
];

export default function Gallery() {
    return (
        <section className="section gallery-section">
            <RevealOnScroll width="100%" style={{ zIndex: 10 }}>
                <h2 className="text-center mb-6">Un pò di noi, un pò di te</h2>
                <div className="relative z-10 mb-16 text-center animate-pulse md:hidden">
                    <p className="text-gray-500 italic inline-block">
                        (Clicca sulle foto✨)
                    </p>
                </div>
            </RevealOnScroll>

            <div className="gallery-grid">
                {photos.map((photo, index) => (
                    <RevealOnScroll key={index} delay={index * 0.1}>
                        <div className="gallery-item">
                            <img
                                src={`/photos/${photo.src}`}
                                alt={photo.caption}
                                loading="lazy"
                            />
                            <div className="caption-overlay">
                                <p>{photo.caption}</p>
                            </div>
                        </div>
                    </RevealOnScroll>
                ))}
            </div>
        </section>
    );
}

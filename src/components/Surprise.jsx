import { useState } from 'react';
import { Gift, Utensils, Heart } from 'lucide-react';
import { RevealOnScroll } from './RevealOnScroll';

export default function Surprise() {
    const [revealedSushi, setRevealedSushi] = useState(false);
    const [revealedGift, setRevealedGift] = useState(false);

    return (
        <section className="section text-center">
            <RevealOnScroll width="100%">
                <h2 className="mb-12">Dopotutto, non mi trattengo e quindi... Ho una sorpresa per te.</h2>
            </RevealOnScroll>

            <div className="surprise-container">
                {/* Sushi Card */}
                <RevealOnScroll delay={0.1} width="100%" className="flex-1" style={{ maxWidth: '400px', minWidth: '300px' }}>
                    <div className="card-container" onClick={() => setRevealedSushi(!revealedSushi)}>
                        <div className={`card-inner ${revealedSushi ? 'is-flipped' : ''}`}>
                            <div className="card-front">
                                <div className="mb-6 p-6 bg-rose-50 rounded-full">
                                    <Utensils size={64} className="text-accent" />
                                </div>
                                <h3>Sorpresa #1</h3>
                                <p className="text-gray-500 mt-2">Clicca per scoprire</p>
                            </div>
                            <div className="card-back">
                                <img src={`${import.meta.env.BASE_URL}photos/sushi.png`} alt="Sushi Reservation" style={{ height: '250px', objectFit: 'cover' }} />
                                <div className="card-content">
                                    <h3>Sushi per Due! 🍣</h3>
                                    <p>Chi ha voglia di taaanto sushi?</p>
                                    <div className="mt-4 text-accent font-bold">Mi raccomando non fare la pocca a scuola e tieniti libera</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </RevealOnScroll>

                {/* Gift Card */}
                <RevealOnScroll delay={0.3} width="100%" className="flex-1" style={{ maxWidth: '400px', minWidth: '300px' }}>
                    <div className="card-container" onClick={() => setRevealedGift(!revealedGift)}>
                        <div className={`card-inner ${revealedGift ? 'is-flipped' : ''}`}>
                            <div className="card-front">
                                <div className="mb-6 p-6 bg-rose-50 rounded-full">
                                    <Gift size={64} className="text-accent" />
                                </div>
                                <h3>Sorpresa #2</h3>
                                <p className="text-gray-500 mt-2">Clicca per scoprire</p>
                            </div>
                            <div className="card-back">
                                <img src={`${import.meta.env.BASE_URL}photos/regalo.png`} alt="Gift" style={{ height: '250px', objectFit: 'contain', width: '100%', padding: '10px' }} />
                                <div className="card-content flex flex-col items-center justify-center">
                                    <h3>Un Regalo Speciale 🎁</h3>
                                    <p>Cosa sarà mai questa mail?</p>
                                    <div className="mt-4 text-accent font-bold flex items-center justify-center gap-2">
                                        <Heart fill="currentColor" size={20} />
                                        <span>Solo per te</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </RevealOnScroll>
            </div>
        </section>
    );
}

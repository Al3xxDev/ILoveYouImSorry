import { RevealOnScroll } from './RevealOnScroll';

export default function SpecialMemories() {
    return (
        <section className="section memory-section">
            <div className="flex flex-col gap-24 items-center">

                {/* First Kiss Section */}
                <RevealOnScroll width="100%" className="max-w-4xl mx-auto">
                    <div className="glass-card p-8 md:p-12 flex flex-col md:flex-row gap-12 items-center">
                        <div className="flex-1">
                            <div className="polaroid-wrapper transform rotate-[-3deg] hover:rotate-0 transition-transform duration-500">
                                <img
                                    src={`${import.meta.env.BASE_URL}photos/firstKiss.jpg`}
                                    alt="First Kiss Memory"
                                    className="rounded-sm shadow-lg"
                                    style={{ maxWidth: '100%', height: 'auto' }}
                                />
                            </div>
                        </div>
                        <div className="flex-1 text-center md:text-left">
                            <h2 className="mb-6 text-3xl md:text-4xl text-primary-dark">Il Nostro Primo Bacio...</h2>
                            <p className="mb-6 text-lg text-gray-700 leading-relaxed italic">
                                "Non è proprio la foto del nostro primo bacio, ma è stato un attimo prima... Ricordo quel giorno così bene..."
                            </p>
                            <div className="bg-white/50 p-4 rounded-xl border border-pink-100">
                                <p className="font-semibold text-accent">
                                    Eravamo lì, appoggiati fianco a fianco alla moto. Era un momento tranquillissimo: tu stavi scorrendo TikTok e messaggiavi con la tua sorellina, mentre io guardavo lo schermo insieme a te. Ridevamo, scherzavamo... eravamo semplicemente noi.

                                    Proprio in mezzo a quelle risate, all'improvviso, mi hai dato un bacio sulla guancia. È stato un gesto così spontaneo che, un attimo dopo, non ho potuto fare a meno di ricambiare.

                                    Poi però hai messo via il telefono e tutto è cambiato. Hai iniziato a riempirmi di baci su tutto il viso, dappertutto, avvicinandoti sempre di più alle labbra, piano piano, quasi per stuzzicarmi. Finché alla fine è successo: le nostre bocche si sono trovate.

                                    È stato incredibile. Senza dubbio la sensazione più bella che abbia mai provato in vita mia.
                                </p>
                            </div>
                        </div>
                    </div>
                </RevealOnScroll>

                {/* Video Section */}
                <RevealOnScroll width="100%" className="max-w-4xl mx-auto" delay={0.2}>
                    <div className="glass-card p-8 md:p-12 flex flex-col md:flex-row-reverse gap-12 items-center">
                        <div className="flex-1">
                            <div className="video-frame shadow-2xl transform hover:scale-[1.02] transition-transform duration-500">
                                <video controls width="100%" className="rounded-lg">
                                    <source src={`${import.meta.env.BASE_URL}photos/burp.mp4`} type="video/mp4" />
                                    Il tuo browser non supporta il video.
                                </video>
                            </div>
                        </div>
                        <div className="flex-1 text-center md:text-right">
                            <h2 className="mb-6 text-3xl md:text-4xl text-primary-dark">Un Po' di Risate</h2>
                            <p className="mb-6 text-lg text-gray-700 leading-relaxed italic">
                                NNo PParole, sei semplicemente tu. Unica. Perfetta nel tuo essere unica. Unica nel tuo essere perfetta. E io ti amo per questo.
                            </p>
                            <div className="bg-white/50 p-4 rounded-xl border border-pink-100 inline-block">
                                <p className="font-semibold text-accent">
                                    Amo ogni singola parte di te.
                                </p>
                            </div>
                        </div>
                    </div>
                </RevealOnScroll>

            </div>
        </section>
    );
}

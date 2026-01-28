import { useState } from 'react';
import { motion, AnimatePresence, useAnimation } from 'framer-motion';
import { RevealOnScroll } from './RevealOnScroll';

export default function LoveLetter() {
    // State to control the visibility of the letter content
    const [isLetterVisible, setIsLetterVisible] = useState(false);

    // Animation controls
    const envelopeControls = useAnimation();
    const flapControls = useAnimation();
    const letterControls = useAnimation();

    const handleOpenEnvelope = async () => {
        // 1. Animate FLAP opening (rotateX 180deg)
        await flapControls.start({
            rotateX: 180,
            transition: { duration: 0.8, ease: "easeInOut" },
            zIndex: 1
        });

        // 2. Animate ENVELOPE falling down and fading out
        await envelopeControls.start({
            y: 800,
            opacity: 0,
            rotate: 10,
            transition: { duration: 0.8, ease: "easeIn", delay: 0.2 }
        });

        // 3. Show LETTER (set state true to mount/reveal letter)
        setIsLetterVisible(true);
    };

    const handleCloseLetter = () => {
        setIsLetterVisible(false);
        // Reset animations
        envelopeControls.set({ y: 0, opacity: 1, rotate: 0 });
        flapControls.set({ rotateX: 0, zIndex: 3 });
    };

    return (
        <section className="section letter-section min-h-screen flex flex-col items-center justify-center overflow-hidden">
            <RevealOnScroll width="100%">
                <h2 className="text-center mb-12">Una lettera per te...</h2>
            </RevealOnScroll>

            <div className="relative w-full max-w-2xl flex justify-center items-center h-[600px]"> {/* Fixed height container for stability */}

                <AnimatePresence mode="wait">
                    {!isLetterVisible ? (
                        <motion.div
                            className="absolute envelope-container cursor-pointer"
                            onClick={handleOpenEnvelope}
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ opacity: 0, duration: 0.5 }} // Smooth exit if needed
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.5 }}
                        >
                            {/* ENVELOPE Wrapper */}
                            <motion.div
                                className="envelope"
                                animate={envelopeControls}
                            >
                                {/* FLAP - Animated Part */}
                                <motion.div
                                    className="envelope-flap"
                                    animate={flapControls}
                                    style={{ transformOrigin: "top" }} // Essential for flip effect
                                ></motion.div>

                                <div className="envelope-pocket"></div>

                                <motion.div
                                    className="heart-seal animate-pulse"
                                    animate={flapControls} // Move heart with flap? No, heart is usually on the tip or crossing. 
                                    // Actually, if it's a seal, it breaks or moves with flap. Let's keep it simple: it stays on flap tip or fades.
                                    // Current CSS places it absolute centered.
                                    // Let's fade it out when opening.
                                    exit={{ opacity: 0 }}
                                >
                                    ❤️
                                </motion.div>

                                <div className="absolute bottom-4 font-heading text-white text-lg z-10 opacity-90 tracking-wide font-bold drop-shadow-md">
                                    Cliccami
                                </div>
                            </motion.div>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="letter"
                            className="letter-paper bg-white p-8 md:p-12 shadow-2xl rounded-sm max-w-lg w-full relative h-auto max-h-[80vh] overflow-y-auto"
                            initial={{ y: 50, opacity: 0, scale: 0.9 }}
                            animate={{ y: 0, opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            <div className="absolute -top-4 -left-4 w-8 h-8 bg-current text-primary opacity-50">📌</div>

                            <div className="prose prose-pink mx-auto font-body text-gray-700 leading-relaxed whitespace-pre-line">
                                <h3 className="font-heading text-2xl mb-6 text-primary border-b border-pink-100 pb-2">Amore mio,</h3>

                                <p>
                                    Ti scrivo queste righe con il cuore che mi trema nel petto, perché non c’è voce che possa reggere il peso di quello che devo dirti. Ho bisogno di liberarmi di tutto questo veleno, di queste lacrime non versate, e ho bisogno che tu legga ogni singola parola, perché dentro ci troverai la parte più vera, fragile e spaventata di me.
                                </p>
                                <p>
                                    La prima cosa che devo fare, prima di ogni spiegazione, è inginocchiarmi metaforicamente davanti a te e chiederti perdono. Perdonami. Perdonami per ogni volta che ti ho guardata con occhi gelidi quando meritavi calore. Perdonami per la rabbia cieca con cui ti ho trattata, per le parole taglienti che ti ho lanciato addosso come pietre, sapendo che ti avrebbero ferita. Ti ho vista soffrire per colpa mia, ho visto la luce nei tuoi occhi spegnersi sotto il peso del mio rancore, e invece di fermarmi, ho continuato. Ho trasformato il mio dolore in un’arma e l’ho puntata contro di te. Sapere di essere stato io la causa delle tue lacrime, in questi ultimi tempi, è un tormento che non mi fa dormire la notte. Mi dispiace, amore mio, mi dispiace da morire.
                                </p>
                                <p>
                                    Ma se sono arrivato a tanto, se sono diventato una persona che non riconosco, è perché dentro di me qualcosa si è rotto in mille pezzi quel maledetto giorno. Dobbiamo parlarne, anche se fa male. Il 7 settembre 2025. Il tuo quindicesimo compleanno. Quella data doveva essere scolpita nell'oro, doveva essere il giorno della tua gioia, della nostra festa. E invece, nella mia memoria, è diventata una lapide.
                                </p>
                                <p>
                                    Eravamo a casa tua. C'era Luciano, pensavo fosse andato tutto bene, alla fine è solo un adulto con la quale non serviva avere paura? Giusto? Ma il cuore... il cuore quel giorno ha smesso di battere per un istante. Guardarti stare al suo gioco, vederti diventare complice di quella messinscena per far ingelosire la sua ragazza, mi ha ucciso. Non è una metafora. In quel momento, mentre ridevi e scherzavi con lui ignorando come mi sentissi io, ho sentito un dolore fisico, lancinante, strapparmi via il respiro. Mi sono sentito nullo. Mi sono sentito umiliato e dimenticato dalla persona che amo più della mia stessa vita. La fiducia che avevo in noi, quella sicurezza granitica di essere "tuo", è crollata in un attimo, polverizzata da un gioco stupido che per me era una tortura. Un gioco a detta vostra poi. Chi lo sa veramente se era un gioco oppure era la realtà? Sinceramente io credo sia realtà e non un gioco. Ma tutto questo non va solo che a frantumarmi il cuore ancora di più.
                                </p>
                                <p>
                                    È stato un male indescrivibile. Un buco nero che ha inghiottito tutto l'amore che provavo, lasciando solo disperazione.
                                </p>
                                <p>
                                    Però poi... poi ho visto cosa hai fatto. Nonostante io ti trattassi come il peggiore dei nemici, tu non sei scappata. Sei rimasta. Hai incassato i miei colpi, hai sopportato il mio gelo, e hai lottato con le unghie e con i denti per dimostrarmi che mi sbagliavo. Ho visto come ti sei fatta in quattro per farmi capire che noi abbiamo ancora un futuro insieme, abbiamo ancora un amore che si può rinnovare, che può vivere. L'ho visto, credimi. Ho sentito ogni tuo sforzo, ho apprezzato ogni tuo tentativo disperato di rimettere insieme i miei pezzi. Mi hai dimostrato con tutta te stessa quanto io conti per te, e questo... questo è l'unico motivo per cui sono ancora qui. La tua dedizione successiva mi ha salvato.
                                </p>
                                <p>
                                    Ti capisco, adesso. E apprezzo tutto, dal primo all'ultimo pensiero che mi hai dedicato per rimediare.
                                </p>
                                <p>
                                    Ma devo dirti una verità che fa male, perché è l'unica che possiedo: ti perdono, ma non dimentico. Voglio chiederti scusa per il mio comportamento orribile, voglio tornare ad amarti come meriti, ma quel 7 settembre resterà per sempre una cicatrice sulla mia pelle. Non posso cancellare quel giorno. Lo hai reso il giorno peggiore della mia vita. E rimarrà tale. Anche tra dieci anni, se ci penserò, sentirò quella fitta allo stomaco. È una ferita che hai curato, che non sanguina più grazie al tuo amore, ma il segno è lì. È indelebile.
                                </p>
                                <p>
                                    Accettami così, con questa crepa nel cuore che porta quella data. Io accetto te, con i tuoi errori, e ti chiedo di perdonare i miei. Nonostante tutto quel male, io non riesco a smettere di amarti.
                                </p>

                                <p className="mt-8 font-heading text-right text-xl text-primary">
                                    Tuo per sempre,<br />
                                    AleAle
                                </p>
                            </div>

                            <div className="sticky bottom-0 left-0 w-full flex justify-center pt-4 pb-2 bg-gradient-to-t from-white via-white to-transparent">
                                <button
                                    onClick={handleCloseLetter}
                                    className="close-letter-btn"
                                >
                                    <span>Chiudi la lettera</span>
                                    <span>💝</span>
                                </button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
}

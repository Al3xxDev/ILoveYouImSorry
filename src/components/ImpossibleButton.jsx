import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RevealOnScroll } from './RevealOnScroll';

export default function ImpossibleButton({ onSuccess }) {
    const [noBtnPosition, setNoBtnPosition] = useState({ x: 0, y: 0 });
    const [isGameWon, setIsGameWon] = useState(false);

    const moveButton = () => {
        const x = Math.random() * 200 - 100; // Random x between -100 and 100
        const y = Math.random() * 200 - 100; // Random y between -100 and 100
        setNoBtnPosition({ x, y });
    };

    const handleYesClick = () => {
        setIsGameWon(true);
        setTimeout(() => {
            onSuccess(); // Unlock the next section
        }, 2000); // Wait a bit to show the success message
    };

    return (
        <section className="section text-center min-h-[50vh] flex flex-col justify-center items-center overflow-hidden" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '50vh' }}>
            <RevealOnScroll width="100%">
                <AnimatePresence mode="wait">
                    {!isGameWon ? (
                        <motion.div
                            key="question"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, y: -50 }}
                            className="glass-card"
                            style={{
                                padding: '3rem',
                                maxWidth: '600px',
                                margin: '0 auto',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center'
                            }}
                        >
                            <h2 style={{ marginBottom: '2rem', fontSize: '2rem' }}>Mi perdoni e mi dai un bacio? 🥺</h2>

                            <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', alignItems: 'center', marginTop: '1rem', minHeight: '100px', position: 'relative', width: '100%' }}>
                                {/* YES Button */}
                                <motion.button
                                    onClick={handleYesClick}
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                    style={{
                                        padding: '1rem 2rem',
                                        backgroundColor: '#22c55e', // Green 500
                                        color: 'white',
                                        fontSize: '1.25rem',
                                        fontWeight: 'bold',
                                        borderRadius: '9999px',
                                        border: 'none',
                                        boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
                                        cursor: 'pointer',
                                        zIndex: 10
                                    }}
                                >
                                    Sì ❤️
                                </motion.button>

                                {/* NO Button (Runaway) */}
                                <motion.button
                                    onHoverStart={moveButton}
                                    onTouchStart={moveButton} // For mobile
                                    animate={{ x: noBtnPosition.x, y: noBtnPosition.y }}
                                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                    style={{
                                        padding: '0.75rem 1.5rem',
                                        backgroundColor: '#f87171', // Red 400
                                        color: 'white',
                                        fontSize: '1rem',
                                        fontWeight: '500',
                                        borderRadius: '9999px',
                                        border: 'none',
                                        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                                        position: 'relative', // Changed from absolute to relative for better initial layout
                                        cursor: 'pointer'
                                    }}
                                >
                                    No, sei brutto
                                </motion.button>
                            </div>
                            <p style={{ marginTop: '2rem', fontSize: '0.9rem', color: '#9ca3af', fontStyle: 'italic' }}>(Prova a dire di no... se ci riesci)</p>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="success"
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="glass-card"
                            style={{
                                padding: '3rem',
                                maxWidth: '500px',
                                margin: '0 auto',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                border: '2px solid var(--color-primary)'
                            }}
                        >
                            <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: 'var(--color-primary)' }}>Sapevo che non potevi resistermi baaaby! 😏</h2>
                            <img
                                src={`${import.meta.env.BASE_URL}photos/funny.jpg`}
                                alt="Funny victory"
                                style={{
                                    width: '100%',
                                    maxWidth: '300px',
                                    height: 'auto',
                                    maxHeight: '300px',
                                    objectFit: 'cover',
                                    borderRadius: '16px',
                                    marginBottom: '1.5rem',
                                    boxShadow: 'var(--shadow-md)'
                                }}
                                onError={(e) => { e.target.style.display = 'none' }}
                            />
                            <p style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#374151' }}>Ora ho qualcosa da farti vedere patatina</p>
                        </motion.div>
                    )}
                </AnimatePresence>
            </RevealOnScroll>
        </section>
    );
}

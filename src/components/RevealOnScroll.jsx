import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

export const RevealOnScroll = ({ children, width = "fit-content", delay = 0, className = "", style = {} }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-20px" });
    const mainControls = useAnimation();

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible");
        }
    }, [isInView, mainControls]);

    return (
        <div ref={ref} className={className} style={{ position: "relative", width, zIndex: 1, ...style }}>
            <motion.div
                variants={{
                    hidden: { opacity: 0, y: 75 },
                    visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 0.8, delay: delay, ease: "easeOut" }}
                style={{ height: "100%" }}
            >
                {children}
            </motion.div>
        </div>
    );
};

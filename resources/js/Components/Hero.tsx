import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useMotionTemplate } from 'framer-motion';

// --- Shared Animation Helper Components ---

function SlideWord({ children, delay = 0, className = '' }) {
    return (
        <span
            className={`inline-block ${className}`}
            style={{
                opacity: 0,
                animation: `slideUp 0.6s cubic-bezier(0.22, 1, 0.36, 1) forwards`,
                animationDelay: `${delay}s`,
            }}
        >
            {children}
        </span>
    );
}

function LetterByLetter({ text, baseDelay = 0, className = '', letterClassName = '' }) {
    return (
        <span className={className}>
            {text.split('').map((char, i) => (
                <span
                    key={i}
                    className={`inline-block ${letterClassName}`}
                    style={{
                        opacity: 0,
                        animation: `fadeInLetter 0.04s linear forwards`,
                        animationDelay: `${baseDelay + i * 0.04}s`,
                        whiteSpace: char === ' ' ? 'pre' : undefined,
                    }}
                >
                    {char}
                </span>
            ))}
        </span>
    );
}

function WipeText({ children, delay = 0, className = '' }) {
    return (
        <span
            className={`inline-block ${className}`}
            style={{
                clipPath: 'inset(0 100% 0 0)',
                animation: `wipeLeft 0.7s cubic-bezier(0.22, 1, 0.36, 1) forwards`,
                animationDelay: `${delay}s`,
            }}
        >
            {children}
        </span>
    );
}

function FadeInEl({ delay = 0, className = '', children }) {
    return (
        <div
            className={className}
            style={{
                opacity: 0,
                animation: `fadeInLetter 0.6s ease forwards`,
                animationDelay: `${delay}s`,
            }}
        >
            {children}
        </div>
    );
}

export default function Hero() {
    // --- Spotlight State & Animation Logic ---
    const sectionRef = useRef(null);
    const [isHoveringHeading, setIsHoveringHeading] = useState(false);

    // Track mouse coordinates
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Add a spring for a smooth, natural trailing effect
    const smoothX = useSpring(mouseX, { stiffness: 50, damping: 15 });
    const smoothY = useSpring(mouseY, { stiffness: 50, damping: 15 });

    const handleMouseMove = (e) => {
        const { current } = sectionRef;
        if (current) {
            const rect = current.getBoundingClientRect();
            // Calculate mouse position relative to the section
            mouseX.set(e.clientX - rect.left);
            mouseY.set(e.clientY - rect.top);
        }
    };

    // Create the radial gradient that acts as our spotlight and darkness overlay
    // Uses the secondary color (#FFFDF1) with low opacity for the center highlight
    // and the primary color (#0F1215) for the dark surroundings.
    const spotlightBackground = useMotionTemplate`radial-gradient(circle 350px at ${smoothX}px ${smoothY}px, rgba(255, 253, 241, 0.15) 0%, rgba(255, 253, 241, 0.05) 20%, rgba(15, 18, 21, 0.95) 60%, rgba(15, 18, 21, 1) 100%)`;

    return (
        <>
            <style>{`
                @keyframes slideUp {
                    from { opacity: 0; transform: translateY(40px); }
                    to   { opacity: 1; transform: translateY(0); }
                }
                @keyframes wipeLeft {
                    from { clip-path: inset(0 100% 0 0); }
                    to   { clip-path: inset(0 0% 0 0); }
                }
                @keyframes fadeInLetter {
                    from { opacity: 0; }
                    to   { opacity: 1; }
                }
            `}</style>

            <section 
                ref={sectionRef} 
                onMouseMove={handleMouseMove}
                className="relative flex min-h-[90vh] w-full flex-col items-center justify-center py-32 font-sans md:min-h-[800px]" 
                id='home'
            >

                {/* ── Spotlight Overlay ── */}
                <motion.div
                    className="pointer-events-none absolute inset-0 z-40 transition-opacity duration-700 ease-in-out"
                    style={{
                        opacity: isHoveringHeading ? 1 : 0,
                        background: spotlightBackground,
                    }}
                />

                {/* ── Main content ── */}
                <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center gap-24 px-6 md:gap-40">

                    {/* Heading Section (The Hover Target) */}
                    <div 
                        className="relative flex w-full max-w-5xl flex-col items-center"
                        onMouseEnter={() => setIsHoveringHeading(true)}
                        onMouseLeave={() => setIsHoveringHeading(false)}
                    >

                        {/* Top Name Line — word-by-word slide up */}
                        <div className="mb-2 flex w-full items-center justify-between px-2 font-amore text-xs font-medium tracking-[0.4em] md:text-sm lg:text-base">
                            <SlideWord delay={0.1}>Revanza</SlideWord>
                            <SlideWord delay={0.4} className="text-[#FF9644]">Raihan</SlideWord>
                            <SlideWord delay={0.7}>Rizqullah</SlideWord>
                        </div>

                        {/* PORTFOLIO — slide up */}
                        <div className="relative flex w-full justify-center overflow-visible">
                            <SlideWord delay={1.1}>
                                <h1 className="font-allover text-4xl leading-none tracking-tight uppercase md:text-6xl lg:text-[10rem]">
                                    PORTFOLIO
                                </h1>
                            </SlideWord>

                            {/* showcase — wipe left-to-right */}
                            <WipeText
                                delay={1.7}
                                className="absolute right-[-4%] bottom-[-20%] z-20 -rotate-[8deg] font-motterdam text-4xl text-[#FF9644] lowercase md:text-6xl lg:text-8xl"
                            >
                                showcase
                            </WipeText>
                        </div>
                    </div>

                    {/* Sub Heading Section */}
                    <div className="flex w-full max-w-5xl flex-col items-start justify-between gap-12 md:flex-row md:items-center md:gap-4">

                        {/* Left sub-text — letter by letter */}
                        <div className="w-full text-left md:w-1/3">
                            <p className="font-dastine text-xs leading-relaxed text-gray-300 md:text-sm">
                                <LetterByLetter text="to make a functional website" baseDelay={2.1} />
                                <br />
                                <LetterByLetter text="with a nice ui and extended scalability" baseDelay={2.5} />
                            </p>
                        </div>

                        {/* Center image — fade in */}
                        <div className="flex w-full justify-center md:w-1/3">
                            <FadeInEl delay={2.0} className="flex flex-col items-center opacity-80">
                                <img
                                    src="/images/elements/star_deco.png"
                                    alt="Star decoration"
                                    className="h-[180px] w-[90px] object-contain"
                                />
                            </FadeInEl>
                        </div>

                        {/* Right sub-text — letter by letter */}
                        <div className="w-full text-right md:w-1/3">
                            <p className="font-dastine text-xs leading-relaxed text-gray-300 md:text-sm">
                                <LetterByLetter text="also making web apps and mobile apps" baseDelay={2.3} />
                                <br />
                                <LetterByLetter text="using tech as an excuse to make" baseDelay={2.7} />
                                <br />
                                <LetterByLetter text="difficult things easier" baseDelay={3.0} />
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
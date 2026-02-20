import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';

// --- Shared Animation Helper Components ---

function LetterByLetter({ text, baseDelay = 0, className = '', letterClassName = '' }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-10%' });

    return (
        <span ref={ref} className={className}>
            {text.split('').map((char, i) => (
                <span
                    key={i}
                    className={`inline-block ${letterClassName}`}
                    style={
                        isInView
                            ? {
                                  opacity: 0,
                                  animation: `fadeInLetter 0.04s linear forwards`,
                                  animationDelay: `${baseDelay + i * 0.04}s`,
                                  whiteSpace: char === ' ' ? 'pre' : undefined,
                              }
                            : { opacity: 0 }
                    }
                >
                    {char}
                </span>
            ))}
        </span>
    );
}

function FadeInEl({ delay = 0, className = '', children }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-10%' });

    return (
        <div
            ref={ref}
            className={className}
            style={
                isInView
                    ? {
                          opacity: 0,
                          animation: `fadeInLetter 0.6s ease forwards`,
                          animationDelay: `${delay}s`,
                      }
                    : { opacity: 0 }
            }
        >
            {children}
        </div>
    );
}

// --- Tech Stack Data ---
const techStack = [
    { name: 'PHP', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg' },
    { name: 'MySQL', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg' },
    { name: 'MariaDB', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mariadb/mariadb-original.svg' },
    { name: 'HTML5', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg' },
    { name: 'CSS3', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg' },
    { name: 'JavaScript', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg' },
    { name: 'Tailwind', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' },
    { name: 'Laravel', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg' },
    { name: 'React', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
];

const marqueeItems = [...techStack, ...techStack]; // Doubled for seamless scrolling

// --- Main About Component ---

export default function About() {
    const sectionRef = useRef(null);
    const [isRevealed, setIsRevealed] = useState(false);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ['start end', 'end start'],
    });

    const banners = [
        '/images/banners/irohaa.jpg',
        '/images/banners/irohaaa.jpg',
        '/images/banners/irohaaaa.jpg',
        '/images/banners/irohaaaaa.jpg',
    ];

    const topDecoParallax = useTransform(scrollYProgress, [0, 1], [-80, 80]);
    const bottomDecoParallax = useTransform(scrollYProgress, [0, 1], [80, -80]);

    return (
        <section
            ref={sectionRef}
            className="relative flex min-h-screen w-full flex-col items-center justify-center py-24 font-sans text-[#FFFDF1]"
            id="about"
        >
            <style>{`
                @keyframes fadeInLetter {
                    from { opacity: 0; }
                    to   { opacity: 1; }
                }
                @keyframes marquee {
                    100% { transform: translateX(-50%); }
                }
                .animate-marquee {
                    animation: marquee 25s linear infinite;
                }
            `}</style>

            <div className="pointer-events-none absolute inset-0 z-0 flex h-full w-full overflow-hidden opacity-30 grayscale">
                {banners.map((src, i) => {
                    const isFromTop = i % 2 !== 0;
                    const initialY = isFromTop ? '-120%' : '120%';

                    return (
                        <motion.div
                            key={i}
                            initial={{ y: initialY }}
                            animate={{ y: isRevealed ? '0%' : initialY }}
                            transition={{
                                duration: 0.8,
                                ease: [0.22, 1, 0.36, 1],
                                delay: isRevealed ? i * 0.1 : (3 - i) * 0.1,
                            }}
                            className="h-full flex-1 border-r border-white/5 last:border-none"
                        >
                            <img src={src} alt={`Background Banner ${i + 1}`} className="h-full w-full object-cover" />
                        </motion.div>
                    );
                })}
            </div>

            {/* ── Main Container ── */}
            <div className="relative z-10 mx-auto w-full max-w-[1000px] px-4 md:px-8">
                {/* Top Right Decoration (Swan) */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={isRevealed ? { opacity: 0, x: 300 } : { opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className="pointer-events-none absolute -top-15 -right-10 z-30 h-50 w-50 md:-top-35 md:-right-30 md:h-90 md:w-90"
                >
                    <motion.img
                        style={{ y: topDecoParallax }}
                        src="/images/elements/swan.png"
                        alt="Top right decoration"
                        className="h-full w-full object-contain opacity-80 drop-shadow-2xl"
                    />
                </motion.div>

                {/* Bottom Left Decoration (Console) */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={isRevealed ? { opacity: 0, x: -300 } : { opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className="pointer-events-none absolute -bottom-15 -left-10 z-30 h-50 w-50 md:-bottom-45 md:-left-30 md:h-100 md:w-100"
                >
                    <motion.img
                        style={{ y: bottomDecoParallax }}
                        src="/images/elements/console.png"
                        alt="Bottom left decoration"
                        className="h-full w-full object-contain opacity-90 drop-shadow-2xl"
                    />
                </motion.div>

                {/* Dark Container (Interactive Card) */}
                {/* aspect-[4/5] on mobile creates a nice portrait box, md:aspect-video resets to desktop layout */}
                <FadeInEl delay={0.2} className="w-full">
                    <motion.div
                        onClick={() => setIsRevealed(!isRevealed)}
                        animate={{
                            backgroundColor: isRevealed ? 'rgba(20, 20, 20, 0.6)' : 'rgba(20, 20, 20, 1)',
                            backdropFilter: isRevealed ? 'blur(8px)' : 'blur(0px)',
                        }}
                        className="group relative z-20 aspect-[4/5] sm:aspect-square md:aspect-video w-full cursor-pointer overflow-hidden border border-white/5 shadow-2xl transition-all duration-500 hover:scale-[1.02]"
                    >
                        {/* Hover Cue */}
                        <div className="pointer-events-none absolute inset-0 z-50 flex items-center justify-center bg-black/0 transition-colors duration-500 group-hover:bg-black/20">
                            <span className="translate-y-4 font-dastine text-xs tracking-widest text-white opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 md:text-sm">
                                {isRevealed ? 'CLICK TO CLOSE' : 'CLICK TO REVEAL'}
                            </span>
                        </div>

                        {/* Initial Content (Fades out when revealed) */}
                        <motion.div
                            animate={{ opacity: isRevealed ? 0 : 1, scale: isRevealed ? 0.95 : 1 }}
                            transition={{ duration: 0.6, ease: 'easeInOut' }}
                            className="pointer-events-none absolute inset-0 z-10"
                        >
                            {/* Top Left Text */}
                            <div className="absolute top-4 left-4 md:top-8 md:left-8">
                                <p className="font-dastine text-[10px] leading-relaxed text-[#FFFDF1] md:text-lg">
                                    <LetterByLetter text="i like typhography" baseDelay={0.5} />
                                    <br />
                                    <LetterByLetter text="wall of text, i love it so much." baseDelay={1.0} />
                                </p>
                            </div>

                            {/* Bottom Right Text */}
                            <div className="absolute right-4 bottom-4 text-right md:right-8 md:bottom-8">
                                <p className="font-dastine text-[10px] leading-relaxed text-[#FFFDF1] md:text-lg">
                                    <LetterByLetter text="you scrolled this far!" baseDelay={1.5} />
                                    <br />
                                    <LetterByLetter text="its pretty short actually" baseDelay={2.0} />
                                </p>
                            </div>

                            {/* Center Content: Heading */}
                            <div className="absolute inset-0 flex flex-col items-center justify-center">
                                <div className="relative z-0 flex w-full flex-col items-center">
                                    {/* Responsive typography scaling using vw on mobile */}
                                    <h2 className="flex w-full justify-center font-amore text-[12vw] sm:text-[10vw] md:text-8xl lg:text-[9rem] leading-none tracking-wider">
                                        <span className="text-[#FF9644]">Intro</span>
                                        <span className="text-[#FFFDF1]">ducting!</span>
                                    </h2>
                                    <div className="absolute right-5 -bottom-10 md:-right-90 md:-bottom-3 mt-2 w-full max-w-2xl text-right md:pr-16 lg:pr-24">
                                        <span className="font-motterdam text-[8vw] sm:text-4xl tracking-widest text-[#FFFDF1] lowercase md:text-4xl">revanza</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Persistent Profile Picture */}
                        <motion.div
                            animate={{
                                // Pushes the image up relatively based on container height
                                y: isRevealed ? '-20%' : '0%',
                                scale: isRevealed ? 0.65 : 1,
                            }}
                            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                            className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center"
                        >
                            <div className="h-28 w-28 md:h-56 md:w-56 overflow-hidden rounded-full border-2 border-[#FFFDF1] bg-zinc-800 shadow-2xl md:border-4">
                                <img
                                    src="/images/elements/me.png"
                                    alt="Revanza"
                                    className="h-full w-full object-cover"
                                />
                            </div>
                        </motion.div>

                        {/* Revealed Bio Content */}
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: isRevealed ? 1 : 0, y: isRevealed ? 0 : 50 }}
                            transition={{ duration: 0.8, delay: isRevealed ? 0.3 : 0, ease: [0.22, 1, 0.36, 1] }}
                            className="pointer-events-none absolute inset-0 z-30 flex flex-col items-center justify-center px-6 md:px-24"
                        >
                            <p className="mt-16 text-center font-sans text-[11px] sm:text-xs leading-relaxed text-gray-200 md:mt-32 md:text-lg">
                                Revanza Raihan Rizqullah, call me Repan or Ian. i was born and raised in the city of Balikpapan in East Province of
                                Kalimantan. i enjoy process of creating things, but i usually fast to burnt out as well. i enjoy being in the creative
                                field, to create art even as a web programmer.
                            </p>
                        </motion.div>

                        {/* Revealed Tech Stack Marquee */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: isRevealed ? 1 : 0 }}
                            transition={{ duration: 0.8, delay: isRevealed ? 0.5 : 0, ease: [0.22, 1, 0.36, 1] }}
                            className="pointer-events-none absolute bottom-8 left-0 z-30 w-full overflow-hidden md:bottom-8"
                        >
                            <div className="flex w-max animate-marquee items-center">
                                {marqueeItems.map((tech, idx) => (
                                    <div key={idx} className="flex w-[60px] justify-center md:w-[150px]">
                                        <img
                                            src={tech.src}
                                            alt={tech.name}
                                            className="h-5 w-auto opacity-50 md:h-8"
                                            style={{ filter: 'brightness(0) invert(1)' }}
                                        />
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>
                </FadeInEl>
            </div>

            {/* ── Quote Section ── */}
            <div className="relative z-10 mx-auto mt-20 flex w-full max-w-3xl flex-col items-center px-6 text-center">
                <p className="font-dastine text-xs leading-relaxed text-gray-300 italic md:text-lg">
                    <LetterByLetter text="“ searching definitive answer to something that sometimes very obvious" baseDelay={0.4} />
                    <br className="hidden md:block" />
                    <LetterByLetter text="to the eyes. the world is huge and may offer everything that you need for" baseDelay={1.4} />
                    <br className="hidden md:block" />
                    <LetterByLetter text="so i may not rest and find myself to seek everything for my own. “" baseDelay={2.4} />
                </p>

                {/* Star Decoration Below Quote */}
                <FadeInEl delay={3.5} className="mt-12 flex justify-center opacity-80">
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 0L22 18L40 20L22 22L20 40L18 22L0 20L18 18L20 0Z" fill="#FFFDF1" />
                    </svg>
                </FadeInEl>
            </div>
        </section>
    );
}
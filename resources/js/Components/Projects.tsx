import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useInView, AnimatePresence } from 'framer-motion';

// --- Shared Animation Helper Components ---

function SlideWord({ children, delay = 0, className = '' }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <span
            ref={ref}
            className={`inline-block ${className}`}
            style={
                isInView
                    ? {
                          opacity: 0,
                          animation: `slideUp 0.6s cubic-bezier(0.22, 1, 0.36, 1) forwards`,
                          animationDelay: `${delay}s`,
                      }
                    : { opacity: 0 }
            }
        >
            {children}
        </span>
    );
}

function LetterByLetter({ text, baseDelay = 0, className = '', letterClassName = '' }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

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

function FadeInEl({ delay = 0, className = '', children, isVisible = true }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    if (!isVisible) return null;

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

// --- Card Hover Overlay Component ---
const ProjectCardHover = () => (
    <div className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center overflow-hidden">
        {/* Expanding Circle Background */}
        <div className="absolute top-1/2 left-1/2 aspect-square w-[250%] -translate-x-1/2 -translate-y-1/2 scale-0 rounded-full bg-[#0F1215]/80 backdrop-blur-sm transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-100"></div>

        {/* Arrow Sliding Up */}
        <div className="relative z-30 flex h-14 w-14 translate-y-12 items-center justify-center rounded-full bg-[#FFFDF1] text-[#0F1215] opacity-0 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-0 group-hover:opacity-100">
            <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <line x1="7" y1="17" x2="17" y2="7"></line>
                <polyline points="7 7 17 7 17 17"></polyline>
            </svg>
        </div>
    </div>
);

// --- Project Data ---
const projectsData = {
    chinaon: {
        title: 'Chinaon Resto',
        image: '/images/repo_thumbnail/chinaon-thumbnail.png',
        description:
            'A web app specialized for a chinese restaurant who wanted to upscale their business with online integrations system such as Online Order, Shipping, Tracking Order, Revenue Summary, and Online Booking for Table Reservations.',
        learnings:
            'In this project ive learn to make features that focused on admin and user side, implementing payment gateway, learning infinite scroll concept on many products data, implementation of delivery fee calculations from point of coordinate a to coordinate b. this is a grup project of me and my friends with me taking the role of a backend developer.',
        siteLink: 'https://chinaon.sakiwachii.my.id',
        repoLink: 'https://github.com/hafizh902/china-app',
    },
    xiirpl: {
        title: 'Xii Rpl Skarla',
        image: '/images/repo_thumbnail/xii-rpl-thumbnail.png',
        description:
            'This is my last annual yearly projects, with no reference and just let my mind and imagination run wild on prompting with claude, chat gpt, and gemini ai.',
        learnings:
            'This is entirely vibe coding just to see how far the limitation of my ability to translate my image of a project to actual prompt that can help me to reach better code generation. and maybe.. just as memoir to my last year in highschool.',
        siteLink: 'https://xii-rpl-skarla.lenallen.my.id',
        repoLink: 'https://github.com/revanzaRaihan/last-class-app',
    },
    project1: {
        title: 'Project 1',
        image: 'https://via.placeholder.com/800x800/2A2A2A/888888?text=Project+1+(1:1)',
        description: 'Detailed description for Project 1 will go here when available.',
        learnings: 'Key learnings and takeaways for Project 1.',
        siteLink: '#',
        repoLink: '#',
    },
    project2: {
        title: 'Project 2',
        image: 'https://via.placeholder.com/600x800/2A2A2A/888888?text=Project+2+(Portrait)',
        description: 'Detailed description for Project 2 will go here when available.',
        learnings: 'Key learnings and takeaways for Project 2.',
        siteLink: '#',
        repoLink: '#',
    },
};

// --- Main Projects Component ---

export default function ProjectsShowcase() {
    const sectionRef = useRef(null);
    const [selectedProject, setSelectedProject] = useState(null);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ['start end', 'end start'],
    });

    const camsParallax = useTransform(scrollYProgress, [0, 1], [-80, 80]);
    const flowerParallax = useTransform(scrollYProgress, [0, 1], [80, -80]);

    const handleProjectClick = (projectId) => {
        setSelectedProject(projectId);
    };

    const handleCloseDetail = () => {
        setSelectedProject(null);
    };

    return (
        <>
            <style>{`
                @keyframes slideUp {
                    from { opacity: 0; transform: translateY(40px); }
                    to   { opacity: 1; transform: translateY(0); }
                }
                @keyframes fadeInLetter {
                    from { opacity: 0; }
                    to   { opacity: 1; }
                }
            `}</style>

            <section
                ref={sectionRef}
                className="relative flex min-h-screen w-full flex-col items-center justify-center py-24 font-sans text-[#FFFDF1]"
                id="showcase"
            >
                <div className="relative z-10 mx-auto w-full max-w-[1400px] px-4 md:px-8">
                    {/* Background Decorations */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                        viewport={{ once: true, amount: 0.1 }}
                        className="pointer-events-none absolute -top-16 -right-16 z-30 h-48 w-48 md:-top-24 md:-right-10 md:h-64 md:w-64"
                    >
                        <motion.img
                            style={{ y: camsParallax }}
                            src="/images/elements/cams.png"
                            alt="Cam decoration"
                            className="h-full w-full object-contain opacity-90 drop-shadow-2xl"
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
                        viewport={{ once: true, amount: 0.1 }}
                        className="pointer-events-none absolute -bottom-30 -left-25 z-30 h-90 w-90 md:-bottom-70 md:-left-50 md:h-200 md:w-200"
                    >
                        <motion.img
                            style={{ y: flowerParallax }}
                            src="/images/elements/white_flower.png"
                            alt="Flower decoration"
                            className="h-full w-full object-contain opacity-90 drop-shadow-2xl"
                        />
                    </motion.div>

                    {/* Main Container */}
                    <div className="relative z-20 min-h-[500px] w-full overflow-hidden bg-[#141414] p-4 shadow-2xl md:p-6">
                        <AnimatePresence mode="wait">
                            {/* --- Grid View (Initial State) --- */}
                            {!selectedProject && (
                                <motion.div
                                    key="grid-view"
                                    initial={{ opacity: 0, x: 50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -50 }}
                                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], staggerChildren: 0.1 }}
                                    className="grid grid-cols-1 gap-4 md:grid-cols-4"
                                >
                                    {/* Card 1 */}
                                    <motion.div
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -50 }}
                                        onClick={() => handleProjectClick('project1')}
                                        className="group relative aspect-square cursor-pointer overflow-hidden bg-zinc-900 md:col-span-2"
                                    >
                                        <img
                                            src="/images/repo_thumbnail/coming-soon-1.png"
                                            alt="Project 1"
                                            className="h-full w-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                                        />
                                        <ProjectCardHover />
                                        <span className="absolute right-4 bottom-4 z-30 font-dastine text-xs tracking-wider text-gray-300 transition-colors duration-500 group-hover:text-[#FFFDF1]">
                                            01 / WEB APP
                                        </span>
                                    </motion.div>

                                    <div className="flex flex-col gap-4 md:col-span-1">
                                        {/* Card 2 */}
                                        <motion.div
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: -50 }}
                                            transition={{ delay: 0.1 }}
                                            onClick={() => handleProjectClick('project2')}
                                            className="group relative flex-1 cursor-pointer overflow-hidden bg-zinc-900"
                                        >
                                            <img
                                                src="/images/repo_thumbnail/coming-soon-2.png"
                                                alt="Project 2"
                                                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                                            />
                                            <ProjectCardHover />
                                            <span className="absolute right-3 bottom-3 z-30 font-dastine text-[10px] tracking-wider text-gray-300 transition-colors duration-500 group-hover:text-[#FFFDF1]">
                                                02 / DESIGN
                                            </span>
                                        </motion.div>

                                        {/* Card 4 (Chinaon) */}
                                        <motion.div
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: -50 }}
                                            transition={{ delay: 0.2 }}
                                            onClick={() => handleProjectClick('chinaon')}
                                            className="group relative aspect-[4/3] cursor-pointer overflow-hidden bg-zinc-900"
                                        >
                                            <img
                                                src="/images/repo_thumbnail/chinaon-thumbnail.png"
                                                alt="Chinaon Resto"
                                                className="h-full w-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                                            />
                                            <ProjectCardHover />
                                            <span className="absolute right-3 bottom-3 z-30 font-dastine text-[10px] tracking-wider text-gray-300 transition-colors duration-500 group-hover:text-[#FFFDF1]">
                                                Chinese Restaurant Management System
                                            </span>
                                        </motion.div>
                                    </div>

                                    <div className="flex flex-col gap-4 md:col-span-1">
                                        {/* Card 3 (XII RPL) */}
                                        <motion.div
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: -50 }}
                                            transition={{ delay: 0.3 }}
                                            onClick={() => handleProjectClick('xiirpl')}
                                            className="group relative aspect-[4/3] cursor-pointer overflow-hidden bg-zinc-900"
                                        >
                                            <img
                                                src="/images/repo_thumbnail/xii-rpl-thumbnail.png"
                                                alt="XII RPL Web Design"
                                                className="h-full w-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                                            />
                                            <ProjectCardHover />
                                            <span className="absolute right-3 bottom-3 z-30 font-dastine text-[10px] tracking-wider text-gray-300 transition-colors duration-500 group-hover:text-[#FFFDF1]">
                                                XII - Rpl Web Design
                                            </span>
                                        </motion.div>

                                        {/* Heading Text */}
                                        <motion.div
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            className="flex flex-1 flex-col items-center justify-center py-6 md:py-0"
                                        >
                                            <div className="flex flex-col font-amore text-[#FFFDF1]">
                                                <SlideWord delay={0.1}>
                                                    <div className="flex items-center gap-2">
                                                        <span className="text-4xl leading-none md:text-5xl lg:text-6xl">Some</span>
                                                        <div className="flex flex-col justify-center text-sm leading-[1.1] md:text-base lg:text-lg">
                                                            <span>of</span>
                                                            <span>my</span>
                                                        </div>
                                                    </div>
                                                </SlideWord>
                                                <SlideWord delay={0.3}>
                                                    <span className="mt-1 text-4xl leading-none md:text-5xl lg:text-6xl">Projects</span>
                                                </SlideWord>
                                            </div>
                                        </motion.div>
                                    </div>
                                </motion.div>
                            )}

                            {/* --- Detail View --- */}
                            {selectedProject && (
                                <motion.div
                                    key="detail-view"
                                    initial={{ opacity: 0, x: 50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -50 }}
                                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                                    className="absolute inset-0 z-30 flex h-full w-full flex-col gap-8 bg-[#141414] p-4 md:flex-row md:gap-12 md:p-8"
                                >
                                    {/* Left Side: Large Image Reveal */}
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: 0.2, duration: 0.6 }}
                                        className="h-[30%] w-full overflow-hidden rounded-sm bg-zinc-900 shadow-2xl md:h-full md:w-[45%]"
                                    >
                                        <img
                                            src={projectsData[selectedProject].image}
                                            alt={projectsData[selectedProject].title}
                                            className="h-full w-full object-cover"
                                        />
                                    </motion.div>

                                    {/* Right Side: Text & Actions Reveal */}
                                    <div className="flex h-[70%] w-full flex-col justify-between md:h-full md:w-[55%]">
                                        {/* Top: Back Button */}
                                        <motion.button
                                            initial={{ opacity: 0, y: -20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.3 }}
                                            onClick={handleCloseDetail}
                                            className="group flex w-fit items-center gap-2 font-dastine text-xs tracking-widest text-gray-400 transition-colors hover:text-[#FF9644] md:text-sm"
                                        >
                                            <svg
                                                width="20"
                                                height="20"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="transition-transform group-hover:-translate-x-1"
                                            >
                                                <line x1="19" y1="12" x2="5" y2="12"></line>
                                                <polyline points="12 19 5 12 12 5"></polyline>
                                            </svg>
                                            BACK TO SHOWCASE
                                        </motion.button>

                                        {/* Scrollable Middle Content */}
                                        <div className="no-scrollbar mt-6 flex-1 overflow-y-auto pr-2 md:mt-8 md:pr-4">
                                            <motion.h3
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: 0.4 }}
                                                className="mb-6 font-amore text-4xl leading-none text-[#FFFDF1] md:mb-10 md:text-5xl lg:text-7xl"
                                            >
                                                {projectsData[selectedProject].title}
                                            </motion.h3>

                                            <div className="flex flex-col gap-6 md:gap-8">
                                                <motion.div
                                                    initial={{ opacity: 0, y: 20 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    transition={{ delay: 0.5 }}
                                                >
                                                    <h4 className="mb-2 font-dastine text-[10px] tracking-widest text-[#FF9644] uppercase md:mb-3 md:text-xs">
                                                        Overview
                                                    </h4>
                                                    <p className="font-sans text-sm leading-relaxed text-gray-300 md:text-base">
                                                        {projectsData[selectedProject].description}
                                                    </p>
                                                </motion.div>
                                                <motion.div
                                                    initial={{ opacity: 0, y: 20 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    transition={{ delay: 0.6 }}
                                                >
                                                    <h4 className="mb-2 font-dastine text-[10px] tracking-widest text-[#FF9644] uppercase md:mb-3 md:text-xs">
                                                        Learnings & Role
                                                    </h4>
                                                    <p className="font-sans text-sm leading-relaxed text-gray-400 md:text-base">
                                                        {projectsData[selectedProject].learnings}
                                                    </p>
                                                </motion.div>
                                            </div>
                                        </div>

                                        {/* Bottom: Action Links */}
                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.7 }}
                                            className="mt-6 flex flex-wrap justify-end gap-6 border-t border-white/10 pt-4 md:pt-6"
                                        >
                                            <a
                                                href={projectsData[selectedProject].siteLink}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="group flex items-center gap-2 font-dastine text-[10px] tracking-widest text-gray-300 transition-colors hover:text-[#FF9644] md:text-xs"
                                            >
                                                VISIT SITE
                                                <svg
                                                    width="14"
                                                    height="14"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                                                >
                                                    <line x1="7" y1="17" x2="17" y2="7"></line>
                                                    <polyline points="7 7 17 7 17 17"></polyline>
                                                </svg>
                                            </a>
                                            <a
                                                href={projectsData[selectedProject].repoLink}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="group flex items-center gap-2 font-dastine text-[10px] tracking-widest text-gray-300 transition-colors hover:text-[#FF9644] md:text-xs"
                                            >
                                                VIEW REPOSITORY
                                                <svg
                                                    width="14"
                                                    height="14"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                                                >
                                                    <line x1="7" y1="17" x2="17" y2="7"></line>
                                                    <polyline points="7 7 17 7 17 17"></polyline>
                                                </svg>
                                            </a>
                                        </motion.div>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>

                {/* Sub Heading Area */}
                <div className="relative z-10 mx-auto mt-16 flex w-full max-w-5xl flex-col items-start justify-between gap-10 px-6 md:mt-24 md:flex-row md:items-center md:gap-4">
                    <div className="w-full text-left md:w-[40%]">
                        <p className="font-dastine text-xs leading-relaxed text-gray-300 md:text-lg">
                            <LetterByLetter text="to challenge myself with world study case" baseDelay={1.0} />
                            <br />
                            <LetterByLetter text="improving ways to solve problem" baseDelay={1.4} />
                            <br />
                            <LetterByLetter text="with web applications" baseDelay={1.8} />
                        </p>
                    </div>

                    <div className="flex w-full justify-center md:w-[20%]">
                        <FadeInEl delay={1.5} className="opacity-70">
                            <div className="flex h-10 w-16 items-center justify-center rounded-sm border border-white/20 bg-white/5">
                                <img src="/images/elements/emoticon.png" alt="Decorative emoticon" className="h-20 w-20 object-contain" />
                            </div>
                        </FadeInEl>
                    </div>

                    <div className="w-full text-right md:w-[40%]">
                        <p className="font-dastine text-xs leading-relaxed text-gray-300 md:text-lg">
                            <LetterByLetter text="or to just improving in" baseDelay={1.2} />
                            <br />
                            <LetterByLetter text="web designs within this ai world" baseDelay={1.6} />
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}

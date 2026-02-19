import React from 'react';

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

// --- Main Projects Component ---

export default function ProjectsShowcase() {
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

            <section className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-[#0F1215] py-24 font-sans text-[#FFFDF1]" id='showcase'>
                {/* ── Main Showcase Container ── */}
                <div className="relative z-10 mx-auto w-full max-w-[1400px] px-4 md:px-8">
                    {/* Image Decorations with depth/blur overlapping the container edges */}
                    <div className="pointer-events-none absolute -top-16 -right-16 z-30 h-48 w-48 md:-top-24 md:-right-10 md:h-64 md:w-64">
                        <img
                            src="/images/elements/cams.png"
                            alt="Cam decoration"
                            className="h-full w-full object-contain opacity-90 drop-shadow-2xl"
                        />
                    </div>

                    <div className="pointer-events-none absolute -bottom-16 -left-16 z-30 h-90 w-90 md:-bottom-70 md:-left-50 md:h-200 md:w-200">
                        <img
                            src="/images/elements/white_flower.png"
                            alt="Flower decoration"
                            className="h-full w-full object-contain opacity-90 drop-shadow-2xl"
                        />
                    </div>

                    {/* Dark Fluid Container for Projects */}
                    <FadeInEl delay={0.2} className="relative z-20 w-full bg-[#141414] p-4 shadow-2xl md:p-6">
                        <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
                            {/* Column 1 & 2: Main Featured Project (1:1 Aspect Ratio) */}
                            <div className="group relative aspect-square overflow-hidden bg-zinc-900 md:col-span-2">
                                <img
                                    src="https://via.placeholder.com/800x800/2A2A2A/888888?text=Project+1+(1:1)"
                                    alt="Project 1"
                                    className="h-full w-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                                />
                                <span className="absolute right-4 bottom-4 font-dastine text-xs tracking-wider text-gray-300">01 / WEB APP</span>
                            </div>

                            {/* Column 3: Portrait Project & 4:3 Project */}
                            <div className="flex flex-col gap-4 md:col-span-1">
                                <div className="group relative flex-1 overflow-hidden bg-zinc-900">
                                    <img
                                        src="https://via.placeholder.com/600x800/2A2A2A/888888?text=Project+2+(Portrait)"
                                        alt="Project 2"
                                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                                    />
                                    <span className="absolute right-3 bottom-3 font-dastine text-[10px] tracking-wider text-gray-300">
                                        02 / DESIGN
                                    </span>
                                </div>
                                <div className="group relative aspect-[4/3] overflow-hidden bg-zinc-900">
                                    <img
                                        src="https://via.placeholder.com/600x450/2A2A2A/888888?text=Project+4+(4:3)"
                                        alt="Project 4"
                                        className="h-full w-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                                    />
                                    <span className="absolute right-3 bottom-3 font-dastine text-[10px] tracking-wider text-gray-300">
                                        04 / MOBILE
                                    </span>
                                </div>
                            </div>

                            {/* Column 4: 4:3 Project & Heading Section */}
                            <div className="flex flex-col gap-4 md:col-span-1">
                                <div className="group relative aspect-[4/3] overflow-hidden bg-zinc-900">
                                    <img
                                        src="https://via.placeholder.com/600x450/2A2A2A/888888?text=Project+3+(4:3)"
                                        alt="Project 3"
                                        className="h-full w-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                                    />
                                    <span className="absolute right-3 bottom-3 font-dastine text-[10px] tracking-wider text-gray-300">
                                        03 / UI/UX
                                    </span>
                                </div>
                                <div className="flex flex-1 flex-col items-center justify-center py-6 md:py-0">
                                    <div className="flex flex-col font-amore text-[#FFFDF1]">
                                        <SlideWord delay={0.4}>
                                            <div className="flex items-center gap-2">
                                                <span className="text-4xl leading-none md:text-5xl lg:text-6xl">Some</span>
                                                <div className="flex flex-col justify-center text-sm leading-[1.1] md:text-base lg:text-lg">
                                                    <span>of</span>
                                                    <span>my</span>
                                                </div>
                                            </div>
                                        </SlideWord>
                                        <SlideWord delay={0.6}>
                                            <span className="mt-1 text-4xl leading-none md:text-5xl lg:text-6xl">Projects</span>
                                        </SlideWord>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </FadeInEl>
                </div>

                {/* ── Sub Heading Section ── */}
                <div className="relative z-10 mx-auto mt-16 flex w-full max-w-5xl flex-col items-start justify-between gap-10 px-6 md:mt-24 md:flex-row md:items-center md:gap-4">
                    {/* Left Sub-text */}
                    <div className="w-full text-left md:w-[40%]">
                        <p className="font-dastine text-xs leading-relaxed text-gray-300 md:text-lg">
                            <LetterByLetter text="to challenge myself with world study case" baseDelay={1.0} />
                            <br />
                            <LetterByLetter text="improving ways to solve problem" baseDelay={1.4} />
                            <br />
                            <LetterByLetter text="with web applications" baseDelay={1.8} />
                        </p>
                    </div>

                    {/* Center Image Deco */}
                    <div className="flex w-full justify-center md:w-[20%]">
                        <FadeInEl delay={1.5} className="opacity-70">
                            <div className="flex h-10 w-16 items-center justify-center rounded-sm border border-white/20 bg-white/5">
                                <span className="font-dastine text-[10px] tracking-widest text-gray-300">DECO</span>
                            </div>
                        </FadeInEl>
                    </div>

                    {/* Right Sub-text */}
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

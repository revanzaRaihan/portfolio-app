import React from 'react';

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

export default function About() {
    return (
        <section className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-[#0F1215] py-24 font-sans text-[#FFFDF1]" id='about'>
            <style>{`
                @keyframes fadeInLetter {
                    from { opacity: 0; }
                    to   { opacity: 1; }
                }
            `}</style>

            {/* ── Main Container ── */}
            <div className="relative z-10 mx-auto w-full max-w-[1000px] px-4 md:px-8">
                
                {/* Image Decorations with blur */}
                <div className="pointer-events-none absolute -top-12 -right-4 z-30 h-24 w-24 md:-top-35 md:-right-30 md:h-90 md:w-90">
                    <img 
                        src="/images/elements/swan.png" 
                        alt="Top right decoration" 
                        className="h-full w-full object-contain opacity-80 drop-shadow-2xl"
                    />
                </div>
                
                <div className="pointer-events-none absolute -bottom-12 -left-4 z-30 h-24 w-24 md:-bottom-45 md:-left-30 md:h-100 md:w-100">
                    <img 
                        src="/images/elements/console.png" 
                        alt="Bottom left decoration" 
                        className="h-full w-full object-contain opacity-90 drop-shadow-2xl"
                    />
                </div>

                {/* 16:9 Dark Container */}
                <FadeInEl delay={0.2} className="relative z-20 aspect-video w-full overflow-hidden bg-[#141414] shadow-2xl border border-white/5">
                    
                    {/* Top Left Text */}
                    <div className="absolute top-4 left-4 md:top-8 md:left-8 z-20">
                        <p className="font-dastine text-[10px] leading-relaxed text-[#FFFDF1] md:text-lg">
                            i like typhography<br />
                            wall of text, i love it so much.
                        </p>
                    </div>

                    {/* Bottom Right Text */}
                    <div className="absolute bottom-4 right-4 z-20 text-right md:bottom-8 md:right-8">
                        <p className="font-dastine text-[10px] leading-relaxed text-[#FFFDF1] md:text-lg">
                            you scrolled this far!<br />
                            its pretty short actually
                        </p>
                    </div>

                    {/* Center Content: Heading & Profile Pic */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                        
                        {/* Profile Picture (Top Layer) */}
                        <div className="absolute z-10 h-32 w-32 overflow-hidden rounded-full border-2 border-[#FFFDF1] bg-zinc-800 shadow-2xl md:h-56 md:w-56 md:border-4">
                            <img 
                                src="https://via.placeholder.com/400x400/2A2A2A/888888?text=Profile" 
                                alt="Revanza" 
                                className="h-full w-full object-cover"
                            />
                        </div>

                        {/* Heading Text (Bottom Layer) */}
                        <div className="relative z-0 flex w-full flex-col items-center">
                            <h2 className="flex w-full justify-center font-amore text-5xl leading-none tracking-wider md:text-8xl lg:text-[9rem]">
                                <span className="text-[#FF9644]">Intro</span>
                                <span className="text-[#FFFDF1]">ducting!</span>
                            </h2>
                            {/* Revanza sub-heading */}
                            <div className="mt-2 w-full max-w-2xl pr-8 absolute -right-90 -bottom-3 md:pr-16 lg:pr-24">
                                <span className="font-motterdam text-2xl lowercase tracking-widest text-[#FFFDF1] md:text-4xl">
                                    revanza
                                </span>
                            </div>
                        </div>

                    </div>
                </FadeInEl>
            </div>

            {/* ── Quote Section ── */}
            <FadeInEl delay={0.6} className="relative z-10 mx-auto mt-20 flex w-full max-w-3xl flex-col items-center px-6 text-center">
                <p className="font-dastine text-xs leading-relaxed text-gray-300 md:text-lg italic">
                    “ searching definitive answer to something that sometimes very obvious<br className="hidden md:block" />
                    to the eyes. the world is huge and may offer everything that you need for<br className="hidden md:block" />
                    so i may not rest and find myself to seek everything for my own. “
                </p>
                
                {/* Star Decoration Below Quote */}
                <div className="mt-12 flex justify-center opacity-80">
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 0L22 18L40 20L22 22L20 40L18 22L0 20L18 18L20 0Z" fill="#FFFDF1"/>
                    </svg>
                </div>
            </FadeInEl>

        </section>
    );
}
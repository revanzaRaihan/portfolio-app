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

// --- Icons (Added prop for dynamic sizing) ---
const IconInstagram = ({ size = 20 }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
    </svg>
);

const IconPhone = ({ size = 20 }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
    </svg>
);

const IconYoutube = ({ size = 20 }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.42a2.78 2.78 0 0 0-1.94 2C1 8.16 1 12 1 12s0 3.84.46 5.58a2.78 2.78 0 0 0 1.94 2C5.12 20 12 20 12 20s6.88 0 8.6-.42a2.78 2.78 0 0 0 1.94-2C23 15.84 23 12 23 12s0-3.84-.46-5.58z"></path>
        <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"></polygon>
    </svg>
);

const IconGithub = ({ size = 20 }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
    </svg>
);

const IconMail = ({ size = 20 }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
        <polyline points="22,6 12,13 2,6"></polyline>
    </svg>
);

const IconArrowRight = ({ className = '' }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="5" y1="12" x2="19" y2="12"></line>
        <polyline points="12 5 19 12 12 19"></polyline>
    </svg>
);

// --- Main Component ---
export default function Contacts() {
    return (
        <section className="relative flex w-full flex-col items-center justify-between pt-24 md:pt-32 text-[#FFFDF1]" id='contacts'>
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

            {/* ── Main Contacts Content ── */}
            <div className="relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center gap-16 md:gap-24 px-6">
                
                {/* Heading Area */}
                <div className="relative flex justify-center w-full max-w-fit">
                    <SlideWord delay={0.1}>
                        <h2 className="font-allover text-[15vw] sm:text-[12vw] md:text-8xl lg:text-9xl tracking-tight uppercase leading-none">
                            CONTACTS
                        </h2>
                    </SlideWord>
                    
                    <FadeInEl delay={0.6} className="absolute -bottom-10 right-1 md:-bottom-6 md:-right-10 -rotate-10 z-20">
                        <span className="font-motterdam text-[9vw] sm:text-[7vw] md:text-5xl lg:text-6xl text-[#FF9644] lowercase">
                            business
                        </span>
                    </FadeInEl>
                </div>

                {/* Contacts Details Area */}
                <FadeInEl delay={0.8} className="w-full max-w-2xl">
                    
                    {/* Mobile View: Large Icon Row */}
                    <div className="flex md:hidden w-full justify-center gap-6 sm:gap-8 mt-4">
                        <a href="https://instagram.com/rvn9lo" target="_blank" rel="noreferrer" className="text-[#FFFDF1] hover:text-[#FF9644] transition-colors p-2">
                            <IconInstagram size={32} />
                        </a>
                        <a href="tel:+6282154311693" className="text-[#FFFDF1] hover:text-[#FF9644] transition-colors p-2">
                            <IconPhone size={32} />
                        </a>
                        <a href="https://www.youtube.com/@revanzaRaihan" target="_blank" rel="noreferrer" className="text-[#FFFDF1] hover:text-[#FF9644] transition-colors p-2">
                            <IconYoutube size={32} />
                        </a>
                        <a href="https://github.com/revanzaRaihan" target="_blank" rel="noreferrer" className="text-[#FFFDF1] hover:text-[#FF9644] transition-colors p-2">
                            <IconGithub size={32} />
                        </a>
                        <a href="mailto:revanzaraihanrizqullah@gmail.com" className="text-[#FFFDF1] hover:text-[#FF9644] transition-colors p-2">
                            <IconMail size={32} />
                        </a>
                    </div>

                    {/* Desktop View: Grid with Text and Arrows */}
                    <div className="hidden md:grid grid-cols-2 gap-y-10 w-full px-0">
                        {/* Instagram */}
                        <a href="https://instagram.com/rvn9lo" target="_blank" rel="noreferrer" className="group flex cursor-pointer items-center gap-4 transition-colors hover:text-[#FF9644] justify-start">
                            <IconInstagram />
                            <span className="font-dastine text-base tracking-wide">@rvn9lo</span>
                            <IconArrowRight className="transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:-rotate-45" />
                        </a>

                        {/* Phone */}
                        <a href="tel:+6282154311693" className="group flex cursor-pointer items-center gap-4 transition-colors hover:text-[#FF9644] justify-end">
                            <IconPhone />
                            <span className="font-dastine text-base tracking-wide">+62 821 5431 1693</span>
                            <IconArrowRight className="transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:-rotate-45" />
                        </a>

                        {/* YouTube */}
                        <a href="https://www.youtube.com/@revanzaRaihan" target="_blank" rel="noreferrer" className="group flex cursor-pointer items-center gap-4 transition-colors hover:text-[#FF9644] justify-start">
                            <IconYoutube />
                            <span className="font-dastine text-base tracking-wide">@revanzaRaihan</span>
                            <IconArrowRight className="transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:-rotate-45" />
                        </a>

                        {/* GitHub */}
                        <a href="https://github.com/revanzaRaihan" target="_blank" rel="noreferrer" className="group flex cursor-pointer items-center gap-4 transition-colors hover:text-[#FF9644] justify-end">
                            <IconGithub />
                            <span className="font-dastine text-base tracking-wide">revanzaRaihan</span>
                            <IconArrowRight className="transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:-rotate-45" />
                        </a>

                        {/* Email */}
                        <a href="mailto:revanzaraihanrizqullah@gmail.com" className="group flex cursor-pointer items-center gap-4 transition-colors hover:text-[#FF9644] col-span-2 justify-center mt-0">
                            <IconMail />
                            <span className="font-dastine text-base tracking-wide">revanzaraihanrizqullah@gmail.com</span>
                            <IconArrowRight className="transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:-rotate-45" />
                        </a>
                    </div>
                </FadeInEl>
            </div>

            {/* ── Footer Bottom Text (END OF STORY) ── */}
            <div className="relative mt-24 md:mt-32 w-full -left-20 flex items-end justify-center select-none pointer-events-none">
                <SlideWord delay={1.2} className="w-full text-center translate-y-[60%] md:translate-y-[60%]">
                    <h1 className="font-allover text-[18vw] leading-[0.8] uppercase text-[#FFFDF1] whitespace-nowrap opacity-90">
                        ENDOFSTORY
                    </h1>
                </SlideWord>
            </div>

        </section>
    );
}
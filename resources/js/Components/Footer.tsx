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

// --- Icons ---
const IconInstagram = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
    </svg>
);

const IconPhone = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
    </svg>
);

const IconYoutube = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.42a2.78 2.78 0 0 0-1.94 2C1 8.16 1 12 1 12s0 3.84.46 5.58a2.78 2.78 0 0 0 1.94 2C5.12 20 12 20 12 20s6.88 0 8.6-.42a2.78 2.78 0 0 0 1.94-2C23 15.84 23 12 23 12s0-3.84-.46-5.58z"></path>
        <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"></polygon>
    </svg>
);

const IconGithub = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
    </svg>
);

const IconMail = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
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
        <section className="relative flex w-full flex-col items-center justify-between overflow-hidden bg-[#0F1215] pt-32 text-[#FFFDF1]" id='contacts'>
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

            {/* ── Background decorations ── */}
            <div className="pointer-events-none absolute bottom-[10%] left-[-8%] font-serif text-[25rem] leading-none text-white/5 blur-[6px] select-none md:text-[35rem]">R</div>
            <div className="pointer-events-none absolute bottom-0 left-[-10%] h-96 w-96 rounded-full bg-[#FF9644] opacity-20 blur-[150px]" />
            <div className="pointer-events-none absolute bottom-1/4 right-[-10%] h-96 w-96 rounded-full bg-[#FF9644] opacity-20 blur-[150px]" />

            {/* ── Main Contacts Content ── */}
            <div className="relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center gap-16 px-6 md:gap-24">
                
                {/* Heading Area */}
                <div className="relative flex justify-center">
                    <SlideWord delay={0.1}>
                        <h2 className="font-allover text-6xl tracking-tight uppercase md:text-8xl lg:text-9xl">
                            CONTACTS
                        </h2>
                    </SlideWord>
                    
                    <FadeInEl delay={0.6} className="absolute -bottom-6 -right-6 -rotate-10 z-20 md:-bottom-6 md:-right-10">
                        <span className="font-motterdam text-4xl text-[#FF9644] lowercase md:text-6xl">
                            business
                        </span>
                    </FadeInEl>
                </div>

                {/* Contacts Details Area */}
                <FadeInEl delay={0.8} className="w-full max-w-2xl">
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-y-10 w-full">
                        
                        {/* Instagram */}
                        <a href="https://instagram.com/rvn9lo" target="_blank" rel="noreferrer" className="group flex cursor-pointer items-center gap-4 transition-colors hover:text-[#FF9644] md:justify-start">
                            <IconInstagram />
                            <span className="font-dastine text-sm tracking-wide md:text-base">@rvn9lo</span>
                            <IconArrowRight className="transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:-rotate-45" />
                        </a>

                        {/* Phone */}
                        <a href="tel:+6282154311693" className="group flex cursor-pointer items-center gap-4 transition-colors hover:text-[#FF9644] md:justify-end">
                            <IconPhone />
                            <span className="font-dastine text-sm tracking-wide md:text-base">+62 821 5431 1693</span>
                            <IconArrowRight className="transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:-rotate-45" />
                        </a>

                        {/* YouTube */}
                        <a href="https://www.youtube.com/@revanzaRaihan" target="_blank" rel="noreferrer" className="group flex cursor-pointer items-center gap-4 transition-colors hover:text-[#FF9644] md:justify-start">
                            <IconYoutube />
                            <span className="font-dastine text-sm tracking-wide md:text-base">@revanzaRaihan</span>
                            <IconArrowRight className="transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:-rotate-45" />
                        </a>

                        {/* GitHub */}
                        <a href="https://github.com/revanzaRaihan" target="_blank" rel="noreferrer" className="group flex cursor-pointer items-center gap-4 transition-colors hover:text-[#FF9644] md:justify-end">
                            <IconGithub />
                            <span className="font-dastine text-sm tracking-wide md:text-base">revanzaRaihan</span>
                            <IconArrowRight className="transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:-rotate-45" />
                        </a>

                        {/* Email */}
                        <a href="mailto:revanzaraihanrizqullah@gmail.com" className="group flex cursor-pointer items-center gap-4 transition-colors hover:text-[#FF9644] md:col-span-2 md:justify-start">
                            <IconMail />
                            <span className="font-dastine text-sm tracking-wide md:text-base">revanzaraihanrizqullah@gmail.com</span>
                            <IconArrowRight className="transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:-rotate-45" />
                        </a>
                        
                    </div>
                </FadeInEl>
            </div>

            {/* ── Footer Bottom Text (END OF STORY) ── */}
            <div className="relative mt-20 -bottom-30 -left-15 flex h-[15vw] min-h-[100px] w-full items-end justify-center opacity-90 md:mt-32 md:min-h-[100px]">
                <SlideWord delay={1.2} className="absolute -bottom-[20%] w-full text-center">
                    <h1 className="font-allover text-[16vw] leading-none uppercase text-[#FFFDF1] whitespace-nowrap">
                        ENDOFSTORY
                    </h1>
                </SlideWord>
            </div>

        </section>
    );
}
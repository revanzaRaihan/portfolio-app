import React from 'react';

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
    return (
        <>
            {/* ── Keyframes ── */}
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

            <section className="relative flex min-h-[90vh] w-full flex-col items-center justify-center overflow-hidden bg-[#0F1215] py-32 font-sans text-[#FFFDF1] md:min-h-[800px]" id='home'>

                {/* ── Background decorations ── */}
                <div className="pointer-events-none absolute -top-40 -left-40 h-96 w-96 rounded-full bg-[#FF9644] opacity-20 blur-[150px]" />
                <div className="pointer-events-none absolute -right-40 -bottom-40 h-96 w-96 rounded-full bg-[#FF9644] opacity-20 blur-[150px]" />
                <div
                    className="pointer-events-none absolute top-[-5%] right-[-8%] -scale-x-100 font-serif text-[30rem] leading-none text-white/5 blur-[8px] select-none"
                    aria-hidden="true"
                >R</div>
                <div
                    className="pointer-events-none absolute bottom-[-5%] left-[-4%] font-serif text-[20rem] leading-none text-white/10 blur-[5px] select-none"
                    aria-hidden="true"
                >R</div>

                {/* ── Main content ── */}
                <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center gap-24 px-6 md:gap-40">

                    {/* Heading Section */}
                    <div className="relative flex w-full max-w-5xl flex-col items-center">

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
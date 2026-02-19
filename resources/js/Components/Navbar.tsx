import React, { useState, useEffect } from 'react';

const NavItem = ({ href, label, isActive }) => {
    const handleClick = (e) => {
        e.preventDefault();
        const targetId = href.replace('#', '');
        const element = document.getElementById(targetId);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }
    };

    return (
        <a
            href={href}
            onClick={handleClick}
            className={`group relative flex h-6 items-center justify-center overflow-hidden font-amore text-[10px] lowercase tracking-[0.2em] transition-colors hover:text-[#FF9644] md:text-xs ${
                isActive ? 'text-[#FF9644]' : 'text-[#FFFDF1]'
            }`}
        >
            {/* Initial Text */}
            <span 
                className={`transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                    isActive ? '-translate-y-[150%]' : 'group-hover:-translate-y-[150%]'
                }`}
            >
                {label}
            </span>

            {/* Arrow Icon sliding up from below */}
            <span 
                className={`absolute flex h-full w-full items-center justify-center transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                    isActive ? 'translate-y-0' : 'translate-y-[150%] group-hover:translate-y-0'
                }`}
            >
                <svg 
                    width="12" 
                    height="12" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                >
                    <line x1="12" y1="5" x2="12" y2="19"></line>
                    <polyline points="19 12 12 19 5 12"></polyline>
                </svg>
            </span>
        </a>
    );
};

export default function Navbar() {
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const sections = document.querySelectorAll('section[id]');
        
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { rootMargin: '-40% 0px -60% 0px' }
        );

        sections.forEach((section) => observer.observe(section));

        return () => {
            sections.forEach((section) => observer.unobserve(section));
        };
    }, []);

    return (
        <nav className="fixed top-0 left-0 z-50 w-full py-8 mix-blend-difference md:py-10">
            <div className="mx-auto flex w-full max-w-5xl justify-center gap-16 md:gap-32">
                <NavItem href="#home" label="home" isActive={activeSection === 'home'} />
                <NavItem href="#showcase" label="showcase" isActive={activeSection === 'showcase'} />
                <NavItem href="#about" label="about" isActive={activeSection === 'about'} />
                <NavItem href="#contacts" label="contacts" isActive={activeSection === 'contacts'} />
            </div>
        </nav>
    );
}
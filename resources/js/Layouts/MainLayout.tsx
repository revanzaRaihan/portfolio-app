// MainLayout.tsx
import { ReactNode } from 'react';
import Navbar from '@/Components/Navbar';
import Footer from '@/Components/Footer';

export default function MainLayout({ children }: { children: ReactNode }) {
    return (
        <div className="relative flex min-h-screen flex-col overflow-hidden bg-[#0F1215] text-[#FFFDF1]">
            
            {/* ── Global Background Decorations ── */}
            <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
                <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-[#FF9644] opacity-20 blur-[150px]" />
                <div className="absolute -right-40 -bottom-40 h-96 w-96 rounded-full bg-[#FF9644] opacity-20 blur-[150px]" />
                <div
                    className="absolute top-[-2%] right-[-8%] -scale-x-100 font-serif text-[30rem] leading-none text-white/5 blur-[8px] select-none"
                    aria-hidden="true"
                >R</div>
                <div
                    className="absolute bottom-[-2%] left-[-4%] font-serif text-[20rem] leading-none text-white/10 blur-[5px] select-none"
                    aria-hidden="true"
                >R</div>
            </div>

            <Navbar />
            
            <main className="relative z-10 flex-grow">
                {children}
            </main>
            
            <Footer />
        </div>
    );
}
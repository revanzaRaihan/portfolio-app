// MainLayout.tsx
import { ReactNode } from 'react';
import Navbar from '@/Components/Navbar';
import Footer from '@/Components/Footer';

export default function MainLayout({ children }: { children: ReactNode }) {
    return (
        <div className="relative flex min-h-screen flex-col overflow-hidden bg-[#0F1215] text-[#FFFDF1]">
            
            {/* ── Global Background Decorations ── */}
            <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
                
                {/* --- 4 Light Glows --- */}
                {/* 1. Top Left */}
                <div className="absolute top-[-2%] left-[-10%] h-[25rem] w-[25rem] md:h-[30rem] md:w-[30rem] rounded-full bg-[#FF9644] opacity-20 blur-[100px] md:blur-[150px]" />
                
                {/* 2. Middle Right */}
                <div className="absolute top-[30%] right-[-10%] h-[30rem] w-[30rem] md:h-[40rem] md:w-[40rem] rounded-full bg-[#FF9644] opacity-10 md:opacity-[0.15] blur-[120px] md:blur-[150px]" />
                
                {/* 3. Middle Left */}
                <div className="absolute top-[65%] left-[-15%] h-[25rem] w-[25rem] md:h-[35rem] md:w-[35rem] rounded-full bg-[#FF9644] opacity-10 md:opacity-[0.15] blur-[120px] md:blur-[150px]" />
                
               <div className="absolute bottom-0 right-[-5%] h-[25rem] w-[25rem] md:h-[30rem] md:w-[30rem] rounded-full bg-[#FF9644] opacity-20 blur-[100px] md:blur-[150px]" />


                {/* --- 4 Big 'R' Letters --- */}
                {/* 1. Top Right (Reversed) */}
                <div
                    className="absolute top-[2%] right-[-15%] md:right-[-8%] -scale-x-100 font-serif text-[20rem] md:text-[30rem] leading-none text-white/5 blur-[6px] md:blur-[8px] select-none"
                    aria-hidden="true"
                >R</div>
                
                {/* 2. Middle Left */}
                <div
                    className="absolute top-[28%] left-[-20%] md:left-[-8%] font-serif text-[25rem] md:text-[35rem] leading-none text-white/5 blur-[5px] md:blur-[6px] select-none"
                    aria-hidden="true"
                >R</div>
                
                {/* 3. Middle Right (Reversed) */}
                <div
                    className="absolute top-[62%] right-[-15%] md:right-[-5%] -scale-x-100 font-serif text-[22rem] md:text-[28rem] leading-none text-white/5 blur-[6px] md:blur-[8px] select-none"
                    aria-hidden="true"
                >R</div>
                
                {/* 4. Bottom Left */}
                <div
                    className="absolute bottom-[1%] rotate-12 left-[-10%] md:left-[-4%] font-serif text-[18rem] md:text-[25rem] leading-none text-white/10 blur-[4px] md:blur-[5px] select-none"
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
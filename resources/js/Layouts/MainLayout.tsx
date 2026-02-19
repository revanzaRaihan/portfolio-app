import { ReactNode } from 'react';
import Navbar from '@/Components/Navbar';
import Footer from '@/Components/Footer';

export default function MainLayout({ children }: { children: ReactNode }) {
    return (
        <div>
            <Navbar />
            <main className="min-h-screen bg-[var(--color-primary)] text-[var(--color-secondary)]">{children}</main>
            <Footer />
        </div>
    );
}

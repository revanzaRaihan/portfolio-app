import About from '@/Components/About';
import HeroSection from '@/Components/Hero';
import Projects from '@/Components/Projects';
import MainLayout from '@/Layouts/MainLayout';
import { Helmet } from 'react-helmet';

export default function Home() {
    return (
        <MainLayout>
            <>
                <Helmet>
                    <title>Jasa Pembuatan Website Profesional</title>
                    <meta name="description" content="Jasa pembuatan website, web app, dan sistem custom di Indonesia." />
                </Helmet>
                <HeroSection />
                <Projects />
                <About />
            </>
        </MainLayout>
    );
}

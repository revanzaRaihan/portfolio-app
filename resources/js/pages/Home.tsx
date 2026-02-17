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

                <h1>Jasa Pembuatan Website</h1>
            </>
        </MainLayout>
    );
}

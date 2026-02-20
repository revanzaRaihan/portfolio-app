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
          <title>Revanza Raihan — Portfolio & Web Development Showcase</title>

          <meta
            name="description"
            content="Portfolio Revanza Raihan menampilkan showcase project web development, inspirasi desain website, dan eksplorasi pembuatan web modern."
          />

          <link rel="canonical" href="https://lenallen.my.id/" />

          {/* Open Graph */}
          <meta property="og:title" content="Revanza Raihan Portfolio" />
          <meta
            property="og:description"
            content="Showcase project web development, inspirasi desain website, dan eksplorasi pembuatan web modern."
          />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://lenallen.my.id/" />
          <meta property="og:image" content="https://lenallen.my.id/preview.jpg" />

          {/* Structured Data: Person */}
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Revanza Raihan",
              url: "https://lenallen.my.id",
              jobTitle: "Web Developer",
              sameAs: [
                "https://github.com/username",
                "https://linkedin.com/in/username"
              ]
            })}
          </script>
        </Helmet>

        <HeroSection />
        <Projects />
        <About />
      </>
    </MainLayout>
  );
}

// src/App.tsx

import { Routes, Route } from 'react-router-dom';

// Componentes de la página principal
import HeroSection from './assets/components/HeroSection';
import TechMarquee from './assets/components/TechMarquee';
import WhyUs from './assets/components/WhyUs';
import ServicesSection from './assets/components/ServicesSection';
import ContactSection from './assets/components/ContactSection';
import Footer from './assets/components/Footer';
import TestimonialsSection from "./assets/components/TestimonialsSection";
import AboutSection from "./assets/components/AboutSection";

// Páginas adicionales
import ServiciosPage from './pages/ServiciosPage';

// Layout opcional si quieres navbar/global things
function HomePage() {
  return (
    <>
      <HeroSection />
      <TechMarquee />
      <main>
        <WhyUs />
        <AboutSection /> 
        <ServicesSection />
        <TestimonialsSection /> 
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}

function App() {
  return (
    <Routes>
      {/* Página principal */}
      <Route path="/" element={<HomePage />} />

      {/* Página de servicios extendidos */}
      <Route path="/servicios" element={<ServiciosPage />} />
    </Routes>
  );
}

export default App;

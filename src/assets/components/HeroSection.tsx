'use client';

import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function HeroSection() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-white text-[#1A1A1A] dark:bg-[#0B0E11] dark:text-white"
    >
      {/* NAVBAR */}
      <header className="fixed inset-x-0 top-0 z-50">
        <nav
          className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 backdrop-blur transition ${
            scrolled
              ? 'bg-white/70 shadow-sm dark:bg-[#0B0E11]/60'
              : 'mt-3 rounded-2xl bg-white/40 ring-1 ring-black/5 dark:bg-[#0B0E11]/40 dark:ring-white/10'
          }`}
        >
          <div className="flex items-center justify-between py-3">
            
            {/* LOGO */}
            <a href="#inicio" className="flex items-center gap-3">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-[#007B9E] to-[#00C9D1] ring-1 ring-black/5 dark:ring-white/10">
                <svg viewBox="0 0 24 24" className="h-5 w-5 text-white" fill="currentColor">
                  <path d="M4 12a8 8 0 1 1 16 0 8 8 0 0 1-16 0Z" />
                </svg>
              </span>
              <span className="text-base font-semibold tracking-tight">Infraver Cloud</span>
            </a>

            {/* NAV LINKS */}
            <div className="hidden lg:flex items-center gap-8 text-sm font-medium">
              <a href="/servicios" className="hover:text-[#007B9E] dark:hover:text-[#00C9D1] transition">
                Servicios
              </a>
              <a href="#planes" className="hover:text-[#007B9E] dark:hover:text-[#00C9D1] transition">
                Planes
              </a>
              <a href="#nosotros" className="hover:text-[#007B9E] dark:hover:text-[#00C9D1] transition">
                Nosotros
              </a>
              <a href="#contacto" className="hover:text-[#007B9E] dark:hover:text-[#00C9D1] transition">
                Contacto
              </a>

              {/* CTA DEL NAV */}
              <a
                href="#contacto"
                className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-[#007B9E] to-[#00C9D1] px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-[#007B9E]/20 transition hover:opacity-95"
              >
                Cotización gratuita
              </a>
            </div>
          </div>
        </nav>
      </header>

      {/* HERO CONTENT */}
      <div className="mx-auto max-w-7xl px-6 pt-36 pb-24 sm:pt-44 sm:pb-32 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          
          {/* Text Content */}
          <div className="lg:col-span-7">
            <p className="inline-flex items-center gap-2 rounded-full border border-[#007B9E]/20 px-3 py-1 text-xs font-medium text-[#007B9E] dark:border-[#00C9D1]/30 dark:text-[#00C9D1]">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#00C9D1]" />
              Servicios Cloud para PYMEs · Administración y Optimización
            </p>

            <h1 className="mt-4 text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
              <span className="bg-gradient-to-r from-[#007B9E] to-[#00C9D1] bg-clip-text text-transparent">
                La nube que tu empresa merece
              </span>
              <br />
              sin complejidad ni costos ocultos.
            </h1>

            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-[#3A3A3A] dark:text-white/70">
              En Infraver administramos, migramos y optimizamos tu infraestructura en la nube con
              precios claros, soporte local y resultados medibles. Ideal para empresas que buscan
              rendimiento, seguridad y control sin depender de grandes corporativos.
            </p>

            <ul className="mt-6 space-y-3 text-sm text-[#2A2A2A] dark:text-white/80">
              <li className="flex items-start gap-3">
                <CheckIcon />
                <span>
                  <strong>+30%</strong> de ahorro promedio frente a proveedores tradicionales.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckIcon />
                <span>Integración con AWS, Azure y Google Cloud desde una sola consola.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckIcon />
                <span>Soporte técnico en español con ingenieros certificados.</span>
              </li>
            </ul>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#servicios"
                className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-[#007B9E] to-[#00C9D1] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-[#007B9E]/20 hover:opacity-95"
              >
                Ver planes y precios
              </a>
              <a
                href="#comparativa"
                className="inline-flex items-center justify-center rounded-xl border border-[#007B9E]/30 px-5 py-3 text-sm font-semibold text-[#007B9D] hover:bg-[#007B9E]/5 dark:border-white/20 dark:text-white/90 dark:hover:bg-white/5"
              >
                ¿Por qué Infraver?
              </a>
            </div>
          </div>

          {/* Hero image */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto w-full max-w-xl">
              <div className="absolute -inset-6 -z-10 rounded-3xl bg-gradient-to-tr from-[#007B9E]/10 to-[#00C9D1]/10 blur-2xl" />
              <img
                src="/assets/hero-infraver.png"
                alt="Administración de nube para empresas"
                className="w-full rounded-3xl ring-1 ring-black/5 dark:ring-white/10"
              />
              <p className="mt-3 text-center text-xs text-[#6A6A6A] dark:text-white/50">
                Infraver Cloud · Soluciones administradas para AWS, Azure y GCP.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CheckIcon() {
  return (
    <svg
      className="mt-0.5 h-5 w-5 flex-none text-[#00C9D1]"
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M16.704 5.29a1 1 0 0 1 .006 1.414l-7.2 7.3a1 1 0 0 1-1.43.012L3.3 9.52A1 1 0 1 1 4.7 8.08l3.07 3.02 6.49-6.58a1 1 0 0 1 1.444.77z"
        clipRule="evenodd"
      />
    </svg>
  );
}

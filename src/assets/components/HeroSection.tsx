'use client';

import { useState } from 'react';
import { Dialog, DialogPanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

// Navegación principal
const navigation = [
  { name: 'Inicio', href: '#inicio' },
  { name: 'Soluciones', href: '#soluciones' },
  { name: 'Nosotros', href: '#nosotros' },
  { name: 'Contacto', href: '#contacto' },
];

export default function HeroSection() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div id="inicio" className="bg-[#1A1A1A] text-white relative">
      {/* Navbar */}
      <header className="absolute inset-x-0 top-0 z-50">
        <nav
          aria-label="Global"
          className="flex items-center justify-between p-6 lg:px-16"
        >
          {/* Logo principal */}
          <div className="flex lg:flex-1">
            <a href="#inicio" className="-m-1.5 p-1.5 flex items-center gap-2">
              <span className="text-xl font-semibold tracking-wide text-[#00C9D1]">
                Infraver
              </span>
            </a>
          </div>

          {/* Botón móvil */}
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-200"
            >
              <span className="sr-only">Abrir menú</span>
              <Bars3Icon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>

          {/* Navegación escritorio */}
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-semibold text-gray-100 hover:text-[#00C9D1] transition"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* CTA derecha */}
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a
              href="#contacto"
              className="text-sm font-semibold text-[#6BEA8C] hover:text-white transition"
            >
              Solicitar cotización <span aria-hidden="true">→</span>
            </a>
          </div>
        </nav>

        {/* Menú móvil */}
        <Dialog
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
          className="lg:hidden"
        >
          <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full max-w-sm bg-[#1A1A1A] p-6 sm:ring-1 sm:ring-gray-800/20">
            <div className="flex items-center justify-between">
              <a href="#inicio" className="-m-1.5 p-1.5 flex items-center gap-2">
                <img
                  src="/assets/logo-solo.png" // 🔹 aquí irá tu isotipo
                  alt="Infraver"
                  className="h-8 w-auto"
                />
                <span className="text-lg font-semibold text-[#00C9D1]">
                  Infraver
                </span>
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-200"
              >
                <span className="sr-only">Cerrar menú</span>
                <XMarkIcon aria-hidden="true" className="h-6 w-6" />
              </button>
            </div>

            <div className="mt-6 space-y-4">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block rounded-lg px-3 py-2 text-base font-medium text-gray-200 hover:bg-[#007B9E]/10 hover:text-[#00C9D1] transition"
                >
                  {item.name}
                </a>
              ))}
            </div>

            <div className="mt-8 border-t border-gray-700 pt-4">
              <a
                href="#contacto"
                className="block text-base font-semibold text-[#6BEA8C] hover:text-white transition"
              >
                Solicitar cotización →
              </a>
            </div>
          </DialogPanel>
        </Dialog>
      </header>

      {/* Hero principal */}
      <div className="relative isolate px-6 pt-24 lg:px-8">
        {/* Fondo degradado */}
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-gradient-to-tr from-[#007B9E] via-[#00C9D1] to-[#1A1A1A] opacity-20 blur-3xl"
        />
        <div className="mx-auto max-w-3xl py-32 sm:py-48 lg:py-56 text-center">
          <h1 className="text-5xl font-bold tracking-tight sm:text-6xl text-[#F4F7F9]">
            Conectamos Veracruz con tecnología confiable
          </h1>
          <p className="mt-8 text-lg text-gray-300 leading-relaxed">
            En <span className="text-[#00C9D1] font-semibold">Infraver</span>,
            diseñamos e instalamos redes, infraestructura y soluciones digitales
            que impulsan el crecimiento de empresas, hogares e instituciones en
            todo Veracruz.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="#soluciones"
              className="bg-[#00C9D1] hover:bg-[#007B9E] text-white font-medium px-8 py-3 rounded-lg shadow-lg transition"
            >
              Ver soluciones
            </a>
            <a
              href="#contacto"
              className="border border-[#00C9D1] hover:bg-[#00C9D1] hover:text-white text-[#00C9D1] font-medium px-8 py-3 rounded-lg transition"
            >
              Contáctanos
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

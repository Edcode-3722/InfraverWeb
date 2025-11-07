'use client';

import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline';

export default function ContactSection() {
  return (
    <section
      id="contacto"
      className="relative bg-[#1A1A1A] text-white py-24 sm:py-32 px-6 lg:px-16"
    >
      <div className="mx-auto max-w-6xl text-center">
        <h2 className="text-sm font-semibold text-[#00C9D1] uppercase tracking-wider">
          Contáctanos
        </h2>
        <h3 className="mt-2 text-4xl font-bold sm:text-5xl text-[#F4F7F9]">
          Conectemos tu próximo proyecto
        </h3>
        <p className="mt-6 text-lg text-gray-300 max-w-2xl mx-auto">
          Estamos listos para asesorarte y ofrecerte la mejor solución en redes, 
          infraestructura o soporte técnico. Escríbenos y recibe atención personalizada.
        </p>

        {/* CTA principal */}
        <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
          <a
            href="https://wa.me/522299999999" // 🔹 reemplaza con tu número real
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#6BEA8C] text-[#1A1A1A] font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-[#5AD57D] transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-5 h-5"
            >
              <path d="M12.04 2C6.58 2 2.15 6.43 2.15 11.89c0 2.09.57 4.14 1.65 5.93L2 22l4.31-1.74a10.06 10.06 0 0 0 5.73 1.7h.01c5.46 0 9.89-4.43 9.89-9.89C21.94 6.43 17.5 2 12.04 2zm0 17.85h-.01c-1.8 0-3.56-.53-5.07-1.53l-.36-.23-2.55 1.03.49-2.73-.18-.28a8.4 8.4 0 0 1-1.27-4.43c0-4.63 3.77-8.4 8.41-8.4 2.25 0 4.36.88 5.95 2.47a8.36 8.36 0 0 1 2.46 5.93c0 4.64-3.77 8.41-8.41 8.41zm4.71-6.32c-.26-.13-1.53-.76-1.77-.85-.24-.09-.41-.13-.58.13-.17.26-.66.85-.81 1.02-.15.17-.3.19-.56.06-.26-.13-1.09-.4-2.07-1.27-.76-.68-1.28-1.51-1.43-1.77-.15-.26-.02-.4.11-.53.12-.12.26-.3.39-.45.13-.15.17-.26.26-.43.09-.17.04-.32-.02-.45-.06-.13-.58-1.38-.79-1.9-.21-.5-.42-.43-.58-.44h-.5c-.17 0-.45.06-.68.32-.23.26-.89.87-.89 2.12s.91 2.46 1.03 2.63c.13.17 1.79 2.73 4.35 3.83.61.26 1.09.42 1.46.54.61.19 1.16.16 1.6.1.49-.07 1.53-.63 1.75-1.24.21-.6.21-1.11.15-1.24-.06-.13-.24-.21-.5-.34z" />
            </svg>
            WhatsApp
          </a>

          <a
            href="mailto:contacto@infraver.com"
            className="flex items-center gap-2 border border-[#00C9D1] text-[#00C9D1] px-6 py-3 rounded-lg font-semibold hover:bg-[#00C9D1] hover:text-white transition"
          >
            <EnvelopeIcon className="w-5 h-5" />
            Enviar correo
          </a>
        </div>

        {/* Info adicional */}
        <div className="mt-14 flex flex-col sm:flex-row justify-center gap-10 text-gray-400">
          <div className="flex items-center gap-3">
            <PhoneIcon className="h-5 w-5 text-[#00C9D1]" />
            <p>(229) 000-0000</p>
          </div>
          <div className="flex items-center gap-3">
            <EnvelopeIcon className="h-5 w-5 text-[#6BEA8C]" />
            <p>contacto@infraver.com</p>
          </div>
        </div>
      </div>

      {/* Fondo decorativo */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 -z-10 transform-gpu overflow-hidden blur-3xl"
      >
        <div
          className="relative left-1/2 aspect-[1155/678] w-[72rem] -translate-x-1/2 bg-gradient-to-tr from-[#007B9E] to-[#00C9D1] opacity-10"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 72.5% 32.5%, 60.2% 62.4%, 47.5% 58.3%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%)',
          }}
        />
      </div>
    </section>
  );
}

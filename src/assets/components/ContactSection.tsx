import { useState } from 'react';

export default function ContactSection() {
  const [sending, setSending] = useState(false);

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    setSending(true);

    setTimeout(() => {
      alert('Gracias. Te contactaremos para coordinar la evaluación técnica.');
      setSending(false);
    }, 700);
  };

  return (
    <section
      id="contacto"
      aria-label="Contacto y agenda"
      className="scroll-mt-24 bg-[#0B0E11] text-white py-24 px-6"
    >
      <div className="max-w-7xl mx-auto space-y-20">

        {/* -------------------------------------------------------- */}
        {/* TITULO PRINCIPAL */}
        {/* -------------------------------------------------------- */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold leading-tight">
            Conéctate con nosotros
          </h2>
          <p className="mt-3 text-white/60 text-lg">
            Ya sea para servicios en la nube, redes empresariales o ciberseguridad, 
            nuestro equipo está listo para ayudarte.
          </p>
        </div>

        {/* -------------------------------------------------------- */}
        {/* CARDS DE CONTACTO */}
        {/* -------------------------------------------------------- */}
        <div className="grid gap-8 md:grid-cols-3">

          {/* Email */}
          <div className="rounded-2xl bg-[#10141A] border border-white/10 p-6 hover:border-[#00C9D1]/40 transition">
            <div className="flex items-center gap-3">
              <span className="text-[#00C9D1] text-2xl">📧</span>
              <h3 className="text-lg font-semibold">Email</h3>
            </div>
            <p className="mt-2 text-white/70 text-sm">info@neo-network.com</p>
          </div>

          {/* Teléfono */}
          <div className="rounded-2xl bg-[#10141A] border border-white/10 p-6 hover:border-[#00C9D1]/40 transition">
            <div className="flex items-center gap-3">
              <span className="text-[#00C9D1] text-2xl">📞</span>
              <h3 className="text-lg font-semibold">Teléfono</h3>
            </div>
            <p className="mt-2 text-white/70 text-sm">+52 (229) 418-8534</p>
          </div>

          {/* Ubicación */}
          <div className="rounded-2xl bg-[#10141A] border border-white/10 p-6 hover:border-[#00C9D1]/40 transition">
            <div className="flex items-center gap-3">
              <span className="text-[#00C9D1] text-2xl">📍</span>
              <h3 className="text-lg font-semibold">Ubicación</h3>
            </div>
            <p className="mt-2 text-white/70 text-sm">
              Av. Miguel Angel de Quevedo 3852-Loc. 8,<br />
              Cristóbal Colón, 91755 Veracruz, Ver.
            </p>
          </div>

        </div>

        {/* -------------------------------------------------------- */}
        {/* SOPORTE REMOTO INTERNACIONAL */}
        {/* -------------------------------------------------------- */}
        

        {/* -------------------------------------------------------- */}
        {/* FORMULARIO Y MAPA */}
        {/* -------------------------------------------------------- */}
        <div className="grid gap-12 lg:grid-cols-2">

          {/* FORMULARIO */}
          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-white/10 p-6 ring-1 ring-white/5 bg-[#10141A]"
          >
            <h3 className="text-2xl font-semibold mb-6">Agenda una evaluación técnica</h3>

            <div className="grid gap-4 sm:grid-cols-2">
              {/* Empresa */}
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium">Empresa / Organización</label>
                <input
                  required
                  type="text"
                  name="company"
                  className="mt-1 w-full rounded-xl border-white/10 bg-white/5 px-3 py-2 text-sm text-white placeholder-white/40 focus:border-[#00C9D1] focus:ring-[#00C9D1]"
                  placeholder="Ej. Grupo Ejemplo S.A. de C.V."
                />
              </div>

              {/* Nombre */}
              <div>
                <label className="block text-sm font-medium">Nombre</label>
                <input
                  required
                  type="text"
                  name="name"
                  className="mt-1 w-full rounded-xl border-white/10 bg-white/5 px-3 py-2 text-sm text-white placeholder-white/40 focus:border-[#00C9D1] focus:ring-[#00C9D1]"
                  placeholder="Nombre y apellido"
                />
              </div>

              {/* Correo */}
              <div>
                <label className="block text-sm font-medium">Correo</label>
                <input
                  required
                  type="email"
                  name="email"
                  className="mt-1 w-full rounded-xl border-white/10 bg-white/5 px-3 py-2 text-sm text-white placeholder-white/40 focus:border-[#00C9D1] focus:ring-[#00C9D1]"
                  placeholder="correo@empresa.com"
                />
              </div>

              {/* Texto (ya tienes lo demás tal cual) */}
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium">Descripción / notas</label>
                <textarea
                  name="notes"
                  rows={4}
                  className="mt-1 w-full rounded-xl border-white/10 bg-white/5 px-3 py-2 text-sm text-white placeholder-white/40 focus:border-[#00C9D1] focus:ring-[#00C9D1]"
                  placeholder="Descríbenos requerimientos, restricciones de sitio o servicios cloud."
                />
              </div>

              {/* Botón */}
              <div className="sm:col-span-2 mt-4">
                <button
                  type="submit"
                  disabled={sending}
                  className="inline-flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-[#007B9E] to-[#00C9D1] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-[#007B9E]/20 transition hover:opacity-95 disabled:opacity-60"
                >
                  {sending ? 'Enviando…' : 'Enviar solicitud'}
                </button>
              </div>
            </div>
          </form>

          {/* MAPA */}
          <div className="rounded-2xl overflow-hidden h-[400px] border border-white/10 shadow-xl shadow-black/20">
            <iframe
              title="Ubicación Infraver"
              width="100%"
              height="100%"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              className="opacity-90"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.930462986813!2d-96.128854!3d19.173824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85c34fd292d2f8a7%3A0x4f50cdc8e90b518d!2sAv.%20Miguel%20Angel%20de%20Quevedo%203852%2C%20Crist%C3%B3bal%20Col%C3%B3n%2C%2091755%20Veracruz%2C%20Ver.!5e0!3m2!1ses-419!2smx!4v1712718834973"
            ></iframe>
          </div>

        </div>

      </div>
    </section>
  );
}

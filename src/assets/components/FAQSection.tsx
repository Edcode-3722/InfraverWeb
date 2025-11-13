// src/assets/components/FAQSection.tsx
export default function FAQSection() {
  const faqs = [
    {
      q: '¿Incluyen materiales y equipos o solo la ingeniería?',
      a: 'Podemos trabajar llave en mano (ingeniería + materiales + equipos) o integrarnos a tu procurement. Lo definimos en la propuesta técnica.'
    },
    {
      q: '¿Pueden trabajar fuera de horario?',
      a: 'Sí. Planificamos ventanas de cambio nocturnas o en fin de semana y definimos un back-out plan para contingencias.'
    },
    {
      q: '¿Entregan reportes de certificación de cableado?',
      a: 'Sí. Cuando el alcance incluye certificación, entregamos reportes PDF por punto (Fluke) junto con el as-built.'
    },
    {
      q: '¿Trabajan con mi stack actual (Cisco/Aruba/UniFi, etc.)?',
      a: 'Sí. Diseñamos sobre tu stack actual y proponemos opciones equivalentes según presupuesto y disponibilidad.'
    },
    {
      q: '¿Qué necesito para una cotización precisa?',
      a: 'Planos o croquis, conteo de nodos y zonas Wi-Fi, ubicación de MDF/IDF, equipos existentes y horarios/ventanas de cambio.'
    },
    {
      q: '¿Pueden hacer solo un diagnóstico independiente?',
      a: 'Sí. Entregamos un informe con riesgos, opciones de diseño y un ballpark de inversión sin afectar tu producción.'
    }
  ];

  return (
    <section
      id="faq"
      aria-label="Preguntas frecuentes"
      className="scroll-mt-24 bg-white text-[#1A1A1A] dark:bg-[#0B0E11] dark:text-white"
    >
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">FAQ</h2>
          <p className="mt-4 text-[#3A3A3A] dark:text-white/70">
            Respuestas claras a lo que más nos preguntan antes de iniciar un proyecto.
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-3xl divide-y divide-black/10 rounded-2xl border border-black/10 bg-white/60 ring-1 ring-black/5 backdrop-blur-sm dark:divide-white/10 dark:border-white/10 dark:bg-white/5 dark:ring-white/10">
          {faqs.map((f) => (
            <details key={f.q} className="group open:bg-white/70 dark:open:bg-white/10">
              <summary className="flex cursor-pointer list-none items-center justify-between px-5 py-4">
                <span className="text-sm font-semibold">{f.q}</span>
                <span className="ml-4 rounded-md bg-[#007B9E]/10 px-2 py-1 text-[10px] font-medium text-[#007B9E] transition group-open:bg-[#00C9D1]/10 group-open:text-[#00C9D1]">
                  Ver
                </span>
              </summary>
              <div className="px-5 pb-5 text-sm text-[#3A3A3A] dark:text-white/70">{f.a}</div>
            </details>
          ))}
        </div>

        <div className="mt-8 text-center">
          <a
            href="#contacto"
            className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-[#007B9E] to-[#00C9D1] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-[#007B9E]/20 transition hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-[#00C9D1] focus:ring-offset-2"
          >
            Agenda una visita técnica
          </a>
        </div>
      </div>
    </section>
  );
}

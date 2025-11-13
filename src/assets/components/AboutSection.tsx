// src/assets/components/AboutSection.tsx

export default function AboutSection() {
  return (
    <section
      id="nosotros"
      className="relative bg-[#0B0E11] text-white py-28 overflow-hidden"
    >
      {/* Fondo con imagen + overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1600&q=80"
          alt="Team working"
          className="h-full w-full object-cover opacity-[0.20]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B0E11] via-[#0B0E11]/90 to-[#0B0E11]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Encabezado */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold leading-tight sm:text-5xl">
            Soluciones Cloud creadas para impulsar a las empresas modernas
          </h2>

          <p className="mt-4 text-lg text-white/70 leading-relaxed">
            En Infraver Cloud ayudamos a PYMEs y empresas medianas a migrar, 
            administrar y optimizar su infraestructura en AWS y Azure, con 
            enfoque en seguridad, rendimiento y control de costos.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-20 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {/* Card 1 */}
          <div className="rounded-3xl p-8 bg-white/5 backdrop-blur-xl 
                          border border-white/10 hover:bg-white/10 transition">
            <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-[#007B9E] to-[#00C9D1]
                            flex items-center justify-center text-white mb-6">
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M13 16h-1v-4h-1m2 0h1M12 4v4m0 12v-4m8-4h-4M4 12H8" />
              </svg>
            </div>

            <h3 className="text-xl font-bold mb-3">Infraestructura Inteligente</h3>
            <p className="text-sm text-white/70 leading-relaxed">
              Diseñamos arquitecturas seguras y escalables en AWS y Azure, 
              adaptadas totalmente a las necesidades y proyección de tu empresa.
            </p>
          </div>

          {/* Card 2 */}
          <div className="rounded-3xl p-8 bg-white/5 backdrop-blur-xl 
                          border border-white/10 hover:bg-white/10 transition">
            <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-[#007B9E] to-[#00C9D1]
                            flex items-center justify-center text-white mb-6">
              <svg
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 3a1 1 0 01.894.553l6 12A1 1 0 0116 17H4a1 1 0 01-.894-1.447l6-12A1 1 0 0110 3z" />
              </svg>
            </div>

            <h3 className="text-xl font-bold mb-3">Seguridad de Nivel Empresarial</h3>
            <p className="text-sm text-white/70 leading-relaxed">
              Contamos con prácticas Zero Trust, MFA, segmentación, firewalls, 
              monitoreo, auditorías y cumplimiento de estándares internacionales.
            </p>
          </div>

          {/* Card 3 */}
          <div className="rounded-3xl p-8 bg-white/5 backdrop-blur-xl 
                          border border-white/10 hover:bg-white/10 transition">
            <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-[#007B9E] to-[#00C9D1]
                            flex items-center justify-center text-white mb-6">
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M9 17v-2a2 2 0 012-2h2a2 2 0 012 2v2m4 0H5" />
              </svg>
            </div>

            <h3 className="text-xl font-bold mb-3">Optimización Continua</h3>
            <p className="text-sm text-white/70 leading-relaxed">
              Reducimos costos de nube hasta un 30% mediante automatización, 
              rightsizing y monitoreo avanzado de consumo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

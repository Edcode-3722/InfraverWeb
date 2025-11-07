'use client';



export default function AboutSection() {
  return (
    <section
      id="nosotros"
      className="bg-white text-[#1A1A1A] py-24 sm:py-32 px-6 lg:px-16"
    >
      <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Imagen lateral */}
        <div className="flex justify-center">
          <img
            src="/assets/about-infraver.png" // 🔹 reemplaza con tu imagen o IA generada
            alt="Equipo técnico instalando red Infraver"
            className="w-full max-w-lg rounded-2xl shadow-xl ring-1 ring-[#007B9E]/20"
          />
        </div>

        {/* Texto descriptivo */}
        <div className="lg:pl-10">
          <h2 className="text-sm font-semibold text-[#00C9D1] uppercase tracking-wider">
            Sobre Nosotros
          </h2>
          <h3 className="mt-2 text-4xl font-bold text-[#1A1A1A] sm:text-5xl leading-tight">
            Conectando Veracruz con infraestructura confiable
          </h3>
          <p className="mt-6 text-lg text-gray-700 leading-relaxed">
            En <span className="font-semibold text-[#007B9E]">Infraver</span> somos una empresa veracruzana dedicada al
            diseño, instalación y mantenimiento de infraestructura tecnológica.
            Nuestra misión es impulsar la conectividad y la transformación digital
            con soluciones seguras, modernas y escalables.
          </p>
          <p className="mt-4 text-lg text-gray-600">
            Trabajamos con estándares de calidad y compromiso, apoyando tanto a
            negocios como a instituciones públicas y hogares a mantenerse
            conectados en todo momento.
          </p>

          <ul className="mt-8 space-y-3 text-gray-700">
            <li className="flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-[#00C9D1]" />
              Experiencia en proyectos de cableado estructurado y fibra óptica
            </li>
            <li className="flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-[#6BEA8C]" />
              Soporte técnico especializado y atención personalizada
            </li>
            <li className="flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-[#007B9E]" />
              Cobertura en toda la región de Veracruz
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

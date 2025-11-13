// src/components/WhyUs.tsx

export default function WhyUs() {
  return (
    <section
      id="por-que-infraver"
      className="bg-white dark:bg-[#0B0E11] text-[#1A1A1A] dark:text-white py-20 border-t border-black/5 dark:border-white/10"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Encabezado */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight">
            ¿Por qué elegir <span className="bg-gradient-to-r from-[#007B9E] to-[#00C9D1] bg-clip-text text-transparent">Infraver Cloud</span>?
          </h2>
          <p className="mt-4 text-lg text-[#3A3A3A] dark:text-white/70">
            No solo cuidamos su infraestructura: la potenciamos.  
            Combinamos ingeniería en red, seguridad y nube para crear entornos más rápidos, estables y rentables.
          </p>
        </div>

        {/* Cuadrícula de beneficios */}
        <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          
          <div className="rounded-xl bg-white/60 dark:bg-white/5 p-6 ring-1 ring-black/5 dark:ring-white/10 shadow-sm hover:shadow-md transition">
            <h3 className="font-semibold text-[#007B9E] dark:text-[#00C9D1]">Optimización de Red</h3>
            <p className="mt-2 text-sm text-[#3A3A3A] dark:text-white/70">
              Mejor rendimiento en oficinas, sucursales y entornos híbridos mediante topologías eficientes y monitoreo continuo.
            </p>
          </div>

          <div className="rounded-xl bg-white/60 dark:bg-white/5 p-6 ring-1 ring-black/5 dark:ring-white/10 shadow-sm hover:shadow-md transition">
            <h3 className="font-semibold text-[#007B9E] dark:text-[#00C9D1]">Ciberseguridad Total</h3>
            <p className="mt-2 text-sm text-[#3A3A3A] dark:text-white/70">
              Protección integral con controles de acceso, segmentación, cifrado y auditorías constantes de seguridad.
            </p>
          </div>

          <div className="rounded-xl bg-white/60 dark:bg-white/5 p-6 ring-1 ring-black/5 dark:ring-white/10 shadow-sm hover:shadow-md transition">
            <h3 className="font-semibold text-[#007B9E] dark:text-[#00C9D1]">Soluciones en AWS</h3>
            <p className="mt-2 text-sm text-[#3A3A3A] dark:text-white/70">
              Despliegue, administración y automatización en AWS con arquitecturas preparadas para crecer sin límites.
            </p>
          </div>

          <div className="rounded-xl bg-white/60 dark:bg-white/5 p-6 ring-1 ring-black/5 dark:ring-white/10 shadow-sm hover:shadow-md transition">
            <h3 className="font-semibold text-[#007B9E] dark:text-[#00C9D1]">Costos Optimizados</h3>
            <p className="mt-2 text-sm text-[#3A3A3A] dark:text-white/70">
              Hasta un 30% menos de gasto cloud aplicando buenas prácticas, automatización y análisis de consumo en tiempo real.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

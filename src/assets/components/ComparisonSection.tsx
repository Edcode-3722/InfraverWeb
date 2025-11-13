export default function ComparisonSection() {
  return (
    <section
      id="comparativa"
      className="bg-white text-[#1A1A1A] dark:bg-[#0B0E11] dark:text-white py-24 border-t border-white/10"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Encabezado */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-[#00C9D1] uppercase tracking-wide">
            Diferenciadores reales
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            ¿Por qué elegir Infraver Cloud?
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-[#3A3A3A] dark:text-white/70">
            No somos una agencia más. Somos un equipo técnico que te ayuda a ahorrar, crecer y 
            operar sin riesgos en la nube.
          </p>
        </div>

        {/* Comparativa */}
        <div className="rounded-3xl bg-white/5 dark:bg-[#10151C] border border-white/10 overflow-hidden">
          <table className="w-full text-left text-sm md:text-base">
            <thead className="bg-[#007B9E]/10 dark:bg-[#00C9D1]/10 text-[#007B9E] dark:text-[#00C9D1]">
              <tr>
                <th className="py-4 px-6 font-semibold">Característica</th>
                <th className="py-4 px-6 font-semibold text-center">Infraver</th>
                <th className="py-4 px-6 font-semibold text-center">Proveedores tradicionales</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-white/10">
              <Row
                feature="Precios claros y en MXN 🇲🇽"
                ours="Sí, fijos y transparentes."
                others="Cobrados en USD y con tarifas variables."
              />

              <Row
                feature="Soporte técnico local"
                ours="Ingenieros en español disponibles."
                others="Tickets internacionales o chatbots."
              />

              <Row
                feature="Optimización de costos incluida"
                ours="Sí, mensual y sin costo adicional."
                others="Servicio premium o no disponible."
              />

              <Row
                feature="Integración multi-nube"
                ours="AWS • Azure • Google Cloud"
                others="Generalmente sólo 1 proveedor."
              />

              <Row
                feature="Reportes de rendimiento"
                ours="Mensuales, claros y orientados a negocio."
                others="No incluidos o costosos."
              />

              <Row
                feature="Enfoque en PYMEs"
                ours="Diseñado para presupuestos ajustados."
                others="Servicios empresariales difíciles de pagar."
              />

              <Row
                feature="Tiempo de implementación"
                ours="2–5 días según plan."
                others="Semanas o procesos complejos."
              />

              <Row
                feature="Transparencia total"
                ours="Sin costos ocultos, sin penalizaciones."
                others="Cargos adicionales por cualquier ajuste."
              />
            </tbody>
          </table>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <a
            href="#contacto"
            className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-[#007B9E] to-[#00C9D1] px-8 py-4 text-base font-semibold text-white shadow-lg shadow-[#007B9E]/20 hover:opacity-95"
          >
            Quiero cotizar mi proyecto en la nube
          </a>

          <p className="mt-3 text-sm text-[#4A4A4A] dark:text-white/60">
            Te mostramos comparaciones reales con tu infraestructura actual.
          </p>
        </div>
      </div>
    </section>
  );
}

function Row({ feature, ours, others }: { feature: string; ours: string; others: string }) {
  return (
    <tr>
      <td className="py-5 px-6 font-medium">{feature}</td>
      <td className="py-5 px-6 text-center text-[#00C9D1] font-semibold">{ours}</td>
      <td className="py-5 px-6 text-center text-[#C94C4C]">{others}</td>
    </tr>
  );
}

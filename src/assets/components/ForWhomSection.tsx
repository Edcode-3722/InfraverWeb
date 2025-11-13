// ServicesSection.tsx
function CheckIcon() {
  return (
    <svg className="mt-0.5 h-5 w-5 flex-none" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path
        fillRule="evenodd"
        d="M16.704 5.29a1 1 0 0 1 .006 1.414l-7.2 7.3a1 1 0 0 1-1.43.012L3.3 9.52A1 1 0 1 1 4.7 8.08l3.07 3.02 6.49-6.58a1 1 0 0 1 1.444.77z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default function ServicesSection() {
  return (
    <section
      aria-label="Qué hacemos en Infraver"
      className="bg-white text-[#1A1A1A] dark:bg-[#0B0E11] dark:text-white"
    >
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Qué hacemos</h2>
          <p className="mt-4 text-[#3A3A3A] dark:text-white/70">
            Tres líneas de servicio: cableado estructurado, diseño de redes empresariales y servicios en la nube.
            Alcances, estándares y entregables definidos desde el día uno.
          </p>
        </div>

        {/* 3 columnas de servicio */}
        <div id="cableado" className="mt-12 grid gap-8 lg:grid-cols-3">
          {/* Cableado estructurado */}
          <div className="rounded-2xl border border-[#007B9E]/15 p-6 ring-1 ring-black/5 dark:border-white/10 dark:ring-white/10">
            <h3 className="text-xl font-semibold">Cableado Estructurado</h3>
            <p className="mt-2 text-sm text-[#3A3A3A] dark:text-white/70">
              Cobre Cat6/Cat6A y fibra OM3/OM4/SM, racks, canalizaciones y etiquetado bajo norma.
            </p>

            <ul className="mt-4 space-y-2 text-sm">
              <li className="flex gap-3"><CheckIcon /> Criterios: TIA-568.2-D / 568.3-D, ISO/IEC 11801, TIA-606.</li>
              <li className="flex gap-3"><CheckIcon /> PoE/PoE+/bt budgeting, rutas MDF/IDF, tomas para APs.</li>
              <li className="flex gap-3"><CheckIcon /> Certificación de enlaces (reportes PDF por punto).</li>
            </ul>

            <div className="mt-5 rounded-xl bg-[#007B9E]/5 p-4 text-sm dark:bg-white/5">
              <p className="font-medium">Entregables</p>
              <p className="mt-1 text-[#3A3A3A] dark:text-white/70">
                Plano as-built, esquema de numeración, bitácora de pruebas, evidencias fotográficas,
                reportes de certificación y acta de aceptación.
              </p>
            </div>
          </div>

          {/* Redes empresariales */}
          <div id="redes" className="rounded-2xl border border-[#007B9E]/15 p-6 ring-1 ring-black/5 dark:border-white/10 dark:ring-white/10">
            <h3 className="text-xl font-semibold">Diseño de Redes Empresariales</h3>
            <p className="mt-2 text-sm text-[#3A3A3A] dark:text-white/70">
              Campus, sucursales y Wi-Fi: HLD/LLD, segmentación y seguridad por rol con observabilidad.
            </p>

            <ul className="mt-4 space-y-2 text-sm">
              <li className="flex gap-3"><CheckIcon /> VLANs, QoS, 802.1X/NAC, Wi-Fi 6/6E con site survey.</li>
              <li className="flex gap-3"><CheckIcon /> Routing OSPF/BGP (según caso), redundancia L2/L3.</li>
              <li className="flex gap-3"><CheckIcon /> SNMP/NetFlow/sFlow, syslog y tableros de salud.</li>
            </ul>

            <div className="mt-5 rounded-xl bg-[#007B9E]/5 p-4 text-sm dark:bg-white/5">
              <p className="font-medium">Entregables</p>
              <p className="mt-1 text-[#3A3A3A] dark:text-white/70">
                Diagramas L1/L2/L3, plan de direccionamiento, matriz de VLANs, plantillas de configuración
                versionadas, plan de pruebas y manual operativo.
              </p>
            </div>
          </div>

          {/* Nube */}
          <div id="nube" className="rounded-2xl border border-[#007B9E]/15 p-6 ring-1 ring-black/5 dark:border-white/10 dark:ring-white/10">
            <h3 className="text-xl font-semibold">Servicios en la Nube</h3>
            <p className="mt-2 text-sm text-[#3A3A3A] dark:text-white/70">
              AWS/Azure/GCP: landing zone, seguridad e integración híbrida con tu red on-prem.
            </p>

            <ul className="mt-4 space-y-2 text-sm">
              <li className="flex gap-3"><CheckIcon /> IAM de mínimos privilegios, guardrails y monitoreo.</li>
              <li className="flex gap-3"><CheckIcon /> VPN/Direct Connect/ExpressRoute/Interconnect.</li>
              <li className="flex gap-3"><CheckIcon /> Infraestructura como Código (Terraform/Ansible).</li>
            </ul>

            <div className="mt-5 rounded-xl bg-[#007B9E]/5 p-4 text-sm dark:bg-white/5">
              <p className="font-medium">Entregables</p>
              <p className="mt-1 text-[#3A3A3A] dark:text-white/70">
                Diagrama de arquitectura, documento de seguridad y accesos, runbooks,
                IaC y tableros de monitoreo/costos.
              </p>
            </div>
          </div>
        </div>

        {/* CTA de cierre */}
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href="#contacto"
            className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-[#007B9E] to-[#00C9D1] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-[#007B9E]/20 transition hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-[#00C9D1] focus:ring-offset-2"
          >
            Solicitar diagnóstico independiente
          </a>
          <a
            href="#proceso"
            className="inline-flex items-center justify-center rounded-xl border border-[#007B9E]/30 px-5 py-3 text-sm font-semibold text-[#007B9E] hover:bg-[#007B9E]/5 dark:border-white/20 dark:text-white/90 dark:hover:bg-white/5"
          >
            Ver proceso y SLA
          </a>
        </div>
      </div>
    </section>
  );
}

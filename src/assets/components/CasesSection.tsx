// src/assets/components/CasesSection.tsx
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

export default function CasesSection() {
  const cases = [
    {
      tag: 'Oficina 50–100 nodos',
      title: 'Sede corporativa única',
      bullets: [
        '100 tomas Cat6A certificadas (Fluke).',
        '2 racks (MDF + IDF), canalización y peinado.',
        'Core + acceso L3, 6–10 APs Wi-Fi 6 con site survey.',
        'Segmentación guest/corporativo y QoS para voz.',
      ],
      deliverables:
        'Plano as-built, resultados de certificación por punto, matriz de VLANs, direccionamiento y plantillas versionadas.',
    },
    {
      tag: 'Retail / Multisede 100–500 usuarios',
      title: 'Conectividad entre sucursales',
      bullets: [
        'SD-WAN/VPN site-to-site y políticas centralizadas.',
        'Catálogo de configuraciones por rol de sede.',
        'Visibilidad unificada: SNMP/NetFlow/sFlow y syslog.',
        'Wi-Fi por sitio con SSIDs y portal captive (opcional).',
      ],
      deliverables:
        'Diagramas L2/L3, playbooks de despliegue por sede, paneles de salud y umbrales de alertas.',
    },
    {
      tag: 'Híbrido a la nube',
      title: 'Aplicaciones internas + nube',
      bullets: [
        'Landing zone (AWS/Azure/GCP) con IAM mínimo privilegio.',
        'Conectividad híbrida: VPN/Direct Connect/ExpressRoute.',
        'Backups y DR con RPO/RTO definidos.',
        'Infraestructura como Código (Terraform/Ansible).',
      ],
      deliverables:
        'Diagrama de arquitectura, guardrails de seguridad, runbooks de contingencia y tableros de costos/monitoreo.',
    },
  ];

  return (
    <section
      id="casos"
      aria-label="Casos de uso y paquetes de arranque"
      className="scroll-mt-24 bg-white text-[#1A1A1A] dark:bg-[#0B0E11] dark:text-white"
    >
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Casos de uso y paquetes de arranque</h2>
          <p className="mt-4 text-[#3A3A3A] dark:text-white/70">
            Paquetes base para arrancar rápido. Se ajustan tras diagnóstico y visita técnica.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {cases.map((c) => (
            <div
              key={c.title}
              className="relative rounded-2xl border border-[#007B9E]/15 bg-white/60 p-6 ring-1 ring-black/5 backdrop-blur-sm dark:border-white/10 dark:bg-white/5 dark:ring-white/10"
            >
              <span className="inline-flex rounded-full border border-[#007B9E]/20 px-3 py-1 text-xs font-medium text-[#007B9E] dark:border-[#00C9D1]/30 dark:text-[#00C9D1]">
                {c.tag}
              </span>
              <h3 className="mt-3 text-xl font-semibold">{c.title}</h3>

              <ul className="mt-4 space-y-2 text-sm">
                {c.bullets.map((b) => (
                  <li key={b} className="flex gap-3">
                    <CheckIcon /> {b}
                  </li>
                ))}
              </ul>

              <div className="mt-5 rounded-xl bg-[#007B9E]/5 p-4 text-sm dark:bg-white/5">
                <p className="font-medium">Entregables</p>
                <p className="mt-1 text-[#3A3A3A] dark:text-white/70">{c.deliverables}</p>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="#contacto"
                  className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-[#007B9E] to-[#00C9D1] px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-[#007B9E]/20 transition hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-[#00C9D1] focus:ring-offset-2"
                >
                  Solicitar diagnóstico
                </a>
                <a
                  href="#proceso"
                  className="inline-flex items-center justify-center rounded-xl border border-[#007B9E]/30 px-4 py-2 text-sm font-semibold text-[#007B9E] hover:bg-[#007B9E]/5 dark:border-white/20 dark:text-white/90 dark:hover:bg-white/5"
                >
                  Ver proceso y SLA
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Chips de alcance */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3 text-xs">
          {[
            'As-built completo',
            'Certificación Fluke',
            'HLD/LLD',
            'VLANs + direccionamiento',
            'Plantillas versionadas',
            'Runbooks',
            'Paneles de monitoreo'
          ].map((chip) => (
            <span
              key={chip}
              className="rounded-full border border-[#007B9E]/20 px-3 py-1 text-[#007B9E] dark:border-[#00C9D1]/30 dark:text-[#00C9D1]"
            >
              {chip}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

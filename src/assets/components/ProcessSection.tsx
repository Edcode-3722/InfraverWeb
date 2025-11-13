// src/assets/components/ProcessSection.tsx
export default function ProcessSection() {
  const steps = [
    {
      title: 'Diagnóstico',
      desc:
        'Visita técnica o sesión remota para levantar objetivos, restricciones de sitio, conteo y riesgos iniciales.',
      meta: '1–3 días',
    },
    {
      title: 'Propuesta técnica + económica',
      desc:
        'Alcances, supuestos, cronograma, matriz de riesgos y criterios de aceptación. Incluye opciones por presupuesto.',
      meta: '3–5 días',
    },
    {
      title: 'Piloto / PoC (opcional)',
      desc:
        'Validación de compatibilidad, cobertura Wi-Fi y políticas sin afectar producción. Plan de roll-back definido.',
      meta: 'según caso',
    },
    {
      title: 'Implementación controlada',
      desc:
        'Ventanas de cambio, checklist por hito, control de versiones de configuraciones y evidencia fotográfica.',
      meta: 'planificado',
    },
    {
      title: 'Pruebas y certificación',
      desc:
        'Resultados firmados (Fluke para cableado, pruebas de conectividad/rendimiento/seguridad para red/nube).',
      meta: 'por lote',
    },
    {
      title: 'Documentación as-built',
      desc:
        'Diagramas L1/L2/L3, direccionamiento, matriz de VLANs, plantillas versionadas y runbooks.',
      meta: 'entrega',
    },
    {
      title: 'Handover & soporte',
      desc:
        'Capacitación, SLAs, monitoreo inicial y plan de mejora continua.',
      meta: 'go-live',
    },
  ];

  return (
    <section
      id="proceso"
      aria-label="Proceso y SLA"
      className="scroll-mt-24 bg-white text-[#1A1A1A] dark:bg-[#0B0E11] dark:text-white"
    >
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Proceso y SLA</h2>
          <p className="mt-4 text-[#3A3A3A] dark:text-white/70">
            Entregables verificables, ventanas de cambio y criterios de aceptación acordados desde el inicio.
          </p>
        </div>

        {/* Steps */}
        <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((s, i) => (
            <li
              key={s.title}
              className="relative rounded-2xl border border-[#007B9E]/15 bg-white/60 p-6 ring-1 ring-black/5 backdrop-blur-sm dark:border-white/10 dark:bg-white/5 dark:ring-white/10"
            >
              <div className="mb-4 inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-[#007B9E] to-[#00C9D1] text-white">
                <span className="text-sm font-semibold">{i + 1}</span>
              </div>
              <h3 className="text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-[#3A3A3A] dark:text-white/70">{s.desc}</p>
              <p className="mt-3 text-xs text-[#007B9E] dark:text-[#00C9D1]">{s.meta}</p>
            </li>
          ))}
        </ol>

        {/* SLA + KPIs */}
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-[#007B9E]/15 p-6 ring-1 ring-black/5 dark:border-white/10 dark:ring-white/10">
            <h3 className="text-xl font-semibold">SLA de referencia</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>• Incidentes críticos: respuesta ≤ 1 h, contención 4–8 h.</li>
              <li>• Cambios planificados fuera de horario, con back-out plan.</li>
              <li>• Tiempo de diagnóstico y tiempos de solución por severidad.</li>
              <li>• Soporte por hitos durante el arranque (go-live).</li>
            </ul>
            <p className="mt-4 rounded-xl bg-[#007B9E]/5 p-4 text-sm dark:bg-white/5">
              Los SLAs finales se ajustan al tamaño del proyecto, criticidad y herramientas de monitoreo disponibles.
            </p>
          </div>

          <div className="rounded-2xl border border-[#007B9E]/15 p-6 ring-1 ring-black/5 dark:border-white/10 dark:ring-white/10">
            <h3 className="text-xl font-semibold">KPIs de éxito</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>• 100% de enlaces certificados (cableado) y documentación as-built.</li>
              <li>• Cobertura/SNR Wi-Fi conforme site survey y densidad planificada.</li>
              <li>• Disponibilidad objetivo por dominio (core/WAN/Wi-Fi) definida.</li>
              <li>• Backups/DR probados (RPO/RTO cuando aplique en nube).</li>
            </ul>
            <p className="mt-4 text-xs text-[#3A3A3A] dark:text-white/70">
              Los criterios de aceptación se firman por hito y se incluyen en el acta de cierre.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function ServiciosPage() {
  return (
    <section className="min-h-screen w-full bg-[#0B0E11] text-white pt-32 pb-24 px-6">
      <div className="mx-auto max-w-6xl">
        {/* Title */}
        <div className="mb-16 text-center">
          <h1 className="text-4xl font-bold tracking-tight">
            Nuestros <span className="bg-gradient-to-r from-[#007B9E] to-[#00C9D1] bg-clip-text text-transparent">Servicios Cloud</span>
          </h1>
          <p className="mt-3 text-white/60 max-w-2xl mx-auto text-lg">
            Soluciones diseñadas para PYMEs que necesitan estabilidad, velocidad y
            seguridad sin costos ocultos.
          </p>
        </div>

        {/* Grid of service cards */}
        <div className="grid gap-10 md:grid-cols-2">
          {/* AWS Card */}
          <div className="group relative rounded-3xl p-[1px] bg-gradient-to-br from-[#007B9E] to-[#00C9D1] overflow-hidden shadow-xl">
            <div className="rounded-3xl bg-[#10141A] p-8 h-full flex flex-col">
              {/* ICON */}
              <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-[#007B9E] to-[#00C9D1] flex items-center justify-center shadow-lg mb-6">
                <svg className="h-7 w-7 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 8a7 7 0 0111.356-4.775A5.5 5.5 0 0117 15H6a5 5 0 01-3-9z" />
                </svg>
              </div>

              <h2 className="text-2xl font-semibold mb-3">Soluciones en la Nube (AWS)</h2>
              <p className="text-white/60 mb-6 leading-relaxed">
                Diseñamos, administramos y optimizamos arquitecturas sobre Amazon Web Services.
              </p>

              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-3">
                  <Bullet /> Migración a AWS
                </li>
                <li className="flex items-center gap-3">
                  <Bullet /> EC2, S3, RDS, DynamoDB
                </li>
                <li className="flex items-center gap-3">
                  <Bullet /> AWS Lambda
                </li>
                <li className="flex items-center gap-3">
                  <Bullet /> CloudFront CDN
                </li>
                <li className="flex items-center gap-3">
                  <Bullet /> Backup & Disaster Recovery
                </li>
              </ul>

              <a
                href="#contacto"
                className="mt-auto inline-flex justify-center items-center rounded-xl bg-gradient-to-r from-[#007B9E] to-[#00C9D1] px-5 py-3 text-sm font-semibold text-white shadow-[#007B9E]/20 shadow-lg hover:opacity-95 transition mt-8"
              >
                Solicitar Información →
              </a>
            </div>
          </div>

          {/* Azure Card */}
          <div className="group relative rounded-3xl p-[1px] bg-gradient-to-br from-[#007B9E] to-[#00C9D1] overflow-hidden shadow-xl">
            <div className="rounded-3xl bg-[#10141A] p-8 h-full flex flex-col">
              {/* ICON */}
              <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-[#007B9E] to-[#00C9D1] flex items-center justify-center shadow-lg mb-6">
                <svg className="h-7 w-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L1 21h22L12 2z" />
                </svg>
              </div>

              <h2 className="text-2xl font-semibold mb-3">Soluciones en la Nube (Azure)</h2>
              <p className="text-white/60 mb-6 leading-relaxed">
                Infraestructura optimizada y segura con tecnologías empresariales de Microsoft Azure.
              </p>

              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-3"><Bullet /> Máquinas Virtuales (VMs)</li>
                <li className="flex items-center gap-3"><Bullet /> Azure Blob Storage</li>
                <li className="flex items-center gap-3"><Bullet /> Azure SQL</li>
                <li className="flex items-center gap-3"><Bullet /> Active Directory / SSO</li>
                <li className="flex items-center gap-3"><Bullet /> Backup Empresarial</li>
              </ul>

              <a
                href="#contacto"
                className="mt-auto inline-flex justify-center items-center rounded-xl bg-gradient-to-r from-[#007B9E] to-[#00C9D1] px-5 py-3 text-sm font-semibold text-white shadow-[#007B9E]/20 shadow-lg hover:opacity-95 transition mt-8"
              >
                Solicitar Información →
              </a>
            </div>
          </div>

          {/* Redes */}
          <div className="group relative rounded-3xl p-[1px] bg-gradient-to-br from-[#007B9E] to-[#00C9D1] overflow-hidden shadow-xl">
            <div className="rounded-3xl bg-[#10141A] p-8 h-full flex flex-col">
              <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-[#007B9E] to-[#00C9D1] flex items-center justify-center shadow-lg mb-6">
                <svg className="h-7 w-7 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 2l8 4v8l-8 4-8-4V6l8-4z" />
                </svg>
              </div>

              <h2 className="text-2xl font-semibold mb-3">Administración de Redes</h2>
              <p className="text-white/60 mb-6 leading-relaxed">
                Monitoreo proactivo y gestión de equipos críticos para tu operación diaria.
              </p>

              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-3"><Bullet /> Monitoreo 24/7</li>
                <li className="flex items-center gap-3"><Bullet /> Gestión de routers/switches</li>
                <li className="flex items-center gap-3"><Bullet /> VPN seguras</li>
                <li className="flex items-center gap-3"><Bullet /> Mantenimiento preventivo</li>
              </ul>

              <a
                href="#contacto"
                className="mt-auto inline-flex justify-center items-center rounded-xl bg-gradient-to-r from-[#007B9E] to-[#00C9D1] px-5 py-3 text-sm font-semibold text-white shadow-[#007B9E]/20 shadow-lg hover:opacity-95 transition mt-8"
              >
                Solicitar Información →
              </a>
            </div>
          </div>

          {/* Ciberseguridad */}
          <div className="group relative rounded-3xl p-[1px] bg-gradient-to-br from-[#007B9E] to-[#00C9D1] overflow-hidden shadow-xl">
            <div className="rounded-3xl bg-[#10141A] p-8 h-full flex flex-col">
              <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-[#007B9E] to-[#00C9D1] flex items-center justify-center shadow-lg mb-6">
                <svg className="h-7 w-7 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 2l6 4v4c0 5-3 8-6 8S4 15 4 10V6l6-4z" />
                </svg>
              </div>

              <h2 className="text-2xl font-semibold mb-3">Ciberseguridad Empresarial</h2>
              <p className="text-white/60 mb-6 leading-relaxed">
                Protección total ante amenazas: ransomware, ataques externos y vulnerabilidades internas.
              </p>

              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-3"><Bullet /> Pentesting</li>
                <li className="flex items-center gap-3"><Bullet /> Monitoreo de vulnerabilidades</li>
                <li className="flex items-center gap-3"><Bullet /> EDR y respuesta inmediata</li>
                <li className="flex items-center gap-3"><Bullet /> Defensa contra ransomware</li>
              </ul>

              <a
                href="#contacto"
                className="mt-auto inline-flex justify-center items-center rounded-xl bg-gradient-to-r from-[#007B9E] to-[#00C9D1] px-5 py-3 text-sm font-semibold text-white shadow-[#007B9E]/20 shadow-lg hover:opacity-95 transition mt-8"
              >
                Solicitar Información →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* BULLET ICON */
function Bullet() {
  return (
    <span className="inline-block h-2 w-2 rounded-full bg-gradient-to-r from-[#007B9E] to-[#00C9D1]"></span>
  );
}

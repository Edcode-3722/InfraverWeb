// src/assets/components/ServicesSection.tsx
export default function ServicesSection() {
  const plans = [
    {
      name: "Paquete Básico",
      priceMXN: 5000,
      priceUSD: 300,
      description: "Protección profesional y respaldo automatizado sin infraestructura costosa.",
      features: [
        "Monitoreo remoto 24/7",
        "Respaldo en la nube (hasta 100 GB en AWS S3)",
        "Protección antivirus y firewall básico",
        "Soporte remoto mensual",
      ],
      popular: false,
      ideal: "Ideal para PyMEs",
    },
    {
      name: "Paquete Profesional",
      priceMXN: 15000,
      priceUSD: 850,
      description: "Máxima estabilidad, alta disponibilidad y continuidad operativa garantizada.",
      features: [
        "Administración completa de red",
        "Seguridad avanzada con VPN corporativa",
        "Respaldo en la nube hasta 1 TB en AWS",
        "Consultoría mensual",
        "Soporte prioritario",
      ],
      popular: true,
      ideal: "Para empresas medianas",
    },
    {
      name: "Paquete Empresarial",
      priceMXN: null,
      priceUSD: null,
      description: "Infraestructura global, rendimiento superior y soporte especializado.",
      features: [
        "Diseño y administración integral en AWS",
        "Auditoría completa de ciberseguridad",
        "Implementación de EC2, RDS, S3 y CloudFront",
        "Soporte técnico dedicado con SLA garantizado",
      ],
      popular: false,
      ideal: "Soluciones corporativas",
    },
  ];

  const consultant = [
    {
      name: "Asesoría Básica",
      sessions: "3 sesiones / 2 meses",
      price: "$3,000 MXN",
    },
    {
      name: "Asesoría Profesional",
      sessions: "5 sesiones / 2 meses",
      price: "$6,000 MXN",
    },
    {
      name: "Asesoría Empresarial",
      sessions: "8 sesiones / 3 meses",
      price: "$9,000 MXN",
    },
  ];

  return (
    <section
      id="servicios"
      className="bg-white text-[#1A1A1A] dark:bg-[#0B0E11] dark:text-white py-24"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Encabezado */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-[#00C9D1] uppercase tracking-wide">
            Planes y Precios
          </p>
          <h2 className="mt-2 text-3xl font-bold sm:text-4xl">
            Soluciones flexibles para empresas de todos los tamaños
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-[#3A3A3A] dark:text-white/70">
            Precios claros, soporte empresarial y un retorno de inversión demostrable.
          </p>
        </div>

        {/* PLANES */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`rounded-2xl p-8 border transition hover:shadow-xl ${
                plan.popular
                  ? "border-[#00C9D1] shadow-lg shadow-[#00C9D1]/20 bg-white dark:bg-[#10151C]"
                  : "border-white/10 bg-white/5 dark:bg-[#0F1218]"
              }`}
            >
              {plan.popular && (
                <span className="inline-block mb-4 px-3 py-1 text-xs font-semibold rounded-full bg-gradient-to-r from-[#007B9E] to-[#00C9D1] text-white">
                  Más Popular
                </span>
              )}

              <h3 className="text-xl font-bold">{plan.name}</h3>
              <p className="mt-1 text-sm text-[#6A6A6A] dark:text-white/60">
                {plan.ideal}
              </p>

              {/* Price */}
              {plan.priceMXN ? (
                <p className="mt-6 text-4xl font-bold">
                  ${plan.priceMXN}
                  <span className="text-base font-medium text-[#6A6A6A] dark:text-white/60">
                    {" "}
                    MXN / mes
                  </span>
                </p>
              ) : (
                <p className="mt-6 text-2xl font-semibold text-[#00C9D1]">
                  Cotización personalizada
                </p>
              )}

              <p className="mt-3 text-sm text-[#6A6A6A] dark:text-white/70">
                {plan.description}
              </p>

              {/* Features */}
              <ul className="mt-6 space-y-3 text-sm">
                {plan.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckIcon />
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="#contacto"
                className={`mt-8 block w-full text-center rounded-xl py-3 font-semibold transition ${
                  plan.popular
                    ? "bg-gradient-to-r from-[#007B9E] to-[#00C9D1] text-white hover:opacity-95"
                    : "border border-[#00C9D1]/40 text-[#00C9D1] hover:bg-[#00C9D1]/10"
                }`}
              >
                {plan.priceMXN ? "Comenzar ahora" : "Solicitar cotización"}
              </a>
            </div>
          ))}
        </div>

        {/* Banner */}
        <div className="mt-20 rounded-2xl bg-gradient-to-r from-[#007B9E] to-[#00C9D1] p-8 text-center text-white">
          <h3 className="text-2xl font-semibold">Invierta en Productividad y Ahorro</h3>
          <p className="mt-3 text-white/90 max-w-3xl mx-auto">
            Nuestros planes reducen costos operativos hasta un <strong>30%</strong> gracias a la
            optimización cloud, automatización y administración inteligente en AWS.
          </p>
        </div>

        {/* Asesorías */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-center">Asesorías Especializadas en Tecnología y AWS</h3>
          <p className="mt-3 text-center text-[#6A6A6A] dark:text-white/60 max-w-2xl mx-auto">
            Guía profesional para mejorar tus redes, servidores y entornos en la nube.
          </p>

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 mt-12">
            {consultant.map((c, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-white/10 bg-white/5 dark:bg-[#10151C] p-8 hover:shadow-xl transition"
              >
                <h4 className="text-lg font-bold">{c.name}</h4>
                <p className="mt-1 text-sm text-[#6A6A6A] dark:text-white/60">{c.sessions}</p>
                <p className="mt-4 text-xl font-bold text-[#00C9D1]">{c.price}</p>

                <a
                  href="#contacto"
                  className="mt-6 block w-full text-center rounded-xl py-3 font-semibold border border-[#00C9D1]/40 text-[#00C9D1] hover:bg-[#00C9D1]/10 transition"
                >
                  Contratar Asesoría
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Frase final */}
        <p className="mt-20 text-center text-lg italic text-[#007B9E] dark:text-[#00C9D1] max-w-3xl mx-auto">
          “Maximiza el potencial de tu infraestructura: con nuestras asesorías, tu red y tus servicios
          en la nube trabajarán por ti, no contra ti.”
        </p>
      </div>
    </section>
  );
}

function CheckIcon() {
  return (
    <svg
      className="h-5 w-5 text-[#00C9D1] flex-none"
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <path
        fillRule="evenodd"
        d="M16.704 5.29a1 1 0 0 1 .006 1.414l-7.2 7.3a1 1 0 0 1-1.43.012L3.3 9.52A1 1 0 1 1 4.7 8.08l3.07 3.02 6.49-6.58a1 1 0 0 1 1.444.77z"
        clipRule="evenodd"
      />
    </svg>
  );
}

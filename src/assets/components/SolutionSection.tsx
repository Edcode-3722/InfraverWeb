'use client';

import {
  WifiIcon,
  ShieldCheckIcon,
  ServerStackIcon,
  WrenchScrewdriverIcon,
} from '@heroicons/react/24/outline';

const features = [
  {
    name: 'Infraestructura de Redes',
    description:
      'Diseñamos, cableamos e instalamos redes estructuradas, fibra óptica y Wi-Fi empresarial con el más alto desempeño.',
    icon: WifiIcon,
  },
  {
    name: 'Ciberseguridad y Monitoreo',
    description:
      'Protección avanzada de redes, detección de amenazas y respaldos automatizados para mantener tus operaciones seguras.',
    icon: ShieldCheckIcon,
  },
  {
    name: 'Servidores y Centros de Datos',
    description:
      'Configuramos y mantenemos servidores locales y en la nube, garantizando alta disponibilidad y escalabilidad.',
    icon: ServerStackIcon,
  },
  {
    name: 'Soporte Técnico Integral',
    description:
      'Asesoría, mantenimiento preventivo y correctivo con atención rápida y personalizada en toda la región de Veracruz.',
    icon: WrenchScrewdriverIcon,
  },
];

export default function SolutionsSection() {
  return (
    <section id="soluciones" className="overflow-hidden bg-[#1A1A1A] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-16">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          {/* Texto / lista */}
          <div className="lg:pt-4 lg:pr-8">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold text-[#00C9D1] uppercase tracking-wider">
                Soluciones Infraver
              </h2>
              <p className="mt-2 text-4xl font-bold tracking-tight text-[#F4F7F9] sm:text-5xl">
                Conectividad y tecnología confiable
              </p>
              <p className="mt-6 text-lg text-gray-300">
                Integramos infraestructura, redes y seguridad digital para impulsar empresas, instituciones y hogares en todo Veracruz.
              </p>

              <dl className="mt-10 max-w-xl space-y-8 text-base text-gray-400 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-10">
                    <dt className="inline font-semibold text-[#00C9D1]">
                      <feature.icon
                        aria-hidden="true"
                        className="absolute top-1 left-1 h-6 w-6 text-[#6BEA8C]"
                      />
                      {feature.name}
                    </dt>{' '}
                    <dd className="block text-gray-300 mt-1">
                      {feature.description}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>

          {/* Imagen lateral */}
          <div className="flex justify-center items-center">
            <img
              alt="Infraestructura de red Infraver"
              src="/assets/infraestructura-demo.png" // 🔹 pon aquí una imagen ilustrativa o técnica
              width={2432}
              height={1442}
              className="w-full max-w-xl rounded-xl shadow-lg ring-1 ring-[#00C9D1]/20"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

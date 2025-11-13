// src/assets/components/TestimonialsSection.tsx

export default function TestimonialsSection() {
  const testimonials = [
    {
      text:
        "Infraver optimizó toda nuestra infraestructura en AWS. Pasamos de constantes caídas a un sistema estable, seguro y con monitoreo real. El rendimiento mejoró más del 40% en solo semanas.",
      name: "Mariana Soto",
      role: "CEO — Grupo Sotomax",
      img: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      text:
        "Nuestra red corporativa estaba saturada y mal segmentada. El equipo de Infraver diseñó una arquitectura profesional y redujeron nuestro tiempo de carga en aplicaciones internas hasta un 55%.",
      name: "Carlos Jiménez",
      role: "Director de TI — Axion Logistics",
      img: "https://randomuser.me/api/portraits/men/55.jpg",
    },
    {
      text:
        "Lo que más destaco es su claridad en costos y la administración completa de nuestros servidores en AWS. Por primera vez tenemos visibilidad real de gastos y seguridad Zero Trust.",
      name: "Laura Paredes",
      role: "CTO — FinanzaPlus Technologies",
      img: "https://randomuser.me/api/portraits/women/68.jpg",
    },
    {
      text:
        "Su servicio de monitoreo 24/7 y respuesta ante incidentes nos ha salvado múltiples veces. La nube ahora es una ventaja estratégica para nosotros, no un dolor de cabeza.",
      name: "Daniel Herrera",
      role: "Jefe de Infraestructura — Grupo Albor",
      img: "https://randomuser.me/api/portraits/men/33.jpg",
    },
    {
      text:
        "Migramos nuestro ERP a AWS con Infraver. Lo hicieron sin downtime y con una documentación impecable. Profesionalismo total, una empresa que realmente sabe lo que hace.",
      name: "Evelyn Casas",
      role: "COO — Soluciones Comerciales del Golfo",
      img: "https://randomuser.me/api/portraits/women/22.jpg",
    },
    {
      text:
        "Después de comparar varios proveedores, elegimos Infraver por su enfoque técnico y su soporte local. Hoy toda nuestra red está estandarizada y segura.",
      name: "Roberto Palacios",
      role: "Gerente de Sistemas — AgroVerde MX",
      img: "https://randomuser.me/api/portraits/men/41.jpg",
    }
  ];

  return (
    <section
      id="testimonios"
      className="relative overflow-hidden bg-white text-[#1A1A1A] dark:bg-[#0B0E11] dark:text-white py-24"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B0E11] via-[#101522] to-transparent opacity-70 pointer-events-none"></div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <p className="text-center text-sm font-semibold text-[#00C9D1] uppercase tracking-wide">
          Testimonios
        </p>

        <h2 className="mt-3 text-center text-3xl font-bold sm:text-4xl">
          Empresas que confían en nosotros
        </h2>

        <p className="mt-4 mx-auto max-w-2xl text-center text-lg text-[#6A6A6A] dark:text-white/60">
          Clientes de distintos sectores que han transformado su operación con infraestructura en la nube,
          redes optimizadas y seguridad empresarial administrada por Infraver.
        </p>

        {/* Grid de testimonios */}
        <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="rounded-3xl p-6 bg-white/5 backdrop-blur-lg border border-white/10 dark:bg-[#0F1218]/70 hover:bg-[#10141c] transition shadow-lg shadow-black/10"
            >
              <p className="text-sm leading-relaxed text-white/90 dark:text-white">
                “{t.text}”
              </p>

              <div className="mt-6 flex items-center gap-3">
                <img
                  src={t.img}
                  className="h-12 w-12 rounded-full ring-2 ring-[#00C9D1]/40 object-cover"
                  alt={t.name}
                />
                <div>
                  <p className="font-semibold">{t.name}</p>
                  <p className="text-xs text-[#00C9D1]">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

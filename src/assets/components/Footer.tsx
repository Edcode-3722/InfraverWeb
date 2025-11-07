'use client';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0F0F0F] text-gray-300 py-12 px-6 lg:px-16 border-t border-[#00C9D1]/10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Logo y descripción */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <img
              src="/assets/logo-solo.svg" // 🔹 isotipo (pequeño)
              alt="Infraver logo"
              className="h-8 w-auto"
            />
            <span className="text-xl font-semibold text-[#00C9D1]">Infraver</span>
          </div>
          <p className="text-sm text-gray-400 leading-relaxed">
            Empresa veracruzana especializada en soluciones de redes, infraestructura y
            conectividad tecnológica para hogares, empresas e instituciones.
          </p>
        </div>

        {/* Enlaces rápidos */}
        <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row gap-6 md:justify-center">
          <nav className="space-y-3">
            <h4 className="text-sm font-semibold text-[#00C9D1] uppercase tracking-wide">
              Navegación
            </h4>
            <ul className="space-y-2">
              <li><a href="#inicio" className="hover:text-[#6BEA8C] transition">Inicio</a></li>
              <li><a href="#soluciones" className="hover:text-[#6BEA8C] transition">Soluciones</a></li>
              <li><a href="#nosotros" className="hover:text-[#6BEA8C] transition">Nosotros</a></li>
              <li><a href="#contacto" className="hover:text-[#6BEA8C] transition">Contacto</a></li>
            </ul>
          </nav>

          <nav className="space-y-3">
            <h4 className="text-sm font-semibold text-[#00C9D1] uppercase tracking-wide">
              Contacto
            </h4>
            <ul className="space-y-2">
              <li><a href="mailto:contacto@infraver.com" className="hover:text-[#6BEA8C] transition">contacto@infraver.com</a></li>
              <li><a href="tel:+522290000000" className="hover:text-[#6BEA8C] transition">(229) 000-0000</a></li>
              <li><a href="https://wa.me/522299999999" target="_blank" rel="noopener noreferrer" className="hover:text-[#6BEA8C] transition">WhatsApp</a></li>
            </ul>
          </nav>
        </div>

        {/* Derechos reservados */}
        <div className="flex flex-col items-start md:items-end justify-between text-sm text-gray-500">
          <p className="mb-2">© {year} Infraver. Todos los derechos reservados.</p>
          <p>Desarrollado con ❤️ en Veracruz.</p>
        </div>
      </div>
    </footer>
  );
}

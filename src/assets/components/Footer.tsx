export default function Footer() {
  return (
    <footer className="w-full bg-[#0B0E11] text-white pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">

        {/* Brand */}
        <div className="col-span-1">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-[#007B9E] to-[#00C9D1] flex items-center justify-center">
              <svg
                className="h-6 w-6 text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 2l6 4v4c0 5-3 8-6 8S4 15 4 10V6l6-4z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold tracking-wide">INFRAVER</h3>
          </div>

          <p className="text-white/60 leading-relaxed text-sm max-w-xs">
            Potenciamos su negocio con redes seguras, ciberseguridad avanzada y soluciones cloud en AWS y Azure.
          </p>
        </div>

        {/* Nav */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Navegación</h4>
          <ul className="space-y-2 text-white/60 text-sm">
            <li><a href="/" className="hover:text-[#00C9D1]">Inicio</a></li>
            <li><a href="/servicios" className="hover:text-[#00C9D1]">Servicios</a></li>
            <li><a href="/contacto" className="hover:text-[#00C9D1]">Contacto</a></li>
            <li><a href="/nosotros" className="hover:text-[#00C9D1]">Nosotros</a></li>
          </ul>
        </div>

        {/* Servicios */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Servicios</h4>
          <ul className="space-y-2 text-white/60 text-sm">
            <li>Soluciones en la Nube (AWS)</li>
            <li>Soluciones en la Nube (Azure)</li>
            <li>Ciberseguridad Empresarial</li>
            <li>Administración de Redes</li>
            <li>Consultoría de TI</li>
          </ul>
        </div>

        {/* Contacto */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Contacto</h4>
          <ul className="space-y-3 text-white/60 text-sm">
            <li className="flex items-center gap-3">
              <span>📧</span> info@infraver.com
            </li>
            <li className="flex items-center gap-3">
              <span>📞</span> +52 (229) 418-8534
            </li>
            <li className="flex items-center gap-3">
              <span>📍</span> Veracruz, México
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 mt-12 pt-6 text-center text-white/40 text-xs">
        © 2025 INFRAVER CLOUD & NETWORK SOLUTIONS. Todos los derechos reservados.
      </div>
    </footer>
  );
}

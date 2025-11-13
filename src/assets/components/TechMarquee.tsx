// src/assets/components/TechMarquee.tsx
import aws from '../brands/aws.png';
import azure from '../brands/azure.png';

export default function TechMarquee() {
  return (
    <section
      id="marcas"
      className="border-t border-white/10 bg-[#0B0E11] text-white py-14"
    >
      <div className="mx-auto max-w-5xl px-6 text-center">
        
        {/* TÍTULO */}
        <h2 className="text-lg font-semibold tracking-wide text-white/80 mb-8">
          Certificados y Especializados en las Plataformas Cloud Líderes
        </h2>

        {/* LOGOS CENTRADOS */}
        <div className="flex items-center justify-center gap-16">
          <img
            src={aws}
            alt="Amazon Web Services"
            className="h-20 w-auto object-contain brightness-200 opacity-90 hover:opacity-100 transition"
          />

          <img
            src={azure}
            alt="Microsoft Azure"
            className="h-20 w-auto object-contain brightness-200 opacity-90 hover:opacity-100 transition"
          />
        </div>

        {/* SUBTEXTO */}
        <p className="mt-6 text-xs text-white/50">
          Infraestructuras administradas con estándares internacionales de seguridad y mejores prácticas.
        </p>
      </div>
    </section>
  );
}

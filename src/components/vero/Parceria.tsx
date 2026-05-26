import { Award, Ruler, BadgeCheck, CheckCircle } from "lucide-react";
import heroImage from "@/assets/hero-villa.jpg";

const technicalSpecs = [
  "Produtora do próprio perfil",
  "Produção verticalizada",
  "Garantia de 10 anos dos perfis",
  "Rigor técnico conforme Normas ABNT",
  "Instalação por equipe especializada",
  "Certificações de Qualidade e Segurança",
];

const features = [
  { icon: Award, label: "Maior fábrica de Esquadrias de PVC da América Latina" },
  { icon: Ruler, label: "Instalação técnica certificada" },
  { icon: BadgeCheck, label: "PBQP-H exclusivo no RS" },
];

export function Parceria() {
  return (
    <section
      id="parceria"
      className="relative w-full scroll-mt-20 py-12"
      style={{ backgroundColor: "var(--vero-bg)", color: "var(--vero-ink)" }}
    >
      {/* Top fade — dissolves the seam between hero image and this section */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-0 right-0 -top-32 h-32"
        style={{
          background:
            "linear-gradient(to bottom, rgba(248,245,240,0) 0%, rgba(248,245,240,0.35) 45%, rgba(248,245,240,0.75) 75%, var(--vero-bg) 100%)",
        }}
      />
      <div className="mx-auto max-w-[1680px] px-6 sm:px-10 lg:px-16 xl:px-20 2xl:px-28">
        <div className="grid grid-cols-1 lg:grid-cols-[54fr_46fr] gap-10 items-center">
          {/* Left content */}
          <div className="w-full">
            <div className="flex items-center gap-3 mb-8">
              <span className="block h-px w-8" style={{ backgroundColor: "var(--vero-gold)" }} />
              <span
                className="text-[11px] tracking-[0.22em] uppercase"
                style={{ color: "var(--vero-muted)" }}
              >
                A parceria
              </span>
            </div>

            <h2
              className="text-[44px] sm:text-[56px] lg:text-[64px] leading-[1.02] tracking-tight font-normal"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Vero <span style={{ color: "var(--vero-gold-deep)" }}>×</span>{" "}
              <em className="italic font-normal" style={{ color: "var(--vero-gold-deep)" }}>
                Bazze PVC
              </em>
            </h2>

            <p
              className="mt-7 text-[15px] leading-relaxed font-light max-w-full"
              style={{ color: "var(--vero-muted)" }}
            >
              Como parceira oficial da Bazze PVC em Santa Maria e região, a Vero entrega o
              portfólio completo da maior fábrica de esquadrias de PVC da América Latina,
              com atendimento dedicado, projeto sob medida e instalação executada por equipe
              própria.
            </p>

            <p
              className="mt-5 text-[14px] leading-relaxed font-light max-w-full"
              style={{ color: "var(--vero-muted)" }}
            >
              Mais de 22 mil m² de parque fabril verticalizado em Portão/RS, certificação
              PBQP-H exclusiva no RS e aderência total às normas NBR15575, NBR10821 e
              NBR16851. Garantia de processo industrial rigoroso e produto com procedência comprovada.
            </p>

            <div className="mt-8 pt-8 border-t border-[#E2DDD5] w-full">
              <div className="flex flex-row justify-between w-full">
                {features.map(({ icon: Icon, label }) => (
                  <div key={label} className="flex flex-col items-center text-center gap-3 max-w-[160px]">
                    <Icon
                      size={22}
                      strokeWidth={1.5}
                      style={{ color: "var(--vero-gold)" }}
                    />
                    <span
                      className="text-[12px] font-normal leading-tight"
                      style={{ color: "#6A6A66", fontFamily: "var(--font-sans)" }}
                    >
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right video — 16:9 aspect ratio */}
          <div className="relative w-full mx-auto aspect-video overflow-hidden rounded-[12px]">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            >
              <source
                src="https://res.cloudinary.com/dhpcre0kx/video/upload/v1779798457/J%C3%A1_viu_como_funciona_a_nossa_f%C3%A1brica_Somos_a_maior_produtora_de_esquadria_de_PVC_da_Am%C3%A9rica_La_zghgmo.mp4"
                type="video/mp4"
              />
            </video>
          </div>
        </div>
      </div>
    </section>
  );
}
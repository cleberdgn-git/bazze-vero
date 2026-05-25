import { Award, Ruler, BadgeCheck } from "lucide-react";
import heroImage from "@/assets/hero-villa.jpg";

const features = [
  { icon: Award, label: "Maior fábrica de Esquadrias de PVC da América Latina" },
  { icon: Ruler, label: "Instalação técnica certificada" },
  { icon: BadgeCheck, label: "PBQP-H exclusivo no RS" },
];

export function Parceria() {
  return (
    <section
      id="parceria"
      className="relative w-full py-12 lg:py-20"
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

            <div className="mt-10 flex flex-col gap-[10px] w-full">
              {features.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="group flex flex-row items-center gap-3 rounded-[12px] border bg-[#F0EBE3] border-[#E2DDD5] py-4 px-5 h-16 transition-all duration-300 ease-out hover:-translate-y-1 hover:bg-[#E8E0D4] hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)]"
                >
                  <span
                    className="flex shrink-0 items-center justify-center rounded-full"
                    style={{ width: 40, height: 40, backgroundColor: "#E8E0D4" }}
                  >
                    <Icon
                      size={20}
                      strokeWidth={1.4}
                      style={{ color: "var(--vero-gold-deep)" }}
                    />
                  </span>
                  <span
                    className="text-[13px] font-medium leading-snug"
                    style={{ color: "#3A3A38", letterSpacing: "0.5px" }}
                  >
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right video — 3:4 aspect ratio */}
          <div className="relative w-full mx-auto aspect-[3/4] overflow-hidden rounded-[12px]">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            >
              <source
                src="https://res.cloudinary.com/dhpcre0kx/video/upload/v1779653880/202605241652_rpsnm3.mp4"
                type="video/mp4"
              />
            </video>
          </div>
        </div>
      </div>
    </section>
  );
}
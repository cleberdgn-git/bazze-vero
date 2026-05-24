import { Award, Ruler, BadgeCheck } from "lucide-react";
import heroImage from "@/assets/hero-villa.jpg";

const features = [
  { icon: Award, label: "Maior fábrica PVC da América Latina" },
  { icon: Ruler, label: "Projeto e instalação própria" },
  { icon: BadgeCheck, label: "PBQP-H exclusivo no RS" },
];

export function Parceria() {
  return (
    <section
      id="parceria"
      className="relative w-full py-24 lg:py-32"
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
      <div className="mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left content */}
          <div className="max-w-[520px]">
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
              className="text-[36px] sm:text-[42px] leading-[1.05] tracking-tight font-normal"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Vero <span style={{ color: "var(--vero-gold-deep)" }}>×</span> Bazze PVC
            </h2>

            <p
              className="mt-7 text-[15px] leading-relaxed font-light max-w-[420px]"
              style={{ color: "var(--vero-muted)" }}
            >
              Como parceira oficial da Bazze PVC em Santa Maria e região, a Vero entrega o
              portfólio completo da maior fábrica de esquadrias de PVC da América Latina —
              com atendimento dedicado, projeto sob medida e instalação executada por equipe
              própria.
            </p>

            <p
              className="mt-5 text-[14px] leading-relaxed font-light max-w-[420px]"
              style={{ color: "var(--vero-muted)" }}
            >
              Mais de 22 mil m² de parque fabril verticalizado em Portão/RS, certificação
              PBQP-H exclusiva no RS e aderência total às normas NBR15575, NBR10821 e
              NBR16851.
            </p>

            <ul
              className="mt-10 pt-8 border-t grid grid-cols-1 sm:grid-cols-3 gap-6"
              style={{ borderColor: "rgba(26,26,24,0.12)" }}
            >
              {features.map(({ icon: Icon, label }) => (
                <li key={label} className="flex flex-col gap-3">
                  <Icon
                    size={22}
                    strokeWidth={1.4}
                    style={{ color: "var(--vero-gold-deep)" }}
                  />
                  <span
                    className="text-[12px] leading-snug tracking-[0.04em]"
                    style={{ color: "var(--vero-ink)" }}
                  >
                    {label}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right image */}
          <div className="relative w-full h-[460px] lg:h-[620px] overflow-hidden rounded-[12px]">
            <img
              src={heroImage}
              alt="Ambiente de alto padrão com esquadrias Vero · Bazze PVC"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
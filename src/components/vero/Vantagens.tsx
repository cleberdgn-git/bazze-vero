import { Wind, Shield, BadgeCheck, Ruler } from "lucide-react";

const vantagens = [
  {
    icon: Wind,
    titulo: "Conforto Termoacústico",
    texto: (
      <>
        Vedação superior e vidros duplos.
        <br />
        Silêncio, conforto térmico e economia de climatização.
      </>
    ),
  },
  {
    icon: Shield,
    titulo: "Durabilidade Absoluta",
    texto:
      "Não amarela, não propaga fogo, não pede pintura. Manutenção mínima por décadas.",
  },
  {
    icon: BadgeCheck,
    titulo: "Certificação PBQP-H",
    texto:
      "Únicas qualificadas no PBQP-H do RS. Conformidade com NBR15575, NBR10821, NBR16851.",
  },
  {
    icon: Ruler,
    titulo: "Sob Medida Total",
    texto:
      "Cada vão projetado individualmente — tipologias, ferragens e cores a serviço do projeto.",
  },
];

export function Vantagens() {
  return (
    <section
      id="vantagens"
      className="relative w-full py-24"
      style={{ backgroundColor: "var(--vero-bg)", color: "var(--vero-ink)" }}
    >
      <div className="mx-auto max-w-[1680px] px-6 sm:px-10 lg:px-16 xl:px-20 2xl:px-28">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="block h-px w-8" style={{ backgroundColor: "var(--vero-gold)" }} />
            <span
              className="text-[11px] tracking-[0.22em] uppercase"
              style={{ color: "var(--vero-muted)" }}
            >
              O que oferecemos
            </span>
            <span className="block h-px w-8" style={{ backgroundColor: "var(--vero-gold)" }} />
          </div>

          <h2
            className="text-[36px] sm:text-[42px] leading-[1.1] tracking-tight font-normal"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Todas as vantagens
          </h2>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {vantagens.map(({ icon: Icon, titulo, texto }) => (
            <div
              key={titulo}
              className="flex flex-col items-center text-center pt-8"
              style={{ borderTop: "1px solid #E2DDD5" }}
            >
              <Icon
                size={28}
                strokeWidth={1.4}
                style={{ color: "#9A8A72" }}
              />
              <h3
                className="mt-4 text-[14px] font-semibold leading-snug"
                style={{
                  color: "#1A1A18",
                  letterSpacing: "0.5px",
                  fontFamily: "var(--font-sans)",
                }}
              >
                {titulo}
              </h3>
              <p
                className="mt-2 text-[13px] font-light leading-[1.65]"
                style={{ color: "#6A6A66", fontFamily: "var(--font-sans)" }}
              >
                {texto}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

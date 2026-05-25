import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

/*
  SUBSTITUIR IMAGENS: troque as URLs pelos arquivos reais de cada obra.
*/
const obras = [
  {
    /* substituir: foto-obra-01.jpg */
    imagem: "",
    titulo: "Residência Alphaville",
    subtitulo: "Janelas Lift & Slide",
  },
  {
    /* substituir: foto-obra-02.jpg */
    imagem: "",
    titulo: "Casa Pôr do Sol",
    subtitulo: "Portas de correr panorâmica",
  },
  {
    /* substituir: foto-obra-03.jpg */
    imagem: "",
    titulo: "Suíte Master",
    subtitulo: "Porta-balcão",
  },
  {
    /* substituir: foto-obra-04.jpg */
    imagem: "",
    titulo: "Villa Belvedere",
    subtitulo: "Maxim-ar + Oscilo-batente",
  },
  {
    /* substituir: foto-obra-05.jpg */
    imagem: "",
    titulo: "Residência Serrana",
    subtitulo: "bwood+ Ripado",
  },
  {
    /* substituir: foto-obra-06.jpg */
    imagem: "",
    titulo: "Edifício Vivace",
    subtitulo: "Esquadrias Linha Europa",
  },
  {
    /* substituir: foto-obra-07.jpg */
    imagem: "",
    titulo: "Casa Noturna",
    subtitulo: "Correr 4 folhas",
  },
];

export function Obras() {
  const [active, setActive] = useState(0);
  const total = obras.length;

  const next = () => setActive((p) => (p + 1) % total);
  const prev = () => setActive((p) => (p - 1 + total) % total);

  const getOffset = (i: number) => {
    let diff = i - active;
    if (diff > total / 2) diff -= total;
    if (diff < -total / 2) diff += total;
    return diff;
  };

  const styleFor = (offset: number): React.CSSProperties => {
    const abs = Math.abs(offset);
    let scale = 1;
    let rotateY = 0;
    let opacity = 1;
    let translateX = 0;
    let zIndex = 50;

    if (offset === 0) {
      scale = 1;
      rotateY = 0;
      opacity = 1;
      translateX = 0;
      zIndex = 50;
    } else if (abs === 1) {
      scale = 0.85;
      rotateY = offset > 0 ? -25 : 25;
      opacity = 0.75;
      translateX = offset * 220;
      zIndex = 40;
    } else if (abs === 2) {
      scale = 0.7;
      rotateY = offset > 0 ? -40 : 40;
      opacity = 0.5;
      translateX = offset * 320;
      zIndex = 30;
    } else {
      scale = 0.5;
      rotateY = offset > 0 ? -50 : 50;
      opacity = 0;
      translateX = offset * 380;
      zIndex = 10;
    }

    return {
      transform: `translate(-50%, -50%) translateX(${translateX}px) scale(${scale}) rotateY(${rotateY}deg)`,
      opacity,
      zIndex,
      transition: "all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
    };
  };

  return (
    <section
      id="obras"
      className="relative w-full scroll-mt-20 py-24"
      style={{ backgroundColor: "var(--vero-bg)", color: "var(--vero-ink)" }}
    >
      <div className="mx-auto max-w-[1680px] px-6 sm:px-10 lg:px-16 xl:px-20 2xl:px-28">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-3 mb-6">
            <span
              className="block h-px w-8"
              style={{ backgroundColor: "var(--vero-gold)" }}
            />
            <span
              className="text-[11px] tracking-[0.22em] uppercase"
              style={{ color: "var(--vero-muted)" }}
            >
              Portfólio
            </span>
            <span
              className="block h-px w-8"
              style={{ backgroundColor: "var(--vero-gold)" }}
            />
          </div>

          <h2
            className="text-[36px] sm:text-[48px] leading-[1.1] tracking-tight font-normal"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Nossas{" "}
            <em className="italic font-normal" style={{ color: "#7A6A54" }}>
              obras
            </em>
          </h2>
        </div>

        {/* Carrossel */}
        <div className="relative">
          <div
            className="relative mx-auto h-[460px] w-full max-w-[1100px]"
            style={{ perspective: "1200px" }}
          >
            {obras.map((obra, i) => {
              const offset = getOffset(i);
              const isCenter = offset === 0;
              return (
                <button
                  key={i}
                  type="button"
                  onClick={() => setActive(i)}
                  aria-label={obra.titulo}
                  className="group absolute left-1/2 top-1/2 cursor-pointer rounded-[16px] overflow-hidden border-0 p-0"
                  style={{
                    width: 320,
                    height: 420,
                    backgroundColor: "#D8D0C4",
                    boxShadow: isCenter
                      ? "0 24px 48px rgba(0,0,0,0.15)"
                      : "0 12px 24px rgba(0,0,0,0.08)",
                    ...styleFor(offset),
                  }}
                >
                  {obra.imagem ? (
                    <img
                      src={obra.imagem}
                      alt={obra.titulo}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  ) : (
                    <div
                      className="h-full w-full"
                      style={{ backgroundColor: "#D8D0C4" }}
                    />
                  )}

                  {/* Overlay (apenas no central, no hover) */}
                  {isCenter && (
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out flex flex-col justify-end"
                      style={{
                        background:
                          "linear-gradient(to bottom, rgba(0,0,0,0) 50%, rgba(0,0,0,0.55) 100%)",
                      }}
                    >
                      <div className="p-6 text-left">
                        <h3
                          className="text-[20px] leading-snug font-normal text-white"
                          style={{ fontFamily: "var(--font-serif)" }}
                        >
                          {obra.titulo}
                        </h3>
                        <p
                          className="mt-1 text-[12px] font-light"
                          style={{
                            color: "#D4C5B0",
                            fontFamily: "var(--font-sans)",
                          }}
                        >
                          {obra.subtitulo}
                        </p>
                      </div>
                    </div>
                  )}
                </button>
              );
            })}
          </div>

          {/* Setas */}
          <button
            type="button"
            onClick={prev}
            aria-label="Anterior"
            className="absolute left-2 top-1/2 -translate-y-1/2 z-[60] p-2 transition-colors duration-200"
            style={{ color: "#9A8A72" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#1A1A18")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#9A8A72")}
          >
            <ChevronLeft size={24} strokeWidth={1.5} />
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Próximo"
            className="absolute right-2 top-1/2 -translate-y-1/2 z-[60] p-2 transition-colors duration-200"
            style={{ color: "#9A8A72" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#1A1A18")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#9A8A72")}
          >
            <ChevronRight size={24} strokeWidth={1.5} />
          </button>
        </div>

        {/* Dots */}
        <div className="mt-10 flex items-center justify-center gap-2">
          {obras.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`Ir para slide ${i + 1}`}
              className="rounded-full transition-colors duration-200"
              style={{
                width: 6,
                height: 6,
                backgroundColor: i === active ? "#9A8A72" : "#D4C5B0",
              }}
            />
          ))}
        </div>

        {/* Link */}
        <div className="mt-12 flex justify-center">
          <a
            href="#"
            className="inline-block hover:underline"
            style={{
              color: "#9A8A72",
              fontFamily: "var(--font-sans)",
              fontSize: 13,
              letterSpacing: "1px",
            }}
          >
            Ver galeria completa →
          </a>
        </div>
      </div>
    </section>
  );
}

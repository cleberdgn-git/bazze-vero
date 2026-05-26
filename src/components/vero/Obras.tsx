import { useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

const obras = [
  {
    imagem: "https://res.cloudinary.com/dhpcre0kx/image/upload/v1779804164/Corte_Arq_FINAISCasa_Vale_da_Lua_-19_jcyzwz.jpg",
  },
  {
    imagem: "https://res.cloudinary.com/dhpcre0kx/image/upload/v1779804160/SC_-_PRETO_wxsbgh.jpg",
  },
  {
    imagem: "https://res.cloudinary.com/dhpcre0kx/image/upload/v1779804155/IMG_0251_1_c6eip6.jpg",
  },
  {
    imagem: "https://res.cloudinary.com/dhpcre0kx/image/upload/v1779804154/sr_20221215_0370-hdr_pbhcch.jpg",
  },
  {
    imagem: "https://res.cloudinary.com/dhpcre0kx/image/upload/v1779804154/sr_20221215_0367-hdr_e13hev.jpg",
  },
  {
    imagem: "https://res.cloudinary.com/dhpcre0kx/image/upload/v1779804153/IMG_2627_pdoun0.jpg",
  },
  {
    imagem: "https://res.cloudinary.com/dhpcre0kx/image/upload/v1779804151/124124954_754027895324854_5361963868728686939_n_af1bt3.jpg",
  },
  {
    imagem: "https://res.cloudinary.com/dhpcre0kx/image/upload/v1779804150/124103151_2743412472563602_2133592807727638736_n_liuiso.jpg",
  },
];

export function Obras() {
  const [active, setActive] = useState(0);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
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
      opacity = 0.85;
      translateX = offset * 150;
      zIndex = 40;
    } else if (abs === 2) {
      scale = 0.7;
      rotateY = offset > 0 ? -40 : 40;
      opacity = 0.65;
      translateX = offset * 220;
      zIndex = 30;
    } else {
      scale = 0.5;
      rotateY = offset > 0 ? -50 : 50;
      opacity = 0;
      translateX = offset * 280;
      zIndex = 10;
    }

    return {
      transform: `translate(-50%, -50%) translateX(${translateX}px) scale(${scale}) rotateY(${rotateY}deg)`,
      opacity,
      zIndex,
      transition: offset === 0 
        ? "all 1.2s cubic-bezier(0.22, 1, 0.36, 1)" 
        : "all 0.9s cubic-bezier(0.4, 0, 0.2, 1)",
      transitionProperty: "transform, opacity, box-shadow, scale",
      willChange: "transform, opacity, box-shadow",
    };
  };

  return (
    <section
      id="obras"
      className="relative w-full scroll-mt-20 py-24 overflow-hidden"
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
        <div className="relative overflow-hidden">
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
                  onClick={() => isCenter ? setSelectedImage(obra.imagem) : setActive(i)}
                  aria-label="Ver obra"
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
                  <img
                    src={obra.imagem}
                    alt=""
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
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

      {/* Lightbox / Imagem em tamanho grande */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 transition-all duration-300 animate-in fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <button
            type="button"
            className="absolute right-6 top-6 text-white/70 hover:text-white transition-colors z-[110]"
            onClick={() => setSelectedImage(null)}
          >
            <X size={32} />
          </button>

          {/* Seta Anterior no Lightbox */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              const newIndex = (active - 1 + total) % total;
              setActive(newIndex);
              setSelectedImage(obras[newIndex].imagem);
            }}
            className="absolute left-6 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors z-[110] p-2"
          >
            <ChevronLeft size={48} strokeWidth={1} />
          </button>

          {/* Seta Próximo no Lightbox */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              const newIndex = (active + 1) % total;
              setActive(newIndex);
              setSelectedImage(obras[newIndex].imagem);
            }}
            className="absolute right-6 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors z-[110] p-2"
          >
            <ChevronRight size={48} strokeWidth={1} />
          </button>
          
          <div 
            className="relative max-w-6xl w-full max-h-[85vh] flex items-center justify-center animate-in zoom-in-95 duration-500"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage}
              alt="Obra em tamanho grande"
              className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl transition-all duration-500"
              key={selectedImage}
            />
          </div>
        </div>
      )}
    </section>
  );
}

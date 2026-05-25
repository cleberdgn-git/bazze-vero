import { ArrowRight } from "lucide-react";

/*
  SUBSTITUIR IMAGENS: atualize as URLs abaixo com as imagens reais de cada linha.
  Card 1 — Janelas
  Card 2 — Portas
  Card 3 — bwood+
  Card 4 — Rodapés & Ripados
*/
const produtos = [
  {
    imagem:
      "https://images.unsplash.com/photo-1507086182422-97bd7ca2413b?w=800&h=440&fit=crop",
    numero: "01",
    titulo: "Janelas",
    texto:
      "Maxim-ar, de correr, projetantes, oscilo-batentes e pivotantes em todos os perfis Bazze.",
  },
  {
    imagem:
      "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&h=440&fit=crop",
    numero: "02",
    titulo: "Portas",
    texto:
      "Porta-balcão, correr panorâmica, lift & slide e porta de abrir. Perfis esbeltos para grandes vãos.",
  },
  {
    imagem:
      "https://images.unsplash.com/photo-1618220179421-28afae546490?w=800&h=440&fit=crop",
    numero: "03",
    titulo: "bwood+",
    texto:
      "Revestimento PVC com textura de madeira. Estética natural com toda a durabilidade do PVC.",
  },
  {
    imagem:
      "https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=800&h=440&fit=crop",
    numero: "04",
    titulo: "Rodapés & Ripados",
    texto:
      "Acabamento PVC: estabilidade, resistência à umidade e instalação limpa sob medida.",
  },
];

export function Produtos() {
  return (
    <section
      id="produtos"
      className="relative w-full pt-12 pb-24"
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
              Linhas Bazze
            </span>
            <span
              className="block h-px w-8"
              style={{ backgroundColor: "var(--vero-gold)" }}
            />
          </div>

          <h2
            className="text-[36px] sm:text-[42px] leading-[1.1] tracking-tight font-normal"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Portfólio{" "}
            <em className="italic font-normal" style={{ color: "#7A6A54" }}>
              completo
            </em>
          </h2>

          <p
            className="mt-5 text-[14px] font-light leading-relaxed max-w-[520px]"
            style={{ color: "var(--vero-muted)" }}
          >
            Da especificação inicial à entrega final — projeto, fabricação
            Bazze e instalação Vero. Um único interlocutor.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {produtos.map(({ imagem, numero, titulo, texto }) => (
            <div
              key={numero}
              className="group flex flex-col overflow-hidden rounded-[12px] bg-white border border-[#E2DDD5] transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(0,0,0,0.08)]"
            >
              {/* Imagem */}
              <div className="relative h-[220px] w-full overflow-hidden rounded-t-[12px]">
                <img
                  src={imagem}
                  alt={titulo}
                  className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              {/* Conteúdo */}
              <div className="flex flex-col p-5">
                <span
                  className="text-[11px] font-normal uppercase"
                  style={{
                    color: "#9A8A72",
                    letterSpacing: "2px",
                    fontFamily: "var(--font-sans)",
                  }}
                >
                  {numero}
                </span>
                <h3
                  className="mt-2 text-[16px] font-semibold leading-snug"
                  style={{
                    color: "#1A1A18",
                    fontFamily: "var(--font-sans)",
                  }}
                >
                  {titulo}
                </h3>
                <p
                  className="mt-2 text-[13px] font-light leading-[1.6]"
                  style={{
                    color: "#6A6A66",
                    fontFamily: "var(--font-sans)",
                  }}
                >
                  {texto}
                </p>
                <div className="mt-auto pt-4 flex items-center gap-1.5">
                  <span
                    className="text-[12px] font-medium uppercase"
                    style={{
                      color: "#9A8A72",
                      letterSpacing: "1px",
                      fontFamily: "var(--font-sans)",
                    }}
                  >
                    Ver modelos
                  </span>
                  <ArrowRight
                    size={12}
                    strokeWidth={1.5}
                    className="text-[#9A8A72] group-hover:text-[#7A6A54] transition-colors duration-300"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

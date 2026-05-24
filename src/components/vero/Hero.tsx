import heroImage from "@/assets/hero-villa.jpg";

const navLinks = ["Parceria", "Produtos", "Vantagens", "Obras", "Contato"];

export function Hero() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "var(--vero-bg)", color: "var(--vero-ink)" }}>
      {/* Navbar */}
      <header
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b"
        style={{ backgroundColor: "rgba(248, 245, 240, 0.78)", borderColor: "rgba(26,26,24,0.08)" }}
      >
        <nav className="mx-auto max-w-[1400px] px-6 lg:px-10 h-16 flex items-center justify-between">
          <a href="/" className="flex items-center gap-3">
            <span
              className="grid place-items-center h-8 w-8 rounded-sm text-[13px] font-medium"
              style={{ backgroundColor: "var(--vero-ink)", color: "var(--vero-bg)", fontFamily: "var(--font-serif)" }}
            >
              V
            </span>
            <span className="text-[11px] tracking-[0.22em] uppercase font-medium">
              Vero · Bazze PVC
            </span>
          </a>

          <ul className="hidden md:flex items-center gap-9 text-[13px]" style={{ color: "var(--vero-ink)" }}>
            {navLinks.map((l) => (
              <li key={l}>
                <a href="#" className="hover:opacity-60 transition-opacity">{l}</a>
              </li>
            ))}
          </ul>

          <a
            href="#orcamento"
            className="text-[11px] tracking-[0.22em] uppercase px-4 py-2 border rounded-full hover:bg-[var(--vero-ink)] hover:text-[var(--vero-bg)] transition-colors"
            style={{ borderColor: "rgba(26,26,24,0.5)" }}
          >
            Orçamento
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section className="pt-16 min-h-screen flex">
        <div className="grid grid-cols-1 lg:grid-cols-2 w-full">
          {/* Left content */}
          <div className="order-2 lg:order-1 flex items-center px-6 sm:px-10 lg:px-16 py-14 lg:py-20">
            <div className="max-w-xl w-full">
              <div className="vero-fade-up flex items-center gap-3 mb-8" style={{ animationDelay: "0.1s" }}>
                <span className="block h-px w-8" style={{ backgroundColor: "var(--vero-gold)" }} />
                <span className="text-[11px] tracking-[0.22em] uppercase" style={{ color: "var(--vero-muted)" }}>
                  Parceira oficial Bazze PVC · Santa Maria e Região
                </span>
              </div>

              <h1
                className="vero-fade-up text-[44px] sm:text-[56px] lg:text-[68px] leading-[1.02] tracking-tight font-normal"
                style={{ fontFamily: "var(--font-serif)", animationDelay: "0.25s" }}
              >
                Esquadrias que definem a{" "}
                <em className="italic font-normal" style={{ color: "var(--vero-gold-deep)" }}>
                  arquitetura
                </em>
              </h1>

              <p
                className="vero-fade-up mt-7 text-[16px] sm:text-[17px] leading-relaxed font-light max-w-lg"
                style={{ color: "var(--vero-muted)", animationDelay: "0.4s" }}
              >
                Projetadas, fabricadas e instaladas sob medida. Alto padrão em PVC pela maior
                indústria da América Latina.
              </p>

              <div className="vero-fade-up mt-10 flex flex-wrap items-center gap-6" style={{ animationDelay: "0.55s" }}>
                <a
                  href="#orcamento"
                  className="inline-flex items-center gap-2 px-7 py-4 text-[13px] tracking-[0.18em] uppercase rounded-full transition-transform hover:-translate-y-0.5"
                  style={{ backgroundColor: "var(--vero-ink)", color: "var(--vero-bg)" }}
                >
                  Solicitar orçamento
                  <span aria-hidden>→</span>
                </a>
                <a
                  href="#obras"
                  className="inline-flex items-center gap-2 text-[13px] tracking-[0.18em] uppercase pb-1 border-b transition-opacity hover:opacity-60"
                  style={{ color: "var(--vero-ink)", borderColor: "var(--vero-ink)" }}
                >
                  Ver obras realizadas
                  <span aria-hidden>→</span>
                </a>
              </div>

              <div
                className="vero-fade-up mt-14 pt-6 border-t grid grid-cols-3 gap-4"
                style={{ borderColor: "rgba(26,26,24,0.12)", animationDelay: "0.7s" }}
              >
                {[
                  { k: "22k m²", v: "parque fabril" },
                  { k: "PBQP-H", v: "único no RS" },
                  { k: "100%", v: "sob medida" },
                ].map((s) => (
                  <div key={s.k}>
                    <div className="text-[20px] sm:text-[22px]" style={{ fontFamily: "var(--font-serif)", color: "var(--vero-ink)" }}>
                      {s.k}
                    </div>
                    <div className="text-[11px] tracking-[0.18em] uppercase mt-1" style={{ color: "var(--vero-muted)" }}>
                      {s.v}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right image */}
          <div className="order-1 lg:order-2 relative h-[40vh] lg:h-auto lg:min-h-[calc(100vh-4rem)] overflow-hidden">
            <img
              src={heroImage}
              alt="Residência de alto padrão com esquadrias Vero · Bazze PVC e vista para o mar"
              className="vero-image-in absolute inset-0 h-full w-full object-cover"
            />
            {/* Gradient bottom */}
            <div
              className="absolute inset-x-0 bottom-0 h-1/3 pointer-events-none"
              style={{ background: "linear-gradient(to top, rgba(26,26,24,0.45), transparent)" }}
            />

            {/* Top-right badge */}
            <div
              className="vero-fade-up absolute top-5 right-5 px-4 py-2 rounded-full text-[10px] tracking-[0.22em] uppercase backdrop-blur-md border"
              style={{
                backgroundColor: "rgba(248,245,240,0.7)",
                borderColor: "rgba(248,245,240,0.6)",
                color: "var(--vero-ink)",
                animationDelay: "1.1s",
              }}
            >
              PBQP-H <span style={{ color: "var(--vero-gold-deep)" }}>/</span> Único no RS
            </div>

            {/* Bottom-left badge */}
            <div
              className="vero-fade-up absolute bottom-6 left-6 flex items-center gap-2 px-4 py-2.5 rounded-full text-[12px] backdrop-blur-md border"
              style={{
                backgroundColor: "rgba(248,245,240,0.78)",
                borderColor: "rgba(248,245,240,0.6)",
                color: "var(--vero-ink)",
                animationDelay: "1.25s",
              }}
            >
              <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: "var(--vero-gold-deep)" }} />
              Projeto executado pela Vero
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
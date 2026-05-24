import heroImage from "@/assets/hero-villa.jpg";
import logoVero from "@/assets/logo-vero.png";
import logoBazze from "@/assets/logo-bazze.png";

const navLinks = ["Parceria", "Produtos", "Vantagens", "Obras", "Contato"];

export function Hero() {
  return (
    <div className="min-h-screen relative" style={{ backgroundColor: "var(--vero-bg)", color: "var(--vero-ink)" }}>
      {/* Navbar */}
      <header
        className="fixed top-0 left-0 right-0 z-50"
        style={{
          background:
            "linear-gradient(to bottom, rgba(248,245,240,0.55) 0%, rgba(248,245,240,0.25) 55%, rgba(248,245,240,0) 100%)",
        }}
      >
        <nav
          className="mx-auto max-w-[1400px] px-6 lg:px-10 h-20 flex items-center justify-between"
          style={{ filter: "drop-shadow(0 1px 1px rgba(26,26,24,0.12))" }}
        >
          <a href="/" className="flex items-center gap-5" aria-label="Vero · Bazze PVC">
            <img src={logoVero} alt="Vero — Esquadrias em PVC" className="h-9 w-auto object-contain" />
            <span
              className="block h-6 w-px"
              style={{ backgroundColor: "rgba(26,26,24,0.18)" }}
              aria-hidden
            />
            <img src={logoBazze} alt="Bazze PVC" className="h-9 w-auto object-contain" />
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
      <section className="relative min-h-screen w-full overflow-hidden">
        {/* Background image — full width, behind header */}
        <img
          src={heroImage}
          alt="Residência de alto padrão com esquadrias Vero · Bazze PVC e vista para o mar"
          className="vero-image-in absolute inset-0 h-full w-full object-cover"
        />

        {/* Horizontal fade (desktop) — very light wash so the photo keeps strong presence */}
        <div
          className="absolute inset-0 pointer-events-none hidden lg:block"
          style={{
            background:
              "linear-gradient(to right, rgba(248,245,240,0.15) 0%, rgba(248,245,240,0.05) 35%, rgba(248,245,240,0) 60%)",
          }}
        />
        {/* Vertical fade (mobile) — text sits over a clarified bottom area */}
        <div
          className="absolute inset-0 pointer-events-none lg:hidden"
          style={{
            background:
              "linear-gradient(to top, var(--vero-bg) 0%, rgba(248,245,240,0.92) 40%, rgba(248,245,240,0.4) 70%, rgba(248,245,240,0) 100%)",
          }}
        />

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-16 pt-32 lg:pt-40 pb-14 lg:pb-20 min-h-screen flex items-center">
          <div className="w-full grid grid-cols-1 lg:grid-cols-2">
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
                className="vero-fade-up mt-7 text-[16px] sm:text-[17px] leading-relaxed font-light max-w-lg whitespace-pre-line"
                style={{ color: "var(--vero-muted)", animationDelay: "0.4s" }}
              >
                Projetadas, fabricadas e instaladas sob medida.{"\n"}
                Alto padrão em PVC pela maior indústria da América Latina.
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
                  { k: "22.000 m²", v: "parque fabril" },
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
        </div>

        {/* Floating badges over the image area */}
        <div
          className="vero-fade-up hidden lg:flex absolute top-28 right-6 lg:right-10 px-4 py-2 rounded-full text-[10px] tracking-[0.22em] uppercase backdrop-blur-md border z-10"
          style={{
            backgroundColor: "rgba(248,245,240,0.7)",
            borderColor: "rgba(248,245,240,0.6)",
            color: "var(--vero-ink)",
            animationDelay: "1.1s",
          }}
        >
          PBQP-H <span style={{ color: "var(--vero-gold-deep)" }}>/</span> Único no RS
        </div>

      </section>
    </div>
  );
}
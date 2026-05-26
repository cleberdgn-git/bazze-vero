import logoVero from "@/assets/logo-vero.png";
import logoBazze from "@/assets/logo-bazze.png";
import { Instagram, Facebook, Mail, MapPin, Phone } from "lucide-react";

export function Rodape() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1A1A18] text-[#F8F5F0] pt-20 pb-10">
      <div className="mx-auto max-w-[1680px] px-6 sm:px-10 lg:px-16 xl:px-20 2xl:px-28">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-20">
          {/* Logo e Descrição */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-4 mb-8">
              <img src={logoVero} alt="Vero" className="h-8 w-auto brightness-0 invert" />
              <div className="h-6 w-px bg-white/20" />
              <img src={logoBazze} alt="Bazze" className="h-8 w-auto brightness-0 invert" />
            </div>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs font-light">
              Especialistas em esquadrias de PVC de alto padrão, unindo tecnologia alemã e design sob medida para projetos residenciais e comerciais.
            </p>
          </div>

          {/* Links Rápidos */}
          <div>
            <h4 className="text-[11px] tracking-[0.2em] uppercase text-[#9A8A72] font-medium mb-8">
              Navegação
            </h4>
            <ul className="space-y-4">
              {["Parceria", "Produtos", "Vantagens", "Obras", "Contato"].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`} 
                    className="text-sm text-white/60 hover:text-white transition-colors font-light"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="text-[11px] tracking-[0.2em] uppercase text-[#9A8A72] font-medium mb-8">
              Contato
            </h4>
            <ul className="space-y-5">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#9A8A72] mt-0.5 shrink-0" />
                <span className="text-sm text-white/60 font-light">
                  Santa Maria, RS e Região
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-[#9A8A72] mt-0.5 shrink-0" />
                <a href="tel:+5555991265390" className="text-sm text-white/60 hover:text-white transition-colors font-light">
                  (55) 99126-5390
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-[#9A8A72] mt-0.5 shrink-0" />
                <a href="mailto:contato@veroesquadrias.com.br" className="text-sm text-white/60 hover:text-white transition-colors font-light">
                  contato@veroesquadrias.com.br
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-[11px] tracking-[0.2em] uppercase text-[#9A8A72] font-medium mb-8">
              Siga-nos
            </h4>
            <div className="flex items-center gap-5">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:border-white/30 transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:border-white/30 transition-all"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
            <div className="mt-10">
              <div className="text-[11px] tracking-[0.1em] uppercase text-white/30 mb-2">
                Parceiro Oficial
              </div>
              <div className="text-[13px] text-white/50 font-serif italic">
                Bazze PVC
              </div>
            </div>
          </div>
        </div>

        {/* Rodapé Inferior */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[11px] text-white/30 tracking-wider">
            © {currentYear} VERO ESQUADRIAS. TODOS OS DIREITOS RESERVADOS.
          </p>
          <div className="flex items-center gap-8">
            <a href="#" className="text-[10px] text-white/20 hover:text-white transition-colors tracking-widest uppercase">
              Privacidade
            </a>
            <a href="#" className="text-[10px] text-white/20 hover:text-white transition-colors tracking-widest uppercase">
              Termos
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

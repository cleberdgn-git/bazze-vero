import { useState } from "react";

export const Contato = () => {
  const [formData, setFormData] = useState({
    nome: "",
    telefone: "",
    cidade: "",
    mensagem: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Olá! Meu nome é ${formData.nome}. Telefone: ${formData.telefone}. Cidade: ${formData.cidade}. Mensagem: ${formData.mensagem}`;
    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/5555991265390?text=${encodedText}`, "_blank");
  };

  return (
    <section id="contato" className="py-24 bg-[#F8F5F0] px-4 md:px-16">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* LADO ESQUERDO */}
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-[1px] w-8 bg-[#E2DDD5]"></div>
              <span className="text-[#9A8A72] font-dm text-[11px] tracking-[3px] uppercase font-medium">
                — Contato —
              </span>
            </div>

            <h2 className="text-4xl md:text-[48px] font-cormorant text-[#1A1A18] leading-tight mb-6">
              Vamos <span className="italic text-[#7A6A54]">conversar</span>
            </h2>

            <p className="text-[#6A6A66] font-dm font-light text-[15px] max-w-[380px] mb-10 leading-relaxed">
              Atendemos arquitetos, construtoras e proprietários em Santa Maria e região. Envie a planta ou agende uma visita técnica sem compromisso.
            </p>

            <div className="flex flex-col gap-6">
              <div className="pb-6 border-b border-[#E2DDD5]">
                <span className="block text-[#9A8A72] font-dm text-[10px] tracking-[2px] uppercase mb-1">
                  WHATSAPP
                </span>
                <a 
                  href="https://wa.me/5555991265390" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#1A1A18] font-dm text-[18px] hover:text-[#9A8A72] transition-colors"
                >
                  (55) 99126-5390
                </a>
              </div>

              <div className="pb-6 border-b border-[#E2DDD5]">
                <span className="block text-[#9A8A72] font-dm text-[10px] tracking-[2px] uppercase mb-1">
                  E-MAIL
                </span>
                <a 
                  href="mailto:contato@veroesquadrias.com.br" 
                  className="text-[#1A1A18] font-dm text-[18px] hover:text-[#9A8A72] transition-colors"
                >
                  contato@veroesquadrias.com.br
                </a>
              </div>

              <div>
                <span className="block text-[#9A8A72] font-dm text-[10px] tracking-[2px] uppercase mb-1">
                  ATENDIMENTO
                </span>
                <span className="text-[#1A1A18] font-dm text-[18px]">
                  Santa Maria / RS e região
                </span>
              </div>
            </div>
          </div>

          {/* LADO DIREITO - FORMULÁRIO */}
          <div className="relative">
            <div className="bg-white rounded-[16px] border border-[#E2DDD5] p-10 shadow-[0_8px_32px_rgba(0,0,0,0.06)]">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div>
                  <label className="block text-[#9A8A72] font-dm text-[10px] tracking-[1.5px] uppercase mb-1.5">
                    NOME
                  </label>
                  <input
                    type="text"
                    name="nome"
                    required
                    placeholder="Seu nome completo"
                    value={formData.nome}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-[#E2DDD5] py-2.5 text-[14px] text-[#1A1A18] font-dm focus:outline-none focus:border-[#9A8A72] transition-colors placeholder:text-[#C0B8B0]"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[#9A8A72] font-dm text-[10px] tracking-[1.5px] uppercase mb-1.5">
                      TELEFONE
                    </label>
                    <input
                      type="tel"
                      name="telefone"
                      required
                      placeholder="(00) 00000-0000"
                      value={formData.telefone}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b border-[#E2DDD5] py-2.5 text-[14px] text-[#1A1A18] font-dm focus:outline-none focus:border-[#9A8A72] transition-colors placeholder:text-[#C0B8B0]"
                    />
                  </div>
                  <div>
                    <label className="block text-[#9A8A72] font-dm text-[10px] tracking-[1.5px] uppercase mb-1.5">
                      CIDADE
                    </label>
                    <input
                      type="text"
                      name="cidade"
                      required
                      placeholder="Sua cidade"
                      value={formData.cidade}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b border-[#E2DDD5] py-2.5 text-[14px] text-[#1A1A18] font-dm focus:outline-none focus:border-[#9A8A72] transition-colors placeholder:text-[#C0B8B0]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[#9A8A72] font-dm text-[10px] tracking-[1.5px] uppercase mb-1.5">
                    MENSAGEM
                  </label>
                  <textarea
                    name="mensagem"
                    required
                    rows={4}
                    placeholder="Como podemos ajudar?"
                    value={formData.mensagem}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-[#E2DDD5] py-2.5 text-[14px] text-[#1A1A18] font-dm focus:outline-none focus:border-[#9A8A72] transition-colors placeholder:text-[#C0B8B0] resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#1A1A18] text-white font-dm text-[11px] tracking-[1.5px] uppercase py-3.5 px-7 rounded-[4px] hover:bg-[#2D2D2A] transition-colors duration-200 flex items-center justify-center gap-2"
                >
                  ENVIAR VIA WHATSAPP →
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
import { FileText, ClipboardList, Handshake, Ruler, Factory, CheckCircle } from "lucide-react";

const etapas = [
  {
    numero: "01",
    icone: FileText,
    titulo: "Análise do Projeto",
    texto: "Recebemos o projeto e analisamos cada detalhe para elaborar a melhor solução técnica.",
    concluida: true,
  },
  {
    numero: "02",
    icone: ClipboardList,
    titulo: "Proposta Técnica",
    texto: "Elaboramos a proposta seguindo todas as normas de desempenho e segurança vigentes.",
    concluida: false,
  },
  {
    numero: "03",
    icone: Handshake,
    titulo: "Negociação",
    texto: "Alinhamento de tipologias, vidros, cores, ferragens e condições comerciais.",
    concluida: false,
  },
  {
    numero: "04",
    icone: Ruler,
    titulo: "Medição em Obra",
    texto: "Equipe técnica realiza a medição precisa de todos os vãos no local da obra.",
    concluida: false,
  },
  {
    numero: "05",
    icone: Factory,
    titulo: "Fabricação Bazze",
    texto: "Produção sob medida no parque fabril Bazze com controle de qualidade e certificação PBQP-H.",
    concluida: false,
  },
  {
    numero: "06",
    icone: CheckCircle,
    titulo: "Entrega & Revisão",
    texto: "Instalação pela equipe própria Vero com revisão final em obra junto ao cliente.",
    concluida: false,
  },
];

export const ComoFunciona = () => {
  return (
    <section className="py-20 bg-[#F8F5F0] overflow-hidden">
      <div className="container mx-auto px-4">
        {/* CABEÇALHO */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-[1px] w-8 bg-[#E2DDD5]"></div>
            <span className="text-[#9A8A72] font-dm text-[11px] tracking-[3px] uppercase font-medium">
              — Etapas —
            </span>
            <div className="h-[1px] w-8 bg-[#E2DDD5]"></div>
          </div>
          <h2 className="text-4xl md:text-[48px] font-cormorant text-[#1A1A18] leading-tight mb-6">
            Como <span className="italic text-[#7A6A54]">funciona</span>
          </h2>
          <p className="text-[#6A6A66] font-dm text-sm md:text-base max-w-[480px] mx-auto leading-relaxed">
            Do projeto à entrega — um processo transparente, técnico e sem surpresas.
          </p>
        </div>

        {/* LINHA DO TEMPO */}
        <div className="relative">
          {/* Linha Conectora (Desktop) */}
          <div className="hidden lg:block absolute top-[92px] left-[8.33%] right-[8.33%] h-[1px] bg-[#E2DDD5] z-0">
            <div 
              className="absolute top-0 left-0 h-full bg-[#9A8A72] transition-all duration-500" 
              style={{ width: '0%' }} // A primeira etapa está ativa, mas a linha só vai até o centro do círculo.
            ></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-y-12 gap-x-4 relative z-10">
            {etapas.map((etapa, index) => {
              const Icone = etapa.icone;
              const isFirst = index === 0;

              return (
                <div key={etapa.numero} className="flex flex-col items-center text-center group">
                  <span className="text-[#9A8A72] font-dm text-[11px] tracking-[2px] font-medium mb-6 uppercase">
                    Etapa {etapa.numero}
                  </span>
                  
                  <div className={`relative w-12 h-12 flex items-center justify-center rounded-full transition-colors duration-300 mb-6 ${
                    isFirst ? 'bg-[#1A1A18]' : 'bg-[#EDE8E0]'
                  }`}>
                    <Icone size={28} className={isFirst ? 'text-white' : 'text-[#9A8A72]'} />
                    
                    {/* Linha para Mobile/Tablet (Vertical ou Conectores curtos) - Opcional, mantendo foco no grid solicitado */}
                  </div>

                  <h3 className="text-[#1A1A18] font-dm text-sm font-semibold mb-3">
                    {etapa.titulo}
                  </h3>
                  
                  <p className="text-[#6A6A66] font-dm text-[12px] leading-[1.6] px-2">
                    {etapa.texto}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

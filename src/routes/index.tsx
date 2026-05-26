import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/vero/Hero";
import { Parceria } from "@/components/vero/Parceria";
import { Vantagens } from "@/components/vero/Vantagens";
import { Produtos } from "@/components/vero/Produtos";
import { Obras } from "@/components/vero/Obras";
import { ComoFunciona } from "@/components/vero/ComoFunciona";
import { Contato } from "@/components/vero/Contato";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Vero · Bazze PVC — Esquadrias de alto padrão" },
      { name: "description", content: "Esquadrias projetadas, fabricadas e instaladas sob medida. Alto padrão em PVC pela maior indústria da América Latina." },
      { property: "og:title", content: "Vero · Bazze PVC — Esquadrias de alto padrão" },
      { property: "og:description", content: "Parceira oficial Bazze PVC em Santa Maria. Esquadrias que definem a arquitetura." },
    ],
  }),
});

function Index() {
  return (
    <>
      <Hero />
      <Parceria />
      <Vantagens />
      <Produtos />
      <Obras />
      <ComoFunciona />
      <Contato />
    </>
  );
}

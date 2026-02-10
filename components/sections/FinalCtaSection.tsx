import React from "react";
import { SectionContainer } from "../ui/SectionContainer";
import { Button } from "../ui/Button";

export const FinalCtaSection: React.FC = () => {
  return (
    <SectionContainer className="bg-brand-dark text-white">
      <div className="flex flex-col items-center gap-6 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-brand-gold/80">
          Demo de sitio para el salón
        </p>
        <h2 className="max-w-2xl font-heading text-2xl md:text-3xl tracking-tight">
          Muestra a tus clientas un salón tan profesional como el trabajo que
          haces en su pelo
        </h2>
        <p className="max-w-xl text-sm md:text-base text-brand-soft">
          Este sitio está pensado para que entiendas cómo se vería tu marca con
          una agenda online clara, moderna y fácil de usar. Lo siguiente es
          adaptar textos, fotos y horarios a tu realidad.
        </p>
        <a href="#agendar" className="w-full max-w-sm">
          <Button size="lg" fullWidth>
            Agenda tu hora en segundos
          </Button>
        </a>
      </div>
    </SectionContainer>
  );
};


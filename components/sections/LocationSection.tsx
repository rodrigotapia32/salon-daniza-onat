import React from "react";
import { SectionContainer } from "../ui/SectionContainer";
import { SectionTitle } from "../ui/SectionTitle";
import { Button } from "../ui/Button";

export const LocationSection: React.FC = () => {
  return (
    <SectionContainer className="bg-background text-brand-dark">
      <SectionTitle
        eyebrow="Ubicación"
        title="Atendemos en Maipú, Santiago de Chile"
        subtitle="Un salón cómodo y fácil de ubicar dentro de Maipú. Aquí podríamos agregar una referencia más exacta o el mapa del sector."
      />

      <div className="flex flex-col gap-4 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
        <p className="max-w-xl">
          Ideal para clientas de Maipú y comunas cercanas. En la versión final
          del sitio se puede integrar directamente el mapa de Google para que
          tus clientas ubiquen el salón en segundos.
        </p>
        <a
          href="https://maps.google.com"
          target="_blank"
          rel="noreferrer"
          className="md:shrink-0"
        >
          <Button size="md">Ver en Google Maps</Button>
        </a>
      </div>
    </SectionContainer>
  );
};


import React from "react";
import { SectionContainer } from "../ui/SectionContainer";
import { SectionTitle } from "../ui/SectionTitle";
import { ServiceCard } from "../ui/ServiceCard";

export const ServicesSection: React.FC = () => {
  return (
    <SectionContainer id="servicios" className="bg-background text-foreground">
      <SectionTitle
        eyebrow="Servicios principales"
        title="Especialistas en color, corte y tratamientos capilares"
        subtitle="Trabajamos con productos profesionales y diagnósticos personalizados para cuidar tu pelo y lograr el resultado que tienes en mente."
      />

      <div className="grid gap-5 md:grid-cols-2">
        <ServiceCard
          name="Coloración profesional"
          description="Color clásico, retoque de raíces o cambio completo, siempre cuidando la salud de tu pelo y tu tono de piel."
          fromPrice="$25.000"
        />
        <ServiceCard
          name="Corte & styling"
          description="Cortes con forma, capas, flequillos y peinados que se adaptan a tu rutina diaria y tipo de cabello."
          fromPrice="$18.000"
        />
        <ServiceCard
          name="Balayage / Iluminaciones"
          description="Técnicas de iluminación suaves y degradadas para un efecto natural, luminoso y de bajo mantenimiento."
          fromPrice="$55.000"
        />
        <ServiceCard
          name="Tratamientos capilares"
          description="Hidratación profunda, brillo, reconstrucción y tratamientos anti-frizz para recuperar la textura y suavidad de tu pelo."
          fromPrice="$22.000"
        />
      </div>

      <p className="mt-2 text-xs text-muted-foreground">
        *Valores referenciales de demostración. Se pueden ajustar fácilmente
        cuando el sistema esté listo para uso real.
      </p>
    </SectionContainer>
  );
};


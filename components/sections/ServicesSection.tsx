import React from "react";
import { SectionContainer } from "../ui/SectionContainer";
import { SectionTitle } from "../ui/SectionTitle";
import { ServiceCard } from "../ui/ServiceCard";

export const ServicesSection: React.FC = () => {
  return (
    <SectionContainer
      id="servicios"
      className="bg-background text-foreground border-t border-black/5"
    >
      <SectionTitle
        eyebrow="Servicios"
        title="Todo lo que necesitas para un cambio de look completo"
        subtitle="Estas son las líneas de servicio principales. En un proyecto real se pueden detallar tiempos, valores y fotos de cada servicio."
      />

      <div className="grid gap-6 md:grid-cols-2">
        <ServiceCard
          name="Coloración profesional"
          description="Color clásico, retoque de raíces o cambio total con enfoque en colorimetría profesional y cuidado del cabello."
          fromPrice="$25.000"
        />
        <ServiceCard
          name="Corte & styling"
          description="Cortes femeninos con forma, capas, flequillos y peinados pensados en tu tipo de rostro y rutina diaria."
          fromPrice="$18.000"
        />
        <ServiceCard
          name="Balayage / Iluminaciones"
          description="Técnicas de balayage, babylights e iluminaciones suaves para lograr un efecto luminoso, elegante y de bajo mantenimiento."
          fromPrice="$55.000"
        />
        <ServiceCard
          name="Tratamientos capilares"
          description="Hidrataciones profundas, tratamiento anti-frizz y reconstrucción para recuperar brillo, suavidad y fuerza en tu pelo."
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


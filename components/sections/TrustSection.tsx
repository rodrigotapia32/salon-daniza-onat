import React from "react";
import { SectionContainer } from "../ui/SectionContainer";
import { SectionTitle } from "../ui/SectionTitle";
import { TestimonialCard } from "../ui/TestimonialCard";

export const TrustSection: React.FC = () => {
  return (
    <SectionContainer className="bg-brand-dark text-white">
      <SectionTitle
        eyebrow="Confianza"
        title="Clientas felices y un equipo con experiencia"
        subtitle="Estos son ejemplos de cómo se verían los testimonios de tus clientas reales dentro del sitio."
        align="center"
      />

      <div className="grid gap-5 md:grid-cols-3">
        <TestimonialCard
          name="Camila, 32"
          service="Balayage y tratamiento"
          quote="Me encantó que pudieran ver mi foto y mi tono de piel antes. El resultado quedó super natural y mi pelo suave, no quemado."
        />
        <TestimonialCard
          name="Daniela, 28"
          service="Corte y styling"
          quote="Siempre me costaba encontrar un corte que me quedara bien. Acá se toman el tiempo de escuchar lo que uno quiere."
        />
        <TestimonialCard
          name="Claudia, 41"
          service="Coloración de raíces"
          quote="Reservé mi hora de noche desde el celular. Llegué y ya tenían todo agendado, fue muy rápido y ordenado."
        />
      </div>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs uppercase tracking-[0.2em] text-brand-soft">
        <span className="inline-flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-brand-gold" />
          +5 años de experiencia
        </span>
        <span className="inline-flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-brand-gold" />
          Profesionales certificados
        </span>
        <span className="inline-flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-brand-gold" />
          Productos de línea profesional
        </span>
      </div>
    </SectionContainer>
  );
};


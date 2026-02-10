import React, { type ReactNode } from "react";

interface SectionContainerProps {
  id?: string;
  className?: string;
  children: ReactNode;
}

/**
 * Contenedor estándar de sección para mantener
 * un ancho máximo, centrado y buen espaciado vertical.
 */
export const SectionContainer: React.FC<SectionContainerProps> = ({
  id,
  className = "",
  children,
}) => {
  return (
    <section
      id={id}
      className={`w-full py-16 md:py-24 px-4 bg-background text-foreground ${className}`}
    >
      <div className="mx-auto flex max-w-5xl flex-col gap-8">{children}</div>
    </section>
  );
};


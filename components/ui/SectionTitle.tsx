import React from "react";

interface SectionTitleProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

/**
 * Título reutilizable para secciones, con soporte para
 * eyebrow y subtítulo descriptivo.
 */
export const SectionTitle: React.FC<SectionTitleProps> = ({
  eyebrow,
  title,
  subtitle,
  align = "left",
}) => {
  const alignment =
    align === "center" ? "items-center text-center" : "items-start text-left";

  return (
    <header className={`flex flex-col gap-2 ${alignment}`}>
      {eyebrow && (
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-gold/80">
          {eyebrow}
        </p>
      )}
      <h2 className="font-heading text-2xl md:text-3xl tracking-tight text-brand-dark">
        {title}
      </h2>
      {subtitle && (
        <p className="max-w-xl text-sm md:text-base text-muted-foreground">
          {subtitle}
        </p>
      )}
    </header>
  );
};


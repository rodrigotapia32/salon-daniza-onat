import React from "react";

interface TestimonialCardProps {
  name: string;
  service: string;
  quote: string;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  service,
  quote,
}) => {
  return (
    <figure className="flex h-full flex-col justify-between rounded-3xl border border-black/5 bg-white/80 p-5 text-sm shadow-[0_10px_40px_rgba(15,14,23,0.06)] backdrop-blur-sm">
      <blockquote className="text-sm leading-relaxed text-brand-dark/90">
        “{quote}”
      </blockquote>
      <figcaption className="mt-4 flex flex-col gap-0.5">
        <span className="font-medium text-brand-dark">{name}</span>
        <span className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
          {service}
        </span>
      </figcaption>
    </figure>
  );
};


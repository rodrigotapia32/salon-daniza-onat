import React from "react";

interface ServiceCardProps {
  name: string;
  description: string;
  fromPrice: string;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  name,
  description,
  fromPrice,
}) => {
  return (
    <article className="group flex flex-col justify-between rounded-3xl border border-black/5 bg-white/80 p-5 shadow-[0_10px_40px_rgba(15,14,23,0.06)] backdrop-blur-sm transition-all duration-200 hover:-translate-y-1 hover:bg-white hover:shadow-[0_20px_60px_rgba(15,14,23,0.12)]">
      <div className="flex flex-col gap-2">
        <h3 className="font-heading text-lg font-semibold tracking-tight text-brand-dark">
          {name}
        </h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
      <p className="mt-4 text-sm font-medium text-brand-dark">
        desde{" "}
        <span className="rounded-full bg-brand-nude/60 px-2 py-0.5 text-xs uppercase tracking-wide text-brand-dark">
          {fromPrice}
        </span>
      </p>
    </article>
  );
};


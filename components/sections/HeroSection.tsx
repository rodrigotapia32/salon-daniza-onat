import React from "react";
import { Button } from "../ui/Button";
import { SectionContainer } from "../ui/SectionContainer";

export const HeroSection: React.FC = () => {
  return (
    <SectionContainer className="relative overflow-hidden bg-brand-dark text-white pb-20 pt-24 md:pt-28">
      {/* Degradado decorativo */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,219,186,0.16),transparent_55%),radial-gradient(circle_at_bottom,_rgba(247,215,205,0.24),transparent_55%)]" />

      <div className="relative z-10 flex flex-col gap-10 md:flex-row md:items-center">
        <div className="flex-1 space-y-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-gold/80">
            Salón boutique en Maipú
          </p>
          <h1 className="font-heading text-3xl leading-tight tracking-tight md:text-4xl lg:text-5xl">
            DANIZA OÑAT / LAKSHMI
            <span className="mt-2 block text-sm font-normal uppercase tracking-[0.3em] text-brand-rose/80">
              Coloristas y estilistas profesionales
            </span>
          </h1>
          <p className="max-w-xl text-sm md:text-base text-brand-soft">
            Un espacio pensado para mujeres que valoran una coloración cuidada,
            un corte que realmente les favorezca y una experiencia relajante
            sin apuros. Agenda tu hora online en segundos y llega directa a tu
            momento de belleza.
          </p>

          <div className="mt-4 flex flex-col gap-3 sm:flex-row">
            <a href="#agendar" className="sm:w-auto w-full">
              <Button size="lg" fullWidth>
                Reservar hora
              </Button>
            </a>
            <a href="#servicios" className="sm:w-auto w-full">
              <Button
                variant="secondary"
                size="lg"
                fullWidth
                className="border-white/25 bg-transparent text-white hover:bg-white/5"
              >
                Ver servicios
              </Button>
            </a>
          </div>

          <div className="mt-4 flex flex-wrap gap-4 text-xs text-brand-soft">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-gold" />
              Agenda online 24/7
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-gold" />
              Coloración personalizada y tratamientos capilares
            </span>
          </div>
        </div>

        <div className="mt-8 flex-1 md:mt-0 md:pl-8">
          {/* Tarjeta estilo preview de agenda para reforzar la idea principal */}
          <div className="mx-auto max-w-sm rounded-3xl bg-white/95 p-5 text-brand-dark shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-brand-rose">
              Demo de agenda online
            </p>
            <h2 className="mt-2 font-heading text-lg tracking-tight">
              Reserva tu próximo cambio de look
            </h2>
            <p className="mt-2 text-xs text-muted-foreground">
              Elige tu servicio, horario y confirma en segundos. Sin llamadas,
              sin esperar respuestas por WhatsApp.
            </p>
            <div className="mt-4 space-y-2 rounded-2xl bg-brand-soft/30 p-3 text-xs">
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Coloración</span>
                <span className="rounded-full bg-brand-nude px-2 py-0.5 text-[11px] font-medium">
                  10:00 - 11:30
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">
                  Balayage / Iluminaciones
                </span>
                <span className="rounded-full bg-brand-nude px-2 py-0.5 text-[11px] font-medium">
                  16:00 - 18:30
                </span>
              </div>
            </div>
            <p className="mt-3 text-[11px] text-muted-foreground">
              *Esta es una vista de demostración diseñada para mostrarle a la
              dueña cómo funciona la agenda online del salón.
            </p>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};


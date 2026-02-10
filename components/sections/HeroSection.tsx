import React from "react";
import { Button } from "../ui/Button";

export const HeroSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-brand-dark text-white">
      {/* Fondo tipo banda oscura con degradados suaves, estilo salón premium */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(244,221,199,0.16),transparent_60%),radial-gradient(circle_at_bottom,_rgba(226,186,160,0.28),transparent_55%)]" />

      <div className="relative z-10 mx-auto flex min-h-[80vh] max-w-5xl flex-col gap-10 px-4 pb-16 pt-24 md:flex-row md:items-center md:pb-20 md:pt-28">
        {/* Columna texto principal */}
        <div className="flex-1 space-y-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-brand-gold/85">
            Salón de belleza · Maipú
          </p>
          <h1 className="font-heading text-[2.15rem] leading-[1.1] tracking-tight md:text-[2.7rem]">
            Coloristas y estilistas
            <span className="block text-[2.15rem] md:text-[2.4rem]">
              para cambios de look{" "}
              <span className="italic text-brand-rose/90">de alto nivel</span>
            </span>
          </h1>
          <p className="max-w-xl text-sm md:text-base text-brand-soft">
            En <span className="font-semibold">DANIZA OÑAT / LAKSHMI</span>{" "}
            combinamos asesoría personalizada, colorimetría profesional y
            tratamientos capilares para que tu pelo se vea sano, luminoso y con
            un estilo que realmente te represente.
          </p>

          <div className="mt-5 flex flex-col gap-3 sm:flex-row">
            <a href="#agendar" className="w-full sm:w-auto">
              <Button size="lg" fullWidth>
                Reservar hora online
              </Button>
            </a>
            <a href="#servicios" className="w-full sm:w-auto">
              <Button
                variant="secondary"
                size="lg"
                fullWidth
                className="border-white/35 bg-transparent text-white hover:bg-white/5"
              >
                Ver servicios y precios
              </Button>
            </a>
          </div>

          <div className="mt-4 flex flex-wrap gap-4 text-[11px] text-brand-soft">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-gold" />
              Agenda online 24/7
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-gold" />
              Coloración, corte y tratamientos capilares
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-gold" />
              Experiencia relajante y personalizada
            </span>
          </div>
        </div>

        {/* Columna visual tipo “tarjeta salón” inspirada en los sitios de referencia */}
        <div className="mt-6 flex-1 md:mt-0 md:pl-10">
          <div className="relative mx-auto max-w-sm">
            <div className="absolute -inset-6 -z-10 rounded-[2.1rem] bg-gradient-to-b from-white/16 via-white/4 to-transparent blur-xl" />
            <div className="overflow-hidden rounded-[1.9rem] border border-white/10 bg-white/95 text-brand-dark shadow-[0_32px_80px_rgba(5,5,15,0.65)]">
              <div className="border-b border-black/5 bg-gradient-to-r from-brand-nude/60 via-white to-brand-soft/70 px-5 py-4">
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-brand-dark/80">
                  Agenda del salón · Demo
                </p>
                <p className="mt-1 text-xs text-brand-dark/70">
                  Así verían tus clientas la reserva de su hora.
                </p>
              </div>

              <div className="space-y-3 px-5 py-4 text-xs">
                <div className="flex items-center justify-between rounded-2xl bg-brand-soft/60 px-3 py-2">
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.18em] text-brand-dark/70">
                      Coloración · Mañana
                    </p>
                    <p className="text-sm font-medium text-brand-dark">
                      Cambio de color + tratamiento
                    </p>
                  </div>
                  <span className="rounded-full bg-white px-3 py-1 text-[11px] font-semibold">
                    10:00
                  </span>
                </div>

                <div className="flex items-center justify-between rounded-2xl bg-brand-soft/40 px-3 py-2">
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.18em] text-brand-dark/70">
                      Balayage · Tarde
                    </p>
                    <p className="text-sm font-medium text-brand-dark">
                      Iluminaciones suaves y naturales
                    </p>
                  </div>
                  <span className="rounded-full bg-white px-3 py-1 text-[11px] font-semibold">
                    16:00
                  </span>
                </div>

                <p className="mt-2 text-[11px] text-muted-foreground">
                  *Esta tarjeta es solo de demostración para que la dueña vea el
                  estilo de la agenda online. No corresponde a horarios reales.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


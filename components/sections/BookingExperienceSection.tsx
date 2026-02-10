"use client";

import React, { useState } from "react";
import { SectionContainer } from "../ui/SectionContainer";
import { SectionTitle } from "../ui/SectionTitle";
import { Button } from "../ui/Button";

type ServiceOption =
  | "Coloración"
  | "Corte & Styling"
  | "Balayage / Iluminaciones"
  | "Tratamientos capilares";

export const BookingExperienceSection: React.FC = () => {
  const [service, setService] = useState<ServiceOption | "">("");
  const [date, setDate] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [showDemoMessage, setShowDemoMessage] = useState(false);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Validación muy ligera solo para experiencia visual
    if (!service || !date || !name || !phone) {
      setShowDemoMessage(false);
      alert("Para la demostración, completa todos los campos antes de confirmar.");
      return;
    }
    setShowDemoMessage(true);
  };

  return (
    <SectionContainer
      id="agendar"
      className="bg-brand-soft/40 text-brand-dark"
    >
      <SectionTitle
        eyebrow="Agenda online"
        title="Simulación de agendamiento en línea"
        subtitle="Así se vería la experiencia de tus clientas al reservar su hora en el salón: simple, clara y sin mensajes de ida y vuelta."
      />

      <div className="grid gap-8 md:grid-cols-[minmax(0,1.1fr),minmax(0,0.9fr)]">
        <form
          onSubmit={handleSubmit}
          className="rounded-3xl bg-white/95 p-5 shadow-[0_16px_50px_rgba(15,14,23,0.14)] backdrop-blur"
          aria-describedby="demo-message"
        >
          <div className="flex flex-col gap-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="flex flex-col gap-1.5 text-sm">
                <label
                  htmlFor="service"
                  className="text-xs font-medium text-brand-dark"
                >
                  Servicio
                </label>
                <select
                  id="service"
                  value={service}
                  onChange={(event) =>
                    setService(event.target.value as ServiceOption | "")
                  }
                  className="h-10 rounded-full border border-black/10 bg-white px-3 text-xs text-brand-dark shadow-sm outline-none transition focus:border-brand-gold focus:ring-1 focus:ring-brand-gold/60"
                >
                  <option value="">Selecciona un servicio</option>
                  <option value="Coloración">Coloración</option>
                  <option value="Corte & Styling">Corte & Styling</option>
                  <option value="Balayage / Iluminaciones">
                    Balayage / Iluminaciones
                  </option>
                  <option value="Tratamientos capilares">
                    Tratamientos capilares
                  </option>
                </select>
              </div>
              <div className="flex flex-col gap-1.5 text-sm">
                <label
                  htmlFor="date"
                  className="text-xs font-medium text-brand-dark"
                >
                  Día de atención
                </label>
                <input
                  id="date"
                  type="date"
                  value={date}
                  onChange={(event) => setDate(event.target.value)}
                  className="h-10 rounded-full border border-black/10 bg-white px-3 text-xs text-brand-dark shadow-sm outline-none transition focus:border-brand-gold focus:ring-1 focus:ring-brand-gold/60"
                />
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="flex flex-col gap-1.5 text-sm">
                <label
                  htmlFor="name"
                  className="text-xs font-medium text-brand-dark"
                >
                  Nombre
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Ej: Daniela"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  className="h-10 rounded-full border border-black/10 bg-white px-3 text-xs text-brand-dark shadow-sm outline-none transition focus:border-brand-gold focus:ring-1 focus:ring-brand-gold/60"
                />
              </div>
              <div className="flex flex-col gap-1.5 text-sm">
                <label
                  htmlFor="phone"
                  className="text-xs font-medium text-brand-dark"
                >
                  WhatsApp
                </label>
                <input
                  id="phone"
                  type="tel"
                  placeholder="+56 9 ..."
                  value={phone}
                  onChange={(event) => setPhone(event.target.value)}
                  className="h-10 rounded-full border border-black/10 bg-white px-3 text-xs text-brand-dark shadow-sm outline-none transition focus:border-brand-gold focus:ring-1 focus:ring-brand-gold/60"
                />
              </div>
            </div>

            <div className="flex flex-col gap-3 pt-2">
              <Button size="lg" fullWidth type="submit">
                Confirmar reserva
              </Button>
              <p className="text-[11px] text-muted-foreground">
                En un sistema real, aquí se confirmaría tu hora y recibirías un
                mensaje automático con el detalle de tu reserva.
              </p>
            </div>
          </div>

          {showDemoMessage && (
            <div
              id="demo-message"
              aria-live="polite"
              className="mt-4 rounded-2xl border border-brand-gold/40 bg-brand-nude/40 px-3 py-2 text-xs text-brand-dark shadow-sm animate-fade-in-up"
            >
              Esta es una{" "}
              <span className="font-semibold">demostración del sistema</span> de
              agendamiento online. No se está registrando ninguna reserva real;
              el objetivo es mostrarle a la dueña del salón cómo vería sus
              clientas el proceso de agendar.
            </div>
          )}
        </form>

        <div className="flex flex-col justify-between gap-6 text-sm text-brand-dark/90">
          <div className="space-y-3">
            <h3 className="font-heading text-lg tracking-tight">
              ¿Qué gana el salón con esta agenda?
            </h3>
            <p className="text-sm text-muted-foreground">
              Tus clientas pueden revisar horarios disponibles, elegir su
              servicio y confirmar en segundos, sin esperar respuesta por
              mensaje. Tú ves todas las reservas ordenadas en un solo lugar.
            </p>
          </div>
          <ul className="space-y-2 text-sm">
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-brand-gold" />
              <p>
                <strong>Menos WhatsApp y más orden:</strong> se reduce el ida y
                vuelta de mensajes para coordinar horario.
              </p>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-brand-gold" />
              <p>
                <strong>Disponible 24/7:</strong> muchas clientas reservan en la
                noche cuando por fin tienen tiempo.
              </p>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-brand-gold" />
              <p>
                <strong>Profesional y confiable:</strong> da la sensación de un
                salón organizado, serio y moderno.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </SectionContainer>
  );
};


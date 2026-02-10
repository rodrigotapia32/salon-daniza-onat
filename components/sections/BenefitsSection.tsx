import React from "react";
import { SectionContainer } from "../ui/SectionContainer";
import { SectionTitle } from "../ui/SectionTitle";

export const BenefitsSection: React.FC = () => {
  return (
    <SectionContainer className="bg-background text-brand-dark">
      <SectionTitle
        eyebrow="Beneficios del sistema"
        title="Un salón más ordenado, sin perder el trato cercano"
        subtitle="El objetivo no es reemplazar tu WhatsApp, sino quitarte carga de coordinación y dejarte enfocarte en atender a tus clientas."
      />

      <div className="grid gap-5 md:grid-cols-2">
        <div className="flex gap-3 rounded-2xl bg-brand-soft/35 p-4">
          <span className="mt-1 text-lg">🕒</span>
          <div className="space-y-1">
            <h3 className="text-sm font-semibold text-brand-dark">
              Agenda 24/7
            </h3>
            <p className="text-sm text-muted-foreground">
              Tus clientas pueden reservar incluso fuera del horario del salón,
              cuando recién se acuerdan que necesitan hora.
            </p>
          </div>
        </div>
        <div className="flex gap-3 rounded-2xl bg-brand-soft/35 p-4">
          <span className="mt-1 text-lg">📲</span>
          <div className="space-y-1">
            <h3 className="text-sm font-semibold text-brand-dark">
              Menos mensajes por WhatsApp
            </h3>
            <p className="text-sm text-muted-foreground">
              Se reduce el ida y vuelta para ver qué día, a qué hora y qué
              servicio quiere tu clienta.
            </p>
          </div>
        </div>
        <div className="flex gap-3 rounded-2xl bg-brand-soft/35 p-4">
          <span className="mt-1 text-lg">🔔</span>
          <div className="space-y-1">
            <h3 className="text-sm font-semibold text-brand-dark">
              Recordatorios automáticos
            </h3>
            <p className="text-sm text-muted-foreground">
              En la versión completa, el sistema puede enviar recordatorios
              antes de la cita para disminuir inasistencias.
            </p>
          </div>
        </div>
        <div className="flex gap-3 rounded-2xl bg-brand-soft/35 p-4">
          <span className="mt-1 text-lg">📋</span>
          <div className="space-y-1">
            <h3 className="text-sm font-semibold text-brand-dark">
              Organización profesional
            </h3>
            <p className="text-sm text-muted-foreground">
              Puedes ver tu día completo de un vistazo: quién viene, a qué
              hora, y qué servicio tiene agendado.
            </p>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};


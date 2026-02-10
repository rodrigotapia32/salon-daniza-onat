import { HeroSection } from "@/components/sections/HeroSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { BookingExperienceSection } from "@/components/sections/BookingExperienceSection";
import { BenefitsSection } from "@/components/sections/BenefitsSection";
import { TrustSection } from "@/components/sections/TrustSection";
import { LocationSection } from "@/components/sections/LocationSection";
import { FinalCtaSection } from "@/components/sections/FinalCtaSection";
import { Button } from "@/components/ui/Button";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <header className="sticky top-0 z-30 border-b border-black/5 bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3 text-xs md:text-sm">
          <div className="flex items-baseline gap-2">
            <span className="font-heading text-sm tracking-tight text-brand-dark md:text-base">
              DANIZA OÑAT / LAKSHMI
            </span>
            <span className="hidden text-[11px] uppercase tracking-[0.22em] text-muted-foreground md:inline">
              Coloristas y estilistas profesionales
            </span>
          </div>
          <nav className="flex items-center gap-3">
            <a href="#servicios" className="hidden text-xs text-muted-foreground md:inline">
              Servicios
            </a>
            <a href="#agendar" className="hidden text-xs text-muted-foreground md:inline">
              Agendar
            </a>
            <a href="#contacto" className="hidden text-xs text-muted-foreground md:inline">
              Contacto
            </a>
            <a href="#agendar" className="ml-1">
              <Button size="md">Reservar hora</Button>
            </a>
          </nav>
        </div>
      </header>

      <main className="flex flex-1 flex-col">
        <HeroSection />
        <ServicesSection />
        <BookingExperienceSection />
        <BenefitsSection />
        <TrustSection />
        <LocationSection />
        <FinalCtaSection />
      </main>

      <footer
        id="contacto"
        className="border-t border-black/5 bg-background/95 py-6 text-xs text-muted-foreground"
      >
        <div className="mx-auto flex max-w-5xl flex-col gap-3 px-4 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-col gap-1">
            <span className="font-heading text-sm tracking-tight text-brand-dark">
              DANIZA OÑAT / LAKSHMI
            </span>
            <span>Salón de belleza – Maipú, Santiago de Chile</span>
            <span className="text-[11px]">
              Sitio de demostración para mostrar la experiencia de agendamiento
              online.
            </span>
          </div>
          <div className="flex flex-col gap-1 md:items-end">
            <a href="#" className="hover:text-brand-dark transition-colors">
              Instagram del salón
            </a>
            <a href="#" className="hover:text-brand-dark transition-colors">
              WhatsApp para reservas
            </a>
            <span className="mt-1 text-[11px]">
              © {new Date().getFullYear()} – Demo creada para presentación.
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}


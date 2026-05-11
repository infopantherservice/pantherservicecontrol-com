import { createFileRoute } from "@tanstack/react-router";
import teamPanther from "@/assets/team-panther.jpg";
import { CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/nosotros")({
  component: Nosotros,
});

function Nosotros() {
  return (
    <div>
      <section className="relative h-[50vh] min-h-[400px] -mt-20 flex items-center justify-center overflow-hidden">
        <img src={teamPanther} alt="Equipo Panther Service" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-background/70"></div>
        <div className="relative z-10 text-center px-6">
          <p className="text-accent uppercase tracking-[0.3em] text-xs mb-3">Quiénes somos</p>
          <h1 className="text-5xl md:text-6xl font-bold">Visión y Valores</h1>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-3xl font-bold mb-4 text-accent uppercase tracking-wide">Visión</h2>
          <p className="text-muted-foreground">
            Convertirnos en una empresa de referencia en el sector de servicios, destacando por la excelencia de nuestro equipo humano, la innovación tecnológica y la calidad del servicio mediante soluciones personalizadas, profesionales y altamente fiables.
          </p>
        </div>
        <div>
          <h2 className="text-3xl font-bold mb-4 text-accent uppercase tracking-wide">Valores</h2>
          <ul className="space-y-3">
            {["Profesionalidad", "Responsabilidad", "Transparencia", "Respuesta rápida", "Compromiso", "Innovación continua"].map((v) => (
              <li key={v} className="flex items-center gap-3"><CheckCircle2 className="size-5 text-accent" /> {v}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-card border-y border-border py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-accent uppercase tracking-[0.3em] text-xs mb-3">Gerente</p>
          <h2 className="text-4xl font-bold mb-2">Javier López</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            En Panther Service trabajamos con un modelo basado en la prevención, la rápida respuesta y la atención personalizada. Nuestro compromiso: un servicio eficaz, cercano y adaptado a cada entorno.
          </p>
        </div>
      </section>
    </div>
  );
}
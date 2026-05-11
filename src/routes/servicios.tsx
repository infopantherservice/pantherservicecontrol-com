import { createFileRoute } from "@tanstack/react-router";
import { Users, Shield, Eye, FileCheck } from "lucide-react";
import serviceEvents from "@/assets/service-events.jpg";
import heroGuard from "@/assets/hero-guard.jpg";
import teamPanther from "@/assets/team-panther.jpg";
import trustHandshake from "@/assets/trust-handshake.jpg";

export const Route = createFileRoute("/servicios")({
  component: Servicios,
});

const services = [
  {
    icon: Users,
    title: "Servicios Auxiliares",
    image: heroGuard,
    items: ["Conserjes y controladores", "Recepcionistas y personal polivalente", "Soporte a la actividad diaria del cliente", "Control de masas"],
  },
  {
    icon: Shield,
    title: "Controladores de Accesos",
    image: teamPanther,
    items: ["Experiencia en control de aforo", "Visualización clara de objetivos", "Firmeza en la aplicación de normas", "Trato amable y cercano", "Imagen profesional"],
  },
  {
    icon: Eye,
    title: "Control en Eventos",
    image: serviceEvents,
    items: ["Congresos y ferias", "Bodas y celebraciones", "Control de aforo", "Protección de accesos", "Zonas VIP"],
  },
  {
    icon: FileCheck,
    title: "Consultoría y Auditoría",
    image: trustHandshake,
    items: ["Evaluación de riesgos", "Diseño de planes de seguridad", "Análisis de vulnerabilidades", "Elaboración de protocolos", "Normativas a medida"],
  },
];

function Servicios() {
  return (
    <div>
      <section className="bg-card border-b border-border py-20 px-6 text-center">
        <p className="text-accent uppercase tracking-[0.3em] text-xs mb-3">Qué ofrecemos</p>
        <h1 className="text-5xl md:text-6xl font-bold">Servicios</h1>
        <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
          Soluciones personalizadas, profesionales y altamente fiables.
        </p>
      </section>
      <div className="max-w-7xl mx-auto px-6 py-20 space-y-24">
        {services.map((s, i) => (
          <div key={s.title} className={`grid md:grid-cols-2 gap-12 items-center ${i % 2 ? "md:[&>div:first-child]:order-2" : ""}`}>
            <div>
              <img src={s.image} alt={s.title} className="w-full h-96 object-cover" />
            </div>
            <div>
              <s.icon className="size-12 text-accent mb-5" />
              <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-wide mb-6">{s.title}</h2>
              <ul className="space-y-3">
                {s.items.map((it) => (
                  <li key={it} className="flex items-start gap-3 text-muted-foreground">
                    <span className="text-accent mt-1">▸</span> {it}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
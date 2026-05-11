import { createFileRoute } from "@tanstack/react-router";
import { Phone, Mail, Clock, Instagram, User } from "lucide-react";

export const Route = createFileRoute("/contacto")({
  component: Contacto,
  head: () => ({
    meta: [
      { title: "Contacto · Panther Service" },
      { name: "description", content: "Contacta con Panther Service. Atención 24/7 · 647 650 027 · infopanther.service@gmail.com" },
    ],
  }),
});

function Contacto() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-20">
      <div className="text-center mb-16">
        <p className="text-accent uppercase tracking-[0.3em] text-xs mb-3">Hablemos</p>
        <h1 className="text-5xl md:text-6xl font-bold">Contacto</h1>
        <p className="text-muted-foreground mt-4">Estamos disponibles para ti las 24 horas, los 7 días de la semana.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {[
          { icon: User, label: "Gerente", value: "Javier López" },
          { icon: Phone, label: "Teléfono", value: "647 650 027", href: "tel:647650027" },
          { icon: Mail, label: "Email", value: "infopanther.service@gmail.com", href: "mailto:infopanther.service@gmail.com" },
          { icon: Clock, label: "Horario", value: "Atención 24/7" },
          { icon: Instagram, label: "Instagram", value: "@pantherservice_", href: "https://instagram.com/pantherservice_" },
        ].map((c) => {
          const Inner = (
            <div className="flex items-start gap-4 bg-card border border-border p-6 hover:border-accent transition-colors h-full">
              <c.icon className="size-6 text-accent mt-1 shrink-0" />
              <div>
                <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">{c.label}</p>
                <p className="text-lg font-semibold">{c.value}</p>
              </div>
            </div>
          );
          return c.href ? (
            <a key={c.label} href={c.href} className="block">{Inner}</a>
          ) : (
            <div key={c.label}>{Inner}</div>
          );
        })}
      </div>

      <div className="mt-16 text-center">
        <a href="/dossier-panther-service-2026.pdf" target="_blank" rel="noopener" className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-3 font-semibold uppercase tracking-wider text-sm hover:bg-accent/90 transition-colors">
          Descargar dossier corporativo
        </a>
      </div>
    </div>
  );
}
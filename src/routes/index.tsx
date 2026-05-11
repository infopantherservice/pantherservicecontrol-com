import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { Shield, Users, Eye, CheckCircle2, Phone, ArrowRight, Clock, FileCheck, ThumbsUp } from "lucide-react";
import heroGuard from "@/assets/hero-guard.jpg";
import serviceEvents from "@/assets/service-events.jpg";
import teamPanther from "@/assets/team-panther.jpg";
import trustHandshake from "@/assets/trust-handshake.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div>
      {/* Hero */}
      <section className="relative h-[88vh] min-h-[600px] -mt-20 flex items-center justify-center overflow-hidden">
        <img src={heroGuard} alt="Personal de seguridad Panther Service" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/50 to-background"></div>
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <p className="text-accent uppercase tracking-[0.3em] text-sm mb-6">Control & Servicios</p>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
            PANTHER <span className="text-accent">SERVICE</span>
          </h1>
          <p className="text-lg md:text-xl text-foreground/85 max-w-2xl mx-auto mb-10">
            Profesionalidad, confianza y tranquilidad. Soluciones personalizadas en control de accesos, seguridad y servicios auxiliares.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/servicios" className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-3 font-semibold uppercase tracking-wider text-sm hover:bg-accent/90 transition-colors">
              Nuestros servicios <ArrowRight className="size-4" />
            </Link>
            <Link to="/contacto" className="inline-flex items-center gap-2 border border-foreground/30 px-8 py-3 font-semibold uppercase tracking-wider text-sm hover:border-accent hover:text-accent transition-colors">
              Contactar
            </Link>
          </div>
        </div>
      </section>

      {/* Services preview */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <p className="text-accent uppercase tracking-[0.3em] text-xs mb-3">Qué hacemos</p>
          <h2 className="text-4xl md:text-5xl font-bold">Servicios</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: Users, title: "Auxiliares", desc: "Conserjes, recepcionistas y personal polivalente." },
            { icon: Shield, title: "Controladores", desc: "Control de accesos firme, cercano y profesional." },
            { icon: Eye, title: "Eventos", desc: "Seguridad en bodas, ferias, congresos y zonas VIP." },
            { icon: FileCheck, title: "Consultoría", desc: "Auditorías, planes y protocolos de seguridad." },
          ].map((s) => (
            <div key={s.title} className="group bg-card border border-border p-8 hover:border-accent transition-colors">
              <s.icon className="size-10 text-accent mb-5" />
              <h3 className="text-xl font-semibold mb-2 uppercase tracking-wide">{s.title}</h3>
              <p className="text-sm text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Quality strip */}
      <section className="bg-card border-y border-border py-20 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <img src={serviceEvents} alt="Equipo Panther Service" className="w-full h-80 object-cover" />
          <div>
            <p className="text-accent uppercase tracking-[0.3em] text-xs mb-3">Excelencia profesional</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Compromiso ante todo</h2>
            <p className="text-muted-foreground mb-4">
              Trabajamos con dedicación absoluta y atención al detalle, adaptándonos a cada situación para garantizar un servicio impecable en cualquier circunstancia.
            </p>
            <p className="text-muted-foreground">
              Profesionalidad, cercanía y experiencia se unen para aportar verdadero valor a su negocio, proyecto o evento.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <p className="text-accent uppercase tracking-[0.3em] text-xs mb-3">Beneficios</p>
          <h2 className="text-4xl md:text-5xl font-bold">¿Por qué elegirnos?</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-10">
          {[
            { title: "Aportar Valor", desc: "Aumento de calidad, organización y efectividad en cada departamento de su negocio." },
            { title: "Seguridad", desc: "Tranquilidad y confianza de que todo se desarrolla de forma profesional, clara y eficiente." },
            { title: "Confianza", desc: "Expertos cualificados, todo en regla y una organización estudiada paso a paso." },
          ].map((b) => (
            <div key={b.title} className="border-l-2 border-accent pl-6">
              <h3 className="text-2xl font-semibold mb-3 uppercase tracking-wide">{b.title}</h3>
              <p className="text-muted-foreground">{b.desc}</p>
            </div>
          ))}
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mt-16">
          {[
            { icon: Clock, label: "Atención 24/7" },
            { icon: Shield, label: "Protocolos adaptados" },
            { icon: Eye, label: "Supervisión constante" },
            { icon: CheckCircle2, label: "Sectores públicos y privados" },
            { icon: ThumbsUp, label: "Alta satisfacción" },
            { icon: FileCheck, label: "Comunicación fluida" },
          ].map((f) => (
            <div key={f.label} className="flex items-center gap-3 bg-card p-4 border border-border">
              <f.icon className="size-6 text-accent shrink-0" />
              <span className="text-sm uppercase tracking-wide font-medium">{f.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Trust */}
      <section className="relative py-24 px-6 overflow-hidden">
        <img src={trustHandshake} alt="Sello de confianza" className="absolute inset-0 w-full h-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-background/80"></div>
        <div className="relative max-w-4xl mx-auto text-center">
          <p className="text-accent uppercase tracking-[0.3em] text-xs mb-3">Sello de confianza</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Documentación reglamentaria</h2>
          <p className="text-muted-foreground mb-10 max-w-2xl mx-auto">
            Disponemos de toda la documentación a disposición del cliente para ofrecer claridad y transparencia en nuestros acuerdos.
          </p>
          <ul className="grid sm:grid-cols-2 gap-3 text-sm text-left max-w-2xl mx-auto mb-10">
            {["Seguros de Responsabilidad Civil", "Convenio colectivo", "Certificado de Hacienda y Seguridad Social"].map((i) => (
              <li key={i} className="flex items-center gap-2"><CheckCircle2 className="size-4 text-accent shrink-0" /> {i}</li>
            ))}
          </ul>
          <a href="/dossier-panther-service-2026.pdf" target="_blank" rel="noopener" className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-3 font-semibold uppercase tracking-wider text-sm hover:bg-accent/90 transition-colors">
            Descargar dossier
          </a>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-card border-t border-border py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">¿Tienes alguna pregunta?</h2>
          <p className="text-muted-foreground mb-8">Estamos disponibles 24/7 para atenderte.</p>
          <a href="tel:647650027" className="inline-flex items-center gap-3 bg-accent text-accent-foreground px-8 py-4 font-semibold uppercase tracking-wider hover:bg-accent/90 transition-colors">
            <Phone className="size-5" /> 647 650 027
          </a>
        </div>
      </section>
    </div>
  );
}

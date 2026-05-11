import { Link } from "@tanstack/react-router";
import { Phone, Mail, Instagram, Facebook, Clock } from "lucide-react";
import logo from "@/assets/panther-logo.png";

export function SiteFooter() {
  return (
    <footer className="bg-card border-t border-border mt-24">
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-10">
        <div>
          <img src={logo} alt="Panther Service" className="h-20 w-auto invert mb-4" />
          <p className="text-sm text-muted-foreground">
            Control y servicios profesionales. Atención personalizada 24/7.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 text-accent">Navegación</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/" className="hover:text-accent">Inicio</Link></li>
            <li><Link to="/servicios" className="hover:text-accent">Servicios</Link></li>
            <li><Link to="/nosotros" className="hover:text-accent">Nosotros</Link></li>
            <li><Link to="/contacto" className="hover:text-accent">Contacto</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 text-accent">Contacto</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex items-center gap-2"><Phone className="size-4" /> 647 650 027</li>
            <li className="flex items-center gap-2"><Mail className="size-4" /> infopanther.service@gmail.com</li>
            <li className="flex items-center gap-2"><Clock className="size-4" /> Atención 24/7</li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 text-accent">Síguenos</h4>
          <div className="flex gap-3">
            <a href="https://instagram.com/pantherservice_" className="p-2 border border-border rounded hover:border-accent hover:text-accent transition-colors" aria-label="Instagram"><Instagram className="size-5" /></a>
            <a href="#" className="p-2 border border-border rounded hover:border-accent hover:text-accent transition-colors" aria-label="Facebook"><Facebook className="size-5" /></a>
          </div>
        </div>
      </div>
      <div className="border-t border-border py-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Panther Service · Control y Servicios
      </div>
    </footer>
  );
}
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Instagram, Facebook } from "lucide-react";
import logo from "@/assets/panther-logo.png";

const links = [
  { to: "/", label: "Inicio" },
  { to: "/servicios", label: "Servicios" },
  { to: "/nosotros", label: "Nosotros" },
  { to: "/contacto", label: "Contacto" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="Panther Service" className="h-12 w-auto invert" />
          <span className="sr-only">Panther Service</span>
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-sm font-medium uppercase tracking-wider text-foreground/80 hover:text-accent transition-colors"
              activeProps={{ className: "text-accent" }}
            >
              {l.label}
            </Link>
          ))}
          <div className="flex items-center gap-3 pl-4 border-l border-border">
            <a href="https://www.instagram.com/pantherservice_?igsh=MWJxdXF6ZTAycmJ0Ng==" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-foreground/80 hover:text-accent transition-colors"><Instagram className="size-4" /></a>
            <a href="https://www.facebook.com/share/18WugVLBA4/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-foreground/80 hover:text-accent transition-colors"><Facebook className="size-4" /></a>
          </div>
        </nav>
        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav className="md:hidden bg-background border-t border-border px-6 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <Link key={l.to} to={l.to} onClick={() => setOpen(false)} className="uppercase text-sm tracking-wider">
              {l.label}
            </Link>
          ))}
          <div className="flex items-center gap-4 pt-2 border-t border-border">
            <a href="https://www.instagram.com/pantherservice_?igsh=MWJxdXF6ZTAycmJ0Ng==" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-foreground/80 hover:text-accent transition-colors"><Instagram className="size-5" /></a>
            <a href="https://www.facebook.com/share/18WugVLBA4/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-foreground/80 hover:text-accent transition-colors"><Facebook className="size-5" /></a>
          </div>
        </nav>
      )}
    </header>
  );
}
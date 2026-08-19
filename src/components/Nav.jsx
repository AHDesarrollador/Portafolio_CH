import { useEffect, useState } from "react";
import { useScrollTo } from "../hooks/useLenis";
import "./Nav.css";

const LINKS = [
  { id: "inicio", label: "Inicio" },
  { id: "sobre-mi", label: "Sobre mí" },
  { id: "experiencia", label: "Experiencia" },
  { id: "educacion", label: "Educación" },
  { id: "habilidades", label: "Habilidades" },
  { id: "proyectos", label: "Proyectos" },
  { id: "contacto", label: "Contacto" },
];

export default function Nav() {
  const scrollTo = useScrollTo();
  const [active, setActive] = useState("inicio");

  useEffect(() => {
    const sections = LINKS.map((l) => document.getElementById(l.id)).filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="nav-wrap">
      <nav className="nav neo-raised" aria-label="Navegación principal">
        <button
          className="nav-brand neo-raised-sm"
          onClick={() => scrollTo("#inicio")}
          aria-label="Ir a inicio"
        >
          CH
        </button>
        <ul className="nav-links">
          {LINKS.map((link) => (
            <li key={link.id}>
              <button
                className={`nav-link ${active === link.id ? "is-active" : ""}`}
                onClick={() => scrollTo(`#${link.id}`)}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

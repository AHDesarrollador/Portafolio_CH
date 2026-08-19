import Reveal from "./Reveal";
import "./About.css";

const FACTS = [
  { label: "Ubicación", value: "Acapulco, Gro." },
  { label: "Enfoque", value: "Frontend & UI" },
  { label: "Stack principal", value: "React · Vite · GSAP" },
  { label: "Idiomas", value: "ES nativo · EN fluido" },
];

export default function About() {
  return (
    <section id="sobre-mi" className="section about">
      <Reveal>
        <p className="eyebrow">Sobre mí</p>
        <h2 className="section-title">
          Construyo interfaces con atención al detalle, hoy en React y siempre con ganas de aprender.
        </h2>
      </Reveal>

      <Reveal delay={0.1}>
        <p className="about-text">
          Soy Ingeniero en Sistemas Computacionales egresado del Instituto Tecnológico Nacional de
          México, campus Acapulco. Mi camino combina desarrollo frontend con soporte técnico
          especializado en equipos de impresión, dos mundos que me enseñaron tanto a construir
          interfaces cuidadas como a diagnosticar problemas con paciencia y método. Hoy me enfoco en
          crear experiencias web fluidas usando React, animaciones con GSAP y scroll suave con Lenis.
        </p>
      </Reveal>

      <div className="about-facts">
        {FACTS.map((fact, i) => (
          <Reveal key={fact.label} delay={0.05 * i} className="about-fact neo-raised-sm">
            <span className="about-fact-label">{fact.label}</span>
            <span className="about-fact-value">{fact.value}</span>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

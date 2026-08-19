import Reveal from "./Reveal";
import { education } from "../data/cv";
import "./Education.css";

export default function Education() {
  return (
    <section id="educacion" className="section">
      <Reveal>
        <p className="eyebrow">Educación</p>
        <h2 className="section-title">Formación en Sistemas Computacionales.</h2>
      </Reveal>

      <Reveal delay={0.1} className="edu-card neo-raised">
        <div className="edu-icon neo-pressed" aria-hidden="true">
          🎓
        </div>
        <div className="edu-body">
          <div className="edu-dates neo-pressed">
            {education.start} — {education.end}
          </div>
          <h3 className="edu-degree">{education.degree}</h3>
          <p className="edu-school">
            {education.school} <span className="dot">·</span> {education.place}
          </p>
        </div>
      </Reveal>
    </section>
  );
}

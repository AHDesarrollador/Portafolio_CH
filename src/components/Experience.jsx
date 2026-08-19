import Reveal from "./Reveal";
import { experience } from "../data/cv";
import "./Experience.css";

export default function Experience() {
  return (
    <section id="experiencia" className="section">
      <Reveal>
        <p className="eyebrow">Experiencia</p>
        <h2 className="section-title">Dos años entre interfaces y hardware.</h2>
      </Reveal>

      <div className="timeline">
        <div className="timeline-line" aria-hidden="true" />
        {experience.map((job, i) => (
          <Reveal key={job.company} delay={0.1 * i} className="timeline-item">
            <div className="timeline-node neo-raised-sm" aria-hidden="true" />
            <div className="timeline-card neo-raised">
              <div className="timeline-dates neo-pressed">
                {job.start} — {job.end}
              </div>
              <h3 className="timeline-role">{job.role}</h3>
              <p className="timeline-company">
                {job.company} <span className="dot">·</span> {job.place}
              </p>
              <ul className="timeline-bullets">
                {job.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

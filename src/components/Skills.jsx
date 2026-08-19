import Reveal from "./Reveal";
import { skillGroups } from "../data/cv";
import "./Skills.css";

export default function Skills() {
  return (
    <section id="habilidades" className="section">
      <Reveal>
        <p className="eyebrow">Habilidades</p>
        <h2 className="section-title">Herramientas que uso todos los días.</h2>
      </Reveal>

      <div className="skills-groups">
        {skillGroups.map((group, i) => (
          <Reveal key={group.label} delay={0.06 * i} className="skills-group">
            <span className="skills-group-label">{group.label}</span>
            <div className="skills-chips">
              {group.skills.map((skill) => (
                <span key={skill} className="skill-chip neo-raised-sm">
                  {skill}
                </span>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

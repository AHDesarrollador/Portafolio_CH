import { useEffect, useState } from "react";
import Reveal from "./Reveal";
import { profile } from "../data/cv";
import "./Projects.css";

const LANGUAGE_COLORS = {
  JavaScript: "#f1c40f",
  TypeScript: "#3178c6",
  HTML: "#e34c26",
  CSS: "#2965f1",
  Python: "#3572A5",
  React: "#61dafb",
};

export default function Projects() {
  const [state, setState] = useState({
    status: profile.githubUsername ? "loading" : "empty",
    repos: [],
  });

  useEffect(() => {
    if (!profile.githubUsername) return;

    let cancelled = false;

    fetch(
      `https://api.github.com/users/${profile.githubUsername}/repos?sort=updated&per_page=9`
    )
      .then((res) => {
        if (!res.ok) throw new Error("No se pudo obtener los repositorios");
        return res.json();
      })
      .then((data) => {
        if (cancelled) return;
        const repos = (Array.isArray(data) ? data : [])
          .filter((r) => !r.fork)
          .sort((a, b) => b.stargazers_count - a.stargazers_count)
          .slice(0, 6);
        setState({ status: "ready", repos });
      })
      .catch(() => {
        if (!cancelled) setState({ status: "error", repos: [] });
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <section id="proyectos" className="section">
      <Reveal>
        <p className="eyebrow">Proyectos</p>
        <h2 className="section-title">Repositorios recientes en GitHub.</h2>
      </Reveal>

      {state.status === "loading" && (
        <div className="projects-grid">
          {[0, 1, 2].map((i) => (
            <div key={i} className="project-card neo-raised project-skeleton" />
          ))}
        </div>
      )}

      {state.status === "ready" && (
        <div className="projects-grid">
          {state.repos.map((repo, i) => (
            <Reveal key={repo.id} delay={0.06 * i} className="project-card neo-raised">
              <div className="project-card-top">
                <h3 className="project-name">{repo.name}</h3>
                {repo.stargazers_count > 0 && (
                  <span className="project-stars">★ {repo.stargazers_count}</span>
                )}
              </div>
              <p className="project-desc">
                {repo.description || "Sin descripción todavía."}
              </p>
              <div className="project-meta">
                {repo.language && (
                  <span className="project-lang">
                    <i
                      style={{ background: LANGUAGE_COLORS[repo.language] || "var(--ink-soft)" }}
                    />
                    {repo.language}
                  </span>
                )}
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noreferrer"
                  className="project-link"
                >
                  Ver repositorio →
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      )}

      {state.status === "empty" && (
        <Reveal className="project-empty neo-pressed">
          <p>
            Agrega tu usuario de GitHub en <code>src/data/cv.js</code> (campo{" "}
            <code>githubUsername</code>) para que tus repositorios aparezcan aquí
            automáticamente.
          </p>
        </Reveal>
      )}

      {state.status === "error" && (
        <Reveal className="project-empty neo-pressed">
          <p>
            No se pudieron cargar los repositorios de GitHub en este momento. Verifica el
            usuario configurado en <code>src/data/cv.js</code> o tu conexión a internet.
          </p>
        </Reveal>
      )}
    </section>
  );
}

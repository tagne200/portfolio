import { useState } from "react";
import { PROJECTS } from "../../data/placeholderContent.js";

const FILTERS = [
  { id: "all", label: "Tous" },
  { id: "featured", label: "Mis en avant" },
];

export default function Projects() {
  const [filter, setFilter] = useState("all");
  const visible = filter === "all" ? PROJECTS : PROJECTS.filter((p) => p.featured);

  return (
    <section className="section" id="projects">
      <div className="container">
        <div className="section-head reveal">
          <span className="section-kicker">Projets</span>
          <h2>Ce que j'ai construit</h2>
          <div className="filter-row">
            {FILTERS.map((item) => (
              <button
                key={item.id}
                className={`filter-btn ${filter === item.id ? "is-active" : ""}`}
                onClick={() => setFilter(item.id)}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>

        <div className="projects-grid">
          {visible.map((project, index) => (
            <article
              key={project.title}
              className="project-card card"
              style={{ "--accent": project.accent, animationDelay: `${index * 70}ms` }}
            >
              <div className="project-top">
                <span className="project-index">0{index + 1}</span>
                {project.featured && <span className="project-flag">★ Featured</span>}
              </div>
              <h3>{project.title}</h3>
              <p className="project-subtitle">{project.subtitle}</p>
              <p>{project.description}</p>
              <div className="tag-row">
                {project.tags.map((tag) => (
                  <span key={tag} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="project-links">
                <a href={project.links.demo} target="_blank" rel="noreferrer">
                  Démo ↗
                </a>
                <a href={project.links.code} target="_blank" rel="noreferrer">
                  Code ↗
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

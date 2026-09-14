import { SKILLS } from "../../data/placeholderContent.js";

export default function Skills() {
  return (
    <section className="section" id="skills">
      <div className="container">
        <div className="section-head reveal">
          <span className="section-kicker">Compétences</span>
          <h2>Ma boîte à outils</h2>
          <p className="section-sub">
            Du front au déploiement : je travaille aussi bien l'interface que l'API, les tests et
            l'infrastructure qui fait tourner le tout.
          </p>
        </div>

        <div className="skills-grid">
          {SKILLS.map((group) => (
            <article
              key={group.group}
              className="skill-card card reveal"
              style={{ "--accent": group.accent }}
            >
              <h3>{group.group}</h3>
              <ul>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

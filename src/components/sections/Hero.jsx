import { PROFILE } from "../../data/placeholderContent.js";
import Avatar from "../widgets/Avatar.jsx";
import Mascot from "../widgets/Mascot.jsx";
import CopyButton from "../widgets/CopyButton.jsx";

export default function Hero({ onOpenResume }) {
  return (
    <section className="hero" id="top">
      <div className="hero-glow" aria-hidden="true" />
      <div className="container hero-inner">
        <div className="hero-copy">
          <p className="hero-hello">
            Salut, moi c'est <span className="hero-script">{PROFILE.signature}</span>
          </p>
          <h1 className="hero-title">
            {PROFILE.name}
            <span className="hero-role">{PROFILE.role}</span>
          </h1>
          <p className="hero-tagline">{PROFILE.tagline}</p>

          <div className="hero-cta">
            <a className="btn btn-primary" href="#projects">
              Voir mes projets
            </a>
            <button className="btn btn-ghost" onClick={onOpenResume}>
              Consulter mon CV
            </button>
            <CopyButton value={PROFILE.email} label={PROFILE.email} className="hero-copy-btn" />
          </div>

          <ul className="hero-stats">
            {PROFILE.stats.map((stat) => (
              <li key={stat.label}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="hero-visual">
          <Avatar />
          <div className="hero-mascot">
            <Mascot />
            <span className="hero-mascot-hint">Clique-moi</span>
          </div>
        </div>
      </div>

      <a className="hero-scroll" href="#about" aria-label="Défiler vers la suite">
        <span />
      </a>
    </section>
  );
}

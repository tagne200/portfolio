import { PROFILE } from "../../data/placeholderContent.js";

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <div className="section-head reveal">
          <span className="section-kicker">À propos</span>
          <h2>Un mot sur moi</h2>
        </div>

        <div className="about-grid">
          <div className="about-text reveal">
            {PROFILE.bio.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}

            <div className="about-chips">
              <div>
                <span className="about-chips-label">Qualités</span>
                <div className="tag-row">
                  {PROFILE.qualities.map((quality) => (
                    <span key={quality} className="tag">
                      {quality}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <span className="about-chips-label">Centres d'intérêt</span>
                <div className="tag-row">
                  {PROFILE.interests.map((interest) => (
                    <span key={interest} className="tag">
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <aside className="about-card card reveal">
            <div className="about-row">
              <span>Localisation</span>
              <strong>{PROFILE.location}</strong>
            </div>
            <div className="about-row">
              <span>Email</span>
              <strong>{PROFILE.email}</strong>
            </div>
            <div className="about-row">
              <span>Téléphone</span>
              <strong>{PROFILE.phone}</strong>
            </div>
            <div className="about-row">
              <span>Langues</span>
              <strong>{PROFILE.languages}</strong>
            </div>
            <div className="about-row">
              <span>Statut</span>
              <strong className="about-status">
                <span className="live-dot" aria-hidden="true" />
                {PROFILE.status.label}
              </strong>
            </div>
            <div className="about-socials">
              {PROFILE.socials.map((social) => (
                <a key={social.label} href={social.url} target="_blank" rel="noreferrer">
                  {social.label}
                </a>
              ))}
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

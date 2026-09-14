import { EXPERIENCES } from "../../data/placeholderContent.js";

export default function Experience() {
  return (
    <section className="section" id="experience">
      <div className="container">
        <div className="section-head reveal">
          <span className="section-kicker">Expérience</span>
          <h2>Mon parcours professionnel</h2>
        </div>

        <ol className="timeline">
          {EXPERIENCES.map((job) => (
            <li key={`${job.company}-${job.period}`} className="timeline-item reveal">
              <div className="timeline-dot" aria-hidden="true" />
              <div className="timeline-card card">
                <div className="timeline-top">
                  <div>
                    <h3>{job.role}</h3>
                    <p className="timeline-company">
                      {job.company} · {job.location}
                    </p>
                  </div>
                  <span className="timeline-period">{job.period}</span>
                </div>
                <p>{job.description}</p>
                <ul className="timeline-highlights">
                  {job.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
                <div className="tag-row">
                  {job.stack.map((tech) => (
                    <span key={tech} className="tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

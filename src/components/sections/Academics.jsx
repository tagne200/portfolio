import { useState } from "react";
import { ACADEMICS } from "../../data/placeholderContent.js";

export default function Academics() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="section" id="academics">
      <div className="container">
        <div className="section-head reveal">
          <span className="section-kicker">Formation</span>
          <h2>Mon parcours académique</h2>
        </div>

        <div className="academics-list">
          {ACADEMICS.map((entry, index) => {
            const isOpen = openIndex === index;
            return (
              <article key={entry.school} className={`academic-card card ${isOpen ? "is-open" : ""}`}>
                <button
                  className="academic-head"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  aria-expanded={isOpen}
                >
                  <span className="academic-year">{entry.period}</span>
                  <span className="academic-title">
                    <strong>{entry.degree}</strong>
                    <span>{entry.school}</span>
                  </span>
                  <span className="academic-grade">{entry.grade}</span>
                  <span className="academic-chevron" aria-hidden="true">
                    ⌄
                  </span>
                </button>
                {isOpen && (
                  <ul className="academic-body">
                    {entry.details.map((detail) => (
                      <li key={detail}>{detail}</li>
                    ))}
                  </ul>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

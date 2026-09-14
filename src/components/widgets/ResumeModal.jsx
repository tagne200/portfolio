import { useEffect, useState } from "react";
import { RESUME, PROFILE } from "../../data/placeholderContent.js";

export default function ResumeModal({ open, onClose }) {
  const [closing, setClosing] = useState(false);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (event) => {
      if (event.key === "Escape") startClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  function startClose() {
    setClosing(true);
    setTimeout(() => {
      setClosing(false);
      onClose();
    }, 280);
  }

  if (!open) return null;

  return (
    <div
      className={`resume-overlay ${closing ? "is-closing" : ""}`}
      onClick={startClose}
      role="presentation"
    >
      <div
        className={`resume-modal ${closing ? "is-closing" : ""}`}
        onClick={(event) => event.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label="Aperçu du CV"
      >
        <header className="resume-head">
          <div>
            <p className="resume-eyebrow">CV — {RESUME.updated}</p>
            <h3>{PROFILE.name}</h3>
            <p className="resume-summary">{RESUME.summary}</p>
          </div>
          <button className="resume-close" onClick={startClose} aria-label="Fermer">
            ✕
          </button>
        </header>

        <div className="resume-facts">
          {RESUME.quickFacts.map((fact) => (
            <div key={fact.label} className="resume-fact">
              <span className="resume-fact-label">{fact.label}</span>
              <span className="resume-fact-value">{fact.value}</span>
            </div>
          ))}
        </div>

        <div className="resume-preview">
          <object data={RESUME.file} type="application/pdf" aria-label="Aperçu du CV">
            <div className="resume-preview-fallback">
              <span className="resume-preview-icon">📄</span>
              <p>
                L'aperçu ne s'affiche pas dans ce navigateur — utilisez les boutons ci-dessous.
              </p>
            </div>
          </object>
        </div>

        <footer className="resume-actions">
          <a className="btn btn-primary" href={RESUME.file} download>
            Télécharger le CV
          </a>
          <a className="btn btn-ghost" href={RESUME.file} target="_blank" rel="noreferrer">
            Ouvrir dans un onglet
          </a>
        </footer>
      </div>
    </div>
  );
}

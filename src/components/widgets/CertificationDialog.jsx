import { Link } from "../../lib/router.jsx";
import CertificationSeal from "./CertificationSeal.jsx";

const dateFormat = new Intl.DateTimeFormat("fr-FR", {
  day: "numeric",
  month: "long",
  year: "numeric",
  timeZone: "UTC",
});

export function formatDate(isoDate) {
  return dateFormat.format(new Date(isoDate));
}

export default function CertificationDialog({ dialogRef, certification, domain }) {
  async function close() {
    const dialog = dialogRef.current;
    if (!dialog?.open) return;

    // Sans `overlay`, le navigateur ne sait pas animer la sortie du top layer : on la joue avant close().
    if (!window.CSS?.supports?.("overlay", "auto")) {
      dialog.setAttribute("data-closing", "");
      const animations = dialog.getAnimations({ subtree: true });
      await Promise.race([
        Promise.allSettled(animations.map((animation) => animation.finished)),
        new Promise((resolve) => setTimeout(resolve, 400)),
      ]);
      dialog.removeAttribute("data-closing");
    }
    dialog.close();
  }

  function handleCancel(event) {
    event.preventDefault();
    close();
  }

  // `closedby` n'existe pas partout : on ferme aussi au clic sur le fond dans ces navigateurs.
  function handleBackdropClick(event) {
    const dialog = dialogRef.current;
    if ("closedBy" in HTMLDialogElement.prototype || event.target !== dialog) return;
    const box = dialog.getBoundingClientRect();
    const inside =
      box.top <= event.clientY &&
      event.clientY <= box.bottom &&
      box.left <= event.clientX &&
      event.clientX <= box.right;
    if (!inside) close();
  }

  return (
    <dialog
      ref={dialogRef}
      className="cert-dialog"
      closedby="any"
      aria-labelledby="cert-dialog-title"
      onCancel={handleCancel}
      onClick={handleBackdropClick}
      style={domain ? { "--accent": domain.accent } : undefined}
    >
      {certification && (
        <>
          <header className="cert-dialog-head">
            <CertificationSeal className="cert-seal" />
            <div>
              <p className="cert-dialog-eyebrow">Certificat de réussite</p>
              <h2 id="cert-dialog-title">{certification.title}</h2>
            </div>
            <button type="button" className="resume-close" onClick={close} aria-label="Fermer">
              ✕
            </button>
          </header>

          <dl className="cert-dialog-facts">
            <div>
              <dt>Délivré par</dt>
              <dd>{certification.issuer}</dd>
            </div>
            <div>
              <dt>Date d'obtention</dt>
              <dd>{formatDate(certification.issued)}</dd>
            </div>
            <div>
              <dt>Titulaire</dt>
              <dd>{certification.holder}</dd>
            </div>
            <div>
              <dt>N° de certificat</dt>
              <dd className="cert-dialog-number">{certification.number}</dd>
            </div>
            <div>
              <dt>Domaine</dt>
              <dd>{domain?.label}</dd>
            </div>
          </dl>

          <div className="tag-row">
            {certification.skills.map((skill) => (
              <span key={skill} className="tag">
                {skill}
              </span>
            ))}
          </div>

          <footer className="cert-dialog-actions">
            <Link
              href="/#contact"
              className="btn btn-primary"
              onClick={() => dialogRef.current.close()}
            >
              Demander l'original
            </Link>
            <button type="button" className="btn btn-ghost" onClick={close}>
              Fermer
            </button>
          </footer>
        </>
      )}
    </dialog>
  );
}

import { useState } from "react";
import { PROFILE } from "../../data/placeholderContent.js";
import { useToast } from "../../context/ToastContext.jsx";
import CopyButton from "../widgets/CopyButton.jsx";

const EMPTY = { name: "", email: "", message: "" };
const ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_KEY;

export default function Contact() {
  const [form, setForm] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");
  const { notify } = useToast();

  function update(field, value) {
    setForm((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
  }

  function validate() {
    const next = {};
    if (!form.name.trim()) next.name = "Indique ton nom";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = "Email invalide";
    if (form.message.trim().length < 10) next.message = "Message trop court (10 caractères min.)";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  async function submit(event) {
    event.preventDefault();
    if (status !== "idle") return;
    if (!validate()) {
      notify("Vérifiez les champs du formulaire", "error");
      return;
    }
    if (!ACCESS_KEY) {
      notify("Clé Web3Forms manquante — voir le fichier .env", "error");
      return;
    }

    setStatus("sending");
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          subject: `Portfolio — nouveau message de ${form.name}`,
          from_name: "Portfolio Kenneth Tagne",
          name: form.name,
          email: form.email,
          message: form.message,
          botcheck: event.target.botcheck?.checked ? "true" : "",
        }),
      });
      const result = await response.json();
      if (!response.ok || !result.success) throw new Error(result.message ?? "Envoi impossible");

      setStatus("sent");
      setForm(EMPTY);
      notify("Message envoyé, merci !", "success");
    } catch (error) {
      setStatus("idle");
      notify(`Échec de l'envoi : ${error.message}`, "error");
    }
  }

  return (
    <section className="section" id="contact">
      <div className="container">
        <div className="section-head reveal">
          <span className="section-kicker">Contact</span>
          <h2>Travaillons ensemble</h2>
          <p className="section-sub">
            Je suis à la recherche d'un stage de développeur full-stack et ouvert aux projets web,
            mobile et cloud. Écrivez-moi, je réponds sous 48h.
          </p>
        </div>

        <div className="contact-grid">
          <aside className="contact-aside card reveal">
            <h3>Coordonnées</h3>
            <p className="contact-email">{PROFILE.email}</p>
            <CopyButton value={PROFILE.email} label="Copier l'email" />
            <div className="contact-socials">
              {PROFILE.socials.map((social) => (
                <a key={social.label} href={social.url} target="_blank" rel="noreferrer">
                  {social.label} ↗
                </a>
              ))}
            </div>
            <p className="contact-location">📍 {PROFILE.location}</p>
          </aside>

          <form className="contact-form card reveal" onSubmit={submit} noValidate>
            {status === "sent" ? (
              <div className="success-state">
                <div className="success-circle">
                  <span className="success-ring" aria-hidden="true" />
                  <svg viewBox="0 0 52 52" aria-hidden="true">
                    <path className="success-check" d="M14 27 L23 35 L38 18" />
                  </svg>
                </div>
                <h3>Message envoyé</h3>
                <p>Merci pour votre message, je vous réponds sous 48h.</p>
                <button
                  type="button"
                  className="btn btn-ghost"
                  onClick={() => setStatus("idle")}
                >
                  Envoyer un autre message
                </button>
              </div>
            ) : (
              <>
                <input
                  type="checkbox"
                  name="botcheck"
                  className="honeypot"
                  tabIndex={-1}
                  autoComplete="off"
                />

                <label className="field">
                  <span>Nom</span>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => update("name", e.target.value)}
                    placeholder="Votre nom"
                  />
                  {errors.name && <em className="field-error">{errors.name}</em>}
                </label>

                <label className="field">
                  <span>Email</span>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => update("email", e.target.value)}
                    placeholder="vous@exemple.com"
                  />
                  {errors.email && <em className="field-error">{errors.email}</em>}
                </label>

                <label className="field">
                  <span>Message</span>
                  <textarea
                    rows={5}
                    value={form.message}
                    onChange={(e) => update("message", e.target.value)}
                    placeholder="Parlez-moi de votre projet ou de votre offre de stage…"
                  />
                  {errors.message && <em className="field-error">{errors.message}</em>}
                </label>

                <button
                  type="submit"
                  className={`btn btn-primary send-btn ${status === "sending" ? "is-sending" : ""}`}
                  disabled={status === "sending"}
                >
                  <span className="send-plane" aria-hidden="true">
                    ✈
                  </span>
                  {status === "sending" ? "Envoi…" : "Envoyer le message"}
                </button>
                <p className="form-note">
                  Vos données servent uniquement à vous répondre. Réponse sous 48h.
                </p>
              </>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

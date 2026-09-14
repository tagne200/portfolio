import { PROFILE } from "../../data/placeholderContent.js";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div>
          <p className="footer-signature">{PROFILE.signature}</p>
          <p className="footer-note">
            Conçu et développé avec React + Vite — {new Date().getFullYear()}
          </p>
        </div>
        <div className="footer-links">
          {PROFILE.socials.map((social) => (
            <a key={social.label} href={social.url} target="_blank" rel="noreferrer">
              {social.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

import { useState } from "react";
import { PROFILE } from "../../data/placeholderContent.js";
import { Link } from "../../lib/router.jsx";

export default function StatusBanner() {
  const [visible, setVisible] = useState(true);
  if (!visible) return null;

  return (
    <div className="status-banner">
      <span className="live-dot" aria-hidden="true" />
      <span>{PROFILE.status.label}</span>
      <Link href="/#contact" className="status-banner-link">
        Me contacter
      </Link>
      <button
        className="status-banner-close"
        onClick={() => setVisible(false)}
        aria-label="Masquer le bandeau"
      >
        ✕
      </button>
    </div>
  );
}

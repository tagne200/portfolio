import { useCallback, useEffect, useRef, useState } from "react";
import { PROFILE } from "../../data/placeholderContent.js";

const MOODS = ["nod", "bounce", "shake"];

export default function Avatar() {
  const [mood, setMood] = useState(null);
  const resetTimer = useRef(null);

  useEffect(() => () => clearTimeout(resetTimer.current), []);

  const react = useCallback(() => {
    const next = MOODS[Math.floor(Math.random() * MOODS.length)];
    setMood(next);
    clearTimeout(resetTimer.current);
    resetTimer.current = setTimeout(() => setMood(null), 800);
  }, []);

  return (
    <div className="avatar-wrap">
      <div className="avatar-halo" aria-hidden="true" />
      <button
        type="button"
        className={`avatar ${mood ? `avatar-${mood}` : ""}`}
        onClick={react}
        aria-label="Animer la photo"
      >
        <img
          className="avatar-photo"
          src="/photo-kenneth.jpg"
          alt="Kenneth Tagne Nathan"
          width="325"
          height="316"
        />
        <span className="avatar-tint" aria-hidden="true" />
      </button>
      <span className="avatar-badge" title={PROFILE.status.label}>
        <span className="live-dot" aria-hidden="true" />
        {PROFILE.status.label}
      </span>
    </div>
  );
}

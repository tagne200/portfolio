import { useCallback, useState } from "react";

const REACTIONS = ["wiggle", "bounce"];

export default function Mascot({ onPoke }) {
  const [reaction, setReaction] = useState(null);

  const poke = useCallback(() => {
    const next = REACTIONS[Math.floor(Math.random() * REACTIONS.length)];
    setReaction(next);
    onPoke?.(next);
    setTimeout(() => setReaction(null), 700);
  }, [onPoke]);

  return (
    <button
      type="button"
      className={`mascot ${reaction ? `mascot-${reaction}` : ""}`}
      onClick={poke}
      aria-label="Interagir avec la mascotte"
      title="Clique-moi"
    >
      <svg viewBox="0 0 120 120" aria-hidden="true" focusable="false">
        <ellipse cx="60" cy="104" rx="30" ry="6" className="mascot-shadow" />
        <path
          d="M28 46 L22 20 L46 34 Z"
          className="mascot-ear"
        />
        <path d="M92 46 L98 20 L74 34 Z" className="mascot-ear" />
        <path
          d="M60 26 C86 26 100 46 100 66 C100 88 82 100 60 100 C38 100 20 88 20 66 C20 46 34 26 60 26 Z"
          className="mascot-body"
        />
        <ellipse cx="60" cy="78" rx="26" ry="18" className="mascot-muzzle" />
        <circle cx="46" cy="62" r="6" className="mascot-eye" />
        <circle cx="74" cy="62" r="6" className="mascot-eye" />
        <circle cx="47.6" cy="60.2" r="2" className="mascot-glint" />
        <circle cx="75.6" cy="60.2" r="2" className="mascot-glint" />
        <path d="M54 76 L66 76 L60 83 Z" className="mascot-nose" />
        <path
          d="M60 83 C60 90 54 92 50 88 M60 83 C60 90 66 92 70 88"
          className="mascot-mouth"
        />
      </svg>
    </button>
  );
}

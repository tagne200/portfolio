import { useState } from "react";
import { useToast } from "../../context/ToastContext.jsx";

export default function CopyButton({ value, label = "Copier", className = "" }) {
  const [popped, setPopped] = useState(false);
  const { notify } = useToast();

  async function copy() {
    try {
      await navigator.clipboard.writeText(value);
      notify("Copié dans le presse-papier", "success");
    } catch {
      notify("Impossible de copier", "error");
    }
    setPopped(true);
    setTimeout(() => setPopped(false), 420);
  }

  return (
    <button
      type="button"
      className={`copy-btn ${popped ? "is-popped" : ""} ${className}`}
      onClick={copy}
    >
      <span className="copy-icon" aria-hidden="true">
        {popped ? "✓" : "⧉"}
      </span>
      {label}
    </button>
  );
}

const TONE_ICON = {
  info: "•",
  success: "✓",
  error: "!",
};

export default function ToastContainer({ toasts, onDismiss }) {
  return (
    <div className="toast-stack" role="status" aria-live="polite">
      {toasts.map((toast) => (
        <button
          key={toast.id}
          className={`toast toast-${toast.tone}`}
          onClick={() => onDismiss(toast.id)}
          type="button"
        >
          <span className="toast-icon">{TONE_ICON[toast.tone] ?? "•"}</span>
          <span>{toast.message}</span>
        </button>
      ))}
    </div>
  );
}

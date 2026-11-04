export default function CertificationSeal({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 48 48" aria-hidden="true" focusable="false">
      <path className="seal-ribbon" d="M16 29 L11 44 L18.5 40.5 L23 46 L25 33 Z" />
      <path className="seal-ribbon" d="M32 29 L37 44 L29.5 40.5 L25 46 L23 33 Z" />
      <circle className="seal-disc" cx="24" cy="20" r="16" />
      <circle className="seal-inner" cx="24" cy="20" r="11.5" />
      <path className="seal-check" d="M18.5 20.5 L22.5 24.5 L30 16.5" />
    </svg>
  );
}

import { useMemo, useRef, useState } from "react";
import { flushSync } from "react-dom";
import { CERTIFICATIONS, CERTIFICATION_DOMAINS } from "../data/placeholderContent.js";
import { useReveal } from "../hooks/useReveal.js";
import { Link } from "../lib/router.jsx";
import { runViewTransition } from "../lib/viewTransition.js";
import CertificationDialog, { formatDate } from "../components/widgets/CertificationDialog.jsx";
import CertificationSeal from "../components/widgets/CertificationSeal.jsx";

const ALL = "all";

const monthFormat = new Intl.DateTimeFormat("fr-FR", {
  month: "long",
  year: "numeric",
  timeZone: "UTC",
});

function domainOf(certification) {
  return CERTIFICATION_DOMAINS.find((domain) => domain.id === certification.domain);
}

function countOf(domainId) {
  return CERTIFICATIONS.filter((certification) => certification.domain === domainId).length;
}

function groupByMonth(certifications) {
  const sorted = [...certifications].sort((a, b) => b.issued.localeCompare(a.issued));
  const months = new Map();
  sorted.forEach((certification) => {
    const key = certification.issued.slice(0, 7);
    if (!months.has(key)) months.set(key, []);
    months.get(key).push(certification);
  });
  return [...months].map(([key, items]) => ({
    key,
    label: monthFormat.format(new Date(`${key}-01`)),
    items,
  }));
}

export default function Certifications() {
  useReveal();

  const [filter, setFilter] = useState(ALL);
  const [selected, setSelected] = useState(null);
  const dialogRef = useRef(null);

  const visible = useMemo(
    () =>
      filter === ALL
        ? CERTIFICATIONS
        : CERTIFICATIONS.filter((certification) => certification.domain === filter),
    [filter],
  );
  const months = useMemo(() => groupByMonth(visible), [visible]);
  const years = useMemo(
    () => [...new Set(CERTIFICATIONS.map((item) => item.issued.slice(0, 4)))].sort(),
    [],
  );

  function chooseFilter(next) {
    if (next === filter) return;
    runViewTransition(() => flushSync(() => setFilter(next)));
  }

  function openDetails(certification) {
    flushSync(() => setSelected(certification));
    dialogRef.current.showModal();
  }

  const filters = [
    { id: ALL, label: "Tous", count: CERTIFICATIONS.length },
    ...CERTIFICATION_DOMAINS.map((domain) => ({
      id: domain.id,
      label: domain.label,
      count: countOf(domain.id),
    })),
  ];

  const stats = [
    { value: CERTIFICATIONS.length, label: "certificats obtenus" },
    { value: CERTIFICATION_DOMAINS.length, label: "domaines couverts" },
    {
      value: years.length > 1 ? `${years[0]}–${years[years.length - 1]}` : years[0],
      label: "période d'obtention",
    },
  ];

  return (
    <div className="cert-page">
      <section className="cert-hero">
        <div className="cert-hero-glow" aria-hidden="true" />
        <div className="container cert-hero-inner">
          <div className="cert-hero-copy">
            <Link href="/" className="cert-back">
              <span aria-hidden="true">←</span> Retour à l'accueil
            </Link>
            <span className="section-kicker">Certifications</span>
            <h1>Mes certifications</h1>
            <p className="cert-hero-lead">
              Mes certificats de réussite, du plus récent au plus ancien : intégration web et
              outils du quotidien d'un développeur.
            </p>
            <ul className="cert-stats">
              {stats.map((stat) => (
                <li key={stat.label}>
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="cert-hero-visual" aria-hidden="true">
            <span className="cert-hero-ring" />
            <CertificationSeal className="cert-hero-seal" />
          </div>
        </div>
      </section>

      <section className="section cert-list-section" aria-labelledby="cert-list-title">
        <div className="container">
          <div className="cert-toolbar">
            <h2 id="cert-list-title" className="cert-toolbar-title">
              Filtrer par domaine
            </h2>
            <div className="filter-row cert-filters">
              {filters.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  className={`filter-btn ${filter === item.id ? "is-active" : ""}`}
                  aria-pressed={filter === item.id}
                  onClick={() => chooseFilter(item.id)}
                >
                  {item.label}
                  <span className="cert-filter-count">{item.count}</span>
                </button>
              ))}
            </div>
            <p className="cert-results" role="status">
              {visible.length} certificat{visible.length > 1 ? "s" : ""} affiché
              {visible.length > 1 ? "s" : ""}
            </p>
          </div>

          <div className="cert-timeline">
            {months.map((month) => (
              <section
                key={month.key}
                className="cert-month"
                style={{ viewTransitionName: `cert-month-${month.key}` }}
                aria-label={month.label}
              >
                <h3 className="cert-month-label">{month.label}</h3>
                <ul className="cert-grid">
                  {month.items.map((certification) => {
                    const domain = domainOf(certification);
                    return (
                      <li
                        key={certification.id}
                        className="cert-card card"
                        style={{
                          "--accent": domain.accent,
                          viewTransitionName: `cert-${certification.id}`,
                        }}
                      >
                        <div className="cert-card-top">
                          <CertificationSeal className="cert-seal" />
                          <span className="cert-domain">{domain.label}</span>
                        </div>
                        <h4 className="cert-card-title">{certification.title}</h4>
                        <p className="cert-card-meta">
                          {certification.issuer} · {formatDate(certification.issued)}
                        </p>
                        <div className="tag-row">
                          {certification.skills.map((skill) => (
                            <span key={skill} className="tag">
                              {skill}
                            </span>
                          ))}
                        </div>
                        <button
                          type="button"
                          className="cert-open"
                          aria-haspopup="dialog"
                          aria-label={`Voir le détail : ${certification.title}`}
                          onClick={() => openDetails(certification)}
                        >
                          Voir le détail <span aria-hidden="true">→</span>
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </section>
            ))}
          </div>

          <aside className="cert-cta card reveal">
            <div>
              <h2>Besoin d'un justificatif ?</h2>
              <p>Je vous envoie les certificats originaux sur simple demande.</p>
            </div>
            <Link href="/#contact" className="btn btn-primary">
              Me contacter
            </Link>
          </aside>
        </div>
      </section>

      <CertificationDialog
        dialogRef={dialogRef}
        certification={selected}
        domain={selected ? domainOf(selected) : null}
      />
    </div>
  );
}

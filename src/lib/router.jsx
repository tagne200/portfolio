import { useSyncExternalStore } from "react";
import { flushSync } from "react-dom";
import { runViewTransition } from "./viewTransition.js";

const listeners = new Set();

function subscribe(listener) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

function normalize(pathname) {
  return pathname.replace(/\/+$/, "") || "/";
}

function currentPathname() {
  return normalize(window.location.pathname);
}

function renderRoute() {
  flushSync(() => listeners.forEach((listener) => listener()));
}

function scrollToLocation() {
  const id = decodeURIComponent(window.location.hash.slice(1));
  const target = id ? document.getElementById(id) : null;
  if (target) target.scrollIntoView({ behavior: "instant" });
  else window.scrollTo({ top: 0, behavior: "instant" });
}

function navigate(href) {
  runViewTransition(() => {
    window.history.pushState(null, "", href);
    renderRoute();
    scrollToLocation();
  });
}

// Rendu synchrone au retour arrière : le navigateur peut ainsi restaurer la position de défilement.
window.addEventListener("popstate", renderRoute);

export function usePathname() {
  return useSyncExternalStore(subscribe, currentPathname);
}

export function Link({ href, onClick, ...props }) {
  function handleClick(event) {
    onClick?.(event);
    const isPlainClick =
      event.button === 0 && !event.metaKey && !event.ctrlKey && !event.shiftKey && !event.altKey;
    if (event.defaultPrevented || !isPlainClick) return;

    const url = new URL(href, window.location.href);
    if (normalize(url.pathname) !== currentPathname()) {
      event.preventDefault();
      navigate(href);
    } else if (!url.hash) {
      event.preventDefault();
      window.scrollTo({ top: 0 });
    }
    // Ancre sur la page courante : le navigateur gère le défilement.
  }

  return <a href={href} onClick={handleClick} {...props} />;
}

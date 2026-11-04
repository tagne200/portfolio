/**
 * Anime un changement de DOM synchrone avec une View Transition quand c'est possible.
 * Sans support navigateur, ou si l'utilisateur limite les animations, la mise à jour reste immédiate.
 */
export function runViewTransition(update) {
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!document.startViewTransition || reducedMotion) {
    update();
    return;
  }
  document.startViewTransition(update);
}

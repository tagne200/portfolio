const SITE_URL = "https://kennethtagne.site";

const PAGES = {
  "/certifications": {
    title: "Certifications — Kenneth Tagne Nathan",
    description:
      "Les certificats de réussite de Kenneth Tagne Nathan : intégration web (HTML5, CSS3, Bootstrap 5), Git et GitHub, ligne de commande et environnement front-end.",
    url: `${SITE_URL}/certifications`,
  },
};

const FIELDS = {
  title: [
    ['meta[property="og:title"]', "content"],
    ['meta[name="twitter:title"]', "content"],
  ],
  description: [
    ['meta[name="description"]', "content"],
    ['meta[property="og:description"]', "content"],
    ['meta[name="twitter:description"]', "content"],
  ],
  url: [
    ['link[rel="canonical"]', "href"],
    ['meta[property="og:url"]', "content"],
  ],
};

// Valeurs d'index.html, utilisées telles quelles pour la page d'accueil.
const homeTitle = document.title;
const homeValues = new Map();

export function applyPageMeta(pathname) {
  const page = PAGES[pathname];
  document.title = page?.title ?? homeTitle;

  Object.entries(FIELDS).forEach(([field, targets]) => {
    targets.forEach(([selector, attribute]) => {
      const element = document.head.querySelector(selector);
      if (!element) return;
      if (!homeValues.has(selector)) homeValues.set(selector, element.getAttribute(attribute));
      element.setAttribute(attribute, page ? page[field] : homeValues.get(selector));
    });
  });
}

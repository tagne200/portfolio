# Documentation technique — Portfolio

## 1. Stack

React 18 et Vite 6. Le formulaire de contact s'appuie sur Web3Forms.

## 2. Organisation

```text
public/                 CV, photo, favicon, robots.txt, sitemap.xml
src/
├── App.jsx             Structure commune et choix de la page
├── main.jsx            Point d'entrée React
├── components/
│   ├── layout/         Navbar, Footer, StatusBanner, ThemePicker
│   ├── sections/       Hero, About, Academics, Experience, Skills, Projects, Games, Contact
│   └── widgets/        Avatar, CopyButton, Mascot, ResumeModal, ToastContainer, CertificationDialog, CertificationSeal
├── context/            ThemeContext et ToastContext
├── data/               Contenu du site
├── hooks/              useReveal (apparition des éléments au défilement)
├── lib/                Routeur, View Transitions et métadonnées par page
├── pages/              Home et Certifications
└── styles/             Styles globaux, composants et animations
```

## 3. Modifier le contenu

Les textes et données du profil se trouvent dans `src/data/placeholderContent.js`. Pour mettre à jour le CV ou la photo, remplacez les fichiers de `public/` en conservant leur nom, ou mettez à jour les références correspondantes.

Pour ajouter un certificat, complétez `CERTIFICATIONS` dans le même fichier, avec un `domain` présent dans `CERTIFICATION_DOMAINS`. Les compteurs, les filtres et la frise se mettent à jour seuls. Les PDF d'origine affichent la date de naissance du titulaire : ne les placez pas dans `public/` et ne recopiez pas cette date.

## 4. Configuration

| Variable | Rôle |
|---|---|
| `VITE_WEB3FORMS_KEY` | Clé d'accès Web3Forms |

Les variables `VITE_*` sont incluses dans le code envoyé au navigateur : n'y placez aucun secret serveur.

## 5. Déploiement

Le workflow `.github/workflows/deploy.yml` se déclenche à chaque push sur `main`, ou manuellement.

1. Installation avec `npm ci`.
2. Build de production.
3. Connexion SSH au serveur.
4. Synchronisation de `dist/` avec `rsync --delete`.
5. Redémarrage du processus PM2 `portfolio`.

Secrets GitHub requis : `VITE_WEB3FORMS_KEY`, `VPS_SSH_KEY`, `VPS_HOST` et `VPS_USER`.

> Pour un changement qui ne touche que la documentation, ajoutez `[skip ci]` au message de commit afin d'éviter un déploiement inutile.

## 6. Référencement

`public/robots.txt` et `public/sitemap.xml` sont servis à la racine du site. Mettez-les à jour si le domaine change, et ajoutez-y chaque nouvelle page.

## 7. Pages et routage

| URL | Page |
|---|---|
| `/` | `src/pages/Home.jsx` |
| `/certifications` | `src/pages/Certifications.jsx` |

Le routage tient dans `src/lib/router.jsx`, sans dépendance. Il fonctionne parce que le serveur renvoie `index.html` pour les URL inconnues.

Pour ajouter une page :

1. Créez le composant dans `src/pages/` et appelez `useReveal()` s'il utilise la classe `.reveal`.
2. Ajoutez la condition sur `pathname` dans `src/App.jsx`.
3. Déclarez le titre, la description et l'URL dans `src/lib/pageMeta.js`.
4. Utilisez `Link` pour les liens internes, et ajoutez la page à `NAV_LINKS` avec une propriété `href` si elle doit figurer dans le menu.
5. Ajoutez l'URL à `public/sitemap.xml`.

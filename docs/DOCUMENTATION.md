# Documentation technique — Portfolio

## 1. Stack

React 18 et Vite 6. Le formulaire de contact s'appuie sur Web3Forms.

## 2. Organisation

```text
public/                 CV, photo, favicon, robots.txt, sitemap.xml
src/
├── App.jsx             Assemblage de la page
├── main.jsx            Point d'entrée React
├── components/
│   ├── layout/         Navbar, Footer, StatusBanner, ThemePicker
│   ├── sections/       Hero, About, Academics, Experience, Skills, Projects, Games, Contact
│   └── widgets/        Avatar, CopyButton, Mascot, ResumeModal, ToastContainer
├── context/            ThemeContext et ToastContext
├── data/               Contenu du site
└── styles/             Styles globaux, composants et animations
```

## 3. Modifier le contenu

Les textes et données du profil se trouvent dans `src/data/placeholderContent.js`. Pour mettre à jour le CV ou la photo, remplacez les fichiers de `public/` en conservant leur nom, ou mettez à jour les références correspondantes.

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

`public/robots.txt` et `public/sitemap.xml` sont servis à la racine du site. Mettez-les à jour si le domaine change.

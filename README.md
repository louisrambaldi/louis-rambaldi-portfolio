# Louis Rambaldi — Portfolio

Site portfolio statique (HTML / CSS / JS, **aucune compilation**) inspiré de
l'architecture d'Art+Commerce / New Light Films.

```
louis-rambaldi-portfolio/
├── index.html          ← page
├── styles.css          ← design
├── app.js              ← grille, filtres, modale
├── data/projects.js    ← TES PROJETS (à éditer)
└── assets/work/        ← TES IMAGES / VIDÉOS (à déposer)
```

## Voir le site
**Double-clique sur `start.command`** → le site s'ouvre sur `http://localhost:8787`.
C'est la bonne méthode : en mode `file://` (double-clic direct sur `index.html`),
YouTube/Vimeo refusent souvent de lire les vidéos (erreur 153 / pas d'autoplay).
Le serveur local règle ça. Garde la fenêtre Terminal ouverte pendant la navigation.

*(1re fois : si macOS bloque `start.command`, clic droit → Ouvrir → Ouvrir.)*
Connexion internet requise (polices + vidéos YouTube/Vimeo).

---

## 1) Ajouter une image ou une vidéo à un projet — sans toucher au code
Chaque projet a un identifiant (`id`) dans `data/projects.js`.
Dépose simplement un fichier **portant ce nom** dans `assets/work/` :

| Tu veux…                 | Dépose ce fichier                         | À faire en plus                          |
|--------------------------|-------------------------------------------|------------------------------------------|
| Une **image**            | `assets/work/<id>.jpg` (ou .webp/.png)    | rien — elle s'affiche automatiquement    |
| Une **vidéo** (au survol)| `assets/work/<id>.mp4`                     | passer `media: "image"` → `media: "video"` |

> Format conseillé : **paysage 16:9**, ~1600 px de large, JPG/WebP.
> Tant qu'aucun fichier n'est trouvé, un placeholder élégant s'affiche
> (le nom du fichier attendu apparaît au survol de la vignette).

**Exemples d'`id`** (voir la liste complète dans `data/projects.js`) :
`rouge-dior`, `balenciaga-spring24-film`, `dior-ss26`, `cartier-le-voyage`,
`loreal-lash-paradise`, `sonia-rykiel-stardust`…

## 2) Ajouter / modifier un projet
Ouvre `data/projects.js` et copie un bloc existant. Catégories disponibles :
`Beauty` · `Fashion` · `Commercial` · `Comedy` · `Feature Films` · `Music Videos`.
Les sections vides (Commercial, Comedy, Feature Films, Music Videos) attendent
juste tes premiers projets.

## 3) À personnaliser
- **Contact** : dans `index.html`, section `<!-- TODO -->` → ton e-mail + lien Instagram.
- **Bio** : section `Info` du même fichier.

---

## Mettre en ligne (gratuit)
- **Netlify Drop** : va sur [app.netlify.com/drop](https://app.netlify.com/drop) et
  glisse le dossier `louis-rambaldi-portfolio` → URL en ligne en 10 s.
- **GitHub Pages** / **Vercel** : pousse le dossier, c'est un site statique pur.
- Pour un nom de domaine (`louisrambaldi.com`), tu le branches ensuite côté hébergeur.

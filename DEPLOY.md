# Mettre le site en ligne

Le site est **100 % statique** → hébergement **gratuit**, **HTTPS** inclus.
Une fois en ligne, les vidéos YouTube/Vimeo se lisent et s'autoplay normalement
(plus besoin de `start.command`, qui ne sert qu'en local).

> Le dépôt git est **déjà initialisé et committé** dans ce dossier. Il ne reste
> qu'à le connecter à un hébergeur.

---

## Option A — Le plus simple (sans rien installer) : Netlify Drop
1. Va sur **https://app.netlify.com/drop**
2. Connecte-toi (gratuit — Google ou e-mail).
3. **Glisse le dossier `louis-rambaldi-portfolio`** dans la zone.
4. C'est en ligne, sur une adresse type `xxxxx.netlify.app`.

**Mettre à jour plus tard :** retourne sur ton site Netlify → onglet **Deploys** →
re-glisse le dossier. (Manuel, ~10 s.)

---

## Option B — Déploiement automatique (recommandé pour faire évoluer le site)
Une fois en place, **chaque modification se publie toute seule**.

### 1) Mettre le code sur GitHub
- Crée un compte gratuit sur **https://github.com**
- Installe **GitHub Desktop** : https://desktop.github.com (pas de ligne de commande)
  - *File ▸ Add Local Repository* → choisis le dossier `louis-rambaldi-portfolio`
  - Clique **Publish repository** (tu peux laisser « Keep this code private »)

### 2) Brancher l'hébergeur sur le dépôt
**Netlify :** https://app.netlify.com → *Add new site ▸ Import an existing project ▸
GitHub* → choisis `louis-rambaldi-portfolio` →
- **Build command :** *(laisser vide)*
- **Publish directory :** `.`
- *Deploy* ✅

*(Cloudflare Pages, équivalent et gratuit : Create project ▸ Connect to Git ▸
Build output directory = `/`.)*

### 3) Les mises à jour
Quand on modifie des fichiers, dans **GitHub Desktop** : **Commit** puis **Push**
(2 clics) → le site se met à jour en ligne tout seul en ~1 min.

---

## Nom de domaine (optionnel — ~9-12 €/an)
Pour `louisrambaldi.com` au lieu de `xxxxx.netlify.app` :
- Achète-le (le moins cher : **Cloudflare Registrar**, sinon Porkbun / OVH).
- Dans Netlify (ou Cloudflare) : **Domain settings ▸ Add a custom domain**, puis
  suis les instructions DNS. Branché en quelques minutes.

---

## Annexe — pousser via le terminal (si tu n'utilises pas GitHub Desktop)
Le dépôt local est prêt (branche `main`). Après avoir créé un dépôt **vide** sur GitHub :

```bash
cd ~/Desktop/GSTACK/louis-rambaldi-portfolio
git remote add origin https://github.com/TON-IDENTIFIANT/louis-rambaldi-portfolio.git
git push -u origin main
```

*(Astuce : si tu installes le GitHub CLI `gh` et que tu te connectes une fois,
Claude pourra créer le dépôt et pousser les mises à jour pour toi directement.)*

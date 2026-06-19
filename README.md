# BRENTEX SARL — Site vitrine

Site web professionnel pour **BRENTEX SARL** — *Fueling Serenity*.

## Stack technique

- **Next.js 16** (App Router) — performance, SEO, SSR/SSG
- **TypeScript** — fiabilité du code
- **Tailwind CSS v4** — design responsive
- **Contenu JSON** — fichiers éditables + back-office `/admin`
- **Hébergement recommandé** : Vercel (gratuit) ou VPS Node.js

## Démarrage rapide

```bash
npm install
cp .env.example .env.local
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000)

## Pages

| Page | URL |
|------|-----|
| Accueil | `/` |
| À propos | `/a-propos` |
| Nos activités | `/activites` |
| Détail activité | `/activites/[slug]` |
| Nos services | `/services` |
| Réalisations | `/realisations` |
| Galerie | `/galerie` |
| Contact | `/contact` |
| Mentions légales | `/mentions-legales` |
| Administration | `/admin` |

## Modifier le contenu

Voir **[DOCUMENTATION.md](./DOCUMENTATION.md)** pour le guide complet.

### Résumé

1. **Textes généraux, stats, annonces** → Back-office `/admin` ou `src/data/site.json`
2. **Activités** → `src/data/activities.json`
3. **Services** → `src/data/services.json`
4. **Galerie** → `src/data/gallery.json`
5. **Réalisations** → `src/data/realisations.json`
6. **Logo** → Remplacer `public/logo.svg` et ajouter `public/logo.png`
7. **Photos** → Placer dans `public/images/` et mettre à jour les chemins JSON

## Fonctionnalités

- Formulaire contact avec honeypot anti-spam
- Bouton WhatsApp flottant
- Click-to-call mobile
- Compteur statistiques animé
- Barre d'annonce configurable
- Sitemap XML + robots.txt
- SEO (meta, Open Graph)
- Scroll reveal animations
- Structure prête pour blog, témoignages, bilingue FR/EN

## Déploiement

```bash
npm run build
npm start
```

Configurer `NEXT_PUBLIC_SITE_URL` et `ADMIN_PASSWORD` en production.

SSL/HTTPS : fourni automatiquement par Vercel ou via Let's Encrypt sur VPS.

## Sauvegardes

- Sauvegarder hebdomadairement le dossier `src/data/` et `public/images/`
- Les soumissions contact sont dans `data/submissions/` (gitignored)

## Licence

Propriété de BRENTEX SARL.

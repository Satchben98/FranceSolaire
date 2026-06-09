# Recommandations techniques et SEO

## Stack recommandée

Le site actuel est volontairement statique : HTML, CSS, aucune dépendance JavaScript. C’est la base la plus rapide et la plus simple pour un site vitrine B2B local.

Option recommandée pour production :

- Site statique généré avec Astro si l’équipe veut des composants et des contenus Markdown.
- Hébergement Netlify, Vercel, Cloudflare Pages ou serveur Nginx léger.
- Formulaire branché sur Netlify Forms, Formspree, HubSpot ou un endpoint CRM.
- Images réelles compressées en WebP ou AVIF.

Alternative si l’équipe souhaite éditer les contenus sans développeur :

- WordPress léger.
- Thème sobre et rapide.
- Cache serveur.
- Extension SEO type RankMath ou Yoast.
- Désactivation des builders lourds si possible.

## Structure HTML SEO

- Une seule balise `h1` par page.
- `title` unique sous 60 caractères quand possible.
- `meta description` unique sous 160 caractères quand possible.
- URLs courtes et descriptives.
- Maillage interne entre services, méthode, zones et contact.
- Données structurées `LocalBusiness` sur l’accueil.
- Données structurées `Service` sur les pages services et locales.
- Images avec attributs `alt` descriptifs.
- Sitemap XML et robots.txt déjà inclus.

## Performance

- Remplacer les placeholders par des photos réelles compressées.
- Utiliser des images WebP/AVIF avec largeur adaptée.
- Garder les dimensions d’image stables pour éviter les décalages de mise en page.
- Ne charger aucune bibliothèque JavaScript si elle n’est pas nécessaire.
- Garder une seule feuille CSS minifiée en production.
- Activer la compression Brotli ou Gzip.
- Configurer un cache long pour `/assets/`.
- Vérifier Lighthouse mobile avant mise en ligne.

## Conversion

- Garder le CTA devis visible dans la navigation.
- Ajouter un numéro de téléphone cliquable si l’entreprise accepte les appels entrants.
- Réduire le formulaire si le volume de demandes est faible.
- Ajouter des photos avant / après dès les premières interventions.
- Ajouter 3 à 5 avis clients B2B dès que possible.
- Créer des fiches réalisations avec commune, contexte, méthode et résultat.

## Google Business Profile

- Utiliser le nom réel de l’entreprise : France Solaire.
- Renseigner les zones desservies réelles, sans créer de fausses adresses locales.
- Ajouter les catégories et services liés au nettoyage industriel, photovoltaïque et entretien de toiture si disponibles dans l’interface.
- Publier régulièrement des photos réelles : équipe, matériel, véhicules, avant / après.
- Demander des avis aux clients B2B existants en les invitant à mentionner la prestation et la ville.
- Ajouter un lien vers `/contact/` avec UTM de suivi.
- Publier des posts courts lors de nouvelles réalisations ou campagnes de maintenance.

## Promesse marketing prudente

Formulation à conserver :

> Un nettoyage régulier permet de récupérer la production photovoltaïque perdue par l’encrassement, couramment estimée autour de 3 à 5% par an selon l’exposition du site.

Formulation à éviter :

> Gagnez 30% de production garantie.

Le gain réel dépend du niveau d’encrassement, de la pente, de la météo, de l’environnement, de l’âge des modules et de l’état initial de l’installation.

## Sources utiles

- IEA PVPS : https://iea-pvps.org/key-topics/soiling-losses-impact-on-the-performance-of-photovoltaic-power-plants/
- NREL PV soiling : https://www.nrel.gov/pv/soiling
- Google Search Central LocalBusiness : https://developers.google.com/search/docs/appearance/structured-data/local-business
- Google Business Profile guidelines : https://support.google.com/business/answer/3038177

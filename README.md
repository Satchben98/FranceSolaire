# Site France Solaire - nettoyage panneaux solaires et toitures industrielles

Site statique orienté SEO local et conversion, hébergé sur Vercel.

- Contact commercial : `06 22 51 17 40`
- Zone : toute la Région Sud, avec étude des chantiers jusqu’à environ 4 h de Marseille

## Lancer en local

```bash
cd /Users/benyaich/france-solaire-site
python3 -m http.server 8080
```

Puis ouvrir `http://localhost:8080`.

## Structure

- `index.html` : accueil
- `nettoyage-panneaux-solaires/` : service photovoltaïque
- `nettoyage-toitures-industrielles/` : service toitures industrielles
- `methode-securite/` : methode, securite, exploitation
- `realisations/` : preuves terrain a enrichir
- `zones-intervention/` : hub local
- `zones-intervention/marseille/`
- `zones-intervention/aix-en-provence/`
- `zones-intervention/bouches-du-rhone/`
- `zones-intervention/paca/`
- `contact/` : demande de devis
- `merci/` : page de confirmation

## A personnaliser avant mise en ligne

- Remplacer `https://france-solaire-paca.vercel.app` si le domaine final est different.
- Ajouter l’email et l’adresse professionnelle exacte.
- Remplacer les emplacements visuels par des photos reelles avant/apres.
- Exécuter `supabase/schema.sql` dans le projet Supabase.
- Définir `SUPABASE_URL` et `SUPABASE_SERVICE_ROLE_KEY` dans Vercel.
- Ajouter les mentions legales et la politique de confidentialite.
- Verifier les droits d'utilisation des visuels de demonstration avant publication. Les remplacer de preference par les photos originales France Solaire.

## Promesse prudente

Le site emploie une promesse volontairement defendable : recuperer la production perdue par l'encrassement, souvent estimee autour de 3 a 5% par an selon l'exposition du site. Eviter les promesses fixes et universelles.

Sources utiles a citer dans les contenus longs :

- IEA PVPS : soiling losses and PV performance
- NREL : PV soiling measurement and losses
- Google Search Central : LocalBusiness structured data
- Google Business Profile Help : fiche d'etablissement et zones desservies

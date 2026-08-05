# France Toiture Réfléchissante

Site statique de l’offre Cool Roof professionnelle de France Traçage, orienté bâtiments industriels, logistiques et publics en PACA.

- Téléphone : `06 22 51 17 40`
- Email : `francetracage@gmail.com`
- Adresse : 1801 Route Nationale 8, 13400 Aubagne
- Domaine prévu : `https://france-toiture-reflechissante.fr`

## Lancer en local

```bash
cd /Users/benyaich/france-solaire-site
python3 -m http.server 8080
```

Puis ouvrir `http://localhost:8080`.

## Pages

- `/` : accueil et conversion
- `/solution-roof-cool/` : principe du Cool Roof
- `/performances/` : indicateurs et limites
- `/applications-supports/` : bâtiments et supports
- `/methode-securite/` : protocole chantier
- `/realisations/` : chantier de Sanary et futurs cas clients
- `/zones-intervention/` : PACA et grands projets hors région
- `/contact/` : demande d’étude

## Formulaire

L’API Vercel enregistre les demandes dans la table Supabase existante `france_solaire_leads`. Les variables `SUPABASE_URL` et `SUPABASE_SERVICE_ROLE_KEY` doivent rester définies dans Vercel.

## À compléter avant la mise en ligne définitive

- Remplacer l’espace Sanary par les photos et la vidéo drone réelles.
- Joindre ou référencer les fiches techniques, PV et certifications du système appliqué.
- Ajouter les mentions légales et une politique de confidentialité validées.
- Vérifier le raccordement du domaine final au projet Vercel.

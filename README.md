# Site CFJT — Cours de Maqâm et Hazanout tunisienne

## Structure
- `index.html` : page d’accueil et liste des séances
- `session.html` : page de détail d’une séance
- `styles.css` : design général
- `app.js` : affichage et filtres de l’accueil
- `session.js` : affichage d’une séance
- `data/sessions.js` : seul fichier à modifier pour ajouter les cours
- `media/` : dossier destiné aux fichiers audio, vidéo, images et PDF
- `assets/` : éléments graphiques permanents

## Ajouter une séance
Ouvrir `data/sessions.js`, copier un bloc existant puis modifier :
- `id`
- `date`
- `title`
- `maqam`
- `excerpt`
- `summary`

Pour ajouter des médias :
- vidéo : `video: "media/nom-video.mp4"`
- audio :
  `audios: [{ title: "Extrait 1", src: "media/extrait-1.mp3" }]`
- photos :
  `gallery: ["media/photo-1.jpg", "media/photo-2.jpg"]`
- document :
  `documents: [{ title: "Partition PDF", src: "media/partition.pdf" }]`

## Mise en ligne
Le site est statique. Il peut être publié gratuitement sur GitHub Pages, Netlify ou Vercel.
Aucune base de données n’est nécessaire pour cette première version.

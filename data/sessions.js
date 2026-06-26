/*
  AJOUTER UNE NOUVELLE SÉANCE
  1. Dupliquez un objet {...} ci-dessous.
  2. Changez l'id, la date, le titre et le contenu.
  3. Placez vos fichiers dans le dossier /media.
  4. Indiquez leur chemin, par exemple : "media/cours-02-audio.mp3".
*/
const sessions = [
  {
  id: "seance-01",
  featured: true,
  date: "29 juin 2026",
  title: "Cours n°1 — Maqâm Bayati",
  maqam: "Maqâm Bayati",
  excerpt:
    "Introduction générale aux maqâmât et début de l’apprentissage du maqâm Bayati, avec des exercices pratiques et un travail sur un piyout.",

  summary: [
    "Introduction générale aux maqâmât et explication de leur fonctionnement.",
    "Définition des principaux termes musicaux.",
    "Début de l’apprentissage du maqâm Bayati.",
    "Exercices vocaux et mélodiques sur le mode Bayati.",
    "Reconnaissance des différentes phrases mélodiques.",
    "Travail pratique sur un piyout, c’est-à-dire un poème liturgique."
  ],

  sections: [
    {
      title: "Partie théorique",
      items: [
        "Introduction générale aux maqâmât et explications.",
        "Définition des principaux termes musicaux.",
        "Début de l’apprentissage du maqâm Bayati."
      ]
    },
    {
      title: "Partie pratique",
      items: [
        "Exercices sur le mode Bayati.",
        "Reconnaissance des différentes phrases mélodiques.",
        "Travail sur un piyout."
      ]
    }
  ],

  image: "assets/affiche-cours.png",

  video: "",

  audios: [
    /*
    {
      title: "Enregistrement complet du cours",
      src: "media/seance-01/cours-complet.mp3"
    },
    {
      title: "Exercices sur le maqâm Bayati",
      src: "media/seance-01/exercices-bayati.mp3"
    },
    {
      title: "Travail sur le piyout",
      src: "media/seance-01/piyout.mp3"
    }
    */
  ],

  gallery: [
    /*
    "media/seance-01/photo-01.jpg",
    "media/seance-01/photo-02.jpg"
    */
  ],

  documents: [
    /*
    {
      title: "Support du cours n°1",
      src: "media/seance-01/support-cours-01.pdf"
    }
    */
  ],

  duration: "2 heures",
  teacher: "Ethan Krief"
}
];

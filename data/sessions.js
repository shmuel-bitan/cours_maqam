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
    title: "Cours inaugural",
    maqam: "Présentation générale",
    excerpt: "Première rencontre autour du maqâm, de la hazanout tunisienne et des objectifs du cycle de cours.",
    summary: [
      "Présentation du parcours et du fonctionnement des séances.",
      "Introduction à la notion de maqâm et à la transmission orale.",
      "Premiers exemples de mélodies tunisiennes."
    ],
    image: "assets/affiche-cours.png",
    video: "",
    audios: [],
    gallery: [],
    documents: [],
    duration: "2 heures",
    teacher: "Ethan Krief"
  },
  {
    id: "seance-02",
    featured: false,
    date: "5 juillet 2026",
    title: "Découverte du maqâm Rast",
    maqam: "Maqâm Rast",
    excerpt: "Une séance consacrée à la couleur du maqâm Rast, à ses notes caractéristiques et à quelques mélodies de référence.",
    summary: [
      "Reconnaître la couleur générale du maqâm Rast.",
      "Identifier les degrés importants et les mouvements mélodiques.",
      "Mettre en pratique à travers un chant simple."
    ],
    image: "",
    video: "",
    audios: [],
    gallery: [],
    documents: [],
    duration: "2 heures",
    teacher: "Ethan Krief"
  },
];

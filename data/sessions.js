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
    "Introduction générale aux maqâmât, découverte de leur construction et début de l’apprentissage du maqâm Bayati.",

  summary: [
    "Introduction générale aux maqâmât et à leur fonctionnement.",
    "Définition des principaux termes musicaux.",
    "Compréhension de la construction d’un maqâm à partir de plusieurs ajnâs.",
    "Début de l’apprentissage du maqâm Bayati.",
    "Exercices mélodiques sur le Bayati.",
    "Reconnaissance des différentes phrases mélodiques.",
    "Travail pratique sur un piyout."
  ],

  sections: [
    {
      title: "Partie théorique",
      items: [
        "Introduction générale aux maqâmât et explication de leur fonctionnement.",
        "Définition des principaux termes musicaux.",
        "Apprentissage du maqâm Bayati : première partie.",
        "Étude de la construction d’un maqâm à partir d’un jins inférieur et d’un jins supérieur.",
        "Présentation de plusieurs variantes construites à partir du jins Siga."
      ]
    },
    {
      title: "Partie pratique",
      items: [
        "Exercices sur le mode Bayati.",
        "Reconnaissance des différentes phrases mélodiques.",
        "Travail sur piyout ( naguila , biti tsei , el laad li laad)",
        "Écoute d’un taqsim au ney.",
        "Démonstration au oud autour du Rast et de ses variantes."
      ]
    }
  ],

  image: "media/seance-01/bayati_developpement.jpeg",

  audios: [
    {
      title: "Enregistrement complet du cours",
      description:
        "Enregistrement audio intégral des deux heures du premier cours.",
      src: "media/seance-01/cours1.mp3"
    }
  ],

  videos: [
    {
      title: "Le maqâm Rast et ses variantes au oud",
      description:
        "Démonstration d’Ethan au oud : descente du maqâm Rast et présentation de plusieurs variantes.",
      src: "media/seance-01/video_rast.mp4"
    },
    {
      title: "Taqsim au ney",
      description:
        "Exemple de taqsim improvisé au ney permettant d’entendre le développement mélodique d’un maqâm.",
      src: "media/seance-01/taksim_ney.mp4"
    }
  ],

  externalVideos: [
    {
      title: "Layali / Mawal de Haboucha",
      description:
        "Exemple de Layali et de Mawal interprété par Haboucha.",
      youtubeId: "VTYrdZ9I9DM",
      url: "https://youtu.be/VTYrdZ9I9DM"
    }
  ],

  gallery: [
    {
      src: "media/seance-01/composition_dun_maqam_lego.jpeg",
      title: "La composition d’un maqâm",
      description:
        "Un maqâm peut être construit à partir de deux ajnâs : un jins inférieur et un jins supérieur. Le nom du maqâm est généralement donné par son jins inférieur. Différents ajnâs peuvent ensuite être assemblés, un peu comme des Lego ou, selon la comparaison du cours, comme la composition d’une laffa."
    },
    {
      src: "media/seance-01/differente_variantes.jpeg",
      title: "Les différentes variantes du Siga",
      description:
        "Le jins Siga est placé dans la partie inférieure. Plusieurs développements sont possibles dans la partie supérieure : Irak avec Bayati, Sofiane avec Kurd, Bastanikar avec Saba et Houzam avec Hijaz. Le Houzam est aujourd’hui très utilisé et tend parfois à remplacer le Siga traditionnel développé avec un Rast supérieur."
    },
    {
      src: "media/seance-01/bayati_developpement.jpeg",
      title: "Développement du maqâm Bayati",
      description:
        "Le jins Bayati inférieur, représenté en rouge, est composé des notes ré, mi demi-bémol, fa et sol. Le fa peut temporairement se rapprocher d’un caractère Ajam. Le sol joue le rôle de ghammaz : il constitue une note d’appui et une zone de transition. À partir du sol, deux développements supérieurs sont présentés : Nahawand, en bleu, avec la, si bémol, do et ré ; et Rast,en rouge, avec la, si demi-bémol(quart), do et ré. Les notes ré et la permettent d’établir des passerelles entre les deux développements."
    }
  ],

  documents: [],

  duration: "2 heures",
  teacher: "Ethan Krief"
}
];

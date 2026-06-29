document.getElementById("year").textContent = new Date().getFullYear();

const params = new URLSearchParams(window.location.search);
const id = params.get("id");

const session = sessions.find(item => item.id === id);
const target = document.getElementById("session-detail");


/* =========================================================
   FONCTIONS UTILITAIRES
========================================================= */

function escapeHtml(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}


function renderList(items) {
  if (!items?.length) {
    return `
      <p class="empty-content">
        Le contenu de cette partie sera ajouté prochainement.
      </p>
    `;
  }

  return `
    <ul>
      ${items
        .map(item => `<li>${escapeHtml(item)}</li>`)
        .join("")}
    </ul>
  `;
}


/* =========================================================
   PROGRAMME DU COURS
========================================================= */

function renderSections(items) {
  if (!items?.length) {
    return "";
  }

  return `
    <section class="content-block">
      <h2>Programme du cours</h2>

      <div class="lesson-sections">
        ${items
          .map(section => `
            <article class="lesson-section">
              <h3>${escapeHtml(section.title)}</h3>

              <ul>
                ${(section.items || [])
                  .map(item => `<li>${escapeHtml(item)}</li>`)
                  .join("")}
              </ul>
            </article>
          `)
          .join("")}
      </div>
    </section>
  `;
}


/* =========================================================
   AUDIO
========================================================= */

function getAudioMimeType(source = "") {
  const extension = source
    .split("?")[0]
    .split(".")
    .pop()
    .toLowerCase();

  const mimeTypes = {
    mp3: "audio/mpeg",
    m4a: "audio/mp4",
    mp4: "audio/mp4",
    aac: "audio/aac",
    wav: "audio/wav",
    ogg: "audio/ogg"
  };

  return mimeTypes[extension] || "audio/mpeg";
}


function renderAudio(items) {
  if (!items?.length) {
    return "";
  }

  return `
    <section class="content-block">
      <h2>Enregistrement du cours</h2>

      ${items
        .map((audio, index) => `
          <article class="media-item audio-item">
            <h3>
              ${escapeHtml(audio.title || `Audio ${index + 1}`)}
            </h3>

            ${
              audio.description
                ? `
                  <p class="media-description">
                    ${escapeHtml(audio.description)}
                  </p>
                `
                : ""
            }

            <audio controls preload="metadata">
              <source
                src="${escapeHtml(audio.src)}"
                type="${getAudioMimeType(audio.src)}"
              >

              Votre navigateur ne permet pas de lire cet enregistrement.
            </audio>

            <p class="media-fallback">
              <a
                class="text-link"
                href="${escapeHtml(audio.src)}"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ouvrir directement l’enregistrement →
              </a>
            </p>
          </article>
        `)
        .join("")}
    </section>
  `;
}


/* =========================================================
   VIDÉOS LOCALES
========================================================= */

function getVideoMimeType(source = "") {
  const extension = source
    .split("?")[0]
    .split(".")
    .pop()
    .toLowerCase();

  const mimeTypes = {
    mp4: "video/mp4",
    webm: "video/webm",
    ogv: "video/ogg",
    mov: "video/quicktime"
  };

  return mimeTypes[extension] || "video/mp4";
}


function renderVideos(items) {
  if (!items?.length) {
    return "";
  }

  return `
    <section class="content-block">
      <h2>Vidéos du cours</h2>

      <div class="video-list">
        ${items
          .map((video, index) => `
            <article class="media-item video-item">
              <h3>
                ${escapeHtml(video.title || `Vidéo ${index + 1}`)}
              </h3>

              ${
                video.description
                  ? `
                    <p class="media-description">
                      ${escapeHtml(video.description)}
                    </p>
                  `
                  : ""
              }

              <video controls preload="metadata">
                <source
                  src="${escapeHtml(video.src)}"
                  type="${getVideoMimeType(video.src)}"
                >

                Votre navigateur ne permet pas de lire cette vidéo.
              </video>

              <p class="media-fallback">
                <a
                  class="text-link"
                  href="${escapeHtml(video.src)}"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ouvrir directement la vidéo →
                </a>
              </p>
            </article>
          `)
          .join("")}
      </div>
    </section>
  `;
}


/* =========================================================
   VIDÉOS YOUTUBE
========================================================= */

function getYouTubeId(video) {
  if (video.youtubeId) {
    return video.youtubeId;
  }

  if (!video.url) {
    return "";
  }

  try {
    const url = new URL(video.url);

    if (url.hostname.includes("youtu.be")) {
      return url.pathname.replace("/", "");
    }

    if (url.hostname.includes("youtube.com")) {
      return url.searchParams.get("v") || "";
    }
  } catch (error) {
    console.warn("Lien YouTube invalide :", video.url);
  }

  return "";
}


function renderExternalVideos(items) {
  if (!items?.length) {
    return "";
  }

  const videos = items
    .map(video => ({
      ...video,
      resolvedId: getYouTubeId(video)
    }))
    .filter(video => video.resolvedId);

  if (!videos.length) {
    return "";
  }

  return `
    <section class="content-block">
      <h2>Écoutes complémentaires</h2>

      <div class="video-list">
        ${videos
          .map(video => `
            <article class="media-item video-item">
              <h3>${escapeHtml(video.title)}</h3>

              ${
                video.description
                  ? `
                    <p class="media-description">
                      ${escapeHtml(video.description)}
                    </p>
                  `
                  : ""
              }

              <div class="youtube-wrapper">
                <iframe
                  src="https://www.youtube-nocookie.com/embed/${encodeURIComponent(
                    video.resolvedId
                  )}"
                  title="${escapeHtml(video.title)}"
                  loading="lazy"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </div>

              ${
                video.url
                  ? `
                    <a
                      class="text-link external-video-link"
                      href="${escapeHtml(video.url)}"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Regarder directement sur YouTube →
                    </a>
                  `
                  : ""
              }
            </article>
          `)
          .join("")}
      </div>
    </section>
  `;
}


/* =========================================================
   GALERIE D’IMAGES AVEC EXPLICATIONS
========================================================= */

function renderGallery(items) {
  if (!items?.length) {
    return "";
  }

  return `
    <section class="content-block">
      <h2>Schémas et explications</h2>

      <div class="illustrations-list">
        ${items
          .map((image, index) => `
            <figure class="illustration-card">
              <a
                class="illustration-image-button"
                href="${escapeHtml(image.src)}"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Agrandir ${
                  image.title
                    ? escapeHtml(image.title)
                    : `l’image ${index + 1}`
                }"
              >
                <img
                  src="${escapeHtml(image.src)}"
                  alt="${
                    image.title
                      ? escapeHtml(image.title)
                      : `Illustration du cours ${index + 1}`
                  }"
                  loading="lazy"
                >
              </a>

              <figcaption>
                <h3>
                  ${
                    image.title
                      ? escapeHtml(image.title)
                      : `Illustration ${index + 1}`
                  }
                </h3>

                ${
                  image.description
                    ? `
                      <p>
                        ${escapeHtml(image.description)}
                      </p>
                    `
                    : ""
                }
              </figcaption>
            </figure>
          `)
          .join("")}
      </div>
    </section>
  `;
}


/* =========================================================
   DOCUMENTS
========================================================= */

function renderDocuments(items) {
  if (!items?.length) {
    return "";
  }

  return `
    <section class="content-block">
      <h2>Documents du cours</h2>

      <div class="documents-list">
        ${items
          .map((document, index) => `
            <article class="document-card">
              <div>
                <h3>
                  ${escapeHtml(
                    document.title || `Document ${index + 1}`
                  )}
                </h3>

                ${
                  document.description
                    ? `
                      <p class="media-description">
                        ${escapeHtml(document.description)}
                      </p>
                    `
                    : ""
                }
              </div>

              <a
                class="button button-primary"
                href="${escapeHtml(document.src)}"
                target="_blank"
                rel="noopener noreferrer"
              >
                Consulter
              </a>
            </article>
          `)
          .join("")}
      </div>
    </section>
  `;
}


/* =========================================================
   DOCUMENTS DANS LA COLONNE LATÉRALE
========================================================= */

function renderSidebarDocuments(items) {
  if (!items?.length) {
    return "";
  }

  return `
    <div class="sidebar-resources">
      <dt>Documents</dt>

      ${items
        .map(document => `
          <a
            class="resource-link"
            href="${escapeHtml(document.src)}"
            target="_blank"
            rel="noopener noreferrer"
          >
            ${escapeHtml(document.title)}
          </a>
        `)
        .join("")}
    </div>
  `;
}


/* =========================================================
   AFFICHAGE DE LA PAGE
========================================================= */

if (!session) {
  document.title = "Séance introuvable — CFJT";

  target.innerHTML = `
    <div class="not-found">
      <h1>Séance introuvable</h1>

      <p>
        Cette séance n’existe pas ou n’est plus disponible.
      </p>

      <a class="button button-primary" href="index.html#cours">
        Retourner aux séances
      </a>
    </div>
  `;
} else {
  document.title = `${session.title} — CFJT`;

  target.innerHTML = `
    <header class="detail-hero">
      <span class="meta">
        ${escapeHtml(session.date)}
        ·
        ${escapeHtml(session.maqam)}
      </span>

      <h1>${escapeHtml(session.title)}</h1>

      <p class="detail-lead">
        ${escapeHtml(session.excerpt)}
      </p>
    </header>

    <div class="detail-layout">
      <div class="detail-main">

        <section class="content-block">
          <h2>Résumé de la séance</h2>

          ${renderList(session.summary)}
        </section>

        ${renderSections(session.sections)}

        ${renderAudio(session.audios)}

        ${renderVideos(session.videos)}

        ${renderExternalVideos(session.externalVideos)}

        ${renderGallery(session.gallery)}

        ${renderDocuments(session.documents)}

      </div>

      <aside class="detail-sidebar">
        <div class="sidebar-card">
          <h3>Informations</h3>

          <dl>
            <dt>Date</dt>
            <dd>${escapeHtml(session.date)}</dd>

            <dt>Thème</dt>
            <dd>${escapeHtml(session.maqam)}</dd>

            <dt>Intervenant</dt>
            <dd>${escapeHtml(session.teacher)}</dd>

            <dt>Durée</dt>
            <dd>${escapeHtml(session.duration)}</dd>

            ${renderSidebarDocuments(session.documents)}
          </dl>
        </div>
      </aside>
    </div>
  `;
}
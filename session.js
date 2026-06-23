document.getElementById("year").textContent = new Date().getFullYear();

const params = new URLSearchParams(window.location.search);
const id = params.get("id");
const session = sessions.find(item => item.id === id);
const target = document.getElementById("session-detail");

function list(items) {
  if (!items?.length) return "<p>Le contenu de cette partie sera ajouté prochainement.</p>";
  return `<ul>${items.map(item => `<li>${item}</li>`).join("")}</ul>`;
}

function renderAudio(items) {
  if (!items?.length) return "";
  return `
    <section class="content-block">
      <h2>Enregistrements audio</h2>
      ${items.map((audio, index) => `
        <div class="media-item">
          <p><strong>${audio.title || `Audio ${index + 1}`}</strong></p>
          <audio controls preload="metadata" src="${audio.src}"></audio>
        </div>`).join("")}
    </section>`;
}

function renderVideo(src) {
  if (!src) return "";
  return `
    <section class="content-block">
      <h2>Vidéo du cours</h2>
      <div class="media-item"><video controls preload="metadata" src="${src}"></video></div>
    </section>`;
}

function renderGallery(items) {
  if (!items?.length) return "";
  return `
    <section class="content-block">
      <h2>Galerie</h2>
      <div class="gallery">
        ${items.map((src, index) => `<img src="${src}" alt="Photo de la séance ${index + 1}" loading="lazy">`).join("")}
      </div>
    </section>`;
}

if (!session) {
  document.title = "Séance introuvable — CFJT";
  target.innerHTML = `<div class="not-found"><h1>Séance introuvable</h1><p>Cette séance n’existe pas ou n’est plus disponible.</p></div>`;
} else {
  document.title = `${session.title} — CFJT`;
  target.innerHTML = `
    <header class="detail-hero">
      <span class="meta">${session.date} · ${session.maqam}</span>
      <h1>${session.title}</h1>
      <p class="detail-lead">${session.excerpt}</p>
    </header>

    <div class="detail-layout">
      <div class="detail-main">
        <section class="content-block">
          <h2>Résumé de la séance</h2>
          ${list(session.summary)}
        </section>

        ${renderVideo(session.video)}
        ${renderAudio(session.audios)}
        ${renderGallery(session.gallery)}
      </div>

      <aside class="detail-sidebar">
        <div class="sidebar-card">
          <h3>Informations</h3>
          <dl>
            <dt>Date</dt><dd>${session.date}</dd>
            <dt>Thème</dt><dd>${session.maqam}</dd>
            <dt>Intervenant</dt><dd>${session.teacher}</dd>
            <dt>Durée</dt><dd>${session.duration}</dd>
          </dl>
          ${session.documents?.length ? `
            <div>
              <dt>Documents</dt>
              ${session.documents.map(doc => `<a class="resource-link" href="${doc.src}" target="_blank" rel="noopener">${doc.title}</a>`).join("")}
            </div>` : ""}
        </div>
      </aside>
    </div>`;
}

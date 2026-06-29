const grid = document.getElementById("sessions-grid");
const featuredTarget = document.getElementById("featured-session");
const emptyState = document.getElementById("empty-state");
const filters = [...document.querySelectorAll(".filter")];

document.getElementById("year").textContent = new Date().getFullYear();

function mediaTypes(session) {
  const types = [];

  if (session.videos?.length || session.externalVideos?.length) {
    types.push("video");
  }

  if (session.audios?.length) {
    types.push("audio");
  }

  if (session.documents?.length) {
    types.push("document");
  }

  if (session.gallery?.length) {
    types.push("images");
  }

  return types;
}

function mediaLabel(type) {
  return { video: "Vidéo", audio: "Audio", document: "Support", images: "Photos" }[type] || type;
}

function imageMarkup(session, featured = false) {
  if (session.image) {
    return `<img src="${session.image}" alt="${session.title}" loading="lazy">`;
  }
  return `<div class="${featured ? "featured-placeholder" : "card-placeholder"}">CFJT · ${session.maqam}</div>`;
}

function renderFeatured(session) {
  if (!session) {
    featuredTarget.innerHTML = "";
    return;
  }
  featuredTarget.innerHTML = `
    <article class="featured-card">
      <div class="featured-media">${imageMarkup(session, true)}</div>
      <div class="featured-content">
        <span class="meta">Séance mise en avant · ${session.date}</span>
        <h3>${session.title}</h3>
        <p>${session.excerpt}</p>
        <a class="text-link" href="session.html?id=${encodeURIComponent(session.id)}">Voir la séance →</a>
      </div>
    </article>`;
}

function renderCards(list) {
  grid.innerHTML = list.map(session => {
    const types = mediaTypes(session);
    const pills = types.length
      ? types.map(type => `<span class="media-pill">${mediaLabel(type)}</span>`).join("")
      : `<span class="media-pill">Contenu à venir</span>`;

    return `
      <article class="session-card">
        <a class="card-media" href="session.html?id=${encodeURIComponent(session.id)}">
          ${imageMarkup(session)}
        </a>
        <div class="card-body">
          <span class="meta">${session.date} · ${session.maqam}</span>
          <h3>${session.title}</h3>
          <p>${session.excerpt}</p>
          <div class="card-footer">
            <div class="media-pills">${pills}</div>
            <a class="text-link" href="session.html?id=${encodeURIComponent(session.id)}" aria-label="Voir ${session.title}">→</a>
          </div>
        </div>
      </article>`;
  }).join("");

  emptyState.hidden = list.length > 0;
}

function applyFilter(filter) {
  const filtered = filter === "all"
    ? sessions.filter(s => !s.featured)
    : sessions.filter(s => !s.featured && mediaTypes(s).includes(filter));
  renderCards(filtered);
}

const featured = sessions.find(s => s.featured) || sessions[0];
renderFeatured(featured);
applyFilter("all");

filters.forEach(button => {
  button.addEventListener("click", () => {
    filters.forEach(b => b.classList.remove("active"));
    button.classList.add("active");
    applyFilter(button.dataset.filter);
  });
});

/* =========================
   BOITE A OUTILS — script.js
   (HTML: index.html, CSS: main.css)
========================= */

// -------------------------
// DATA (Starter pack)
// -------------------------
const TOOLS = [
  {
    id: "contracte-relache",
    title: "Contracté–relâché",
    category: "Exercices",
    tags: ["Contracté–relâché", "stress", "douleur", "relâchement"],
    duration: "5 min",
    position: "assis/allongé",
    intensity: "très doux",
    modes: ["ok","fatigue_phys","fatigue_mentale","courbatures","sos"],
    summary: "Relâcher les tensions sans forcer, en alternant contraction légère et détente.",
    steps: [
      "Inspire doucement.",
      "Contracte très légèrement (mains/épaules) 3 secondes.",
      "Expire longuement, relâche complètement.",
      "Pause 10 secondes.",
      "Répète 5 fois."
    ],
    low: "Version low battery : contracte seulement les mains.",
    stop: "Stop si douleur articulaire inhabituelle, vertige, crispation.",
    note: "Ce n’est pas la performance qui apaise. C’est la permission."
  },
  {
    id: "mobilisation-douce",
    title: "Mobilisation douce",
    category: "Exercices",
    tags: ["Mobilisation douce", "énergie", "douceur", "SED"],
    duration: "6–8 min",
    position: "assis/debout",
    intensity: "doux",
    modes: ["ok","fatigue_phys","fatigue_mentale","courbatures"],
    summary: "Réveiller le corps comme un chat : micro-cercles, amplitude mini, respiration lente.",
    steps: [
      "Cercles d’épaules (petits) x 6.",
      "Rotations de nuque très mini (sans aller au bout) x 4.",
      "Cercles poignets/chevilles x 6.",
      "Balance du poids d’un pied à l’autre x 8.",
      "Termine par 3 expirations longues."
    ],
    low: "Version low battery : uniquement poignets + chevilles.",
    stop: "Stop si instabilité, douleur vive, pincement.",
    note: "Petit mouvement = grand signal de sécurité."
  },
  {
    id: "etirements-doux",
    title: "Étirements doux",
    category: "Exercices",
    tags: ["Étirements doux", "souplesse", "SED"],
    duration: "4–6 min",
    position: "assis",
    intensity: "très doux",
    modes: ["ok","fatigue_phys","courbatures"],
    summary: "Étirements non-performants : on cherche le confort, pas l’amplitude.",
    steps: [
      "Étirement latéral assis (très léger) 2 respirations de chaque côté.",
      "Ouverture poitrine (mains derrière la tête, coudes ouverts) 3 respirations.",
      "Auto-étreinte (avant-bras contre avant-bras) 4 respirations.",
      "Fin : mains sur ventre, expiration longue."
    ],
    low: "Version low battery : auto-étreinte + 3 respirations.",
    stop: "Stop si hyperlaxité qui “tire trop”, douleur articulaire.",
    note: "Ton corps n’est pas un projet. C’est un vivant."
  },
  {
    id: "orientation",
    title: "Orientation",
    category: "Somatique",
    tags: ["Orientation", "ancrage", "somatique", "surcharge"],
    duration: "2–3 min",
    position: "assis/debout",
    intensity: "très doux",
    modes: ["ok","fatigue_mentale","fatigue_emo","sos"],
    summary: "Revenir au présent via les yeux, en cherchant le neutre/agréable.",
    steps: [
      "Regarde 5 objets autour de toi, lentement.",
      "Nomme 3 couleurs.",
      "Trouve 1 détail agréable (texture/lumière).",
      "Pose une main sur le cœur, expire longuement."
    ],
    low: "Version low battery : 3 objets + 1 expiration longue.",
    stop: "Stop si ça augmente l’anxiété : fais uniquement l’expiration longue.",
    note: "Tu n’as rien à prouver. Tu te retrouves."
  },
  {
    id: "auto-contact",
    title: "Auto-contact sécurisant",
    category: "Somatique",
    tags: ["Auto-contact", "somatique", "sécurité"],
    duration: "1–3 min",
    position: "assis/allongé",
    intensity: "très doux",
    modes: ["ok","fatigue_mentale","fatigue_emo","sos"],
    summary: "Le toucher comme signal de sécurité : paumes + pression douce + expirations longues.",
    steps: [
      "Une main sur le cœur, une sur le ventre.",
      "Pression très douce (comme une couverture).",
      "3 expirations longues.",
      "Option : tapotements légers sur les bras."
    ],
    low: "Version low battery : une main sur le cœur + 2 expirations.",
    stop: "Stop si le contact te met mal à l’aise : main sur la cuisse.",
    note: "Sécurité d’abord. Toujours."
  },
  {
    id: "pendulation",
    title: "Pendulation",
    category: "Somatique",
    tags: ["Pendulation", "somatique", "douleur"],
    duration: "4–6 min",
    position: "assis",
    intensity: "doux",
    modes: ["ok","fatigue_mentale","fatigue_emo","fatigue_phys"],
    summary: "Aller-retour entre une zone OK et une zone tendue pour aider le système à ne pas se figer.",
    steps: [
      "Choisis une zone neutre (main, pieds) = Zone A.",
      "Choisis une zone tendue (nuque, mâchoire) = Zone B.",
      "Observe 10 sec la Zone A (respire).",
      "Observe 5 sec la Zone B (sans plonger).",
      "Retour Zone A. Répète 5 fois."
    ],
    low: "Version low battery : 2 allers-retours seulement.",
    stop: "Stop si la Zone B déclenche panique : reste sur Zone A.",
    note: "On dose. On n’envahit pas."
  },
  {
    id: "coherence",
    title: "Cohérence cardiaque",
    category: "Respiration",
    tags: ["cohérence cardiaque", "respiration", "stress"],
    duration: "5 min",
    timer: { totalSec: 300, inhaleSec: 5, exhaleSec: 5 }, 
    position: "assis",
    intensity: "très doux",
    modes: ["ok","fatigue_mentale","fatigue_emo","fatigue_phys", "douleurs","sos"],
    summary: "Respiration régulière : inspire 4, expire 6 (adaptable).",
    steps: [
      "Inspire par le nez 5 secondes.",
      "Expire 5 secondes"
    ],
    low: "Version low battery : 5 cycles.",
    stop: "Stop si essoufflement : respiration naturelle + expirations longues.",
    note: "L’expiration longue est souvent la clé."
  },
  {
    id: "soupir",
    title: "Soupir physiologique",
    category: "Respiration",
    tags: ["soupir", "respiration", "sos", "stress"],
    duration: "1 min",
    position: "assis/debout",
    intensity: "très doux",
    modes: ["fatigue_phys","fatigue_emo","fatigue_mentale","sos"],
    summary: "Reset rapide : deux petites inspirations + une longue expiration.",
    steps: [
      "Inspire normalement.",
      "Re-inspire un petit “complément”.",
      "Expire très longuement par la bouche.",
      "Répète 3 fois."
    ],
    low: "Version low battery : 1 seule fois.",
    stop: "Stop si vertige : fais une expiration longue simple.",
    note: "Mini reset quand tout déborde."
  },
  {
    id: "check-energie",
    title: "Check énergie",
    category: "Pacing",
    tags: ["Check énergie", "pacing", "cuillères"],
    duration: "2–4 min",
    position: "assis",
    intensity: "très doux",
    modes: ["ok","fatigue_phys","fatigue_mentale","fatigue_emo","sos"],
    summary: "Faire le point sans jugement : énergie, douleur, priorités vitales.",
    steps: [
      "Énergie 0–10 ?",
      "Douleur 0–10 ?",
      "1 besoin vital (eau / manger / repos) ?",
      "1 chose douce ?",
      "Choisis 1 micro-action."
    ],
    low: "Version low battery : énergie + 1 micro-action.",
    stop: "Si ça stresse : remplace par ‘je bois un verre d’eau’.",
    note: "Tu ajustes. Tu ne t’arraches pas."
  },
  {
    id: "mvd",
    title: "Minimum vital",
    category: "Pacing",
    tags: ["Minimum vital", "pacing", "fatigue"],
    duration: "3–6 min",
    position: "assis",
    intensity: "très doux",
    modes: ["fatigue_phys","fatigue_mentale","fatigue_emo","douleurs","sos"],
    summary: "Construire une journée “minimum vital” pour arrêter de se battre contre soi.",
    steps: [
      "3 besoins : eau / manger / repos (choisis 1).",
      "1 tâche mini : 5 minutes max.",
      "1 récup : respiration/sieste/poser le corps.",
      "Tout le reste = bonus."
    ],
    low: "Version low battery : eau + repos.",
    stop: "Stop si honte : ‘aujourd’hui je me protège’.",
    note: "Minimum vital = victoire."
  },
  {
    id: "nuque",
    title: "Nuque — base du crâne",
    category: "Douleur",
    tags: ["Nuque", "douleur", "chaleur"],
    duration: "3–10 min",
    position: "assis/allongé",
    intensity: "très doux",
    modes: ["ok","fatigue_phys","douleurs","sos"],
    summary: "Protocole doux : chaleur + respiration + relâchement de mâchoire.",
    steps: [
      "Chaleur à la base du crâne (si ok).",
      "Expire longuement 6 fois.",
      "Relâche la langue (elle se décolle du palais).",
      "Option : auto-contact mains sur nuque."
    ],
    low: "Version low battery : chaleur + 3 expirations.",
    stop: "Stop si chaleur impossible : remplace par mains tièdes sur nuque.",
    note: "Tu ne combats pas. Tu apaises."
  },
  {
    id: "machoire",
    title: "Mâchoire — déverrouillage doux",
    category: "Douleur",
    tags: ["Mâchoire", "douleur", "trijumeau"],
    duration: "2–5 min",
    position: "assis",
    intensity: "très doux",
    modes: ["ok","fatigue_phys","douleurs","sos"],
    summary: "Décharger la mâchoire sans étirer fort.",
    steps: [
      "Lèvres fermées, dents séparées.",
      "Langue au repos (bas de bouche).",
      "Mini ‘oui/non’ (très petit).",
      "2 soupirs physiologiques."
    ],
    low: "Version low battery : dents séparées + 1 soupir.",
    stop: "Stop si douleur trijumeau : uniquement respiration + dents séparées.",
    note: "La mâchoire peut être une armure. On l’invite à lâcher."
  },
  {
    id: "rouleau-picots",
    title: "Rouleau à picots (dos) — usage intelligent",
    category: "Douleur",
    tags: ["Rouleau", "rouleau à picots", "fascia", "dos", "récup", "douleur"],
    duration: "5–12 min",
    position: "allongé",
    intensity: "doux à modéré",
    modes: ["ok","fatigue_phys","douleurs"],
    summary: "Décompression + fascia : on dose pour éviter l’habituation (pas tous les jours).",
    steps: [
      "Pose-toi sur le rouleau (haut/milieu du dos).",
      "1–2 minutes immobile + expirations longues.",
      "Micro-roule très lentement (amplitude mini) 60–90 sec.",
      "Change de zone si OK, sans chercher la douleur.",
      "Fin : 4 expirations longues + verre d’eau."
    ],
    low: "Version low battery : 2 minutes immobile + respiration, sans rouler.",
    stop: "Stop si douleur vive, engourdissement, pincement nerveux. Évite lombaires si sensible.",
    note: "Pas tous les jours : laisse au corps le temps d’intégrer (sinon il s’habitue)."
  },
  {
    id: "balle-fascia-trapeze",
    title: "Balle fascia derrière le trapèze",
    category: "Douleur",
    tags: ["Balle fascia", "Balle", "trapèze", "épaule", "fascia", "nuque"],
    duration: "2–6 min",
    position: "allongé",
    intensity: "doux",
    modes: ["ok","fatigue_phys","douleurs","sos"],
    summary: "Déverrouillage doux : pression + mouvement du bras (6x mini).",
    steps: [
      "Allonge-toi sur le dos.",
      "Place la balle derrière le trapèze (pas sur l’os).",
      "Trouve un point ‘oui’ tolérable (pas ‘aïe’).",
      "Lève le bras du côté concerné puis abaisse-le lentement (≥ 6 fois).",
      "Expiration longue sur la descente.",
      "Fin : micro-cercles d’épaule 3 fois."
    ],
    low: "Version low battery : balle en place + 3 expirations longues.",
    stop: "Stop si fourmillements, douleur nerveuse, douleur aiguë, vertige.",
    note: "C’est la lenteur qui fait le travail. On n’attaque pas le point."
  },
   {
    id: "dance-party",
    title: "Dance party",
    category: "Somatique",
    tags: ["Danse", "musique", "lâché prise", "bouger", "joie"],
    duration: "2–6 min",
    position: "debout",
    intensity: "doux",
    modes: ["ok","fatigue_mentale","fatigue_emo"],
    summary: "Danse, bouge, sens ton corps.",
    steps: [
      "Mets une musique qui te donne envie de bouger.",
      "Danse comme tu le souhaites.",
      "Evite les mouvements trop brusques",
      "Laisse ton corps s'exprimer au rythme de la musique",
      "Sens comme la détente s'étend sur toi",
      "Fin : Secoue les bras et les jambes."
    ],
    low: "Version low battery : Juste écouter la musique et se balancer tranquillement",
    stop: "Stop si fourmillements, douleur nerveuse, douleur aiguë, vertige.",
    note: "C’est le mouvement et la joie qui font le travail."
  }
];

// -------------------------
// State
// -------------------------
const state = {
  mode: "ok",
  query: "",
  filter: "",
  showFavs: false,
  favorites: new Set()
};

// -------------------------
// Storage keys
// -------------------------
const LS_FAVS = "grimoire_favorites_v1";
const LS_THEME = "grimoire_theme_v1";

// -------------------------
// DOM
// -------------------------
const grid = document.getElementById("grid");
const searchInput = document.getElementById("search");
const activeFilter = document.getElementById("activeFilter");
const clearFiltersBtn = document.getElementById("clearFilters");

const favBtn = document.getElementById("toggleFavs");
const favCount = document.getElementById("favCount");
const themeBtn = document.getElementById("toggleTheme");

const toolModal = document.getElementById("toolModal");
const modalTitle = document.getElementById("modalTitle");
const modalMeta = document.getElementById("modalMeta");
const modalBody = document.getElementById("modalBody");
const closeModal = document.getElementById("closeModal");

const breathTimer = document.getElementById("breathTimer");
const btClose = document.getElementById("btClose");
const btStart = document.getElementById("btStart");
const btStop = document.getElementById("btStop");
const btReset = document.getElementById("btReset");
const btPhase = document.getElementById("btPhase");
const btRemaining = document.getElementById("btRemaining");
const breathOrb = breathTimer ? breathTimer.querySelector(".breath-orb") : null;

// Hero
const breath2min = document.getElementById("breath2min");
const randomTool = document.getElementById("randomTool");

// -------------------------
// Utils
// -------------------------
function normalize(s){
  return (s || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function escapeHtml(str){
  return String(str)
    .replaceAll("&","&amp;")
    .replaceAll("<","&lt;")
    .replaceAll(">","&gt;")
    .replaceAll('"',"&quot;")
    .replaceAll("'","&#039;");
}

function fmt(sec){
  const m = Math.floor(sec/60);
  const s = sec % 60;
  return `${m}:${String(s).padStart(2,"0")}`;
}

function safeShowModal(d){
  try{
    if(d && typeof d.showModal === "function"){
      d.showModal();
      return true;
    }
  }catch(e){}
  return false;
}

// -------------------------
// Favorites
// -------------------------
function loadFavorites(){
  try{
    const raw = localStorage.getItem(LS_FAVS);
    if(!raw) return;
    const arr = JSON.parse(raw);
    if(Array.isArray(arr)) state.favorites = new Set(arr);
  }catch(e){}
}

function saveFavorites(){
  try{
    localStorage.setItem(LS_FAVS, JSON.stringify([...state.favorites]));
  }catch(e){}
}

function toggleFavorite(id){
  if(state.favorites.has(id)) state.favorites.delete(id);
  else state.favorites.add(id);
  saveFavorites();
}

// -------------------------
// Theme
// -------------------------
const THEME_DARK = "dark";
const THEME_LIGHT = "light";

function currentTheme(){
  return document.documentElement.getAttribute("data-theme") === THEME_DARK
    ? THEME_DARK
    : THEME_LIGHT;
}

function updateThemeButton(){
  if(!themeBtn) return;
  const isDark = currentTheme() === THEME_DARK;

  // Quand on est en dark, on propose "Jour" (soleil)
  themeBtn.textContent = isDark ? "☀️ Mode jour" : "🌙 Mode nuit";
  themeBtn.setAttribute("aria-pressed", isDark ? "true" : "false");
  themeBtn.setAttribute("title", isDark ? "Passer en mode jour" : "Passer en mode nuit");
}

function applyTheme(theme){
  const root = document.documentElement;

  if(theme === THEME_DARK){
    root.setAttribute("data-theme", THEME_DARK);
  }else{
    root.removeAttribute("data-theme");
  }

  updateThemeButton();
}

function loadTheme(){
  try{
    const saved = localStorage.getItem(LS_THEME);
    applyTheme(saved === THEME_DARK ? THEME_DARK : THEME_LIGHT);
  }catch(e){
    applyTheme(THEME_LIGHT);
  }
}

function saveTheme(theme){
  try{ localStorage.setItem(LS_THEME, theme); }catch(e){}
}

// -------------------------
// Filters
// -------------------------
function matchesMode(tool){
  const toolModes = tool.modes || [];

  // Cas normal : l’outil a été tagué avec les nouveaux modes
  if(toolModes.includes(state.mode)) return true;

  // Compat optionnelle : si un outil est encore en ancien format
  // "fatigue" doit rester valable si tu n’as pas encore tout retagué
  if(state.mode.startsWith("fatigue_") && toolModes.includes("fatigue")) return true;

  // (Optionnel) douleurs/courbatures: si tu as des anciens outils "douleur"
  if((state.mode === "douleurs" || state.mode === "courbatures") && toolModes.includes("douleur")) return true;

  return false;
}

function matchesQuery(tool){
  const q = normalize(state.query);
  if(!q) return true;
  const hay = normalize([tool.title, tool.category, tool.summary, ...(tool.tags || [])].join(" "));
  return hay.includes(q);
}

function matchesFilter(tool){
  if(!state.filter) return true;
  const f = normalize(state.filter);
  const inTags = (tool.tags || []).some(t => normalize(t).includes(f));
  const inTitle = normalize(tool.title).includes(f);
  return inTags || inTitle;
}

function matchesFavs(tool){
  if(!state.showFavs) return true;
  return state.favorites.has(tool.id);
}

function getFilteredTools(){
  return TOOLS
    .filter(matchesMode)
    .filter(matchesQuery)
    .filter(matchesFilter)
    .filter(matchesFavs);
}

// -------------------------
// Render
// -------------------------
function render(){
  if(!grid) return;

  if(favCount) favCount.textContent = String(state.favorites.size);
  if(activeFilter) activeFilter.textContent = state.filter ? state.filter : "Aucun";

  const items = getFilteredTools();
  grid.innerHTML = "";

  if(items.length === 0){
    grid.innerHTML = `
      <article class="card">
        <h3>Aucun résultat</h3>
        <p>Essaie de changer le mode, enlever les favoris, ou supprimer le filtre.</p>
        <div class="hero-actions">
          <button class="btn" id="emptyReset">↺ Réinitialiser</button>
        </div>
      </article>
    `;
    const btn = document.getElementById("emptyReset");
    if(btn && clearFiltersBtn) btn.addEventListener("click", () => clearFiltersBtn.click());
    return;
  }

  items.forEach(tool => {
    const isFav = state.favorites.has(tool.id);
    const sosChip = (tool.modes && tool.modes.includes("sos"))
      ? `<span class="chip sos">🔥 SOS</span>`
      : "";

    const card = document.createElement("article");
    card.className = "card";

    card.innerHTML = `
      <div>
        <h3>${escapeHtml(tool.title)}</h3>
        <div class="meta">
          <span class="chip">${escapeHtml(tool.category)}</span>
          <span class="chip">${escapeHtml(tool.duration)}</span>
          <span class="chip">${escapeHtml(tool.intensity)}</span>
          ${sosChip}
        </div>
        <p style="margin-top:10px;">${escapeHtml(tool.summary)}</p>
      </div>

      <div class="hero-actions" style="justify-content:flex-start; margin-top:14px;">
        <button class="btn small" data-open="${escapeHtml(tool.id)}">Ouvrir</button>
        <button class="btn small ghost" data-fav="${escapeHtml(tool.id)}" aria-pressed="${isFav ? "true":"false"}">
          ${isFav ? "★" : "☆"} Favori
        </button>
      </div>
    `;

    grid.appendChild(card);
  });

  // Bind actions after render
  grid.querySelectorAll("[data-open]").forEach(btn => {
    btn.addEventListener("click", () => openTool(btn.getAttribute("data-open")));
  });

  grid.querySelectorAll("[data-fav]").forEach(btn => {
    btn.addEventListener("click", () => {
      const id = btn.getAttribute("data-fav");
      toggleFavorite(id);
      render();
    });
  });
}

// -------------------------
// Tool modal
// -------------------------
function openTool(id){
  const tool = TOOLS.find(t => t.id === id);
  if(!tool) return;

  if(modalTitle) modalTitle.textContent = tool.title;

  if(modalMeta){
    modalMeta.innerHTML = `
      <span class="chip">${escapeHtml(tool.category)}</span>
      <span class="chip">${escapeHtml(tool.duration)}</span>
      <span class="chip">${escapeHtml(tool.position)}</span>
      <span class="chip">${escapeHtml(tool.intensity)}</span>
    `;
  }

  const steps = (tool.steps || []).map(s => `<li>${escapeHtml(s)}</li>`).join("");
  if(modalBody){
    modalBody.innerHTML = `
      <h4>Étapes</h4>
      <ul>${steps}</ul>
      <p><strong>🌥 Low battery :</strong> ${escapeHtml(tool.low || "—")}</p>
      <p><strong>🔥 Stop si :</strong> ${escapeHtml(tool.stop || "—")}</p>
      <p><strong>✨ Note :</strong> ${escapeHtml(tool.note || "—")}</p>
    `;
  }

  if(!safeShowModal(toolModal)){
    alert(`${tool.title}\n\n${tool.summary}`);
  }
   if(tool.timer){
     modalBody.innerHTML += `
    <button class="btn" id="startToolTimer">⏱ Lancer le timer</button>
  `;
     setTimeout(() => {
       const b = document.getElementById("startToolTimer");
       if(b) b.addEventListener("click", () => openBreathTimer({ ...tool.timer, sound: true }));
     }, 0);
   }
}

// -------------------------
// Breath timer (réutilisable)
// -------------------------

// Réglages par défaut
let btConfig = {
  totalSec: 120,
  inhaleSec: 4,
  exhaleSec: 6,
  sound: false // activé/désactivé
};

let btLeft = btConfig.totalSec;
let btTick = null;
let btPhaseTick = null;
let btRunning = false;

// Audio (WebAudio) — simple et léger (pas de fichier)
let audioCtx = null;
let osc = null;
let gain = null;

function btEnsureAudio(){
  if(audioCtx) return;
  audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  osc = audioCtx.createOscillator();
  gain = audioCtx.createGain();

  // "vague" douce : fréquence basse + volume très faible
  osc.type = "sine";
  osc.frequency.value = 140;

  gain.gain.value = 0.0001; // quasi inaudible au départ

  osc.connect(gain);
  gain.connect(audioCtx.destination);
  osc.start();
}

function btSetSound(on){
  btConfig.sound = !!on;
  if(!on){
    if(gain) gain.gain.value = 0.0001;
    return;
  }
  btEnsureAudio();
  // au démarrage, on met un volume doux
  gain.gain.value = 0.02;
}

function btUpdateSound(phase, phaseProgress01){
  // phase = "inhale" / "exhale"
  if(!btConfig.sound || !osc || !gain) return;

  // Variation douce type "vague" :
  // - inspiration : fréquence monte un peu
  // - expiration : fréquence descend
  const base = 120;
  const span = 120;

  const f = (phase === "inhale")
    ? base + span * phaseProgress01
    : base + span * (1 - phaseProgress01);

  osc.frequency.setTargetAtTime(f, audioCtx.currentTime, 0.05);

  // Volume un poil plus haut en expiration (souvent apaisant)
  const vol = (phase === "exhale") ? 0.026 : 0.020;
  gain.gain.setTargetAtTime(vol, audioCtx.currentTime, 0.08);
}

function btUpdateUI(){
  if(btRemaining) btRemaining.textContent = fmt(btLeft);
}

function btStopAll(){
  btRunning = false;
  if(btTick){ clearInterval(btTick); btTick = null; }
  if(btPhaseTick){ clearInterval(btPhaseTick); btPhaseTick = null; }

  // stop animation
  if(breathOrb) breathOrb.classList.remove("is-running");
  if(breathOrb) breathOrb.style.setProperty("--orb-scale", "1");

  if(btPhase) btPhase.textContent = "Prête.";

  // son off (mais on garde le contexte)
  if(gain) gain.gain.value = 0.0001;
}

function btResetAll(){
  btStopAll();
  btLeft = btConfig.totalSec;
  btUpdateUI();
}

// Ouvre le timer avec config (pour l’utiliser depuis une fiche)
function openBreathTimer(options = {}){
  btConfig = {
    totalSec: typeof options.totalSec === "number" ? options.totalSec : btConfig.totalSec,
    inhaleSec: typeof options.inhaleSec === "number" ? options.inhaleSec : btConfig.inhaleSec,
    exhaleSec: typeof options.exhaleSec === "number" ? options.exhaleSec : btConfig.exhaleSec,
    sound: typeof options.sound === "boolean" ? options.sound : btConfig.sound
  };

  btLeft = btConfig.totalSec;
  btUpdateUI();

  if(btPhase) btPhase.textContent = "Prête.";
  if(breathOrb) breathOrb.style.setProperty("--orb-scale", "1");

  // Si tu ajoutes un toggle son plus tard, tu peux le brancher ici
  btSetSound(btConfig.sound);

  if(breathTimer){
    safeShowModal(breathTimer);
  }
}

// Lancement (anime la phase + l’orbe + le son)
function btStartRun(){
  btStopAll();
  btRunning = true;

  // sécurité
  btLeft = Math.max(1, btLeft);

  if(breathOrb) breathOrb.classList.add("is-running");

  const cycle = btConfig.inhaleSec + btConfig.exhaleSec;
  let t = 0; // secondes dans le cycle

  if(btPhase) btPhase.textContent = "Inspire…";

  btPhaseTick = setInterval(() => {
    t = (t + 1) % cycle;

    const phase = (t < btConfig.inhaleSec) ? "inhale" : "exhale";
    const phaseT = (phase === "inhale")
      ? t / btConfig.inhaleSec
      : (t - btConfig.inhaleSec) / btConfig.exhaleSec;

    if(btPhase){
      btPhase.textContent = (phase === "inhale") ? "Inspire…" : "Expire…";
    }

    // ORB SCALE : inspiration = grandit, expiration = rétrécit
    // scale de 1 → 1.45
    const scale = (phase === "inhale")
      ? (1 + 0.45 * phaseT)
      : (1.45 - 0.45 * phaseT);

    if(breathOrb){
      breathOrb.style.setProperty("--orb-scale", String(scale));
    }

    // son vague
    btUpdateSound(phase, phaseT);

  }, 1000);

  btTick = setInterval(() => {
    btLeft = Math.max(0, btLeft - 1);
    btUpdateUI();

    if(btLeft <= 0){
      btStopAll();
      if(btPhase) btPhase.textContent = "Terminé 🌿";
    }
  }, 1000);
}
// -------------------------
// Events
// -------------------------
function setupEvents(){

  // Dropdown behavior
  document.addEventListener("click", (e) => {
    document.querySelectorAll("details.drop").forEach(d => {
      if(!d.contains(e.target)) d.open = false;
    });
  });

  document.querySelectorAll("details.drop").forEach(d => {
    d.addEventListener("toggle", () => {
      if(!d.open) return;
      document.querySelectorAll("details.drop").forEach(other => {
        if(other !== d) other.open = false;
      });
    });
  });

  // Filter buttons
  document.querySelectorAll("[data-filter]").forEach(btn => {
    btn.addEventListener("click", () => {
      state.filter = btn.getAttribute("data-filter") || "";
      const details = btn.closest("details");
      if(details) details.open = false;
      render();
    });
  });

  // Mode pills
  document.querySelectorAll(".pill").forEach(p => {
    p.addEventListener("click", () => {
      state.mode = p.dataset.mode || "ok";
      document.querySelectorAll(".pill").forEach(x => x.setAttribute("aria-pressed","false"));
      p.setAttribute("aria-pressed","true");
      render();
    });
  });

  // Search
  if(searchInput){
    searchInput.addEventListener("input", () => {
      state.query = searchInput.value.trim();
      render();
    });
  }

  // Reset filters
  if(clearFiltersBtn){
    clearFiltersBtn.addEventListener("click", () => {
      state.mode = "ok";
      state.query = "";
      state.filter = "";
      state.showFavs = false;

      if(searchInput) searchInput.value = "";

      // reset pills UI
      document.querySelectorAll(".pill").forEach(x => x.setAttribute("aria-pressed","false"));
      const okBtn = document.querySelector('.pill[data-mode="ok"]');
      if(okBtn) okBtn.setAttribute("aria-pressed","true");

      if(favBtn) favBtn.setAttribute("aria-pressed","false");

      render();
    });
  }

  // Favorites toggle
  if(favBtn){
    favBtn.addEventListener("click", () => {
      state.showFavs = !state.showFavs;
      favBtn.setAttribute("aria-pressed", state.showFavs ? "true" : "false");
      render();
    });
  }

  // Theme toggle
  if(themeBtn){
    themeBtn.addEventListener("click", () => {
      const isDark = document.documentElement.getAttribute("data-theme") === "dark";
      const next = isDark ? "light" : "dark";
      applyTheme(next === "dark" ? "dark" : "light");
      saveTheme(next === "dark" ? "dark" : "light");
    });
  }

  // Tool modal close
  if(closeModal && toolModal){
    closeModal.addEventListener("click", () => toolModal.close());
  }

  // Hero actions
   
  if(randomTool){
    randomTool.addEventListener("click", () => {
      const list = getFilteredTools();
      if(list.length === 0) return;
      const pick = list[Math.floor(Math.random() * list.length)];
      openTool(pick.id);
    });
  }

  if(breath2min){
  breath2min.addEventListener("click", () => {
    openBreathTimer({
      totalSec: 120,
      inhaleSec: 4,
      exhaleSec: 6,
      sound: true
    });
  });
}

  // Breath timer controls
  if(btClose && breathTimer){
    btClose.addEventListener("click", () => {
      btStopAll();
      breathTimer.close();
    });
  }
  if(btStart) btStart.addEventListener("click", btStartRun);
  if(btStop) btStop.addEventListener("click", btStopAll);
  if(btReset) btReset.addEventListener("click", btResetAll);
}

// -------------------------
// Init
// -------------------------
function init(){
  loadFavorites();
  loadTheme();
  setupEvents();
  render();
}

init();

/* ============================================================
   Jithin Baby — Portfolio
   All text lives in ABOUT / PROJECTS below — edit freely.
   Images come from manifest.js (built by _tools/build_images.py).
   ============================================================ */

const ABOUT = {
  name: "Jithin Baby",
  email: "jithinbaby04@gmail.com",
  location: "Kochi, India",
  fields: ["Brand Identity", "Social Media", "Poster Design", "Packaging", "Art Direction"],
  experience: [
    { what: "SWA Diamonds", note: "Graphic Designer · Social media & campaigns", when: "2026 — Present", now: true },
    { what: "Vistaar Media & Event Solutions", note: "Branding Agency · Social Media Marketing", when: "2024" },
    { what: "Buzzstop Integrated Communications Pvt Ltd", note: "Graphic Designer", when: "2023" },
    { what: "Freelance", note: "Brands, posters, merch & events", when: "2021 —" },
  ],
  software: ["Illustrator", "Photoshop", "InDesign", "After Effects", "Premiere Pro", "Lightroom", "Figma", "DaVinci Resolve", "ChatGPT", "Claude"],
  socials: [
    // icon: "mail" | "ig" | "wa". A link with an empty url is hidden.
    { label: "Email", handle: "jithinbaby04@gmail.com", url: "mailto:jithinbaby04@gmail.com", icon: "mail" },
    { label: "Instagram", handle: "@_jit.hin_", url: "https://www.instagram.com/_jit.hin_/", icon: "ig" },
    // WhatsApp: put your number with country code, digits only, e.g. "https://wa.me/919876543210"
    { label: "WhatsApp", handle: "+91 82817 11998", url: "https://wa.me/918281711998", icon: "wa" },
  ],
};

/* kind: "brand" = long case study, "feed" = social media gallery
   home: "slider" = big slider on home, "pan" = sideways-panning strip on home
   first: image names to show first (name = file name without .jpg, see img/<project>/)
   groups: split a gallery into campaigns — [title, note, regex on file name] */
const PROJECTS = [
  {
    id: "frenzy", kind: "brand", home: "slider",
    title: "Frenzy", tagline: "A brand that tastes as loud as it crunches.",
    category: "Brand Identity · Packaging",
    services: ["Logo design", "Brand identity", "Packaging", "Print & web"],
    type: "Concept brand",
    hero: "frenzy-03180",
    intro: [
      "Frenzy Nuggets are crispy, juicy frozen chicken bites — made to be cooked in minutes and loved by every age. The brand needed to feel as fun and craveable as the product itself.",
      "I built the identity around a bouncy retro script wordmark, paired with Britania Vintage and a warm orange, mustard and deep-blue palette. From posters and packaging to the delivery truck, business cards, brochure and website, every touchpoint shouts appetite.",
    ],
    accent: "#f26a21",
    // Paste your Figma prototype share link between the quotes (Figma → Share → Copy link):
    site: { url: "", label: "Frenzy website", note: "Website design · Figma prototype" },
  },
  {
    id: "decode", kind: "brand", home: "slider",
    title: "Decode", tagline: "Perfume Labs — a fragrance brand that reads like a formula.",
    category: "Logo Design · Concept Art",
    services: ["Logo exploration", "Brand mark", "Product concept art", "Social content"],
    type: "Perfume brand",
    hero: "perfume-mockup-01",
    slides: ["perfume-mockup-01", "deck-15", "deck-05", "deck-09", "deck-13", "perfume-mockup02"],
    first: ["deck-02", "deck-03", "deck-04", "deck-07", "deck-08", "deck-10", "deck-11", "deck-12", "deck-13", "deck-14", "deck-15", "deck-16", "deck-17", "deck-05", "deck-06", "deck-09"],
    intro: [
      "Decode Perfume Labs treats scent like science — every bottle is a formula to unlock. The logo hides that idea in its letters: the 'o' becomes a stopper and a keyhole at once.",
      "I explored three directions, from a bold geometric sans to a high-contrast editorial serif, then took them into concept art: monochrome studio shots, floating bottles, liquid drops and dark stone sets for Formula 1012 and Crystal Saffron.",
    ],
    accent: "#d9c27a",
  },
  {
    id: "wordplay", kind: "brand", home: "slider",
    title: "Word Play", tagline: "A loud identity for a hip-hop night.",
    category: "Event Identity · Posters · Merch",
    services: ["Event logo", "Artist posters", "Tickets", "Merch & social"],
    type: "Event concept",
    hero: "wordplay-00000",
    slides: ["wordplay-00000", "wordplay-00639", "wordplay-01280", "wordplay-02517", "wordplay-01921"],
    intro: [
      "Word Play is an identity for a rap and hip-hop night — a chrome-blue, liquid wordmark that feels as loud as the crowd it's made for.",
      "The system stretches from a crowd-shot key visual to a wall of artist posters for Gabri, Vedan and Hanumankind, a VIP ticket, phone wallpapers and a cap — bold yellow, electric blue and a burst shape that keeps every piece on beat.",
    ],
    accent: "#2fd3f0",
  },
  {
    id: "octopus", kind: "brand", home: "pan",
    family: [["octopus", "Brand guidelines"], ["octosocial", "Creatives"]],
    title: "Octopus Dropship", tagline: "Brand guidelines for a logistics brand with many arms.",
    category: "Brand Guidelines · Social Creatives",
    services: ["Brand guidelines", "Logo system", "Typography & colour", "Stationery & uniforms"],
    type: "Brand book",
    hero: "cover-octopus-v2",
    intro: [
      "Octopus Dropship connects suppliers and sellers into one platform. The mark turns the octopus into a single confident stroke — a symbol of reach, flexibility and many things handled at once.",
      "The guidelines document everything a team needs to stay on-brand: logo story and clearspace, do's and don'ts, the colour system and its proportions, Degular Display and Futura typography, and real applications across stationery, digital, signage and uniforms.",
    ],
    accent: "#4a7fe0",
  },
  {
    id: "swa", kind: "feed",
    title: "SWA Diamonds", tagline: "Fine-jewellery storytelling in deep teal and gold.",
    category: "Social Media · Campaigns",
    services: ["Social media design", "Campaign concepts", "Stories", "Offer creatives"],
    type: "In-house · 2026 — Present",
    hero: "swa-july-greek-26",
    hide: ["artboard-21", "xmas-26", "xmas-27", "swa-june-story", "swa-for-home-preity-sep-23", "swa-home-08", "swa-story-templete-12", "swa-home-11"], // images removed from the site
    first: [], // ← put your two priority images here, e.g. ["swa-july-greek-26", "swa-val-coming-soon--recovered--01"]
    groups: [
      ["Garden of Love", "Valentine's campaign", /val-coming-soon|feb-story/],
      ["Odyssey", "A Greek-myth inspired collection", /july-greek/],
      ["Experimental", "Surreal & conceptual pieces", /freepik|artboard|july-dc/],
      ["Christmas", "Winter festive campaign", /xmas/],
      ["Akshaya Tritiya", "Silver coin offer campaign", /akshaya/],
      ["Festive moments", "Onam, Eid, Children's Day, Black Friday & more", /onam|eid|children|black-friday|april-fest|september/],
      ["Everyday stories", "Product stories & templates", /./],
    ],
    intro: [
      "I currently design for SWA Diamonds — from big campaigns like Garden of Love for Valentine's and the Greek-inspired Odyssey series, to Christmas, Akshaya Tritiya, Onam and Eid, Black Friday offers and everyday product stories.",
      "A consistent teal-and-gold world ties every post together, whether it's a celebrity campaign, an experimental surreal piece or a quiet single-product still.",
    ],
    accent: "#1c7c86",
  },
  {
    id: "mirror", kind: "feed",
    title: "Mirror Diamonds", tagline: "Silk, magenta and sparkle — a feed that feels like a gift.",
    category: "Social Media · Campaigns",
    services: ["Social media design", "Seasonal grids", "Stories", "Festive campaigns"],
    type: "Social media retainer",
    hero: "mirror-diamond-grid-01-02",
    pick: [["swa", ["swa-for-home-preity-sep-23", "swa-home-08", "swa-story-templete-12"]]], // Mirror posts that were saved in the SWA folder
    groups: [
      ["The silk grid", "Signature magenta feed", /diamond-grid/],
      ["Christmas", "Winter festive grid", /xmas/],
      ["New Year & Republic Day", "January campaign", /january|jan-sm/],
      ["Valentine's", "February grid", /february/],
      ["Summer", "Citrus & sunlight", /april|june|july/],
      ["Special days", "Daughter's Day, World Diamond Day & more", /^swa-/],
      ["Eid al-Adha", "Festive post", /./],
    ],
    intro: [
      "Social content for Mirror Diamonds built around a signature magenta silk world. Grids are designed to work as single posts and as a seamless profile.",
      "Seasonal sets include Christmas, New Year, Republic Day, Valentine's, summer citrus and Eid — each with elegant serif-script typography that lets the jewellery lead.",
    ],
    accent: "#b0175f",
  },
  {
    id: "hosten", kind: "feed",
    title: "Hosten", tagline: "Making windows interesting — one scroll-stopping idea at a time.",
    category: "Social Media · Copy & Concept",
    services: ["Social media design", "Concept & headlines", "Campaign series"],
    type: "Social media retainer",
    hero: "hosten-june-03",
    intro: [
      "Hosten makes premium window and door systems. The challenge: make aluminium profiles and glass something people actually stop to read.",
      "Each post leads with an idea — noise, light, ventilation, what architects really hear — and the brand's navy-and-amber system keeps the series instantly recognisable.",
    ],
    accent: "#f2a516",
  },
  {
    id: "octosocial", kind: "feed", familyOf: "octopus", navLabel: "octopus creatives", linkTo: ["octopus", "creatives"],
    title: "Octopus Dropship", tagline: "A friendly octopus that makes e-commerce feel simple.",
    category: "Social Media · 3D Mascot Campaigns",
    services: ["Social media design", "Mascot storytelling", "Festive & day posts"],
    type: "Social media",
    hero: "octopus-sep-creatives-statics-46",
    first: ["octopus-sep-creatives-statics-46", "octopus-sep-creatives-statics-47", "octopus-sep-creatives-statics-45", "octopus-sep-creatives-statics-48", "octopus-sep-tourism", "octopus-september-gandhi-jayanti", "swa-june-story-30"],
    intro: [
      "Social content for Octopus Dropship, built around the brand's blue 3D octopus mascot — explaining how the platform connects manufacturers, suppliers and online sellers in one place.",
      "Alongside the product posts, the octopus shows up for World Tourism Day, Gandhi Jayanti and Muharram, keeping the feed warm and recognisable.",
    ],
    accent: "#3d63f2",
  },
  {
    id: "posters", kind: "feed",
    title: "Culture Posters", tagline: "Cars, legends and heroes, printed big.",
    category: "Poster Design · 24×36 prints",
    services: ["Poster design", "Typography", "Photo manipulation", "Print-ready artwork"],
    type: "Personal series · 3 years",
    hero: "porsche",
    groups: [
      ["Machines", "Supercars & icons", /bmw|diablo|f80|ferrari|jesko|lamborghini|mclaren|porsche/],
      ["Sport", "Football & Formula 1", /bellingham|cr7|leclerc|lewis|max|messi|zidane/],
      ["Music", "Artists & albums", /coldplay|eminem|hanumankind|travis|weeknd/],
      ["Heroes & villains", "Film, anime & comics", /batman|beserk|daredevil|deadpool|homelander|spiderman|superman|thor|venom/],
      ["Culture", "Film & Malayalam culture", /./],
    ],
    intro: [
      "A personal series of large-format posters I've made over the past three years — supercars, football and F1 legends, musicians, and heroes from film and comics.",
      "Each one is built for print at 24×36 inches: bold condensed headlines, layered photo work and small editorial details like colour dots, captions and dates.",
    ],
    accent: "#e0412f",
  },
  {
    id: "playground", kind: "brand",
    title: "Playground", tagline: "Posters, book covers and tees.",
    category: "Poster · Book Cover · Apparel",
    services: ["Wall posters", "Book cover", "T-shirt graphics"],
    type: "Personal work",
    sources: ["wallposter", "bookcover", "tshirt"],
    hero: "bookcover-03800",
    intro: ["Side projects where I play with type and image freely — a car-and-culture poster wall, a '1984 / 1684' book cover, and streetwear graphics."],
    accent: "#e5322d",
  },
];

/* ---------------- helpers ---------------- */
const $ = (s, el = document) => el.querySelector(s);
// HASH_ROUTES (set by the online version) = one page, projects addressed as #frenzy, #decode ...
const HASH = !!window.HASH_ROUTES;
const isProject = (id) => PROJECTS.some((p) => p.id === id);
const link = (id) => {
  const to = PROJECTS.find((x) => x.id === id)?.linkTo;
  if (to) return HASH ? `#${to[0]}` : `project.html?p=${to[0]}#${to[1]}`;
  return HASH ? `#${id}` : `project.html?p=${id}`;
};
const home = (a = "") => (HASH ? `#${a || "top"}` : `index.html${a ? "#" + a : ""}`);
const APP = () => document.getElementById("app") || document.body;
const $$ = (s, el = document) => [...el.querySelectorAll(s)];
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const STAR = `<svg class="star" viewBox="0 0 100 100" aria-hidden="true"><path d="M50 0L59.32 15.23L75 6.7L75.46 24.54L93.3 25L84.77 40.68L100 50L84.77 59.32L93.3 75L75.46 75.46L75 93.3L59.32 84.77L50 100L40.68 84.77L25 93.3L24.54 75.46L6.7 75L15.23 59.32L0 50L15.23 40.68L6.7 25L24.54 24.54L25 6.7L40.68 15.23Z"/></svg>`;
const ICONS = {
  mail: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2.5"/><path d="m4 7 8 6 8-6"/></svg>`,
  ig: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="5.5"/><circle cx="12" cy="12" r="4.2"/><circle cx="17.4" cy="6.6" r="1" fill="currentColor" stroke="none"/></svg>`,
  wa: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4.5 19.5 5.6 15.7A8 8 0 1 1 8.6 18.6Z"/><path d="M9.2 8.6c.2-.5.6-.5.9-.5l.4.1.8 1.9c.1.2 0 .4-.1.6l-.5.6c.4.9 1.2 1.7 2.1 2.1l.6-.5c.2-.1.4-.2.6-.1l1.9.8.1.4c0 .3 0 .7-.5.9-.6.3-1.4.5-2.3.1-1.8-.7-3.3-2.2-4-4-.4-.9-.2-1.7.1-2.4Z" fill="currentColor" stroke="none"/></svg>`,
};
/* app-style badges for the Tools list: [letters, background, letter colour] */
const TOOL_ICONS = {
  "Illustrator": ["Ai", "#330000", "#ff9a00"],
  "Photoshop": ["Ps", "#001e36", "#31a8ff"],
  "InDesign": ["Id", "#49021f", "#ff3366"],
  "After Effects": ["Ae", "#00005b", "#9999ff"],
  "Premiere Pro": ["Pr", "#00005b", "#9999ff"],
  "Lightroom": ["Lr", "#001e36", "#31a8ff"],
};
function toolIcon(name) {
  if (name === "Figma") return `<span class="tool-ico tool-figma" aria-hidden="true"><svg viewBox="0 0 24 36"><circle cx="18" cy="18" r="6" fill="#1abcfe"/><path d="M6 36a6 6 0 0 0 6-6v-6H6a6 6 0 0 0 0 12z" fill="#0acf83"/><path d="M0 18a6 6 0 0 1 6-6h6v12H6a6 6 0 0 1-6-6z" fill="#a259ff"/><path d="M0 6a6 6 0 0 1 6-6h6v12H6A6 6 0 0 1 0 6z" fill="#f24e1e"/><path d="M12 0h6a6 6 0 0 1 0 12h-6z" fill="#ff7262"/></svg></span>`;
  if (name === "DaVinci Resolve") return `<span class="tool-ico tool-resolve" aria-hidden="true"><svg viewBox="0 0 24 24"><circle cx="12" cy="7.2" r="4.3" fill="#3aa0ff"/><circle cx="7.4" cy="15" r="4.3" fill="#f2c230" style="mix-blend-mode:screen"/><circle cx="16.6" cy="15" r="4.3" fill="#ff4f6d" style="mix-blend-mode:screen"/></svg></span>`;
  if (name === "ChatGPT") return `<span class="tool-ico" aria-hidden="true" style="background:#10a37f"><svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="1.7" stroke-linecap="round">${[0, 60, 120, 180, 240, 300].map((d) => `<path d="M12 12V5.2a3.3 3.3 0 0 1 5.7 2.3" transform="rotate(${d} 12 12)"/>`).join("")}</svg></span>`;
  if (name === "Claude") return `<span class="tool-ico" aria-hidden="true" style="background:#d97757"><svg viewBox="0 0 24 24" stroke="#fff" stroke-width="2.2" stroke-linecap="round">${[0, 45, 90, 135, 180, 225, 270, 315].map((d, i) => `<path d="M12 12V${i % 2 ? 6.4 : 4.6}" transform="rotate(${d} 12 12)"/>`).join("")}</svg></span>`;
  const t = TOOL_ICONS[name];
  return t ? `<span class="tool-ico" aria-hidden="true" style="background:${t[1]};color:${t[2]};box-shadow:inset 0 0 0 1.5px ${t[2]}">${t[0]}</span>` : `<span class="tool-ico" aria-hidden="true">✦</span>`;
}
const INDEXED = () => PROJECTS.filter((p) => !p.familyOf);
const FOLDER = `<svg class="fold-ico" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" aria-hidden="true"><path d="M3 7.5a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2V17a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>`;
const FINE = matchMedia("(pointer: fine)").matches;
const CALM = false; // animations always on (set to matchMedia("(prefers-reduced-motion: reduce)").matches to respect the OS setting)
const nameOf = (im) => im.s.split("/").pop().replace(/(_w)?\.jpg$/, ""); // online copies end in _w.jpg
const words = (t) => t.split(" ").map((w, i) => `<span class="w"><span style="--d:${i * 0.04}s">${w}</span></span>`).join(" ");

function imagesFor(p) {
  const M = window.MANIFEST || {};
  const hidden = new Set(p.hide || []);
  const nm = (im) => im.s.split("/").pop().replace(/(_w)?\.jpg$/, "");
  const picked0 = (p.pick || []).flatMap(([k, names]) => (M[k] || []).filter((im) => names.includes(nm(im))));
  const list = (p.sources || [p.id]).flatMap((k) => M[k] || []).concat(picked0).filter((im) => !hidden.has(nm(im)));
  const order = [...(p.first || []), p.hero, ...(p.first ? [] : [])].filter(Boolean);
  const picked = [...new Set(order)].map((n) => list.find((im) => nameOf(im) === n)).filter(Boolean);
  return [...picked, ...list.filter((im) => !picked.includes(im))];
}
const heroOf = (p) => imagesFor(p)[0];
const byNames = (p, names) => names.map((n) => imagesFor(p).find((im) => nameOf(im) === n)).filter(Boolean);

function header(active) {
  return `
  <header class="site-head">
    <a class="logo" href="${home()}" aria-label="Home">${STAR}<span>Jithin<br>Baby</span></a>
    <div class="head-right">
      ${(() => { const wa = ABOUT.socials.find((x) => x.icon === "wa" && x.url); return wa ? `<a class="wa-btn" href="${wa.url}?text=${encodeURIComponent("Hi Jithin, I saw your portfolio and would like to talk.")}" target="_blank" rel="noopener" aria-label="Chat on WhatsApp">${ICONS.wa}<span>WhatsApp</span></a>` : ""; })()}
      <a class="btn" href="mailto:${ABOUT.email}" aria-label="Let's work together">${ICONS.mail}<span>Let's work together</span></a>
      <button class="idx-btn" aria-label="Open index" aria-expanded="false" aria-controls="idx"><span class="idx-word"><i>Index</i><i>Close</i></span><span class="idx-burger"><b></b><b></b><b></b></span></button>
    </div>
  </header>
  ${indexMenu(active)}`;
}

/* full-screen index: every project numbered, with previews, plus sections and contacts */
function indexMenu(active) {
  const sections = [["Home", home(), "top"], ["Work", home("work"), "work"], ["About", home("about"), "about"], ["Contact", "#contact", "contact"]];
  return `
  <div class="idx" id="idx" aria-hidden="true" data-lenis-prevent>
    <div class="idx-inner">
      <section class="idx-contact">
        <p class="idx-label">Contact me</p>
        <p class="idx-hello">Have a project in mind?<br><em>Let's talk.</em></p>
        <div class="idx-contacts">${ABOUT.socials.filter((s) => s.url).map((s, i) => `<a href="${s.url}" target="_blank" rel="noopener" class="ci-${s.icon}" style="--i:${i}"><span class="ci-ico">${ICONS[s.icon] || ""}</span><span class="idx-ct"><b>${esc(s.label)}</b><small>${esc(s.handle || "")}</small></span><span class="idx-go">↗</span></a>`).join("")}</div>
        <p class="idx-label">Sections</p>
        <nav class="idx-sections">${sections.map(([t, h, g], i) => `<a href="${h}" data-goto="${g}" style="--i:${i + 3}">${t}</a>`).join("")}</nav>
      </section>
      <section class="idx-list">
        <p class="idx-label">Index · ${INDEXED().length} projects</p>
        ${INDEXED().map((p, i) => { const h = heroOf(p);
          return `
        <a class="idx-item ${p.id === active ? "on" : ""}" href="${link(p.id)}" style="--accent:${p.accent}; --i:${i + 4}">
          <span class="idx-num">${String(i + 1).padStart(2, "0")}</span>
          <span class="idx-name">${h ? `<img class="idx-thumb" src="${h.t}" alt="" loading="lazy">` : ""}${esc(p.title)}</span>
          <span class="idx-cat">${esc(p.category)}</span>
          <span class="idx-arrow">→</span>
        </a>`; }).join("")}
      </section>
    </div>
    <p class="idx-foot">${STAR} ${ABOUT.name} · ${ABOUT.location}</p>
  </div>`;
}

function footer() {
  return `
  <footer class="site-foot" id="contact">
    <div class="foot-line"></div>
    <a class="logo big" href="${home()}">${STAR}</a>
    <p class="foot-call split">Have a brand that<br><em>needs a voice?</em></p>
    <div class="contact-icons">${ABOUT.socials.filter((s) => s.url).map((s) => `<a class="ci ci-${s.icon}" href="${s.url}" target="_blank" rel="noopener" aria-label="${esc(s.label)}"><span class="ci-ico">${ICONS[s.icon] || ""}</span><span class="ci-txt"><b>${esc(s.label)}</b><small>${esc(s.handle || "")}</small></span></a>`).join("")}</div>
    <div class="foot-links"><span>${ABOUT.location}</span></div>
    <p class="foot-sign">Thank you for<br>stopping by.</p>
    <p class="foot-copy">© ${new Date().getFullYear()} ${ABOUT.name}. All work shown is my own.</p>
  </footer>`;
}

/* ---------------- slider (home) ---------------- */
function slider(p, n = 6) {
  const ims = (p.slides ? byNames(p, p.slides) : imagesFor(p).filter((im) => im.w >= im.h)).slice(0, n);
  return `
  <div class="slider" data-slider data-cursor="View">
    <div class="slides">${ims.map((im, i) => `<img src="${i ? im.t : im.s}" data-full="${im.s}" alt="${esc(p.title)} — image ${i + 1}" class="${i ? "" : "on"}" ${i ? 'loading="lazy"' : ""}>`).join("")}</div>
    <div class="bars">${ims.map((_, i) => `<button aria-label="Slide ${i + 1}" class="${i ? "" : "on"}"><i></i></button>`).join("")}</div>
  </div>`;
}
function initSliders() {
  $$("[data-slider]").forEach((el) => {
    const imgs = $$("img", el), bars = $$(".bars button", el);
    let i = 0, t;
    const go = (n) => {
      imgs[i].classList.remove("on"); bars[i].classList.remove("on");
      i = (n + imgs.length) % imgs.length;
      const im = imgs[i]; if (im.src.includes("_t.jpg")) im.src = im.dataset.full;
      im.classList.add("on"); void bars[i].offsetWidth; bars[i].classList.add("on");
      clearTimeout(t); t = setTimeout(() => go(i + 1), 4500);
    };
    bars.forEach((b, n) => b.addEventListener("click", (e) => { e.stopPropagation(); go(n); }));
    el.addEventListener("click", () => go(i + 1));
    new IntersectionObserver(([e]) => { clearTimeout(t); if (e.isIntersecting) t = setTimeout(() => go(i + 1), 4500); }).observe(el);
  });
}

/* ---------------- lightbox ---------------- */
let LB = [], LBi = 0;
function openLightbox(list, i) {
  LB = list; LBi = i;
  let el = $("#lightbox");
  if (!el) {
    el = document.createElement("div"); el.id = "lightbox";
    el.innerHTML = `<button class="lb-x" aria-label="Close">×</button><button class="lb-prev" aria-label="Previous">←</button><img alt=""><button class="lb-next" aria-label="Next">→</button><div class="lb-count"></div>`;
    document.body.appendChild(el);
    el.addEventListener("click", (e) => {
      if (e.target.classList.contains("lb-prev")) return showLb(LBi - 1);
      if (e.target.classList.contains("lb-next") || e.target.tagName === "IMG") return showLb(LBi + 1);
      closeLb();
    });
    document.addEventListener("keydown", (e) => {
      if (!el.classList.contains("open")) return;
      if (e.key === "Escape") closeLb(); if (e.key === "ArrowRight") showLb(LBi + 1); if (e.key === "ArrowLeft") showLb(LBi - 1);
    });
    let sx = 0;
    el.addEventListener("touchstart", (e) => (sx = e.touches[0].clientX), { passive: true });
    el.addEventListener("touchend", (e) => { const d = e.changedTouches[0].clientX - sx; if (Math.abs(d) > 50) showLb(LBi + (d < 0 ? 1 : -1)); });
  }
  el.classList.add("open"); document.body.classList.add("lb-open"); window.lenis?.stop(); showLb(i);
}
function showLb(i) {
  const dir = i > LBi ? 1 : -1;
  LBi = (i + LB.length) % LB.length; const el = $("#lightbox"), img = el.querySelector("img");
  img.style.setProperty("--dx", dir * 40 + "px"); img.classList.remove("swap"); void img.offsetWidth; img.classList.add("swap");
  img.src = LB[LBi].s; el.querySelector(".lb-count").textContent = `${LBi + 1} / ${LB.length}`;
  [LBi + 1, LBi - 1].forEach((n) => { const x = LB[(n + LB.length) % LB.length]; if (x) new Image().src = x.s; });
}
function closeLb() { $("#lightbox").classList.remove("open"); document.body.classList.remove("lb-open"); window.lenis?.start(); }

/* ============================ HOME ============================ */
function renderHome() {
  const sliders = PROJECTS.filter((p) => p.home === "slider");
  const panners = PROJECTS.filter((p) => p.home === "pan");
  const feeds = PROJECTS.filter((p) => p.kind === "feed" && !p.small);
  const more = PROJECTS.filter((p) => (!p.home && p.kind !== "feed") || p.small);
  const P = (id) => PROJECTS.find((p) => p.id === id);
  const fan = [byNames(P("mirror"), ["mirror-february-grid-14"])[0], { t: "img/about/frenzy-logo.jpg" }, byNames(P("swa"), ["swa-july-greek-22"])[0]].filter(Boolean);
  // extra cards only used in the phone deck: Garden of Love (SWA), Mirror summer, SWA bloom
  const fanExtra = [byNames(P("swa"), ["swa-val-coming-soon-18"])[0], byNames(P("mirror"), ["mirror-april-summer-grid-03"])[0], byNames(P("swa"), ["swa-val-coming-soon--recovered--07"])[0]].filter(Boolean);

  const featureMeta = (p) => `
        <div class="feature-meta">
          <h3 class="split"><a href="${link(p.id)}"><strong>${esc(p.title)}</strong> — ${esc(p.tagline)}</a></h3>
          <div class="feature-side reveal">
            <p>${esc(p.intro[0])}</p>
            <div class="tags">${esc(p.category)}</div>
            <a class="more" href="${link(p.id)}">View project <span>→</span></a>
            ${p.site?.url ? `<button class="live-btn" data-site="${p.id}" data-cursor="Play"><span class="live-dot"></span>Preview website</button>` : ""}
          </div>
        </div>`;

  APP().innerHTML = `
  ${header()}
  <main>
    <section class="hero">
      <h1 class="tp" aria-label="Portfolio"></h1>
      <p class="hero-sub">Graphic Design · ${ABOUT.location}</p>
      <div class="scroll-cue" aria-hidden="true"><span></span></div>
    </section>

    <div class="ticker" aria-hidden="true"><div class="ticker-track" data-velocity>${Array(4).fill(ABOUT.fields.map((f) => `<span>${f}</span>${STAR}`).join("")).join("")}</div></div>

    <section class="intro" id="about">
      <div class="intro-text">
        <p class="lead split">I'm <strong>Jithin Baby</strong>, a graphic designer based in Kochi, India.</p>
        <div class="reveal">
          <p>I blend bold visual storytelling with cultural richness — designs that balance modern trends with clarity and purpose.</p>
          <p>Right now I design for <a href="${link("swa")}">SWA Diamonds</a>. I've built brand identities like <a href="${link("frenzy")}">Frenzy</a>, <a href="${link("decode")}">Decode</a> and <a href="${link("octopus")}">Octopus Dropship</a>, and hundreds of posts for <a href="${link("mirror")}">Mirror Diamonds</a> and <a href="${link("hosten")}">Hosten</a>.</p>
          <p>I believe in brands that have a point of view. Take a look at some of my work <span class="arrow">↓</span></p>
        </div>
      </div>
      <div class="fan" aria-hidden="true" data-tilt>
        ${fan.map((im, i) => `<div class="fan-card c${i}" data-speed="${[-0.12, 0.06, -0.04][i]}"><img src="${im.t}" alt="" loading="lazy"></div>`).join("")}
        ${fanExtra.map((im) => `<div class="fan-card extra"><img src="${im.t}" alt="" loading="lazy"></div>`).join("")}
        <div class="fan-star" data-speed="0.15">${STAR}</div>
      </div>
    </section>

    <section class="work" id="work">
      <div class="section-head"><span class="num">01</span><h2 class="split">Selected <em>branding</em></h2></div>
      ${sliders.map((p, k) => `
      <article class="feature" style="--accent:${p.accent}">
        <div class="reveal">${slider(p)}</div>
        ${driftStrip(p, imagesFor(p), k % 2 ? 1 : -1, "small")}
        ${featureMeta(p)}
      </article>`).join("")}
    </section>

    <section class="feeds">
      <div class="section-head"><span class="num">02</span><h2 class="split">On the <em>feed</em></h2><p class="section-note reveal">Social media for brands that post every day. ${feeds.reduce((a, p) => a + imagesFor(p).length, 0)}+ designs and counting.</p></div>
      ${feeds.map((p, k) => {
        const all = imagesFor(p).filter((im) => im.h >= im.w * 0.9), step = Math.max(1, all.length / 16);
        const ims = Array.from({ length: Math.min(16, all.length) }, (_, n) => all[Math.floor(n * step)]);
        return `
        <a class="feed-row reveal" href="${link(p.id)}" style="--accent:${p.accent}" data-cursor="Open">
          <div class="feed-name"><span class="feed-count">${imagesFor(p).length} works${p.id === "swa" ? " · current" : ""}</span><h3>${esc(p.title)}</h3><p>${esc(p.tagline)}</p><span class="more">See the feed <span>→</span></span></div>
          <div class="feed-strip"><div class="feed-track ${k % 2 ? "rev" : ""}">${[...ims, ...ims].map((im) => `<img src="${im.t}" alt="" loading="lazy" style="aspect-ratio:${im.w}/${im.h}">`).join("")}</div></div>
        </a>`;
      }).join("")}
    </section>

    <section class="work guides">
      <div class="section-head"><span class="num">03</span><h2 class="split">Brand <em>guidelines</em></h2></div>
      ${panners.map((p) => {
        const ims = imagesFor(p).filter((im) => /guidelines|cover-octopus-v2/.test(im.s));
        return `
      <article class="feature oct" style="--accent:${p.accent}">
        <div class="feature-meta oct-head">
          <h3 class="split"><a href="${link(p.id)}"><strong>${esc(p.title)}</strong> — ${esc(p.tagline)}</a></h3>
          <div class="feature-side reveal">
            <p>${esc(p.intro[0])}</p>
            <div class="tags">${esc(p.category)} · drag to explore</div>
            <a class="more" href="${link(p.id)}">View project <span>→</span></a>
          </div>
        </div>
        ${driftStrip(p, ims, -1)}
      </article>`;
      }).join("")}
    </section>

    <section class="more-work">
      <div class="section-head"><span class="num">04</span><h2 class="split">More <em>work</em></h2></div>
      <div class="cards">
        ${more.map((p, i) => { const h = heroOf(p); return `
        <a class="card reveal" href="${link(p.id)}" style="--rd:${i * 0.12}s" data-cursor="View">
          <div class="card-img reveal-img">${h ? `<img class="pan" src="${h.t.replace("_t.jpg", ".jpg")}" alt="${esc(p.title)}" loading="lazy">` : ""}</div>
          <h3>${esc(p.title)}</h3><p>${esc(p.category)}</p>
        </a>`; }).join("")}
      </div>
    </section>

    <section class="cv">
      <div class="section-head"><span class="num">05</span><h2 class="split">The <em>details</em></h2></div>
      <div class="cv-grid">
        <div class="reveal"><h4>Creative field</h4><ul>${ABOUT.fields.map((f) => `<li>✦ ${f}</li>`).join("")}</ul></div>
        <div class="reveal" style="--rd:.1s"><h4>Experience</h4><ul class="exp">${ABOUT.experience.map((e) => `<li class="${e.now ? "now" : ""}"><span class="when">${e.when}</span><strong>${esc(e.what)}${e.now ? ' <b class="live">Now</b>' : ""}</strong><span>${esc(e.note)}</span></li>`).join("")}</ul></div>
        <div class="reveal" style="--rd:.2s"><h4>Tools</h4><ul class="tools">${ABOUT.software.map((f) => `<li>${toolIcon(f)}<span>${esc(f)}</span></li>`).join("")}</ul></div>
      </div>
    </section>
  </main>
  ${footer()}`;
  initSliders();
}

/* ============================ PROJECT ============================ */
function layoutRows(ims) {
  const rows = []; let buf = [];
  const flush = () => { while (buf.length) { const n = buf.length === 4 ? 2 : Math.min(3, buf.length); rows.push(buf.splice(0, n)); } };
  ims.forEach((im) => { if (im.w / im.h > 1.15) { flush(); rows.push([im]); } else buf.push(im); });
  flush(); return rows;
}

function renderProject() {
  let id = HASH ? location.hash.slice(1) : new URLSearchParams(location.search).get("p");
  const linked = PROJECTS.find((x) => x.id === id)?.linkTo;
  if (linked) { id = linked[0]; if (!HASH) history.replaceState(null, "", `project.html?p=${linked[0]}#${linked[1]}`); }
  const idx = Math.max(0, PROJECTS.findIndex((p) => p.id === id));
  const p = PROJECTS[idx], next = PROJECTS[(idx + 1) % PROJECTS.length];
  let ims = imagesFor(p);
  const hero = ims[0];
  document.title = `${p.title} — Jithin Baby`;
  document.documentElement.style.setProperty("--accent", p.accent);

  let body;
  if (p.family) {
    // one page, two chapters: the brand book (pages shown at a readable size) and the social creatives
    const by = (re) => ims.filter((im) => re.test(nameOf(im)));
    const pages = by(/guidelines-\d+/);
    const mocks = ims.slice(1).filter((im) => !pages.includes(im));
    const creative = p.family.map(([fid]) => PROJECTS.find((x) => x.id === fid)).filter((m) => m && m.id !== p.id).flatMap((m) => imagesFor(m));
    ims = [hero, ...pages, ...mocks, ...creative].filter(Boolean);
    let k = 1;
    const tile = (im, cls, cap) => `<figure class="${cls} reveal"><button class="f-item" data-i="${k++}" data-cursor="View" style="aspect-ratio:${im.w}/${im.h}"><img src="${im.t}" alt="${esc(p.title)} ${esc(cap)}" loading="lazy"></button>${cap ? `<figcaption>${esc(cap)}</figcaption>` : ""}</figure>`;
    const chapters = [
      ["guidelines", "Brand guidelines", `${pages.length} pages · tap any page to read it full size`, `
        <div class="gl-grid">${pages.map((im, i) => tile(im, "gl-page", `Page ${String(i + 1).padStart(2, "0")}`)).join("")}</div>
        ${mocks.length ? `<p class="chap-sub reveal">In use</p><div class="gl-mocks">${mocks.map((im) => tile(im, "gl-mock", "")).join("")}</div>` : ""}`, pages.length + mocks.length],
      ["creatives", "Creatives", "Social media · 3D mascot campaigns", `
        <div class="masonry chap-masonry">${creative.map((im) => `<button class="m-item reveal" data-i="${k++}" data-cursor="View" style="aspect-ratio:${im.w}/${im.h}"><img src="${im.t}" alt="${esc(p.title)} creative" loading="lazy"></button>`).join("")}</div>`, creative.length],
    ];
    body = `
      <nav class="chap-nav" aria-label="${esc(p.title)} chapters">${chapters.map(([cid, t, , , n], i) => `<a href="#${cid}" data-chap="${cid}" class="${i ? "" : "on"}"><b>${String(i + 1).padStart(2, "0")}</b>${esc(t)}<sup>${n}</sup></a>`).join("")}</nav>
      ${chapters.map(([cid, t, note, html], i) => `
      <section class="chapter" id="${cid}">
        <div class="chap-head"><span class="chap-num">${String(i + 1).padStart(2, "0")}</span><h2 class="split">${esc(t)}</h2><p class="reveal">${esc(note)}</p></div>
        ${html}
      </section>`).join("")}`;
  } else if (p.kind === "feed") {
    // priority images first, then campaigns in order
    const pri = byNames(p, p.first || []);
    const rest = ims.filter((im) => !pri.includes(im));
    const sections = [];
    if (pri.length) sections.push(["Highlights", "Favourite pieces", pri]);
    if (p.groups) {
      const left = new Set(rest);
      p.groups.forEach(([t, note, re]) => { const g = rest.filter((im) => left.has(im) && re.test(nameOf(im))); g.forEach((im) => left.delete(im)); if (g.length) sections.push([t, note, g]); });
    } else sections.push(["", "", rest]);
    ims = sections.flatMap((s) => s[2]);
    let k = 0;
    const chips = sections.filter((s) => s[0]).length > 1 ? `<nav class="chips">${sections.map((s, i) => `<a href="#g${i}">${esc(s[0])} <sup>${s[2].length}</sup></a>`).join("")}</nav>` : "";
    body = chips + sections.map(([t, note, g], i) => `
      <section class="group" id="g${i}">
        ${t ? `<div class="group-head"><h2 class="split">${esc(t)}</h2><p class="reveal">${esc(note)}${note ? " · " : ""}${g.length} designs</p></div>` : ""}
        <div class="masonry">${g.map((im) => `<button class="m-item reveal" data-i="${k++}" data-cursor="View" style="aspect-ratio:${im.w}/${im.h}"><img src="${im.t}" alt="${esc(p.title)} — ${esc(t || "post")}" loading="lazy"></button>`).join("")}</div>
      </section>`).join("");
  } else {
    const rows = layoutRows(ims.slice(1));
    let k = 1;
    body = `<div class="flow">${rows.map((r) => `<div class="row r${r.length}">${r.map((im) => `<button class="f-item reveal-img" data-i="${k++}" data-cursor="View" style="aspect-ratio:${im.w}/${im.h}"><img class="${r.length === 1 ? "pan" : ""}" src="${r.length > 1 ? im.t.replace("_t.jpg", ".jpg") : im.s}" alt="${esc(p.title)}" loading="lazy"></button>`).join("")}</div>`).join("")}</div>`;
  }

  APP().innerHTML = `
  ${header(p.id)}
  <main class="project ${p.kind}">
    <section class="p-head">
      <a class="back" href="${home("work")}">← Back to all work</a>
      <p class="p-cat">${esc(p.category)}</p>
      <h1 class="p-title">${esc(p.title).split(" ").map((w) => `<span class="w"><span>${w}</span></span>`).join(" ")}</h1>
      <p class="p-tag"><em>${esc(p.tagline)}</em></p>
      ${p.site?.url ? `<button class="live-btn" data-site="${p.id}" data-cursor="Play"><span class="live-dot"></span>Preview website</button>` : ""}
    </section>
    ${hero && p.kind !== "feed" ? `<figure class="p-hero reveal-img"><button class="f-item" data-i="0" data-cursor="View"><img class="pan" src="${hero.s}" alt="${esc(p.title)} hero"></button></figure>` : ""}
    <section class="p-info">
      <dl class="p-meta reveal">
        <div><dt>Type</dt><dd>${esc(p.type)}</dd></div>
        <div><dt>Services</dt><dd>${p.services.map(esc).join("<br>")}</dd></div>
        <div><dt>Designer</dt><dd>${ABOUT.name}</dd></div>
        <div><dt>Images</dt><dd>${ims.length}</dd></div>
      </dl>
      <div class="p-text">${p.intro.map((t, i) => `<p class="reveal" style="--rd:${i * 0.1}s">${esc(t)}</p>`).join("")}</div>
    </section>
    <div class="divider">${STAR}</div>
    ${body}
    <a class="next" href="${link(next.id)}" style="--accent:${next.accent}" data-cursor="Next">
      <span>Next project</span><strong>${esc(next.title)} <i>→</i></strong>
      ${heroOf(next) ? `<img class="next-peek" src="${heroOf(next).t}" alt="">` : ""}
    </a>
  </main>
  ${footer()}`;

  $$("[data-i]").forEach((b) => b.addEventListener("click", () => openLightbox(ims, +b.dataset.i)));
  const chapLinks = $$(".chap-nav a");
  if (chapLinks.length) {
    chapLinks.forEach((a) => a.addEventListener("click", (e) => { e.preventDefault(); e.stopImmediatePropagation(); goTo(a.dataset.chap); }));
    const io = new IntersectionObserver((es) => es.forEach((en) => { if (en.isIntersecting) chapLinks.forEach((a) => a.classList.toggle("on", a.dataset.chap === en.target.id)); }), { rootMargin: "-45% 0px -50% 0px" });
    $$(".chapter").forEach((c) => io.observe(c));
  }
}

/* ============================ MOTION ============================ */
function splitText() {
  // wrap words of .split headings so each word rises from a mask
  $$(".split").forEach((el) => {
    const walk = (node) => [...node.childNodes].forEach((n) => {
      if (n.nodeType === 3 && n.textContent.trim()) {
        const frag = document.createElement("span"); frag.innerHTML = words(n.textContent.trim());
        const lead = /^\s/.test(n.textContent) ? " " : "", trail = /\s$/.test(n.textContent) ? " " : "";
        n.replaceWith(document.createTextNode(lead), ...frag.childNodes, document.createTextNode(trail));
      } else if (n.nodeType === 1 && n.tagName !== "BR") walk(n);
    });
    walk(el);
    $$(".w > span", el).forEach((s, i) => s.style.setProperty("--d", `${i * 0.05}s`));
  });
}

function initReveal() {
  const io = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }), { rootMargin: "0px 0px -10% 0px" });
  $$(".reveal, .reveal-img, .split").forEach((el) => io.observe(el));
}

function initSmoothScroll() {
  if (CALM || typeof Lenis === "undefined") return;
  const lenis = new Lenis({ duration: 1.15, easing: (t) => 1 - Math.pow(1 - t, 4), smoothWheel: true });
  window.lenis = lenis;
  $$('a[href^="#"]').forEach((a) => a.addEventListener("click", (e) => { const t = $(a.getAttribute("href")); if (t && t.id) { e.preventDefault(); goTo(t.id); } }));
}

function initScrollFx() {
  const pans = $$(".pan"), speeds = $$("[data-speed]"), hpans = $$("[data-hpan]"), vel = $$("[data-velocity]");
  const heroT = $(".hero-title"), heroSec = $(".hero");
  let lastY = scrollY, v = 0, skew = 0;
  const sizeHpan = () => hpans.forEach((h) => { const track = $(".hpan-track", h); h.style.height = `${(track.scrollWidth - innerWidth) * 0.55 + innerHeight}px`; });
  if (hpans.length) { sizeHpan(); addEventListener("resize", sizeHpan); addEventListener("load", sizeHpan); }
  const tick = () => {
    const vh = innerHeight, y = scrollY;
    v = y - lastY; lastY = y; skew += (Math.max(-8, Math.min(8, v * 0.25)) - skew) * 0.12;
    // image panning: image drifts inside its frame as it passes through the viewport
    pans.forEach((img) => {
      const r = img.parentElement.getBoundingClientRect();
      if (r.bottom < -100 || r.top > vh + 100) return;
      const prog = (r.top + r.height / 2 - vh / 2) / (vh / 2 + r.height / 2); // -1..1
      img.style.transform = `translate3d(0, ${(prog * -6).toFixed(2)}%, 0) scale(1.14)`;
    });
    speeds.forEach((el) => { const r = el.parentElement.getBoundingClientRect(); el.style.translate = `0 ${((r.top + r.height / 2 - vh / 2) * +el.dataset.speed).toFixed(1)}px`; });
    // sideways pan (Octopus)
    hpans.forEach((h) => {
      const r = h.getBoundingClientRect(), track = $(".hpan-track", h), max = track.scrollWidth - innerWidth;
      const prog = Math.min(1, Math.max(0, -r.top / (r.height - vh)));
      track.style.transform = `translate3d(${-prog * max}px,0,0)`;
      $(".hpan-progress i", h).style.transform = `scaleX(${prog})`;
    });
    vel.forEach((el) => (el.style.transform = `skewX(${-skew}deg)`));
    if (heroT && y < vh * 1.2) { const k = y / vh; heroT.style.opacity = 1 - k * 0.9; heroSec.style.setProperty("--hy", `${y * 0.35}px`); }
    requestAnimationFrame(tick);
  };
  if (!CALM) requestAnimationFrame(tick);
}

function initMagnet() {
  if (!FINE || CALM) return;
  // hero mouse parallax
  const layers = $$("[data-depth]");
  addEventListener("mousemove", (e) => {
    const dx = e.clientX / innerWidth - 0.5, dy = e.clientY / innerHeight - 0.5;
    layers.forEach((l) => (l.style.translate = `${dx * l.dataset.depth}px ${dy * l.dataset.depth}px`));
  });
  // magnetic buttons
  $$(".btn, .more, .magnet, .logo").forEach((b) => {
    b.addEventListener("mousemove", (e) => { const r = b.getBoundingClientRect(); b.style.translate = `${(e.clientX - r.left - r.width / 2) * 0.2}px ${(e.clientY - r.top - r.height / 2) * 0.3}px`; });
    b.addEventListener("mouseleave", () => (b.style.translate = ""));
  });
}

function driftStrip(p, ims, dir = -1, size = "") {
  const items = ims.map((im) => `<a href="${link(p.id)}" class="oct-item" data-cursor="Drag" style="aspect-ratio:${im.w}/${im.h}" draggable="false"><img src="${im.t}" alt="${esc(p.title)}" loading="lazy" draggable="false"></a>`).join("");
  return `<div class="oct-strip reveal ${size}" data-drift="${dir}"><div class="oct-track">${items}${items}</div></div>`;
}

function initDrift() {
  $$("[data-drift]").forEach((strip) => {
    const track = $(".oct-track", strip), dir = +strip.dataset.drift || -1;
    let x = 0, v = 0, drag = false, sx = 0, lx = 0, moved = 0, hover = false;
    strip.addEventListener("pointerdown", (e) => { drag = true; moved = 0; sx = lx = e.clientX; strip.setPointerCapture(e.pointerId); strip.classList.add("grabbing"); });
    strip.addEventListener("pointermove", (e) => { if (!drag) return; const d = e.clientX - lx; lx = e.clientX; x += d; v = d; moved += Math.abs(d); });
    const up = () => { drag = false; strip.classList.remove("grabbing"); };
    strip.addEventListener("pointerup", up); strip.addEventListener("pointercancel", up);
    strip.addEventListener("click", (e) => { if (moved > 6) e.preventDefault(); }, true);
    strip.addEventListener("mouseenter", () => (hover = true)); strip.addEventListener("mouseleave", () => (hover = false));
    const loop = () => {
      const half = track.scrollWidth / 2;
      if (!drag) { x += v + dir * (hover ? 0.15 : 0.6); v *= 0.94; }
      if (half) { if (x < -half) x += half; if (x > 0) x -= half; }
      track.style.transform = `translate3d(${x}px,0,0)`;
      requestAnimationFrame(loop);
    };
    loop();
  });
}

/* playful icons: stars spin with scroll speed, burst on click, hero letters bounce */
/* intro card deck (phone + computer): drag, flick or tap the top card to send it to the back.
   Every card eases toward its slot each frame, so motion stays smooth while dragging and settling. */
function initDeck() {
  const fan = $(".fan"); if (!fan) return;
  const cards = $$(".fan-card", fan); if (cards.length < 2) return;
  fan.classList.add("stack");
  fan.setAttribute("tabindex", "0"); fan.setAttribute("aria-label", "Card deck. Drag, tap or use arrow keys to flip.");
  fan.removeAttribute("aria-hidden");
  cards.forEach((c) => { c.insertAdjacentHTML("beforeend", '<i class="shade"></i>'); c.querySelector("img").draggable = false; });
  const first = [1, 0, 2].filter((i) => cards[i]);
  let order = first.concat(cards.map((_, i) => i).filter((i) => !first.includes(i)));
  const SLOTS = [
    { x: 0, y: 0, r: -2, s: 1, d: 0 },
    { x: .3, y: .03, r: 9, s: .9, d: .3 },
    { x: -.3, y: .05, r: -10, s: .84, d: .5 },
    { x: 0, y: .08, r: 0, s: .8, d: 1 },
  ];
  const st = cards.map(() => ({ x: 0, y: 0, r: 0, s: .8, d: 1 }));
  let drag = null, fly = null, hoverX = 0, paused = 0, visible = true, last = performance.now();

  const hint = document.createElement("div"); hint.className = "stack-hint";
  hint.innerHTML = `<span class="deck-dots">${cards.map(() => "<i></i>").join("")}</span><span>Drag or tap the cards</span>`;
  fan.appendChild(hint);
  const dots = $$(".deck-dots i", hint);
  const paintDots = () => dots.forEach((d, i) => d.classList.toggle("on", i === order[0]));
  paintDots();

  const throwTop = (dir = 1) => {
    if (fly) return;
    const ci = order[0];
    fly = { ci, dir, t: performance.now() };
    paused = performance.now() + 6000;
  };
  const finishFly = () => { order.push(order.shift()); fly = null; paintDots(); };

  // pointer: drag the top card
  fan.addEventListener("pointerdown", (e) => {
    const c = e.target.closest(".fan-card"); if (!c || c !== cards[order[0]] || fly) return;
    drag = { ci: order[0], sx: e.clientX, sy: e.clientY, dx: 0, dy: 0, vx: 0, lx: e.clientX, lt: performance.now(), moved: 0 };
    c.setPointerCapture(e.pointerId); c.classList.add("grab"); paused = Infinity;
  });
  fan.addEventListener("pointermove", (e) => {
    if (FINE) { const r = fan.getBoundingClientRect(); hoverX = (e.clientX - r.left) / r.width - .5; }
    if (!drag) return;
    const now = performance.now(), dt = Math.max(1, now - drag.lt);
    drag.vx = drag.vx * .6 + ((e.clientX - drag.lx) / dt) * .4; drag.lx = e.clientX; drag.lt = now;
    drag.dx = e.clientX - drag.sx; drag.dy = (e.clientY - drag.sy) * .4; drag.moved = Math.max(drag.moved, Math.abs(drag.dx));
  });
  const release = () => {
    if (!drag) return;
    const c = cards[drag.ci]; c.classList.remove("grab");
    const w = c.offsetWidth, { dx, vx, moved } = drag;
    drag = null; paused = performance.now() + 6000;
    if (moved < 6) throwTop(1);
    else if (Math.abs(dx) > w * .28 || Math.abs(vx) > .55) throwTop(Math.sign(dx || vx));
  };
  fan.addEventListener("pointerup", release); fan.addEventListener("pointercancel", release);
  fan.addEventListener("mouseleave", () => (hoverX = 0));
  fan.addEventListener("mouseenter", () => (paused = Math.max(paused, performance.now() + 4000)));
  fan.addEventListener("keydown", (e) => { if (e.key === "ArrowRight") throwTop(1); if (e.key === "ArrowLeft") throwTop(-1); });
  new IntersectionObserver(([en]) => (visible = en.isIntersecting)).observe(fan);
  setInterval(() => { if (visible && !drag && !fly && performance.now() > paused) throwTop(1); }, 3400);

  const tick = (now) => {
    const dt = Math.min(48, now - last); last = now;
    const k = 1 - Math.pow(1 - .16, dt / 16.7);
    const w = cards[0].offsetWidth || 260, fw = fan.offsetWidth || 400;
    order.forEach((ci, pos) => {
      const c = cards[ci], sl = SLOTS[Math.min(pos, 3)], cur = st[ci];
      let tx = sl.x * w, ty = sl.y * w, tr = sl.r, ts = sl.s, td = sl.d;
      if (pos === 0 && !drag && !fly && FINE) { tx += hoverX * 24; tr += hoverX * 4; }
      if (drag && drag.ci === ci) { tx = drag.dx; ty = drag.dy; tr = -2 + drag.dx * .06; ts = 1.03; td = 0; cur.x = tx; cur.y = ty; }
      if (fly && fly.ci === ci) {
        tx = fly.dir * (fw * .5 + w * 1.1); ty = -w * .08; tr = fly.dir * 24; ts = 1; td = 0;
        if (Math.abs(cur.x) > fw * .5 + w * .7 || now - fly.t > 600) finishFly();
      }
      cur.x += (tx - cur.x) * (drag && drag.ci === ci ? 1 : k);
      cur.y += (ty - cur.y) * k; cur.r += (tr - cur.r) * k; cur.s += (ts - cur.s) * k; cur.d += (td - cur.d) * k;
      c.style.transform = `translate(-50%, -50%) translate3d(${cur.x.toFixed(1)}px, ${cur.y.toFixed(1)}px, 0) rotate(${cur.r.toFixed(2)}deg) scale(${cur.s.toFixed(3)})`;
      c.style.zIndex = fly && fly.ci === ci ? 20 : 10 - Math.min(pos, 9);
      c.lastChild.style.opacity = cur.d.toFixed(3);
    });
    requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}

/* first page wall: images in img/cover (made from the "cover" folder by _tools/build_cover.py), grouped by project */
const COVER = {
  mirror: ["mirror-jan-sm-post-8-c1", "mirror-diamond-grid-01-06", "mirror-diamond-grid-01-09", "mirror-diamond-grid-10-12", "mirror-april-summer-grid-01", "mirror-april-summer-grid-03", "mirror-april-summer-grid-05", "mirror-february-grid-01", "mirror-february-grid-02", "mirror-february-grid-03", "mirror-february-grid-08", "mirror-january-grid-07", "mirror-january-grid-09", "mirror-january-grid-11"],
  swa: ["swa-for-home-preity-sep-20", "swa-for-home-preity-sep", "swa-july-greek-01", "swa-july-greek-02", "swa-july-greek-03", "swa-july-greek-04", "swa-july-greek-05", "swa-july-greek-06", "swa-july-greek-07", "swa-july-greek-08", "swa-july-greek-09", "swa-july-greek-10", "swa-july-greek", "swa-val-coming-soon-recovered-14", "swa-val-coming-soon-18"],
  decode: ["decode-post05", "decode-post06", "perfume-mockup-01", "perfume-mockup02"],
  hosten: ["hosten-december-noise-01", "hosten-december-noise-03", "hosten-december-noise-04", "hosten-june-08", "hosten-june-14", "hosten-swa-work-from-home-july-21"],
};

/* first page background: a leaning wall of works, columns drifting in straight lines behind the headline */
function initWall() {
  const hero = $(".hero"); if (!hero) return;
  const band = () => (innerWidth < 700 ? 0 : innerWidth < 1100 ? 1 : 2);
  const shuffle = (a) => { for (let i = a.length - 1; i > 0; i--) { const j = (Math.random() * (i + 1)) | 0; [a[i], a[j]] = [a[j], a[i]]; } return a; };
  const wall = document.createElement("div"); wall.className = "wall"; wall.setAttribute("aria-hidden", "true"); hero.prepend(wall);
  let was = -1;
  const build = () => {
    if (band() === was) return; was = band();
    const cols = [3, 4, 6][was], take = [18, 28, 39][was], lists = Object.entries(COVER).map(([p, names]) => shuffle(names.map((n) => ({ n, p }))));
    // pick evenly from every project, then spread so the same brand is not beside itself
    const pool = []; for (let k = 0; pool.length < take && k < 99; k++) for (const l of lists) if (l[k] && pool.length < take) pool.push(l[k]);
    const out = Array.from({ length: cols }, () => []); shuffle(pool).forEach((it, i) => out[i % cols].push(it));
    const cost = () => { let b = 0; out.forEach((c, x) => c.forEach((it, y) => { if (c[(y + 1) % c.length].p === it.p) b += 4; if (out[x + 1]?.[y]?.p === it.p) b += 1; })); return b; };
    let low = cost();
    for (let k = 0; k < 2500 && low > 0; k++) {
      const a = out[(Math.random() * cols) | 0], b = out[(Math.random() * cols) | 0], i = (Math.random() * a.length) | 0, j = (Math.random() * b.length) | 0, t = a[i];
      a[i] = b[j]; b[j] = t; const now = cost(); if (now <= low) low = now; else { b[j] = a[i]; a[i] = t; }
    }
    wall.innerHTML = `<div class="wall-cols">${out.map((list, i) => {
      const h = list.map((it) => `<a class="wall-item" href="${link(it.p)}" data-cursor="Open" tabindex="-1" draggable="false"><img src="img/cover/${it.n}.webp" alt="" decoding="async" draggable="false"></a>`).join("");
      return `<div class="wall-col" style="--d:${(list.length * (10.5 + (i * 5) % 4)).toFixed(0)}s;--i:${i}"><div class="wall-run${i % 2 ? " rev" : ""}">${h}${h}</div></div>`;
    }).join("")}</div><div class="wall-fade"></div>`;
  };
  build(); addEventListener("resize", build);
  new IntersectionObserver(([e]) => wall.classList.toggle("off", !e.isIntersecting)).observe(hero);   // rests while it is off screen
}

/* first page: the "Portfolio" artwork as live shapes (letters, pen-drawn f, spinning star, selection frame you can pull) */
const ART = {"d":{"P":"M278.76 301.06C293.84 301.06 300.06 293.33 300.06 282.39C300.06 272.01 293.84 264.28 278.76 264.28L253.88 264.28L253.88 301.06L278.76 301.06ZM227.69 367.84L227.69 242.59L282.91 242.59C307.41 242.59 323.05 260.51 323.05 283.14C323.05 305.97 307.41 322.38 282.91 322.38L253.88 322.38L253.88 367.84L227.69 367.84Z","r":"M397.95 367.84L397.95 275.03L420.94 275.03L420.94 286.16C429.04 273.71 438.47 272.58 448.45 272.58L451.66 272.58L451.66 297.67C449.4 297.29 447.13 297.1 444.87 297.1C429.8 297.1 422.45 304.65 422.45 319.55L422.45 367.84L397.95 367.84Z","t":"M510.39 306.72L533.2 306.72L533.2 333.13C533.2 352.75 521.89 370.29 495.69 370.29C468.55 370.29 457.81 352.94 457.81 332.94L457.81 249.94L481.93 249.94L481.93 275.03L533.2 275.03L533.2 292.39L481.93 292.39L481.93 330.49C481.93 342.19 486.08 348.98 496.07 348.98C505.87 348.98 510.39 342.37 510.39 330.87L510.39 306.72Z","f":"M542.93 361.4L533.88 361.4C531.62 361.4 531.99 358.57 534.82 358.57L544.43 358.57C564.98 322.36 593.06 283.31 629.43 270.48C655.06 261.62 678.05 260.29 693.69 279.72C696.71 283.31 698.03 289.91 690.87 292.17C683.14 262.56 655.06 263.31 630.75 272.74C600.41 284.44 577.04 325.94 558.95 358.57L573.08 358.57C575.53 358.57 574.96 361.4 572.32 361.4L557.44 361.4L526.91 416.49C506.74 452.89 478.47 491.94 442.1 504.77C416.47 513.63 393.48 514.95 377.83 495.52C374.82 491.94 373.5 485.34 380.66 483.07C388.39 512.69 416.47 511.93 440.78 502.5C473.01 490.05 497.32 443.84 515.79 410.64L542.93 361.4Z","o":"M632.38 398.94C632.38 380.08 624.84 370.84 609.95 370.84C595.06 370.84 587.52 380.08 587.52 398.94C587.52 417.81 595.06 427.24 609.95 427.24C624.84 427.24 632.38 417.81 632.38 398.94ZM562.27 398.94C562.27 369.52 580.55 350.09 609.95 350.09C638.97 350.09 657.06 369.33 657.06 398.94C657.06 428.37 638.78 447.8 609.95 447.8C579.98 447.8 562.27 427.8 562.27 398.94Z","l":"M665.92 318.58H690.42V445.35H665.92Z","i":"M701.35 352.54H725.85V445.35H701.35ZM701.35 318.58H725.85V341.41H701.35Z","o2":"M805 398.94C805 380.08 797.46 370.84 782.57 370.84C767.68 370.84 760.14 380.08 760.14 398.94C760.14 417.81 767.68 427.24 782.57 427.24C797.46 427.24 805 417.81 805 398.94ZM734.89 398.94C734.89 369.52 753.17 350.09 782.57 350.09C811.59 350.09 829.68 369.33 829.68 398.94C829.68 428.37 811.4 447.8 782.57 447.8C752.6 447.8 734.89 427.8 734.89 398.94Z","star":"M385.82 366.41L359.71 348.97L349.25 378.59L340.45 348.44L313.41 364.4L326.03 335.63L295.07 330.46L323.22 316.55L302.82 292.67L333.31 300.12L333.02 268.71L351.6 294.03L371.55 269.78L369.52 301.13L400.38 295.39L378.69 318.1L406.01 333.55L374.81 336.99L385.82 366.41Z"},"box":{"P":[227.69,242.59,323.05,367.84],"r":[397.95,272.58,451.66,367.84],"t":[457.81,249.94,533.2,370.29],"f":[373.5,260.29,698.03,514.95],"o":[562.27,350.09,657.06,447.8],"l":[665.92,318.58,690.42,445.35],"i":[701.35,318.58,725.85,445.35],"o2":[734.89,350.09,829.68,447.8],"star":[295.07,268.71,406.01,378.59]},"star":[350.82,322.22],"frame":{"l":268.35,"t":290.59,"r":788.84,"b":416.12}};
function initTitle() {
  const hero = $(".hero"), h1 = $(".tp"); if (!hero || !h1) return;
  const F0 = ART.frame, HND = [["r", "t"], ["r", "b"], ["l", "t"], ["l", ""], ["l", "b"]];
  
  const letter = (k, i) => `<g class="tp-l" style="--i:${i};transform-origin:${(ART.box[k][0] + ART.box[k][2]) / 2}px ${ART.box[k][3]}px"><path class="ch tp-ch" data-k="${k}" style="transform-origin:${(ART.box[k][0] + ART.box[k][2]) / 2}px ${ART.box[k][3]}px" d="${ART.d[k]}"/></g>`;
  h1.innerHTML = `<svg viewBox="222 236 614 286" aria-hidden="true">
    <defs><mask id="tp-pen" maskUnits="userSpaceOnUse" x="350" y="240" width="370" height="300">
      <path class="tp-pen" pathLength="1" d="M694 296C685 260 655 260 630 271.6C597 283 571 323 552 358L521 414C500 452 475 490 441 503.6C414 515 384 514 377 479"/>
      <path class="tp-bar" pathLength="1" d="M528 360H579"/></mask></defs>
    <path class="tp-frame" pathLength="1"/>
    <g class="tp-word">
      ${["P", "r", "t"].map((k, i) => letter(k, i)).join("")}
      <g class="tp-f" mask="url(#tp-pen)"><path d="${ART.d.f}"/></g>
      ${["o", "l", "i", "o2"].map((k, i) => letter(k, i + 3)).join("")}
      <g class="tp-starbox" style="transform-origin:${ART.star[0]}px ${ART.star[1]}px"><path class="tp-star" style="transform-origin:${ART.star[0]}px ${ART.star[1]}px" d="${ART.d.star}"/></g>
    </g>
    <g class="tp-hs">${HND.map((h, i) => `<g class="tp-h" data-i="${i}" data-cursor="Drag" style="--i:${i}"><rect class="tp-hit" x="-20" y="-20" width="40" height="40"/><rect class="tp-sq" x="-3.2" y="-3.2" width="6.4" height="6.4"/></g>`).join("")}</g>
  </svg>`;
  const svg = h1.firstChild, q = (s) => svg.querySelector(s), qa = (s) => [...svg.querySelectorAll(s)];
  const word = q(".tp-word"), frame = q(".tp-frame"), hs = qa(".tp-h"), starEl = q(".tp-star");

  /* ---- selection frame: pull a corner, the word stretches with it, let go and it springs back ---- */
  const S = { l: 0, t: 0, r: 0, b: 0 }, V = { l: 0, t: 0, r: 0, b: 0 }, T = { l: 0, t: 0, r: 0, b: 0 };
  let drag = null, raf = 0, last = 0;
  const draw = () => {
    const l = F0.l + S.l, t = F0.t + S.t, r = F0.r + S.r, b = F0.b + S.b, sx = (r - l) / (F0.r - F0.l), sy = (b - t) / (F0.b - F0.t);
    word.setAttribute("transform", `matrix(${sx.toFixed(4)} 0 0 ${sy.toFixed(4)} ${(l - F0.l * sx).toFixed(2)} ${(t - F0.t * sy).toFixed(2)})`);
    frame.setAttribute("d", `M${l.toFixed(2)} ${t.toFixed(2)}H${r.toFixed(2)}V${b.toFixed(2)}H${l.toFixed(2)}Z`);
    hs.forEach((h, i) => { const [x, y] = HND[i]; h.setAttribute("transform", `translate(${(x === "l" ? l : r).toFixed(2)} ${(y === "t" ? t : y === "b" ? b : (t + b) / 2).toFixed(2)})`); });
  };
  const tick = (now) => {
    raf = 0; const dt = Math.min(.04, (now - last) / 1000 || .016); last = now; let busy = !!drag;
    for (const k in S) { const own = drag && drag.keys.includes(k); for (let i = 0; i < 8; i++) { const h = dt / 8; V[k] += ((T[k] - S[k]) * (own ? 900 : 210) - V[k] * (own ? 60 : 11)) * h; S[k] += V[k] * h; } if (Math.abs(T[k] - S[k]) + Math.abs(V[k]) > .04) busy = true; else if (!drag) { S[k] = T[k]; V[k] = 0; } }
    draw(); if (busy) raf = requestAnimationFrame(tick);
  };
  const go = () => { if (!raf) { last = performance.now(); raf = requestAnimationFrame(tick); } };
  const soft = (d, max) => max * Math.tanh(d / (max * 1.5));
  hs.forEach((h, i) => {
    h.addEventListener("pointerdown", (e) => { e.preventDefault(); e.stopPropagation(); h.setPointerCapture(e.pointerId); drag = { x: e.clientX, y: e.clientY, keys: HND[i].filter(Boolean), k: svg.viewBox.baseVal.width / svg.getBoundingClientRect().width }; h1.classList.add("pull"); go(); });
    h.addEventListener("pointermove", (e) => { if (!drag || !h.hasPointerCapture(e.pointerId)) return; const [kx, ky] = HND[i]; T[kx] = soft((e.clientX - drag.x) * drag.k, 64); if (ky) T[ky] = soft((e.clientY - drag.y) * drag.k, 34); });
    const up = () => { if (!drag) return; drag = null; for (const k in T) T[k] = 0; h1.classList.remove("pull"); go(); };
    h.addEventListener("pointerup", up); h.addEventListener("pointercancel", up); h.addEventListener("lostpointercapture", up);
    h.addEventListener("click", (e) => e.stopPropagation());
  });
  draw();

  /* ---- letters jump, turn blue, and fade back after 5s (mouse or finger) ---- */
  qa(".tp-ch").forEach((c) => {
    let t; c.addEventListener("mouseenter", () => {
      if (!h1.classList.contains("done")) return;
      c.classList.remove("jump"); void c.getBoundingClientRect(); c.classList.add("jump", "blue"); clearTimeout(t); t = setTimeout(() => c.classList.remove("blue"), 5000);
    });
  });

  /* ---- star turns slowly, faster under the mouse, spins up with scrolling ---- */
  const spin = starEl.animate([{ transform: "rotate(0deg)" }, { transform: "rotate(360deg)" }], { duration: 22000, iterations: Infinity });
  let rate = 1, want = 1, sy = scrollY, rr = 0;
  const ease = () => { rr = 0; rate += (want - rate) * .08; spin.playbackRate = rate; if (Math.abs(want - rate) > .02) rr = requestAnimationFrame(ease); };
  const speed = (v) => { want = v; if (!rr) rr = requestAnimationFrame(ease); };
  starEl.addEventListener("pointerenter", () => speed(9)); starEl.addEventListener("pointerleave", () => speed(1));
  let st; addEventListener("scroll", () => { const d = Math.abs(scrollY - sy); sy = scrollY; if (scrollY < innerHeight) { speed(1 + Math.min(8, d / 8)); clearTimeout(st); st = setTimeout(() => speed(1), 140); } h1.style.opacity = Math.max(0, 1 - scrollY / innerHeight * .9); }, { passive: true });
  new IntersectionObserver(([e]) => (e.isIntersecting ? spin.play() : spin.pause())).observe(hero);

  /* ---- entrance ---- */
  let dt; const play = () => { clearTimeout(dt); h1.classList.remove("go", "done"); void h1.offsetWidth; h1.classList.add("go"); dt = setTimeout(() => h1.classList.add("done"), 3000); };
  play();
}

/* computers: a springy arrow with a tag that says what you can do (Open, Drag, View ...). With nothing to do it is just the arrow.
   Phones and tablets keep the plain page. */
function initArrow() {
  if (!matchMedia("(hover: hover) and (pointer: fine)").matches) return;
  const drag = { el: null, on: false, x: 0 };

  /* what the tag says, first match wins */
  const WORDS = [
    ["#lightbox .lb-prev", "Previous"], ["#lightbox .lb-next, #lightbox img", "Next"], ["#lightbox", "Close"],
    [".sb-x, .sb-back", "Close"], [".sb-modes button", "Switch"], [".sb-open", "Open"],
    [".idx-btn", () => (document.body.classList.contains("idx-open") ? "Close" : "Menu")],
    [".slider .bars button", (el) => el.getAttribute("aria-label")], [".slider", "Next"],
    ["[data-drift]", () => (drag.on ? "Dragging" : "Drag")],
    [".wa-btn, .ci-wa, a[href*='wa.me']", "Say hi"], [".ci-ig, a[href*='instagram']", "Follow"], [".head-right .btn", "Let's talk"], [".ci-mail, a[href^='mailto:'], a[href*='mail.google']", "Email me"],
    [".logo.big", "Click me"], [".logo", "Home"], [".back", "Go back"], [".next", "Next project"],
    [".f-item, .m-item", "View"], [".wall-item, .fan-card[data-cursor], .feed-row, .card, .idx-item, .more, a[href*='project.html']", "Open"],
    [".chips a, .chap-nav a", "Jump"], ["a[data-goto='contact']", "Contact"], ["a[data-goto='about']", "About me"], ["a[data-goto]", "Go"],
    ["[data-cursor]", (el) => el.dataset.cursor], ["a[target='_blank']", "Visit"], ["a", "Open"], ["button", "Click"],
  ];
  const wordFor = (el) => {
    if (el?.closest) for (const [sel, w] of WORDS) { const hit = el.closest(sel); if (hit) return typeof w === "function" ? w(hit) : w; }
    return "";
  };
  /* damped spring, mass 1 */
  class Spring {
    constructor(k, c) { this.k = k; this.c = c; this.p = 0; this.v = 0; this.t = 0; }
    jump(v) { this.p = this.t = v; this.v = 0; }
    step(h) { this.v += ((this.t - this.p) * this.k - this.v * this.c) * h; this.p += this.v * h; }
    get busy() { return Math.abs(this.t - this.p) + Math.abs(this.v) > .05; }
  }
  const map = (v, lo, mid, hi) => (v < 0 ? mid + (lo - mid) * Math.min(1, -v / 1000) : mid + (hi - mid) * Math.min(1, v / 1000));

  const root = document.documentElement;
  document.body.insertAdjacentHTML("beforeend", `
    <div class="ac" aria-hidden="true">
      <div class="ac-arrow"><svg viewBox="0 0 40 40" width="24" height="24"><path d="M1.8 4.4 7 36.2c.3 1.8 2.6 2.3 3.6.8l3.9-5.7c1.7-2.5 4.5-4.1 7.5-4.3l6.9-.5c1.8-.1 2.5-2.4 1.1-3.5L5 2.5c-1.4-1.1-3.5 0-3.3 1.9Z"/></svg></div>
      <div class="ac-tag"><div class="ac-side"><div class="ac-pill"><span></span></div></div></div>
    </div>`);
  const $1 = (s) => document.querySelector(s), box = $1(".ac"), arrow = $1(".ac-arrow"), svg = arrow.firstChild, tag = $1(".ac-tag"), pill = $1(".ac-pill"), text = pill.firstChild;
  const ax = new Spring(300, 25), ay = new Spring(300, 25), tx = new Spring(500, 50), ty = new Spring(500, 50), rot = new Spring(200, 15);
  let x = 0, y = 0, raf = 0, last = 0, shown = false, word = "";

  const fit = () => { pill.style.width = text.offsetWidth + 16 + "px"; };
  const say = (w) => {
    if (w === word) return; const was = word; word = w; clearTimeout(say.t);
    box.classList.toggle("tagged", !!w);
    if (!w) return;                                  // the tag shrinks away with its last word still in it
    const put = () => { text.textContent = word; fit(); pill.classList.remove("swap"); };
    if (!was) put(); else { pill.classList.add("swap"); say.t = setTimeout(put, 90); }
  };

  const tick = (now) => {
    raf = 0; const dt = Math.min(.04, (now - last) / 1000 || .016); last = now;
    const n = Math.max(1, Math.ceil(dt / .004)), h = dt / n;
    for (let i = 0; i < n; i++) {
      ax.step(h); ay.step(h); tx.step(h); ty.step(h);
      rot.t = Math.max(-45, Math.min(45, (ax.v + ay.v) / 1000 * 30)); rot.step(h);
    }
    arrow.style.transform = `translate3d(${ax.p.toFixed(2)}px,${ay.p.toFixed(2)}px,0)`;
    svg.style.transform = `rotate(${rot.p.toFixed(2)}deg) scale(${(1 - Math.min(Math.hypot(ax.v, ay.v) / 2000, .1)).toFixed(3)})`;
    tag.style.transform = `translate3d(${tx.p.toFixed(2)}px,${ty.p.toFixed(2)}px,0)`;
    pill.style.transform = `scale(${map(ax.v, .9, 1, 1.15).toFixed(3)},${map(ay.v, 1.15, 1, .9).toFixed(3)}) skew(${map(ax.v, -3, 0, 3).toFixed(2)}deg,${map(ay.v, -3, 0, 3).toFixed(2)}deg)`;
    if (ax.busy || ay.busy || tx.busy || ty.busy || rot.busy) raf = requestAnimationFrame(tick);
  };
  const go = () => { if (!raf) { last = performance.now(); raf = requestAnimationFrame(tick); } };
  const show = (v) => { if (v === shown) return; shown = v; box.classList.toggle("in", v); root.classList.toggle("ac-live", v); };

  addEventListener("pointermove", (e) => {
    if (e.pointerType !== "mouse") return show(false);
    x = e.clientX; y = e.clientY;
    if (!shown) { ax.jump(x); tx.jump(x); ay.jump(y); ty.jump(y); rot.jump(0); }
    ax.t = tx.t = x; ay.t = ty.t = y;
    if (drag.el && !drag.on && Math.abs(x - drag.x) > 6) { drag.on = true; say(wordFor(drag.el)); }
    show(!e.target.closest?.("iframe, input, textarea, select"));   // typing fields and embedded sites keep their own cursor
    /* near the right or bottom edge the tag moves to the other side so it is never cut off */
    tag.classList.toggle("flip-x", x > root.clientWidth - pill.offsetWidth - 36); tag.classList.toggle("flip-y", y > innerHeight - 64);
    go();
  }, { passive: true });
  document.addEventListener("mouseover", (e) => { if (drag.on) return; say(wordFor(e.target)); if (e.target.closest?.("iframe")) show(false); });
  /* things also move under a still mouse (scrolling, drifting strips, popups), so keep the word honest */
  setInterval(() => { if (shown && !drag.on && !document.hidden) { const el = document.elementFromPoint(x, y); if (el) say(wordFor(el)); } }, 140);
  root.addEventListener("mouseleave", () => show(false));
  addEventListener("pointerdown", (e) => { drag.el = e.target.closest?.("[data-drift]"); drag.x = e.clientX; box.classList.add("press"); }, true);
  const up = () => { drag.el = null; drag.on = false; box.classList.remove("press"); };
  addEventListener("pointerup", up, true); addEventListener("pointercancel", up, true); addEventListener("blur", () => { up(); show(false); });

  document.fonts?.ready.then(fit);
}

/* top menu (computers): a pill glides between the words, Branding and Social open a small panel with a picture */
function initNav() {
  const head = $(".site-head"); if (!head) return;
  const onHome = !!document.querySelector(".hero"), here = onHome ? "" : (HASH ? location.hash.slice(1) : new URLSearchParams(location.search).get("p"));
  const cap = (s) => s.replace(/\b\w/g, (c) => c.toUpperCase()), nameOfP = (p) => (p.familyOf ? cap(p.navLabel) : p.title);
  const brand = PROJECTS.filter((p) => p.home), social = PROJECTS.filter((p) => p.kind === "feed"), more = PROJECTS.filter((p) => !p.home && p.kind !== "feed");
  const feeds = document.querySelector(".feeds"), moreWork = document.querySelector(".more-work"), work = document.getElementById("work");
  if (feeds && !document.getElementById("social")) (feeds.closest("section") || feeds).id ||= "social";
  const socialId = feeds ? (feeds.closest("section") || feeds).id : "social";

  /* pictures that read well in a tall frame; everything else uses its main image */
  const PICK = { decode: "decode-post06", wordplay: "wordplay-01280", octopus: "v01-perspective-p1" };
  const pictureOf = (p) => imagesFor(p).find((im) => PICK[p.id] && nameOf(im).startsWith(PICK[p.id])) || heroOf(p);

  /* ---- markup ---- */
  const roll = (t) => `<span class="nv-roll" data-t="${esc(t)}"><span>${esc(t)}</span></span>`;
  const items = [
    { k: "brand", t: "Branding", n: brand.length, list: brand, at: () => work, href: home("work") },
    { k: "social", t: "Social", n: social.length, list: social, at: () => document.getElementById(socialId), href: home(socialId) },
    ...more.map((p) => ({ k: p.id, t: p.title, href: link(p.id), p })),
    { k: "about", t: "About", href: home("about"), goto: "about" },
    { k: "contact", t: "Contact", href: "#contact", goto: "contact" },
  ];
  const nav = document.createElement("nav"); nav.className = "nv"; nav.setAttribute("aria-label", "Main");
  nav.innerHTML = `<i class="nv-pill"></i>` + items.map((it) => it.list
    ? `<button class="nv-i" data-k="${it.k}" data-cursor="Browse" aria-expanded="false" aria-controls="nv-panel">${roll(it.t)}<sup>${it.n}</sup><svg class="nv-chev" viewBox="0 0 10 6" width="10" height="6" aria-hidden="true"><path d="m1 1 4 4 4-4" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></button>`
    : `<a class="nv-i" data-k="${it.k}" href="${it.href}" ${it.goto ? `data-goto="${it.goto}"` : ""}>${roll(it.t)}</a>`).join("");
  head.querySelector(".logo").after(nav);
  const groups = items.filter((i) => i.list);
  const panel = document.createElement("div"); panel.className = "nv-panel"; panel.id = "nv-panel"; panel.setAttribute("aria-hidden", "true");
  panel.innerHTML = `<div class="nv-in"><div class="nv-lists">${groups.map((g) => `<div class="nv-list" data-k="${g.k}"><i class="nv-hi"></i>${g.list.map((p, i) => `
      <a class="nv-row${p.id === here ? " on" : ""}" href="${link(p.id)}" data-id="${p.id}" style="--i:${i};--accent:${p.accent}" tabindex="-1"><span class="nv-num">${String(i + 1).padStart(2, "0")}</span><span class="nv-name"><span>${esc(nameOfP(p))}</span></span><span class="nv-meta">${imagesFor(p).length} works</span><span class="nv-arrow" aria-hidden="true">→</span></a>`).join("")}</div>`).join("")}</div>
    <div class="nv-show" aria-hidden="true"><div class="nv-pics"></div><p class="nv-cap"></p></div></div>`;
  const dim = document.createElement("div"); dim.className = "nv-dim";
  document.body.append(dim, panel);
  const q = (s, el = panel) => el.querySelector(s), qa = (s, el = panel) => [...el.querySelectorAll(s)];
  const pill = q(".nv-pill", nav), btns = qa(".nv-i", nav), lists = qa(".nv-list"), pics = q(".nv-pics"), capEl = q(".nv-cap"), show = q(".nv-show"), listsBox = q(".nv-lists");

  /* ---- the pill glides between the words; at rest it marks where you are ---- */
  let active = null, open = "", tOpen, tClose, shownId = "";
  const pillTo = (el) => { if (!el) { pill.classList.remove("in"); return; } const first = !pill.classList.contains("in"); if (first) pill.style.transition = "none"; pill.style.left = el.offsetLeft + "px"; pill.style.width = el.offsetWidth + "px"; if (first) { void pill.offsetWidth; pill.style.transition = ""; } pill.classList.add("in"); };
  const rest = () => { nav.classList.remove("hot"); btns.forEach((b) => b.classList.toggle("lit", b === active)); pillTo(open ? btns.find((b) => b.dataset.k === open) : active); };
  const light = (b) => { nav.classList.add("hot"); btns.forEach((x) => x.classList.toggle("lit", x === b)); pillTo(b); };
  const spy = () => {
    let k = "";
    if (!onHome) { const p = PROJECTS.find((x) => x.id === here); k = p ? (brand.includes(p) ? "brand" : social.includes(p) ? "social" : p.id) : ""; }
    else { const y = innerHeight * .45; [["about", document.getElementById("about")], ["brand", work], ["social", document.getElementById(socialId)], [more[0]?.id, moreWork], ["contact", document.getElementById("contact")]].map(([key, el]) => [key, el?.getBoundingClientRect().top]).filter(([, t]) => t !== undefined && t < y).sort((a, b) => b[1] - a[1]).slice(0, 1).forEach(([key]) => (k = key)); }
    const b = btns.find((x) => x.dataset.k === k) || null; if (b !== active) { active = b; if (!nav.classList.contains("hot") && !open) rest(); }
  };

  /* ---- picture on the right wipes to the work you point at ---- */
  const picture = (id) => {
    if (!id || id === shownId) return; shownId = id; const p = PROJECTS.find((x) => x.id === id), im = pictureOf(p); if (!im) return;
    const el = document.createElement("div"); el.className = "nv-pic"; el.innerHTML = `<img src="${im.t}" alt="">`; pics.append(el);
    show.style.setProperty("--accent", p.accent); while (pics.children.length > 3) pics.firstChild.remove();
    capEl.classList.remove("in"); void capEl.offsetWidth; capEl.textContent = p.tagline; capEl.classList.add("in");
  };
  const highlight = (row) => {
    const list = row.parentElement, hi = q(".nv-hi", list), first = !list.classList.contains("pick");
    if (first) hi.style.transition = "none"; hi.style.top = row.offsetTop + "px"; hi.style.height = row.offsetHeight + "px"; if (first) { void hi.offsetWidth; hi.style.transition = ""; }
    list.classList.add("pick"); qa(".nv-row", list).forEach((r) => r.classList.toggle("hov", r === row)); list.style.setProperty("--accent", getComputedStyle(row).getPropertyValue("--accent")); picture(row.dataset.id);
  };
  const calm = (list) => { list.classList.remove("pick"); qa(".nv-row", list).forEach((r) => r.classList.remove("hov")); };

  /* ---- open / switch / close ---- */
  const place = () => { const n = nav.getBoundingClientRect(), w = panel.offsetWidth, b = btns.find((x) => x.dataset.k === open)?.getBoundingClientRect(); const l = Math.max(16, Math.min(document.documentElement.clientWidth - w - 16, n.left + n.width / 2 - w / 2)); panel.style.left = l + "px"; panel.style.top = head.offsetHeight + 16 + "px"; if (b) panel.style.setProperty("--ox", b.left + b.width / 2 - l + "px"); };
  const setOpen = (k) => {
    clearTimeout(tClose); clearTimeout(tOpen); if (k === open) return;
    const from = groups.findIndex((g) => g.k === open), to = groups.findIndex((g) => g.k === k), was = open; open = k;
    btns.forEach((b) => b.hasAttribute("aria-expanded") && b.setAttribute("aria-expanded", b.dataset.k === k));
    panel.classList.toggle("in", !!k); dim.classList.toggle("in", !!k); panel.setAttribute("aria-hidden", !k);
    if (!k) { qa(".nv-row").forEach((r) => (r.tabIndex = -1)); if (!nav.classList.contains("hot")) rest(); return; }
    panel.style.setProperty("--dir", to >= from ? 1 : -1);
    lists.forEach((l) => { const on = l.dataset.k === k; l.classList.toggle("in", on); l.classList.toggle("left", !on && groups.findIndex((g) => g.k === l.dataset.k) < to); calm(l); qa(".nv-row", l).forEach((r) => (r.tabIndex = on ? 0 : -1)); });
    const l = lists.find((x) => x.dataset.k === k); listsBox.style.height = l.offsetHeight + "px"; panel.classList.toggle("fresh", !was);
    place(); picture((q(".nv-row.on", l) || q(".nv-row", l)).dataset.id); light(btns.find((b) => b.dataset.k === k));
  };
  const later = () => { clearTimeout(tClose); tClose = setTimeout(() => { setOpen(""); rest(); }, 240); };

  btns.forEach((b) => {
    const it = items.find((i) => i.k === b.dataset.k);
    b.addEventListener("pointerenter", (e) => { if (e.pointerType === "touch") return; light(b); clearTimeout(tClose); clearTimeout(tOpen); tOpen = setTimeout(() => setOpen(it.list ? it.k : ""), open ? 70 : 110); });
    b.addEventListener("focus", () => { if (b.matches(":focus-visible")) light(b); });
    if (it.list) {
      let touch = false; b.addEventListener("pointerdown", (e) => (touch = e.pointerType === "touch"));
      b.addEventListener("click", (e) => {
        if (e.detail === 0 || touch) { setOpen(open === it.k ? "" : it.k); touch = false; return; }         // keyboard and touch: open / close
        const el = it.at(); setOpen(""); clearTimeout(tOpen);                                                 // mouse: jump to that part of the page
        if (el) { const y = Math.max(0, el.getBoundingClientRect().top + scrollY - head.offsetHeight - 12); window.lenis ? window.lenis.scrollTo(y, { duration: 1.3, force: true }) : scrollTo({ top: y, behavior: "smooth" }); }
        else { document.body.classList.add("leaving"); setTimeout(() => (location.href = it.href), 450); }
      });
      b.addEventListener("keydown", (e) => { if (e.key === "ArrowDown") { e.preventDefault(); setOpen(it.k); q(".nv-row", lists.find((l) => l.dataset.k === it.k)).focus(); } });
    }
    b.addEventListener("keydown", (e) => { const d = e.key === "ArrowRight" ? 1 : e.key === "ArrowLeft" ? -1 : 0; if (d) { e.preventDefault(); btns[(btns.indexOf(b) + d + btns.length) % btns.length].focus(); } });
  });
  nav.addEventListener("pointerleave", (e) => { if (e.pointerType === "touch") return; clearTimeout(tOpen); if (open) later(); else rest(); });
  panel.addEventListener("pointerenter", () => { clearTimeout(tClose); clearTimeout(tOpen); light(btns.find((b) => b.dataset.k === open)); });
  panel.addEventListener("pointerleave", (e) => { if (e.pointerType !== "touch") later(); });
  qa(".nv-row").forEach((r) => {
    r.addEventListener("pointerenter", () => highlight(r)); r.addEventListener("focus", () => highlight(r));
    r.addEventListener("keydown", (e) => {
      const rows = qa(".nv-row", r.parentElement), i = rows.indexOf(r), d = e.key === "ArrowDown" ? 1 : e.key === "ArrowUp" ? -1 : 0; if (!d) return; e.preventDefault();
      if (i + d < 0) btns.find((b) => b.dataset.k === open)?.focus(); else rows[Math.min(rows.length - 1, i + d)].focus();
    });
  });
  lists.forEach((l) => l.addEventListener("pointerleave", () => calm(l)));
  panel.addEventListener("pointermove", (e) => { const r = show.getBoundingClientRect(); show.style.setProperty("--px", ((e.clientX - r.left) / r.width - .5).toFixed(3)); show.style.setProperty("--py", ((e.clientY - r.top) / r.height - .5).toFixed(3)); });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape" && open) { const b = btns.find((x) => x.dataset.k === open), inside = panel.contains(document.activeElement); setOpen(""); rest(); if (inside) b.focus(); } });
  document.addEventListener("pointerdown", (e) => { if (open && !panel.contains(e.target) && !nav.contains(e.target)) { setOpen(""); rest(); } });
  nav.addEventListener("focusout", (e) => { if (e.relatedTarget && !nav.contains(e.relatedTarget) && !panel.contains(e.relatedTarget)) { setOpen(""); rest(); } });
  panel.addEventListener("focusout", (e) => { if (e.relatedTarget && !nav.contains(e.relatedTarget) && !panel.contains(e.relatedTarget)) { setOpen(""); rest(); } });
  let sy = scrollY, rq = 0;
  addEventListener("scroll", () => { if (open && Math.abs(scrollY - sy) > 80) { setOpen(""); rest(); } if (!open) sy = scrollY; if (!rq) rq = requestAnimationFrame(() => { rq = 0; spy(); }); }, { passive: true });
  addEventListener("resize", () => { if (open) setOpen(""); rest(); });
  groups.forEach((g) => g.list.forEach((p) => { const im = pictureOf(p); if (im) new Image().src = im.t; }));   // pictures ready before you point at them
  const boot = () => { spy(); rest(); };
  boot(); document.fonts?.ready.then(boot);
}

/* touch screens: sliding a finger across the bold headline letters makes each one jump and turn blue (fades back after 5s) */
function initHeroPaint() {
  const hero = $(".hero"); if (!hero) return;
  let lastEl = null;
  const hit = (e) => {
    for (const t of e.touches) {
      const el = document.elementFromPoint(t.clientX, t.clientY);
      if (el && el.classList.contains("ch") && el !== lastEl) { lastEl = el; el.dispatchEvent(new Event("mouseenter")); }
    }
  };
  hero.addEventListener("touchstart", hit, { passive: true });
  hero.addEventListener("touchmove", hit, { passive: true });
  hero.addEventListener("touchend", () => (lastEl = null), { passive: true });
}

function initPlay() {
  const stars = $$(".hero-star .star, .fan-star .star, .logo.big .star, .ticker .star");
  stars.forEach((s) => (s.style.animation = "none"));
  let a = 0, last = scrollY, boost = 0;
  const spin = () => {
    const d = Math.abs(scrollY - last); last = scrollY;
    boost += (Math.min(d, 80) - boost) * 0.1;
    a += 0.35 + boost * 0.6;
    stars.forEach((s, i) => (s.style.transform = `rotate(${i % 2 ? -a : a}deg)`));
    requestAnimationFrame(spin);
  };
  spin();

  const burst = (x, y, n = 10, size = 18) => {
    for (let i = 0; i < n; i++) {
      const el = document.createElement("div"); el.className = "spark"; el.innerHTML = STAR;
      const ang = (Math.PI * 2 * i) / n + Math.random() * 0.5, dist = 60 + Math.random() * 90, s = size * (0.5 + Math.random());
      el.style.cssText = `left:${x}px;top:${y}px;width:${s}px;height:${s}px;--tx:${Math.cos(ang) * dist}px;--ty:${Math.sin(ang) * dist}px;--r:${(Math.random() - 0.5) * 540}deg`;
      document.body.appendChild(el); setTimeout(() => el.remove(), 1000);
    }
  };
  // click a star -> it pops and bursts
  $$(".hero-star, .fan-star, .logo.big").forEach((el) => el.addEventListener("click", (e) => {
    if (el.matches(".logo.big")) e.preventDefault();
    el.classList.remove("pop"); void el.offsetWidth; el.classList.add("pop");
    burst(e.clientX, e.clientY, 14, 22);
  }));
  // click on empty hero space -> small burst
  $(".hero")?.addEventListener("click", (e) => { if (!e.target.closest("a, .hero-star")) burst(e.clientX, e.clientY, 8, 14); });

  // hero letters: only the bold lines react — a letter jumps, turns blue, and fades back to white after 5s.
  // The cursive middle line ("things you") never changes.
  $$(".hero-title .l1 > span, .hero-title .l3 > span").forEach((line) => {
    line.innerHTML = [...line.textContent].map((c) => (c === " " ? " " : `<i class="ch">${c}</i>`)).join("");
  });
  $$(".hero-title .ch").forEach((c) => {
    let t;
    c.addEventListener("mouseenter", () => {
      c.classList.add("blue"); c.classList.remove("jump"); void c.offsetWidth; c.classList.add("jump");
      clearTimeout(t); t = setTimeout(() => c.classList.remove("blue"), 5000);
    });
  });

  // intro cards tilt toward the mouse
  const fan = $("[data-tilt]");
  if (fan && FINE) {
    fan.addEventListener("mousemove", (e) => { const r = fan.getBoundingClientRect(); const dx = (e.clientX - r.left) / r.width - 0.5, dy = (e.clientY - r.top) / r.height - 0.5; fan.style.setProperty("--rx", `${-dy * 10}deg`); fan.style.setProperty("--ry", `${dx * 14}deg`); });
    fan.addEventListener("mouseleave", () => { fan.style.setProperty("--rx", "0deg"); fan.style.setProperty("--ry", "0deg"); });
  }
  // menu stars twirl on hover
  $$(".menu a").forEach((a) => { a.innerHTML = a.innerHTML.replace("✦", '<b class="tw">✦</b>'); });
}

/* website preview popup (Figma prototype) */
function figmaEmbed(url) {
  if (/figma\.com/.test(url) && !/\/embed/.test(url)) return `https://www.figma.com/embed?embed_host=share&url=${encodeURIComponent(url)}`;
  return url;
}
function openSite(p, from) {
  let m = $("#sitebox");
  if (!m) {
    m = document.createElement("div"); m.id = "sitebox";
    m.innerHTML = `
      <div class="sb-back"></div>
      <div class="sb-win">
        <div class="sb-bar">
          <span class="sb-dots"><i></i><i></i><i></i></span>
          <span class="sb-url"></span>
          <span class="sb-modes"><button data-mode="desk" class="on" aria-label="Desktop view">Desktop</button><button data-mode="mob" aria-label="Mobile view">Mobile</button></span>
          <a class="sb-open" target="_blank" rel="noopener">Open in Figma ↗</a>
          <button class="sb-x" aria-label="Close">×</button>
        </div>
        <div class="sb-stage"><div class="sb-loading">${STAR}<span>Loading prototype…</span></div><iframe title="Website preview" allowfullscreen></iframe></div>
      </div>`;
    document.body.appendChild(m);
    const close = () => { m.classList.remove("open"); document.body.classList.remove("lb-open"); window.lenis?.start(); setTimeout(() => ($("iframe", m).src = "about:blank"), 500); };
    $(".sb-back", m).addEventListener("click", close);
    $(".sb-x", m).addEventListener("click", close);
    document.addEventListener("keydown", (e) => { if (e.key === "Escape" && m.classList.contains("open")) close(); });
    $$(".sb-modes button", m).forEach((b) => b.addEventListener("click", () => { $$(".sb-modes button", m).forEach((x) => x.classList.toggle("on", x === b)); m.classList.toggle("mob", b.dataset.mode === "mob"); }));
    $("iframe", m).addEventListener("load", () => m.classList.add("loaded"));
  }
  const r = from.getBoundingClientRect();
  m.style.setProperty("--ox", `${r.left + r.width / 2}px`); m.style.setProperty("--oy", `${r.top + r.height / 2}px`);
  m.style.setProperty("--accent", p.accent);
  $(".sb-url", m).textContent = `${p.site.label || p.title} — ${p.site.note || "Website"}`;
  $(".sb-open", m).href = p.site.url;
  m.classList.remove("loaded", "mob"); $$(".sb-modes button", m).forEach((x, i) => x.classList.toggle("on", i === 0));
  $("iframe", m).src = figmaEmbed(p.site.url);
  void m.offsetWidth; m.classList.add("open"); document.body.classList.add("lb-open"); window.lenis?.stop();
}
document.addEventListener("click", (e) => {
  const b = e.target.closest("[data-site]"); if (!b) return;
  e.preventDefault(); const p = PROJECTS.find((x) => x.id === b.dataset.site); if (p?.site?.url) openSite(p, b);
});

function initIndex() {
  const btn = $(".idx-btn"), idx = $("#idx"); if (!btn || !idx) return;
  const set = (open) => {
    const r = btn.getBoundingClientRect();
    idx.style.setProperty("--ox", `${r.left + r.width / 2}px`); idx.style.setProperty("--oy", `${r.top + r.height / 2}px`);
    document.body.classList.toggle("idx-open", open);
    btn.setAttribute("aria-expanded", open); btn.setAttribute("aria-label", open ? "Close index" : "Open index");
    idx.setAttribute("aria-hidden", !open);
    if (open) { window.lenis?.stop(); idx.scrollTop = 0; } else window.lenis?.start();
  };
  btn.addEventListener("click", () => set(!document.body.classList.contains("idx-open")));
  document.addEventListener("keydown", (e) => { if (e.key === "Escape" && document.body.classList.contains("idx-open")) set(false); });
  // links that stay on this page (sections, contact) close the menu; project links navigate away
  idx.addEventListener("click", (e) => {
    const a = e.target.closest("a"); if (!a) return;
    const h = a.getAttribute("href") || "";
    if (h.startsWith("#") && !isProject(h.slice(1))) set(false);
  });
}

/* email links: on computers open a ready-to-send Gmail message in a new tab
   (mailto: does nothing when no mail app is set up); on phones keep mailto:, which opens the Gmail / mail app */
function initMailLinks() {
  const phone = matchMedia("(pointer: coarse)").matches;
  const gmail = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(ABOUT.email)}&su=${encodeURIComponent("Project enquiry from your portfolio")}`;
  $$('a[href^="mailto:"]').forEach((a) => {
    if (phone) return;
    a.href = gmail; a.target = "_blank"; a.rel = "noopener";
  });
}

function goTo(id, instant = false) {
  const t = id === "top" ? 0 : document.getElementById(id);
  if (t === null) return false;
  const head = document.querySelector(".site-head")?.offsetHeight || 80;
  const bar = t !== 0 && t.matches?.(".chapter, .group") ? (document.querySelector(".chap-nav, .chips")?.offsetHeight || 0) : 0;
  const y = t === 0 ? 0 : Math.max(0, t.getBoundingClientRect().top + scrollY - head - bar - 12);
  if (window.lenis) { window.lenis.start(); window.lenis.scrollTo(y, { duration: 1.3, immediate: instant, force: true }); if (instant) scrollTo(0, y); return true; }
  else if (t === 0) scrollTo({ top: 0, behavior: instant ? "auto" : "smooth" });
  else t.scrollIntoView({ behavior: instant ? "auto" : "smooth" });
  return true;
}
/* keep sticky bars (chapter tabs, campaign chips) just under the top bar, whatever its height */
function syncHeadHeight() {
  const set = () => document.documentElement.style.setProperty("--head-h", `${document.querySelector(".site-head")?.offsetHeight || 74}px`);
  set(); addEventListener("resize", set); document.fonts?.ready.then(set);
}
function initGoto() {
  document.addEventListener("click", (e) => {
    const a = e.target.closest("a[data-goto]"); if (!a) return;
    const id = a.dataset.goto;
    const onHome = !!$(".hero");
    if (id === "top" && !onHome) return;            // from a project page "Home" goes to the home page
    if (id !== "top" && !document.getElementById(id)) return; // section lives on the home page: navigate there
    e.preventDefault(); e.stopPropagation();
    const menuOpen = document.body.classList.contains("idx-open");
    if (menuOpen) $(".idx-btn")?.click();
    a.classList.add("tapped"); setTimeout(() => a.classList.remove("tapped"), 400);
    setTimeout(() => goTo(id), menuOpen ? 380 : 0);  // let the menu start closing first
  }, true);
}

/* intro cards: "deal the cards". The stack deals out into a fan as the section scrolls into view,
   a card lifts when you point at it, and tapping a card opens its project. No dragging, so nothing fights the page scroll. */
function initDeal() {
  const fan = $(".fan"); if (!fan) return;
  const cards = $$(".fan-card", fan); if (!cards.length) return;
  fan.classList.add("deal");
  const projectOf = (img) => /\/mirror\//.test(img) ? "mirror" : /\/swa\//.test(img) ? "swa" : /frenzy/.test(img) ? "frenzy" : "";
  // Frenzy in the middle of the hand, the jewellery around it
  const order = [3, 0, 2, 1, 4, 5].filter((i) => cards[i]).concat(cards.map((_, i) => i).filter((i) => i > 5));
  const hand = order.map((i) => cards[i]);
  const mid = (hand.length - 1) / 2;
  hand.forEach((card) => {
    const id = projectOf(card.querySelector("img")?.getAttribute("src") || "");
    if (id) { card.dataset.cursor = "Open"; card.setAttribute("role", "link"); card.setAttribute("tabindex", "0"); card.setAttribute("aria-label", `Open ${PROJECTS.find((p) => p.id === id)?.title || id}`); }
    const go = () => { if (id) location.href = link(id); };
    card.addEventListener("click", go);
    card.addEventListener("keydown", (e) => { if (e.key === "Enter") go(); });
  });
  fan.removeAttribute("aria-hidden");
  const hint = document.createElement("p"); hint.className = "deal-hint"; hint.textContent = "Tap a card to open the project"; fan.appendChild(hint);

  let hover = -1, raf = 0, cur = 0;
  hand.forEach((card, i) => {
    card.addEventListener("mouseenter", () => { hover = i; kick(); });
    card.addEventListener("mouseleave", () => { if (hover === i) hover = -1; kick(); });
  });
  const ease = (t) => 1 - Math.pow(1 - t, 3);
  const draw = () => {
    raf = 0;
    const r = fan.getBoundingClientRect(), vh = innerHeight;
    // 0 when the section's top reaches the bottom of the screen, 1 once it is well inside
    const target = Math.min(1, Math.max(0, (vh - r.top) / (vh * .75 + r.height * .25)));
    cur += (target - cur) * .14;
    const p = ease(cur);
    const w = hand[0].offsetWidth || 200, fw = fan.offsetWidth;
    const step = Math.min(w * .62, (fw - w * 1.05) / Math.max(1, hand.length - 1));
    hand.forEach((card, i) => {
      const t = i - mid;
      const sx = 0, sy = -i * 3, sr = (i % 2 ? 4 : -4) * (1 - i / hand.length);
      const fx = t * step, fy = t * t * w * .045, fr = t * 9;
      let x = sx + (fx - sx) * p, y = sy + (fy - sy) * p, rot = sr + (fr - sr) * p, sc = 1;
      if (i === hover) { y -= w * .16; sc = 1.06; rot *= .4; }
      card.style.transform = `translate(-50%, -50%) translate3d(${x.toFixed(1)}px, ${y.toFixed(1)}px, 0) rotate(${rot.toFixed(2)}deg) scale(${sc})`;
      card.style.zIndex = i === hover ? 50 : 20 - Math.round(Math.abs(t) * 2) + (/frenzy/.test(card.querySelector("img")?.getAttribute("src") || "") ? 1 : 0);
    });
    if (Math.abs(target - cur) > .001) kick();
  };
  const kick = () => { if (!raf) raf = requestAnimationFrame(draw); };
  addEventListener("scroll", kick, { passive: true });
  addEventListener("resize", kick);
  kick();
}

function initPageTransitions() {
  requestAnimationFrame(() => document.body.classList.add("ready"));
  document.addEventListener("click", (e) => {
    const a = e.target.closest("a[href]");
    if (!a || a.target || e.metaKey || e.ctrlKey || a.href.startsWith("mailto:")) return;
    const url = new URL(a.href, location.href);
    if (url.origin !== location.origin || (url.pathname === location.pathname && url.search === location.search)) return;
    e.preventDefault(); document.body.classList.add("leaving");
    setTimeout(() => (location.href = a.href), 450);
  });
  addEventListener("pageshow", (e) => { if (e.persisted) document.body.classList.remove("leaving"); });
}

document.addEventListener("DOMContentLoaded", () => {
  const routeOf = () => (HASH ? (isProject(location.hash.slice(1)) ? "p:" + location.hash.slice(1) : "home") : "");
  const route = routeOf();
  if (HASH) {
    history.scrollRestoration = "manual";
    addEventListener("hashchange", () => {
      if (routeOf() === route) return;
      document.body.classList.add("leaving");
      setTimeout(() => location.reload(), 420);
    });
  }
  const isProj = HASH ? route !== "home" : document.body.dataset.page === "project";
  (isProj ? renderProject : renderHome)();
  if (isProj) scrollTo(0, 0);
  if (isProj && !HASH && location.hash.length > 1) setTimeout(() => { try { goTo(location.hash.slice(1), true); } catch {} }, 450);
  initNav();
  initWall();
  initTitle();
  splitText();
  initReveal();
  initSmoothScroll();
  initScrollFx();
  initMagnet();
  initDrift();
  initPlay();
  initDeal();
  initHeroPaint();
  initPageTransitions();
  if (window.lenis) { const raf = (t) => { window.lenis.raf(t); requestAnimationFrame(raf); }; requestAnimationFrame(raf); }
  initIndex();
  initMailLinks();
  initGoto();
  initArrow();
  syncHeadHeight();
  if (location.hash && !isProj && location.hash !== "#top") setTimeout(() => { try { goTo(location.hash.slice(1), true); } catch {} }, 350);
});

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
    title: "Octopus Dropship", tagline: "Brand guidelines for a logistics brand with many arms.",
    category: "Brand Guidelines · Identity System",
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
    id: "octosocial", kind: "feed",
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
    id: "vibe9", kind: "feed", small: true,
    title: "Vibe9", tagline: "Warm, gentle jewellery stories.",
    category: "Social Media · Jewellery",
    services: ["Social media design", "Festive creatives"],
    type: "Social media",
    sources: [],
    pick: [["swa", ["swa-home-11"]]],
    hero: "swa-home-11",
    intro: ["Social creatives for Vibe9 — soft light, warm tones and a quiet, storybook mood, like this Daughter's Day post."],
    accent: "#e0893a",
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
const link = (id) => (HASH ? `#${id}` : `project.html?p=${id}`);
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
  const groups = [
    ["Branding", PROJECTS.filter((p) => p.home)],
    ["Social", PROJECTS.filter((p) => p.kind === "feed")],
    ["More", PROJECTS.filter((p) => !p.home && p.kind !== "feed")],
  ];
  return `
  <header class="site-head">
    <a class="logo" href="${home()}" aria-label="Home">${STAR}<span>Jithin<br>Baby</span></a>
    <nav class="menu" id="menu">
      ${groups.map(([g, ps]) => `<div class="menu-group"><div class="menu-label">${g}</div>${ps.map((p) => `<a href="${link(p.id)}" class="${p.id === active ? "on" : ""}">✦ ${esc(p.title.toLowerCase())}</a>`).join("")}</div>`).join("")}
      <div class="menu-group"><div class="menu-label">Info</div><a href="${home("about")}" data-goto="about">✦ about</a><a href="#contact" data-goto="contact">✦ contact</a></div>
    </nav>
    <div class="head-right">
      <a class="btn" href="mailto:${ABOUT.email}">Let's work together</a>
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
        <p class="idx-label">Index · ${PROJECTS.length} projects</p>
        ${PROJECTS.map((p, i) => { const h = heroOf(p); return `
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
      <div class="hero-lines" aria-hidden="true"></div>
      <div class="hero-star" aria-hidden="true" data-depth="40">${STAR}</div>
      <div class="hero-star small" aria-hidden="true" data-depth="-25">${STAR}</div>
      <h1 class="hero-title" data-depth="10"><span class="l1"><span>I design</span></span><span class="l2"><span><em>things you</em></span></span><span class="l3"><span>remember.</span></span></h1>
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
  const id = HASH ? location.hash.slice(1) : new URLSearchParams(location.search).get("p");
  const idx = Math.max(0, PROJECTS.findIndex((p) => p.id === id));
  const p = PROJECTS[idx], next = PROJECTS[(idx + 1) % PROJECTS.length];
  let ims = imagesFor(p);
  const hero = ims[0];
  document.title = `${p.title} — Jithin Baby`;
  document.documentElement.style.setProperty("--accent", p.accent);

  let body;
  if (p.kind === "feed") {
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
  $$('a[href^="#"]').forEach((a) => a.addEventListener("click", (e) => { const t = $(a.getAttribute("href")); if (t) { e.preventDefault(); lenis.scrollTo(t, { offset: -90 }); } }));
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

function initCursor() {
  if (!FINE || CALM) return;
  const c = document.createElement("div"); c.className = "cursor"; c.innerHTML = "<span></span>"; document.body.appendChild(c);
  let x = innerWidth / 2, y = innerHeight / 2, cx = x, cy = y;
  addEventListener("mousemove", (e) => { x = e.clientX; y = e.clientY; });
  document.addEventListener("mouseover", (e) => {
    const t = e.target.closest("[data-cursor]"), l = e.target.closest("a, button");
    c.classList.toggle("big", !!t); c.classList.toggle("link", !t && !!l);
    if (t) c.firstChild.textContent = t.dataset.cursor;
  });
  document.addEventListener("mouseleave", () => c.classList.add("gone"));
  document.addEventListener("mouseenter", () => c.classList.remove("gone"));
  const loop = () => { cx += (x - cx) * 0.18; cy += (y - cy) * 0.18; c.style.transform = `translate3d(${cx}px, ${cy}px, 0)`; requestAnimationFrame(loop); };
  loop();
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

/* hero headline: size each line so the two bold lines are exactly the same width and the script line sits in proportion */
function fitHero() {
  const h = $(".hero-title"); if (!h) return;
  const hero = h.closest(".hero"), pad = parseFloat(getComputedStyle(hero).paddingLeft) || 16;
  const target = Math.min(hero.clientWidth - pad * 2, 1100, innerHeight * 0.85);
  [["l1", 1], ["l3", 1], ["l2", 0.8]].forEach(([cls, k]) => {
    const line = $("." + cls, h), inner = line && line.firstElementChild; if (!inner) return;
    const f = parseFloat(getComputedStyle(line).fontSize), w = inner.offsetWidth;
    if (w) line.style.fontSize = `${(f * target * k / w).toFixed(2)}px`;
  });
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
  const y = t === 0 ? 0 : Math.max(0, t.getBoundingClientRect().top + scrollY - 80);
  if (window.lenis) { window.lenis.start(); window.lenis.scrollTo(y, { duration: 1.3, immediate: instant, force: true }); if (instant) scrollTo(0, y); return true; }
  else if (t === 0) scrollTo({ top: 0, behavior: instant ? "auto" : "smooth" });
  else t.scrollIntoView({ behavior: instant ? "auto" : "smooth" });
  return true;
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
  splitText();
  initReveal();
  initSmoothScroll();
  initScrollFx();
  initCursor();
  initDrift();
  initPlay();
  initDeck();
  fitHero(); addEventListener("resize", fitHero); document.fonts?.ready.then(fitHero);
  initHeroPaint();
  initPageTransitions();
  if (window.lenis) { const raf = (t) => { window.lenis.raf(t); requestAnimationFrame(raf); }; requestAnimationFrame(raf); }
  initIndex();
  initMailLinks();
  initGoto();
  if (location.hash && !isProj && location.hash !== "#top") setTimeout(() => { try { goTo(location.hash.slice(1), true); } catch {} }, 350);
});

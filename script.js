/* =====================================================================
   SITE LOGIC  ✦  you normally don't need to edit this file.
   Everything it shows comes from config.js.
   ===================================================================== */
(function () {
  "use strict";
  const C = window.WEDDING;
  if (!C) { console.error("config.js did not load"); return; }

  /* ---------- helpers ---------- */
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
  const get = (path) => path.split(".").reduce((o, k) => (o == null ? o : o[k]), C);
  const fill = (tpl, data) => tpl.replace(/\{(\w+)\}/g, (_, k) => (data[k] ?? ""));
  const kebab = (s) => s.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();

  /* ---------- 1. theme: config colours & fonts → CSS variables ---------- */
  Object.entries(C.theme || {}).forEach(([key, value]) => {
    const name = kebab(key);                     // burgundyLt -> --burgundy-lt
    document.documentElement.style.setProperty("--" + name, value);
  });

  /* ---------- 2. text: any element with data-bind="path.in.config" ---------- */
  $$("[data-bind]").forEach((el) => {
    const v = get(el.dataset.bind);
    if (v !== undefined && v !== null) el.textContent = v;
  });

  /* ---------- 3. images ---------- */
  $$("[data-src]").forEach((img) => { const v = get(img.dataset.src); if (v) img.src = v; });
  $$("[data-bg]").forEach((el) => { const v = get(el.dataset.bg); if (v) el.style.backgroundImage = `url("${v}")`; });

  /* ---------- 4. show / hide sections ---------- */
  $$("[data-show]").forEach((el) => { if (C.show && C.show[el.dataset.show] === false) el.hidden = true; });

  /* ---------- 5. story, gallery, faq, swatches ---------- */
  const story = $("#story-text");
  (C.story || []).forEach((p) => { const el = document.createElement("p"); el.textContent = p; story.appendChild(el); });

  const grid = $("#gallery-grid");
  (C.images.gallery || []).forEach((src, i) => {
    const fig = document.createElement("figure");
    const img = document.createElement("img");
    img.src = src; img.alt = `Foto ${i + 1} van die bruidspaar`;
    fig.appendChild(img); grid.appendChild(fig);
  });

  const faq = $("#faq-list");
  (C.faq || []).forEach(({ q, a }, i) => {
    const d = document.createElement("details");
    if (i === 0) d.open = true;
    const s = document.createElement("summary"); s.textContent = q;
    const p = document.createElement("p"); p.textContent = a;
    d.append(s, p); faq.appendChild(d);
  });

  const sw = $("#swatches");
  (C.dressCode.swatches || []).forEach((c) => { const s = document.createElement("span"); s.style.background = c; sw.appendChild(s); });

  /* ---------- 6. venue map & buttons ---------- */
  const addr = encodeURIComponent(C.venue.address);
  $("#map-frame").src = `https://maps.google.com/maps?q=${addr}&z=14&output=embed`;
  $("#maps-btn").href = C.venue.mapsLink || `https://www.google.com/maps/search/?api=1&query=${addr}`;
  if (C.venue.wazeLink) { const w = $("#waze-btn"); w.href = C.venue.wazeLink; w.hidden = false; }
  $("#registry-btn").href = C.registry.url;

  /* ---------- 7. countdown ---------- */
  const target = new Date(C.date).getTime();
  const pad = (n) => String(n).padStart(2, "0");
  function tick() {
    let diff = Math.max(0, target - Date.now());
    const d = Math.floor(diff / 864e5); diff -= d * 864e5;
    const h = Math.floor(diff / 36e5);  diff -= h * 36e5;
    const m = Math.floor(diff / 6e4);   diff -= m * 6e4;
    const s = Math.floor(diff / 1e3);
    $("#cd-days").textContent = d; $("#cd-hours").textContent = pad(h);
    $("#cd-mins").textContent = pad(m); $("#cd-secs").textContent = pad(s);
  }
  tick(); setInterval(tick, 1000);

  /* ---------- 8. floating rose petals ---------- */
  if (C.show.roses !== false && !matchMedia("(prefers-reduced-motion: reduce)").matches) {
    const wrap = $("#petals");
    for (let i = 0; i < 16; i++) {
      const p = document.createElement("span");
      p.className = "petal";
      p.style.left = Math.random() * 100 + "%";
      p.style.animationDuration = 9 + Math.random() * 10 + "s";
      p.style.animationDelay = -Math.random() * 18 + "s";
      p.style.setProperty("--drift", (Math.random() * 160 - 80) + "px");
      const sc = 0.6 + Math.random() * 0.8;
      p.style.width = 14 * sc + "px"; p.style.height = 18 * sc + "px";
      wrap.appendChild(p);
    }
  }

  /* ---------- 9. personal invite links:  ?to=Pieter%20%26%20Anri&seats=2 ---------- */
  const params = new URLSearchParams(location.search);
  const invitedName = (params.get("to") || "").trim().slice(0, 80);
  const maxCap = C.rsvp.maxSeatsPerInvite || 6;
  let seats = parseInt(params.get("seats"), 10);
  seats = Number.isFinite(seats) && seats > 0 ? Math.min(seats, maxCap) : (C.rsvp.seatsWithoutPersonalLink || 1);

  const nameInput = $("#rsvp-name");
  const seatsNote = $("#seats-note");
  if (invitedName) {
    const g = $("#greeting");
    g.textContent = `Dierbare ${invitedName}`;
    g.hidden = false;
    nameInput.value = invitedName;
    document.title = `${invitedName} · ` + document.title;
  }
  seatsNote.innerHTML = "";
  const strong = document.createElement("strong");
  strong.textContent = seats === 1 ? "een plek" : `${seats} plekke`;
  seatsNote.append("Ons het met liefde ", strong, seats === 1 ? " vir jou gereserveer." : " vir julle gereserveer.");
  // "jy" for one guest, "julle" for a household
  if (seats > 1) $("#attend-legend").textContent = "Sal julle by ons wees?";

  // seat dropdown (only if more than one seat)
  const seatsSel = $("#rsvp-seats");
  for (let n = seats; n >= 1; n--) {
    const o = document.createElement("option"); o.value = n; o.textContent = n === 1 ? "1 persoon" : `${n} persone`;
    seatsSel.appendChild(o);
  }

  /* ---------- 10. RSVP → WhatsApp ---------- */
  const form = $("#rsvp-form");
  const seatsField = $("#seats-field");
  const dietField = $("#dietary-field");
  const err = $("#rsvp-error");

  form.addEventListener("change", () => {
    const attend = form.attend.value;
    seatsField.hidden = !(attend === "yes" && seats > 1);
    dietField.hidden = !(attend === "yes" && C.rsvp.askDietary);
    err.textContent = "";
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = nameInput.value.trim();
    const attend = form.attend.value;
    if (!name) { err.textContent = "Vul asseblief jou naam en van in."; nameInput.focus(); return; }
    if (!attend) { err.textContent = "Kies asseblief of jy by ons sal wees."; return; }

    const M = C.rsvp.messages;
    const coming = attend === "yes" ? parseInt(seatsSel.value, 10) || 1 : seats;
    const plural = attend === "yes" ? coming > 1 : seats > 1;
    const key = (attend === "yes" ? "yes" : "no") + (plural ? "Many" : "One");
    let msg = fill(M[key], { name, seats: coming });

    const diet = $("#rsvp-dietary").value.trim();
    if (attend === "yes" && C.rsvp.askDietary && diet) msg += "\n" + fill(M.dietaryLine, { dietary: diet });

    const url = `https://wa.me/${C.rsvp.whatsappNumber}?text=${encodeURIComponent(msg)}`;
    window.location.href = url;
  });

  /* ---------- 11. gentle reveal on scroll ---------- */
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add("is-visible"); io.unobserve(en.target); } });
    }, { threshold: 0.12 });
    $$(".section > *:not(svg.spray)").forEach((el) => { el.classList.add("reveal"); io.observe(el); });
  }
})();

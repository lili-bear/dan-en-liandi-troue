/* =====================================================================
   WEDDING SITE SETTINGS  ✦  edit this file to change almost everything
   ---------------------------------------------------------------------
   - Text in "quotes" can be changed freely.
   - Keep the commas at the end of lines.
   - Anything marked TODO is a placeholder waiting for your real details.
   ===================================================================== */

window.WEDDING = {

  /* ---------- THE COUPLE ---------- */
  couple: {
    partner1: "Dan",
    partner2: "Liandi",
    joiner:   "&",                    // shown between your names
    monogram: "D & L",                // gothic letters at the top
  },

  /* ---------- DATE & TIME ---------- */
  // Format: "YYYY-MM-DDTHH:MM:00+02:00"  (+02:00 = South African time)
  date: "2027-03-21T10:30:00+02:00",
  dateText: "Sondag, 21 Maart 2027",
  timeText: "Die seremonie begin om 10:30",

  /* ---------- VENUE ---------- */
  venue: {
    name:    "Koinonia Place",
    address: "7 Westerdale Rd, Durbanville, Cape Town, 7551",
    town:    "Durbanville",
    // Optional: paste a Google Maps share link. If left empty, the address above is used.
    mapsLink: "https://maps.app.goo.gl/xgWxfAxjdD3GSAfw5",
    // Optional: paste a Waze link. Leave "" to hide the Waze button.
    wazeLink: "",
    directionsNote: "Daar is parkering op die terrein. Lorem Ipsum.", // TODO
  },

  /* ---------- DRESS CODE ---------- */
  dressCode: {
    title: "Semi-formeel",   // TODO: e.g. "Gotiese formeel"
    text:  "Vermy asseblief swart en enige helder of patel kleure. Ons sal bly wees as jy iets aan die donker kant dra, bv.:",
    // Colour swatches shown under the dress code. Remove a line to hide it.
    swatches: ["#106A6E", "#802250" , "#172B66", "#7A1829", "#214A34"], // Dark Teal, Plum, Navy, Burgundy, Forest Green
  },

  /* ---------- RSVP ---------- */
  rsvp: {
    deadlineText: "RSVP asseblief voor 1 Februarie 2027",   // TODO
    // Your WhatsApp number in international format, digits only (no +, no spaces, no leading 0).
    // Example: 082 123 4567  ->  27821234567
    whatsappNumber: "27797536192",     // ← RSVPs are sent here
    askDietary: true,                  // show the dietary needs box
    maxSeatsPerInvite: 3,              // safety cap for personal links
    // Seats when someone opens the plain link (without a personal ?to=... link)
    seatsWithoutPersonalLink: 1,

    // Messages that get pre-filled in WhatsApp. {name} and {seats} are filled in automatically.
    messages: {
      yesOne:  "{name}: Ek kom baie graag na julle troue! 🌹",
      yesMany: "{name}: Ons kom baie graag na julle troue! 🌹 ({seats} kom)",
      noOne:   "{name}: Ongelukkig kan ek nie julle troue bywoon nie. Ek sal in gees saam met julle feesvier. 🖤",
      noMany:  "{name}: Ongelukkig kan ons nie julle troue bywoon nie. Ons sal in gees saam met julle feesvier. 🖤",
      dietaryLine: "Dieetvereistes: {dietary}",
    },
  },

  /* ---------- REGISTRY ---------- */
  registry: {
    url:  "https://www.easyregistry.co.za/Registry/Gifts/danandliandi",
    buttonText: "Bekyk ons geskenklys",
    text: "Julle teenwoordigheid is die grootste geskenk! As julle ons verder wil seën, het ons 'n klein geskenklys om ons te help om ons eerste huis saam te bou.",
  },

  /* ---------- FAITH & WORDS ---------- */
  words: {
    intro: "Before vows are spoken and before the bells toll, we invite you to celebrate the beginning of our forever.",
    // 1983 Afrikaans translation (shortened). Older 1933/53 wording, if you prefer it:
    // "Sit my soos 'n seël op jou hart ... want die liefde is sterk soos die dood."
    scripture: "Hou my soos 'n seël op jou hart, want die liefde is so sterk soos die dood.",
    scriptureRef: "Hooglied 8:6",
    faithLine: "Two hearts, one covenant — bound together by the love of Jesus.",
    footer: "Met liefde, en tot eer van God",
  },

  /* ---------- OUR STORY ---------- */
  // Each item is one paragraph. TODO: replace with your own story.
  story: [
    "Dit het stilletjies begin — 'n gesprek wat baie langer geduur het as wat een van ons beplan het, en 'n gevoel dat God besig was om iets pragtigs te skryf.",
    "Deur seisoene van rose en dorings het ons in mekaar 'n tuiste gevind, 'n beste vriend en 'n lewensmaat in die geloof.",
    "Nou, onder die oop hemel en omring deur die mense vir wie ons die liefste is, gaan ons \"ja, ek wil\" sê. Dit sal vir ons 'n eer wees om julle daar te hê.",
  ],

  /* ---------- GOOD TO KNOW (questions & answers) ---------- */
  faq: [
    { q: "Mag ek iemand saambring?",
      a: "Ons viering is klein en intiem, so ons kan slegs die gaste verwelkom wie se name op julle uitnodiging staan. Dankie dat julle verstaan. 🤍" },
    { q: "Die seremonie is buite — wat moet ek weet?",
      a: "Ons sal op gras wees, so jou voete sal bly wees as jy blokhakke of plat skoene aantrek. Bring 'n tjalie of baadjie saam vir ingeval dit koel raak." },
    { q: "Mag ek foto's neem?",
      a: "Asseblief! Deel net al die fotos met almal wie teenwoordig is." },
  ],

  /* ---------- PICTURES ---------- */
  // Put your photos in the "images" folder, then type the file names here.
  // Tip: resize photos to about 1600px wide so the site loads fast on phones.
  images: {
    hero:   "/hero-picture.jpg",    // big photo at the very top (dark overlay is added)
    couple: "/couple-picture.jpg",  // photo next to "Our story"
    gallery: [
      "/gallery-1.jpg",
      "/gallery-2.jpg",
      "/gallery-3.jpg",
      "/gallery-4.jpg",
      "/gallery-5.jpg",
      "/gallery-6.jpg",
    ],
  },

  /* ---------- SECTIONS ON / OFF ---------- */
  show: {
    countdown: true,
    story:     true,
    map:       true,
    gallery:   true,
    registry:  true,
    faq:       true,
    roses:     true,   // floating rose petals in the opening
  },

  /* ---------- THEME (colours & fonts) ---------- */
  // Change a colour here and it changes everywhere on the site.
  theme: {
    ivory:      "#F4EEE1",   // light background
    ivoryDeep:  "#E8DFCC",   // lace / card shade
    black:      "#0E0B0C",   // dark background
    blackSoft:  "#1A1416",   // dark cards
    burgundy:   "#6B1424",   // roses & buttons
    burgundyLt: "#9B2335",   // rose highlights
    forest:     "#1F3A2B",   // leaves & accents
    forestLt:   "#3E6B4F",   // light leaves
    silver:     "#B9BAC0",   // ornaments & lines
    silverLt:   "#E3E3E8",   // shiny highlights
    textDark:   "#231A1C",   // text on ivory
    textLight:  "#EFE8DA",   // text on black
    imageOverlay: "0.15",   // dark overlay on photos: 0 = none, 0.3 = moody, 0.5 = very dark

    fontGothic: "'UnifrakturMaguntia', serif",          // monogram
    fontDisplay: "'Cinzel', serif",                     // headings
    fontScript: "'Pinyon Script', cursive",             // your names
    fontBody:   "'Cormorant Garamond', Georgia, serif", // normal text
  },

  /* Your live website address (fill in after publishing on Netlify).
     Used by the invite link maker. Leave "" to detect it automatically. */
  siteUrl: "https://lili-bear.github.io/dan-en-liandi-troue/",
};

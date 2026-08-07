// VAD Design content — real product data & self-hosted VAD photography.
// Enquiry submission and the AI assistant are wired to the FastAPI backend.

export const VIDEO_URL = "/vad_intro.mp4";
export const VIDEO_URL_WEBM = "/vad_intro.webm";

// Quote-based pricing label used across wheels / aero / programmes.
export const POA = "POA — Price on application";

export const navLinks = [
  { label: "Home", path: "/" },
  { label: "Wheels", path: "/wheels" },
  { label: "Aero", path: "/aero" },
  { label: "Programmes", path: "/programmes" },
  { label: "Gallery", path: "/gallery" },
  { label: "For Sale", path: "/for-sale" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
];

export const heroSlides = [
  {
    id: 1,
    tag: "FORGED PERFORMANCE",
    title: "MOTORSPORT ENGINEERED",
    subtitle: "Forged wheels. Carbon aero. Bespoke widebody programmes.",
    image: "/vad/programmes/porsche-997-gt3r.jpg",
  },
  {
    id: 2,
    tag: "TRACK & STREET",
    title: "NISSAN GTR GT3",
    subtitle: "Race-derived widebody conversions, road & race homologated.",
    image: "/vad/programmes/nissan-gtr-gt3.jpg",
  },
  {
    id: 3,
    tag: "1-OF-1 · NOW FOR SALE",
    title: "BMW Z4 GT3 V8",
    subtitle: "Street-legal LS3 V8 widebody — the VAD flagship promotional build.",
    image: "/vad/z4/z4-hero.jpg",
  },
];

export const services = [
  {
    id: "wheels",
    title: "Forged Wheels",
    subtitle: "Magnesium / Aluminium",
    desc: "1 & 2 piece super lightweight forged designs, precision 3-D hot forged for the ultimate strength-to-weight ratio.",
    icon: "disc",
    path: "/wheels",
  },
  {
    id: "aero",
    title: "Carbon Fibre Aero",
    subtitle: "GT Aero Programme",
    desc: "Prepreg autoclave carbon aero components engineered for downforce, balance and unmistakable presence.",
    icon: "wind",
    path: "/aero",
  },
  {
    id: "widebody",
    title: "Widebody Conversions",
    subtitle: "Track & Street",
    desc: "Complete GT3R inspired widebody body kits for Porsche, Nissan GTR and BMW platforms.",
    icon: "car",
    path: "/programmes",
  },
  {
    id: "bespoke",
    title: "Bespoke Applications",
    subtitle: "Custom Builds",
    desc: "One-off bespoke design, engineering and manufacture for your unique application.",
    icon: "wrench",
    path: "/contact",
  },
];

export const programmes = [
  {
    id: "porsche-997-gt3r",
    name: "PORSCHE 997.2 GT3R",
    category: "Track & Street",
    tags: ["Carbon Widebody", "Aero Programme"],
    price: POA,
    image: "/vad/programmes/porsche-997-gt3r.jpg",
    blurb:
      "Our flagship 997.2 GT3R programme — a full carbon fibre widebody aero conversion engineered for both circuit and road.",
  },
  {
    id: "porsche-991-gt3r",
    name: "PORSCHE 991.1 GT3R",
    category: "Track & Street",
    tags: ["Carbon Widebody", "Aero Programme"],
    price: POA,
    image: "/vad/programmes/porsche-991-gt3r.jpg",
    blurb:
      "R16 derived 991.1 GT3R carbon widebody aero programme, race-proven aerodynamics for the modern GT platform.",
  },
  {
    id: "nissan-gtr-gt3",
    name: "NISSAN GTR GT3",
    category: "Track & Street",
    tags: ["Widebody", "Carbon Aero"],
    price: POA,
    image: "/vad/programmes/nissan-gtr-gt3.jpg",
    blurb:
      "Aggressive GT3RR 'Ichiban' widebody conversion for the R35 GTR with a full carbon fibre aero package.",
  },
  {
    id: "bmw-z4-gt3",
    name: "BMW (E89) Z4 GT3 V8",
    category: "Track & Street",
    tags: ["Widebody", "V8 Conversion"],
    price: POA,
    image: "/vad/programmes/bmw-z4-gt3.jpg",
    blurb:
      "The iconic E89 Z4 GT3 V8 widebody build — a genuine motorsport statement, available for track & street. See our 1-of-1 example for sale.",
  },
  {
    id: "porsche-997-k3r",
    name: "PORSCHE 997 K3R",
    category: "Track & Street",
    tags: ["Kremer K3R", "Body Kit"],
    price: POA,
    image: "/vad/programmes/porsche-997-k3r.jpg",
    blurb:
      "A tribute to the legendary Kremer K3R — reimagined widebody body kit for the 997 platform.",
  },
  {
    id: "porsche-981-cayman-rsr",
    name: "PORSCHE 981 CAYMAN RSR",
    category: "Track & Street",
    tags: ["Widebody", "RSR Evo"],
    price: POA,
    image: "/vad/programmes/porsche-981-cayman-rsr.jpg",
    blurb:
      "981 Cayman RSR widebody and RSR-Evo programme — mid-engine balance meets full aero.",
  },
];

export const wheelProducts = [
  {
    id: "vad-f1",
    name: "VAD F1",
    type: "Forged Magnesium",
    sizes: '17" 18" 19" 20" 21"',
    price: POA,
    image: "/vad/wheels/vad-f1.jpg",
  },
  {
    id: "vt06f",
    name: "VT06F",
    type: "Forged Magnesium",
    sizes: '18" 19" 20" 21"',
    price: POA,
    image: "/vad/wheels/vt06f.jpg",
  },
  {
    id: "mf-r-gt3",
    name: "VAD MF-R GT3",
    type: "Magnesium Centrelock",
    sizes: '17"–21" — all widths & finishes',
    price: POA,
    image: "/vad/wheels/mfr-gt3-cap.jpg",
  },
  {
    id: "lm1-r",
    name: "VAD LM1-R",
    type: "Carbon Fibre Barrel",
    sizes: '17"–21" — all widths & applications',
    price: POA,
    image: "/vad/wheels/lm1r-carbon-1.jpg",
  },
  {
    id: "rs5-mag",
    name: "VAD RS5",
    type: "Forged Magnesium",
    sizes: '18" 19" 20" 21"',
    price: POA,
    image: "/vad/wheels/rs5-mag.jpg",
  },
  {
    id: "vm1",
    name: "VAD VM1 13X19",
    type: "Forged Magnesium",
    sizes: '19" motorsport spec',
    price: POA,
    image: "/vad/wheels/vm1-13x19.jpg",
  },
];

export const wheelBenefits = [
  {
    title: "1.5x Lighter",
    desc: "Forged magnesium is up to 1.5x lighter than aluminium and twice as light as cast wheels of the same size.",
  },
  {
    title: "Bends, Never Cracks",
    desc: "A unique fibre structure from precision 3-D hot forging in a 20,000-ton press — designed to bend without cracking.",
  },
  {
    title: "5-7% Less Fuel",
    desc: "Reduced un-sprung mass yields shorter braking distances, faster acceleration and up to 5-7% lower fuel use.",
  },
  {
    title: "100x Damping",
    desc: "Magnesium's damping ability is 100x higher than aluminium — smoother motion and longer suspension life.",
  },
];

export const wheelSizes = [
  {
    title: "1 Piece Forged Monoblock",
    rows: ['7.5x18 → 12x18', '7.5x19 → 12x19', '8x20 → 12.5x20', '8x21 → 12.5x21'],
  },
  {
    title: "2 Piece Forged Duoblock",
    rows: ['8x18 → 11x18', '8x19 → 11x19', '8x20 → 11x20', '8x21 → 11x21'],
  },
  {
    title: "2 Piece Carbon Fibre Barrel",
    rows: ['8x18 → 11x18', '8x19 → 11x19', '8x20 → 11x20', '8x21 → 11x21'],
  },
];

export const carbonItems = [
  {
    title: "Front Splitters & Lips",
    desc: "Autoclave prepreg carbon splitters engineered for front-end downforce and airflow management.",
    price: POA,
    image: "/vad/z4/z4-splitter.jpg",
  },
  {
    title: "Rear Wings & Diffusers",
    desc: "Adjustable swan-neck GT wings and multi-element diffusers for balanced high-speed stability.",
    price: POA,
    image: "/vad/z4/z4-wing-diffuser.jpg",
  },
  {
    title: "Full Widebody Panels",
    desc: "Complete carbon fibre widebody panel sets — bonnets, wings, doors and quarter panels.",
    price: POA,
    image: "/vad/aero/carbon-bodykits.jpg",
  },
];

export const stats = [
  { value: "20,000t", label: "Forging Press" },
  { value: "1.5x", label: "Lighter Than Alloy" },
  { value: "7", label: "GT Programmes" },
  { value: "UK", label: "Designed & Built" },
];

export const contactInfo = {
  location: "England, United Kingdom",
  email: "info@vaddesign.com",
  phone: "+44 (0) 1234 567 890",
  hours: "Mon – Fri · 09:00 – 17:00 GMT",
};

// ---------------------------------------------------------------------------
// GALLERY — real VAD photography, grouped by category (drives /gallery)
// ---------------------------------------------------------------------------
export const galleryCategories = ["All", "GT Programmes", "Forged Wheels", "Carbon Aero", "BMW Z4 GT3 V8"];

export const galleryImages = [
  // GT Programmes
  { src: "/vad/programmes/porsche-997-gt3r.jpg", category: "GT Programmes", caption: "Porsche 997.2 GT3R" },
  { src: "/vad/programmes/porsche-991-gt3r.jpg", category: "GT Programmes", caption: "Porsche 991.1 GT3R" },
  { src: "/vad/programmes/porsche-991-2-r19.jpg", category: "GT Programmes", caption: "Porsche 991.2 GT3R R19" },
  { src: "/vad/programmes/porsche-935-k3.jpg", category: "GT Programmes", caption: "Porsche 997 K3R" },
  { src: "/vad/programmes/porsche-981-cayman-rsr.jpg", category: "GT Programmes", caption: "Porsche 981 Cayman RSR" },
  { src: "/vad/programmes/porsche-981-cayman-rsr-evo.jpg", category: "GT Programmes", caption: "Porsche 981 Cayman RSR-Evo" },
  { src: "/vad/programmes/nissan-gtr-gt3.jpg", category: "GT Programmes", caption: "Nissan GTR GT3" },
  { src: "/vad/programmes/nissan-ichiban.jpg", category: "GT Programmes", caption: "Nissan GT3RR 'Ichiban'" },
  { src: "/vad/programmes/bmw-z4-white.jpg", category: "GT Programmes", caption: "BMW Z4 GT3 — Alpine White" },
  // Forged Wheels
  { src: "/vad/wheels/vad-f1.jpg", category: "Forged Wheels", caption: "VAD F1 — Forged Magnesium" },
  { src: "/vad/wheels/vt06f.jpg", category: "Forged Wheels", caption: "VT06F — Forged Magnesium" },
  { src: "/vad/wheels/mfr-gt3-cap.jpg", category: "Forged Wheels", caption: "VAD MF-R GT3 — Centrelock" },
  { src: "/vad/wheels/mfr-centrelock.jpg", category: "Forged Wheels", caption: "VAD MF-R Centrelock" },
  { src: "/vad/wheels/mfr-face-centrelock.jpg", category: "Forged Wheels", caption: "VAD MF-R Face — Centrelock" },
  { src: "/vad/wheels/lm1r-carbon-1.jpg", category: "Forged Wheels", caption: "VAD LM1-R — Carbon Barrel" },
  { src: "/vad/wheels/lm1r-carbon-2.jpg", category: "Forged Wheels", caption: "VAD LM1-R — Carbon Barrel" },
  { src: "/vad/wheels/rs5-mag.jpg", category: "Forged Wheels", caption: "VAD RS5 — Forged Magnesium" },
  { src: "/vad/wheels/rs5-side.jpg", category: "Forged Wheels", caption: "VAD RS5 — Profile" },
  { src: "/vad/wheels/vm1-13x19.jpg", category: "Forged Wheels", caption: "VAD VM1 13x19" },
  { src: "/vad/wheels/mfr-2pc-centrelock.jpg", category: "Forged Wheels", caption: "MF-R 2pc Centrelock" },
  // Carbon Aero
  { src: "/vad/aero/porsche-997-aero.jpg", category: "Carbon Aero", caption: "997 GT3R Carbon Aero" },
  { src: "/vad/aero/porsche-991-aero.jpg", category: "Carbon Aero", caption: "991.1 GT3R Carbon Aero" },
  { src: "/vad/aero/nissan-aero.jpg", category: "Carbon Aero", caption: "Nissan GTR Carbon Aero" },
  { src: "/vad/aero/carbon-bodykits.jpg", category: "Carbon Aero", caption: "Carbon Fibre Body Kits" },
  { src: "/vad/aero/carbon-aero-parts.jpg", category: "Carbon Aero", caption: "Carbon Aero Components" },
  { src: "/vad/aero/cayman-widebody.jpg", category: "Carbon Aero", caption: "Cayman Widebody Panels" },
  { src: "/vad/aero/bilstein-suspension.jpg", category: "Carbon Aero", caption: "Custom Bilstein Suspension" },
  // BMW Z4 GT3 V8
  { src: "/vad/z4/z4-hero.jpg", category: "BMW Z4 GT3 V8", caption: "BMW Z4 GT3 V8 Street" },
  { src: "/vad/z4/z4-front.jpg", category: "BMW Z4 GT3 V8", caption: "Front View" },
  { src: "/vad/z4/z4-rear.jpg", category: "BMW Z4 GT3 V8", caption: "Rear View" },
  { src: "/vad/z4/z4-side.jpg", category: "BMW Z4 GT3 V8", caption: "Side Profile" },
  { src: "/vad/z4/z4-splitter.jpg", category: "BMW Z4 GT3 V8", caption: "Front Splitter" },
  { src: "/vad/z4/z4-wing-diffuser.jpg", category: "BMW Z4 GT3 V8", caption: "Rear Wing & Diffuser" },
  { src: "/vad/z4/z4-engine.jpg", category: "BMW Z4 GT3 V8", caption: "LS3 V8 Engine" },
  { src: "/vad/z4/z4-interior.jpg", category: "BMW Z4 GT3 V8", caption: "Interior" },
  { src: "/vad/z4/z4-sparco-seats.jpg", category: "BMW Z4 GT3 V8", caption: "Sparco Race Seats" },
  { src: "/vad/z4/z4-steering-wheel.jpg", category: "BMW Z4 GT3 V8", caption: "Carbon Steering Wheel" },
  { src: "/vad/z4/z4-rear-wheel.jpg", category: "BMW Z4 GT3 V8", caption: "13x19 Rear Wheel & Tyre" },
  { src: "/vad/z4/z4-carbon-blade.jpg", category: "BMW Z4 GT3 V8", caption: "Carbon Blade" },
];

// ---------------------------------------------------------------------------
// CARS FOR SALE — the flagship 1-of-1 BMW Z4 GT3 V8 (drives /for-sale)
// ---------------------------------------------------------------------------
export const carForSale = {
  id: "bmw-z4-gt3-v8",
  name: "BMW Z4 GT3 V8 STREET",
  subtitle: "1-of-1 Road-Legal FIA-Style GT3 Build",
  price: "£68,000",
  location: "United Kingdom",
  status: "Street Registered · Valid UK MOT · Current Road Tax",
  provenance: "Official VAD Design UK Promotional Asset",
  hero: "/vad/z4/z4-hero.jpg",
  intro: [
    "An unrepeatable opportunity to acquire a true 1-of-1 automotive masterpiece: a road-legal, FIA-style race car for the street.",
    "Built as the flagship promotional vehicle for VAD Design UK, this BMW Z4 (E89) fuses the aggressive, pure-bred aerodynamics of a factory BMW Motorsport GT3 car with the reliability and torque of a professionally engineered LS3 V8 crate engine.",
    "Unlike track-restricted race cars, this vehicle is fully street-registered, taxed and MOT'd in the United Kingdom — the only street-legal BMW Z4 GT3 V8 build in the country using authentic, factory-level VAD Wide Body GTRR composite bodywork.",
  ],
  highlights: [
    { title: "Genuine Motorsport Aero", desc: "Wrapped in an authentic, ultra-wide VAD GTRR dry carbon fibre body kit." },
    { title: "American V8 Heartbeat", desc: "LS3 V8 crate engine tuned to 485 HP, engineered and installed by the VAD team." },
    { title: "Purist Gearbox", desc: "Factory transmission replaced by a heavy-duty Tremec 6-speed manual." },
    { title: "Dual Aesthetic Identity", desc: "Alpine White paint, currently protected under a full Matt Black vinyl wrap." },
  ],
  specs: [
    {
      group: "Bodywork & Aerodynamics",
      note: "VAD Wide Body GTRR Kit / Dry Carbon",
      items: [
        "GT3-spec front bumper and aggressive front splitter",
        "GT3-spec vented bonnet and inner front fenders",
        "GT3-spec extended side skirts and boxed rear quarter panels",
        "GT3-spec rear bumper and integrated race diffuser",
        "GT3-spec dual-blade rear wing (race uprights + quick-release pins)",
      ],
    },
    {
      group: "Engine & Drivetrain",
      items: [
        "Engine: General Motors LS3 V8 crate engine (optimised to 485 HP)",
        "Management: Emerald ECU system",
        "Exhaust: Custom stainless steel twin-pipe system",
        "Transmission: Tremec 6-speed heavy-duty manual gearbox",
      ],
    },
    {
      group: "Suspension & Footwork",
      items: [
        "Fully adjustable Bilstein coilover suspension, custom-tailored to the wide track",
        "Wheels: GT3RR 3-piece forged alloy, Matt & Gloss Black",
        "Front: 10.5J x 19\" on Michelin 265/35/R19",
        "Rear: 13J x 19\" on Michelin 325/30/R19",
      ],
    },
    {
      group: "Interior",
      items: [
        "Sparco race bucket seats",
        "Custom carbon fibre steering wheel",
        "Carbon-look interior trim layout",
      ],
    },
  ],
  logistics:
    "A complete, stand-alone carbon fibre aero kit is available via separate negotiation. Worldwide buyers welcome — we coordinate secure international enclosed shipping to your destination.",
  gallery: [
    { src: "/vad/z4/z4-hero.jpg", caption: "BMW Z4 GT3 V8 Street" },
    { src: "/vad/z4/z4-front.jpg", caption: "Front View" },
    { src: "/vad/z4/z4-rear.jpg", caption: "Rear View" },
    { src: "/vad/z4/z4-side.jpg", caption: "Side Profile" },
    { src: "/vad/z4/z4-profile.jpg", caption: "Wide Stance" },
    { src: "/vad/z4/z4-splitter.jpg", caption: "Front Splitter" },
    { src: "/vad/z4/z4-wing-diffuser.jpg", caption: "Rear Wing & Diffuser" },
    { src: "/vad/z4/z4-rear-wing.jpg", caption: "Rear Wing Assembly" },
    { src: "/vad/z4/z4-gen2-wing.jpg", caption: "Gen2 Rear Wing" },
    { src: "/vad/z4/z4-diffuser-exhaust.jpg", caption: "Diffuser & Exhaust" },
    { src: "/vad/z4/z4-vented-bonnet.jpg", caption: "Vented Bonnet" },
    { src: "/vad/z4/z4-engine.jpg", caption: "Exposed LS3 V8" },
    { src: "/vad/z4/z4-closeup.jpg", caption: "V8 Close Up" },
    { src: "/vad/z4/z4-rear-wheel.jpg", caption: "13x19 Rear Wheel & Tyre" },
    { src: "/vad/z4/z4-sparco-seats.jpg", caption: "Sparco Race Seats" },
    { src: "/vad/z4/z4-steering-wheel.jpg", caption: "Carbon Steering Wheel" },
    { src: "/vad/z4/z4-interior.jpg", caption: "Interior" },
    { src: "/vad/z4/z4-carbon-blade.jpg", caption: "Carbon Blade" },
    { src: "/vad/z4/z4-tow-strap.jpg", caption: "Tow Strap Detail" },
    { src: "/vad/z4/z4-full.jpg", caption: "Full Build" },
  ],
};

// Local suggested starter prompts for the AI assistant widget
export const chatSuggestions = [
  "What forged wheel sizes do you offer?",
  "Tell me about the BMW Z4 GT3 V8 for sale",
  "Magnesium vs aluminium wheels?",
  "How do I start a bespoke build?",
];

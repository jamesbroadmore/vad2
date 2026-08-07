// Mock data for VAD Design clone (content sourced from vadwheels.com / vaddesign.com)
// NOTE: This data is MOCKED for the frontend teaser. Backend integration replaces enquiry submission.

export const VIDEO_URL = "/vad_intro.mp4";
export const VIDEO_URL_WEBM = "/vad_intro.webm";

export const navLinks = [
  { label: "Home", path: "/" },
  { label: "Forged Wheels", path: "/wheels" },
  { label: "Aero & Carbon", path: "/aero" },
  { label: "Programmes", path: "/programmes" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
];

export const heroSlides = [
  {
    id: 1,
    tag: "FORGED PERFORMANCE",
    title: "MOTORSPORT ENGINEERED",
    subtitle: "Forged wheels. Carbon aero. Bespoke widebody programmes.",
    image:
      "https://images.unsplash.com/photo-1593516979583-cf194560a7f5?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzNzl8MHwxfHNlYXJjaHw0fHxQb3JzY2hlJTIwR1QzfGVufDB8fHxibGFja3wxNzg2MDY0NTkyfDA&ixlib=rb-4.1.0&q=85",
  },
  {
    id: 2,
    tag: "TRACK & STREET",
    title: "PORSCHE 997.2 GT3R",
    subtitle: "Full carbon widebody aero programme built for the circuit.",
    image:
      "https://images.unsplash.com/photo-1578478412827-8c0ec4fdde15?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzNzl8MHwxfHNlYXJjaHwzfHxQb3JzY2hlJTIwR1QzfGVufDB8fHxibGFja3wxNzg2MDY0NTkyfDA&ixlib=rb-4.1.0&q=85",
  },
  {
    id: 3,
    tag: "WIDEBODY DIVISION",
    title: "NISSAN GTR GT3",
    subtitle: "Race-derived widebody conversions, road & race homologated.",
    image:
      "https://images.unsplash.com/photo-1706883376540-b21e5559fc45?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxOTJ8MHwxfHNlYXJjaHwyfHx3aWRlYm9keSUyMGNhcnxlbnwwfHx8fDE3ODYwNjQ1OTJ8MA&ixlib=rb-4.1.0&q=85",
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
    image:
      "https://images.unsplash.com/photo-1593516979583-cf194560a7f5?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzNzl8MHwxfHNlYXJjaHw0fHxQb3JzY2hlJTIwR1QzfGVufDB8fHxibGFja3wxNzg2MDY0NTkyfDA&ixlib=rb-4.1.0&q=85",
    blurb:
      "Our flagship 997.2 GT3R programme — a full carbon fibre widebody aero conversion engineered for both circuit and road.",
  },
  {
    id: "porsche-991-gt3r",
    name: "PORSCHE 991.1 GT3R",
    category: "Track & Street",
    tags: ["Carbon Widebody", "Aero Programme"],
    image:
      "https://images.unsplash.com/photo-1578478412827-8c0ec4fdde15?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzNzl8MHwxfHNlYXJjaHwzfHxQb3JzY2hlJTIwR1QzfGVufDB8fHxibGFja3wxNzg2MDY0NTkyfDA&ixlib=rb-4.1.0&q=85",
    blurb:
      "R16 derived 991.1 GT3R carbon widebody aero programme, race-proven aerodynamics for the modern GT platform.",
  },
  {
    id: "nissan-gtr-gt3",
    name: "NISSAN GTR GT3",
    category: "Track & Street",
    tags: ["Widebody", "Carbon Aero"],
    image:
      "https://images.unsplash.com/photo-1706883376540-b21e5559fc45?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxOTJ8MHwxfHNlYXJjaHwyfHx3aWRlYm9keSUyMGNhcnxlbnwwfHx8fDE3ODYwNjQ1OTJ8MA&ixlib=rb-4.1.0&q=85",
    blurb:
      "Aggressive GT3 widebody conversion for the R35 GTR with full carbon fibre aero package.",
  },
  {
    id: "bmw-z4-gt3",
    name: "BMW (E89) Z4 GT3 V8",
    category: "Track & Street",
    tags: ["Widebody", "V8 Conversion"],
    image:
      "https://images.unsplash.com/photo-1696841748798-d3d6cfdbafc7?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NzR8MHwxfHNlYXJjaHwxfHxyYWNlJTIwY2FyJTIwdHJhY2t8ZW58MHx8fGJsYWNrfDE3ODYwNjQ1OTJ8MA&ixlib=rb-4.1.0&q=85",
    blurb:
      "The iconic E89 Z4 GT3 V8 widebody build — a genuine motorsport statement, available for track & street.",
  },
  {
    id: "porsche-997-k3r",
    name: "PORSCHE 997 K3R",
    category: "Track & Street",
    tags: ["Kremer K3R", "Body Kit"],
    image:
      "https://images.unsplash.com/photo-1552962730-61f41ae62092?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NzR8MHwxfHNlYXJjaHw0fHxyYWNlJTIwY2FyJTIwdHJhY2t8ZW58MHx8fGJsYWNrfDE3ODYwNjQ1OTJ8MA&ixlib=rb-4.1.0&q=85",
    blurb:
      "A tribute to the legendary Kremer K3R — reimagined widebody body kit for the 997 platform.",
  },
  {
    id: "porsche-981-cayman-rsr",
    name: "PORSCHE 981 CAYMAN RSR",
    category: "Track & Street",
    tags: ["Widebody", "RSR Evo"],
    image:
      "https://images.unsplash.com/photo-1647331460279-0076ad6c1e7b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NzR8MHwxfHNlYXJjaHwyfHxyYWNlJTIwY2FyJTIwdHJhY2t8ZW58MHx8fGJsYWNrfDE3ODYwNjQ1OTJ8MA&ixlib=rb-4.1.0&q=85",
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
    image:
      "https://images.unsplash.com/photo-1611633235555-45e252fe48c8?crop=entropy&cs=srgb&fm=jpg&q=85&w=800",
  },
  {
    id: "vt06f",
    name: "VT06F",
    type: "Forged Magnesium",
    sizes: '18" 19" 20" 21"',
    image:
      "https://images.unsplash.com/photo-1594500067480-fedcbb960b73?crop=entropy&cs=srgb&fm=jpg&q=85&w=800",
  },
  {
    id: "mf-r-gt3",
    name: "VAD MF-R GT3",
    type: "Magnesium Centrelock",
    sizes: '17" 18" 19" 20" 21" — all widths & finishes',
    image:
      "https://images.unsplash.com/photo-1614689304159-273632ab5c5a?crop=entropy&cs=srgb&fm=jpg&q=85&w=800",
  },
  {
    id: "lm1-r",
    name: "VAD LM1-R",
    type: "Carbon Fibre Barrel",
    sizes: '17" 18" 19" 20" 21" — all widths & applications',
    image:
      "https://images.unsplash.com/photo-1614740932412-963402533312?crop=entropy&cs=srgb&fm=jpg&q=85&w=800",
  },
  {
    id: "rs5-mag",
    name: "VAD RS5",
    type: "Forged Magnesium",
    sizes: '18" 19" 20" 21"',
    image:
      "https://images.unsplash.com/photo-1609950692056-bd02e61b5227?crop=entropy&cs=srgb&fm=jpg&q=85&w=800",
  },
  {
    id: "vm1",
    name: "VAD VM1 13X19",
    type: "Forged Magnesium",
    sizes: '19" motorsport spec',
    image:
      "https://images.unsplash.com/photo-1611633235555-45e252fe48c8?crop=entropy&cs=srgb&fm=jpg&q=85&w=800&sat=-30",
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
    rows: [
      '7.5x18 → 12x18',
      '7.5x19 → 12x19',
      '8x20 → 12.5x20',
      '8x21 → 12.5x21',
    ],
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
    image:
      "https://images.pexels.com/photos/5507143/pexels-photo-5507143.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    title: "Rear Wings & Diffusers",
    desc: "Adjustable swan-neck GT wings and multi-element diffusers for balanced high-speed stability.",
    image:
      "https://images.unsplash.com/photo-1647331460279-0076ad6c1e7b?crop=entropy&cs=srgb&fm=jpg&q=85&w=800",
  },
  {
    title: "Full Widebody Panels",
    desc: "Complete carbon fibre widebody panel sets — bonnets, wings, doors and quarter panels.",
    image:
      "https://images.unsplash.com/photo-1706883376540-b21e5559fc45?crop=entropy&cs=srgb&fm=jpg&q=85&w=800",
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

// Local suggested starter prompts for the AI assistant widget
export const chatSuggestions = [
  "What forged wheel sizes do you offer?",
  "Tell me about the Porsche 997 GT3R programme",
  "Magnesium vs aluminium wheels?",
  "How do I start a bespoke build?",
];

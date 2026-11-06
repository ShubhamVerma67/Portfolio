import {
  ContactInfo,
  Education,
  Experience,
  FreelanceProject,
  Project,
  Skill,
} from "@/types/portfolio";

export const PERSONAL_INFO: ContactInfo = {
  name: "SHUBHAM VERMA",
  title: "GRAPHIC DESIGNER",
  subtitle: "GRAPHIC DESIGNER",
  experienceYears: "3+ Years",
  phone: "+91 8130173677",
  email: "SV7179109@GMAIL.COM",
  address: "B101, 4th Floor, Flat No. 4, Triveni Complex",
  locationDetails: "New Delhi, India",
  bioSummary:
    "Creative and detail-oriented Graphic Designer with 3 years of experience in branding, print design, and digital media. Skilled at transforming concepts into visually appealing designs that align with client goals and market trends.",
  fullBio: [
    "Creative and detail-oriented Graphic Designer with 3 years of experience in branding, print design, and digital media. Skilled at transforming concepts into visually appealing designs that align with client goals and market trends.",
    "Proficient in Adobe Creative Suite and other industry-standard design tools. Highly adaptable at managing multiple projects simultaneously, collaborating with cross-functional creative teams, and delivering high-quality results strictly within deadlines.",
  ],
  socials: [
    {
      name: "Behance",
      url: "https://www.behance.net/shubhamverma46",
      icon: "Behance",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/shubham-verma-874841251/",
      icon: "Linkedin",
    },
  ],
};

export const SKILLS: Skill[] = [
  {
    id: "photoshop",
    name: "Adobe Photoshop",
    code: "Ps",
    category: "Creative Suite",
    proficiency: 96,
    years: "3+ Years",
    brandColor: "#31A8FF",
    bgTint: "rgba(49, 168, 255, 0.12)",
    description:
      "Advanced photo compositing, high-end commercial retouching, key visual development, and digital matte painting.",
    specialties: [
      "Digital Matte Compositing",
      "Commercial Photo Retouching",
      "Complex Masking & Clipping",
      "Color Grading & LUT Creation",
    ],
  },
  {
    id: "illustrator",
    name: "Adobe Illustrator",
    code: "Ai",
    category: "Creative Suite",
    proficiency: 94,
    years: "3+ Years",
    brandColor: "#FF9A00",
    bgTint: "rgba(255, 154, 0, 0.12)",
    description:
      "Vector brand identity systems, geometric logomarks, typography design, iconography, and infinite resolution assets.",
    specialties: [
      "Vector Logo Systems",
      "Brand Style Guides",
      "Custom Typography",
      "Apparel Graphic Vectors",
    ],
  },
  {
    id: "indesign",
    name: "Adobe InDesign",
    code: "Id",
    category: "Vector & Layout",
    proficiency: 95,
    years: "3+ Years",
    brandColor: "#FF3366",
    bgTint: "rgba(255, 51, 102, 0.12)",
    description:
      "Editorial layout, publication typesetting, multi-page book covers & interior page architecture, and pre-press prep.",
    specialties: [
      "Book Cover & Spine Formatting",
      "Master Pages & Grid Systems",
      "Print Bleed & Die-cut Prep",
      "Interactive Digital Publications",
    ],
  },
  {
    id: "coreldraw",
    name: "CorelDRAW",
    code: "Cd",
    category: "Vector & Layout",
    proficiency: 90,
    years: "3+ Years",
    brandColor: "#10B981",
    bgTint: "rgba(16, 185, 129, 0.12)",
    description:
      "Large-format printing layouts, signage vectors, precision cutting plotter files, offset packaging die-lines.",
    specialties: [
      "Large-Format Flex & Vinyl",
      "Packaging Die-line Precision",
      "Offset Printing Pre-Press",
      "Signage & Billboard Layouts",
    ],
  },
  {
    id: "xd",
    name: "Adobe XD",
    code: "Xd",
    category: "Vector & Layout",
    proficiency: 88,
    years: "3+ Years",
    brandColor: "#FF61F6",
    bgTint: "rgba(255, 97, 246, 0.12)",
    description:
      "Modern UI/UX prototypes, interactive app & web wireframing, component-based design systems, and responsive screen flows.",
    specialties: [
      "Interactive Wireframing",
      "UI Component Libraries",
      "Mobile App User Flows",
      "Developer Handoff Specs",
    ],
  },
  {
    id: "premiere",
    name: "Adobe Premiere Pro",
    code: "Pr",
    category: "Creative Suite",
    proficiency: 85,
    years: "1 Year",
    brandColor: "#0066FF",
    bgTint: "rgba(0, 102, 255, 0.12)",
    description:
      "Professional video editing, dynamic social media reels, promotional teasers, color correction, sound synchronization, and engaging narrative pacing.",
    specialties: [
      "Promotional Brand Videos",
      "Reels & Short-Form Content",
      "Color Correction & Grading",
      "Audio Sync & Beat Pacing",
    ],
  },
];

export const PROJECTS: Project[] = [
  // 1. Editorial & Book Cover Design (Published by BlueRose & Authors)
  {
    id: "mindful-momentum-book",
    title: "Mindful Momentum: Navigating Procrastination",
    category: "Editorial & Book Cover Design",
    client: "Sushant Rajput / BlueRose ONE",
    year: "2024",
    description:
      "Full jacket, spine, and back cover editorial design for bestselling author Sushant Rajput, featuring surreal conceptual symbolism, custom typography, and print-ready barcode architecture.",
    challenge:
      "Balancing the psychological weight of overthinking and procrastination with an accessible, executive-ready aesthetic for corporate and self-help readers.",
    solution:
      "Created a minimalist surreal visual metaphor—a floating reflective crimson sphere atop a tailored suit—accented by a rich forest green backdrop, clean editorial serif typography, and precise spine calculations.",
    tools: ["Adobe Photoshop", "Adobe InDesign"],
    image: "/projects/book-mindful-momentum.jpg",
    featured: true,
    colorPalette: ["#1D3320", "#D82A3A", "#F4F4F4", "#111111"],
    metrics: { label: "Author Status", value: "Amazon Bestseller" },
    specs: "Full Dust Jacket & Paperback Wrap • 300 DPI CMYK",
  },
  {
    id: "great-gatsby-classic-cover",
    title: "The Great Gatsby – Collector's Edition",
    category: "Editorial & Book Cover Design",
    client: "BlueRose ONE Classic Literature",
    year: "2024",
    description:
      "Deluxe gilded art-deco book jacket and spine for F. Scott Fitzgerald's twentieth-century masterpiece, featuring intricate vintage gold filigree, city skyline silhouette, and luxury foil stamping aesthetics.",
    challenge:
      "Reimagining one of the most famous literary titles in history while honoring 1920s Jazz Age visual luxury.",
    solution:
      "Engineered an elaborate geometric Art Deco border frame framing a sophisticated gentleman's silhouette against a radiant nocturnal Manhattan skyline, finished with metallic gold typography.",
    tools: ["Adobe Photoshop", "Adobe InDesign", "Adobe Illustrator"],
    image: "/projects/book-great-gatsby.jpg",
    featured: true,
    colorPalette: ["#0B0B0D", "#D4AF37", "#E5C158", "#332717"],
    metrics: { label: "Edition", value: "Editor's Selection" },
    specs: "Hardcover Foil Stamped • Gold Metallic Ink Profile",
  },
  {
    id: "whispers-ancient-relics-cover",
    title: "The Whispers of the Ancient Relics",
    category: "Editorial & Book Cover Design",
    client: "Dr. Rohan Gupta & Mr. Ninad Nagarkar",
    year: "2024",
    description:
      "Atmospheric historical mystery & romance cover design with a nocturnal ocean vista, glowing full moon, and emotive portraiture under an ethereal teal night sky.",
    challenge:
      "Merging romantic emotional intimacy with an ancient maritime mystery atmosphere in a single captivating cover scene.",
    solution:
      "Crafted layered digital character artwork bathed in cool moonlight reflections, complemented by dramatic bold condensed title typography.",
    tools: ["Adobe Photoshop", "Adobe InDesign"],
    image: "/projects/book-whispers-ancient-relics.jpg",
    featured: false,
    colorPalette: ["#081820", "#1C3C46", "#C7D8DE", "#EFE5D5"],
    metrics: { label: "Format", value: "Paperback Release" },
    specs: "Front Cover & Spine Layout • Matte Lamination",
  },
  {
    id: "the-devil-head-cover",
    title: "The Devil Head: Dark Psychological Horror",
    category: "Editorial & Book Cover Design",
    client: "Syren Ravenwood",
    year: "2024",
    description:
      "Visceral dark thriller and horror cover art featuring a distressed dripping skull illustration, radiant crimson halo, and textured grunge typography.",
    challenge:
      "Creating an intensely arresting, spine-chilling visual hook designed to command reader attention in crowded online thriller catalogs.",
    solution:
      "Combined stark high-contrast black, white, and blood-red ink splatters with distressed hand-painted typography and textured halo geometry.",
    tools: ["Adobe Photoshop", "Adobe Illustrator"],
    image: "/projects/book-devil-head.jpg",
    featured: false,
    colorPalette: ["#0A0A0A", "#E62434", "#FFFFFF", "#501217"],
    metrics: { label: "Genre", value: "Dark Thriller" },
    specs: "High-Contrast Spot UV • Soft-Touch Finish",
  },
  {
    id: "into-your-world-cover",
    title: "Into Your World: Fantasy Romance",
    category: "Editorial & Book Cover Design",
    client: "Meena / BlueRose Publishers",
    year: "2024",
    description:
      "Enchanting romantic fantasy novel cover showcasing ethereal emerald arcane lightning, mystical glowing characters, and bespoke serif typography.",
    challenge:
      "Capturing the electric chemistry of two magical protagonists while maintaining magical realism and commercial fantasy appeal.",
    solution:
      "Executed multi-layer digital lighting, glowing emerald particle effects, and elegant romantic title typography designed for digital thumbnail visibility.",
    tools: ["Adobe Photoshop", "Adobe InDesign"],
    image: "/projects/book-into-your-world.jpg",
    featured: false,
    colorPalette: ["#061E14", "#10B981", "#34D399", "#E0F2FE"],
    metrics: { label: "Reach", value: "Pan-India Release" },
    specs: "300 DPI CMYK • Gloss Lamination Ready",
  },
  {
    id: "justice-in-the-shadows-cover",
    title: "Justice in The Shadows",
    category: "Editorial & Book Cover Design",
    client: "Harsh Bansal / BlueRose",
    year: "2024",
    description:
      "Intense noir vigilante crime thriller cover featuring high-contrast black-and-white Venetian blind shadows and impactful typography.",
    challenge:
      "Conveying raw emotional trauma and fierce retribution without graphic violence, maintaining dignified editorial gravity.",
    solution:
      "Utilized cinematic chiaroscuro shadow banding over an obscured face, punctuated by crisp classic serif titles and glowing 5-star editor badge.",
    tools: ["Adobe Photoshop", "Adobe InDesign"],
    image: "/projects/book-justice-shadows.jpg",
    featured: false,
    colorPalette: ["#000000", "#FFFFFF", "#F59E0B", "#1F2937"],
    metrics: { label: "Critical Rating", value: "5-Star Editor's Note" },
    specs: "Monochrome Matte Finish • Spot Gloss Title",
  },
  {
    id: "the-velmore-series-cover",
    title: "The Velmore Series: The Cursed Unborn",
    category: "Editorial & Book Cover Design",
    client: "Tina Boyd / BlueRose",
    year: "2024",
    description:
      "Gothic dark fantasy novel cover featuring an enchanted mountain cottage, haunting violet mist, wolves, and ornate Victorian typography.",
    challenge:
      "Building a rich narrative landscape that tells an entire multi-layered story before the reader opens the first page.",
    solution:
      "Composed a deep atmospheric landscape in royal purple and midnight hues with glowing interior windows and custom fairytale calligraphic typography.",
    tools: ["Adobe Photoshop", "Adobe InDesign"],
    image: "/projects/book-velmore-series.jpg",
    featured: false,
    colorPalette: ["#160824", "#6B21A8", "#A855F7", "#F3E8FF"],
    metrics: { label: "Series", value: "Book 1 Fantasy" },
    specs: "Paperback Perfect Bound • Standard Trade Spec",
  },
  {
    id: "the-garden-flowers-cover",
    title: "The Garden Flowers: A Tale of Growth",
    category: "Editorial & Book Cover Design",
    client: "Lawrence Quigley / BlueRose ONE",
    year: "2024",
    description:
      "Minimalist fine-art watercolor illustration cover for an inspirational spiritual memoir, featuring expressive brushwork and handwritten script titles.",
    challenge:
      "Evoking tranquility, surrender, and spiritual contemplation through fine-art restraint rather than loud commercial graphics.",
    solution:
      "Curated an expressive monochrome ink-wash floral still-life paired with organic fluid script and clean editorial subtitles.",
    tools: ["Adobe Photoshop", "Adobe InDesign"],
    image: "/projects/book-garden-flowers.jpg",
    featured: false,
    colorPalette: ["#18181B", "#71717A", "#D4D4D8", "#FAFAFA"],
    metrics: { label: "Genre", value: "Spiritual Memoir" },
    specs: "Textured Uncoated Stock • 300 DPI Fine Art Print",
  },
  {
    id: "the-platinum-conspiracy-cover",
    title: "The Platinum Conspiracy",
    category: "Editorial & Book Cover Design",
    client: "Stuart Morris / BlueRose",
    year: "2024",
    description:
      "Industrial action-thriller book cover showcasing a towering blazing petrochemical refinery, molten embers, and a fugitive silhouette couple.",
    challenge:
      "Communicating cinematic geopolitical espionage stakes and perilous action with striking shelf presence.",
    solution:
      "Blended fiery molten furnace lighting against cold alpine peaks, highlighted by embossed dual-tone metallic platinum and copper title lettering.",
    tools: ["Adobe Photoshop", "Adobe InDesign"],
    image: "/projects/book-platinum-conspiracy.jpg",
    featured: true,
    colorPalette: ["#18100C", "#F97316", "#EA580C", "#94A3B8"],
    metrics: { label: "Print Volume", value: "National Distribution" },
    specs: "Embossed Title • Spot UV Foil Treatment",
  },

  // 2. Poster & Flyer Design
  {
    id: "spiderman-movie-poster-showcase",
    title: "Spider-Man: No Way Home – City Bus Shelter Showcase",
    category: "Poster & Flyer Design",
    client: "Marvel Studios / Sony Pictures Promo Campaign",
    year: "2023",
    description:
      "High-impact outdoor city shelter backlit billboard featuring high-voltage glowing oculars, kinetic smoke overlays, and 3D textured superhero typography.",
    challenge:
      "Rendering ultra-high resolution illuminated key visuals that maintain deep contrast under night-time urban lighting.",
    solution:
      "Engineered high-contrast color grading with intense cyan optic flares, rich crimson suit textures, and realistic backlit street-level mockup presentation.",
    tools: ["Adobe Photoshop", "Adobe Illustrator"],
    image: "/projects/poster-spiderman.jpg",
    featured: true,
    colorPalette: ["#0B0D14", "#EF4444", "#06B6D4", "#F8FAFC"],
    metrics: { label: "Display Size", value: "6 Sheet Bus Shelter" },
    specs: "Ultra HD Key Visual • City Lights Backlit Spec",
  },
  {
    id: "godzilla-movie-poster",
    title: "Godzilla: King of the Monsters – Key Visual Poster",
    category: "Poster & Flyer Design",
    client: "Warner Bros. / Legendary Pictures Concept Campaign",
    year: "2023",
    description:
      "Massive scale cinematic blockbuster poster featuring the iconic atomic breath blast illuminating a stormy metropolis and fighter jet silhouettes.",
    challenge:
      "Balancing epic sense of scale, complex storm textures, lightning bolts, and dense urban destruction without cluttering title legibility.",
    solution:
      "Composed an imposing low-angle perspective with piercing vertical cyan laser lighting, fiery atmospheric meteor trails, and heavyweight theatrical billing credits.",
    tools: ["Adobe Photoshop", "Adobe Illustrator"],
    image: "/projects/poster-godzilla.jpg",
    featured: true,
    colorPalette: ["#021226", "#00B4D8", "#FF4500", "#E2E8F0"],
    metrics: { label: "Display Format", value: "Theatrical One-Sheet 27x40\"" },
    specs: "300 DPI IMAX & Dolby Cinema Theatrical Poster",
  },
  {
    id: "juice-factory-fresh-poster",
    title: "Juice Factory – 'Best' 100% Natural Fresh Citrus",
    category: "Poster & Flyer Design",
    client: "Juice Factory Beverage Co.",
    year: "2023",
    description:
      "Vibrant, thirst-quenching commercial advertising poster featuring a creative orange-slice cup composite, dynamic splash photography, and playful drip lettering.",
    challenge:
      "Creating a surreal yet completely appetizing product concept where fruit directly becomes the beverage vessel.",
    solution:
      "Engineered seamless photo manipulation turning fresh orange wedges into a glowing teacup with water splashes, set against a radiant warm orange studio backdrop.",
    tools: ["Adobe Photoshop", "Adobe Illustrator"],
    image: "/projects/poster-juice-factory.jpg",
    featured: false,
    colorPalette: ["#EA580C", "#FB923C", "#FACC15", "#16A34A"],
    metrics: { label: "Product Campaign", value: "Print & In-Store POP" },
    specs: "A2 Commercial Poster & Social Display Kit",
  },
  {
    id: "nba-player-week-poster",
    title: "NBA Player of the Week – Typography Editorial Poster",
    category: "Poster & Flyer Design",
    client: "Sports Illustrated / Basketball League Media",
    year: "2023",
    description:
      "Contemporary athletic poster combining low-dribble player photography with bold layered typographic hierarchy, clean geometric framing, and sports statistics.",
    challenge:
      "Integrating large typographic elements behind and in front of an active athlete while maintaining crisp dimensional depth.",
    solution:
      "Executed clean athlete cutout masking paired with high-impact Swiss condensed lettering, official NBA insignia, and a gallery-ready gallery frame presentation.",
    tools: ["Adobe Photoshop", "Adobe InDesign"],
    image: "/projects/poster-nba-player.jpg",
    featured: false,
    colorPalette: ["#FFFFFF", "#EF4444", "#1E293B", "#F59E0B"],
    metrics: { label: "Featured Stat", value: "18 PPG Weekly Leader" },
    specs: "24x36\" Gallery Print • CMYK 300 DPI",
  },

  // 3. Social Media Creatives
  {
    id: "mercedes-f1-hamilton-social",
    title: "Mercedes-AMG Petronas F1 Team – Lewis Hamilton #44",
    category: "Social Media Creatives",
    client: "Motorsport & F1 Digital Campaign",
    year: "2024",
    description:
      "High-voltage Formula 1 race weekend promotional creative showcasing Lewis Hamilton, George Russell, and the Mercedes W14 racecar with glowing teal rim light arcs.",
    challenge:
      "Balancing multiple driver portraits, dynamic racecar imagery, sponsor logos, and official F1 branding in a square format.",
    solution:
      "Designed a symmetrical vertical layout with glowing Petronas green neon halos, carbon fiber textures, and bold racing typography.",
    tools: ["Adobe Photoshop", "Adobe Illustrator"],
    image: "/projects/social-f1-hamilton.jpg",
    featured: true,
    colorPalette: ["#000000", "#00A19B", "#FF1801", "#FFFFFF"],
    metrics: { label: "Engagement", value: "Top F1 Race Week Post" },
    specs: "1080x1080 Feed & 1080x1920 Story Template",
  },
  {
    id: "solitude-in-yellow-art-poster",
    title: "Solitude & Bloom – Surrealist Yellow Art Poster",
    category: "Poster & Flyer Design",
    client: "Contemporary Botanical & Fashion Art Series",
    year: "2024",
    description:
      "Striking canary yellow contemporary fine-art poster blending monochrome portraiture, tropical green foliage, minimalist geometric line framing, and sunlight shadow casts.",
    challenge:
      "Achieving optical balance between a radiant high-saturation yellow background, delicate botanical contours, and subtle facial chiaroscuro.",
    solution:
      "Constructed a dual-tone composition featuring pure white vector framing, organic monstera-leaf cutouts, and realistic natural ambient lighting within an oak gallery frame.",
    tools: ["Adobe Photoshop", "Adobe Illustrator"],
    image: "/projects/poster-solitude-yellow.jpg",
    featured: true,
    colorPalette: ["#EAB308", "#1A1A1A", "#16A34A", "#F8FAFC"],
    metrics: { label: "Art Style", value: "Surreal Botanical" },
    specs: "Gallery Framed Print • 300 DPI Archival Art Spec",
  },

  // 4. Digital Marketing Creatives & Visual Concepts
  {
    id: "the-gaming-project-cloud",
    title: "The Gaming Project – Next-Gen Cloud Platform UI",
    category: "Digital Marketing Creatives",
    client: "The Gaming Project / Cloud E-Sports",
    year: "2024",
    description:
      "Futuristic gaming platform hero landing page design and concept art featuring armored sci-fi Spartan helmet, battle smoke, and modern gaming HUD elements.",
    challenge:
      "Creating an immersive, AAA gaming visual identity that proves the platform's high-performance cloud streaming capabilities.",
    solution:
      "Crafted a cinematic matte compositing backdrop, angular sci-fi display typography, sleek navigation controls, and glowing visor reflections.",
    tools: ["Adobe Photoshop", "Adobe Illustrator", "UI Layout"],
    image: "/projects/digital-gaming-project.jpg",
    featured: true,
    colorPalette: ["#12161A", "#38BDF8", "#F59E0B", "#E2E8F0"],
    metrics: { label: "Interface", value: "Cloud Web UI" },
    specs: "1920x1080 Desktop Web & Hero Banner",
  },
  {
    id: "cyber-roshi-anime-streetwear",
    title: "Cyber Roshi: Kame House – Pop-Art Streetwear Poster",
    category: "Digital Marketing Creatives",
    client: "Urban Streetwear & Anime Apparel",
    year: "2024",
    description:
      "Contemporary hanging art poster mockup featuring Master Roshi reimagined in luxury streetwear, designer sunglasses, and anime graffiti against high-voltage magenta.",
    challenge:
      "Synthesizing classic anime nostalgia with modern luxury fashion culture and translating it into a gallery-ready hanging print format.",
    solution:
      "Constructed razor-sharp vector cel shading, intricate tattoo art of Goku and Krillin, and custom kanji drips, rendered within an authentic hanging studio mockup.",
    tools: ["Adobe Illustrator", "Adobe Photoshop"],
    image: "/projects/digital-anime-art.jpg",
    featured: true,
    colorPalette: ["#F43F5E", "#1E1B4B", "#71717A", "#F5F5F4"],
    metrics: { label: "Display Style", value: "Hanging Art Poster" },
    specs: "Gallery Studio Mockup • 300 DPI Fine Art Print",
  },
  {
    id: "stranger-things-eleven-vector",
    title: "Stranger Things: Eleven – Pop-Art Vector Portrait",
    category: "Digital Marketing Creatives",
    client: "Pop Culture & Digital Vector Series",
    year: "2024",
    description:
      "High-impact pop-art vector portrait of Eleven from Stranger Things featuring iconic telekinetic nosebleed, dual-tone cyan & crimson split lighting, and razor-sharp cel shading.",
    challenge:
      "Translating subtle human facial nuances and emotional intensity into minimalist, crisp vector shapes while preserving instant character likeness.",
    solution:
      "Constructed meticulous multi-layered vector tones in Adobe Illustrator with dramatic split lighting—cold teal shadow edge contrasting against a striking crimson backdrop.",
    tools: ["Adobe Illustrator", "Adobe Photoshop"],
    image: "/projects/digital-stranger-things-eleven.jpg",
    featured: true,
    colorPalette: ["#1E222D", "#E11D48", "#38BDF8", "#FDE047"],
    metrics: { label: "Art Style", value: "Vector Pop-Art" },
    specs: "100% Vector Precision • High-Res Art Print",
  },
];

export const WORK_EXPERIENCE: Experience[] = [
  {
    id: "bluerose-publishers",
    company: "BLUEROSE PUBLISHERS PVT. LTD.",
    role: "Senior Book Designer & Editorial Specialist",
    period: "2024–2025",
    dateRange: "September to September",
    location: "New Delhi, India",
    accentColor: "#FF2A55",
    summary:
      "Led end-to-end book jacket and interior layout design for national and international authors, collaborating between editorial teams, authors, and print production.",
    responsibilities: [
      {
        title: "Design Team – Cover & Interior Design",
        items: [
          "Conceptualized and designed front covers, back covers, and calculated precise book spines for paperback and hardcover editions.",
          "Maintained meticulous consistency in typography, font pairing, margins, running headers, and footnote hierarchies.",
          "Prepared print-ready PDF files for publishing houses and industrial printing facilities, ensuring 100% pre-press compliance.",
        ],
      },
      {
        title: "Author Relations / Customer Service",
        items: [
          "Communicated directly with authors regarding project status, aesthetic expectations, and publishing timelines.",
          "Handled creative queries, constructive feedback loops, and design revisions with empathy and precision.",
          "Assisted first-time and veteran authors throughout the entire publishing and print production lifecycle.",
        ],
      },
    ],
    tools: [
      "Adobe InDesign",
      "Adobe Photoshop",
      "Adobe Illustrator",
      "Typography Systems",
    ],
  },
  {
    id: "ascend-media",
    company: "ASCEND MEDIA",
    role: "Graphic & Digital Media Designer",
    period: "2022–2023",
    dateRange: "August to July",
    location: "New Delhi, India",
    accentColor: "#00F0FF",
    summary:
      "Core creative designer executing comprehensive brand identities, commercial marketing collateral, advertising campaigns, and multimedia assets.",
    responsibilities: [
      {
        title: "Creative & Design Work",
        items: [
          "Conceptualized and created visual designs that communicate brand messages with powerful emotional resonance.",
          "Developed complete logos, brand identities, brochures, corporate flyers, event posters, packaging, and digital assets.",
          "Designed highly engaging content for social media channels, websites, advertisements, and multi-channel marketing campaigns.",
        ],
      },
      {
        title: "Technical Skills & Tools",
        items: [
          "Leveraged Adobe Photoshop, Illustrator, InDesign, After Effects, and Canva across production pipelines.",
          "Prepared artwork files with exact color profiles (CMYK / RGB / Pantone) for flawless print and digital production.",
          "Followed contemporary global design trends, advanced typography rules, and psychological color theory.",
        ],
      },
    ],
    tools: [
      "Adobe Photoshop",
      "Adobe Illustrator",
      "Adobe InDesign",
      "Adobe After Effects",
      "Canva Pro",
      "Print Production",
    ],
  },
];

export const FREELANCE_EXPERIENCE: FreelanceProject[] = [
  {
    id: "freelance-apparel",
    title: "Custom T-Shirts & Merchandise Graphics",
    category: "Apparel & Merchandise",
    client: "Independent Streetwear Labels & Creators",
    year: "2023–2024",
    description:
      "Designed custom oversized streetwear apparel graphics, vector badges, distressed illustrations, and high-density screen-print color separations for fashion startups.",
    deliverables: [
      "Screen-Print Color Separations",
      "Vector Tech Packs",
      "Apparel Mockup Showcases",
      "Custom Woven Tag & Packaging Graphics",
    ],
    tag: "Streetwear & Fashion",
  },
  {
    id: "freelance-branding",
    title: "Startup Logos & Brand Identity Systems",
    category: "Brand Systems",
    client: "Emerging Tech, Hospitality & D2C Brands",
    year: "2022–2025",
    description:
      "Created versatile logos, typographic marks, color guidelines, and brand design kits that empower startups to stand out in competitive digital landscapes.",
    deliverables: [
      "Primary & Secondary Logomarks",
      "Typography & Color Hierarchy",
      "Comprehensive Brand Style Guide",
      "Social Media Launch Kit",
    ],
    tag: "Brand Architecture",
  },
  {
    id: "freelance-social",
    title: "Social Media Posts, Banners & Marketing Creatives",
    category: "Digital Growth",
    client: "E-Commerce Stores & Performance Agencies",
    year: "2023–2025",
    description:
      "Developed high-converting Instagram carousel ads, promotional story graphics, event banners, and digital display assets designed for peak engagement.",
    deliverables: [
      "Meta Carousel Ads",
      "Animated Promo Stories",
      "Google Display Banner Suites",
      "Email Marketing Visual Headers",
    ],
    tag: "Social & Performance",
  },
  {
    id: "freelance-visual-identity",
    title: "Visual Identities Aligned with Brand Aesthetics",
    category: "Aesthetic Direction",
    client: "Creative Studios & Lifestyle Brands",
    year: "2022–2024",
    description:
      "Crafted cohesive visual universes blending editorial minimalism with bold experimental typography, crafting distinct emotional identities for boutique brands.",
    deliverables: [
      "Brand Aesthetic Moodboards",
      "Art Direction Guidelines",
      "Packaging & Unboxing Collateral",
      "Print Stationery Suites",
    ],
    tag: "Visual Storytelling",
  },
];

export const EDUCATION: Education[] = [
  {
    id: "arena-animation",
    institution: "ARENA ANIMATION",
    degree: "Diploma in Animation & Visual Media",
    period: "2023–2024",
    type: "Professional Diploma",
    description:
      "Specialized diploma focusing on advanced visual storytelling, motion dynamics, video editing, compositing, and digital media production.",
    courses: [
      "Motion Graphics & Visual Effects",
      "Video Editing & Audio Post-Production",
    ],
    status: "Completed with Distinction",
  },
  {
    id: "dice-academy",
    institution: "DICE ACADEMY",
    degree: "Diploma in Graphic & Web Design",
    period: "2021–2022",
    type: "Professional Diploma",
    description:
      "Comprehensive foundational diploma covering graphic design theory, typography, branding systems, vector illustration, and print production workflows.",
    courses: [
      "Graphic Design Fundamentals & Color Theory",
      "Typography & Editorial Grid Architecture",
      "Vector Illustration & Brand Identity",
      "Print Media & Pre-Press Production",
    ],
    status: "Completed with Excellence",
  },
];

export const ACHIEVEMENTS = [
  { number: "3+", label: "Years Experience", detail: "Professional Industry Work" },
  { number: "50+", label: "Projects Completed", detail: "Print, Brand & Digital" },
  { number: "8", label: "Specialized Disciplines", detail: "From Books to Streetwear" },
  { number: "100%", label: "Client Satisfaction", detail: "On-Time Pre-Press Delivery" },
];

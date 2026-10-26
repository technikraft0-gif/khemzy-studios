import type { Project, ProjectCategory } from "../types";

export const portfolioCategories: ProjectCategory[] = [
  "Weddings",
  "Portraits",
  "Fashion",
  "Commercial",
  "Events",
];

export const portfolioProjects: Project[] = [
  {
    slug: "wedding-stories",
    title: "Eternal Radiance — The Adeniyi Wedding",
    category: "Weddings",
    year: "2026",
    location: "Eko Atlantic, Lagos",
    client: "Tobi & Folake Adeniyi",
    cover:
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1800&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1800&q=85",
      "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=1600&q=85",
    ],
    excerpt:
      "A cinematic documentation of a coastal Lagos wedding filled with natural light, deep emotion, and unfiltered celebration.",
    description:
      "Every wedding carries an intimate rhythm. Over a two-day celebration spanning a traditional engagement and coastal reception, we combined editorial composition with documentary observation to capture tears, spontaneous dances, and heirloom portraits that transcend fleeting trends.",
    deliverables: [
      "Full 2-Day Coverage (2 Lead Photographers)",
      "Curated Master Gallery of 650+ Retouched Photographs",
      "Handcrafted Italian Linen Heirloom Album",
      "48-Hour Sneak Peek Preview Gallery",
    ],
    featured: true,
    stats: [
      { label: "Guest Count", value: "350+" },
      { label: "Deliverables", value: "700+ Frames" },
      { label: "Turnaround", value: "3 Weeks" },
    ],
    testimonial: {
      quote:
        "Khemzy Studios didn't just take pictures—they documented how the day actually felt. Every time we flip through our album, we relive the joy, the tears, and the warmth.",
      author: "Folake Adeniyi",
      role: "Bride",
    },
  },
  {
    slug: "portrait-studies",
    title: "Quiet Command — Executive & Creative Portraits",
    category: "Portraits",
    year: "2026",
    location: "Khemzy Studios, Victoria Island",
    client: "Founders & Creative Directors Collective",
    cover:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1800&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1800&q=85",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=1600&q=85",
    ],
    excerpt:
      "Sculptural studio portraits celebrating identity, presence, and personal gravity with custom lighting design.",
    description:
      "Portraiture is an intimate dialogue between subject and photographer. Through considered continuous lighting, analog textures, and meticulous art direction, these studies stripped away corporate stiffness to spotlight genuine authority and magnetic character.",
    deliverables: [
      "Multi-Look Studio Sessions (3 Wardrobe Changes)",
      "High-End Frequency Separation & Color Grading",
      "Ultra-Resolution Commercial Usage Rights",
      "Express 5-Day Delivery",
    ],
    featured: true,
    stats: [
      { label: "Lighting Setups", value: "4 Distinct Moods" },
      { label: "Retouched Assets", value: "35 Frames" },
      { label: "Print Format", value: "Large Format Ready" },
    ],
    testimonial: {
      quote:
        "The team made me feel completely relaxed while steering every nuance of light and posture. The final portraits are by far the strongest visual representation of my brand.",
      author: "David Okafor",
      role: "Fintech Founder & Angel Investor",
    },
  },
  {
    slug: "fashion-editorial",
    title: "Nomad in Ochre — Modern African Haute Couture",
    category: "Fashion",
    year: "2026",
    location: "Badagry Dunes, Lagos",
    client: "Maison d'Or Seasonal Lookbook",
    cover:
      "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=1800&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=1800&q=85",
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?auto=format&fit=crop&w=1600&q=85",
    ],
    excerpt:
      "High-fashion editorial combining avant-garde silhouettes with raw natural landscapes and bold warm palettes.",
    description:
      "Commissioned for a pan-African luxury brand, this campaign explored tactile woven silks and structural drapery against sweeping coastal textures. From concept moodboarding to on-set creative direction, the focus remained on movement, silhouette tension, and cinematic framing.",
    deliverables: [
      "Full Day Location Production",
      "Art Direction & Call-Sheet Management",
      "Print Editorial & Billboard Ready Assets",
      "Social-First Motion B-Roll & Stills",
    ],
    featured: true,
    stats: [
      { label: "Looks Photographed", value: "12 Ensembles" },
      { label: "Placements", value: "Vogue Africa & Billboards" },
      { label: "Color Palette", value: "Ochre & Warm Sienna" },
    ],
    testimonial: {
      quote:
        "Khemzy Studios delivered an international caliber campaign. Their visual sharpness and storytelling instincts elevated our entire seasonal collection.",
      author: "Amara Nwachukwu",
      role: "Creative Director, Maison d'Or",
    },
  },
  {
    slug: "brand-essentials",
    title: "Artisanal Luxury — Craft & Space Campaign",
    category: "Commercial",
    year: "2026",
    location: "Ikoyi, Lagos",
    client: "Aura Home & Botanical Living",
    cover:
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1800&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1800&q=85",
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1600&q=85",
    ],
    excerpt:
      "Tactile commercial imagery engineered to communicate craftsmanship, materiality, and contemporary lifestyle value.",
    description:
      "Modern brands require visual assets that evoke desire instantly. We crafted clean, atmospheric product compositions highlighting subtle textures, hand-poured glass, and architectural interiors for e-commerce, digital ads, and luxury packaging.",
    deliverables: [
      "30 Core SKU Studio Compositions",
      "Lifestyle In-Situ Environmental Imagery",
      "Optimized Web & Print Packaging Assets",
      "Comprehensive Brand Photography Style Guide",
    ],
    featured: true,
    stats: [
      { label: "Product SKUs", value: "24 Items" },
      { label: "Conversion Lift", value: "+38%" },
      { label: "Format", value: "TIFF + WebP Ready" },
    ],
    testimonial: {
      quote:
        "Our digital store conversions immediately climbed following the launch of these photos. The attention to light and organic materials is second to none.",
      author: "Kelechi Umeh",
      role: "Head of Marketing, Aura Home",
    },
  },
  {
    slug: "heritage-nights",
    title: "Gala of Luminescence — Cultural & Heritage Celebration",
    category: "Events",
    year: "2026",
    location: "Victoria Island, Lagos",
    client: "West Africa Arts Foundation",
    cover:
      "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1800&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1800&q=85",
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1600&q=85",
    ],
    excerpt:
      "Atmospheric coverage of an exclusive arts benefit honoring African cinema and literature masters.",
    description:
      "Documenting high-profile cultural galas demands discretion, rapid reaction times, and an eye for ambient grandeur. We captured the electric atmosphere, VIP portraits, and heartfelt keynote moments under dimmed, candlelit banquet halls without intrusive flash disruptions.",
    deliverables: [
      "Live On-Site Press Delivery within 3 Hours",
      "Complete 500+ Retouched Event Archive",
      "VIP Red Carpet Photo Call Coverage",
    ],
    featured: false,
    stats: [
      { label: "Guests", value: "500 VIPs" },
      { label: "Press Turnaround", value: "3 Hours" },
    ],
    testimonial: {
      quote:
        "Seamless, polite, and extraordinary talent. The photos were published in major outlets the very next morning.",
      author: "Bolanle Cole",
      role: "Foundation Director",
    },
  },
];

export function getPortfolioProject(slug: string): Project | undefined {
  return portfolioProjects.find((project) => project.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return portfolioProjects.filter((project) => project.featured);
}

export function getProjectsByCategory(category: string): Project[] {
  if (!category || category === "all") return portfolioProjects;
  return portfolioProjects.filter(
    (project) => project.category.toLowerCase() === category.toLowerCase()
  );
}

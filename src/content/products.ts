export interface ProductData {
  name: string;
  chemicalFormula: string;
  cas: string;
  subtitle: string;
  heroTitle: string;
  email: string;
  supplyAbility: string;
  images: {
    hero: string;
    product: string;
  };
  seo: {
    title: string;
    description: string;
    keywords: string;
  };
  specifications: { label: string; value: string }[];
  applications: {
    title: string;
    tag: string;
    desc: string;
    image: string;
  }[];
}

export const products: Record<string, ProductData> = {
  "sodium-thiosulfate": {
    name: "Sodium Thiosulfate",
    chemicalFormula: "Na₂S₂O₃",
    cas: "7772-98-7",
    heroTitle: "Premium Sodium Thiosulfate Supply Solutions",
    subtitle: "Global Supply Chain Partner | 99%+ Purity | Bulk Wholesale Pricing",
    email: "sales@sinopeakchem.com",
    supplyAbility: "400,000 MT+",
    images: {
      hero: "/images/hero-banner.webp",
      product: "/images/product-sodium.webp",
    },
    seo: {
      title: "Sodium Thiosulfate Supply Solutions China | 400,000MT Annual Supply Ability",
      description: "Top China Sodium Thiosulfate supplier with 400,000 MT annual supply ability. High purity Na2S2O3 integrated supply chain for global bulk supply.",
      keywords: "Sodium Thiosulfate China supplier, bulk sodium thiosulfate, Na2S2O3 supplier, strategic chemical partner, 400000MT supply ability",
    },
    specifications: [
      { label: "Appearance", value: "Colorless Monoclinic Crystal" },
      { label: "Purity (Na₂S₂O₃·5H₂O)", value: "≥ 99.0%" },
      { label: "Water Insoluble", value: "≤ 0.01%" },
      { label: "Sulfide (Na₂S)", value: "≤ 0.001%" },
      { label: "Iron (Fe)", value: "≤ 0.002%" },
      { label: "pH Value (50g/L solution)", value: "6.5 - 9.5" },
    ],
    applications: [
      {
        tag: "Largest Segment",
        title: "Water Treatment",
        desc: "Essential dechlorination agent for municipal and industrial water treatment facilities. Rapidly neutralizes chlorine residuals to protect aquatic ecosystems and pipeline infrastructure.",
        image: "/images/app-water.webp",
      },
      {
        tag: "High Demand",
        title: "Aquaculture & Pond Care",
        desc: "Crucial for water quality management in shrimp and fish farming. Rapidly neutralizes harmful chlorine, stabilizes pH, and detoxifies heavy metals to ensure a healthy aquatic environment.",
        image: "/images/app-aqua.webp",
      },
      {
        tag: "Mining Grade",
        title: "Mining & Gold Leaching",
        desc: "Critical reagent in cyanide leaching processes for gold extraction. Acts as a lixiviant alternative and cyanide detoxification agent for environmentally responsible mining operations.",
        image: "/images/app-mining.webp",
      },
      {
        tag: "Cost Effective",
        title: "Textile & Dyeing",
        desc: "Dechlorination agent after bleaching in textile processing. Prevents fabric damage and ensures consistent dye uptake for high-quality textile production.",
        image: "/images/app-textile.webp",
      },
    ],
  },
  "oxalic-acid": {
    name: "Oxalic Acid",
    chemicalFormula: "C₂H₂O₄",
    cas: "144-62-7",
    heroTitle: "Premium Oxalic Acid Supply Solutions",
    subtitle: "China Leading Supplier | Industrial Grade | Large Scale Production",
    email: "sales@sinopeakchem.com",
    supplyAbility: "100,000 MT+",
    images: {
      hero: "/images/hero-banner.webp",
      product: "/images/product-sodium.webp",
    },
    seo: {
      title: "Oxalic Acid Supply Solutions China | Bulk C2H2O4 Supplier 100,000MT",
      description: "Leading China Oxalic Acid supplier with 100,000 MT annual supply ability. High-purity C2H2O4 for industrial bulk supply. Competitive wholesale pricing.",
      keywords: "Oxalic Acid China, bulk oxalic acid supplier, C2H2O4 supplier, industrial grade oxalic acid, strategic chemical partner",
    },
    specifications: [
      { label: "Appearance", value: "White Crystalline Powder" },
      { label: "Purity", value: "≥ 99.6%" },
      { label: "Sulfate (SO₄)", value: "≤ 0.08%" },
      { label: "Ash Content", value: "≤ 0.01%" },
      { label: "Iron (Fe)", value: "≤ 0.002%" },
      { label: "Chloride (Cl)", value: "≤ 0.003%" },
    ],
    applications: [
      {
        tag: "Cleaning",
        title: "Rust Removal",
        desc: "Highly effective agent for removing rust from metal surfaces and stains from wood or stone.",
        image: "/images/app-water.webp",
      },
      {
        tag: "Textile",
        title: "Dyeing & Printing",
        desc: "Used as a mordant in dyeing processes and as a bleaching agent for straw and wood pulp.",
        image: "/images/app-textile.webp",
      },
      {
        tag: "Metallurgy",
        title: "Rare Earth Processing",
        desc: "Crucial reagent in the precipitation and separation of rare earth metals in mining operations.",
        image: "/images/app-mining.webp",
      },
      {
        tag: "Water Safety",
        title: "Aquaculture & Pond Care",
        desc: "Used for water treatment in aquaculture to maintain optimal conditions for aquatic life and control bacterial growth.",
        image: "/images/app-aqua.webp",
      },
    ],
  },
  "caustic-soda-cas-1310-73-2": {
    name: "Caustic Soda (Sodium Hydroxide)",
    chemicalFormula: "NaOH",
    cas: "1310-73-2",
    heroTitle: "Premium Caustic Soda Supply Solutions",
    subtitle: "Global Supply Chain Partner | Pearls & Flakes Available | 99%+ Purity",
    email: "sales@sinopeakchem.com",
    supplyAbility: "300,000 MT+",
    images: {
      hero: "/images/hero-banner.webp",
      product: "/images/product-sodium.webp",
    },
    seo: {
      title: "Caustic Soda Pearls & Flakes Supply Solutions China | 300,000MT Supply",
      description: "Leading China Caustic Soda supplier supplying high-purity Pearls and Flakes. 300,000 MT annual capacity. Integrated supply chain for global industrial bulk supply of NaOH (1310-73-2).",
      keywords: "Caustic Soda Pearls, Caustic Soda Flakes, Sodium Hydroxide supplier China, NaOH bulk supplier, CAS 1310-73-2, 300000MT supply ability",
    },
    specifications: [
      { label: "Available Forms", value: "Pearls (Beads) & Flakes" },
      { label: "Purity (NaOH)", value: "≥ 99.0% (Solid) / 50% (Liquid)" },
      { label: "Particle Size (Pearls)", value: "0.5mm - 1.5mm (Uniform)" },
      { label: "Na₂CO₃ Content", value: "≤ 0.5%" },
      { label: "NaCl Content", value: "≤ 0.03%" },
      { label: "Iron (Fe)", value: "≤ 50 ppm" },
    ],
    applications: [
      {
        tag: "Largest Segment",
        title: "Pulp & Paper Industry",
        desc: "Essential in the Kraft process for wood pulping and bleaching. Caustic soda dissolves lignin and facilitates fiber separation for high-quality paper production.",
        image: "/images/app-water.webp",
      },
      {
        tag: "High Demand",
        title: "Textile & Dyeing",
        desc: "Critical for cotton mercerization to improve strength and luster. Used in dyeing processes and fabric treatment for superior textile quality and color fastness.",
        image: "/images/app-textile.webp",
      },
      {
        tag: "Mining Grade",
        title: "Alumina Production",
        desc: "Core reagent in the Bayer process for extracting alumina from bauxite ore. Enables efficient leaching and precipitation for aluminum metal production.",
        image: "/images/app-mining.webp",
      },
      {
        tag: "Versatile",
        title: "Water Treatment & Chemical Manufacturing",
        desc: "Used for pH adjustment, water softening, and heavy metal removal. Also serves as a key intermediate in soap, detergent, and specialty chemical production.",
        image: "/images/app-pharma.webp",
      },
    ],
  },
};

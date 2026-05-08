export interface ProductData {
  name: string;
  chemicalFormula: string;
  cas: string;
  subtitle: string;
  heroTitle: string;
  email: string;
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
    heroTitle: "Premium Sodium Thiosulfate Manufacturer",
    subtitle: "Factory Direct | 99%+ Purity | Global Shipping",
    email: "sales@na2s2o3pro.com",
    images: {
      hero: "/images/hero-banner.webp",
      product: "/images/product-sodium.webp",
    },
    seo: {
      title: "Sodium Thiosulfate Manufacturer | High Purity Na2S2O3 Factory Direct",
      description: "Leading Sodium Thiosulfate manufacturer providing 99%+ purity Na2S2O3 for water treatment, mining, and pharmaceutical industries. ISO certified, global shipping, factory direct pricing.",
      keywords: "Sodium Thiosulfate manufacturer, Na2S2O3 factory, high purity sodium thiosulfate, water treatment chemicals, mining reagents, sodium thiosulfate supplier",
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
        title: "Mining & Gold Leaching",
        desc: "Critical reagent in cyanide leaching processes for gold extraction. Acts as a lixiviant alternative and cyanide detoxification agent for environmentally responsible mining operations.",
        image: "/images/app-mining.webp",
      },
      {
        tag: "Medical Grade",
        title: "Pharmaceutical",
        desc: "Medical-grade sodium thiosulfate used as a cyanide poisoning antidote and in chemotherapy support. Meets USP/EP pharmacopeia standards with full DMF documentation.",
        image: "/images/app-pharma.webp",
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
    heroTitle: "Premium Oxalic Acid Manufacturer",
    subtitle: "High Purity | Industrial Grade | Competitive Pricing",
    email: "sales@na2s2o3pro.com",
    images: {
      hero: "/images/hero-banner.webp",
      product: "/images/product-sodium.webp",
    },
    seo: {
      title: "Oxalic Acid Manufacturer | Industrial Grade C2H2O4 Supplier",
      description: "Premium Oxalic Acid manufacturer offering high-purity C2H2O4 for rust removal, textile dyeing, and rare earth processing. Global logistics, competitive bulk pricing.",
      keywords: "Oxalic Acid manufacturer, C2H2O4 supplier, industrial oxalic acid, rust removal chemicals, textile bleaching agent, oxalic acid factory",
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
        tag: "Pharmaceutical",
        title: "Chemical Synthesis",
        desc: "Key intermediate in the production of various antibiotics and other pharmaceutical compounds.",
        image: "/images/app-pharma.webp",
      },
    ],
  },
};

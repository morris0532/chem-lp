export interface ProductData {
  name: string;
  chemicalFormula: string;
  cas: string;
  subtitle: string;
  email: string;
  images: {
    hero: string;
    product: string;
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
    subtitle: "Factory Direct | 99%+ Purity | Global Shipping",
    email: "sales@na2s2o3pro.com",
    images: {
      hero: "https://mgx-backend-cdn.metadl.com/generate/images/1194222/2026-05-05/n7sw4caaafvq/hero-banner-chemical-factory.png",
      product: "https://mgx-backend-cdn.metadl.com/generate/images/1194222/2026-05-05/n7swyiyaafva/product-sodium-thiosulfate-crystals.png",
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
        tag: "Water Treatment",
        title: "Dechlorination Agent",
        desc: "Rapidly neutralizes chlorine in municipal water, aquaculture, and industrial wastewater treatment processes.",
        image: "https://mgx-backend-cdn.metadl.com/generate/images/1194222/2026-05-05/n7sw3rqaafwa/application-water-treatment.png",
      },
      {
        tag: "Mining Industry",
        title: "Gold Extraction",
        desc: "A safer, eco-friendly alternative to cyanide in thiosulfate leaching processes for gold and silver recovery.",
        image: "https://mgx-backend-cdn.metadl.com/generate/images/1194222/2026-05-05/n7sw45aaafua/application-mining-gold.png",
      },
      {
        tag: "Pharmaceutical",
        title: "Medical Grade",
        desc: "Used as an antidote for cyanide poisoning and in various dermatological and pharmaceutical formulations.",
        image: "https://mgx-backend-cdn.metadl.com/generate/images/1194222/2026-05-05/n7sxtwqaafua/application-pharmaceutical.png",
      },
      {
        tag: "Textile & Paper",
        title: "Bleach Neutralizer",
        desc: "Essential antichlor agent in textile and paper industries to remove excess bleach from fibers and pulp.",
        image: "https://mgx-backend-cdn.metadl.com/generate/images/1194222/2026-05-05/n7sxwliaafta/application-textile.png",
      },
    ],
  },
  "oxalic-acid": {
    name: "Oxalic Acid",
    chemicalFormula: "C₂H₂O₄",
    cas: "144-62-7",
    subtitle: "High Purity | Industrial Grade | Competitive Pricing",
    email: "sales@na2s2o3pro.com",
    images: {
      hero: "https://mgx-backend-cdn.metadl.com/generate/images/1194222/2026-05-05/n7sw4caaafvq/hero-banner-chemical-factory.png",
      product: "https://mgx-backend-cdn.metadl.com/generate/images/1194222/2026-05-05/n7swyiyaafva/product-sodium-thiosulfate-crystals.png",
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
        image: "https://mgx-backend-cdn.metadl.com/generate/images/1194222/2026-05-05/n7sw3rqaafwa/application-water-treatment.png",
      },
      {
        tag: "Textile",
        title: "Dyeing & Printing",
        desc: "Used as a mordant in dyeing processes and as a bleaching agent for straw and wood pulp.",
        image: "https://mgx-backend-cdn.metadl.com/generate/images/1194222/2026-05-05/n7sxwliaafta/application-textile.png",
      },
      {
        tag: "Metallurgy",
        title: "Rare Earth Processing",
        desc: "Crucial reagent in the precipitation and separation of rare earth metals in mining operations.",
        image: "https://mgx-backend-cdn.metadl.com/generate/images/1194222/2026-05-05/n7sw45aaafua/application-mining-gold.png",
      },
      {
        tag: "Pharmaceutical",
        title: "Chemical Synthesis",
        desc: "Key intermediate in the production of various antibiotics and other pharmaceutical compounds.",
        image: "https://mgx-backend-cdn.metadl.com/generate/images/1194222/2026-05-05/n7sxtwqaafua/application-pharmaceutical.png",
      },
    ],
  },
};

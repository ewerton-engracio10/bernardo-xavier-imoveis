export type PropertyImage = {
  src: string;
  alt: string;
  type: "Fachada" | "Interior" | "Área comum" | "Vista";
};

export type Property = {
  slug: string;
  name: string;
  neighborhood: string;
  city: string;
  status: "Lançamento" | "Breve lançamento" | "Em obras";
  bedrooms: string;
  area: string;
  parking: string;
  priceFrom: string;
  shortDescription: string;
  highlights: string[];
  /** A imagem dos cards/listagens deve ser SEMPRE uma fachada externa. */
  coverImage: PropertyImage;
  /** Galeria completa exibida somente na página individual do empreendimento. */
  gallery: PropertyImage[];
};

const demoGallery = (neighborhood: string): PropertyImage[] => [
  {
    src: "/images/properties/placeholders/fachada.svg",
    alt: `Fachada do empreendimento em ${neighborhood}`,
    type: "Fachada",
  },
  {
    src: "/images/properties/placeholders/living.svg",
    alt: `Living do empreendimento em ${neighborhood}`,
    type: "Interior",
  },
  {
    src: "/images/properties/placeholders/suite.svg",
    alt: `Suíte do empreendimento em ${neighborhood}`,
    type: "Interior",
  },
  {
    src: "/images/properties/placeholders/leisure.svg",
    alt: `Área de lazer do empreendimento em ${neighborhood}`,
    type: "Área comum",
  },
  {
    src: "/images/properties/placeholders/view.svg",
    alt: `Vista do empreendimento em ${neighborhood}`,
    type: "Vista",
  },
];

// IMPORTANTE: dados e imagens demonstrativos para estruturar o projeto.
// Antes da apresentação final/publicação, substituir cada conjunto pela fachada
// e pelas fotos reais DO MESMO empreendimento.
export const properties: Property[] = [
  {
    slug: "residencial-ipanema-demo",
    name: "Residencial Ipanema",
    neighborhood: "Ipanema",
    city: "Rio de Janeiro",
    status: "Lançamento",
    bedrooms: "2 a 4 quartos",
    area: "80 a 220 m²",
    parking: "1 a 3 vagas",
    priceFrom: "Sob consulta",
    shortDescription:
      "Empreendimento demonstrativo para apresentar o padrão visual e a organização do catálogo.",
    highlights: [
      "Localização privilegiada",
      "Arquitetura contemporânea",
      "Plantas selecionadas",
      "Atendimento direto com Bernardo",
    ],
    coverImage: demoGallery("Ipanema")[0],
    gallery: demoGallery("Ipanema"),
  },
  {
    slug: "residencial-leblon-demo",
    name: "Residencial Leblon",
    neighborhood: "Leblon",
    city: "Rio de Janeiro",
    status: "Breve lançamento",
    bedrooms: "3 a 4 quartos",
    area: "140 a 300 m²",
    parking: "2 a 4 vagas",
    priceFrom: "Sob consulta",
    shortDescription:
      "Página demonstrativa inspirada no fluxo de consulta que Bernardo utiliza para selecionar oportunidades.",
    highlights: [
      "Endereço estratégico",
      "Perfil de alto padrão",
      "Informações objetivas",
      "Contato consultivo",
    ],
    coverImage: demoGallery("Leblon")[0],
    gallery: demoGallery("Leblon"),
  },
  {
    slug: "residencial-copacabana-demo",
    name: "Residencial Copacabana",
    neighborhood: "Copacabana",
    city: "Rio de Janeiro",
    status: "Em obras",
    bedrooms: "1 a 3 quartos",
    area: "55 a 160 m²",
    parking: "1 a 2 vagas",
    priceFrom: "Sob consulta",
    shortDescription:
      "Exemplo de empreendimento organizado por bairro, tipologia e faixa de investimento.",
    highlights: [
      "Zona Sul do Rio",
      "Curadoria estratégica",
      "Apresentação objetiva",
      "Galeria completa na página do imóvel",
    ],
    coverImage: demoGallery("Copacabana")[0],
    gallery: demoGallery("Copacabana"),
  },
];

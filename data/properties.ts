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
  address: string;
  status: string;
  bedrooms: string;
  area: string;
  parking: string;
  priceFrom: string;
  delivery: string;
  shortDescription: string;
  highlights: string[];
  coverImage: PropertyImage;
  gallery: PropertyImage[];
};

export const properties: Property[] = [
  {
    slug: "tempo-ipanema",
    name: "Tempo Ipanema",
    neighborhood: "Ipanema",
    city: "Rio de Janeiro",
    address: "Rua Redentor, 308 — Ipanema, Rio de Janeiro",
    status: "Lançamento",
    bedrooms: "3 a 4 suítes",
    area: "166 a 382 m²",
    parking: "2 vagas",
    priceFrom: "R$ 5.699.970",
    delivery: "Agosto/2026",
    shortDescription:
      "Projeto residencial exclusivo no coração de Ipanema, com arquitetura contemporânea, plantas amplas e localização entre a Lagoa Rodrigo de Freitas e a Praia de Ipanema.",
    highlights: [
      "Arquitetura assinada pela Cité Arquitetura",
      "Apartamentos e coberturas com plantas amplas",
      "Espaço fitness, salão gourmet e sala de reunião",
      "Localização privilegiada em Ipanema",
    ],
    coverImage: {
      src: "https://betaimages.lopes.com.br/realestate/med/REB454606/01_fachada_tempo_ipanema.jpg",
      alt: "Fachada do Tempo Ipanema",
      type: "Fachada",
    },
    gallery: [
      { src: "https://betaimages.lopes.com.br/realestate/med/REB454606/01_fachada_tempo_ipanema.jpg", alt: "Fachada do Tempo Ipanema", type: "Fachada" },
      { src: "https://betaimages.lopes.com.br/realestate/med/REB454606/06_sala_tempo_ipanema.jpg", alt: "Living do Tempo Ipanema", type: "Interior" },
      { src: "https://betaimages.lopes.com.br/realestate/med/REB454606/16_Cozinha_tempo_ipanema.jpg", alt: "Cozinha do Tempo Ipanema", type: "Interior" },
      { src: "https://betaimages.lopes.com.br/realestate/med/REB454606/17_quarto_tempo_ipanema.jpg", alt: "Suíte do Tempo Ipanema", type: "Interior" },
      { src: "https://betaimages.lopes.com.br/realestate/med/REB454606/04_area_de_lazer_tempo_ipanema.jpg", alt: "Área de lazer do Tempo Ipanema", type: "Área comum" },
      { src: "https://betaimages.lopes.com.br/realestate/med/REB454606/11_cobertura_tempo_ipanema.jpg", alt: "Cobertura do Tempo Ipanema", type: "Interior" },
    ],
  },
  {
    slug: "urquiza-leblon",
    name: "Urquiza Leblon",
    neighborhood: "Leblon",
    city: "Rio de Janeiro",
    address: "Rua General Urquiza, 104 — Leblon, Rio de Janeiro",
    status: "Pronto para morar",
    bedrooms: "até 3 suítes",
    area: "67 a 130 m²",
    parking: "1 vaga",
    priceFrom: "R$ 2.700.000",
    delivery: "Pronto para morar",
    shortDescription:
      "Residencial boutique no Leblon, com apenas 14 unidades, fachada curva marcante, plantas flexíveis e integração entre arquitetura contemporânea e o estilo de vida do bairro.",
    highlights: [
      "Somente 14 unidades residenciais",
      "Fachada assinada pela Cité Arquitetura",
      "Plantas flexíveis e coberturas duplex",
      "A poucos minutos da Praia do Leblon",
    ],
    coverImage: {
      src: "https://images.ctfassets.net/dolx5dafyuwq/1DK7eHNTHkXygXzzOW9tHi/e6c07e58a5d8ac692564b93abd88ba32/2024-08-URQUIZA-003.webp",
      alt: "Fachada do Edifício Urquiza no Leblon",
      type: "Fachada",
    },
    gallery: [
      { src: "https://images.ctfassets.net/dolx5dafyuwq/1DK7eHNTHkXygXzzOW9tHi/e6c07e58a5d8ac692564b93abd88ba32/2024-08-URQUIZA-003.webp", alt: "Fachada do Edifício Urquiza", type: "Fachada" },
      { src: "https://images.ctfassets.net/dolx5dafyuwq/168hnlrvST4ctVJGIHFqL9/9e44faba815dc232fb8b19f73d08eea7/2024-08-URQUIZA-002.webp", alt: "Fachada noturna do Urquiza", type: "Fachada" },
      { src: "https://images.ctfassets.net/dolx5dafyuwq/0wNtuNeWQEBkhFoSPopyk/f269870645e42a721135300def23ebc1/2024-08-URQUIZA-029.webp", alt: "Detalhe arquitetônico do Urquiza", type: "Área comum" },
      { src: "https://lancamentos-rj.com/wp-content/uploads/2024/09/WhatsApp-Image-2024-09-14-at-12.49.08.jpeg", alt: "Living do Urquiza Leblon", type: "Interior" },
    ],
  },
  {
    slug: "nook-copacabana",
    name: "Nook Copacabana",
    neighborhood: "Copacabana",
    city: "Rio de Janeiro",
    address: "Rua Hilário de Gouveia, 49 — Copacabana, Rio de Janeiro",
    status: "Lançamento",
    bedrooms: "1 a 2 quartos",
    area: "40 a 155 m²",
    parking: "até 1 vaga",
    priceFrom: "R$ 1.395.301",
    delivery: "Julho/2026",
    shortDescription:
      "Empreendimento contemporâneo em Copacabana com studios, apartamentos, gardens e coberturas, além de áreas de convivência pensadas para uma rotina urbana sofisticada.",
    highlights: [
      "Studios, apartamentos, gardens e coberturas",
      "Academia, coworking e áreas de convivência",
      "Arquitetura contemporânea",
      "Próximo à Praia de Copacabana e ao metrô",
    ],
    coverImage: {
      src: "https://performace.internit.com.br//media//uploads/galerias/249/0fe62f1edf9f8581c8cb9fcfaf295234.jpeg",
      alt: "Fachada do Nook Copacabana",
      type: "Fachada",
    },
    gallery: [
      { src: "https://performace.internit.com.br//media//uploads/galerias/249/0fe62f1edf9f8581c8cb9fcfaf295234.jpeg", alt: "Fachada do Nook Copacabana", type: "Fachada" },
      { src: "https://performace.internit.com.br//media//uploads/galerias/249/494be275460397ac92c37b59add956cf.jpg", alt: "Living do Nook Copacabana", type: "Interior" },
      { src: "https://performace.internit.com.br//media//uploads/galerias/249/c98378ab2e29e2418e23ec1859360679.jpg", alt: "Academia do Nook Copacabana", type: "Área comum" },
      { src: "https://performace.internit.com.br//media//uploads/galerias/249/9d180ff0df800586b6aaf2572092c62d.jpeg", alt: "Garden do Nook Copacabana", type: "Área comum" },
    ],
  },
];

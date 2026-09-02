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
};

// IMPORTANTE: dados demonstrativos para estruturar o projeto.
// Substituir por empreendimentos reais antes da publicação do site.
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
      "Apresentação enxuta",
      "Sem disponibilização do book completo",
    ],
  },
];

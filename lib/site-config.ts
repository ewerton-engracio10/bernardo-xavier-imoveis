export const siteConfig = {
  name: "Bernardo Xavier Imóveis",
  professionalName: "Bernardo Xavier",
  city: "Rio de Janeiro",
  region: "Zona Sul",
  positioning: "Curadoria imobiliária estratégica",
  tagline: "Conectando investidores aos melhores ativos.",
  instagram: {
    handle: "@bernardoxavier.imoveis",
    url: "https://www.instagram.com/bernardoxavier.imoveis/",
  },
  facebook: {
    label: "Bernardo Xavier da Silva",
    url: "",
  },
  whatsapp: {
    number: "555181251418",
    display: "+55 51 8125-1418",
    defaultMessage:
      "Olá, Bernardo. Vi um empreendimento no seu site e gostaria de receber mais informações.",
  },
};

export function whatsappUrl(message?: string) {
  if (!siteConfig.whatsapp.number) return "#contato";
  const text = encodeURIComponent(message ?? siteConfig.whatsapp.defaultMessage);
  return `https://wa.me/${siteConfig.whatsapp.number}?text=${text}`;
}

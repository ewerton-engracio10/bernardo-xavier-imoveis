import { notFound } from "next/navigation";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { properties } from "@/data/properties";
import { whatsappUrl } from "@/lib/site-config";

export function generateStaticParams() {
  return properties.map((property) => ({ slug: property.slug }));
}

export default async function PropertyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const property = properties.find((item) => item.slug === slug);
  if (!property) notFound();

  const message = `Olá, Bernardo. Quero saber mais sobre ${property.name}, em ${property.neighborhood}.`;

  return (
    <main>
      <Header />
      <section className="detail-hero">
        <div className="container detail-grid">
          <div className="detail-image">
            <div className="building-placeholder large" aria-hidden="true">
              <span /><span /><span /><span /><span /><span />
            </div>
          </div>
          <div className="detail-copy">
            <span className="eyebrow gold">{property.status}</span>
            <h1>{property.name}</h1>
            <p className="location">{property.neighborhood}, {property.city}</p>
            <div className="detail-meta">
              <div><small>Quartos</small><strong>{property.bedrooms}</strong></div>
              <div><small>Área</small><strong>{property.area}</strong></div>
              <div><small>Vagas</small><strong>{property.parking}</strong></div>
            </div>
            <div className="detail-price">
              <small>Valor de investimento</small>
              <strong>{property.priceFrom}</strong>
            </div>
            <p>{property.shortDescription}</p>
            <a className="button button-gold" href={whatsappUrl(message)}>Falar com Bernardo</a>
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container">
          <div className="section-heading compact">
            <span className="eyebrow gold">Destaques</span>
            <h2>Informações essenciais do empreendimento</h2>
          </div>
          <div className="highlight-grid">
            {property.highlights.map((highlight, index) => (
              <div key={highlight} className="highlight-card">
                <span>0{index + 1}</span>
                <h3>{highlight}</h3>
              </div>
            ))}
          </div>
          <p className="demo-note light">Página demonstrativa. Não disponibiliza book completo e não representa uma oferta imobiliária real.</p>
        </div>
      </section>

      <Footer />
    </main>
  );
}

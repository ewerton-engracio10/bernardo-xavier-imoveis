import { notFound } from "next/navigation";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PropertyGallery } from "@/components/PropertyGallery";
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
        <div className="container">
          <div className="detail-title">
            <div>
              <span className="eyebrow gold">{property.status}</span>
              <h1>{property.name}</h1>
              <p className="location">{property.neighborhood}, {property.city}</p>
            </div>
            <div className="detail-price title-price">
              <small>Valor de investimento</small>
              <strong>{property.priceFrom}</strong>
            </div>
          </div>

          <PropertyGallery images={property.gallery} propertyName={property.name} />

          <div className="detail-content-grid">
            <div>
              <div className="detail-meta">
                <div><small>Quartos</small><strong>{property.bedrooms}</strong></div>
                <div><small>Área</small><strong>{property.area}</strong></div>
                <div><small>Vagas</small><strong>{property.parking}</strong></div>
              </div>
              <p className="detail-description">{property.shortDescription}</p>
            </div>
            <div className="detail-contact-card">
              <span className="eyebrow gold">Atendimento exclusivo</span>
              <h2>Receba informações completas deste imóvel</h2>
              <p>Valores, plantas, disponibilidade e condições diretamente com Bernardo Xavier.</p>
              <a className="button button-gold" href={whatsappUrl(message)}>Falar com Bernardo</a>
            </div>
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
          <p className="demo-note light">
            Estrutura demonstrativa. Nos cards/listagens aparece somente a fachada. A página individual reúne a galeria completa do mesmo empreendimento.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}

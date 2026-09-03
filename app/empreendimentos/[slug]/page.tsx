import Link from "next/link";
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
      <section className="property-detail-page">
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Home</Link><span>›</span><Link href="/lancamentos">Lançamentos</Link><span>›</span><span>{property.neighborhood}</span><span>›</span><strong>{property.name}</strong>
          </div>

          <div className="property-detail-top">
            <div className="property-detail-copy">
              <span className="eyebrow gold">{property.neighborhood} · Rio de Janeiro</span>
              <h1>{property.name}</h1>
              <div className="detail-inline-meta">
                <span>{property.bedrooms}</span>
                <span>{property.area}</span>
                <span>{property.status}</span>
              </div>

              <div className="detail-investment">
                <small>Valor de investimento</small>
                <strong>{property.priceFrom}</strong>
              </div>

              <div className="detail-head-actions">
                <a className="button button-gold" href={whatsappUrl(message)}>Falar com Bernardo</a>
                <a className="button button-outline" href={whatsappUrl(`Olá, Bernardo. Gostaria de agendar uma conversa sobre ${property.name}.`)}>Agendar reunião</a>
              </div>
            </div>

            <PropertyGallery images={property.gallery} propertyName={property.name} />
          </div>

          <div className="detail-lower-grid">
            <div className="about-property">
              <h2>Sobre o empreendimento</h2>
              <p>{property.shortDescription}</p>
              <ul>
                {property.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
              </ul>
            </div>

            <aside className="info-card">
              <h3>Informações principais</h3>
              <dl>
                <div><dt>Endereço</dt><dd>{property.address}</dd></div>
                <div><dt>Tipologia</dt><dd>{property.bedrooms}</dd></div>
                <div><dt>Metragens</dt><dd>{property.area}</dd></div>
                <div><dt>Vagas</dt><dd>{property.parking}</dd></div>
                <div><dt>Status</dt><dd>{property.status}</dd></div>
                <div><dt>Entrega prevista</dt><dd>{property.delivery}</dd></div>
              </dl>
            </aside>
          </div>

          <div className="bernardo-contact-strip">
            <img src="/images/bernardo/bernardo-social.jpg" alt="Bernardo Xavier" />
            <div>
              <h3>Fale diretamente com Bernardo</h3>
              <p>Tire dúvidas, receba mais informações e conheça condições exclusivas.</p>
            </div>
            <a className="button button-outline" href={whatsappUrl(message)}>Chamar no WhatsApp</a>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PropertyCard } from "@/components/PropertyCard";
import { SearchPanel } from "@/components/SearchPanel";
import { properties } from "@/data/properties";
import { bernardoPhoto } from "@/lib/bernardo-photo";
import { siteConfig, whatsappUrl } from "@/lib/site-config";

export default function HomePage() {
  return (
    <main>
      <Header />

      <section className="hero hero-light">
        <div className="hero-photo" aria-hidden="true" />
        <div className="hero-wash" aria-hidden="true" />
        <div className="container hero-content">
          <div className="hero-copy">
            <span className="eyebrow gold">Rio de Janeiro · Zona Sul</span>
            <h1>Lançamentos de Alto Padrão na Zona Sul do Rio.</h1>
            <p>Curadoria estratégica para conectar investidores aos melhores ativos imobiliários.</p>
            <div className="hero-actions">
              <Link className="button button-gold" href="/lancamentos">Ver lançamentos</Link>
              <a className="button button-outline" href={whatsappUrl()}>Falar com Bernardo</a>
            </div>
          </div>
          <SearchPanel />
        </div>
      </section>

      <section className="section about-section" id="sobre">
        <div className="container about-grid">
          <div className="bernardo-photo-wrap">
            <img src={bernardoPhoto} alt="Bernardo Xavier" className="bernardo-photo" />
          </div>
          <div className="about-copy">
            <span className="eyebrow gold">Atendimento personalizado</span>
            <h2>Atendimento personalizado para imóveis de alto padrão.</h2>
            <span className="gold-dash" aria-hidden="true" />
            <p>{siteConfig.tagline} Atuação com foco em rentabilidade, localização e segurança.</p>
            <p>Cada empreendimento é selecionado com rigor para gerar valor e tranquilidade em cada decisão.</p>
            <a className="button button-gold" href={whatsappUrl()}>Falar com Bernardo</a>
          </div>
        </div>
      </section>

      <section className="section featured-section" id="bairros">
        <div className="container">
          <div className="section-heading split-heading">
            <div>
              <span className="eyebrow gold">Curadoria exclusiva</span>
              <h2>Lançamentos em destaque</h2>
            </div>
            <Link href="/lancamentos" className="text-link">Ver todos →</Link>
          </div>
          <div className="property-grid">
            {properties.map((property) => <PropertyCard key={property.slug} property={property} />)}
          </div>
        </div>
      </section>

      <section className="section curadoria-section" id="curadoria">
        <div className="container curadoria-grid">
          <div>
            <span className="eyebrow gold">Curadoria imobiliária estratégica</span>
            <h2>Decisões mais claras, com atendimento direto.</h2>
          </div>
          <div className="curadoria-points">
            <p>Seleção por bairro, tipologia, metragem e investimento.</p>
            <p>Informações essenciais de cada empreendimento em uma navegação objetiva.</p>
            <p>Contato direto com Bernardo para disponibilidade, condições e próximos passos.</p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

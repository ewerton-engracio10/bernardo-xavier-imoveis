import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PropertyCard } from "@/components/PropertyCard";
import { SearchPanel } from "@/components/SearchPanel";
import { properties } from "@/data/properties";
import { siteConfig, whatsappUrl } from "@/lib/site-config";

export default function HomePage() {
  return (
    <main>
      <Header />

      <section className="hero">
        <div className="hero-overlay" />
        <div className="rio-silhouette" aria-hidden="true" />
        <div className="container hero-content">
          <span className="eyebrow gold">Rio de Janeiro · Zona Sul</span>
          <h1>Lançamentos de Alto Padrão na Zona Sul do Rio.</h1>
          <p>
            Curadoria estratégica para conectar investidores aos melhores ativos imobiliários.
          </p>
          <div className="hero-actions">
            <Link className="button button-gold" href="/lancamentos">Ver lançamentos</Link>
            <a className="button button-ghost" href={whatsappUrl()}>Falar com Bernardo</a>
          </div>
          <SearchPanel />
        </div>
      </section>

      <section className="section" id="bairros">
        <div className="container">
          <div className="section-heading split-heading">
            <div>
              <span className="eyebrow gold">Seleção estratégica</span>
              <h2>Lançamentos em destaque</h2>
            </div>
            <Link href="/lancamentos" className="text-link">Ver todos →</Link>
          </div>

          <div className="property-grid">
            {properties.map((property, index) => (
              <PropertyCard key={property.slug} property={property} index={index} />
            ))}
          </div>
          <p className="demo-note">Os empreendimentos acima são demonstrativos e servem apenas para estruturar o site.</p>
        </div>
      </section>

      <section className="section section-dark" id="curadoria">
        <div className="container value-grid">
          <div className="section-heading compact">
            <span className="eyebrow gold">Curadoria imobiliária estratégica</span>
            <h2>Informação clara para decisões melhores.</h2>
            <p>
              Um catálogo organizado por bairro, localização, tipologia e investimento, sem expor o book completo do empreendimento.
            </p>
          </div>

          <div className="value-list">
            <div><span>01</span><h3>Localização</h3><p>Busca objetiva por bairros estratégicos da Zona Sul.</p></div>
            <div><span>02</span><h3>Seleção</h3><p>Empreendimentos apresentados com foco no perfil de cada cliente.</p></div>
            <div><span>03</span><h3>Investimento</h3><p>Valor e informações essenciais em destaque.</p></div>
            <div><span>04</span><h3>Contato direto</h3><p>Atendimento consultivo com Bernardo pelo WhatsApp.</p></div>
          </div>
        </div>
      </section>

      <section className="section about-section" id="sobre">
        <div className="container about-grid">
          <div className="portrait-placeholder">
            <span>BX</span>
          </div>
          <div>
            <span className="eyebrow gold">Bernardo Xavier</span>
            <h2>Atendimento personalizado para imóveis de alto padrão.</h2>
            <p>
              {siteConfig.tagline} Atuação com foco em lançamentos, oportunidades e curadoria imobiliária estratégica no Rio de Janeiro.
            </p>
            <p>
              O objetivo do site é facilitar a descoberta dos empreendimentos certos e levar cada interessado para uma conversa direta com Bernardo.
            </p>
            <a className="button button-gold" href={whatsappUrl()}>Falar com Bernardo</a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

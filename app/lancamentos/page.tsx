import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PropertyCard } from "@/components/PropertyCard";
import { SearchPanel } from "@/components/SearchPanel";
import { properties } from "@/data/properties";

export default function LancamentosPage() {
  return (
    <main>
      <Header />
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow gold">Rio de Janeiro · Zona Sul</span>
          <h1>Lançamentos</h1>
          <p>Encontre oportunidades por bairro, perfil e faixa de investimento.</p>
          <SearchPanel />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="property-grid">
            {properties.map((property, index) => (
              <PropertyCard key={property.slug} property={property} index={index} />
            ))}
          </div>
          <p className="demo-note">Conteúdo demonstrativo. Substituir pelos empreendimentos reais antes da publicação.</p>
        </div>
      </section>
      <Footer />
    </main>
  );
}

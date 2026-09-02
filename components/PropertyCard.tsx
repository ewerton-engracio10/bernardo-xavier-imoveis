import Link from "next/link";
import type { Property } from "@/data/properties";

export function PropertyCard({ property, index = 0 }: { property: Property; index?: number }) {
  return (
    <article className="property-card">
      <div className={`property-image property-image-${(index % 3) + 1}`}>
        <span className="property-status">{property.status}</span>
        <div className="building-placeholder" aria-hidden="true">
          <span /><span /><span /><span /><span />
        </div>
      </div>
      <div className="property-content">
        <span className="eyebrow">{property.neighborhood}</span>
        <h3>{property.name}</h3>
        <div className="property-meta">
          <span>{property.bedrooms}</span>
          <span>{property.area}</span>
        </div>
        <div className="property-price">
          <small>Valor de investimento</small>
          <strong>{property.priceFrom}</strong>
        </div>
        <Link className="text-link" href={`/empreendimentos/${property.slug}`}>
          Ver empreendimento →
        </Link>
      </div>
    </article>
  );
}

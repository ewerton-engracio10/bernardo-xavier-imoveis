import Link from "next/link";
import type { Property } from "@/data/properties";

export function PropertyCard({ property }: { property: Property; index?: number }) {
  return (
    <article className="property-card">
      <Link
        href={`/empreendimentos/${property.slug}`}
        className="property-image"
        aria-label={`Ver ${property.name}`}
      >
        <img src={property.coverImage.src} alt={property.coverImage.alt} />
        <span className="property-status">{property.status}</span>
        <span className="property-image-label">Fachada</span>
      </Link>
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

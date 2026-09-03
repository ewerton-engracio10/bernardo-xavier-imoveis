import Link from "next/link";
import type { Property } from "@/data/properties";

export function PropertyCard({ property }: { property: Property; index?: number }) {
  return (
    <article className={`property-card property-card-${property.slug}`}>
      <Link href={`/empreendimentos/${property.slug}`} className="property-card-link" aria-label={`Abrir detalhes e fotos de ${property.name}`}>
        <div className="property-image">
          <img src={property.coverImage.src} alt={property.coverImage.alt} />
          <span className="property-status">{property.status}</span>
        </div>
        <div className="property-content">
          <span className="eyebrow gold">{property.neighborhood}</span>
          <h3>{property.name}</h3>
          <div className="property-meta"><span>{property.bedrooms}</span><span>{property.area}</span></div>
          <div className="property-price"><small>Valor de investimento</small><strong>{property.priceFrom}</strong></div>
          <span className="property-details-cta">Ver detalhes e fotos →</span>
        </div>
      </Link>
    </article>
  );
}

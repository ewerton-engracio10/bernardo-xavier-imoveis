"use client";

import { useEffect, useState } from "react";
import type { PropertyImage } from "@/data/properties";

export function PropertyGallery({ images, propertyName }: { images: PropertyImage[]; propertyName: string }) {
  const [active, setActive] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const current = images[active];

  useEffect(() => {
    if (!lightboxOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setLightboxOpen(false);
      if (event.key === "ArrowRight") setActive((value) => (value + 1) % images.length);
      if (event.key === "ArrowLeft") setActive((value) => (value - 1 + images.length) % images.length);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [images.length, lightboxOpen]);

  if (!current) return null;

  const previous = () => setActive((value) => (value - 1 + images.length) % images.length);
  const next = () => setActive((value) => (value + 1) % images.length);

  return (
    <>
      <div className="property-gallery" aria-label={`Galeria de fotos de ${propertyName}`}>
        <button className="gallery-main" type="button" onClick={() => setLightboxOpen(true)}>
          <img src={current.src} alt={current.alt} />
          <span className="gallery-type">{current.type}</span>
          <span className="gallery-expand">Ampliar foto</span>
        </button>

        <div className="gallery-thumbnails">
          {images.map((image, index) => (
            <button
              key={`${image.src}-${index}`}
              type="button"
              className={index === active ? "gallery-thumb is-active" : "gallery-thumb"}
              onClick={() => setActive(index)}
              aria-label={`Abrir foto ${index + 1}: ${image.alt}`}
            >
              <img src={image.src} alt="" />
              <span>{image.type}</span>
            </button>
          ))}
        </div>
      </div>

      {lightboxOpen && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label={`Fotos de ${propertyName}`}>
          <button className="lightbox-close" type="button" onClick={() => setLightboxOpen(false)} aria-label="Fechar galeria">×</button>
          <button className="lightbox-nav previous" type="button" onClick={previous} aria-label="Foto anterior">‹</button>
          <figure>
            <img src={current.src} alt={current.alt} />
            <figcaption>
              <span>{current.type}</span>
              <strong>{active + 1} / {images.length}</strong>
            </figcaption>
          </figure>
          <button className="lightbox-nav next" type="button" onClick={next} aria-label="Próxima foto">›</button>
        </div>
      )}
    </>
  );
}

import Link from "next/link";
import { brandLogo } from "@/lib/brand-logo";
import { siteConfig, whatsappUrl } from "@/lib/site-config";

export function Footer() {
  return (
    <footer className="footer" id="contato">
      <div className="container footer-grid">
        <div>
          <Link href="/" className="footer-logo-link" aria-label="Bernardo Xavier Imóveis - início">
            <img className="footer-logo" src={brandLogo} alt="Bernardo Xavier Imóveis" />
          </Link>
          <p>{siteConfig.tagline}</p>
        </div>

        <div>
          <h3>Navegação</h3>
          <Link href="/lancamentos">Lançamentos</Link>
          <Link href="/#sobre">Sobre Bernardo</Link>
          <Link href="/#curadoria">Curadoria</Link>
        </div>

        <div>
          <h3>Redes e contato</h3>
          <div className="social-icon-buttons">
            <a
              className="social-icon-button instagram-button"
              href={siteConfig.instagram.url}
              target="_blank"
              rel="noreferrer"
              aria-label="Abrir Instagram de Bernardo Xavier Imóveis"
              title="Instagram"
            >
              <img src="https://cdn.simpleicons.org/instagram/FFFFFF" alt="" aria-hidden="true" />
            </a>
            <a
              className="social-icon-button whatsapp-button"
              href={whatsappUrl()}
              target="_blank"
              rel="noreferrer"
              aria-label="Chamar Bernardo no WhatsApp"
              title="WhatsApp"
            >
              <img src="https://cdn.simpleicons.org/whatsapp/FFFFFF" alt="" aria-hidden="true" />
            </a>
          </div>
          <span className="footer-location">{siteConfig.city} | {siteConfig.region}</span>
        </div>
      </div>
      <div className="container footer-bottom"><span>© {new Date().getFullYear()} Bernardo Xavier Imóveis.</span></div>
    </footer>
  );
}

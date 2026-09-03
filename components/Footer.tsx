import Link from "next/link";
import { siteConfig, whatsappUrl } from "@/lib/site-config";

export function Footer() {
  return (
    <footer className="footer" id="contato">
      <div className="container footer-grid">
        <div>
          <Link href="/" className="footer-logo-link" aria-label="Bernardo Xavier Imóveis - início">
            <img
              className="footer-logo"
              src="/brand/logo-bernardo-xavier-dark.png"
              alt="Bernardo Xavier Imóveis"
            />
          </Link>
          <p>{siteConfig.tagline}</p>
          <p>{siteConfig.city} | {siteConfig.region}</p>
        </div>

        <div>
          <h3>Navegação</h3>
          <Link href="/lancamentos">Lançamentos</Link>
          <Link href="/#sobre">Sobre Bernardo</Link>
          <Link href="/#curadoria">Curadoria</Link>
        </div>

        <div>
          <h3>Redes e contato</h3>
          <a href={siteConfig.instagram.url} target="_blank" rel="noreferrer">
            Instagram {siteConfig.instagram.handle}
          </a>
          <span>Facebook: {siteConfig.facebook.label}</span>
          <a href={whatsappUrl()}>WhatsApp: número a inserir</a>
        </div>
      </div>

      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} Bernardo Xavier Imóveis.</span>
        <span>Site em estruturação — dados de empreendimentos demonstrativos.</span>
      </div>
    </footer>
  );
}

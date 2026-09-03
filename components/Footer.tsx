import Link from "next/link";
import { siteConfig, whatsappUrl } from "@/lib/site-config";

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" style={{ width: 20, height: 20, flex: "0 0 20px" }}>
      <rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="4.1" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="17.4" cy="6.7" r="1.1" fill="currentColor" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" style={{ width: 20, height: 20, flex: "0 0 20px" }}>
      <path d="M20.5 11.8a8.4 8.4 0 0 1-12.4 7.4L4 20.4l1.2-4a8.4 8.4 0 1 1 15.3-4.6Z" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9 8.2c.2-.4.5-.4.8-.4h.5c.2 0 .4.1.5.4l.8 1.9c.1.3.1.5-.1.7l-.6.7c-.2.2-.2.4 0 .7.5.9 1.2 1.6 2 2.1.3.2.5.2.7 0l.8-.9c.2-.2.4-.2.7-.1l1.9.9c.3.1.4.3.4.5 0 .3-.1 1.3-.8 1.8-.6.5-1.4.7-2.2.5-1.1-.3-2.5-.9-4-2.3-1.2-1.1-2-2.4-2.4-3.4-.4-1-.1-2.3.4-3.1Z" fill="currentColor" />
    </svg>
  );
}

const contactButtonStyle = {
  display: "flex",
  width: "100%",
  maxWidth: 330,
  justifyContent: "flex-start",
  gap: 10,
  textTransform: "none" as const,
  letterSpacing: 0,
  fontSize: 12,
  lineHeight: 1.2,
};

export function Footer() {
  return (
    <footer className="footer" id="contato">
      <div className="container footer-grid">
        <div>
          <Link href="/" className="footer-logo-link">
            <img className="footer-logo" src="/brand/logo-bernardo-xavier.png" alt="Bernardo Xavier Imóveis" />
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
          <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 14 }}>
            <a className="button button-outline" style={contactButtonStyle} href={siteConfig.instagram.url} target="_blank" rel="noreferrer" aria-label="Abrir Instagram de Bernardo Xavier Imóveis">
              <InstagramIcon />
              <span>{siteConfig.instagram.handle}</span>
            </a>
            <a className="button button-outline" style={contactButtonStyle} href={whatsappUrl()} target="_blank" rel="noreferrer" aria-label={`Chamar Bernardo no WhatsApp ${siteConfig.whatsapp.display}`}>
              <WhatsAppIcon />
              <span>{siteConfig.whatsapp.display}</span>
            </a>
          </div>
          <span>{siteConfig.city} | {siteConfig.region}</span>
        </div>
      </div>
      <div className="container footer-bottom"><span>© {new Date().getFullYear()} Bernardo Xavier Imóveis.</span></div>
    </footer>
  );
}

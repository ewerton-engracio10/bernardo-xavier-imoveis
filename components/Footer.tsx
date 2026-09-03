import Link from "next/link";
import { siteConfig, whatsappUrl } from "@/lib/site-config";

export function Footer() {
  return (
    <footer className="footer" id="contato">
      <div className="container footer-grid">
        <div>
          <Link href="/" className="footer-logo-link"><img className="footer-logo" src="/brand/logo-bernardo-xavier.png" alt="Bernardo Xavier Imóveis" /></Link>
          <p>{siteConfig.tagline}</p>
        </div>
        <div><h3>Navegação</h3><Link href="/lancamentos">Lançamentos</Link><Link href="/#sobre">Sobre Bernardo</Link><Link href="/#curadoria">Curadoria</Link></div>
        <div><h3>Redes e contato</h3><a href={siteConfig.instagram.url} target="_blank" rel="noreferrer">Instagram {siteConfig.instagram.handle}</a><span>{siteConfig.city} | {siteConfig.region}</span><a href={whatsappUrl()}>Falar com Bernardo</a></div>
      </div>
      <div className="container footer-bottom"><span>© {new Date().getFullYear()} Bernardo Xavier Imóveis.</span></div>
    </footer>
  );
}

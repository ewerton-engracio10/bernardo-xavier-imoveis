import Link from "next/link";
import { brandLogo } from "@/lib/brand-logo";
import { whatsappUrl } from "@/lib/site-config";

export function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href="/" className="brand-image-link" aria-label="Bernardo Xavier Imóveis - início">
          <img className="brand-logo" src={brandLogo} alt="Bernardo Xavier Imóveis" />
        </Link>

        <nav className="desktop-nav" aria-label="Navegação principal">
          <Link href="/lancamentos">Lançamentos</Link>
          <Link href="/#sobre">Sobre</Link>
          <Link href="/#bairros">Bairros</Link>
          <Link href="/#curadoria">Curadoria</Link>
          <Link href="/#contato">Contato</Link>
        </nav>

        <a className="button button-gold header-cta" href={whatsappUrl()} target="_blank" rel="noreferrer">Falar com Bernardo</a>

        <details className="mobile-menu">
          <summary className="mobile-menu-toggle" aria-label="Abrir menu de navegação">
            <span></span>
            <span></span>
            <span></span>
          </summary>
          <nav className="mobile-menu-panel" aria-label="Navegação mobile">
            <Link href="/lancamentos">Lançamentos</Link>
            <Link href="/#sobre">Sobre</Link>
            <Link href="/#bairros">Bairros</Link>
            <Link href="/#curadoria">Curadoria</Link>
            <Link href="/#contato">Contato</Link>
            <a href={whatsappUrl()} target="_blank" rel="noreferrer">Falar com Bernardo</a>
          </nav>
        </details>
      </div>
    </header>
  );
}

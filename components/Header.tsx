import Link from "next/link";
import { whatsappUrl } from "@/lib/site-config";

export function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href="/" className="brand-image-link" aria-label="Bernardo Xavier Imóveis - início">
          <img className="brand-logo" src="/brand/logo-bernardo-xavier.png" alt="Bernardo Xavier Imóveis" />
        </Link>
        <nav className="desktop-nav" aria-label="Navegação principal">
          <Link href="/lancamentos">Lançamentos</Link>
          <Link href="/#sobre">Sobre</Link>
          <Link href="/#bairros">Bairros</Link>
          <Link href="/#curadoria">Curadoria</Link>
          <Link href="/#contato">Contato</Link>
        </nav>
        <a className="button button-gold header-cta" href={whatsappUrl()}>Falar com Bernardo</a>
      </div>
    </header>
  );
}

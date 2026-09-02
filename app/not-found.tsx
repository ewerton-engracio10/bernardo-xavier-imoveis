import Link from "next/link";
import { Header } from "@/components/Header";

export default function NotFound() {
  return (
    <main>
      <Header />
      <section className="not-found container">
        <span className="eyebrow gold">404</span>
        <h1>Empreendimento não encontrado.</h1>
        <Link className="button button-gold" href="/lancamentos">Ver lançamentos</Link>
      </section>
    </main>
  );
}

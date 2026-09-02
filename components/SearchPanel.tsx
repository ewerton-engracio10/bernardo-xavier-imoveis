import Link from "next/link";

export function SearchPanel() {
  return (
    <div className="search-panel" aria-label="Busca de empreendimentos">
      <label>
        Bairro
        <select defaultValue="">
          <option value="" disabled>Selecione</option>
          <option>Ipanema</option>
          <option>Leblon</option>
          <option>Copacabana</option>
        </select>
      </label>
      <label>
        Tipo
        <select defaultValue="">
          <option value="" disabled>Selecione</option>
          <option>Lançamento</option>
          <option>Breve lançamento</option>
          <option>Em obras</option>
        </select>
      </label>
      <label>
        Faixa de preço
        <select defaultValue="">
          <option value="" disabled>Selecione</option>
          <option>Sob consulta</option>
        </select>
      </label>
      <Link href="/lancamentos" className="button button-gold search-button">Buscar</Link>
    </div>
  );
}

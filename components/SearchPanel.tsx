export function SearchPanel() {
  return (
    <form className="search-panel" action="/lancamentos">
      <div className="search-field"><label htmlFor="bairro">Bairro</label><select id="bairro" name="bairro" defaultValue=""><option value="">Selecione</option><option>Ipanema</option><option>Leblon</option><option>Copacabana</option></select></div>
      <div className="search-field"><label htmlFor="tipo">Tipo</label><select id="tipo" name="tipo" defaultValue=""><option value="">Selecione</option><option>Apartamento</option><option>Cobertura</option><option>Studio</option></select></div>
      <div className="search-field"><label htmlFor="preco">Faixa de preço</label><select id="preco" name="preco" defaultValue=""><option value="">Selecione</option><option>Até R$ 2 milhões</option><option>R$ 2 a 5 milhões</option><option>Acima de R$ 5 milhões</option></select></div>
      <button className="button button-gold" type="submit">Buscar</button>
    </form>
  );
}

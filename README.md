# Bernardo Xavier Imóveis

Estrutura inicial do site de **Bernardo Xavier Imóveis**, criada a partir da identidade aprovada e da referência de organização de lançamentos indicada pelo Bernardo.

## Direção visual

- Preto / carvão como base
- Ouro champagne como destaque
- Títulos serifados sofisticados
- Textos em sans-serif limpa
- Foco em lançamentos de alto padrão no Rio de Janeiro / Zona Sul
- Catálogo simples de consultar por bairro, tipo e investimento
- CTA para contato direto com Bernardo

## Estrutura

```text
bernardo-xavier-imoveis/
├── app/
│   ├── empreendimentos/[slug]/page.tsx
│   ├── lancamentos/page.tsx
│   ├── globals.css
│   ├── layout.tsx
│   ├── not-found.tsx
│   └── page.tsx
├── components/
│   ├── Footer.tsx
│   ├── Header.tsx
│   ├── PropertyCard.tsx
│   └── SearchPanel.tsx
├── data/
│   └── properties.ts
├── lib/
│   └── site-config.ts
├── public/
│   └── brand/
│       ├── logo-bernardo-xavier.png
│       └── identidade-visual-referencia.png
├── .gitignore
├── next.config.ts
├── package.json
├── tsconfig.json
└── README.md
```

## Antes de publicar

1. Abrir `lib/site-config.ts` e inserir o número real do WhatsApp somente com DDI + DDD + número, sem símbolos. Exemplo de formato: `5521999999999`.
2. Inserir a URL correta do Facebook, caso seja usada.
3. Substituir os empreendimentos demonstrativos em `data/properties.ts` pelos empreendimentos reais.
4. Substituir os placeholders visuais pelas fotos oficiais autorizadas dos empreendimentos.
5. Revisar valores, metragem, endereço, disponibilidade e demais dados antes da publicação.

## Rodar localmente

```bash
npm install
npm run dev
```

Abra `http://localhost:3000`.

## GitHub + Vercel

1. Crie um repositório no GitHub.
2. Envie todo o conteúdo desta pasta para a raiz do repositório.
3. Na Vercel, importe o repositório.
4. A Vercel deve reconhecer automaticamente o projeto como Next.js.

## Observação importante

Os imóveis que acompanham esta primeira estrutura são **demonstrativos**. Eles não devem ser apresentados ao público como ofertas reais.

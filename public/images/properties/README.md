# Fotos dos empreendimentos

Para cada imóvel real, crie uma pasta com o mesmo `slug` usado em `data/properties.ts`.

Exemplo:

```text
public/images/properties/
└── nome-do-empreendimento/
    ├── 01-fachada.jpg
    ├── 02-fachada-lateral.jpg
    ├── 03-living.jpg
    ├── 04-suite-master.jpg
    ├── 05-cozinha.jpg
    ├── 06-area-lazer.jpg
    └── 07-vista.jpg
```

Regra do projeto:

- Cards da Home e da listagem: usar **somente fachada externa** (`coverImage`).
- Página individual do empreendimento: usar a **galeria completa de fotos do mesmo imóvel/empreendimento** (`gallery`).
- Não misturar fotos de empreendimentos diferentes na mesma galeria.
- Não usar imagens internas como capa dos cards.
- Usar somente imagens autorizadas para publicação.

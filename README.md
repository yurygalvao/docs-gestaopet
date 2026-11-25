# docs-gestaopet

Site de documentação do **GestãoPet** (API REST de tutores e pets), feito com [Docusaurus](https://docusaurus.io/) na atividade prática *Doc as Code* de Tópicos Especiais em Sistemas de Informação (IFAL).

Publicado em: https://yurygalvao.github.io/docs-gestaopet/

## Rodar localmente

```bash
npm install
npm run start   # servidor de desenvolvimento em http://localhost:3000/docs-gestaopet/
npm run build   # gera o site estático em build/
```

A cada `git push` na `main`, o workflow `.github/workflows/deploy.yml` gera o build e publica no GitHub Pages.

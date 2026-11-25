---
sidebar_position: 1
sidebar_label: Visão geral
title: GestãoPet
description: Visão geral do GestãoPet, API REST para cadastro de tutores e pets.
---

# GestãoPet

O **GestãoPet** é uma API REST para clínicas e pet shops cadastrarem **tutores** (os donos) e os **pets** de cada um. Ela foi construída com [FastAPI](https://fastapi.tiangolo.com/) e SQLite como prova de conceito do seminário de Análise e Projeto de Sistemas de Informação do IFAL.

## O que o sistema faz

| Recurso | Operações | Regra principal |
|---|---|---|
| Tutores | cadastrar, listar, buscar, alterar, excluir | o e-mail não pode se repetir |
| Pets | cadastrar, listar (com filtro por espécie), buscar, alterar, excluir | todo pet pertence a um tutor existente |

Ao excluir um tutor, os pets dele também são excluídos.

## Para quem é esta documentação

- **Usuários da API:** comece pela [Instalação](./guia-do-usuario/instalacao.mdx) e depois siga os [Primeiros passos](./guia-do-usuario/primeiros-passos.md).
- **Desenvolvedores:** comece pela [Visão geral da arquitetura](./arquitetura/visao-geral.md) e pelo [Modelo de dados](./arquitetura/modelo-de-dados.md).

:::info[Documentação automática da API]
Além deste site, a própria API gera uma documentação interativa (Swagger UI) em `http://127.0.0.1:8000/docs` enquanto o servidor está rodando. Este site explica o **porquê** e o **como usar**; o `/docs` da API lista cada campo de cada rota.
:::

## Tecnologias

- **Python 3.12+** e **FastAPI** para a API.
- **SQLAlchemy 2** como ORM e **SQLite** como banco.
- **Pydantic** para validar a entrada e montar a saída.
- **pytest** para os testes automatizados.

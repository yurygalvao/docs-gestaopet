---
sidebar_position: 2
title: Primeiros passos
description: Cadastre o primeiro tutor e o primeiro pet usando a API do GestãoPet.
---

# Primeiros passos

Este guia cadastra um tutor, um pet desse tutor e depois consulta os dados. Os exemplos usam `curl`, mas o mesmo pode ser feito pela página interativa `http://127.0.0.1:8000/docs`, no botão **Try it out** de cada rota.

:::note
O servidor precisa estar rodando. Se ainda não estiver, veja a [Instalação](./instalacao.mdx).
:::

## 1. Confira se a API está no ar

```bash
curl http://127.0.0.1:8000/
```

Resposta esperada: `{"status":"ok","docs":"/docs"}`.

## 2. Cadastre um tutor

O corpo da requisição segue o esquema `TutorCreate`. O campo `telefone` é opcional.

```json title="POST /tutores (corpo)"
{
  "nome": "Maria Silva",
  "email": "maria@email.com",
  "telefone": "82999990000"
}
```

```bash title="Terminal" {3}
curl -X POST http://127.0.0.1:8000/tutores \
  -H "Content-Type: application/json" \
  -d '{"nome": "Maria Silva", "email": "maria@email.com", "telefone": "82999990000"}'
```

A API responde **201 Created** com o tutor e o `id` gerado:

```json title="Resposta 201" {2}
{
  "id": 1,
  "nome": "Maria Silva",
  "email": "maria@email.com",
  "telefone": "82999990000",
  "pets": []
}
```

:::danger[E-mail duplicado]
Cadastrar outro tutor com `maria@email.com` devolve **409 Conflict**. O e-mail identifica o tutor e não pode se repetir.
:::

## 3. Cadastre um pet para o tutor

O campo `tutor_id` liga o pet ao tutor criado no passo anterior. A espécie aceita apenas `cachorro`, `gato` ou `outro`.

```bash title="Terminal" {3}
curl -X POST http://127.0.0.1:8000/pets \
  -H "Content-Type: application/json" \
  -d '{"nome": "Rex", "especie": "cachorro", "raca": "Vira-lata", "tutor_id": 1}'
```

Se o `tutor_id` não existir, a resposta é **404 Not Found**. Se a espécie for inválida (ex.: `dinossauro`), a resposta é **422 Unprocessable Entity**.

## 4. Consulte os dados

```bash
# todos os tutores, cada um com seus pets
curl http://127.0.0.1:8000/tutores

# só os gatos
curl "http://127.0.0.1:8000/pets?especie=gato"

# os pets do tutor 1
curl http://127.0.0.1:8000/tutores/1/pets
```

## Todas as rotas

| Método | Rota | O que faz | Respostas |
|---|---|---|---|
| POST | `/tutores` | Cadastra tutor | 201, 409, 422 |
| GET | `/tutores` | Lista tutores com seus pets | 200 |
| GET | `/tutores/{id}` | Busca tutor | 200, 404 |
| PATCH | `/tutores/{id}` | Altera campos do tutor | 200, 404, 409 |
| DELETE | `/tutores/{id}` | Exclui tutor e seus pets | 204, 404 |
| GET | `/tutores/{id}/pets` | Pets de um tutor | 200, 404 |
| POST | `/pets` | Cadastra pet | 201, 404, 422 |
| GET | `/pets?especie=gato` | Lista pets, com filtro opcional | 200 |
| GET | `/pets/{id}` | Busca pet | 200, 404 |
| PATCH | `/pets/{id}` | Altera campos do pet | 200, 404 |
| DELETE | `/pets/{id}` | Exclui pet | 204, 404 |

:::tip[PATCH altera só o que for enviado]
Para trocar apenas o telefone, envie `{"telefone": "82988887777"}`. Os demais campos ficam como estavam.
:::

Para entender como a API processa cada requisição por dentro, veja a [Visão geral da arquitetura](../arquitetura/visao-geral.md).

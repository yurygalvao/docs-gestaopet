---
sidebar_position: 3
title: Padrões de projeto
description: Padrões de projeto aplicados no código do GestãoPet e onde encontrá-los.
---

# Padrões de projeto

O GestãoPet foi escrito para mostrar, em código real, os padrões de projeto que o FastAPI aplica ou incentiva.

| Padrão | Onde | Como aparece |
|---|---|---|
| Injeção de Dependência / IoC | `app/dependencies.py` | `Depends(...)` monta `get_db → Repository → Service` |
| Decorator | `app/routers/` | `@router.get` e `@router.post` transformam funções comuns em rotas |
| Repository | `app/repositories/` | `BaseRepository[ModelT]` isola o acesso a dados dos serviços |
| Data Mapper | `app/models/entities.py` | modelos sem `save()`; a Session faz o mapeamento objeto ↔ tabela |
| Unit of Work | `app/db/session.py` | uma Session por requisição: `commit` em sucesso, `rollback` em erro |
| DTO | `app/schemas/dtos.py` | `TutorCreate`, `TutorUpdate` e `TutorRead` separados do modelo |
| Singleton | `app/core/config.py` | `@lru_cache` em `get_settings()` |
| Chain of Responsibility | `app/main.py` | middleware repassa a requisição com `call_next` |

## Unit of Work na prática

Cada requisição recebe uma sessão nova. Ou tudo o que ela alterou é gravado, ou nada é:

```python title="app/db/session.py" {4-5,7}
def get_db() -> Generator[Session, None, None]:
    db = SessionLocal()
    try:
        yield db
        db.commit()
    except Exception:
        db.rollback()
        raise
    finally:
        db.close()
```

:::note[Data Mapper × Active Record]
No Laravel e no Rails, o próprio objeto se grava (`$pet->save()`), o que é o padrão Active Record. No GestãoPet o objeto não sabe que existe banco: quem grava é a Session.
:::

Para ver onde cada camada se encaixa, volte à [Visão geral da arquitetura](./visao-geral.md).

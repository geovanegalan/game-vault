# 🛠️ Especificação Técnica - GameVault

Este documento descreve o modelo de dados da aplicação GameVault, incluindo as entidades e seus relacionamentos.

---

## 1. Modelo de Dados (Diagrama ER)

O sistema é composto por entidades que representam os jogos consumidos de uma API externa e os dados armazenados localmente pelo usuário.

```mermaid
erDiagram
    GAME ||--o{ FAVORITE : references
    GAME {
        int id PK
        string name
        string background_image
        float rating
        string description
    }
    FAVORITE {
        int id PK
        string name
        string platform
        string status
        float rating
        string addedAt
    }

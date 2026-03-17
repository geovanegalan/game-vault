# 📄 Product Requirements Document (PRD) - GameVault - Sistema Web de Gerenciamento de Biblioteca de Jogos

## Autor: Geovane Galan Fiuza 

## 1. Descrição: 

Com o crescimento da indústria de jogos digitais, muitos usuários possuem uma grande quantidade de jogos distribuídos em diferentes plataformas, dificultando a organização e acompanhamento do que já jogaram ou desejam jogar.

Além disso, encontrar informações rápidas sobre jogos, como descrição, avaliação e imagem, nem sempre é prático em uma única ferramenta.

Dessa forma, surge a necessidade de uma aplicação que permita ao usuário consultar jogos e organizar sua própria biblioteca pessoal.

## 2. Atores do Sistema

**Visitante:** Usuário que acessa a aplicação e pode visualizar e buscar jogos disponíveis através de uma API pública.

**Usuário:** Pode gerenciar sua biblioteca pessoal de jogos, adicionando jogos aos favoritos, visualizando detalhes e acompanhando o status dos jogos.

## 3. Histórias de Usuário e Escopo 

Abaixo estão as funcionalidades escritas sob a perspecitiva do usuário final, que joga videogames e deseja organizar sua biblioteca pessoal de jogos, acompanhar seu progresso ou descobrir novos títulos.

### 🎮 Épico 1: Exploração de Jogos

- **US01 - Listar Jogos:** Como um Visitante, quero visualizar uma lista de jogos com imagem, nome e avaliação, para explorar títulos disponíveis.

  - _Critérios de Aceitação:_ Os jogos devem ser carregados de uma API pública; cada item deve exibir imagem, nome e nota; a listagem deve ser responsiva.

- **US02 - Buscar Jogos:** Como um Visitante, quero pesquisar jogos pelo nome, para encontrar títulos específicos.

  - _Critérios de Aceitação:_ A busca deve filtrar os jogos dinamicamente; deve funcionar mesmo com nomes parciais.

- **US03 - Visualizar Detalhes:** Como um Visitante, quero visualizar informações detalhadas de um jogo, para conhecer melhor o título.

  - _Critérios de Aceitação:_ Deve exibir imagem, descrição, plataformas e avaliação; os dados devem vir da API.

### 📚 Épico 2: Biblioteca do Usuário

- **US04 - Adicionar aos Favoritos:** Como um Usuário, quero adicionar jogos à minha biblioteca pessoal, para organizar os jogos que gosto.

  - _Critérios de Aceitação:_ O jogo deve ser salvo no JSON Server; não deve permitir duplicatas.

- **US05 - Listar Biblioteca:** Como um Usuário, quero visualizar minha lista de jogos salvos, para acompanhar minha coleção.

  - _Critérios de Aceitação:_ Os dados devem ser carregados do JSON Server; a listagem deve ser exibida em formato de cards ou tabela.

- **US06 - Remover Jogo:** Como um Usuário, quero remover jogos da minha biblioteca, para manter minha lista atualizada.

  - _Critérios de Aceitação:_ O item deve ser removido do JSON Server e da interface imediatamente.

### 📝 Épico 3: Cadastro Manual de Jogos

- **US08 - Validação de Formulário:** Como um Usuário, quero receber feedback ao preencher o formulário incorretamente, para corrigir erros antes de enviar.

  - _Critérios de Aceitação:_ Deve validar campos obrigatórios; utilizar validação HTML e JavaScript; exibir mensagens de erro.



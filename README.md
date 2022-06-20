# Project Talker Manager

O projeto consiste de uma API REST seguindo os padrões RESTIFULL para:

  - listar
  - filtrar
  - pesquisar
  - editar
  - criar 
  - deletar 

## Utilização 

1. Clonar repositório 
2. Instalar as dependências `npm install`
3. rodar o comando `npm run dev`


## Rotas

Localmente as rotas irão rodar na porta 3000

### POST/login

Essa é uma rota de cadastro, onde deve-se passar pelo body da requisição um email e senha, e é retornado um token aleatório

`http://localhost:3000/login`


### GET/talker

Essa é uma rota que lista todos os paletrantes

`http://localhost:3000/talker`


### GET/talker/search

Essa é uma rota que permite filtrar o palestrante pelo nome, sendo necessário passar um token através do headers da requisição

`http://localhost:3000/talker/search?q=name`

Exemplo de token 

headers: {
    'Content-Type': 'application/json'
    authorization: '2FsdGVkX1+NcBEVW'
  }

### GET/talker/:id 

Essa rota retorna as informações do palestrante filtrado pelo id, sendo necessário passar um token através do headers da requisição

`http://localhost:3000/talker/:id`

### DELETE/talker/:id 

Essa rota permite deletar um palestrate através do seu id, sendo necessário passar um token através do headers da requisição

`http://localhost:3000/talker/:id`

### POST/talker

Essa rota permite a criação de um novo paletrante, sendo necessário passar um token através do headers da requisição. E as informações sobre o palestrante no body da requisição como mostra o exemplo a seguir

{
  "id": 1,
  "name": "Ana",
  "age": 56,
  "talk": {
    "watchedAt": "22/10/2019",
    "rate": 4
  }
}

`http://localhost:3000/talker`

### PUT/talker/:id

Essa rota permite editar as informações de um palestrante, sendo necessário passar o id do palestrante na rota 

`http://localhost:3000/talker/:id`

Também é necessário passar um token através do headers da requisição e as informação a serem atualizadas através do body 
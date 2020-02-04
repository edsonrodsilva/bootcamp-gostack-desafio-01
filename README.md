<p align="center">
  <img src="https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/bootcamp-header.png" alt="gostack" width="200">
</p>

Bootcamp GoStack - Módulo 01 / Desafio 01

Aplicação para armazenar projetos e suas tarefas.

OBS: Por se tratar de um projeto com finalidade de aplicar conhecimentos sobre APIs e Middlewares, não possui conexão com banco de dados.

## Tecnologias e ferramentas

<ul>
<li>NodeJs</li>
<li>Express</li>
<li>Nodemon para desenvolvimento</li>
</ul>

<p> Foram abordados conceitos de rotas, CRUD, middleware, desestruturação, filtros e mais...</p>

#### Inicio

#### Instalar as dependências:

```
npm install
```
ou
```
yarn
```

#### Executar a aplicação:

```
node src/index.js
```
ou
```
npm run dev
```
ou
```
yarn dev
```

#### Endereço: **http://localhost:3000**

**Rodas da aplicação**

Listar todos projetos
GET - '/projects'

Exibi um projeto
GET - '/projects/1'

Cadastra projeto
POST - '/projects'

request: { "id": 2, "title": "título do projeto" } (json)

atualizar um projeto
param int id - Id do projeto
PUT - '/projects/:id'
corpo da requisição: { title: "título do projeto" } (json)

deleta um projeto
param int id - Id do projeto
DELETE - '/projects/:id'


**Tarefas**
Lista todas as tarefas de um projeto
GET - '/projects/:id/tasks'

Cadastra tarefa para um projeto
POST - '/projects/:id/tasks'
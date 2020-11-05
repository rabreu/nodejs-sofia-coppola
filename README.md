# nodejs-sofia-coppola

Desafio da semana 13 do curso de backend da [{ reprograma }](https://github.com/reprograma).

Esta API manipula todos os trabalhos realizados pela [Sofia Coppola](https://www.imdb.com/name/nm0001068/). 

Todas as informações foram retiradas da [IMDB API](https://imdb-api.com/swagger/index.html).

## Ferramentas

- nodejs
- nodemon
- express
- cors
- mongoDB
- [IMDB API](https://imdb-api.com/swagger/index.html)

## Comandos

### Importar JSON para o MongoDB
`mongoimport --db=reprograma --collection=sofiacoppola --jsonArray --file=./src/data/data.json`

### Iniciar API

`npm install && npm start`

### Endpoints

Método | Caminho | Descrição
------ | ------- | ---------:
GET | /coppola_works | Retorna todos os trabalhos.
GET | /coppola_works/_:_id_ | Retorna um trabalho obtido pela _id_.
POST | /coppola_works | Adiciona um trabalho.
PUT | /coppola_works/_:_id_ | Altera um trabalho.
DELETE | /coppola_works/_:_id_ | Deleta um trabalho.
GET | /coppola_works_as_director | Retorna todos os trabalhos realizados pela Sofia Coppola como Diretora.

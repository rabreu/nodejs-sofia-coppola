# nodejs-sofia-coppola

Desafio da semana 13 do curso de backend da [{ reprograma }](https://github.com/reprograma).

Esta API manipula todos os trabalhos realizados pela Sofia Coppola. 

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

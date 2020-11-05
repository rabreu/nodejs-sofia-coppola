const express = require('express');
const app = express();

const database = require('./models/repository')
database.connect()

const works = require('./routes/workRoutes');

app.use(express.json());
app.use('/', works);

module.exports = app;

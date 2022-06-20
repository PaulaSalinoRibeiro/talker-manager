const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route');

const app = express();
app.use(bodyParser.json());

const HTTP_OK_STATUS = 200;
const PORT = '3000';

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.use('/', route);

app.listen(PORT, () => {
  console.log('Online');
});

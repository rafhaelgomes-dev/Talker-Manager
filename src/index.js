const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/talkersRouter');
const routesLogin = require('./routes/loginRouter');

const app = express();
app.use(bodyParser.json());

const HTTP_OK_STATUS = 200;
const PORT = '3000';

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.use('/talker', routes);
app.use('/login', routesLogin);

app.listen(PORT, () => {
  console.log('Online');
});

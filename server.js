const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');

const app = express();

app.set('port', process.env.PORT);
app.use(logger('dev'));
app.use(bodyParser.json());

require('./routes')(app);

app.listen(3000);

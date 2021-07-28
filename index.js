const express = require('express');
const app = express();
const routes = require('./routes/index');
const port = 5000;
const bodyParser = require('body-parser');

app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/

app.use('/api/', routes);
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })
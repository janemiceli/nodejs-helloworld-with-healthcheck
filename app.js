const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;

const express = require('express');
const app = express()


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/healthcheck', require('./healthcheck.routes'));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
}) 
// const http = require('http');
// const express = require("express");
// const path = require('path');
// const app = express();

// const hostname = '127.0.0.1';
// const port = 3000;




// set the templete engine of pug
// app.set('view engine', 'pug');

// directory set pug
// app.set('views', './src.views')
// app.set('views', path.join(__dirname, 'views'));

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });






const express = require('express');
const app = express();
const path = require('path');
const port = 3000;


// set the pug view engine

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
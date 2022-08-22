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
const fs = require('fs');
const { title } = require('process');
const port = 3000;

// EXPRESS CODES
app.use('/static', express.static('static'));   // For serving static files
app.use(express.urlencoded());   //middleware content view

//PUG CODES
app.set('view engine', 'pug');    // set the templete engine of pug
app.set('views', path.join(__dirname, 'views'));     // directory set pug



//ENDPOINT
// app.get('/basic', (req, res) => {
//   res.status(200).render('basic', { title: 'Hey there', message: 'This is pug templete engine.'});
// })

app.get('/', (req, res) => {
  const con = 'This is content.';
  const send = { 'title': 'pug templete', 'message': 'This is pug templete engine.', 'content': con};
  res.status(200).render('index.pug',send);
})

app.post('/', (req, res) =>{

  // use middleware
  // console.log(req.body);

    vname = req.body.Name;
    age = req.body.Age;
    address = req.body.Address;
    aboutdetails = req.body.AboutDetails;

    let OutputWrite = `The name of the clint is ${vname}, age is ${age}, address is ${address}, about detais is ${aboutdetails}`;
    fs.writeFileSync('CollectData.txt', OutputWrite);

  const send = {'message': "Successfully Submitted"};
  res.status(200).render('index.pug',send);
});

// START THE SERVER
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
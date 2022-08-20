const express = require("express");
const path = require("path");
const fs = require("fs");
const { Console } = require("console");
const app = express();
const port = 4000;

// EXPRESS SPECIFIC STUFF
// app.use(express.static('public', options));
app.use('/public', express.static('public'));  //For serving static files
app.use(express.urlencoded());


//PUG STUFF
//app.set('view engine', 'html');  //set the template engine as pug
//app.set('views', path.join(__dirname, 'views'));  //set viewstemp directory


//ENDPOINT
app.get('/', (req, res) =>{
    const paras = { }
    res.status(200).render('index1.html', paras);
})


//SERVER START
app.listen(port, ()=>{
    console.log((`Application started successfully on port ${port}`));
})
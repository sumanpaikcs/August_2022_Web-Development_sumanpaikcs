const express = require("express");
const path = require("path");
const app = express();
port = 80;

// This is use only for serving static files
app.use('/static', express.static('static'))

// This is use for set the templete engine as pug
app.set('view engine', 'pug');


// pug file direcxtory
app.set('views', path.join(__dirname, 'views'));

// pug demo endpoint
app.get('/demo', (req, res) => {
    res.status(200).render('demo', { title: 'Hey', message: 'Hello there! this is how all these work' });
  });



app.get("/",(req,res) => {
    res.send("This is express app");
});
app.get("/about",(req,res) => {
    res.send("This is express app. This is the about section.");
});
app.get("/contact",(req,res) => {
    res.send("This is express app. This is contact section.");
});
app.post("/shop",(req,res) => {
    res.send("This is express app. This is post section.");
});
app.get("/services",(req,res) => {
    res.status(404).send("Error 404 the page is not found.");
});

app.listen(port, () =>{
    console.log(`The app is running ${port}`);
});
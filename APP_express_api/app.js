const express = require('express');
const app = express();
const port = 4000;

app.use('/static', express.static('static'));

app.get('/', (req, res) => {
  res.send('Hello World! This is express js and postman');
});
app.post('/', (req, res) => {
  res.send('Hello World! This is express js and postman This is web dev palylsit');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
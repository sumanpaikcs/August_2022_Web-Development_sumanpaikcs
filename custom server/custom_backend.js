const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;
const home = fs.readFileSync('index.html');
const about = fs.readFileSync('about.html');
const contact = fs.readFileSync('contact.html');
const shop = fs.readFileSync('shop.html');

const server = http.createServer((req, res) => {
    console.log(req.url)
    url = req.url;

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    if (url == '/') {
        res.end(home);
    }
    else if (url == '/about.html') {
        res.end(about);
    }
    else if (url == '/contact.html') {
        res.end(contact);
    }
    else if (url == '/shop.html') {
        res.end(shop);
    }
    else {
        res.statusCode = 200;
        res.end("404 not found");
    }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
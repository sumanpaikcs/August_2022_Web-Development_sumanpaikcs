const fs = require("fs");
fs.readFile("textOne.txt", "utf-8", (err,data) =>{
    console.log(data);
});

console.log("This is new line.");

const fs = require("fs");
let text = fs.readFileSync("delete.txt", "utf-8");
text = text.replace("node", "javascript");

console.log("The content of this file is: ");
console.log(text);

console.log("Creating a new file...");
fs.writeFileSync("suman.txt", text);
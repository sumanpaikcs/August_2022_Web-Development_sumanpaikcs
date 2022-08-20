// const fs = require("fs");
// const text = fs.readFileSync("textOne.txt", "utf-8");

// console.log(text);



const fs = require("fs");
let text = fs.readFileSync("textOne.txt", "utf-8");
text = text.replace("You", "We");


console.log("creating a new file...");
fs.writeFileSync("textTwo.txt", text);
console.log(text);



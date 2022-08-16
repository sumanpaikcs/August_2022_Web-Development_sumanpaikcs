// Synchronous or blocking
// ----line by line execution

// Asynchronous or non-blocking
// ----line by line execution not guranteed
// ----callbacks will fire

const fs = require("fs");
fs.readFile("delete.txt", "utf-8", (err,data)=>{
    console.log(data);
});
console.log("This is a message");
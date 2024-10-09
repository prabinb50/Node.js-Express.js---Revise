// sychronous VS asynchronous

const fs = require("fs");

// using sychronous
const data = fs.readFileSync("read.txt", "utf8");
console.log(data);
console.log("after the data using synchronous");

// using asynchronous -> accepts multiple requests
fs.readFile("read.txt", "utf8", (err, response)=>{
    console.log(response);
});
console.log("after the data using asynchronous");


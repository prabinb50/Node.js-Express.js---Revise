const fs = require ("fs");

// using synchronous
fs.writeFileSync("read.txt", "Prabin Joshi");

const readData = fs.readFileSync("read.txt", "utf8");
console.log(readData);
console.log("after the data using synchronous");


// using asynchronous
fs.readFile("read.txt", "utf8", (err, response)=>{
    console.log(response);
});
console.log("after the data using asynchronous");
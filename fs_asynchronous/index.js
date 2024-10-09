const fs = require("fs");

// CREATE
// We pass them a function as an argument - a callback - that gets called when that task completes.
// The callback has an argument that tells you whether the operation completed sucesfully.
// Now we need to say what to do when fs.writeFile has completed (even if it's nothing), and start checking for errors
fs.writeFile("read.txt", "Hello I am 22 yrs old.", (err) => {
    if (err) {
        console.error("Error writing to file:", err);
    } else {
        console.log("File written successfully!");
    }
});


// UPDATE
let data = `
My date of birth is 6th Oct, 2004.
My birthday month is Ashoj (October).`;

fs.appendFile("read.txt", data, (err)=>{
    console.log("Update a file successfully");
});




// READ
fs.readFile("read.txt", "utf8", (err, response)=>{
    console.log(response);
});
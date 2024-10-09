// CHALLENGE TIME

// 1. Create a folder named it anything you want
// Ans: I created a challengeTime folder inside the CRUD_Operation folder




// 2. Create a file in it named anything you want and data into it
const fs = require("fs");

let myData = `Name: Prabin Joshi
Age: 21
Sex: Male`;

fs.writeFileSync("bio.txt", myData);



// 3. Add more data into the file at the end of the existing data
let addMoreData = `
Nationality: Nepali
Address: Dhangadhi`;
fs.appendFileSync("bio.txt", addMoreData);



// 4. Rename the file named anything you want
fs.renameSync("bio.txt", "myBio.txt");



// 5. Read the data without getting the buffer data at first
const readData = fs.readFileSync("myBio.txt", "utf8");
console.log(readData);



// 6. delete both folder and file
    // for Delete the file 
    // fs.unlinkSync("bio.txt");
    // for delete the folder
    // fs.rmdirSync("challengeTime");

// 1. Create a folder named it anything you want.
// Ans: here i created a Challenge_Time folder inside the 6_CRUD_Operation_Using_Asyn folder.



// 2. Create a file in it name anything you want and data into it.
const fs = require("fs");

let writeData = `1st Semester: 3.6 gpa
2nd Semester: 3.7 gpa
3rd Semester: 3.2 gpa`;

fs.writeFile("result.txt", writeData, (err)=>{
    console.log("File is created");
});



// 3. Add more data into the file at the end of the existig data.
let updateWriteData = `
4th Semester: 3.6 gpa
5th Semester: 3.7 gpa
6th Semester: 3.2 gpa`;

fs.appendFile("result.txt", updateWriteData, (err)=>{
    console.log("File is updated");
});



// 4. Read the data without getting the buffer data at first.
fs.readFile("result.txt", "utf8", (err, response)=>{
    console.log(response);
});



// 5. Rename the file name to anything you want.
fs.rename("result.txt", "myresult.txt", (err)=>{
    console.log("File renamed");
    
});



// 6. Now delete both the folder and file.
    // for Delete the file 
    // fs.unlinkSync("myresult.txt", (err)=>{
    //      console.log("File delete");
    // });
 
    // for delete the folder
    // fs.rmdirSync("Challenge_Time" (err)=>{
    //      console.log("Folder delete");
    // });
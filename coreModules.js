// CRUD OPERATION IN NODE JS

// CREATE a new file
// note: writeFileSync ley k garxa vaney file present xa ki nai vaneyra check garxa first maa ani 
// if file present xaina vaney craete garxa file lai, if file present xa vaney data lai override gardinxa....
const fs = require("fs");

fs.writeFileSync ("read.text", "Hello my name is Prabin"); 

// override the above data (data:- Hello my name is Prabin)
fs.writeFileSync ("read.text", "Hello my name is Prabin Joshi."); 

// suppose read.txt vanney file maa already data xa rey ani feri tesmaa aru data haru add garnu paryo vaney
// chai....append means add extra data in both js and node.js
fs.appendFileSync("read.text", " Recently, I am studying at the capital city of Nepal, Kathmandu.")




// READ
// Node.js includes an additional data type called buffer
// (not avaliable in browser's Js)
// Buffer is mainly used to store binary data
// while reading from a file or receiving packets over the network
const bufferData = fs.readFileSync("read.text");
// console.log(bufferData);
orginalData = bufferData.toString();
console.log(orginalData);




// renaming the file name 
fs.renameSync("read.text", "readWrite.txt");
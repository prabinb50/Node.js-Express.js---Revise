const path = require ("path");

// path.dirname --> directory name
console.log(path.dirname("C:/Users/acer/OneDrive/Desktop/Node.js & Express.js/Node.js-Express.js---Revise/8_Path_Modules/path.js"));

// extension name --> for example .js, .html, etc
console.log(path.extname("C:/Users/acer/OneDrive/Desktop/Node.js & Express.js/Node.js-Express.js---Revise/8_Path_Modules/path.js"));

// name of the file
console.log(path.basename("C:/Users/acer/OneDrive/Desktop/Node.js & Express.js/Node.js-Express.js---Revise/8_Path_Modules/path.js"));

// directory name, extension name, and filename ekkaichoti chayo vaney yo method use garney
console.log(path.parse("C:/Users/acer/OneDrive/Desktop/Node.js & Express.js/Node.js-Express.js---Revise/8_Path_Modules/path.js"));

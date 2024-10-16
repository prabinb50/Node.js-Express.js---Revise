import chalk from "chalk";

console.log(chalk.blue("Hello world!"));
console.log(chalk.red.underline("Prabin Joshi"));
console.log(chalk.grey.inverse("Success"));



import validator from "validator";
// console.log(validator.isEmail("joshiprabin17@gmail.com"));
const validateEmail = validator.isEmail("joshiprabin17@gmail.com");
console.log(validateEmail ? chalk.green.inverse(validateEmail) : chalk.red.inverse(validateEmail));

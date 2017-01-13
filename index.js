var chalk = require("chalk");

var message = chalk.underline("Hello ") + (chalk.bold.yellow("World"));
console.log(message);
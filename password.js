const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log('Hello! Welcome to the Password Validator tool ')

reader.question(" What is your password? ", function(answer) {
    if (answer.length >= 10) {
        console.log('Great Password!')
    } else {
        console.log('Pick a better password')
    }
  });
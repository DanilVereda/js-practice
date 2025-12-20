let userInput = 'HELLO';
let userInputUpper = userInput.toUpperCase();
let result = false;

for (let i = 0; i < userInput.length; i++) {
  if (userInput.charCodeAt(i) === userInputUpper.charCodeAt(i)) {
    result = true;
  } else {
    result = false;
  }
}

console.log(result);

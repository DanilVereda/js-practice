const numbers = [2, 5, 6, 2.5, 12];
const doubledNumbers = numbers.map((number) => number * numbers.indexOf(number));
console.log(doubledNumbers);

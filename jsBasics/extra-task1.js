let array = [2, 11, 7, 3, 17];

let sortedArray = array.toSorted((a, b) => a - b);
console.log(sortedArray);
let newArray = sortedArray.slice(1, sortedArray.length - 1);
console.log(newArray);
let sum = newArray.reduce((acc, value) => acc + value, 0);
console.log(sum);

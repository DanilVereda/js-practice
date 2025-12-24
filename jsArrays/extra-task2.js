// Sum of two lowest positive integers;

function sumLowestPositive(array) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] >= 0 && Number.isInteger(array[i])) {
      newArray.push(array[i]);
    }
  }
  newArray.sort((a, b) => a - b);
  return newArray[0] + newArray[1];
}

console.log(sumLowestPositive([-5, -1, 5.5, 19, 8, 6, 4.45, 3, 4]));

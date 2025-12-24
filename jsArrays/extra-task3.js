// Between extremes;

function betweenExtremes(array) {
  let newArray = array.sort((a, b) => a - b);
  return newArray[newArray.length - 1] - newArray[0];
}

console.log(betweenExtremes([1, 5, 19, 8, 6, 7, 3, 4]));

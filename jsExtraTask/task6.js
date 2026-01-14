function smallerRight(array) {
  let newArray = [];
  let currentNumber = 0;
  let counter = 0;
  for (let i = 0; i < array.length; i++) {
    currentNumber = array[i];
    for (let j = i; j < array.length; j++) {
      if (currentNumber > array[j]) {
        counter++;
      }
    }
    newArray.push(counter);
    counter = 0;
  }
  return newArray;
}

console.log(smallerRight([4, 3, 2, 1, 5, 2]));

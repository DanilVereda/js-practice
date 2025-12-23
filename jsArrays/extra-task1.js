// Calculate average

function average(array) {
  if (array.length !== 0) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
      sum += array[i];
    }
    return sum / array.length;
  } else {
    return 'Your array is empty!';
  }
}

console.log(average([1, 3, 5, 7, 12]));

// Calculate average with reduce method

function average1(array) {
  if (array.length !== 0) {
    const sum = array.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    return sum / array.length;
  } else {
    return 'Your array is empty!';
  }
}

console.log(average1([]));
